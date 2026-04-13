import type { Metadata } from "next";
import type { Locale } from "@/types/content";
import { site } from "@/content/site";
import { t } from "./i18n";

interface BuildMetadataArgs {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
}

export function buildMetadata({
  locale,
  title,
  description,
  path = "/",
}: BuildMetadataArgs): Metadata {
  const url = `${site.baseUrl}${locale === "en" ? "" : "/es"}${path === "/" ? "" : path}`;
  return {
    title: `${title} — ${site.name}`,
    description,
    metadataBase: new URL(site.baseUrl),
    alternates: {
      canonical: url,
      languages: {
        en: `${site.baseUrl}${path === "/" ? "" : path}`,
        es: `${site.baseUrl}/es${path === "/" ? "" : path}`,
      },
    },
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: locale === "en" ? "en_US" : "es_MX",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: t(site.description, locale),
    url: site.baseUrl,
    email: site.email,
    telephone: site.whatsappDisplay,
    areaServed: ["US", "MX", "International"],
  };
}
