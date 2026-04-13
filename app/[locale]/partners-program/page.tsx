import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { partnersProgram } from "@/content/partners";
import { isLocale, getDictionary, localizedPath, t, tl } from "@/lib/i18n";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { ButtonLink } from "@/components/primitives/Button";
import { FadeRise } from "@/components/motion/FadeRise";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    title: t(partnersProgram.hero.title, locale),
    description: t(partnersProgram.hero.lede, locale),
    path: "/partners-program",
  });
}

export default async function PartnersProgramPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={t(partnersProgram.hero.eyebrow, locale)}
        title={t(partnersProgram.hero.title, locale)}
        lede={t(partnersProgram.hero.lede, locale)}
        breadcrumb={[
          { label: "Mexus Advisory", href: localizedPath("/", locale) },
          { label: dict.nav.partners },
        ]}
      />

      {/* Why partner */}
      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{locale === "es" ? "Por qué colaborar" : "Why partner"}</Eyebrow>
            </div>
            <ul className="md:col-span-8">
              {tl(partnersProgram.whyPartner, locale).map((item, idx) => (
                <li
                  key={idx}
                  className="grid grid-cols-[auto_1fr] items-start gap-6 border-t border-rule py-7 first:border-t-0 text-[1.0625rem] leading-[1.65] text-ink"
                >
                  <span className="eyebrow text-ink-muted tabular-nums">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Collaboration model */}
      <Section tone="bone" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{locale === "es" ? "Modelo de colaboración" : "Collaboration model"}</Eyebrow>
            </div>
            <ol className="md:col-span-8">
              {partnersProgram.collaborationModel.map((step) => (
                <li
                  key={step.step}
                  className="grid grid-cols-12 items-start gap-6 border-l border-navy-900 pl-8 pb-12 last:pb-0"
                >
                  <div className="col-span-12">
                    <p className="eyebrow text-ink-muted">{step.step}</p>
                    <h3 className="font-display mt-4 text-[1.375rem] leading-[1.2] tracking-[-0.015em] text-ink">
                      {t(step.title, locale)}
                    </h3>
                    <p className="mt-4 max-w-[60ch] text-[1rem] leading-[1.7] text-ink-muted">
                      {t(step.description, locale)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{locale === "es" ? "Beneficios" : "Benefits"}</Eyebrow>
            </div>
            <ul className="grid gap-6 md:col-span-8 md:grid-cols-2">
              {tl(partnersProgram.benefits, locale).map((item, idx) => (
                <li
                  key={idx}
                  className="border-t border-rule pt-6 text-[1rem] leading-[1.55] text-ink"
                >
                  <span aria-hidden className="block h-px w-6 bg-gold" />
                  <span className="mt-5 block">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Pull quote */}
      <Section tone="bone" size="standard">
        <Container>
          <FadeRise>
            <figure className="mx-auto max-w-4xl border-t border-rule pt-14">
              <blockquote className="font-display text-[clamp(1.625rem,2.4vw,2.25rem)] leading-[1.25] tracking-[-0.015em] text-ink">
                “{t(partnersProgram.pullQuote, locale)}”
              </blockquote>
              <figcaption className="eyebrow mt-8 text-ink-muted">
                — {t(partnersProgram.attribution, locale)}
              </figcaption>
            </figure>
          </FadeRise>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="paper" size="standard">
        <Container>
          <div className="flex flex-col items-start justify-between gap-10 border-t border-rule pt-14 md:flex-row md:items-end">
            <h2 className="font-display text-h2 max-w-xl text-ink">
              {locale === "es" ? "Iniciar una conversación" : "Start a conversation"}
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
