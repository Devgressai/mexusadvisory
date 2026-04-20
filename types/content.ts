export type Locale = "en" | "es";

export const LOCALES: Locale[] = ["en", "es"];
export const DEFAULT_LOCALE: Locale = "en";

export interface LocalizedString {
  en: string;
  es: string;
}

export interface LocalizedStringList {
  en: string[];
  es: string[];
}

export interface Capability {
  id: string;
  slug: string;
  number: string;
  title: LocalizedString;
  lede: LocalizedString;
  thesis: LocalizedString;
  advisesOn: LocalizedStringList;
  audience: Array<{
    title: LocalizedString;
    description: LocalizedString;
  }>;
  themes: LocalizedStringList;
  process: Array<{
    step: string;
    title: LocalizedString;
    description: LocalizedString;
  }>;
  relatedFocus: string[];
}

export interface FocusTopic {
  id: string;
  slug: string;
  number: string;
  title: LocalizedString;
  lede: LocalizedString;
  dek: LocalizedString;
  landscape: LocalizedStringList;
  implications: LocalizedStringList;
  relatedCapabilities: string[];
  dateStamp: LocalizedString;
}

export interface Office {
  id: string;
  city: LocalizedString;
  country: LocalizedString;
  address: string;
  phone: string;
  hours: LocalizedString;
  languages: string[];
  focus: LocalizedStringList;
  primary?: boolean;
}

export type PersonTier = "member" | "executive";

export interface Person {
  id: string;
  slug: string;
  name: string;
  role: LocalizedString;
  location: LocalizedString;
  bio: LocalizedStringList;
  practices: string[];
  languages: string[];
  /** Which roster section this person belongs to on /about/people. */
  tier?: PersonTier;
  /** Direct email. Falls back to site.email if not set. */
  email?: string;
  /** Education credentials shown on the detail page. */
  education?: LocalizedString;
}

export interface NavItem {
  label: LocalizedString;
  href: string;
  children?: NavItem[];
}

export interface SiteSettings {
  name: string;
  tagline: LocalizedString;
  description: LocalizedString;
  email: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  legal: LocalizedString;
  baseUrl: string;
}
