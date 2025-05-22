export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NEONclub.ch",
  description: "Love for beats, Artists in the Spotlight",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Manifesto",
      href: "/manifesto",
    },
    {
      label: "Membership",
      href: "/membership",
    },
  ],
  navMenuItems: [],
  links: {
    instagram: "https://www.instagram.com/neonclub.ch/",
    membership: "https://tickets.neonclub.ch/account/login?next=/membership-2025",
    tickets: "https://tickets.neonclub.ch/",
    statutes: "https://drive.google.com/uc?export=download&id=1y8fKbgmIRkfN1GI5aC4IT_RuIgeJV9pP"
  },
};
