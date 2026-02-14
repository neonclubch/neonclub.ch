import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";

import { getContent } from "@/lib/content";
import { DonationPicker } from "@/components/donation-picker";
import { ManageDonation } from "@/components/manage-donation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const content = await getContent("donate", locale);

  return {
    title: locale === "de" ? "Spenden" : "Donate",
    description: content.subtitle.slice(0, 160),
  };
}

export default async function DonatePage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const content = await getContent("donate", locale);

  return (
    <article className="py-16 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xs font-mono text-foreground/20 uppercase tracking-widest mb-16 md:mb-24">
          {content.title}
        </h1>

        <p className="text-base md:text-lg text-foreground/50 leading-relaxed mb-16 max-w-2xl italic">
          {content.subtitle}
        </p>

        <DonationPicker content={content} locale={locale} />

        <section className="mt-32 md:mt-40">
          <div className="neon-line w-12 mb-8" />
          <ManageDonation content={content} locale={locale} />
        </section>
      </div>
    </article>
  );
}
