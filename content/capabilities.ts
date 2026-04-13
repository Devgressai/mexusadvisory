import type { Capability } from "@/types/content";

export const capabilities: Capability[] = [
  {
    id: "global-immigration-consulting",
    slug: "global-immigration-consulting",
    number: "01",
    title: {
      en: "Global Immigration Consulting",
      es: "Consultoría Migratoria Global",
    },
    lede: {
      en: "Strategic guidance for principals relocating themselves, their families, or their operations across jurisdictions.",
      es: "Asesoría estratégica para principales que reubican a sí mismos, a sus familias o a sus operaciones entre jurisdicciones.",
    },
    thesis: {
      en: "Relocation is a capital decision, not a paperwork exercise.",
      es: "La reubicación es una decisión de capital, no un trámite.",
    },
    advisesOn: {
      en: [
        "Investor and founder visa pathways across the US, Mexico, Canada, EU, UK, UAE, and Caribbean jurisdictions",
        "Family relocation strategy and secondary residencies",
        "Executive mobility programs for multinationals",
        "Naturalization timelines and dual-nationality considerations",
        "Exit and entry sequencing for sensitive jurisdictions",
      ],
      es: [
        "Rutas de visa para inversionistas y fundadores en EE. UU., México, Canadá, UE, Reino Unido, EAU y el Caribe",
        "Estrategia de reubicación familiar y residencias secundarias",
        "Programas de movilidad ejecutiva para multinacionales",
        "Plazos de naturalización y consideraciones de doble nacionalidad",
        "Secuenciación de salida y entrada en jurisdicciones sensibles",
      ],
    },
    audience: [
      {
        title: {
          en: "Founders relocating operations",
          es: "Fundadores reubicando operaciones",
        },
        description: {
          en: "When the company must move because the founder must move.",
          es: "Cuando la empresa debe moverse porque el fundador debe moverse.",
        },
      },
      {
        title: {
          en: "Families establishing second jurisdictions",
          es: "Familias estableciendo segundas jurisdicciones",
        },
        description: {
          en: "Multi-generational planning under changing regimes.",
          es: "Planeación multigeneracional bajo regímenes cambiantes.",
        },
      },
      {
        title: {
          en: "Investors optimizing residency",
          es: "Inversionistas optimizando residencia",
        },
        description: {
          en: "Capital-linked visas aligned with long-term tax posture.",
          es: "Visas vinculadas al capital alineadas con postura fiscal a largo plazo.",
        },
      },
    ],
    themes: {
      en: [
        "Treating immigration as a component of the overall capital and risk posture — never in isolation.",
        "Building optionality: parallel pathways so a single regulatory shift does not force a bad decision.",
        "Coordinating with tax, estate, and corporate counsel so nothing slips between disciplines.",
      ],
      es: [
        "Tratar la migración como un componente de la postura general de capital y riesgo — nunca de forma aislada.",
        "Construir opcionalidad: rutas paralelas para que un solo cambio regulatorio no obligue a una mala decisión.",
        "Coordinar con asesores fiscales, patrimoniales y corporativos para que nada se escape entre disciplinas.",
      ],
    },
    process: [
      {
        step: "01",
        title: { en: "Brief", es: "Brief" },
        description: {
          en: "A confidential conversation to understand the decision, the timeline, and the constraints.",
          es: "Una conversación confidencial para comprender la decisión, el plazo y las restricciones.",
        },
      },
      {
        step: "02",
        title: { en: "Landscape", es: "Panorama" },
        description: {
          en: "A written view of the viable pathways, trade-offs, and sequencing.",
          es: "Una visión escrita de las rutas viables, compensaciones y secuenciación.",
        },
      },
      {
        step: "03",
        title: { en: "Engagement", es: "Compromiso" },
        description: {
          en: "Coordinated execution with the specialist counsel best suited to each step.",
          es: "Ejecución coordinada con el asesor especialista mejor adecuado para cada paso.",
        },
      },
    ],
    relatedFocus: ["immigration-volatility", "us-mexico-trade"],
  },
  {
    id: "risk-management",
    slug: "risk-management",
    number: "02",
    title: {
      en: "Risk Management",
      es: "Gestión de Riesgo",
    },
    lede: {
      en: "Identifying, quantifying, and mitigating the political, jurisdictional, and reputational risks that follow cross-border decisions.",
      es: "Identificar, cuantificar y mitigar los riesgos políticos, jurisdiccionales y reputacionales que siguen a las decisiones transfronterizas.",
    },
    thesis: {
      en: "Risk that is not named cannot be priced.",
      es: "El riesgo no nombrado no se puede valorar.",
    },
    advisesOn: {
      en: [
        "Political and regulatory risk assessment across the Americas",
        "Counter-party due diligence and source-of-funds review",
        "Contingency planning for sudden jurisdictional shifts",
        "Reputational exposure and private communications strategy",
      ],
      es: [
        "Evaluación de riesgo político y regulatorio en las Américas",
        "Due diligence de contraparte y revisión de origen de fondos",
        "Planes de contingencia ante cambios jurisdiccionales repentinos",
        "Exposición reputacional y estrategia de comunicaciones privadas",
      ],
    },
    audience: [
      {
        title: { en: "Family principals", es: "Principales familiares" },
        description: {
          en: "When a misstep becomes a generational problem.",
          es: "Cuando un paso en falso se convierte en un problema generacional.",
        },
      },
      {
        title: { en: "Founders facing concentrated exposure", es: "Fundadores con exposición concentrada" },
        description: {
          en: "Single-jurisdiction, single-buyer, single-regulator situations.",
          es: "Situaciones de una sola jurisdicción, comprador o regulador.",
        },
      },
      {
        title: { en: "Investors entering new geographies", es: "Inversionistas entrando a nuevas geografías" },
        description: {
          en: "The risks that only reveal themselves after deployment.",
          es: "Los riesgos que sólo se revelan después del despliegue.",
        },
      },
    ],
    themes: {
      en: [
        "Treating risk advisory as a continuous posture, not a one-off report.",
        "Separating the risks that can be insured, hedged, avoided, or simply borne.",
        "Bringing calm to rooms where calm is scarce.",
      ],
      es: [
        "Tratar la asesoría de riesgo como una postura continua, no un informe único.",
        "Separar los riesgos que se pueden asegurar, cubrir, evitar o simplemente soportar.",
        "Traer calma a habitaciones donde la calma escasea.",
      ],
    },
    process: [
      {
        step: "01",
        title: { en: "Map", es: "Mapeo" },
        description: {
          en: "A written inventory of exposures — known, suspected, and latent.",
          es: "Un inventario escrito de exposiciones — conocidas, sospechadas y latentes.",
        },
      },
      {
        step: "02",
        title: { en: "Prioritize", es: "Priorizar" },
        description: {
          en: "Separating what is likely, costly, and addressable from what is not.",
          es: "Separar lo probable, costoso y abordable de lo que no lo es.",
        },
      },
      {
        step: "03",
        title: { en: "Advise", es: "Asesorar" },
        description: {
          en: "A posture — not a plan — updated as the terrain changes.",
          es: "Una postura — no un plan — actualizada conforme el terreno cambia.",
        },
      },
    ],
    relatedFocus: ["immigration-volatility", "us-mexico-trade"],
  },
  {
    id: "wealth-advisory",
    slug: "wealth-advisory",
    number: "03",
    title: {
      en: "Wealth Advisory",
      es: "Asesoría Patrimonial",
    },
    lede: {
      en: "Independent, senior counsel on how cross-border wealth is structured, preserved, and transferred.",
      es: "Asesoría independiente y senior sobre cómo el patrimonio transfronterizo se estructura, preserva y transfiere.",
    },
    thesis: {
      en: "Wealth advice should be given by people paid to be right, not to sell.",
      es: "La asesoría patrimonial debe provenir de quienes cobran por acertar, no por vender.",
    },
    advisesOn: {
      en: [
        "Cross-border wealth structuring and holding architecture",
        "Succession and generational transfer planning",
        "Fiduciary selection and oversight",
        "Coordination across banking, legal, and tax specialists",
      ],
      es: [
        "Estructuración patrimonial transfronteriza y arquitectura de tenencia",
        "Planeación de sucesión y transferencia generacional",
        "Selección y supervisión fiduciaria",
        "Coordinación entre banca, asesores legales y fiscales",
      ],
    },
    audience: [
      {
        title: { en: "First-generation wealth", es: "Patrimonio de primera generación" },
        description: {
          en: "When the founder is also the steward.",
          es: "Cuando el fundador es también el custodio.",
        },
      },
      {
        title: { en: "Multi-jurisdictional families", es: "Familias multijurisdiccionales" },
        description: {
          en: "Members in three countries, holdings in five.",
          es: "Miembros en tres países, participaciones en cinco.",
        },
      },
      {
        title: { en: "Post-liquidity principals", es: "Principales post-liquidez" },
        description: {
          en: "The decisions after the exit, not before.",
          es: "Las decisiones después de la salida, no antes.",
        },
      },
    ],
    themes: {
      en: [
        "Independence from product. We are not a distribution channel.",
        "Clarity over complexity. A structure that cannot be explained to the next generation will not survive it.",
      ],
      es: [
        "Independencia del producto. No somos un canal de distribución.",
        "Claridad sobre complejidad. Una estructura que no se puede explicar a la siguiente generación no la sobrevivirá.",
      ],
    },
    process: [
      {
        step: "01",
        title: { en: "Diagnose", es: "Diagnosticar" },
        description: {
          en: "A structured review of what exists and why.",
          es: "Una revisión estructurada de lo que existe y por qué.",
        },
      },
      {
        step: "02",
        title: { en: "Design", es: "Diseñar" },
        description: {
          en: "A proposed architecture — and, just as importantly, what to leave alone.",
          es: "Una arquitectura propuesta — y, con igual importancia, qué dejar intacto.",
        },
      },
      {
        step: "03",
        title: { en: "Steward", es: "Custodiar" },
        description: {
          en: "Ongoing oversight of fiduciaries, bankers, and counsel.",
          es: "Supervisión continua de fiduciarios, banqueros y asesores.",
        },
      },
    ],
    relatedFocus: ["international-investments"],
  },
  {
    id: "alternative-capital-sourcing",
    slug: "alternative-capital-sourcing",
    number: "04",
    title: {
      en: "Alternative Capital Sourcing",
      es: "Fuentes Alternativas de Capital",
    },
    lede: {
      en: "Access to private, strategic, and cross-border capital for operators and investors whose needs do not fit standard channels.",
      es: "Acceso a capital privado, estratégico y transfronterizo para operadores e inversionistas cuyas necesidades no encajan en canales estándar.",
    },
    thesis: {
      en: "The right capital is worth more than the cheapest capital.",
      es: "El capital correcto vale más que el capital más barato.",
    },
    advisesOn: {
      en: [
        "Private debt and structured credit placement",
        "Family office and single-LP strategic capital",
        "Cross-border bridge and growth capital",
        "Introduction to aligned long-horizon investors",
      ],
      es: [
        "Colocación de deuda privada y crédito estructurado",
        "Capital estratégico de family offices e inversionistas individuales",
        "Capital puente y de crecimiento transfronterizo",
        "Introducción a inversionistas alineados de largo plazo",
      ],
    },
    audience: [
      {
        title: { en: "Operators outside standard bank criteria", es: "Operadores fuera de criterios bancarios estándar" },
        description: {
          en: "Strong businesses, unconventional shapes.",
          es: "Negocios sólidos, formas no convencionales.",
        },
      },
      {
        title: { en: "Cross-border transactions", es: "Transacciones transfronterizas" },
        description: {
          en: "Capital that has to travel cleanly.",
          es: "Capital que debe viajar limpiamente.",
        },
      },
      {
        title: { en: "Strategic minority positions", es: "Posiciones minoritarias estratégicas" },
        description: {
          en: "Partners, not just money.",
          es: "Socios, no sólo dinero.",
        },
      },
    ],
    themes: {
      en: [
        "We work on the side of the principal, not the transaction.",
        "Structure is the product. Terms compound across a decade.",
      ],
      es: [
        "Trabajamos del lado del principal, no de la transacción.",
        "La estructura es el producto. Los términos se acumulan a lo largo de una década.",
      ],
    },
    process: [
      {
        step: "01",
        title: { en: "Frame", es: "Enmarcar" },
        description: {
          en: "What is the capital actually for, and over what horizon.",
          es: "Para qué es realmente el capital, y en qué horizonte.",
        },
      },
      {
        step: "02",
        title: { en: "Match", es: "Emparejar" },
        description: {
          en: "Introductions to investors whose mandates fit.",
          es: "Presentaciones a inversionistas cuyos mandatos encajan.",
        },
      },
      {
        step: "03",
        title: { en: "Negotiate", es: "Negociar" },
        description: {
          en: "Senior presence on your side of the table.",
          es: "Presencia senior en su lado de la mesa.",
        },
      },
    ],
    relatedFocus: ["international-investments", "us-mexico-trade"],
  },
  {
    id: "jurisdictional-optimization",
    slug: "jurisdictional-optimization",
    number: "05",
    title: {
      en: "Jurisdictional Optimization",
      es: "Optimización Jurisdiccional",
    },
    lede: {
      en: "Holding architecture, operational footprint, and personal presence — designed so each decision supports the next.",
      es: "Arquitectura de tenencia, huella operativa y presencia personal — diseñadas para que cada decisión apoye la siguiente.",
    },
    thesis: {
      en: "Jurisdiction is a compound decision. Small choices today resolve — or compound — over a decade.",
      es: "La jurisdicción es una decisión compuesta. Las pequeñas elecciones de hoy se resuelven — o se agravan — a lo largo de una década.",
    },
    advisesOn: {
      en: [
        "Holding and operating company architecture across jurisdictions",
        "Treaty network optimization",
        "Residency, domicile, and tax-home alignment",
        "Relocation of key people to support the structure",
      ],
      es: [
        "Arquitectura de holdings y operativas entre jurisdicciones",
        "Optimización de la red de tratados",
        "Alineación de residencia, domicilio y hogar fiscal",
        "Reubicación de personas clave para apoyar la estructura",
      ],
    },
    audience: [
      {
        title: { en: "Operating businesses going international", es: "Negocios operativos internacionalizándose" },
        description: {
          en: "The first expansion is the most consequential.",
          es: "La primera expansión es la más trascendente.",
        },
      },
      {
        title: { en: "Investors consolidating holdings", es: "Inversionistas consolidando tenencias" },
        description: {
          en: "From a scattered portfolio to a coherent posture.",
          es: "De un portafolio disperso a una postura coherente.",
        },
      },
      {
        title: { en: "Pre-transaction restructuring", es: "Reestructuración previa a transacción" },
        description: {
          en: "Months, not weeks, of lead time.",
          es: "Meses, no semanas, de anticipación.",
        },
      },
    ],
    themes: {
      en: [
        "No tax advice without operational substance behind it.",
        "A structure that only works under one administration is not a structure.",
      ],
      es: [
        "Sin sustancia operativa detrás, no hay asesoría fiscal válida.",
        "Una estructura que sólo funciona bajo una administración no es una estructura.",
      ],
    },
    process: [
      {
        step: "01",
        title: { en: "Read the board", es: "Leer el tablero" },
        description: {
          en: "Where are you, where do you want to be, what has moved.",
          es: "Dónde está, a dónde quiere llegar, qué se ha movido.",
        },
      },
      {
        step: "02",
        title: { en: "Model alternatives", es: "Modelar alternativas" },
        description: {
          en: "Two or three viable architectures with explicit trade-offs.",
          es: "Dos o tres arquitecturas viables con compensaciones explícitas.",
        },
      },
      {
        step: "03",
        title: { en: "Sequence", es: "Secuenciar" },
        description: {
          en: "Because order of operations is half the outcome.",
          es: "Porque el orden de operaciones es la mitad del resultado.",
        },
      },
    ],
    relatedFocus: ["international-investments", "us-mexico-trade"],
  },
];

export function getCapability(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
