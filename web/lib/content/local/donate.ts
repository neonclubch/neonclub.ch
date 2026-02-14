import type { DonateContent } from "../types";
import type { Locale } from "@/i18n/config";

const content: Record<Locale, DonateContent> = {
  en: {
    title: "SUPPORT THE MOVEMENT.",
    subtitle:
      "Your contribution fuels the evolution of electronic culture — securing spaces, sound, and community for the city.",
    recurringLabel: "Yearly",
    onetimeLabel: "One-time",
    ctaLabel: "Donate",
    successMessage:
      "Thank you for your contribution. You are part of the evolution.",
    perYear: "/ year",
    manageTitle: "Manage your donation",
    manageDescription:
      "Enter the email address you used when donating to manage or cancel your recurring contribution.",
    manageEmailPlaceholder: "your@email.com",
    manageCta: "Send management link",
    manageEmailSent:
      "Check your inbox — we sent you a secure link to manage your donation.",
    manageNotFound: "No active donation found for this email address.",
  },
  de: {
    title: "UNTERSTÜTZE DIE BEWEGUNG.",
    subtitle:
      "Dein Beitrag treibt die Evolution der elektronischen Kultur voran — für Räume, Sound und Gemeinschaft in der Stadt.",
    recurringLabel: "Jährlich",
    onetimeLabel: "Einmalig",
    ctaLabel: "Spenden",
    successMessage: "Danke für deinen Beitrag. Du bist Teil der Evolution.",
    perYear: "/ Jahr",
    manageTitle: "Spende verwalten",
    manageDescription:
      "Gib die E-Mail-Adresse ein, mit der du gespendet hast, um deine wiederkehrende Spende zu verwalten oder zu kündigen.",
    manageEmailPlaceholder: "deine@email.com",
    manageCta: "Verwaltungslink senden",
    manageEmailSent:
      "Prüfe dein Postfach — wir haben dir einen sicheren Link zur Verwaltung deiner Spende gesendet.",
    manageNotFound: "Keine aktive Spende für diese E-Mail-Adresse gefunden.",
  },
};

export default content;
