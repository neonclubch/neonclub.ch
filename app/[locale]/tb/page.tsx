import type { Locale } from "@/i18n/config";

import { Metadata } from "next";
import { Suspense } from "react";

import { getContent } from "@/lib/content";
import { Markdown } from "@/components/markdown";
import { Section } from "@/components/section";
import { Rsvp } from "@/components/rsvp";

type Props = { params: { locale: Locale } };

export async function generateMetadata(): Promise<Metadata> {
  return { title: "TechnoBosco 2025" };
}

export default async function TbPage({ params: { locale } }: Props) {
  const content = await getContent("tb", locale);

  return (
    <>
      <Section
        backgroundImage="/technobosco.jpg"
        className="items-center justify-center"
        sectionClassName="min-h-[20vh]"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
          {content.title}
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Rsvp
            buttonColor="success"
            buttonText={content.rsvpButtonText}
            buttonVariant="solid"
            className="flex justify-center"
            formLink={content.rsvpFormLink}
          />
        </Suspense>
      </Section>

      <Section className="lg:max-w-5xl px-6">
        <Markdown content={content.body} />

        <h2 className="text-xl md:text-2xl font-bold tracking-tight mt-14 mb-5">
          RSVP
        </h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Rsvp
            buttonColor="success"
            buttonText={content.rsvpFooterButtonText}
            buttonVariant="flat"
            formLink={content.rsvpFormLink}
          />
        </Suspense>

        <p className="text-base text-foreground/50 leading-relaxed mb-4 mt-8">
          Questions?{"\n"}
          <a
            className="text-neon/60 hover:text-neon underline underline-offset-4 transition-colors duration-300"
            href={content.contactWhatsapp}
            rel="noopener noreferrer"
            target="_blank"
          >
            Whatsapp
          </a>
          {" | "}
          <a
            className="text-neon/60 hover:text-neon underline underline-offset-4 transition-colors duration-300"
            href={`mailto:${content.contactEmail}`}
          >
            {content.contactEmail}
          </a>
        </p>
      </Section>
    </>
  );
}
