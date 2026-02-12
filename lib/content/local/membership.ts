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
    ctaLabel: "I'm in",
    footerLines: [
      "Invest your money to keep the lights on.",
      "Invest your time to keep the spirit alive.",
    ],
  },
  de: {
    title: "DIE NACHT IST NICHT KÄUFLICH.",
    intro:
      "Das *Clubsterben* ist kein Trend – es ist der kontrollierte Rückbau unseres sozialen Gefüges. Wer hier nach Early-Bird-Tickets oder exklusiven „Members-only“-Vorteilen sucht, ist am falschen Ort.",
    sections: [
      {
        title: "DER BEITRAG: CHF 35.–",
        body: "Wir verkaufen keine Mitgliedschaften; wir bündeln Ressourcen zur kulturellen Selbstverteidigung. Deine 35 Franken sind keine Transaktion – sie sind ein Beitrag zum Überleben unserer Freiräume. Dieser Fonds finanziert unsere nomadischen Soundsysteme, hebelt die Barrieren des Immobilienmarktes aus und hält das Experiment am Leben.",
      },
      {
        title: "DIE RADIKALE ANFORDERUNG: DEINE ZEIT.",
        body: "Mehr noch als dein Geld brauchen wir deine Präsenz. Ein Rave ist kein Zuschauersport; ein Rave *ist* man. Um die soziale Alchemie der Nacht wirklich zu schützen, brauchen wir „Prosumenten“ – aktive Akteur:innen, die den Raum im Moment seiner Entstehung miterschaffen.\n\nWir suchen keinen passiven Support; wir brauchen deinen Einsatz, deine Ideen und deine physische Energie. Ob du Boxen in ein besetztes Lagerhaus schleppst, eine taktische Intervention planst oder Safe Spaces auf dem Dancefloor schützt – deine Zeit ist die einzige Währung, die weder Inflation noch Regulierung kennt.",
      },
      {
        title: "KOLLEKTIVITÄT ODER UNTERGANG.",
        body: "Mit deinem Beitritt zu NEON entscheidest du dich für eine Mission der radikalen Solidarität. Du wirst Teil einer Bewegung, die über die vier Wände des klassischen Clubs hinausgeht.",
      },
    ],
    ctaLabel: "Ich bin dabei",
    footerLines: [
      "Investiere Geld, um das Licht brennen zu lassen.",
      "Investiere Zeit, um den Geist am Leben zu erhalten.",
    ],
  },
};

export default content;
