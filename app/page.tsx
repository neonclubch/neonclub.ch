import NextLink from "next/link";
import { Events } from "@/components/events";

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="min-h-[92vh] flex flex-col items-center justify-center px-6 relative">
        <div className="text-center">
          <h1
            className="text-7xl md:text-8xl lg:text-[10rem] font-display font-black tracking-display leading-none text-transparent neon-flicker-glow"
            style={{
              WebkitTextStroke: "1.5px #1ADC38",
              textIndent: "0.25em",
            }}
          >
            NEON
          </h1>
          <p className="mt-8 text-[11px] md:text-xs font-mono text-foreground/30 uppercase tracking-[0.35em]" style={{ textIndent: "0.35em" }}>
            Neue Elektronische Organisation für Nachtkultur
          </p>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-14 bg-gradient-to-b from-transparent to-[#1ADC38]/30 animate-pulse-line" />
        </div>
      </section>

      {/* ── Manifesto excerpt ─────────────────────── */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-foreground/70">
            &ldquo;The walls may be closing in, but the{" "}
            <span className="neon-text font-normal">
              dancefloor is an idea
            </span>
            , not a location.&rdquo;
          </blockquote>
          <div className="mt-14">
            <NextLink
              href="/manifesto"
              className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#1ADC38]/60 hover:text-[#1ADC38] transition-colors duration-300"
            >
              Read the Manifesto
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
