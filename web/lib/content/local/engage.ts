import type { EngageContent } from "../types";
import type { Locale } from "@/i18n/config";

const content: Record<Locale, EngageContent> = {
  en: {
    title: "ARCHITECT THE EVOLUTION.",
    intro:
      "Sustaining electronic culture amidst evolving challenges and paradigms requires active redefinition over passive consumption. NEON is a movement dedicated to the innovation and attention needed to ensure our city’s rhythmic memory remains a living reality under new urban constraints.",
    sections: [
      {
        number: "I",
        verb: "ENGAGE",
        title: "Strategic Mitwirken",
        body: "We are assembling a collective of artists, strategic thinkers, technical experts, and organizers who recognize that subculture requires focused attention and constant innovation. This is the mandate of the Prosumer. By contributing your expertise, you help us redefine cultural formats—ensuring that the core values of the dancefloor are preserved and accessible despite shifting social habits and urban limitations. We operate as a sophisticated force, securing cultural sovereignty through innovative design and socially grounded standards.",
        cta: {
          label: "JOIN",
          href: "https://tickets.neoncollective.ch/account/login?next=/membership-2025",
        },
      },
      {
        number: "II",
        verb: "SUPPORT",
        title: "Resource Sovereignty",
        body: "Financial autonomy is the foundation for the evolution of the electronic scene. For those who share this vision but operate from the periphery, a donation (starting at CHF 35.—) provides the capital necessary to activate new spatial and temporal models. These resources are utilized to secure the locations and technology required for gatherings that prioritize social depth and acoustic quality, ensuring our culture remains a functional, respected, and vital fixture of the city.",
        cta: {
          label: "DONATE",
          href: "/en/donate",
        },
      },
    ],
    footerLines: [
      "Apply your innovation to cultural stewardship.",
      "Invest in the evolution of urban music.",
    ],
  },
  de: {
    title: "GESTALTE DEN WANDEL.",
    intro:
      "Die Bewahrung der elektronischen Kultur inmitten sich wandelnder Herausforderungen und Paradigmen erfordert aktive Neudefinition statt passiven Konsums. NEON ist eine Bewegung, die sich der Aufmerksamkeit und Innovation verschrieben hat, die notwendig sind, um das rhythmische Gedächtnis unserer Stadt unter neuen urbanen Bedingungen lebendig zu halten.",
    sections: [
      {
        number: "I",
        verb: "MITWIRKEN",
        title: "Strategisches Engagement",
        body: "Wir versammeln ein Kollektiv aus Künstlern, strategischen Köpfen, technischen Experten und Organisatoren, die erkennen, dass Subkultur gezielte Aufmerksamkeit und ständige Innovation benötigt. Dies ist das Mandat des Prosumenten. Durch deine Expertise helfen wir dabei, kulturelle Formate neu zu definieren – um sicherzustellen, dass die Kernwerte der Tanzfläche trotz veränderter sozialer Gewohnheiten und urbaner Einschränkungen erhalten und zugänglich bleiben. Wir agieren als qualifizierte Kraft, die kulturelle Souveränität durch innovatives Design und gesellschaftlich fundierte Standards sichert.",
        cta: {
          label: "MITWIRKEN",
          href: "https://tickets.neoncollective.ch/account/login?next=/membership-2025",
        },
      },
      {
        number: "II",
        verb: "UNTERSTÜTZEN",
        title: "Souveränität durch Kapital",
        body: "Finanzielle Autonomie ist das Fundament für die Evolution der elektronischen Szene. Für jene, welche diese Vision teilen, aber von der Peripherie aus agieren möchten, schafft eine Spende (ab CHF 35.–) das notwendige Kapital für neue räumliche und zeitliche Modelle. Diese Mittel werden genutzt, um Standorte und Technologien zu sichern, die soziale Tiefe und akustische Qualität in den Vordergrund stellen – damit unsere Kultur ein funktionaler, geachteter und lebensnotwendiger Teil der Stadt bleibt.",
        cta: {
          label: "SPENDEN",
          href: "/de/donate",
        },
      },
    ],
    footerLines: [
      "Nutze deine Innovationskraft für die Kulturpflege.",
      "Investiere in eine anspruchsvolle Zukunft urbaner Musik.",
    ],
  },
};

export default content;
