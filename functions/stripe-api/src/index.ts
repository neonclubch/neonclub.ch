import * as functions from "@google-cloud/functions-framework";
import { getRequestListener } from "@hono/node-server";
import { arktypeValidator } from "@hono/arktype-validator";
import { Hono } from "hono";
import type { ContentfulStatusCode } from "hono/utils/http-status";
import { cors } from "hono/cors";

import {
  checkoutSchema,
  portalSchema,
  portalRequestSchema,
} from "./schemas.js";
import type Stripe from "stripe";
import { stripe } from "./stripe.js";
import { createToken, verifyToken } from "./token.js";
import { sendMagicLinkEmail, isEmailEnabled } from "./email.js";
import { createLogger } from "./logger.js";

const log = createLogger("http");

const app = new Hono();

/* ------------------------------------------------------------------ */
/*  Middleware                                                          */
/* ------------------------------------------------------------------ */

app.use(
  "*",
  cors({
    origin: process.env.ALLOWED_ORIGIN || "*",
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type"],
  }),
);

/** Request logger — logs method, path, status, and duration. */
app.use("*", async (c, next) => {
  const start = Date.now();

  await next();

  const ms = Date.now() - start;

  log.info(
    { method: c.req.method, path: c.req.path, status: c.res.status, ms },
    `${c.req.method} ${c.req.path} ${c.res.status} ${ms}ms`,
  );
});

/** Global error handler — logs the error and returns structured JSON. */
app.onError((err, c) => {
  log.error({ err, path: c.req.path, method: c.req.method }, err.message);

  const status = ("statusCode" in err ? err.statusCode : 500) as ContentfulStatusCode;

  return c.json({ error: err.message || "Internal server error" }, status);
});

/* ------------------------------------------------------------------ */
/*  Routes                                                             */
/* ------------------------------------------------------------------ */

/**
 * POST /checkout
 * Creates a Stripe Checkout Session and returns the URL.
 * Supports both subscription (recurring) and payment (one-time) modes.
 */
app.post(
  "/checkout",
  arktypeValidator("json", checkoutSchema),
  async (c) => {
    const { priceId, mode, locale, successUrl, cancelUrl } =
      c.req.valid("json");

    log.debug({ priceId, mode, locale }, "Creating checkout session");

    // TWINT only supports one-time payments, not subscriptions.
    // Apple Pay & Google Pay surface automatically when "card" is included.
    const paymentMethodTypes: Stripe.Checkout.SessionCreateParams["payment_method_types"] =
      mode === "payment"
        ? ["card", "twint", "link"]
        : ["card", "link"];

    const session = await stripe.checkout.sessions.create({
      mode,
      payment_method_types: paymentMethodTypes,
      line_items: [{ price: priceId, quantity: 1 }],
      locale: locale === "de" ? "de" : "en",
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    log.debug({ sessionId: session.id, url: session.url }, "Checkout session created");

    return c.json({ url: session.url });
  },
);

/**
 * POST /portal
 * Looks up a Stripe customer by email and creates a Customer Portal session.
 */
app.post("/portal", arktypeValidator("json", portalSchema), async (c) => {
  const { email, returnUrl } = c.req.valid("json");

  log.debug({ email }, "Looking up customer for portal");

  const customers = await stripe.customers.list({ email, limit: 1 });

  if (customers.data.length === 0) {
    log.debug({ email }, "No customer found for portal");

    return c.json({ error: "No membership found for this email." }, 404);
  }

  const customerId = customers.data[0].id;

  log.debug({ customerId }, "Customer found, creating portal session");

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });

  log.debug({ portalUrl: portalSession.url }, "Portal session created");

  return c.json({ url: portalSession.url });
});

/**
 * POST /portal/request
 * Sends a magic link email so the donor can securely access their Stripe portal.
 */
app.post(
  "/portal/request",
  arktypeValidator("json", portalRequestSchema),
  async (c) => {
    if (!isEmailEnabled) {
      return c.json({ error: "Email service is not configured." }, 503);
    }

    const { email, locale, returnUrl } = c.req.valid("json");

    log.debug({ email }, "Looking up customer for portal request");

    const customers = await stripe.customers.list({ email, limit: 1 });

    if (customers.data.length === 0) {
      log.debug({ email }, "No customer found for portal request");

      return c.json({ error: "No donation found for this email." }, 404);
    }

    const { token, exp } = createToken(email);

    const apiBaseUrl = process.env.API_BASE_URL;

    if (!apiBaseUrl) {
      return c.json({ error: "Server misconfiguration." }, 500);
    }

    const params = new URLSearchParams({
      token,
      email,
      exp,
      returnUrl,
    });
    const magicLink = `${apiBaseUrl}/portal/verify?${params.toString()}`;

    log.debug({ email, locale }, "Sending magic link email");

    await sendMagicLinkEmail({ to: email, magicLink, locale });

    log.debug({ email }, "Magic link email sent");

    return c.json({ sent: true });
  },
);

/**
 * GET /portal/verify
 * Verifies a magic link token and redirects to the Stripe Customer Portal.
 */
app.get("/portal/verify", async (c) => {
  const token = c.req.query("token");
  const email = c.req.query("email");
  const exp = c.req.query("exp");
  const returnUrl = c.req.query("returnUrl");

  if (!token || !email || !exp || !returnUrl) {
    return c.text("Invalid link.", 400);
  }

  const valid = verifyToken(token, email, exp);

  log.debug({ email, valid }, "Magic link token verification");

  if (!valid) {
    return c.text("This link has expired or is invalid.", 403);
  }

  const customers = await stripe.customers.list({ email, limit: 1 });

  if (customers.data.length === 0) {
    log.debug({ email }, "No customer found during verify");

    return c.text("No donation found.", 404);
  }

  const customerId = customers.data[0].id;

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });

  log.debug({ customerId }, "Redirecting to portal after verify");

  return c.redirect(portalSession.url);
});

/**
 * GET /donations
 * Returns active donation products and their prices, queried by metadata.
 * Products must have metadata: category=donation, donation_type=recurring|onetime.
 */
app.get("/donations", async (c) => {
  const products = await stripe.products.search({
    query: "metadata['category']:'donation' AND active:'true'",
  });

  log.debug({ productCount: products.data.length }, "Fetched donation products");

  const tiers: Record<string, { priceId: string; amount: number }[]> = {};

  for (const product of products.data) {
    const type = product.metadata.donation_type;
    const prices = await stripe.prices.list({
      product: product.id,
      active: true,
      currency: "chf",
    });

    tiers[type] = prices.data
      .sort((a, b) => (a.unit_amount ?? 0) - (b.unit_amount ?? 0))
      .map((p) => ({
        priceId: p.id,
        amount: (p.unit_amount ?? 0) / 100,
      }));
  }

  log.debug(
    { types: Object.keys(tiers), tierCounts: Object.fromEntries(Object.entries(tiers).map(([k, v]) => [k, v.length])) },
    "Donation tiers assembled",
  );

  return c.json(tiers);
});

// One-line adapter: Hono fetch -> Node.js (req, res) -> functions-framework
functions.http("stripeApi", getRequestListener(app.fetch));

export default app;
