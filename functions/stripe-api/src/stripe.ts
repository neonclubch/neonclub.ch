import Stripe from "stripe";

import { createLogger } from "./logger.js";

const log = createLogger("stripe");

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY environment variable is required");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

log.debug("Stripe client initialized");
