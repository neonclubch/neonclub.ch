import type { HomeContent } from "../types";
import type { Locale } from "@/i18n/config";

const content: Record<Locale, HomeContent> = {
  de: {
    tagline: "Neue Elektronische Organisation für Nachtkultur",
    quote:
      "Die Mauern mögen enger werden, doch der Dancefloor ist eine Idee, kein Ort.",
    readManifestoLabel: "Zum Manifest",
  },
  en: {
    tagline: "New Electronic Organisation for Nightculture",
    quote:
      "The walls may be closing in, but the dancefloor is an idea, not a location.",
    readManifestoLabel: "Read the Manifesto",
  },
};

export default content;
