export interface Dictionary {
  nav: {
    menu: string;
    close: string;
    capabilities: string;
    about: string;
    focus: string;
    contact: string;
    people: string;
    offices: string;
    partners: string;
    whatsapp: string;
    language: string;
    featured: string;
  };
  common: {
    readBriefing: string;
    learnMore: string;
    viewAll: string;
    viewAllOffices: string;
    viewCapabilities: string;
    exploreInsights: string;
    discussOpportunity: string;
    requestConsultation: string;
    contactFirm: string;
    howCanWeHelp: string;
    skipToContent: string;
    currentlyViewing: string;
    relatedFocus: string;
    relatedCapabilities: string;
    asOf: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroLede: string;
    focusEyebrow: string;
    focusTitle: string;
    focusLede: string;
    capabilitiesEyebrow: string;
    capabilitiesTitle: string;
    capabilitiesLede: string;
    credibilityEyebrow: string;
    credibilityTitle: string;
    credibilityBody: string[];
    credibilityMeta: {
      founded: string;
      practices: string;
      offices: string;
      languages: string;
    };
    officesEyebrow: string;
    officesTitle: string;
    officesLede: string;
    contactTitle: string;
    contactLede: string;
  };
  footer: {
    offices: string;
    about: string;
    howCanWeHelp: string;
    legal: string;
    privacyPolicy: string;
    terms: string;
  };
}

export const en: Dictionary = {
  nav: {
    menu: "Menu",
    close: "Close",
    capabilities: "Capabilities",
    about: "About Mexus Advisory",
    focus: "Focus",
    contact: "Contact",
    people: "Our People",
    offices: "Our Offices",
    partners: "Mexus Professional Partners Program",
    whatsapp: "WhatsApp",
    language: "Language",
    featured: "What we're watching",
  },
  common: {
    readBriefing: "Read the briefing",
    learnMore: "Learn more",
    viewAll: "View all",
    viewAllOffices: "View all offices",
    viewCapabilities: "View capabilities",
    exploreInsights: "Explore insights",
    discussOpportunity: "Discuss an opportunity",
    requestConsultation: "Discuss an opportunity",
    contactFirm: "Contact us",
    howCanWeHelp: "How can we help?",
    skipToContent: "Skip to content",
    currentlyViewing: "Currently viewing",
    relatedFocus: "Related focus areas",
    relatedCapabilities: "Related capabilities",
    asOf: "As of",
  },
  home: {
    heroEyebrow: "Cross-border advisory",
    heroTitle: "Moving capital, people, and risk across borders.",
    heroLede:
      "Mexus Advisory guides founders, investors, and families through immigration volatility, jurisdictional complexity, and international capital decisions — with precision, discretion, and a global network.",
    focusEyebrow: "Mexus Focus",
    focusTitle: "Where the terrain is shifting.",
    focusLede:
      "Three fields we watch closely, because the decisions they shape for our clients can't wait for clarity.",
    capabilitiesEyebrow: "Capabilities",
    capabilitiesTitle: "Five disciplines, one practice.",
    capabilitiesLede:
      "Each discipline is independently deep; together they form the bench principals need for cross-border decisions of consequence.",
    credibilityEyebrow: "About Mexus Advisory",
    credibilityTitle: "A practice built for the 21st-century border.",
    credibilityBody: [
      "Borders today are not only geographic. They are jurisdictional, fiscal, regulatory, reputational — and they move. Capital, people, and risk must be advised on together, or they are advised on badly.",
      "Mexus Advisory was built for this reality. We are a small, senior team that works with a curated network of lawyers, bankers, and fiduciaries across the Americas and beyond, on behalf of a deliberately limited number of clients.",
      "Our posture is calm, private, and informed. We take positions, we do not sell services.",
    ],
    credibilityMeta: {
      founded: "Founded",
      practices: "Practices",
      offices: "Offices",
      languages: "Languages",
    },
    officesEyebrow: "Presence",
    officesTitle: "A quiet network across the Americas.",
    officesLede:
      "We maintain a deliberate footprint. Each office exists to serve a specific kind of decision.",
    contactTitle: "How can we help?",
    contactLede:
      "If you are weighing a cross-border decision and need a calm, senior opinion, we would be glad to hear from you. We reply within one business day.",
  },
  footer: {
    offices: "Offices",
    about: "About",
    howCanWeHelp: "How can we help?",
    legal: "© 2026 Mexus Advisory. All rights reserved.",
    privacyPolicy: "Privacy",
    terms: "Terms",
  },
};
