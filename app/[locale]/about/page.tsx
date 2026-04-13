import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, getDictionary, localizedPath } from "@/lib/i18n";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { ButtonLink } from "@/components/primitives/Button";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.nav.about,
    description: dict.home.credibilityTitle,
    path: "/about",
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.nav.about}
        title={dict.home.credibilityTitle}
        lede={dict.home.credibilityBody[0] ?? ""}
        breadcrumb={[
          { label: "Mexus Advisory", href: localizedPath("/", locale) },
          { label: dict.nav.about },
        ]}
      />

      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{locale === "es" ? "Nuestra postura" : "Our posture"}</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-6 text-[1.0625rem] leading-[1.8] text-ink-muted">
                {dict.home.credibilityBody.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="bone" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{locale === "es" ? "Cómo trabajamos" : "How we work"}</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <p className="text-lead max-w-[62ch] text-ink">
                {locale === "es"
                  ? "Pequeño, senior y discreto. Tomamos un número deliberadamente limitado de clientes para que cada compromiso tenga la atención que un principal exigente espera."
                  : "Small, senior, and private. We take a deliberately limited number of clients so that every engagement receives the attention a demanding principal expects."}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-10 border-t border-rule pt-14 md:grid-cols-3">
            <LinkArrow href={localizedPath("/about/people", locale)}>{dict.nav.people}</LinkArrow>
            <LinkArrow href={localizedPath("/about/offices", locale)}>{dict.nav.offices}</LinkArrow>
            <LinkArrow href={localizedPath("/partners-program", locale)}>
              {dict.nav.partners}
            </LinkArrow>
          </div>
        </Container>
      </Section>

      <Section tone="bone" size="standard">
        <Container>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <h2 className="font-display text-h2 max-w-xl text-ink">
              {dict.home.contactTitle}
            </h2>
            <ButtonLink href={localizedPath("/contact", locale)} variant="primary">
              {dict.common.contactFirm}
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
