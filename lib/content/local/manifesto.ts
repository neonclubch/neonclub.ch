import type { ManifestoContent } from "../types";
import type { Locale } from "@/i18n/config";

const content: Record<Locale, ManifestoContent> = {
  en: {
    subtitle: "A Manifesto for the Night",
    sections: [
      {
        number: "I",
        verb: "WE OBSERVE",
        title: "The Unyielding Pulse",
        intro:
          "We witness a city in transformation, where the vital spaces for subcultures to breathe are threatened by the pressure to conform. We observe, but we do not surrender.",
        points: [
          {
            title: "The Value of the Void",
            text: 'We recognize the immense power of "urban vacuums"—those marginal, industrial spaces that provide the unregulated freedom necessary for radical artistic experimentation.',
          },
          {
            title: "Depth Over Surface",
            text: "We reject the reduction of culture to a mere marketing image. We fight for the raw, unpolished reality of the practitioners who create the city's heartbeat, not just its polished facade.",
          },
          {
            title: "Defending the Rhythm",
            text: 'We advocate for a city where the "Agent of Change" principle is respected, balancing residential needs with the vital, non-negotiable cultural rhythm of the night.',
          },
          {
            title: "The Radical Fringe",
            text: "We celebrate the risky, the avant-garde, and the subcultural. We resist the pressure to favor safe, predictable standards over the dangerous beauty of the unknown.",
          },
          {
            title: "Deep Roots, Not Fleeting Trends",
            text: "We value consistent, place-based community life over temporary spectacles, prioritizing long-term social cohesion over the pursuit of short-term hype.",
          },
        ],
      },
      {
        number: "II",
        verb: "WE ACKNOWLEDGE",
        title: "The Alchemy of the Underground",
        intro:
          "We recognize that a club is more than a venue; it is a temporary autonomous zone for human connection, radical expression, and collective joy.",
        points: [
          {
            title: "The Radical Melting Pot",
            text: "We acknowledge the dancefloor as a rare site of true social mixing—where different backgrounds and orientations share a single, non-verbal frequency across all divides.",
          },
          {
            title: "The Sanctuary of Identity",
            text: 'We celebrate these spaces as essential "safe havens" for marginalized groups and the LGBTQ+ community, fostering identity formation and collective power.',
          },
          {
            title: "The Death of the Spectator",
            text: 'We reject passive consumption. In our culture, there are no passengers; through dance and presence, every individual acts as a "prosumer" who co-creates the night.',
          },
          {
            title: "Living Heritage",
            text: 'We acknowledge that electronic music culture is a living "intangible heritage" that thrives only in the physical world, keeping its rhythmic memory vibrant and untamed.',
          },
          {
            title: "The Spark of Serendipity",
            text: "We celebrate the social magic that happens when diverse humans collide in open, unregulated environments, free from the curation of algorithms.",
          },
        ],
      },
      {
        number: "III",
        verb: "WE STRIVE",
        title: "The Unbound Future",
        intro:
          "We build a future where culture is defined by its spirit, not its real estate. We experiment, adapt, and refuse to be contained by traditional walls.",
        points: [
          {
            title: "To Reclaim the City",
            text: 'We strive to decouple culture from real estate by activating urban space through nomadic sound systems, pop-up interventions, and the tactical use of "interzone" spaces.',
          },
          {
            title: "To Design for Radical Inclusivity",
            text: "We strive to create formats that intentionally mix diverse social strata, ensuring the dancefloor remains a democratic bridge rather than an elite enclave.",
          },
          {
            title: "To Democratize the Experience",
            text: "We strive to utilize accessible technology and decentralized organizing to lower barriers to entry, ensuring that our culture remains a participatory act, not a luxury product.",
          },
          {
            title: "Innovation through Resistance",
            text: "We strive to use limitations as creative sparks—responding to regulations and spatial scarcity with innovative audio formats and agile, invisible gatherings.",
          },
          {
            title: "Creative Sovereignty",
            text: "We strive to build a community-supported infrastructure that values social impact and artistic freedom, ensuring our mission remains independent and self-determined.",
          },
        ],
      },
    ],
    closingLines: [
      "The walls may shift, but the {{dancefloor is an idea}}, not a location.",
      "NEON is the {{light that refuses to go out}}.",
    ],
  },
  de: {
    subtitle: "Ein Manifest für die Nacht",
    sections: [
      {
        number: "I",
        verb: "WIR BEOBACHTEN",
        title: "Der unbeugsame Puls",
        intro:
          "Wir sehen eine Stadt im Wandel, in der die lebensnotwendigen Räume für Subkulturen durch den Druck zur Konformität bedroht sind. Wir beobachten, aber wir kapitulieren nicht.",
        points: [
          {
            title: "Der Wert der Leere",
            text: "Wir erkennen das enorme Potenzial „urbaner Vakuums“ – jener marginalen Industriebrachen, die die unregulierte Freiheit für radikale künstlerische Experimente bieten.",
          },
          {
            title: "Tiefe statt Oberfläche",
            text: "Wir lehnen die Reduktion von Kultur auf ein bloßes Marketingbild ab. Wir kämpfen für die ungeschönte Realität derer, die den Herzschlag der Stadt erschaffen, nicht für die polierte Fassade.",
          },
          {
            title: "Den Rhythmus verteidigen",
            text: "Wir plädieren für ein Umfeld, in dem das „Agent of Change“-Prinzip respektiert wird und kulturelle Freiräume als nicht verhandelbarer Teil der Stadtentwicklung bestehen.",
          },
          {
            title: "Die radikale Nische",
            text: "Wir feiern das Riskante, die Avantgarde und die Subkultur. Wir widerstehen dem Druck, sichere Standards der gefährlichen Schönheit des Unbekannten vorzuziehen.",
          },
          {
            title: "Tiefe Wurzeln statt flüchtige Trends",
            text: "Wir schätzen beständiges, ortsgebundenes Gemeinschaftsleben und stellen langfristigen sozialen Zusammenhalt über die Jagd nach kurzfristigem Hype.",
          },
        ],
      },
      {
        number: "II",
        verb: "WIR ANERKENNEN",
        title: "Die Alchemie des Untergrunds",
        intro:
          "Wir erkennen an: Ein Club ist mehr als ein Veranstaltungsort – er ist eine temporäre autonome Zone für menschliche Begegnung, Ausdruck und Freude.",
        points: [
          {
            title: "Der radikale Schmelztiegel",
            text: "Wir anerkennen, dass die Tanzfläche ein Ort echter sozialer Durchmischung ist – wo Menschen über alle Grenzen hinweg dieselbe Frequenz teilen.",
          },
          {
            title: "Das Refugium der Identität",
            text: "Wir feiern diese Räume als essentielle „Safe Spaces“ für marginalisierte Gruppen und die LGBTQ+ Community, die Identität und kollektive Stärke fördern.",
          },
          {
            title: "Der Tod des Zuschauers",
            text: "Wir erkennen an, dass es in unserer Kultur keine Passagiere gibt. Durch Tanz und Präsenz wird jede:r Einzelne zum „Prosumenten“, der die Nacht miterschafft.",
          },
          {
            title: "Lebendiges Erbe",
            text: "Wir anerkennen, dass die elektronische Musikkultur ein lebendiges „immaterielles Kulturerbe“ ist, das nur in der physischen Welt gedeiht und so sein Gedächtnis wild und lebendig hält.",
          },
          {
            title: "Der Funke des Chaos",
            text: "Wir feiern die soziale Magie, die entsteht, wenn Menschen unterschiedlichster Herkunft in einem unregulierten Umfeld frei von Algorithmen aufeinandertreffen.",
          },
        ],
      },
      {
        number: "III",
        verb: "WIR STREBEN",
        title: "Die entfesselte Zukunft",
        intro:
          "Wir bauen an einer Zukunft, in der Kultur durch ihren Geist definiert wird, nicht durch Grundbesitz. Wir experimentieren, passen uns an und lassen uns nicht einsperren.",
        points: [
          {
            title: "Die Stadt zurückerobern",
            text: "Wir streben danach, das Modell des „stationären Clubs“ zu sprengen, indem wir den urbanen Raum durch nomadische Soundsysteme und taktische Interventionen aktivieren.",
          },
          {
            title: "Radikale Inklusivität gestalten",
            text: "Wir streben danach, Formate zu schaffen, die bewusst soziale Schichten mischen, damit die Tanzfläche eine demokratische Brücke bleibt, keine VIP-Lounge.",
          },
          {
            title: "Das Erlebnis demokratisieren",
            text: "Wir streben danach, zugängliche Technologien zu nutzen, um Eintrittshürden abzubauen. Unsere Kultur soll ein partizipativer Akt bleiben, kein Luxusprodukt.",
          },
          {
            title: "Innovation durch Widerstand",
            text: "Wir nutzen Einschränkungen als kreativen Funken – auf Regulierungen und Platzmangel antworten wir mit innovativen Audioformaten und agilen Zusammenkünften.",
          },
          {
            title: "Kreative Souveränität",
            text: "Wir streben danach, eine gemeinschaftsgetragene Infrastruktur aufzubauen, die soziale Wirkung über alles stellt und unsere Mission unabhängig hält.",
          },
        ],
      },
    ],
    closingLines: [
      "Mauern können weichen, doch {{das Dancefloor ist eine Haltung}}, kein Raum.",
      "NEON ist das Licht, das {{niemals verlischt}}."
    ],
  },
};

export default content;
