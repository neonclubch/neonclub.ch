import axios from "axios";

const STRIPE_API_URL = process.env.NEXT_PUBLIC_STRIPE_API_URL;

if (!STRIPE_API_URL) {
  console.warn("NEXT_PUBLIC_STRIPE_API_URL is not set.");
}

const stripeClient = axios.create({
  baseURL: STRIPE_API_URL,
  headers: { "Content-Type": "application/json" },
});

export interface CheckoutParams {
  priceId: string;
  mode: "subscription" | "payment";
  locale: "de" | "en";
  successUrl: string;
  cancelUrl: string;
}

export interface PortalRequestParams {
  email: string;
  locale: "de" | "en";
  returnUrl: string;
}

/**
 * Creates a Stripe Checkout Session and returns the checkout URL.
 */
export async function createCheckoutSession(
  params: CheckoutParams,
): Promise<string> {
  const { data } = await stripeClient.post<{ url: string }>(
    "/checkout",
    params,
  );

  return data.url;
}

/**
 * Requests a magic link email for managing an existing donation.
 * Throws an AxiosError with status 404 if no donation is found.
 */
export async function requestPortalLink(
  params: PortalRequestParams,
): Promise<void> {
  await stripeClient.post("/portal/request", params);
}
