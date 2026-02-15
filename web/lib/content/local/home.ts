import type { PageContent } from "../types";
import type { Locale } from "@/i18n/config";

const content: Record<Locale, PageContent> = {
  de: {
    meta: { title: "NEON" },
    blocks: [
      {
        component: "hero",
        animated: true,
        subtitle: "Neue Elektronische Organisation für Nachtkultur",
        fullHeight: true,
      },
      {
        component: "neonQuote",
        lines: [
          '"Mauern können weichen, doch {{das Dancefloor ist eine Haltung}}, kein Raum."',
        ],
      },
      {
        component: "internalLink",
        label: "Zum Manifesto",
        href: "/manifesto",
      },
    ],
  },
  en: {
    meta: { title: "NEON" },
    blocks: [
      {
        component: "hero",
        animated: true,
        subtitle: "New Electronic Organisation for Nightculture",
        fullHeight: true,
      },
      {
        component: "neonQuote",
        lines: [
          '"The walls may be closing in, but the {{dancefloor is an idea}}, not a location."',
        ],
      },
      {
        component: "internalLink",
        label: "Read the Manifesto",
        href: "/manifesto",
      },
    ],
  },
};

export default content;
