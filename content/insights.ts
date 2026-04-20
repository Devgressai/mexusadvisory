import type { LocalizedString } from "@/types/content";

/**
 * A byline attached to an insight. `personSlug` is optional because some
 * bylines (e.g., external advisors, DeepBrokers) do not resolve to a
 * Mexus people page.
 */
export interface AuthorByline {
  name: string;
  title: LocalizedString;
  personSlug?: string;
}

/**
 * Curated editorial insights. Each entry points at an existing page
 * (focus topic or capability) — the rail is a browsing surface, not
 * a separate content model.
 */
export interface InsightEntry {
  id: string;
  /** Referenced image id from `content/imagery.ts` */
  imageId: string;
  /** Target route — always a valid internal path without locale prefix */
  href: string;
  category: LocalizedString;
  date: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  author: AuthorByline;
}

export const insights: InsightEntry[] = [
  {
    id: "sale-leaseback-mexico",
    imageId: "focus-trade",
    href: "/capabilities/alternative-capital-sourcing",
    category: { en: "Capital", es: "Capital" },
    date: { en: "April 2026", es: "Abril 2026" },
    title: {
      en: "Bypassing Traditional Financing: Sale/Leasebacks in Mexico",
      es: "Sortear el Financiamiento Tradicional: Sale/Leasebacks en México",
    },
    summary: {
      en: "U.S. institutional capital is reshaping how Mexican operators fund expansion — without issuing equity or taking on conventional leverage.",
      es: "El capital institucional estadounidense está transformando la forma en que los operadores mexicanos financian su expansión — sin emitir capital ni asumir apalancamiento convencional.",
    },
    author: {
      name: "Mace K. Miller, J.D., M.B.A.",
      title: { en: "Mexus Advisory", es: "Mexus Advisory" },
      personSlug: "mace-miller",
    },
  },
  {
    id: "us-life-insurance-nexus",
    imageId: "insight-wealth",
    href: "/capabilities/wealth-advisory",
    category: { en: "Insurance", es: "Seguros" },
    date: { en: "April 2026", es: "Abril 2026" },
    title: {
      en: "Accessing U.S. Life Insurance: Why Foreign Nationals Must Demonstrate U.S. Nexus",
      es: "Acceso al Seguro de Vida en EE. UU.: Por qué los Extranjeros Deben Demostrar Nexo con Estados Unidos",
    },
    summary: {
      en: "Life insurance from U.S. carriers requires a demonstrable connection to the United States. What nexus means, and how foreign nationals establish it.",
      es: "El seguro de vida con aseguradoras estadounidenses requiere una conexión demostrable con Estados Unidos. Qué significa el nexo y cómo lo establecen los extranjeros.",
    },
    author: {
      name: "Darilú Cartagena, B.U.S.",
      title: {
        en: "Director of Insurance, Mexus Advisory",
        es: "Directora de Seguros, Mexus Advisory",
      },
      personSlug: "darilu-cartagena",
    },
  },
  {
    id: "structure-over-pressure",
    imageId: "insight-jurisdictional",
    href: "/capabilities/wealth-advisory",
    category: { en: "Insurance", es: "Seguros" },
    date: { en: "April 2026", es: "Abril 2026" },
    title: {
      en: "When the System Tightens, the Right Structure Wins",
      es: "Cuando el Sistema se Tensa, la Estructura Correcta Gana",
    },
    summary: {
      en: "As Mexico's insurance sector raises premiums and tightens conditions, Best Doctors is redesigning the conversation — with structure, not complexity.",
      es: "Mientras el sector asegurador mexicano eleva primas y endurece condiciones, Best Doctors está rediseñando la conversación — con estructura, no complejidad.",
    },
    author: {
      name: "Federico Vielledent",
      title: {
        en: "Lawyer and Co-Founder, DeepBrokers",
        es: "Abogado y Cofundador, DeepBrokers",
      },
    },
  },
  {
    id: "multi-country-production",
    imageId: "focus-investments",
    href: "/focus/us-mexico-trade",
    category: { en: "Trade", es: "Comercio" },
    date: { en: "April 2026", es: "Abril 2026" },
    title: {
      en: "Mexico's Role in How Global Firms Design Multi-Country Production Systems",
      es: "El Papel de México en los Sistemas de Producción Multipaís Diseñados por Firmas Globales",
    },
    summary: {
      en: "Modern manufacturing rarely stays in one country. How Mexico has become a critical node in the distributed production systems of global firms.",
      es: "La manufactura moderna rara vez permanece en un solo país. Cómo México se ha convertido en un nodo crítico en los sistemas de producción distribuida de las firmas globales.",
    },
    author: {
      name: "David Arase",
      title: { en: "Mexus Advisory", es: "Mexus Advisory" },
      personSlug: "david-arase",
    },
  },
  {
    id: "economics-of-nearshoring",
    imageId: "insight-capital",
    href: "/focus/us-mexico-trade",
    category: { en: "Trade", es: "Comercio" },
    date: { en: "April 2026", es: "Abril 2026" },
    title: {
      en: "The Real Economics of Nearshoring",
      es: "La Verdadera Economía del Nearshoring",
    },
    summary: {
      en: "Why supply chains are moving to Mexico — and the infrastructure, energy, and policy constraints that could slow the shift.",
      es: "Por qué las cadenas de suministro se mudan a México — y las restricciones de infraestructura, energía y política que podrían frenar el cambio.",
    },
    author: {
      name: "David Arase",
      title: { en: "Mexus Advisory", es: "Mexus Advisory" },
      personSlug: "david-arase",
    },
  },
  {
    id: "e2-vs-eb5",
    imageId: "focus-immigration",
    href: "/capabilities/global-immigration-consulting",
    category: { en: "Immigration", es: "Migración" },
    date: { en: "April 2026", es: "Abril 2026" },
    title: {
      en: "E-2 vs EB-5: Comparing Two Investment Pathways into the United States",
      es: "E-2 vs EB-5: Comparando Dos Rutas de Inversión a Estados Unidos",
    },
    summary: {
      en: "Two investment pathways into the United States, very different in capital required, flexibility, and long-term posture. When each one fits.",
      es: "Dos rutas de inversión a Estados Unidos, muy distintas en capital requerido, flexibilidad y postura de largo plazo. Cuándo encaja cada una.",
    },
    author: {
      name: "Jeremy Anderson",
      title: { en: "Mexus Advisory", es: "Mexus Advisory" },
      personSlug: "jeremy-anderson",
    },
  },
  {
    id: "nil-immigration-strategy",
    imageId: "capabilities-anchor",
    href: "/capabilities/global-immigration-consulting",
    category: { en: "Immigration", es: "Migración" },
    date: { en: "April 2026", es: "Abril 2026" },
    title: {
      en: "Immigration Strategy and NIL Opportunities for International Student-Athletes",
      es: "Estrategia Migratoria y Oportunidades NIL para Estudiantes-Atletas Internacionales",
    },
    summary: {
      en: "Name, Image, and Likeness income is an immigration question before it's a compliance one. O-1 visas, passive-income structures, and what works for international student-athletes.",
      es: "Los ingresos por Nombre, Imagen y Semejanza son una cuestión migratoria antes que de cumplimiento. Visas O-1, estructuras de ingreso pasivo y qué funciona para estudiantes-atletas internacionales.",
    },
    author: {
      name: "Jeremy Anderson",
      title: { en: "Mexus Advisory", es: "Mexus Advisory" },
      personSlug: "jeremy-anderson",
    },
  },
  {
    id: "best-doctors-pro-portfolio",
    imageId: "cap-capital",
    href: "/capabilities/wealth-advisory",
    category: { en: "Insurance", es: "Seguros" },
    date: { en: "April 2026", es: "Abril 2026" },
    title: {
      en: "Best Doctors Launches New \u201CPro\u201D Portfolio: Strategic Pricing Meets Elite Global Access",
      es: "Best Doctors Lanza el Nuevo Portafolio \u201CPro\u201D: Precios Estratégicos y Acceso Global de Élite",
    },
    summary: {
      en: "Five products, standardized deductibles, and coverage for CAR-T, transplants, and autism spectrum. A structural answer to medical inflation in Mexico.",
      es: "Cinco productos, deducibles estandarizados y cobertura para CAR-T, trasplantes y espectro autista. Una respuesta estructural a la inflación médica en México.",
    },
    author: {
      name: "Federico Vielledent",
      title: {
        en: "Lawyer and Co-Founder, DeepBrokers",
        es: "Abogado y Cofundador, DeepBrokers",
      },
    },
  },
];
