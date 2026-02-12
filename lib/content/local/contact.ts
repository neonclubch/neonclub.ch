import type { ContactContent } from "../types";
import type { Locale } from "@/i18n/config";

const content: Record<Locale, ContactContent> = {
  en: {
    title: "CONTACT",
    subtitle: "Get in Touch",
    body: "Have questions, ideas, or simply want to connect?\nWe're always here to listen! Reach out to us via email [hello@neonclub.ch](mailto:hello@neonclub.ch) or connect with us on social media.\nWhether you're an aspiring artist, a potential volunteer, or a fan with feedback, we value your input.\nLet's stay connected and keep the NEON spirit alive!",
  },
  de: {
    title: "KONTAKT",
    subtitle: "Schreib uns",
    body: "Hast du Fragen, Ideen oder willst dich einfach austauschen?\nWir sind immer für dich da! Schreib uns per E-Mail an [hello@neonclub.ch](mailto:hello@neonclub.ch) oder verbinde dich mit uns über Social Media.\nOb aufstrebende:r Künstler:in, potenzielle:r Freiwillige:r oder Fan mit Feedback \u2014 dein Input ist uns wichtig.\nLass uns verbunden bleiben und den NEON-Spirit am Leben halten!",
  },
};

export default content;
