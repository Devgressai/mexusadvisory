import type { Office } from "@/types/content";

export const offices: Office[] = [
  {
    id: "mexico-city",
    city: { en: "Mexico City", es: "Ciudad de México" },
    country: { en: "Mexico", es: "México" },
    address: "Polanco, Miguel Hidalgo, Mexico City",
    phone: "+52 55 0000 0000",
    hours: { en: "Mon–Fri, 9:00–18:00 CT", es: "Lun–Vie, 9:00–18:00 CT" },
    languages: ["Español", "English"],
    focus: {
      en: ["Mexican corporate & holding structures", "US/Mexico trade advisory", "Family advisory"],
      es: ["Estructuras corporativas y de tenencia mexicanas", "Asesoría comercial EE. UU.–México", "Asesoría familiar"],
    },
    primary: true,
  },
  {
    id: "new-york",
    city: { en: "New York", es: "Nueva York" },
    country: { en: "United States", es: "Estados Unidos" },
    address: "Midtown, New York, NY",
    phone: "+1 212 000 0000",
    hours: { en: "Mon–Fri, 9:00–18:00 ET", es: "Lun–Vie, 9:00–18:00 ET" },
    languages: ["English", "Español"],
    focus: {
      en: ["Cross-border capital sourcing", "US immigration pathways", "Wealth advisory"],
      es: ["Fuentes de capital transfronterizo", "Rutas migratorias EE. UU.", "Asesoría patrimonial"],
    },
  },
  {
    id: "miami",
    city: { en: "Miami", es: "Miami" },
    country: { en: "United States", es: "Estados Unidos" },
    address: "Brickell, Miami, FL",
    phone: "+1 305 000 0000",
    hours: { en: "Mon–Fri, 9:00–18:00 ET", es: "Lun–Vie, 9:00–18:00 ET" },
    languages: ["English", "Español", "Português"],
    focus: {
      en: ["LATAM family advisory", "Private banking coordination", "Relocation strategy"],
      es: ["Asesoría a familias LATAM", "Coordinación de banca privada", "Estrategia de reubicación"],
    },
  },
  {
    id: "monterrey",
    city: { en: "Monterrey", es: "Monterrey" },
    country: { en: "Mexico", es: "México" },
    address: "Valle Oriente, San Pedro Garza García",
    phone: "+52 81 0000 0000",
    hours: { en: "Mon–Fri, 9:00–18:00 CT", es: "Lun–Vie, 9:00–18:00 CT" },
    languages: ["Español", "English"],
    focus: {
      en: ["Industrial nearshoring", "Cross-border operating structures", "Founder advisory"],
      es: ["Nearshoring industrial", "Estructuras operativas transfronterizas", "Asesoría a fundadores"],
    },
  },
];

export function getOffice(id: string): Office | undefined {
  return offices.find((o) => o.id === id);
}
