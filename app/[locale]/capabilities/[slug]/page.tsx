import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { capabilities, getCapability } from "@/content/capabilities";
import { getFocusTopic } from "@/content/focus";
import { imagery } from "@/content/imagery";
import { isLocale, getDictionary, localizedPath, t, tl } from "@/lib/i18n";
import { Container } from "@/components/primitives/Container";
import { Breadcrumb } from "@/components/primitives/Breadcrumb";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { ButtonLink } from "@/components/primitives/Button";
import { Reveal } from "@/components/motion/Reveal";
import { getImage } from "@/lib/imagery";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

const IMAGE_BY_SLUG: Record<string, string> = {
  "global-immigration-consulting": "cap-immigration",
  "risk-management": "cap-risk",
  "wealth-advisory": "cap-wealth",
  "alternative-capital-sourcing": "cap-capital",
  "jurisdictional-optimization": "cap-jurisdiction",
};

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
  const img = getImage(imagery, IMAGE_BY_SLUG[cap.slug] ?? "");

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

        {/* Compact header — title + lede over a rule */}
        <Reveal>
          <header className="border-b border-rule pb-10 md:pb-12">
            <h1 className="font-display type-h1 max-w-[22ch] text-ink">
              {t(cap.title, locale)}
            </h1>
            <p className="type-lede mt-6 max-w-[58ch]">{t(cap.lede, locale)}</p>
          </header>
        </Reveal>

        {/* Hero image — full width, cinematic aspect */}
        {img && (
          <Reveal variant="soft" delay={0.08}>
            <div className="relative mt-10 aspect-[16/7] w-full overflow-hidden md:mt-12">
              <Image
                src={img.src}
                alt={t(img.alt, locale)}
                fill
                priority
                sizes="(min-width: 1440px) 1440px, 100vw"
                className="object-cover"
              />
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-px bg-gold/60"
              />
            </div>
          </Reveal>
        )}

        {/* Main article body — 8/4 split: long prose + compact sidebar */}
        <Reveal delay={0.12}>
          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 md:mt-20 md:grid-cols-12">
            {/* Prose column — holds the long description (≥500 words) */}
            <article className="md:col-span-8 md:pr-6 lg:pr-10">
              <figure className="mb-10 border-l-2 border-gold pl-6">
                <blockquote className="font-display text-[clamp(1.25rem,1.8vw,1.625rem)] leading-[1.3] tracking-[-0.015em] text-ink">
                  {t(cap.thesis, locale)}
                </blockquote>
              </figure>

              <div className="space-y-6 text-[1.0625rem] leading-[1.85] text-ink-muted">
                {tl(cap.themes, locale).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </article>

            {/* Sidebar — compact structured metadata */}
            <aside className="md:col-span-4">
              <div className="border-t border-rule pt-8">
                <Eyebrow>
                  {locale === "es" ? "En qué asesoramos" : "What we advise on"}
                </Eyebrow>
                <ul className="mt-5 space-y-3">
                  {tl(cap.advisesOn, locale).map((item, idx) => (
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
              </div>

              <div className="mt-12 border-t border-rule pt-8">
                <Eyebrow>{locale === "es" ? "Para quién" : "Who it is for"}</Eyebrow>
                <ul className="mt-5 space-y-5">
                  {cap.audience.map((a, idx) => (
                    <li key={idx}>
                      <p className="font-display text-[1rem] leading-[1.25] tracking-[-0.01em] text-ink">
                        {t(a.title, locale)}
                      </p>
                      <p className="mt-1.5 text-[0.8125rem] leading-[1.55] text-ink-muted">
                        {t(a.description, locale)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Reveal>

        {/* Engagement approach — full-width numbered steps */}
        <Reveal delay={0.08}>
          <div className="mt-20 border-t border-rule pt-14 md:mt-24 md:pt-16">
            <Eyebrow className="mb-10">
              {locale === "es" ? "Cómo trabajamos" : "Engagement approach"}
            </Eyebrow>
            <ol className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
              {cap.process.map((step) => (
                <li key={step.step} className="border-l-2 border-navy-900 pl-6">
                  <p className="eyebrow text-ink-muted tabular-nums">
                    {step.step}
                  </p>
                  <h3 className="font-display mt-3 text-[1.1875rem] leading-[1.25] tracking-[-0.015em] text-ink">
                    {t(step.title, locale)}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.65] text-ink-muted">
                    {t(step.description, locale)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* Related focus + CTA combined */}
        <Reveal variant="soft" delay={0.08}>
          <div className="mt-20 grid grid-cols-1 gap-12 border-t border-rule pt-14 md:mt-24 md:grid-cols-12 md:pt-16">
            {cap.relatedFocus.length > 0 && (
              <div className="md:col-span-7">
                <Eyebrow className="mb-6">{dict.common.relatedFocus}</Eyebrow>
                <ul className="flex flex-col gap-5">
                  {cap.relatedFocus.map((id) => {
                    const f = getFocusTopic(id);
                    if (!f) return null;
                    return (
                      <li key={id}>
                        <LinkArrow
                          href={localizedPath(`/focus/${f.slug}`, locale)}
                        >
                          {t(f.title, locale)}
                        </LinkArrow>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <div className="md:col-span-5 md:text-right">
              <h2 className="font-display type-h2 max-w-sm text-ink md:ml-auto">
                {dict.home.contactTitle}
              </h2>
              <div className="mt-6 md:flex md:justify-end">
                <ButtonLink
                  href={localizedPath("/contact", locale)}
                  variant="primary"
                >
                  {dict.common.contactFirm}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
