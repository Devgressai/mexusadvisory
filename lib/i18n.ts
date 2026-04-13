import { en, type Dictionary } from "@/content/i18n/en";
import { es } from "@/content/i18n/es";
import type { Locale, LocalizedString, LocalizedStringList } from "@/types/content";

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export function t(value: LocalizedString, locale: Locale): string {
  return value[locale] ?? value.en;
}

export function tl(value: LocalizedStringList, locale: Locale): string[] {
  return value[locale] ?? value.en;
}

export function localizedPath(path: string, locale: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return clean;
  return `/es${clean === "/" ? "" : clean}`;
}

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "es";
}
