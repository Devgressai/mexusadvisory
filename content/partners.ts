import type { LocalizedString, LocalizedStringList } from "@/types/content";

interface PartnersProgram {
  hero: { eyebrow: LocalizedString; title: LocalizedString; lede: LocalizedString };
  whyPartner: LocalizedStringList;
  collaborationModel: Array<{
    step: string;
    title: LocalizedString;
    description: LocalizedString;
  }>;
  benefits: LocalizedStringList;
  pullQuote: LocalizedString;
  attribution: LocalizedString;
}

export const partnersProgram: PartnersProgram = {
  hero: {
    eyebrow: {
      en: "Professional Partners Program",
      es: "Programa de Socios Profesionales",
    },
    title: {
      en: "A discreet collaboration framework for advisors, lawyers, and family offices.",
      es: "Un marco de colaboración discreto para asesores, abogados y family offices.",
    },
    lede: {
      en: "Mexus Advisory works with a small number of peer firms on a non-exclusive, senior-to-senior basis. The program exists so our clients — and yours — are served by the right bench when cross-border questions arise.",
      es: "Mexus Advisory colabora con un número reducido de firmas pares en un marco no exclusivo, senior a senior. El programa existe para que nuestros clientes — y los suyos — sean atendidos por el equipo adecuado cuando surgen preguntas transfronterizas.",
    },
  },
  whyPartner: {
    en: [
      "A senior-first point of contact for cross-border advisory needs, without the overhead of a formal referral engagement.",
      "Independence from product sales and banking distribution — partners can refer without disclosure friction.",
      "Coordinated execution across immigration, capital, risk, and jurisdictional dimensions, so that the principal sees one practice, not four.",
    ],
    es: [
      "Un punto de contacto senior para necesidades de asesoría transfronteriza, sin la carga de un compromiso formal de referido.",
      "Independencia de la venta de productos y la distribución bancaria — los socios pueden referir sin fricción de revelación.",
      "Ejecución coordinada entre migración, capital, riesgo y dimensiones jurisdiccionales, para que el principal vea una sola práctica, no cuatro.",
    ],
  },
  collaborationModel: [
    {
      step: "01",
      title: { en: "Introduction", es: "Introducción" },
      description: {
        en: "A senior-to-senior conversation, no forms, no intake paperwork.",
        es: "Una conversación senior a senior, sin formularios, sin papeleo de ingreso.",
      },
    },
    {
      step: "02",
      title: { en: "Scoping", es: "Definición" },
      description: {
        en: "A joint view of the decision, the timeline, and the division of work.",
        es: "Una visión conjunta de la decisión, el plazo y la división del trabajo.",
      },
    },
    {
      step: "03",
      title: { en: "Coordination", es: "Coordinación" },
      description: {
        en: "Shared execution with clear roles — partner remains the primary relationship where appropriate.",
        es: "Ejecución compartida con roles claros — el socio mantiene la relación principal cuando corresponda.",
      },
    },
  ],
  benefits: {
    en: [
      "Direct access to Mexus senior partners",
      "Quarterly briefings on cross-border developments",
      "Joint advisory on qualified engagements",
      "Reciprocal referrals based on fit, not volume",
    ],
    es: [
      "Acceso directo a los socios senior de Mexus",
      "Briefings trimestrales sobre desarrollos transfronterizos",
      "Asesoría conjunta en compromisos calificados",
      "Referidos recíprocos basados en encaje, no en volumen",
    ],
  },
  pullQuote: {
    en: "We work with Mexus when a client's question stops fitting inside one practice area. They are the firm we trust to keep a principal calm while we solve the rest.",
    es: "Trabajamos con Mexus cuando la pregunta de un cliente deja de caber en una sola área. Son el despacho en el que confiamos para mantener tranquilo al principal mientras resolvemos el resto.",
  },
  attribution: {
    en: "Partner, private client practice · New York",
    es: "Socio, práctica de clientes privados · Nueva York",
  },
};
