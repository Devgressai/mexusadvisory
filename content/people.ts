import type { Person } from "@/types/content";

export const people: Person[] = [
  {
    id: "ea",
    slug: "e-alvarez",
    name: "E. Álvarez",
    role: { en: "Managing Partner", es: "Socio Director" },
    location: { en: "Mexico City", es: "Ciudad de México" },
    bio: {
      en: [
        "Twenty years of private advisory work spanning immigration, capital structuring, and family governance across the Americas.",
        "Leads the firm's US/Mexico practice and sits on the partners committee.",
      ],
      es: [
        "Veinte años de asesoría privada en migración, estructuración de capital y gobernanza familiar en las Américas.",
        "Dirige la práctica EE. UU.–México del despacho y forma parte del comité de socios.",
      ],
    },
    practices: ["global-immigration-consulting", "wealth-advisory", "jurisdictional-optimization"],
    languages: ["Español", "English"],
  },
  {
    id: "mc",
    slug: "m-chen",
    name: "M. Chen",
    role: { en: "Partner, Risk & Jurisdiction", es: "Socia, Riesgo y Jurisdicción" },
    location: { en: "New York", es: "Nueva York" },
    bio: {
      en: [
        "Background in cross-border regulatory advisory and private-client risk management.",
        "Advises principals on political, reputational, and regulatory exposure across multiple jurisdictions.",
      ],
      es: [
        "Experiencia en asesoría regulatoria transfronteriza y gestión de riesgo para clientes privados.",
        "Asesora a principales sobre exposición política, reputacional y regulatoria en múltiples jurisdicciones.",
      ],
    },
    practices: ["risk-management", "jurisdictional-optimization"],
    languages: ["English", "中文", "Español"],
  },
  {
    id: "rs",
    slug: "r-silva",
    name: "R. Silva",
    role: { en: "Partner, Capital", es: "Socio, Capital" },
    location: { en: "Miami", es: "Miami" },
    bio: {
      en: [
        "Senior practitioner in private credit, family-office capital, and cross-border structured transactions.",
        "Works with operators whose capital needs fall outside standard bank channels.",
      ],
      es: [
        "Practicante senior en crédito privado, capital de family offices y transacciones estructuradas transfronterizas.",
        "Trabaja con operadores cuyas necesidades de capital quedan fuera de los canales bancarios estándar.",
      ],
    },
    practices: ["alternative-capital-sourcing", "wealth-advisory"],
    languages: ["English", "Português", "Español"],
  },
  {
    id: "lh",
    slug: "l-herrera",
    name: "L. Herrera",
    role: { en: "Partner, Immigration", es: "Socia, Migración" },
    location: { en: "Monterrey", es: "Monterrey" },
    bio: {
      en: [
        "Coordinates the firm's global immigration practice, with particular depth in US, Canadian, and EU pathways.",
        "Advises founders and families on parallel-pathway relocation strategy.",
      ],
      es: [
        "Coordina la práctica migratoria global del despacho, con especial profundidad en rutas a EE. UU., Canadá y la UE.",
        "Asesora a fundadores y familias en estrategias de reubicación con rutas paralelas.",
      ],
    },
    practices: ["global-immigration-consulting"],
    languages: ["Español", "English", "Français"],
  },
];

export function getPerson(slug: string): Person | undefined {
  return people.find((p) => p.slug === slug);
}
