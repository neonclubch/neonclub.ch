import type { ManifestoContent } from "../types";
import type { Locale } from "@/i18n/config";

const content: Record<Locale, ManifestoContent> = {
  en: {
    subtitle: "A Manifesto for the Night",
    sections: [
      {
        number: "I",
        verb: "WE OBSERVE",
        title: "The Systemic Erosion",
        intro: "Structural changes are limiting the freedom of our culture.",
        points: [
          {
            title: "The Vanishing Void",
            text: 'We observe the disappearance of "urban vacuums"—those marginal, industrial voids where low-cost freedom once allowed for radical electronic experimentation.',
          },
          {
            title: "Regulatory Friction",
            text: "We observe a growing imbalance where noise regulations and urban development prioritize silence over the vital, non-negotiable sonic rhythm of the night.",
          },
          {
            title: "Economic Displacement",
            text: "We observe how rising real estate pressures convert subcultural sanctuaries into exclusive spaces, pushing the underground further to the fringes of the city.",
          },
          {
            title: "Cultural Standardization",
            text: "We observe a shift toward safe, commercialized formats that favor high-profit spectacles over the diverse, unpredictable beauty of the avant-garde.",
          },
          {
            title: "The Loss of Rhythmic Memory",
            text: "We observe how the closing of permanent spaces breaks the continuity of our community, replacing deep-rooted culture with fleeting, disconnected events.",
          },
        ],
      },
      {
        number: "II",
        verb: "WE ACKNOWLEDGE",
        title: "The Alchemy of the Collective",
        intro:
          "The night is more than entertainment; it is a sociological necessity. It is a space where the rigid structures of the day dissolve into a shared electronic frequency.",
        points: [
          {
            title: "The Radical Melting Pot",
            text: "We acknowledge the dancefloor as a site of true social mixing—where diverse backgrounds and orientations synchronize to a single synthetic pulse.",
          },
          {
            title: "Sanctuaries of Identity",
            text: "We celebrate these spaces as essential havens for marginalized voices and the LGBTQ+ community, where identity is expressed and collective power is forged.",
          },
          {
            title: "The Rise of the Prosumer",
            text: 'We reject passive consumption. In our world, every individual is a "prosumer" who co-creates the energy, the safety, and the cultural depth of the night.',
          },
          {
            title: "Intangible Sonic Heritage",
            text: "We acknowledge that electronic music culture is a living heritage that must be practiced physically to remain vibrant, untamed, and relevant.",
          },
          {
            title: "The Spark of Serendipity",
            text: "We celebrate the social magic that happens when people collide in unregulated, open environments, free from the curation of digital algorithms.",
          },
        ],
      },
      {
        number: "III",
        verb: "WE STRIVE",
        title: "The Path Forward",
        intro:
          "The walls of a venue are temporary, but our culture is fluid. We build the infrastructure for a resilient, independent, and unbound future.",
        points: [
          {
            title: "To Reclaim Urban Space",
            text: "We strive to decouple culture from fixed real estate, utilizing nomadic sound systems and tactical interventions to activate the city's hidden zones.",
          },
          {
            title: "To Design for Inclusivity",
            text: "We strive to create formats that intentionally bridge social divides, ensuring the dancefloor remains a democratic bridge for all.",
          },
          {
            title: "To Democratize Production",
            text: "We utilize accessible technology to lower barriers, ensuring that our culture remains a participatory act driven by the collective labor of the community.",
          },
          {
            title: "Innovation through Resistance",
            text: "We respond to spatial and regulatory limitations with creative agility, developing innovative formats and agile, invisible gatherings.",
          },
          {
            title: "Subcultural Sovereignty",
            text: "We strive for creative independence, building community-supported models that prioritize sociological impact over commercial turnover.",
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
        title: "Die systematische Erosion",
        intro: "Strukturelle Veränderungen schränken die Freiheit unserer Kultur ein.",
        points: [
          {
            title: "Das schwindende Vakuum",
            text: "Wir beobachten das Verschwinden „urbaner Vakuums“ – jener marginalen Industriebrachen, die den akustischen Freiraum für radikale elektronische Experimente boten.",
          },
          {
            title: "Regulatorische Reibung",
            text: "Wir beobachten ein Ungleichgewicht, in dem Lärmschutz und Stadtentwicklung Stille über den lebensnotwendigen, klanglichen Rhythmus der Nacht stellen.",
          },
          {
            title: "Ökonomische Verdrängung",
            text: "Wir beobachten, wie Immobilienfaktoren subkulturelle Zufluchtsorte in exklusive Räume verwandeln und den Untergrund an den Rand der Stadt drängen.",
          },
          {
            title: "Kulturelle Standardisierung",
            text: "Wir beobachten einen Trend zu kommerzialisierten Formaten, die kurzfristigen Profit über die unvorhersehbare Schönheit der Avantgarde stellen.",
          },
          {
            title: "Verlust des rhythmischen Gedächtnisses",
            text: "Wir beobachten, wie die Schließung fester Orte die Kontinuität unserer Gemeinschaft bricht und tiefe Verwurzelung durch flüchtige Events ersetzt wird.",
          },
        ],
      },
      {
        number: "II",
        verb: "WIR ANERKENNEN",
        title: "Die Alchemie des Kollektivs",
        intro:
          "Die Nacht ist mehr als Unterhaltung; sie ist eine soziologische Notwendigkeit – ein Raum, in dem starre Tagesstrukturen in einer gemeinsamen elektronischen Frequenz zerfließen.",
        points: [
          {
            title: "Der radikale Schmelztiegel",
            text: "Wir anerkennen die Tanzfläche als Ort echter sozialer Durchmischung, an dem alle Teilnehmenden zu einem einzigen synthetischen Puls verschmelzen.",
          },
          {
            title: "Refugien der Identität",
            text: "Wir feiern diese Räume als essentielle Schutzräume für marginalisierte Stimmen und die LGBTQ+ Community, in denen Identität gelebt und kollektive Stärke geschmiedet wird.",
          },
          {
            title: "Die Ära der Prosumenten",
            text: "Wir lehnen passiven Konsum ab. In unserer Welt ist jede:r Einzelne ein „Prosument“, der die Energie, die Sicherheit und die kulturelle Tiefe der Nacht mitgestaltet.",
          },
          {
            title: "Immaterielles klangliches Erbe",
            text: "Die elektronische Musikkultur ist ein lebendiges Erbe, das physisch praktiziert werden muss, um rhythmisch wild, ungezähmt und relevant zu bleiben.",
          },
          {
            title: "Der Funke der Serendipität",
            text: "Wir feiern die soziale Magie, die entsteht, wenn Menschen in unregulierten, offenen Räumen frei von digitalen Algorithmen aufeinandertreffen.",
          },
        ],
      },
      {
        number: "III",
        verb: "WIR STREBEN",
        title: "Der Weg nach vorn",
        intro:
          "Die Wände eines Ortes sind temporär, doch unsere Kultur ist flüssig. Wir bauen die Infrastruktur für eine resiliente, unabhängige und freie Zukunft.",
        points: [
          {
            title: "Stadtraum zurückerobern",
            text: "Wir entkoppeln Kultur von festen Immobilien und nutzen nomadische Soundsysteme sowie taktische Interventionen, um die verborgenen Zonen der Stadt zu aktivieren.",
          },
          {
            title: "Inklusivität gestalten",
            text: "Wir schaffen Formate, die bewusst soziale Schichten mischen und die Tanzfläche als demokratische Brücke für alle erhalten.",
          },
          {
            title: "Teilhabe demokratisieren",
            text: "Wir nutzen zugängliche Technologien, um Hürden abzubauen, damit unsere Kultur ein gemeinschaftliches Projekt bleibt, getragen von der Arbeit des Kollektivs.",
          },
          {
            title: "Innovation durch Widerstand",
            text: "Wir antworten auf räumliche und regulatorische Grenzen mit kreativer Agilität und entwickeln neue Formate sowie unsichtbare Zusammenkünfte.",
          },
          {
            title: "Subkulturelle Souveränität",
            text: "Wir streben nach kreativer Unabhängigkeit und bauen gemeinschaftsgetragene Modelle auf, die soziale Wirkung über kommerziellen Profit stellen.",
          },
        ],
      },
    ],
    closingLines: [
      "Mauern mögen weichen, doch die {{Tanzfläche ist eine Haltung}}, kein Ort.",
      "NEON ist das {{Licht, das niemals verlischt}}.",
    ],
  },
};

export default content;
