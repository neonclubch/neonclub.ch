export type DonationAmount = 35 | 50 | 100;
export type DonationMode = "recurring" | "onetime";

export const donationTiers = [
  { amount: 35 as const, label: "CHF 35.—" },
  { amount: 50 as const, label: "CHF 50.—" },
  { amount: 100 as const, label: "CHF 100.—" },
] as const;

export const priceIds: Record<DonationMode, Record<DonationAmount, string>> = {
  recurring: {
    35: process.env.NEXT_PUBLIC_STRIPE_PRICE_YEARLY_35 ?? "",
    50: process.env.NEXT_PUBLIC_STRIPE_PRICE_YEARLY_50 ?? "",
    100: process.env.NEXT_PUBLIC_STRIPE_PRICE_YEARLY_100 ?? "",
  },
  onetime: {
    35: process.env.NEXT_PUBLIC_STRIPE_PRICE_ONETIME_35 ?? "",
    50: process.env.NEXT_PUBLIC_STRIPE_PRICE_ONETIME_50 ?? "",
    100: process.env.NEXT_PUBLIC_STRIPE_PRICE_ONETIME_100 ?? "",
  },
};
