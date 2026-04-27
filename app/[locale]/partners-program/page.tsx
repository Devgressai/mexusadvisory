import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { partnersProgram } from "@/content/partners";
import { isLocale, getDictionary, localizedPath, t, tl } from "@/lib/i18n";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Breadcrumb } from "@/components/primitives/Breadcrumb";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GoldRule } from "@/components/primitives/Rule";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    title: t(partnersProgram.title, locale),
    description: t(
      {
        en: partnersProgram.programOverview.intro.en[0] ?? "",
        es: partnersProgram.programOverview.intro.es[0] ?? "",
      },
      locale,
    ),
    path: "/partners-program",
  });
}

export default async function PartnersProgramPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const program = partnersProgram;

  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 lg:pt-52 lg:pb-24">
        <Container>
          <Breadcrumb
            items={[
              { label: "Mexus Advisory", href: localizedPath("/", locale) },
              { label: dict.nav.partners },
            ]}
            className="mb-10"
          />
          <h1 className="font-display type-h1 max-w-5xl text-ink">
            {t(program.title, locale)}
          </h1>
          <div className="mt-14 max-w-[6rem]">
            <GoldRule />
          </div>
        </Container>
      </section>

      {/* Program Overview */}
      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>
                {locale === "es" ? "Resumen del programa" : "Program Overview"}
              </Eyebrow>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-6 text-[1.0625rem] leading-[1.85] text-ink-muted">
                {tl(program.programOverview.intro, locale).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <p className="mt-10 text-[1.0625rem] leading-[1.85] text-ink-muted">
                {t(program.programOverview.relationshipsLeadIn, locale)}
              </p>
              <ul className="mt-5 space-y-3">
                {tl(program.programOverview.agreementTypes, locale).map(
                  (item, idx) => (
                    <li
                      key={idx}
                      className="grid grid-cols-[auto_1fr] items-baseline gap-3 text-[1rem] leading-[1.7] text-ink"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.55em] inline-block h-[4px] w-[4px] rounded-full bg-gold"
                      />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>

              <p className="mt-10 text-[1.0625rem] leading-[1.85] text-ink-muted">
                {t(program.programOverview.independenceNote, locale)}
              </p>

              <p className="mt-10 text-[1.0625rem] leading-[1.85] text-ink-muted">
                {t(program.programOverview.pillarsLeadIn, locale)}
              </p>
              <ul className="mt-5 space-y-3">
                {tl(program.programOverview.pillars, locale).map(
                  (item, idx) => (
                    <li
                      key={idx}
                      className="grid grid-cols-[auto_1fr] items-baseline gap-3 text-[1rem] leading-[1.7] text-ink"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.55em] inline-block h-[4px] w-[4px] rounded-full bg-gold"
                      />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>

              <p className="mt-10 text-[1.0625rem] leading-[1.85] text-ink-muted">
                {t(program.programOverview.integrationNote, locale)}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Professional Competency Areas */}
      <Section tone="bone" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>
                {locale === "es"
                  ? "Áreas de Competencia Profesional"
                  : "Professional Competency Areas"}
              </Eyebrow>
            </div>
            <div className="md:col-span-8">
              <div className="border-t border-rule">
                {program.competencyAreas.map((area, areaIdx) => (
                  <article
                    key={areaIdx}
                    className="border-b border-rule py-12 last:border-b-0 md:py-14"
                  >
                    <h2 className="font-display text-[clamp(1.375rem,2vw,1.75rem)] leading-[1.2] tracking-[-0.015em] text-ink">
                      {t(area.title, locale)}
                    </h2>

                    <div className="mt-8">
                      <Eyebrow>
                        {locale === "es"
                          ? "Rol en el Programa"
                          : "Role within the Program"}
                      </Eyebrow>
                      <div className="mt-5 space-y-5 text-[1rem] leading-[1.8] text-ink-muted">
                        {tl(area.roleBefore, locale).map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>

                      {area.focusAreasLeadIn && area.focusAreas && (
                        <>
                          <p className="mt-5 text-[1rem] leading-[1.8] text-ink-muted">
                            {t(area.focusAreasLeadIn, locale)}
                          </p>
                          <ul className="mt-4 space-y-2.5">
                            {tl(area.focusAreas, locale).map((item, idx) => (
                              <li
                                key={idx}
                                className="grid grid-cols-[auto_1fr] items-baseline gap-3 text-[0.9375rem] leading-[1.55] text-ink"
                              >
                                <span
                                  aria-hidden
                                  className="mt-[0.55em] inline-block h-[4px] w-[4px] rounded-full bg-gold"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {area.roleAfter && (
                        <div className="mt-5 space-y-5 text-[1rem] leading-[1.8] text-ink-muted">
                          {tl(area.roleAfter, locale).map((para, idx) => (
                            <p key={idx}>{para}</p>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-10">
                      <Eyebrow>
                        {locale === "es"
                          ? "Propuesta de Valor"
                          : "Value Proposition"}
                      </Eyebrow>
                      <div className="mt-5 space-y-5 text-[1rem] leading-[1.8] text-ink-muted">
                        {tl(area.valueProp, locale).map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Mexus Advisory Advantage */}
      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{t(program.advantage.title, locale)}</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-6 text-[1.0625rem] leading-[1.85] text-ink-muted">
                {tl(program.advantage.body, locale).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <p className="mt-10 text-[1.0625rem] leading-[1.85] text-ink-muted">
                {t(program.advantage.benefitsLeadIn, locale)}
              </p>
              <ul className="mt-5 space-y-3">
                {tl(program.advantage.benefits, locale).map((item, idx) => (
                  <li
                    key={idx}
                    className="grid grid-cols-[auto_1fr] items-baseline gap-3 text-[1rem] leading-[1.7] text-ink"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.55em] inline-block h-[4px] w-[4px] rounded-full bg-gold"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-[1.0625rem] leading-[1.85] text-ink-muted">
                {t(program.advantage.closer, locale)}
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
