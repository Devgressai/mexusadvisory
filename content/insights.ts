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
 * Curated editorial insights. Each entry renders on the homepage banner
 * card (short title + summary + byline) and on the /insights/<slug>
 * article page (full title + author byline + hero image + body).
 */
export interface InsightEntry {
  id: string;
  /** Route segment for /insights/<slug>. Usually equal to id. */
  slug: string;
  /** Referenced image id from `content/imagery.ts` */
  imageId: string;
  /** Target route — always /insights/<slug>. */
  href: string;
  category: LocalizedString;
  date: LocalizedString;
  /** Short title for the carousel card. */
  title: LocalizedString;
  /** Full verbatim title for the article detail page. Falls back to `title`. */
  titleFull?: LocalizedString;
  summary: LocalizedString;
  author: AuthorByline;
  /** Filename of the article body markdown under content/articles/. */
  bodyFile: string;
}

export const insights: InsightEntry[] = [
  {
    id: "sale-leaseback-mexico",
    slug: "sale-leaseback-mexico",
    imageId: "focus-trade",
    href: "/insights/sale-leaseback-mexico",
    category: { en: "Capital", es: "Capital" },
    date: { en: "April 2026", es: "Abril 2026" },
    title: {
      en: "Bypassing Traditional Financing: Sale/Leasebacks in Mexico",
      es: "Sortear el Financiamiento Tradicional: Sale/Leasebacks en México",
    },
    titleFull: {
      en: "Bypassing Traditional Financing and Unlocking Expansion Resources Using Your Existing Real Estate Portfolio",
      es: "Sortear el Financiamiento Tradicional y Desbloquear Recursos de Expansión a través de su Portafolio Inmobiliario",
    },
    summary: {
      en: "How U.S. Capital Is Fueling the Rise of Sale/Leasebacks in Mexico.",
      es: "Cómo el capital estadounidense está impulsando el auge de los Sale/Leasebacks en México.",
    },
    author: {
      name: "Mace K. Miller, J.D., M.B.A.",
      title: { en: "Mexus Advisory", es: "Mexus Advisory" },
      personSlug: "mace-miller",
    },
    bodyFile: "sale-leaseback-mexico.md",
  },
  {
    id: "us-life-insurance-nexus",
    slug: "us-life-insurance-nexus",
    imageId: "insight-wealth",
    href: "/insights/us-life-insurance-nexus",
    category: { en: "Insurance", es: "Seguros" },
    date: { en: "April 2026", es: "Abril 2026" },
    title: {
      en: "Accessing U.S. Life Insurance: Why Foreign Nationals Must Demonstrate U.S. Nexus",
      es: "Acceso al Seguro de Vida en EE. UU.: Por qué los Extranjeros Deben Demostrar Nexo con Estados Unidos",
    },
    summary: {
      en: "Understanding the Basic Requirements for International Policyholders.",
      es: "Entendiendo los requisitos básicos para los asegurados internacionales.",
    },
    author: {
      name: "Darilú Cartagena, B.U.S.",
      title: {
        en: "Director of Insurance, Mexus Advisory",
        es: "Directora de Seguros, Mexus Advisory",
      },
      personSlug: "darilu-cartagena",
    },
    bodyFile: "us-life-insurance-nexus.md",
  },
  {
    id: "structure-over-pressure",
    slug: "structure-over-pressure",
    imageId: "insight-jurisdictional",
    href: "/insights/structure-over-pressure",
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
    bodyFile: "structure-over-pressure.md",
  },
  {
    id: "multi-country-production",
    slug: "multi-country-production",
    imageId: "focus-investments",
    href: "/insights/multi-country-production",
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
    bodyFile: "multi-country-production.md",
  },
  {
    id: "economics-of-nearshoring",
    slug: "economics-of-nearshoring",
    imageId: "insight-capital",
    href: "/insights/economics-of-nearshoring",
    category: { en: "Trade", es: "Comercio" },
    date: { en: "April 2026", es: "Abril 2026" },
    title: {
      en: "The Real Economics of Nearshoring",
      es: "La Verdadera Economía del Nearshoring",
    },
    summary: {
      en: "Why Global Supply Chains Are Moving to Mexico and What Could Slow Them Down.",
      es: "Por qué las cadenas de suministro globales se están mudando a México y qué podría frenarlas.",
    },
    author: {
      name: "David Arase",
      title: { en: "Mexus Advisory", es: "Mexus Advisory" },
      personSlug: "david-arase",
    },
    bodyFile: "economics-of-nearshoring.md",
  },
  {
    id: "e2-vs-eb5",
    slug: "e2-vs-eb5",
    imageId: "focus-immigration",
    href: "/insights/e2-vs-eb5",
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
    bodyFile: "e2-vs-eb5.md",
  },
  {
    id: "nil-immigration-strategy",
    slug: "nil-immigration-strategy",
    imageId: "capabilities-anchor",
    href: "/insights/nil-immigration-strategy",
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
    bodyFile: "nil-immigration-strategy.md",
  },
  {
    id: "best-doctors-pro-portfolio",
    slug: "best-doctors-pro-portfolio",
    imageId: "cap-capital",
    href: "/insights/best-doctors-pro-portfolio",
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
    bodyFile: "best-doctors-pro-portfolio.md",
  },
];

export function getInsightBySlug(slug: string): InsightEntry | undefined {
  return insights.find((i) => i.slug === slug);
}
