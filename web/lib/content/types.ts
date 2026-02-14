/** Content types that mirror future Strapi single-type models. */

export interface HomeContent {
  tagline: string;
  /** Wrap text in {{double braces}} for neon highlighting. */
  quote: string;
  readManifestoLabel: string;
}

export interface ManifestoContent {
  subtitle: string;
  sections: {
    number: string;
    verb: string;
    title: string;
    intro: string;
    points: { title: string; text: string }[];
  }[];
  /** Wrap text in {{double braces}} for neon highlighting. */
  closingLines: string[];
}

export interface EngageContent {
  title: string;
  intro: string;
  sections: {
    number: string;
    verb: string;
    title: string;
    body: string;
    cta?: { label: string; href: string };
  }[];
  footerLines: string[];
}

export interface ContactContent {
  title: string;
  subtitle: string;
  body: string;
}

export interface ImpressumContent {
  title: string;
  body: string;
}

export interface PrivacyPolicyContent {
  title: string;
  lastUpdated: string;
  body: string;
}

export interface TbContent {
  title: string;
  rsvpButtonText: string;
  rsvpFormLink: string;
  body: string;
  rsvpFooterButtonText: string;
  contactWhatsapp: string;
  contactEmail: string;
}

export interface DonateContent {
  title: string;
  subtitle: string;
  recurringLabel: string;
  onetimeLabel: string;
  ctaLabel: string;
  successMessage: string;
  perYear: string;
  manageTitle: string;
  manageDescription: string;
  manageEmailPlaceholder: string;
  manageCta: string;
  manageEmailSent: string;
  manageNotFound: string;
}

/** Type-safe slug-to-content mapping. */
export interface ContentMap {
  home: HomeContent;
  manifesto: ManifestoContent;
  engage: EngageContent;
  contact: ContactContent;
  impressum: ImpressumContent;
  "privacy-policy": PrivacyPolicyContent;
  tb: TbContent;
  donate: DonateContent;
}
