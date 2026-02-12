import type { Locale } from "@/i18n/config";

import { Metadata } from "next";

import { getContent } from "@/lib/content";
import { Markdown } from "@/components/markdown";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = await getContent("privacy-policy", params.locale);

  return { title: content.title };
}

export default async function PrivacyPolicyPage({ params: { locale } }: Props) {
  const content = await getContent("privacy-policy", locale);

  return (
    <section className="flex flex-grow">
      <div className="container flex flex-col gap-4 py-8 md:py-10 lg:max-w-5xl px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
          {content.title}
        </h1>
        <p className="text-xs font-mono text-foreground/30 mb-8">
          Last updated: {content.lastUpdated}
        </p>
        <Markdown content={content.body} />
      </div>
    </section>
  );
}
