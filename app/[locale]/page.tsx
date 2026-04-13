import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { HeroHome } from "@/components/home/HeroHome";
import { CapabilitiesOverview } from "@/components/home/CapabilitiesOverview";
import { CredibilitySection } from "@/components/home/CredibilitySection";
import { FeaturedInsights } from "@/components/home/FeaturedInsights";
import { OfficesPreview } from "@/components/home/OfficesPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Homepage flow (per client brief):
 *   1. Hero
 *   2. Services (Capabilities) — right under the top banner
 *   3. About (Credibility)
 *   4. Articles (Insights rail)
 *   5. Locations (Offices)
 *   6. Final CTA (Contact invitation)
 */
export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <HeroHome locale={locale} dict={dict} />
      <CapabilitiesOverview locale={locale} dict={dict} />
      <CredibilitySection locale={locale} dict={dict} />
      <FeaturedInsights locale={locale} dict={dict} />
      <OfficesPreview locale={locale} dict={dict} />
      <ContactCTA locale={locale} dict={dict} />
    </>
  );
}
