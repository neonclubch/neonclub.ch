import type { Locale } from "@/i18n/config";

import { Metadata } from "next";

import { getContent } from "@/lib/content";
import { Markdown } from "@/components/markdown";
import { NeonLink } from "@/components/neon-link";
import { siteConfig } from "@/config/site";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = await getContent("membership", params.locale);

  return {
    title: params.locale === "de" ? "Mitgliedschaft" : "Membership",
    description: content.intro.slice(0, 160),
  };
}

function JoinButton({ label }: { label: string }) {
  return (
    <div className="my-14">
      <NeonLink isExternal href={siteConfig.links.membership}>
        {label}
      </NeonLink>
    </div>
  );
}

export default async function MembershipPage({ params: { locale } }: Props) {
  const content = await getContent("membership", locale);

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground/90 mb-6">
          {content.title}
        </h1>

        <div className="text-base md:text-lg text-foreground/45 leading-relaxed mb-16">
          <Markdown content={content.intro} />
        </div>

        <div className="neon-line w-12 mb-12" />

        {content.sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground/90 mb-1">
              {section.title}
            </h2>
            <div className="text-base md:text-lg text-foreground/45 leading-relaxed">
              <Markdown content={section.body} />
            </div>
            {i < content.sections.length - 1 && (
              <>
                {i === 0 && <JoinButton label={content.ctaLabel} />}
                <div className="neon-line w-12 mb-12" />
              </>
            )}
          </div>
        ))}

        <div className="text-base md:text-lg text-foreground/50 leading-relaxed italic mb-1">
          {content.footerLines[0]}
        </div>
        <div className="text-base md:text-lg text-foreground/50 leading-relaxed italic">
          {content.footerLines[1]}
        </div>

        <JoinButton label={content.ctaLabel} />
      </div>
    </section>
  );
}
