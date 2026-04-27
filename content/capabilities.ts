import type { Capability } from "@/types/content";

export const capabilities: Capability[] = [
  {
    id: "global-immigration-consulting",
    slug: "global-immigration-consulting",
    title: {
      en: "Global Immigration Consulting",
      es: "Consultoría Migratoria Global",
    },
    overview: {
      en: [
        "Global Immigration Consulting at Mexus Advisory focuses on the strategic movement of individuals across borders. Through coordination with experienced immigration professionals, Mexus supports clients navigating visa processes, residency planning, and international relocation strategies.",
        "This capability is integrated within a broader advisory framework, ensuring that mobility decisions align with financial, business, and long-term planning objectives.",
      ],
      es: [
        "La Consultoría Migratoria Global de Mexus Advisory se enfoca en el movimiento estratégico de individuos a través de fronteras. Mediante la coordinación con profesionales experimentados en migración, Mexus apoya a los clientes en procesos de visa, planificación de residencia y estrategias de reubicación internacional.",
        "Esta capacidad se integra dentro de un marco de asesoría más amplio, asegurando que las decisiones de movilidad se alineen con los objetivos financieros, de negocio y de planificación a largo plazo.",
      ],
    },
    roleInPlatform: {
      en: "Mexus facilitates collaboration between immigration counsel and other advisory disciplines to ensure that relocation and mobility decisions are not made in isolation, but as part of a coordinated global strategy.",
      es: "Mexus facilita la colaboración entre los asesores migratorios y otras disciplinas de asesoría para asegurar que las decisiones de reubicación y movilidad no se tomen de forma aislada, sino como parte de una estrategia global coordinada.",
    },
    valueProposition: {
      en: "Clients benefit from structured immigration pathways that support investment positioning, operational expansion, and family objectives while maintaining regulatory clarity and efficiency across jurisdictions.",
      es: "Los clientes se benefician de rutas migratorias estructuradas que respaldan el posicionamiento de inversión, la expansión operativa y los objetivos familiares, manteniendo claridad regulatoria y eficiencia entre jurisdicciones.",
    },
    relatedFocus: ["immigration-volatility", "us-mexico-trade"],
  },
  {
    id: "risk-management",
    slug: "risk-management",
    title: {
      en: "Risk Management",
      es: "Gestión de Riesgo",
    },
    overview: {
      en: [
        "Risk Management focuses on protecting individuals, families, and businesses operating across multiple jurisdictions. Through collaboration with specialized professionals, Mexus coordinates strategies that address exposure related to health, life, liability, and asset protection.",
        "This capability functions as a foundational layer within broader cross-border planning.",
      ],
      es: [
        "La Gestión de Riesgo se enfoca en proteger a individuos, familias y empresas que operan en múltiples jurisdicciones. Mediante la colaboración con profesionales especializados, Mexus coordina estrategias que abordan la exposición relacionada con salud, vida, responsabilidad y protección patrimonial.",
        "Esta capacidad funciona como una capa fundamental dentro de la planificación transfronteriza más amplia.",
      ],
    },
    roleInPlatform: {
      en: "Mexus integrates risk strategies with planning, estate considerations, and operational structures to ensure continuity and stability regardless of external circumstances.",
      es: "Mexus integra las estrategias de riesgo con la planificación, las consideraciones patrimoniales y las estructuras operativas para asegurar la continuidad y la estabilidad independientemente de las circunstancias externas.",
    },
    valueProposition: {
      en: "Clients gain access to structured protection strategies designed to preserve assets, maintain liquidity, and safeguard long-term outcomes across borders.",
      es: "Los clientes obtienen acceso a estrategias de protección estructuradas, diseñadas para preservar activos, mantener liquidez y salvaguardar resultados de largo plazo a través de fronteras.",
    },
    relatedFocus: ["immigration-volatility", "us-mexico-trade"],
  },
  {
    id: "alternative-capital-sourcing",
    slug: "alternative-capital-sourcing",
    title: {
      en: "Alternative Capital Sourcing",
      es: "Fuentes Alternativas de Capital",
    },
    overview: {
      en: [
        "Alternative Capital Sourcing focuses on facilitating access to capital beyond traditional financing channels. Mexus works alongside capital providers and financial professionals to support liquidity, expansion, and restructuring initiatives.",
        "Solutions may include private credit, equity participation, and structured liquidity events.",
      ],
      es: [
        "La búsqueda de Fuentes Alternativas de Capital se enfoca en facilitar el acceso a capital más allá de los canales tradicionales de financiamiento. Mexus trabaja junto a proveedores de capital y profesionales financieros para apoyar iniciativas de liquidez, expansión y reestructuración.",
        "Las soluciones pueden incluir crédito privado, participación de capital y eventos de liquidez estructurada.",
      ],
    },
    roleInPlatform: {
      en: "Mexus aligns capital strategies with operational and long-term business objectives, ensuring that financing decisions support broader strategic positioning.",
      es: "Mexus alinea las estrategias de capital con los objetivos operativos y de negocio a largo plazo, asegurando que las decisiones de financiamiento respalden el posicionamiento estratégico más amplio.",
    },
    valueProposition: {
      en: "Clients gain access to structured capital solutions that unlock value, support growth, and enhance financial flexibility without compromising long-term control.",
      es: "Los clientes obtienen acceso a soluciones de capital estructuradas que desbloquean valor, respaldan el crecimiento y aumentan la flexibilidad financiera sin comprometer el control a largo plazo.",
    },
    relatedFocus: ["international-investments", "us-mexico-trade"],
  },
  {
    id: "jurisdictional-optimization",
    slug: "jurisdictional-optimization",
    title: {
      en: "Jurisdictional Optimization for Multinational Businesses",
      es: "Optimización Jurisdiccional para Negocios Multinacionales",
    },
    overview: {
      en: [
        "Jurisdictional Optimization focuses on the strategic placement of business operations across legal and regulatory environments. This capability addresses where and how businesses operate globally.",
        "It involves evaluating jurisdictional frameworks, operational structures, and market positioning.",
      ],
      es: [
        "La Optimización Jurisdiccional se enfoca en la ubicación estratégica de las operaciones empresariales a través de entornos legales y regulatorios. Esta capacidad aborda dónde y cómo operan las empresas a nivel global.",
        "Implica la evaluación de marcos jurisdiccionales, estructuras operativas y posicionamiento de mercado.",
      ],
    },
    roleInPlatform: {
      en: "Mexus coordinates legal, tax, and advisory professionals to align corporate structure, financial flows, and operational presence with strategic objectives.",
      es: "Mexus coordina a profesionales legales, fiscales y de asesoría para alinear la estructura corporativa, los flujos financieros y la presencia operativa con los objetivos estratégicos.",
    },
    valueProposition: {
      en: "Clients benefit from optimized jurisdictional positioning that enhances efficiency, reduces exposure, and supports scalable international operations.",
      es: "Los clientes se benefician de un posicionamiento jurisdiccional optimizado que mejora la eficiencia, reduce la exposición y respalda operaciones internacionales escalables.",
    },
    relatedFocus: ["international-investments", "us-mexico-trade"],
  },
];

export function getCapability(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
