import type { Locale } from "@/i18n/config";

import { Metadata } from "next";

import { getContent } from "@/lib/content";
import { Markdown } from "@/components/markdown";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = await getContent("impressum", params.locale);

  return { title: content.title };
}

export default async function ImpressumPage({ params: { locale } }: Props) {
  const content = await getContent("impressum", locale);

  return (
    <section className="flex flex-grow">
      <div className="mx-auto flex flex-col gap-4 py-8 md:py-10 lg:max-w-5xl px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
          {content.title}
        </h1>
        <Markdown content={content.body} />
      </div>
    </section>
  );
}
