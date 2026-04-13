import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isLocale, getDictionary } from "@/lib/i18n";
import { Header } from "@/components/shell/Header";
import { Footer } from "@/components/shell/Footer";
import { SkipLink } from "@/components/shell/SkipLink";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";
import { site } from "@/content/site";
import { t } from "@/lib/i18n";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    title: t(site.tagline, locale),
    description: t(site.description, locale),
    path: "/",
  });
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <MotionProvider>
      <SkipLink dict={dict} />
      <Header locale={locale} dict={dict} />
      <main id="main" lang={locale}>
        {children}
      </main>
      <Footer locale={locale} dict={dict} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd(locale)),
        }}
      />
    </MotionProvider>
  );
}
