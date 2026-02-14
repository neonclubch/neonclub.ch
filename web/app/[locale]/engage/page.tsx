import type { Locale } from "@/i18n/config";

import { Metadata } from "next";

import { getContent } from "@/lib/content";
import { Markdown } from "@/components/markdown";
import { NeonLink } from "@/components/neon-link";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const content = await getContent("engage", locale);

  return {
    title: locale === "de" ? "Mitwirken" : "Engage",
    description: content.intro.slice(0, 160),
  };
}

function CtaButton({ label, href }: { label: string; href: string }) {
  return (
    <div className="my-14">
      <NeonLink isExternal href={href}>
        {label}
      </NeonLink>
    </div>
  );
}

export default async function EngagePage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const content = await getContent("engage", locale);

  return (
    <article className="py-16 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xs font-mono text-foreground/20 uppercase tracking-widest mb-16 md:mb-24">
          {content.title}
        </h1>

        <div className="text-base md:text-lg text-foreground/50 leading-relaxed mb-16 max-w-2xl italic">
          <Markdown content={content.intro} />
        </div>

        {content.sections.map((section, i) => (
          <section key={section.number} className="mb-24 md:mb-32">
            <div className="neon-line w-12 mb-8" />
            <span className="block text-xs font-mono text-neon/40 tracking-[0.3em] uppercase mb-3">
              {section.number}.
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground/90 mb-1">
              {section.verb}
            </h2>
            <h3 className="text-base md:text-lg text-foreground/35 font-light mb-8">
              {section.title}
            </h3>
            <div className="text-base md:text-lg text-foreground/40 leading-relaxed">
              <Markdown content={section.body} />
            </div>
            {section.cta && (
              <CtaButton href={section.cta.href} label={section.cta.label} />
            )}
          </section>
        ))}

        <div className="text-base md:text-lg text-foreground/50 leading-relaxed italic mb-1">
          {content.footerLines[0]}
        </div>
        <div className="text-base md:text-lg text-foreground/50 leading-relaxed italic">
          {content.footerLines[1]}
        </div>
      </div>
    </article>
  );
}
