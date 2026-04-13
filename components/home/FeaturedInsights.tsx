import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { insights } from "@/content/insights";
import { imagery } from "@/content/imagery";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { Reveal } from "@/components/motion/Reveal";
import { getImage } from "@/lib/imagery";
import { localizedPath, t } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { HOVER_IMAGE, HOVER_LINK } from "@/components/motion/editorial";

interface FeaturedInsightsProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Articles — BCG-style "Featured Insights" editorial grid. Top row is a
 * large hero feature (8 cols) plus two smaller stacked features (4 cols).
 * Second row is a clean 3-column grid for the remaining three insights.
 * No horizontal scroll rail, no carousel UI — direct grid browsing.
 */
export function FeaturedInsights({ locale, dict }: FeaturedInsightsProps) {
  const [primary, ...rest] = insights;
  if (!primary) return null;
  const secondary = rest.slice(0, 2);
  const tertiary = rest.slice(2, 5);

  return (
    <Section tone="bone" size="standard">
      <Container>
        {/* Section header */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <Eyebrow className="mb-8">
                {locale === "es" ? "Artículos" : "Articles"}
              </Eyebrow>
              <h2 className="font-display type-h1 max-w-[22ch] text-ink">
                {locale === "es"
                  ? "Lecturas para conversaciones en curso."
                  : "Readings for conversations already under way."}
              </h2>
              <p className="type-lede mt-7 max-w-[56ch]">
                {locale === "es"
                  ? "Perspectivas privadas sobre migración, capital, jurisdicción y riesgo — escritas para quienes toman decisiones transfronterizas."
                  : "Private perspectives on immigration, capital, jurisdiction, and risk — written for the people who make cross-border decisions."}
              </p>
            </div>
            <LinkArrow href={localizedPath("/focus/immigration-volatility", locale)}>
              {dict.common.exploreInsights}
            </LinkArrow>
          </div>
        </Reveal>

        {/* Featured row — 1 big + 2 stacked */}
        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-14 md:mt-20 lg:mt-24">
          {/* Primary feature */}
          <Reveal className="col-span-12 lg:col-span-8">
            <FeatureCard insight={primary} locale={locale} dict={dict} large />
          </Reveal>

          {/* Secondary stacked */}
          <div className="col-span-12 flex flex-col gap-10 lg:col-span-4">
            {secondary.map((insight, i) => (
              <Reveal key={insight.id} delay={0.1 + i * 0.05}>
                <FeatureCard insight={insight} locale={locale} dict={dict} compact />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Tertiary row — 3 equal */}
        {tertiary.length > 0 && (
          <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-14 border-t border-rule pt-20 md:mt-24 md:pt-24 lg:mt-28 lg:pt-28">
            {tertiary.map((insight, i) => (
              <Reveal key={insight.id} delay={i * 0.05} className="col-span-12 md:col-span-4">
                <FeatureCard insight={insight} locale={locale} dict={dict} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}

interface FeatureCardProps {
  insight: (typeof insights)[number];
  locale: Locale;
  dict: Dictionary;
  large?: boolean;
  compact?: boolean;
}

function FeatureCard({ insight, locale, dict, large, compact }: FeatureCardProps) {
  const img = getImage(imagery, insight.imageId);

  return (
    <Link href={localizedPath(insight.href, locale)} className="group block">
      {/* Image */}
      {img && (
        <div
          className={cn(
            "relative w-full overflow-hidden",
            large ? "aspect-[16/10]" : compact ? "aspect-[16/10]" : "aspect-[16/10]",
          )}
        >
          <Image
            src={img.src}
            alt={t(img.alt, locale)}
            fill
            sizes={
              large
                ? "(min-width: 1024px) 62vw, 100vw"
                : compact
                  ? "(min-width: 1024px) 32vw, 100vw"
                  : "(min-width: 1024px) 30vw, 100vw"
            }
            className={cn(
              "object-cover opacity-[0.96]",
              HOVER_IMAGE,
              "group-hover:opacity-100",
            )}
          />
          <span
            aria-hidden
            className="absolute bottom-0 left-0 h-px w-10 origin-left bg-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
          />
        </div>
      )}

      {/* Meta row */}
      <div className="mt-7 flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-muted">
        <span>{t(insight.category, locale)}</span>
        <span aria-hidden className="h-px w-4 bg-ink-muted/30" />
        <span>{t(insight.date, locale)}</span>
      </div>

      {/* Title */}
      <h3
        className={cn(
          "font-display mt-5 max-w-[24ch] text-ink",
          large ? "type-h1" : compact ? "type-h3" : "type-h3",
          HOVER_LINK,
          "group-hover:text-navy-900",
        )}
      >
        {t(insight.title, locale)}
      </h3>

      {/* Summary */}
      <p className="mt-5 max-w-[56ch] text-[0.9375rem] leading-[1.7] text-ink-muted">
        {t(insight.summary, locale)}
      </p>

      {/* Read CTA */}
      <p className="mt-8 inline-flex items-baseline gap-2 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-navy-900">
        <span className="relative">
          {dict.common.readBriefing}
          <span
            aria-hidden
            className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
          />
        </span>
        <span
          aria-hidden
          className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px]"
        >
          →
        </span>
      </p>
    </Link>
  );
}
