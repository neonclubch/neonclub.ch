export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NEON",
  /** Nav items with translation keys (labels come from dictionary). */
  navItems: [
    {
      key: "home",
      href: "/",
    },
    {
      key: "manifesto",
      href: "/manifesto",
    },
    {
      key: "membership",
      href: "/membership",
    },
  ],
  navMenuItems: [],
  links: {
    instagram: "https://www.instagram.com/neonclub.ch/",
    membership:
      "https://tickets.neonclub.ch/account/login?next=/membership-2025",
    tickets: "https://tickets.neonclub.ch/",
    statutes:
      "https://drive.google.com/uc?export=download&id=1y8fKbgmIRkfN1GI5aC4IT_RuIgeJV9pP",
  },
};
