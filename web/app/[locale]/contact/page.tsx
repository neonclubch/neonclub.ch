import type { Locale } from "@/i18n/config";

import { Metadata } from "next";

import { getContent } from "@/lib/content";
import { Markdown } from "@/components/markdown";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = await getContent("contact", params.locale);

  return { title: content.title };
}

export default async function ContactPage({ params: { locale } }: Props) {
  const content = await getContent("contact", locale);

  return (
    <>
      <section className="min-h-[20vh] flex flex-grow items-center justify-center">
        <div className="mx-auto flex flex-col gap-4 py-8 md:py-10 px-6 items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            {content.title}
          </h1>
        </div>
      </section>
      <section className="flex flex-grow">
        <div className="mx-auto flex flex-col gap-4 py-8 md:py-10 lg:max-w-5xl px-6">
          <h2 className="text-lg font-semibold mt-10 mb-3 text-foreground/90">
            {content.subtitle}
          </h2>
          <Markdown content={content.body} />
        </div>
      </section>
    </>
  );
}
