import type { MembershipContent } from "../types";
import type { Locale } from "@/i18n/config";

const content: Record<Locale, MembershipContent> = {
  en: {
    title: "THE NIGHT BELONGS TO US.",
    intro:
      "The night is not just a destination; it is a shared experience to be claimed. Conventional clubbing sells tickets; we build worlds. We are the architects of the underground.",
    sections: [
      {
        title: "THE FOUNDATION OF INDEPENDENCE: CHF 35.\u2014",
        body: "We don't sell access. We fund independence. Your 35 francs are not a transaction\u2014they are vital support for cultural freedom. This fund fuels our nomadic sound systems, bypasses the barriers of the real estate market, and keeps the experiment untamed.",
      },
      {
        title: "THE HEARTBEAT: YOUR ENERGY.",
        body: "Even more than your money, we demand your presence. A rave is not something you watch; it is something you *are*. We invite the \u201CProsumer\u201D\u2014the active participant who refuses to be a spectator.\n\nWe don\u2019t want your passive support; we invite your radical passion, your ideas, and your physical energy. Whether it is moving speakers into a secret warehouse, designing a tactical intervention, or protecting a safe space on the dancefloor\u2014your time is the only currency that cannot be inflated or regulated.",
      },
      {
        title: "RADICAL SOLIDARITY.",
        body: "By joining NEON, you join a movement of resistance and creation. Together, we transcend the four walls of the traditional club and build something that transcends the transactional.",
      },
    ],
    ctaLabel: "I'm in",
    footerLines: [
      "Fuel the movement with your contribution.",
      "Spark the revolution with your energy.",
    ],
  },
  de: {
    title: "DIE NACHT GEHÖRT UNS.",
    intro:
      "Die Nacht ist kein Ort, den man besucht, sondern eine Erfahrung, die man teilt. Gewöhnliches Clubbing verkauft Tickets; wir bauen Welten. Wir sind die Architekten des Untergrunds.",
    sections: [
      {
        title: "DAS FUNDAMENT DER UNABHÄNGIGKEIT: CHF 35.–",
        body: "Wir verkaufen keinen Zugang. Wir finanzieren Unabhängigkeit. Deine 35 Franken sind keine Transaktion – sie sind wichtige Unterstützung für kulturelle Freiheit. Dieser Fonds treibt unsere nomadischen Soundsysteme an, hebelt die Barrieren des Immobilienmarktes aus und hält das Experiment ungezähmt.",
      },
      {
        title: "DER HERZSCHLAG: DEINE ENERGIE.",
        body: "Mehr noch als dein Geld fordern wir deine Präsenz. Ein Rave ist kein Zuschauersport; ein Rave *ist* man. Wir laden den „Prosumenten“ ein – den aktiven Teilnehmenden, der sich weigert, Zuschauer zu sein.\n\nWir suchen keinen passiven Support; wir laden deine radikale Leidenschaft, deine Ideen und deine physische Energie ein. Ob du Boxen in ein besetztes Lagerhaus schleppst, eine taktische Intervention planst oder Safe Spaces auf dem Dancefloor schützt – deine Zeit ist die einzige Währung, die weder Inflation noch Regulierung kennt.",
      },
      {
        title: "RADIKALE SOLIDARITÄT.",
        body: "Mit NEON trittst du einer Bewegung des Widerstands und der Schöpfung bei. Gemeinsam gehen wir über die Mauern des klassischen Clubs hinaus und schaffen etwas, das jenseits des Transaktionellen liegt.",
      },
    ],
    ctaLabel: "Ich bin dabei",
    footerLines: [
      "Treibe die Bewegung mit deinem Beitrag an.",
      "Entfache die Revolution mit deiner Energie.",
    ],
  },
};

export default content;
