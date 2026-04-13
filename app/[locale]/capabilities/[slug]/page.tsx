import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { capabilities, getCapability } from "@/content/capabilities";
import { getFocusTopic } from "@/content/focus";
import { isLocale, getDictionary, localizedPath, t, tl } from "@/lib/i18n";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { ButtonLink } from "@/components/primitives/Button";
import { FadeRise } from "@/components/motion/FadeRise";
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
    description: t(cap.lede, locale),
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
    <>
      <PageHero
        eyebrow={`${cap.number} · ${dict.home.capabilitiesEyebrow}`}
        title={t(cap.title, locale)}
        lede={t(cap.lede, locale)}
        breadcrumb={[
          { label: "Mexus Advisory", href: localizedPath("/", locale) },
          { label: dict.nav.capabilities, href: localizedPath("/capabilities", locale) },
          { label: t(cap.title, locale) },
        ]}
      />

      {/* Thesis pull-quote */}
      <Section tone="paper" size="compact">
        <Container>
          <FadeRise>
            <figure className="mx-auto max-w-4xl border-t border-rule pt-14">
              <blockquote className="font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.25] tracking-[-0.015em] text-ink">
                “{t(cap.thesis, locale)}”
              </blockquote>
            </figure>
          </FadeRise>
        </Container>
      </Section>

      {/* What we advise on */}
      <Section tone="bone" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{locale === "es" ? "En qué asesoramos" : "What we advise on"}</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-rule border-t border-rule">
                {tl(cap.advisesOn, locale).map((item, idx) => (
                  <li
                    key={idx}
                    className="grid grid-cols-[auto_1fr] items-baseline gap-6 py-6 text-[1.0625rem] leading-[1.6] text-ink"
                  >
                    <span className="eyebrow text-ink-muted tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Audience */}
      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{locale === "es" ? "Para quién" : "Who it is for"}</Eyebrow>
            </div>
            <div className="grid grid-cols-1 gap-10 md:col-span-8 md:grid-cols-3 md:gap-6">
              {cap.audience.map((a, idx) => (
                <div key={idx} className="border-t border-rule pt-6">
                  <span aria-hidden className="block h-px w-8 bg-gold" />
                  <h3 className="font-display mt-5 text-[1.125rem] leading-[1.25] tracking-[-0.01em] text-ink">
                    {t(a.title, locale)}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-[1.65] text-ink-muted">
                    {t(a.description, locale)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Themes */}
      <Section tone="bone" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{locale === "es" ? "Temas estratégicos" : "Strategic themes"}</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-8 text-[1.0625rem] leading-[1.75] text-ink-muted">
                {tl(cap.themes, locale).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{locale === "es" ? "Cómo trabajamos" : "Engagement approach"}</Eyebrow>
            </div>
            <ol className="md:col-span-8">
              {cap.process.map((step, idx) => (
                <li
                  key={idx}
                  className="relative grid grid-cols-12 items-start gap-6 border-l border-navy-900 pl-8 pb-10 md:pb-14"
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

      {/* Related focus */}
      {cap.relatedFocus.length > 0 && (
        <Section tone="bone" size="standard">
          <Container>
            <Eyebrow className="mb-10">{dict.common.relatedFocus}</Eyebrow>
            <div className="grid grid-cols-1 gap-8 border-t border-rule pt-10 md:grid-cols-3">
              {cap.relatedFocus.map((id) => {
                const f = getFocusTopic(id);
                if (!f) return null;
                return (
                  <Link
                    key={id}
                    href={localizedPath(`/focus/${f.slug}`, locale)}
                    className="group block"
                  >
                    <span aria-hidden className="block h-px w-6 bg-gold transition-all duration-500 group-hover:w-full" />
                    <p className="eyebrow mt-5 text-ink-muted">{f.number}</p>
                    <h3 className="font-display mt-3 text-[1.25rem] leading-[1.2] tracking-[-0.015em] text-ink">
                      {t(f.title, locale)}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section tone="paper" size="standard">
        <Container>
          <div className="flex flex-col items-start justify-between gap-10 border-t border-rule pt-14 md:flex-row md:items-end">
            <h2 className="font-display type-h2 max-w-xl text-ink">
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
