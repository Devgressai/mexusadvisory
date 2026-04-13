import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { focusTopics, getFocusTopic } from "@/content/focus";
import { getCapability } from "@/content/capabilities";
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
  return focusTopics.flatMap((f) =>
    ["en", "es"].map((locale) => ({ locale, slug: f.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const topic = getFocusTopic(slug);
  if (!topic) return {};
  return buildMetadata({
    locale,
    title: t(topic.title, locale),
    description: t(topic.dek, locale),
    path: `/focus/${slug}`,
  });
}

export default async function FocusTopicPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const topic = getFocusTopic(slug);
  if (!topic) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={`${topic.number} · ${t(topic.title, locale)}`}
        title={t(topic.dek, locale)}
        lede={t(topic.lede, locale)}
        meta={`${dict.common.asOf} ${t(topic.dateStamp, locale)}`}
        breadcrumb={[
          { label: "Mexus Advisory", href: localizedPath("/", locale) },
          { label: dict.home.focusEyebrow },
          { label: t(topic.title, locale) },
        ]}
      />

      {/* Landscape */}
      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{locale === "es" ? "El panorama" : "The landscape"}</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <p className="type-lede max-w-[60ch] text-ink">{t(topic.lede, locale)}</p>
              <div className="mt-12 space-y-6 border-t border-rule pt-10 text-[1.0625rem] leading-[1.75] text-ink-muted">
                {tl(topic.landscape, locale).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Implications */}
      <Section tone="bone" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{locale === "es" ? "Implicaciones" : "Implications"}</Eyebrow>
            </div>
            <ul className="md:col-span-8">
              {tl(topic.implications, locale).map((item, idx) => (
                <li
                  key={idx}
                  className="grid grid-cols-[auto_1fr] items-start gap-6 border-t border-rule py-7 text-[1.0625rem] leading-[1.65] text-ink first:border-t-0"
                >
                  <span
                    aria-hidden
                    className="mt-[0.65em] inline-block h-[6px] w-[6px] rounded-full bg-gold"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Related capabilities */}
      <Section tone="paper" size="standard">
        <Container>
          <Eyebrow className="mb-10">{dict.common.relatedCapabilities}</Eyebrow>
          <div className="grid grid-cols-1 gap-8 border-t border-rule pt-10 md:grid-cols-3">
            {topic.relatedCapabilities.map((id) => {
              const cap = getCapability(id);
              if (!cap) return null;
              return (
                <FadeRise key={id}>
                  <Link
                    href={localizedPath(`/capabilities/${cap.slug}`, locale)}
                    className="group block"
                  >
                    <span aria-hidden className="block h-px w-6 bg-gold transition-all duration-500 group-hover:w-full" />
                    <p className="eyebrow mt-5 text-ink-muted">{cap.number}</p>
                    <h3 className="font-display mt-3 text-[1.25rem] leading-[1.2] tracking-[-0.015em] text-ink">
                      {t(cap.title, locale)}
                    </h3>
                  </Link>
                </FadeRise>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="bone" size="standard">
        <Container>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
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
