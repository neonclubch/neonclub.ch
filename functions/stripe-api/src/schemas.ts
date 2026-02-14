import { type } from "arktype";

export const checkoutSchema = type({
  priceId: "string",
  mode: "'subscription' | 'payment'",
  locale: "'de' | 'en'",
  successUrl: "string",
  cancelUrl: "string",
});

export const portalSchema = type({
  email: "string.email",
  returnUrl: "string",
});

export const portalRequestSchema = type({
  email: "string.email",
  locale: "'de' | 'en'",
  returnUrl: "string",
});
