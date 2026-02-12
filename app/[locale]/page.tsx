import type { Locale } from "@/i18n/config";

import NextLink from "next/link";

import { getContent } from "@/lib/content";
import { Events } from "@/components/events";
import { parseNeonMarkers } from "@/components/neon-text";

type Props = { params: { locale: Locale } };

export default async function Home({ params: { locale } }: Props) {
  const content = await getContent("home", locale);

  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="min-h-[92vh] flex flex-col items-center justify-center px-6 relative">
        <div className="text-center">
          <h1
            className="text-7xl md:text-8xl lg:text-[10rem] font-display font-black tracking-display leading-none text-transparent neon-flicker-glow"
            style={{
              WebkitTextStroke: "1.5px rgb(var(--neon))",
              textIndent: "0.25em",
            }}
          >
            NEON
          </h1>
          <p
            className="mt-8 text-[0.6875rem] md:text-xs font-mono text-foreground/30 uppercase tracking-[0.35em]"
            style={{ textIndent: "0.35em" }}
          >
            {content.tagline}
          </p>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-14 bg-gradient-to-b from-transparent to-neon/30 animate-pulse-line" />
        </div>
      </section>

      {/* ── Manifesto excerpt ─────────────────────── */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-foreground/70">
            &ldquo;{parseNeonMarkers(content.quote)}&rdquo;
          </blockquote>
          <div className="mt-14">
            <NextLink
              className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neon/60 hover:text-neon transition-colors duration-300"
              href={`/${locale}/manifesto`}
            >
              {content.readManifestoLabel}
              <span aria-hidden="true">&rarr;</span>
            </NextLink>
          </div>
        </div>
      </section>

      {/* ── Events ────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <Events />
        </div>
      </section>
    </>
  );
}
