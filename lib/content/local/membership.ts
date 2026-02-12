import type { MembershipContent } from "../types";
import type { Locale } from "@/i18n/config";

const content: Record<Locale, MembershipContent> = {
  en: {
    title: "THE NIGHT IS NOT FOR SALE.",
    intro:
      'The *Clubsterben* is not a trend; it is a controlled demolition of our social fabric. If you are here for early-bird tickets or "members-only" perks, you are in the wrong place.',
    sections: [
      {
        title: "THE CONTRIBUTION: CHF 35.\u2014",
        body: "We do not sell memberships; we collect resources for cultural defense. Your 35 francs are not a transaction\u2014they are a contribution to the survival of the Urban Vacuum. This fund fuels our nomadic sound systems, bypasses the barriers of the real estate market, and keeps the experiment alive.",
      },
      {
        title: "THE RADICAL REQUIREMENT: YOUR TIME.",
        body: "Even more than your money, we need your presence. A rave is not something you watch; it is something you *are*. To truly preserve the Social Alchemy of the night, we require the \u201CProsumer\u201D\u2014the active participant who co-creates the space.\n\nWe don\u2019t want your passive support; we want your labor, your ideas, and your physical energy. Whether it is moving speakers into a secret warehouse, designing a tactical intervention, or protecting a safe space on the dancefloor\u2014your time is the only currency that cannot be inflated or regulated.",
      },
      {
        title: "CO-CREATION OR EXTINCTION.",
        body: "By joining NEON, you are signing up for a mission of Radical Solidarity. You are choosing to be a part of the movement that transcends the four walls of the traditional club.",
      },
    ],
    ctaLabel: "I\u2019m in",
    footerLines: [
      "Invest your money to keep the lights on.",
      "Invest your time to keep the spirit alive.",
    ],
  },
  de: {
    title: "DIE NACHT IST NICHT KÄUFLICH.",
    intro:
      "Das *Clubsterben* ist kein Trend \u2014 es ist ein kontrollierter Abriss unseres sozialen Gefüges. Wer hier nach Frühbucher-Tickets oder \u201EMembers-only\u201C-Vorteilen sucht, ist am falschen Ort.",
    sections: [
      {
        title: "DER BEITRAG: CHF 35.\u2014",
        body: "Wir verkaufen keine Mitgliedschaften; wir sammeln Ressourcen für die kulturelle Verteidigung. Deine 35 Franken sind keine Transaktion \u2014 sie sind ein Beitrag zum Überleben des urbanen Vakuums. Dieser Fonds treibt unsere nomadischen Soundsysteme an, umgeht die Barrieren des Immobilienmarktes und hält das Experiment am Leben.",
      },
      {
        title: "DIE RADIKALE ANFORDERUNG: DEINE ZEIT.",
        body: "Noch mehr als dein Geld brauchen wir deine Präsenz. Ein Rave ist nichts, was man beobachtet; es ist etwas, das man *ist*. Um die soziale Alchemie der Nacht wirklich zu bewahren, brauchen wir den \u201EProsumenten\u201C \u2014 den aktiven Teilnehmenden, der den Raum mitgestaltet.\n\nWir wollen nicht deine passive Unterstützung; wir wollen deine Arbeit, deine Ideen und deine physische Energie. Ob Lautsprecher in ein geheimes Lagerhaus schleppen, eine taktische Intervention gestalten oder einen Safe Space auf dem Dancefloor schützen \u2014 deine Zeit ist die einzige Währung, die nicht inflationiert oder reguliert werden kann.",
      },
      {
        title: "MITGESTALTEN ODER UNTERGEHEN.",
        body: "Mit deinem Beitritt zu NEON meldest du dich für eine Mission der radikalen Solidarität an. Du entscheidest dich, Teil einer Bewegung zu sein, die die vier Wände des traditionellen Clubs überwindet.",
      },
    ],
    ctaLabel: "Ich bin dabei",
    footerLines: [
      "Investiere dein Geld, damit die Lichter nicht ausgehen.",
      "Investiere deine Zeit, damit der Geist weiterlebt.",
    ],
  },
};

export default content;
