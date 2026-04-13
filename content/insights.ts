import type { LocalizedString } from "@/types/content";

/**
 * Curated editorial insights rail. Each entry points at an existing
 * page (focus topic or capability) — the rail is a browsing surface, not
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
}

export const insights: InsightEntry[] = [
  {
    id: "immigration-volatility",
    imageId: "focus-immigration",
    href: "/focus/immigration-volatility",
    category: { en: "Briefing", es: "Informe" },
    date: { en: "April 2026", es: "Abril 2026" },
    title: {
      en: "When the terrain is moving faster than the calendar",
      es: "Cuando el terreno cambia más rápido que el calendario",
    },
    summary: {
      en: "Pathways that worked last year may not work next quarter. How to build parallel options into every immigration decision.",
      es: "Las rutas que funcionaron el año pasado pueden no funcionar el próximo trimestre. Cómo construir rutas paralelas en cada decisión migratoria.",
    },
  },
  {
    id: "international-investments",
    imageId: "focus-investments",
    href: "/focus/international-investments",
    category: { en: "Perspective", es: "Perspectiva" },
    date: { en: "April 2026", es: "Abril 2026" },
    title: {
      en: "The compliance layer is now the strategy layer",
      es: "La capa de cumplimiento es ahora la capa de estrategia",
    },
    summary: {
      en: "Cross-border capital decisions are shaped as much by regulatory posture as by return. Why structure increasingly beats thesis.",
      es: "Las decisiones de capital transfronterizas están moldeadas tanto por la postura regulatoria como por el rendimiento. Por qué la estructura supera cada vez más a la tesis.",
    },
  },
  {
    id: "us-mexico-trade",
    imageId: "focus-trade",
    href: "/focus/us-mexico-trade",
    category: { en: "Briefing", es: "Informe" },
    date: { en: "April 2026", es: "Abril 2026" },
    title: {
      en: "Reading the signals — and the silences — along the border",
      es: "Leer las señales — y los silencios — a lo largo de la frontera",
    },
    summary: {
      en: "The most consequential trading relationship in the Americas is also its most politically charged. What we are watching.",
      es: "La relación comercial más trascendente de las Américas es también la más politizada. Lo que estamos observando.",
    },
  },
  {
    id: "jurisdictional-design",
    imageId: "insight-jurisdictional",
    href: "/capabilities/jurisdictional-optimization",
    category: { en: "Perspective", es: "Perspectiva" },
    date: { en: "March 2026", es: "Marzo 2026" },
    title: {
      en: "Jurisdiction is a compound decision",
      es: "La jurisdicción es una decisión compuesta",
    },
    summary: {
      en: "Small architectural choices today resolve — or compound — over a decade. How we frame the board.",
      es: "Pequeñas elecciones arquitectónicas hoy se resuelven — o se agravan — a lo largo de una década. Cómo encuadramos el tablero.",
    },
  },
  {
    id: "alternative-capital",
    imageId: "insight-capital",
    href: "/capabilities/alternative-capital-sourcing",
    category: { en: "Perspective", es: "Perspectiva" },
    date: { en: "March 2026", es: "Marzo 2026" },
    title: {
      en: "The right capital is worth more than the cheapest capital",
      es: "El capital correcto vale más que el capital más barato",
    },
    summary: {
      en: "Private credit, family office, and single-LP strategic capital for operators whose needs do not fit standard channels.",
      es: "Crédito privado, family offices y capital estratégico para operadores cuyas necesidades no encajan en canales estándar.",
    },
  },
  {
    id: "multi-generational-wealth",
    imageId: "insight-wealth",
    href: "/capabilities/wealth-advisory",
    category: { en: "Note", es: "Nota" },
    date: { en: "February 2026", es: "Febrero 2026" },
    title: {
      en: "A structure that cannot be explained will not survive",
      es: "Una estructura que no se puede explicar no sobrevivirá",
    },
    summary: {
      en: "Independence from product. Clarity over complexity. Notes on advising families who hold capital across three countries.",
      es: "Independencia del producto. Claridad sobre complejidad. Notas sobre asesorar a familias con capital en tres países.",
    },
  },
];
