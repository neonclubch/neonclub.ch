import type { HomeContent } from "../types";
import type { Locale } from "@/i18n/config";

const content: Record<Locale, HomeContent> = {
  de: {
    tagline: "Neue Elektronische Organisation für Nachtkultur",
    quote:
      "Die Wände mögen enger werden, aber die Tanzfläche ist eine Idee, kein Ort.",
    readManifestoLabel: "Manifest lesen",
  },
  en: {
    tagline: "Neue Elektronische Organisation für Nachtkultur",
    quote:
      "The walls may be closing in, but the dancefloor is an idea, not a location.",
    readManifestoLabel: "Read the Manifesto",
  },
};

export default content;
