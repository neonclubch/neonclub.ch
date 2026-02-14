import type { HomeContent } from "../types";
import type { Locale } from "@/i18n/config";

const content: Record<Locale, HomeContent> = {
  de: {
    tagline: "Neue Elektronische Organisation für Nachtkultur",
    quote:
      "Mauern können weichen, doch {{das Dancefloor ist eine Haltung}}, kein Raum.",
    readManifestoLabel: "Zum Manifesto",
  },
  en: {
    tagline: "New Electronic Organisation for Nightculture",
    quote:
      "The walls may be closing in, but the {{dancefloor is an idea}}, not a location.",
    readManifestoLabel: "Read the Manifesto",
  },
};

export default content;
