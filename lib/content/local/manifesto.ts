import type { ManifestoContent } from "../types";
import type { Locale } from "@/i18n/config";

const content: Record<Locale, ManifestoContent> = {
  en: {
    subtitle: "A Manifesto for the Night",
    sections: [
      {
        number: "I",
        verb: "WE OBSERVE",
        title: "The Erasure of the Urban Soul",
        intro:
          "We observe the systemic thinning of the spaces that once allowed subcultures to breathe, mutate, and thrive.",
        points: [
          {
            title: "The Death of the Vacuum",
            text: 'We observe the rapid erasure of "urban vacuums"\u2014those marginal, industrial ruins that once provided the low-cost freedom necessary for radical artistic experimentation.',
          },
          {
            title: "The Colonization of Culture",
            text: 'We see our culture being weaponized as "location branding" for city marketing, where the image of a vibrant nightlife is sold while the reality of its practitioners is pushed to the periphery.',
          },
          {
            title: "The Regulatory Stranglehold",
            text: 'We observe an environment where the "Agent of Change" principle is ignored, allowing luxury residential interests to prioritize silence over the cultural heartbeat of the city.',
          },
          {
            title: "The Rise of Sterile Homogeneity",
            text: "We see a narrowing of the cultural spectrum, where economic pressure forces venues to favor safe, commercial hits over the risky, the avant-garde, and the subcultural.",
          },
          {
            title: "The Trap of Festivalization",
            text: 'We observe the replacement of consistent, place-based community life with temporary, high-priced "spectacles" that prioritize one-off profit over long-term social cohesion.',
          },
        ],
      },
      {
        number: "II",
        verb: "WE ACKNOWLEDGE",
        title: "The Loss of the Social Alchemy",
        intro:
          "We recognize that when a club disappears, society loses far more than a venue; it loses its most vital laboratory of human connection.",
        points: [
          {
            title: "The Radical Melting Pot",
            text: "We acknowledge that the dancefloor is one of the last remaining sites of true social mixing\u2014where the CEO and the student, the stranger and the friend, share a single frequency across all socioeconomic divides.",
          },
          {
            title: "The Sanctuary of Identity",
            text: 'We acknowledge that for marginalized groups and the LGBTQ+ community, these spaces are not "leisure"\u2014they are essential "safe spaces" for identity formation and collective survival.',
          },
          {
            title: "The Power of the Prosumer",
            text: 'We recognize that in our culture, there is no "audience"; we acknowledge that through dance and participation, every individual acts as a "prosumer" who co-creates the cultural energy of the night.',
          },
          {
            title: "The Fragility of Living Heritage",
            text: 'We acknowledge that electronic music culture is an "intangible heritage" that cannot be archived in a museum; it must be practiced in the physical world, or its rhythmic memory will fade.',
          },
          {
            title: "The Void of Spontaneity",
            text: 'We acknowledge that the loss of physical venues means the loss of serendipity\u2014the "social magic" that happens when people of different backgrounds and orientations collide in an unregulated environment.',
          },
        ],
      },
      {
        number: "III",
        verb: "WE STRIVE",
        title: "To Transcend the Four Walls",
        intro:
          "We commit to a future where culture is defined by its spirit, not its real estate. We will experiment, adapt, and reclaim.",
        points: [
          {
            title: "To Reclaim the City as a Laboratory",
            text: 'We strive to move beyond the "stationary club" by reclaiming urban space through nomadic sound systems, pop-up interventions, and the tactical use of "interzone" spaces.',
          },
          {
            title: "To Design for Radical Inclusivity",
            text: "We strive to create formats that intentionally mix diverse backgrounds and orientations, ensuring the dancefloor remains a democratic bridge across social divides.",
          },
          {
            title: "To Democratize the Experience",
            text: "We strive to utilize accessible technology and decentralized organizing to lower barriers to entry, ensuring that our culture remains a participatory act rather than a consumed product.",
          },
          {
            title: "To Turn Barriers into Catalysts",
            text: "We strive to co-opt the limitations of the modern city\u2014responding to noise regulations and spatial scarcity with innovative audio formats and invisible, agile gatherings.",
          },
          {
            title: "To Protect Subcultural Autonomy",
            text: 'We strive to ensure that our creative mission remains independent of the "for a profit" trap, building a community-supported infrastructure that values social impact over commercial turnover.',
          },
        ],
      },
    ],
    closingLines: [
      "The walls may be closing in, but the dancefloor is an idea, not a location.",
      "NEON is the light that refuses to go out.",
    ],
  },
  de: {
    subtitle: "Ein Manifest für die Nacht",
    sections: [
      {
        number: "I",
        verb: "WIR BEOBACHTEN",
        title: "Die Verdrängung der urbanen Seele",
        intro:
          "Wir beobachten die systematische Ausdünnung jener Räume, die es Subkulturen einst ermöglichten, zu atmen, sich zu wandeln und zu entfalten.",
        points: [
          {
            title: "Das Sterben der Freiräume",
            text: "Wir beobachten das rasant fortschreitende Verschwinden „urbaner Vakuums“ – jener marginalen Industriebrachen und Nischen, die einst die kostengünstige Freiheit für radikale künstlerische Experimente boten.",
          },
          {
            title: "Die Kolonialisierung der Kultur",
            text: "Wir erleben, wie unsere Kultur als „Standortmarketing“ instrumentalisiert wird. Das Image eines pulsierenden Nachtlebens wird verkauft, während die Lebensrealität derer, die es erschaffen, an den Rand gedrängt wird.",
          },
          {
            title: "Der regulatorische Würgegriff",
            text: "Wir beobachten ein Umfeld, in dem das „Agent of Change“-Prinzip ignoriert wird, was dazu führt, dass die Ruhebedürfnisse von Luxus-Wohnbauprojekten über den kulturellen Herzschlag der Stadt gestellt werden.",
          },
          {
            title: "Der Vormarsch steriler Homogenität",
            text: "Wir sehen eine Verengung des kulturellen Spektrums: Wirtschaftlicher Druck zwingt Veranstaltungsorte dazu, auf sichere, kommerzielle Hits zu setzen, anstatt dem Riskanten, der Avantgarde und der Subkultur Raum zu geben.",
          },
          {
            title: "Die Falle der Festivalisierung",
            text: "Wir beobachten, wie beständiges, ortsgebundenes Gemeinschaftsleben durch temporäre, hochpreisige „Spektakel“ ersetzt wird, die kurzfristigen Profit über langfristigen sozialen Zusammenhalt stellen.",
          },
        ],
      },
      {
        number: "II",
        verb: "WIR ANERKENNEN",
        title: "Der Verlust der sozialen Alchemie",
        intro:
          "Wir erkennen an: Wenn ein Club verschwindet, verliert die Gesellschaft weit mehr als einen Veranstaltungsort – sie verliert ihr wichtigstes Labor für menschliche Begegnung.",
        points: [
          {
            title: "Der radikale Schmelztiegel",
            text: "Wir anerkennen, dass die Tanzfläche einer der letzten Orte echter sozialer Durchmischung ist – wo CEO und Student:in, Fremde und Freund:innen über alle sozioökonomischen Gräben hinweg dieselbe Frequenz teilen.",
          },
          {
            title: "Das Refugium der Identität",
            text: "Wir anerkennen, dass diese Räume für marginalisierte Gruppen und die LGBTQ+ Community keine „Freizeitbeschäftigung“ sind – sie sind lebensnotwendige „Safe Spaces“ für die Identitätsbildung und das kollektive Überleben.",
          },
          {
            title: "Die Kraft der Prosumenten",
            text: "Wir erkennen an, dass es in unserer Kultur kein passives „Publikum“ gibt. Durch Tanz und Teilhabe wird jede:r Einzelne zum „Prosumenten“, der die kulturelle Energie der Nacht aktiv mitgestaltet.",
          },
          {
            title: "Die Zerbrechlichkeit des lebendigen Erbes",
            text: "Wir anerkennen, dass die elektronische Musikkultur ein „immaterielles Kulturerbe“ ist, das nicht im Museum archiviert werden kann. Es muss in der physischen Welt gelebt werden, sonst verblasst sein rhythmisches Gedächtnis.",
          },
          {
            title: "Die Leere der Spontaneität",
            text: "Wir anerkennen, dass der Verlust physischer Orte das Ende der Unvorhersehbarkeit bedeutet – jener „sozialen Magie“, die entsteht, wenn Menschen unterschiedlichster Herkunft in einem unregulierten Umfeld aufeinandertreffen.",
          },
        ],
      },
      {
        number: "III",
        verb: "WIR STREBEN",
        title: "Über die vier Wände hinaus",
        intro:
          "Wir bekennen uns zu einer Zukunft, in der Kultur durch ihren Geist definiert wird, nicht durch ihren Grundbesitz. Wir werden experimentieren, uns anpassen und Räume zurückerobern.",
        points: [
          {
            title: "Die Stadt als Labor zurückerobern",
            text: "Wir streben danach, das Konzept des „stationären Clubs“ zu erweitern, indem wir uns den urbanen Raum durch nomadische Soundsysteme, Pop-up-Interventionen und die taktische Nutzung von Zwischenzonen aneignen.",
          },
          {
            title: "Radikale Inklusivität gestalten",
            text: "Wir streben danach, Formate zu schaffen, die bewusst verschiedene Hintergründe und Orientierungen zusammenbringen, damit die Tanzfläche eine demokratische Brücke über soziale Trennlinien bleibt.",
          },
          {
            title: "Das Erlebnis demokratisieren",
            text: "Wir streben danach, zugängliche Technologien und dezentrale Organisation zu nutzen, um Eintrittshürden abzubauen. Unsere Kultur soll ein partizipativer Akt bleiben und kein konsumierbares Produkt werden.",
          },
          {
            title: "Barrieren als Katalysatoren nutzen",
            text: "Wir streben danach, die Einschränkungen der modernen Stadt produktiv zu wenden – auf Lärmschutzverordnungen und Platzmangel antworten wir mit innovativen Audioformaten und agilen, unsichtbaren Zusammenkünften.",
          },
          {
            title: "Subkulturelle Autonomie schützen",
            text: "Wir streben danach, unsere kreative Mission von der „Profitfalle“ unabhängig zu machen, indem wir eine gemeinschaftsgetragene Infrastruktur aufbauen, die soziale Wirkung über kommerziellen Umsatz stellt.",
          },
        ],
      },
    ],
    closingLines: [
      "Die Mauern mögen enger werden, doch die Tanzfläche ist eine Idee, kein Ort.",
      "NEON ist das Licht, das sich weigert auszugehen.",
    ],
  },
};

export default content;
