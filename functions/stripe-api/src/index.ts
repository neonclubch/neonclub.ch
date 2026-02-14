import * as functions from "@google-cloud/functions-framework";
import { getRequestListener } from "@hono/node-server";
import { arktypeValidator } from "@hono/arktype-validator";
import { Hono } from "hono";
import { cors } from "hono/cors";

import {
  checkoutSchema,
  portalSchema,
  portalRequestSchema,
} from "./schemas.js";
import { stripe } from "./stripe.js";
import { createToken, verifyToken } from "./token.js";
import { sendMagicLinkEmail, isEmailEnabled } from "./email.js";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: process.env.ALLOWED_ORIGIN || "*",
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type"],
  }),
);

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

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      locale: locale === "de" ? "de" : "en",
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return c.json({ url: session.url });
  },
);

/**
 * POST /portal
 * Looks up a Stripe customer by email and creates a Customer Portal session.
 */
app.post("/portal", arktypeValidator("json", portalSchema), async (c) => {
  const { email, returnUrl } = c.req.valid("json");

  const customers = await stripe.customers.list({ email, limit: 1 });

  if (customers.data.length === 0) {
    return c.json({ error: "No membership found for this email." }, 404);
  }

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: customers.data[0].id,
    return_url: returnUrl,
  });

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

    const customers = await stripe.customers.list({ email, limit: 1 });

    if (customers.data.length === 0) {
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

    await sendMagicLinkEmail({ to: email, magicLink, locale });

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

  if (!verifyToken(token, email, exp)) {
    return c.text("This link has expired or is invalid.", 403);
  }

  const customers = await stripe.customers.list({ email, limit: 1 });

  if (customers.data.length === 0) {
    return c.text("No donation found.", 404);
  }

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: customers.data[0].id,
    return_url: returnUrl,
  });

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

  return c.json(tiers);
});

// One-line adapter: Hono fetch -> Node.js (req, res) -> functions-framework
functions.http("stripeApi", getRequestListener(app.fetch));

export default app;
