import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { HeroHome } from "@/components/home/HeroHome";
import { FocusModules } from "@/components/home/FocusModules";
import { CapabilitiesOverview } from "@/components/home/CapabilitiesOverview";
import { CredibilitySection } from "@/components/home/CredibilitySection";
import { OfficesPreview } from "@/components/home/OfficesPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <HeroHome locale={locale} dict={dict} />
      <FocusModules locale={locale} dict={dict} />
      <CapabilitiesOverview locale={locale} dict={dict} />
      <CredibilitySection locale={locale} dict={dict} />
      <OfficesPreview locale={locale} dict={dict} />
      <ContactCTA locale={locale} dict={dict} />
    </>
  );
}
