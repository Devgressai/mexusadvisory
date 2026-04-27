import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { capabilities, getCapability } from "@/content/capabilities";
import { isLocale, getDictionary, localizedPath, t, tl } from "@/lib/i18n";
import { Container } from "@/components/primitives/Container";
import { Breadcrumb } from "@/components/primitives/Breadcrumb";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GoldRule } from "@/components/primitives/Rule";
import { Reveal } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return capabilities.flatMap((c) =>
    ["en", "es"].map((locale) => ({ locale, slug: c.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const cap = getCapability(slug);
  if (!cap) return {};
  return buildMetadata({
    locale,
    title: t(cap.title, locale),
    description: tl(cap.overview, locale)[0] ?? "",
    path: `/capabilities/${slug}`,
  });
}

export default async function CapabilityPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const cap = getCapability(slug);
  if (!cap) notFound();
  const dict = getDictionary(locale);

  return (
    <section className="bg-paper pt-32 pb-28 md:pt-36 md:pb-32 lg:pt-40 lg:pb-40">
      <Container>
        <Breadcrumb
          items={[
            { label: "Mexus Advisory", href: localizedPath("/", locale) },
            {
              label: dict.nav.capabilities,
              href: localizedPath("/capabilities", locale),
            },
            { label: t(cap.title, locale) },
          ]}
          className="mb-8"
        />

        <Reveal>
          <header>
            <h1 className="font-display type-h1 max-w-[22ch] text-ink">
              {t(cap.title, locale)}
            </h1>
            <div className="mt-12 max-w-[6rem]">
              <GoldRule />
            </div>
          </header>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-10 md:mt-20 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>
                {locale === "es" ? "Resumen" : "Overview"}
              </Eyebrow>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-6 text-[1.0625rem] leading-[1.85] text-ink-muted">
                {tl(cap.overview, locale).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-rule pt-14 md:mt-20 md:grid-cols-12 md:pt-16">
            <div className="md:col-span-4">
              <Eyebrow>
                {locale === "es"
                  ? "Rol dentro de la Plataforma Mexus"
                  : "Role within the Mexus Platform"}
              </Eyebrow>
            </div>
            <div className="md:col-span-8">
              <p className="text-[1.0625rem] leading-[1.85] text-ink-muted">
                {t(cap.roleInPlatform, locale)}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-rule pt-14 md:mt-20 md:grid-cols-12 md:pt-16">
            <div className="md:col-span-4">
              <Eyebrow>
                {locale === "es" ? "Propuesta de Valor" : "Value Proposition"}
              </Eyebrow>
            </div>
            <div className="md:col-span-8">
              <p className="text-[1.0625rem] leading-[1.85] text-ink-muted">
                {t(cap.valueProposition, locale)}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
