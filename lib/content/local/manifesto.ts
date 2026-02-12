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
        title: "Die Auslöschung der urbanen Seele",
        intro:
          "Wir beobachten die systematische Ausdünnung der Räume, die es Subkulturen einst ermöglichten, zu atmen, sich zu wandeln und zu gedeihen.",
        points: [
          {
            title: "Der Tod des Vakuums",
            text: "Wir beobachten das rasante Verschwinden der \u201Eurbanen Leerstellen\u201C \u2014 jener marginalen, industriellen Ruinen, die einst die kostengünstige Freiheit für radikale künstlerische Experimente boten.",
          },
          {
            title: "Die Kolonialisierung der Kultur",
            text: "Wir sehen, wie unsere Kultur als \u201EStandortmarketing\u201C für Städte instrumentalisiert wird \u2014 das Bild eines pulsierenden Nachtlebens wird verkauft, während die Realität seiner Akteur:innen an den Rand gedrängt wird.",
          },
          {
            title: "Der regulatorische Würgegriff",
            text: "Wir beobachten ein Umfeld, in dem das \u201EAgent of Change\u201C-Prinzip ignoriert wird und Luxuswohninteressen Stille über den kulturellen Herzschlag der Stadt stellen.",
          },
          {
            title: "Der Aufstieg steriler Gleichförmigkeit",
            text: "Wir sehen eine Verengung des kulturellen Spektrums, in der wirtschaftlicher Druck Veranstaltungsorte dazu zwingt, sichere, kommerzielle Hits dem Riskanten, der Avantgarde und dem Subkulturellen vorzuziehen.",
          },
          {
            title: "Die Falle der Festivalisierung",
            text: "Wir beobachten den Ersatz eines beständigen, ortsgebundenen Gemeinschaftslebens durch temporäre, hochpreisige \u201ESpektakel\u201C, die einmaligen Profit über langfristigen sozialen Zusammenhalt stellen.",
          },
        ],
      },
      {
        number: "II",
        verb: "WIR ANERKENNEN",
        title: "Den Verlust der sozialen Alchemie",
        intro:
          "Wir erkennen an, dass die Gesellschaft, wenn ein Club verschwindet, weit mehr verliert als einen Veranstaltungsort \u2014 sie verliert ihr wichtigstes Labor menschlicher Verbindung.",
        points: [
          {
            title: "Der radikale Schmelztiegel",
            text: "Wir anerkennen, dass die Tanzfläche einer der letzten Orte wahrer sozialer Durchmischung ist \u2014 wo CEO und Student:in, Fremde und Freund:in eine gemeinsame Frequenz über alle sozioökonomischen Grenzen hinweg teilen.",
          },
          {
            title: "Das Refugium der Identität",
            text: "Wir anerkennen, dass diese Räume für marginalisierte Gruppen und die LGBTQ+ Community nicht \u201EFreizeit\u201C sind \u2014 sie sind essentielle \u201ESafe Spaces\u201C für Identitätsbildung und kollektives Überleben.",
          },
          {
            title: "Die Kraft des Prosumenten",
            text: "Wir erkennen an, dass es in unserer Kultur kein \u201EPublikum\u201C gibt; durch Tanz und Teilhabe agiert jede:r Einzelne als \u201EProsument:in\u201C, der die kulturelle Energie der Nacht miterschafft.",
          },
          {
            title: "Die Fragilität des lebendigen Erbes",
            text: "Wir anerkennen, dass die Kultur der elektronischen Musik ein \u201Eimmaterielles Erbe\u201C ist, das nicht in einem Museum archiviert werden kann; es muss in der physischen Welt praktiziert werden, oder seine rhythmische Erinnerung wird verblassen.",
          },
          {
            title: "Die Leere der Spontaneität",
            text: "Wir anerkennen, dass der Verlust physischer Veranstaltungsorte den Verlust von Zufälligkeit bedeutet \u2014 die \u201Esoziale Magie\u201C, die entsteht, wenn Menschen unterschiedlicher Hintergründe in einem unregulierten Umfeld aufeinandertreffen.",
          },
        ],
      },
      {
        number: "III",
        verb: "WIR STREBEN",
        title: "Die vier Wände zu überwinden",
        intro:
          "Wir verpflichten uns zu einer Zukunft, in der Kultur durch ihren Geist definiert wird, nicht durch ihre Immobilien. Wir werden experimentieren, uns anpassen und zurückerobern.",
        points: [
          {
            title: "Die Stadt als Labor zurückerobern",
            text: "Wir streben danach, über den \u201Estationären Club\u201C hinauszugehen, indem wir urbanen Raum durch nomadische Soundsysteme, Pop-up-Interventionen und die taktische Nutzung von \u201EInterzone\u201C-Räumen zurückerobern.",
          },
          {
            title: "Radikale Inklusivität gestalten",
            text: "Wir streben danach, Formate zu schaffen, die bewusst verschiedene Hintergründe und Orientierungen zusammenbringen und sicherstellen, dass die Tanzfläche eine demokratische Brücke über soziale Grenzen hinweg bleibt.",
          },
          {
            title: "Das Erlebnis demokratisieren",
            text: "Wir streben danach, zugängliche Technologie und dezentrale Organisation zu nutzen, um Barrieren abzubauen und sicherzustellen, dass unsere Kultur ein partizipativer Akt bleibt und kein konsumiertes Produkt.",
          },
          {
            title: "Barrieren in Katalysatoren verwandeln",
            text: "Wir streben danach, die Einschränkungen der modernen Stadt zu nutzen \u2014 auf Lärmvorschriften und Raumknappheit mit innovativen Audioformaten und unsichtbaren, agilen Zusammenkünften zu reagieren.",
          },
          {
            title: "Subkulturelle Autonomie schützen",
            text: "Wir streben danach, sicherzustellen, dass unsere kreative Mission unabhängig von der \u201EGewinnfalle\u201C bleibt, und bauen eine gemeinschaftsgetragene Infrastruktur auf, die sozialen Impact über kommerziellen Umsatz stellt.",
          },
        ],
      },
    ],
    closingLines: [
      "Die Wände mögen enger werden, aber die Tanzfläche ist eine Idee, kein Ort.",
      "NEON ist das Licht, das sich weigert zu erlöschen.",
    ],
  },
};

export default content;
