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
    membership: "https://tickets.neonclub.ch/account/login?next=/membership-2024/",
    tickets: "https://tickets.neonclub.ch/"
  },
};
