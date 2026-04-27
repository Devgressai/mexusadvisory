import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { foreignInvestments } from "@/content/foreign-investments";
import { isLocale, localizedPath, t, tl } from "@/lib/i18n";
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
    title: t(foreignInvestments.title, locale),
    description: t(foreignInvestments.subtitle, locale),
    path: "/foreign-investments",
  });
}

const sectionKeys = [
  "executiveSummary",
  "returnDecomposition",
  "caseStudyA",
  "caseStudyB",
  "partialHedge",
  "institutionalPositioning",
  "conclusion",
] as const;

export default async function ForeignInvestmentsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const fi = foreignInvestments;

  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 lg:pt-52 lg:pb-24">
        <Container>
          <Breadcrumb
            items={[
              { label: "Mexus Advisory", href: localizedPath("/", locale) },
              {
                label:
                  locale === "es"
                    ? "Inversión Extranjera"
                    : "Foreign Investments",
              },
            ]}
            className="mb-10"
          />
          <h1 className="font-display type-h1 max-w-5xl text-ink">
            {t(fi.title, locale)}
          </h1>
          <p className="mt-6 max-w-3xl text-[1rem] leading-[1.7] text-ink-muted">
            {t(fi.subtitle, locale)}
          </p>
          <p className="mt-4 text-[0.875rem] text-ink-muted">
            {t(fi.byLabel, locale)} {fi.authorName}
          </p>
          <div className="mt-12 max-w-[6rem]">
            <GoldRule />
          </div>
        </Container>
      </section>

      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-12">
            <div className="md:col-span-8 md:col-start-3">
              <div className="space-y-6 text-[1.0625rem] leading-[1.85] text-ink-muted">
                {tl(fi.intro, locale).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {sectionKeys.map((key) => {
                const section = fi[key];
                return (
                  <article key={key} className="mt-16 border-t border-rule pt-12">
                    <h2 className="font-display text-[clamp(1.375rem,2vw,1.75rem)] leading-[1.2] tracking-[-0.015em] text-ink">
                      {t(section.heading, locale)}
                    </h2>
                    <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.85] text-ink-muted">
                      {tl(section.body, locale).map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </article>
                );
              })}

              <article className="mt-16 border-t border-rule pt-12">
                <Eyebrow>{t(fi.disclosureLabel, locale)}</Eyebrow>
                <p className="mt-4 text-[0.9375rem] leading-[1.7] text-ink-muted italic">
                  {t(fi.disclosure, locale)}
                </p>
              </article>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
