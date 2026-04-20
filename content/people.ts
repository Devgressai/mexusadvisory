import type { Person } from "@/types/content";

/**
 * People — sourced from mexusadvisory.com/about-us.
 *
 * Titles taken verbatim from the live site. Bios are not published on the
 * source site; short advisory-tone descriptors are carried here as
 * placeholders until the firm provides canonical copy.
 */
export const people: Person[] = [
  {
    id: "mace-miller",
    slug: "mace-miller",
    name: "Mace Miller",
    role: { en: "Member", es: "Socio" },
    location: { en: "Americas", es: "Américas" },
    bio: {
      en: [
        "Mace advises principals on cross-border mobility, capital pathways, and jurisdictional strategy across the United States and Mexico.",
        "He leads client engagements where immigration, corporate structure, and private capital decisions must be coordinated at a senior level.",
      ],
      es: [
        "Mace asesora a principales en movilidad transfronteriza, rutas de capital y estrategia jurisdiccional entre Estados Unidos y México.",
        "Lidera compromisos donde la migración, la estructura corporativa y las decisiones de capital privado deben coordinarse a nivel senior.",
      ],
    },
    practices: ["global-immigration-consulting", "jurisdictional-optimization"],
    languages: ["English", "Español"],
  },
  {
    id: "darilu-cartagena",
    slug: "darilu-cartagena",
    name: "Darilu Cartagena",
    role: {
      en: "Planning & Insurance Coordinator",
      es: "Coordinadora de Planeación y Seguros",
    },
    location: { en: "Americas", es: "Américas" },
    bio: {
      en: [
        "Darilu coordinates long-horizon planning and insurance structures for Mexus clients, with particular focus on family continuity and cross-border asset protection.",
        "She works closely with fiduciaries, legal counsel and private bankers across jurisdictions so that each client's posture remains coherent as circumstances evolve.",
      ],
      es: [
        "Darilu coordina la planeación de largo plazo y las estructuras de aseguramiento para los clientes de Mexus, con especial enfoque en la continuidad familiar y la protección de activos transfronteriza.",
        "Trabaja de cerca con fiduciarios, asesores legales y banqueros privados en distintas jurisdicciones para que la postura de cada cliente se mantenga coherente conforme cambian las circunstancias.",
      ],
    },
    practices: ["wealth-advisory", "risk-management"],
    languages: ["Español", "English"],
  },
  {
    id: "jeremy-anderson",
    slug: "jeremy-anderson",
    name: "Jeremy Anderson",
    role: { en: "Member", es: "Socio" },
    location: { en: "Americas", es: "Américas" },
    bio: {
      en: [
        "Jeremy advises operators and investors on alternative capital sourcing, cross-border structuring, and the practical realities of deploying capital outside standard bank channels.",
        "His engagements span private credit, single-LP placements, and the coordination of cross-border transactions where structure is the product.",
      ],
      es: [
        "Jeremy asesora a operadores e inversionistas en fuentes alternativas de capital, estructuración transfronteriza y las realidades prácticas de desplegar capital fuera de los canales bancarios estándar.",
        "Sus compromisos abarcan crédito privado, colocaciones con un solo inversionista y la coordinación de transacciones transfronterizas donde la estructura es el producto.",
      ],
    },
    practices: ["alternative-capital-sourcing", "wealth-advisory"],
    languages: ["English", "Español"],
  },
  {
    id: "roberto-ortigoza",
    slug: "roberto-ortigoza",
    name: "Roberto Ortigoza",
    role: { en: "Member", es: "Socio" },
    location: { en: "México", es: "México" },
    bio: {
      en: [
        "Roberto advises on Mexican corporate structures, cross-border holding architecture, and the US/Mexico trade considerations that shape operating decisions for Mexus clients.",
        "He works with founders and families whose decisions span both sides of the border and must be executed with coordinated legal, fiscal, and operational substance.",
      ],
      es: [
        "Roberto asesora en estructuras corporativas mexicanas, arquitectura de holdings transfronterizos y las consideraciones del comercio EE. UU.–México que dan forma a las decisiones operativas de los clientes de Mexus.",
        "Trabaja con fundadores y familias cuyas decisiones cruzan ambos lados de la frontera y deben ejecutarse con sustancia legal, fiscal y operativa coordinada.",
      ],
    },
    practices: ["jurisdictional-optimization", "risk-management"],
    languages: ["Español", "English"],
  },
  {
    id: "federico-vielledent",
    slug: "federico-vielledent",
    name: "Federico Vielledent",
    role: { en: "Member", es: "Socio" },
    location: { en: "Americas", es: "Américas" },
    bio: {
      en: [
        "Federico advises on international talent mobility, executive relocation, and the interaction between immigration strategy and private capital decisions.",
        "He coordinates engagements where people, entities, and assets need to move together — typically across multiple jurisdictions and over long time horizons.",
      ],
      es: [
        "Federico asesora en movilidad de talento internacional, reubicación de ejecutivos y la interacción entre la estrategia migratoria y las decisiones de capital privado.",
        "Coordina compromisos en los que personas, entidades y activos deben moverse juntos — típicamente en múltiples jurisdicciones y en horizontes de largo plazo.",
      ],
    },
    practices: ["global-immigration-consulting", "alternative-capital-sourcing"],
    languages: ["Español", "English", "Português"],
  },
  {
    id: "david-arase",
    slug: "david-arase",
    name: "David Arase",
    role: { en: "Contributor", es: "Colaborador" },
    location: { en: "Americas", es: "Américas" },
    bio: { en: [], es: [] },
    practices: [],
    languages: ["English"],
  },
];

export function getPerson(slug: string): Person | undefined {
  return people.find((p) => p.slug === slug);
}
