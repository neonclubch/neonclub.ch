import type { Locale } from "@/i18n/config";

import { Metadata } from "next";

import { getContent } from "@/lib/content";
import { parseNeonMarkers } from "@/components/neon-text";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.locale === "de" ? "Manifest" : "Manifesto",
  };
}

export default async function ManifestoPage({ params: { locale } }: Props) {
  const content = await getContent("manifesto", locale);

  return (
    <article className="py-16 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xs font-mono text-foreground/20 uppercase tracking-widest mb-16 md:mb-24">
          {content.subtitle}
        </h1>

        {content.sections.map((section) => (
          <ManifestoSection
            key={section.number}
            intro={section.intro}
            number={section.number}
            points={section.points}
            title={section.title}
            verb={section.verb}
          />
        ))}

        {/* ── Closing ────────────────────────────── */}
        <footer className="mt-24 md:mt-36 pt-14 border-t border-white/[0.06]">
          {content.closingLines.map((line, i) => (
            <p
              key={i}
              className={`${i > 0 ? "mt-8 " : ""}text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-foreground/70`}
            >
              {parseNeonMarkers(line)}
            </p>
          ))}
        </footer>
      </div>
    </article>
  );
}

/* ── Section component ──────────────────────────── */

function ManifestoSection({
  number,
  verb,
  title,
  intro,
  points,
}: {
  number: string;
  verb: string;
  title: string;
  intro: string;
  points: { title: string; text: string }[];
}) {
  return (
    <section className="mb-24 md:mb-32">
      <div className="neon-line w-12 mb-8" />
      <span className="block text-xs font-mono text-neon/40 tracking-[0.3em] uppercase mb-3">
        {number}.
      </span>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground/90 mb-1">
        {verb}
      </h2>
      <h3 className="text-base md:text-lg text-foreground/35 font-light mb-8">
        {title}
      </h3>
      <p className="text-base md:text-lg text-foreground/50 leading-relaxed mb-12 max-w-2xl italic">
        {intro}
      </p>

      <div className="space-y-10">
        {points.map((point, i) => (
          <div
            key={i}
            className="pl-6 border-l border-white/[0.06] hover:border-neon/30 transition-colors duration-500"
          >
            <h4 className="text-sm font-mono font-medium text-foreground/70 mb-2 tracking-wide">
              {point.title}
            </h4>
            <p className="text-base text-foreground/40 leading-relaxed">
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
