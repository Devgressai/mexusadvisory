import type { Office } from "@/types/content";
import { site } from "@/content/site";

export const offices: Office[] = [
  {
    id: "mexico-city",
    city: { en: "Mexico City", es: "Ciudad de México" },
    country: { en: "Mexico", es: "México" },
    address:
      "Rubén Darío 281, Polanco V Secc., Miguel Hidalgo, CDMX 11560",
    phone: site.whatsappDisplay,
    hours: { en: "Mon–Fri, 9:00–18:00 CT", es: "Lun–Vie, 9:00–18:00 CT" },
    languages: ["Español", "English"],
    focus: {
      en: [
        "Mexican corporate & holding structures",
        "Jurisdictional optimization",
        "Family office advisory",
      ],
      es: [
        "Estructuras corporativas y de tenencia mexicanas",
        "Optimización jurisdiccional",
        "Asesoría de family office",
      ],
    },
    primary: true,
  },
  {
    id: "el-paso",
    city: { en: "El Paso", es: "El Paso" },
    country: { en: "United States", es: "Estados Unidos" },
    address: "213 S. El Paso St., El Paso, TX 79901",
    phone: site.whatsappDisplay,
    hours: { en: "Mon–Fri, 9:00–18:00 MT", es: "Lun–Vie, 9:00–18:00 MT" },
    languages: ["English", "Español"],
    focus: {
      en: [
        "US immigration pathways",
        "Cross-border coordination",
        "Business and family visas",
      ],
      es: [
        "Rutas migratorias a EE. UU.",
        "Coordinación transfronteriza",
        "Visas de negocios y familiares",
      ],
    },
  },
  {
    id: "san-antonio",
    city: { en: "San Antonio", es: "San Antonio" },
    country: { en: "United States", es: "Estados Unidos" },
    address: "112 E Pecan St., San Antonio, TX 78205",
    phone: site.whatsappDisplay,
    hours: { en: "Mon–Fri, 9:00–18:00 CT", es: "Lun–Vie, 9:00–18:00 CT" },
    languages: ["English", "Español"],
    focus: {
      en: [
        "Investor and business visas",
        "US wealth structuring",
        "Cross-border legal coordination",
      ],
      es: [
        "Visas de inversionista y de negocios",
        "Estructuración patrimonial en EE. UU.",
        "Coordinación legal transfronteriza",
      ],
    },
  },
  {
    id: "ciudad-juarez",
    city: { en: "Ciudad Juárez", es: "Ciudad Juárez" },
    country: { en: "Mexico", es: "México" },
    address:
      "Blvd. Tomás Fernández #7930, Parque Industrial Antonio J. Bermúdez, Edificio A, 2º piso, Suite 204, 32460 Juárez, Chih.",
    phone: site.whatsappDisplay,
    hours: { en: "Mon–Fri, 9:00–18:00 MT", es: "Lun–Vie, 9:00–18:00 MT" },
    languages: ["Español", "English"],
    focus: {
      en: [
        "US/Mexico immigration",
        "Maquiladora and nearshoring advisory",
        "Cross-border risk management",
      ],
      es: [
        "Migración EE. UU.–México",
        "Asesoría a maquiladoras y nearshoring",
        "Gestión de riesgo transfronterizo",
      ],
    },
  },
  {
    id: "chihuahua",
    city: { en: "Chihuahua", es: "Chihuahua" },
    country: { en: "Mexico", es: "México" },
    address:
      "C. Monte Albán 5300, Local 13, Col. Real de Potreros, C.P. 31146, Cd. Chihuahua, Chih.",
    phone: site.whatsappDisplay,
    hours: { en: "Mon–Fri, 9:00–18:00 MT", es: "Lun–Vie, 9:00–18:00 MT" },
    languages: ["Español", "English"],
    focus: {
      en: [
        "Immigration law practice",
        "Regional family advisory",
        "Cross-border operations",
      ],
      es: [
        "Práctica de derecho migratorio",
        "Asesoría familiar regional",
        "Operaciones transfronterizas",
      ],
    },
  },
];

export function getOffice(id: string): Office | undefined {
  return offices.find((o) => o.id === id);
}
