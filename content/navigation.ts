import type { NavItem } from "@/types/content";

// Per client spec: menu has exactly three top-level items.
// Partners Program is TOP-LEVEL, not nested under About.
// Focus topics are reached from the homepage "Mexus Focus" section and the
// menu's featured column; Contact is reached via header/footer CTAs.
export const primaryNav: NavItem[] = [
  {
    label: { en: "Capabilities", es: "Capacidades" },
    href: "/capabilities",
    children: [
      {
        label: { en: "Global Immigration Consulting", es: "Consultoría Migratoria Global" },
        href: "/capabilities/global-immigration-consulting",
      },
      {
        label: { en: "Risk Management", es: "Gestión de Riesgo" },
        href: "/capabilities/risk-management",
      },
      {
        label: { en: "Alternative Capital Sourcing", es: "Fuentes Alternativas de Capital" },
        href: "/capabilities/alternative-capital-sourcing",
      },
      {
        label: { en: "Jurisdictional Optimization", es: "Optimización Jurisdiccional" },
        href: "/capabilities/jurisdictional-optimization",
      },
    ],
  },
  {
    label: { en: "About Mexus Advisory", es: "Sobre Mexus Advisory" },
    href: "/about",
    children: [
      { label: { en: "Our People", es: "Nuestro Equipo" }, href: "/about/people" },
      { label: { en: "Our Offices", es: "Nuestras Oficinas" }, href: "/about/offices" },
    ],
  },
  {
    label: {
      en: "Mexus Professional Partners Program",
      es: "Programa de Socios Profesionales Mexus",
    },
    href: "/partners-program",
  },
];

export const footerOffices: NavItem[] = [
  { label: { en: "Mexico City", es: "Ciudad de México" }, href: "/about/offices#mexico-city" },
  { label: { en: "El Paso", es: "El Paso" }, href: "/about/offices#el-paso" },
  { label: { en: "San Antonio", es: "San Antonio" }, href: "/about/offices#san-antonio" },
  { label: { en: "Ciudad Juárez", es: "Ciudad Juárez" }, href: "/about/offices#ciudad-juarez" },
  { label: { en: "Chihuahua", es: "Chihuahua" }, href: "/about/offices#chihuahua" },
];

export const footerAbout: NavItem[] = [
  { label: { en: "Our practice", es: "Nuestra práctica" }, href: "/about" },
  { label: { en: "Our people", es: "Nuestro equipo" }, href: "/about/people" },
  { label: { en: "Partners program", es: "Programa de socios" }, href: "/partners-program" },
];
