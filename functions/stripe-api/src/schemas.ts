import { type } from "arktype";

export const checkoutSchema = type({
  priceId: "string",
  locale: "'de' | 'en'",
  successUrl: "string",
  cancelUrl: "string",
});

export const portalSchema = type({
  email: "string.email",
  returnUrl: "string",
});
