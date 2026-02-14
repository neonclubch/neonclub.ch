"use client";

import type { DonateContent } from "@/lib/content/types";
import type { Locale } from "@/i18n/config";
import type { DonationAmount, DonationMode } from "@/config/donations";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import clsx from "clsx";

import { donationTiers, priceIds } from "@/config/donations";
import { createCheckoutSession } from "@/helpers/stripeApi";

interface Props {
  content: DonateContent;
  locale: Locale;
}

export function DonationPicker({ content, locale }: Props) {
  const [mode, setMode] = useState<DonationMode>("recurring");
  const [loading, setLoading] = useState<DonationAmount | null>(null);
  const [success, setSuccess] = useState(false);

  // Check for ?success=true in the URL on mount
  if (typeof window !== "undefined" && !success) {
    const params = new URLSearchParams(window.location.search);

    if (params.get("success") === "true") {
      setSuccess(true);
    }
  }

  async function handleDonate(amount: DonationAmount) {
    setLoading(amount);

    try {
      const stripeMode = mode === "recurring" ? "subscription" : "payment";
      const priceId = priceIds[mode][amount];

      const url = await createCheckoutSession({
        priceId,
        mode: stripeMode,
        locale,
        successUrl: `${window.location.origin}/${locale}/donate?success=true`,
        cancelUrl: `${window.location.origin}/${locale}/donate`,
      });

      window.location.href = url;
    } catch {
      setLoading(null);
    }
  }

  if (success) {
    return (
      <Card radius="sm" className="border border-neon/30 bg-transparent">
        <CardBody className="px-8 py-10 text-center">
          <p className="text-lg text-neon font-mono uppercase tracking-widest mb-2">
            ✓
          </p>
          <p className="text-base md:text-lg text-foreground/60 leading-relaxed">
            {content.successMessage}
          </p>
        </CardBody>
      </Card>
    );
  }

  return (
    <div>
      {/* Mode toggle */}
      <div className="flex gap-0 mb-12">
        <Button
          className={clsx(
            "font-mono text-xs uppercase tracking-widest px-6 transition-all duration-300 rounded-none rounded-l-sm",
            mode === "recurring"
              ? "border-neon/60 text-neon bg-neon/10"
              : "border-foreground/10 text-foreground/30 hover:text-foreground/50",
          )}
          radius="none"
          variant="bordered"
          onPress={() => setMode("recurring")}
        >
          {content.recurringLabel}
        </Button>
        <Button
          className={clsx(
            "font-mono text-xs uppercase tracking-widest px-6 transition-all duration-300 rounded-none rounded-r-sm -ml-px",
            mode === "onetime"
              ? "border-neon/60 text-neon bg-neon/10"
              : "border-foreground/10 text-foreground/30 hover:text-foreground/50",
          )}
          radius="none"
          variant="bordered"
          onPress={() => setMode("onetime")}
        >
          {content.onetimeLabel}
        </Button>
      </div>

      {/* Tier cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {donationTiers.map((tier) => {
          const isLoading = loading === tier.amount;

          return (
            <Card
              key={tier.amount}
              isPressable
              className={clsx(
                "border border-foreground/10 bg-transparent transition-all duration-300",
                "hover:border-neon/60 hover:bg-neon/5",
                isLoading && "opacity-60",
              )}
              isDisabled={loading !== null}
              radius="none"
              onPress={() => handleDonate(tier.amount)}
            >
              <CardBody className="px-6 py-10 text-center">
                <span className="block text-2xl md:text-3xl font-bold text-foreground/90 mb-2 group-hover:text-neon transition-colors duration-300">
                  {tier.label}
                </span>
                {mode === "recurring" && (
                  <span className="block text-xs font-mono text-foreground/30 uppercase tracking-widest">
                    {content.perYear}
                  </span>
                )}
                <span className="block mt-6 font-mono text-xs uppercase tracking-widest text-foreground/25 group-hover:text-neon/60 transition-colors duration-300">
                  {isLoading ? "…" : content.ctaLabel}
                </span>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
