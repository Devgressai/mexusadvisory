import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { focusTopics } from "@/content/focus";
import { imagery } from "@/content/imagery";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { Reveal } from "@/components/motion/Reveal";
import { getImage } from "@/lib/imagery";
import { localizedPath, t } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { HOVER_IMAGE, HOVER_LINK } from "@/components/motion/editorial";

interface FocusModulesProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Editorial stacked rows — reads as a publication index rather than cards.
 * Each row: number + metadata, H3, dek, text-led CTA, and a small atmospheric
 * thumbnail on the right column. Subtle border-t rule separators, no shadows,
 * no hover scaling. Single hover pattern across rows.
 */
const IMAGE_BY_SLUG: Record<string, string> = {
  "immigration-volatility": "focus-immigration",
  "international-investments": "focus-investments",
  "us-mexico-trade": "focus-trade",
};

export function FocusModules({ locale, dict }: FocusModulesProps) {
  return (
    <Section tone="bone" size="standard">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-10 md:mb-20 md:flex-row md:items-end lg:mb-24">
          <SectionHeader
            eyebrow={dict.home.focusEyebrow}
            title={dict.home.focusTitle}
            lede={dict.home.focusLede}
          />
          <LinkArrow
            href={localizedPath("/focus/immigration-volatility", locale)}
          >
            {dict.common.exploreInsights}
          </LinkArrow>
        </div>

        {/* Stacked editorial rows */}
        <Reveal variant="stagger">
          <ul className="border-t border-rule">
            {focusTopics.map((topic) => {
              const img = getImage(imagery, IMAGE_BY_SLUG[topic.slug] ?? "");
              return (
                <li key={topic.id} className="border-b border-rule">
                  <Link
                    href={localizedPath(`/focus/${topic.slug}`, locale)}
                    className="group relative grid grid-cols-12 items-start gap-x-6 py-10 md:py-12 lg:py-16"
                  >
                    {/* Number column */}
                    <div className="col-span-12 md:col-span-1">
                      <span className="eyebrow text-ink-muted tabular-nums">
                        {topic.number}
                      </span>
                    </div>

                    {/* Text column */}
                    <div className="col-span-12 mt-4 md:col-span-7 md:col-start-2 md:mt-0 lg:col-span-6">
                      <div className="flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-muted">
                        <span>{locale === "es" ? "Informe" : "Briefing"}</span>
                        <span aria-hidden className="h-px w-4 bg-ink-muted/30" />
                        <span>{t(topic.dateStamp, locale)}</span>
                      </div>

                      <h3
                        className={cn(
                          "font-display text-h2 mt-5 max-w-[22ch] text-ink",
                          HOVER_LINK,
                          "group-hover:text-navy-900",
                        )}
                      >
                        {t(topic.title, locale)}
                      </h3>

                      <p className="mt-5 max-w-[58ch] text-[0.9375rem] leading-[1.7] text-ink-muted">
                        {t(topic.dek, locale)}
                      </p>

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
                    </div>

                    {/* Image column — small, atmospheric, right-aligned */}
                    {img && (
                      <div className="col-span-12 mt-8 md:col-span-4 md:col-start-9 md:mt-0 lg:col-span-4">
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <Image
                            src={img.src}
                            alt={t(img.alt, locale)}
                            fill
                            sizes="(min-width: 1024px) 28vw, (min-width: 768px) 33vw, 100vw"
                            className={cn(
                              "object-cover opacity-[0.94]",
                              HOVER_IMAGE,
                              "group-hover:opacity-100",
                            )}
                          />
                          <span
                            aria-hidden
                            className="absolute bottom-0 left-0 h-px w-8 origin-left bg-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                          />
                        </div>
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
