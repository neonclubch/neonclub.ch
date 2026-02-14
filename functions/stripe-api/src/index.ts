import * as functions from "@google-cloud/functions-framework";
import { getRequestListener } from "@hono/node-server";
import { arktypeValidator } from "@hono/arktype-validator";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { checkoutSchema, portalSchema } from "./schemas.js";
import { stripe } from "./stripe.js";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: process.env.ALLOWED_ORIGIN || "*",
    allowMethods: ["POST", "OPTIONS"],
    allowHeaders: ["Content-Type"],
  }),
);

/**
 * POST /checkout
 * Creates a Stripe Checkout Session for a subscription and returns the URL.
 */
app.post(
  "/checkout",
  arktypeValidator("json", checkoutSchema),
  async (c) => {
    const { priceId, locale, successUrl, cancelUrl } = c.req.valid("json");

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
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

// One-line adapter: Hono fetch -> Node.js (req, res) -> functions-framework
functions.http("stripeApi", getRequestListener(app.fetch));

export default app;
