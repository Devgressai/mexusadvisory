import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { Container } from "@/components/primitives/Container";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { WhatsAppButton } from "@/components/shell/WhatsAppButton";
import { Reveal } from "@/components/motion/Reveal";
import { imagery } from "@/content/imagery";
import { insights } from "@/content/insights";
import { getImage } from "@/lib/imagery";
import { localizedPath, t } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { HOVER_IMAGE, HOVER_LINK } from "@/components/motion/editorial";

interface HeroHomeProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Full-bleed editorial hero — BCG-adjacent. A large atmospheric image
 * fills the viewport width with a navy scrim and vertical gradient for
 * legibility. Text is overlaid on the left: gold-hairline eyebrow,
 * display headline, short dek, text-led CTAs. A bottom meta strip with
 * three micro-facts anchors the composition against a 1px gold rule.
 */
export function HeroHome({ locale, dict }: HeroHomeProps) {
  const img = getImage(imagery, "hero-bridge");

  return (
    <section className="relative overflow-hidden bg-navy-900 text-paper">
      {/* Full-bleed image — blends with the navy section via its own opacity.
          No vertical gradient overlays or seam bands, so there is nothing to
          produce a visible fade edge at the top or bottom. The section's
          own bg-navy-900 handles any pixel-level edge. */}
      {img && (
        <Image
          src={img.src}
          alt={t(img.alt, locale)}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
      )}
      {/* Slightly darker navy wash — left-weighted for headline legibility
          and carries a bit more weight across the whole hero so the
          featured strip pops against the image. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/35 to-navy-900/15"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-900/60 to-transparent"
      />

      <Container className="relative flex min-h-[88vh] flex-col justify-between pt-40 pb-16 md:pt-48 md:pb-20 lg:min-h-[94vh] lg:pt-56 lg:pb-24">
        {/* Top content block */}
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-9 xl:col-span-8">
            <Reveal>
              <div className="flex items-center gap-5">
                <span
                  aria-hidden
                  className="eyebrow text-paper/60 tabular-nums"
                >
                  01
                </span>
                <span aria-hidden className="h-px w-12 bg-gold" />
                <span className="eyebrow text-paper/60">
                  {dict.home.heroEyebrow}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display text-display mt-10 max-w-[20ch] text-paper md:mt-14 lg:mt-16 lg:max-w-[22ch]">
                {dict.home.heroTitle}
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-10 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-paper/80 md:mt-12 md:text-[1.125rem]">
                {dict.home.heroLede}
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 md:mt-14">
                <LinkArrow
                  href={localizedPath("/contact", locale)}
                  tone="paper"
                >
                  {dict.common.discussOpportunity}
                </LinkArrow>
                <LinkArrow
                  href={localizedPath("/capabilities", locale)}
                  tone="paper"
                >
                  {dict.common.viewCapabilities}
                </LinkArrow>
                <WhatsAppButton
                  label={dict.nav.whatsapp}
                  variant="cta"
                  tone="navy"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Hero featured insights — BCG-style compact teasers pinned to the
            glass of the hero. No heavy border, no dividers: only a thin gold
            marker and the natural grid gap separate the three cards. */}
        <Reveal variant="soft" delay={0.4}>
          <div className="mt-16 md:mt-20">
            <div className="mb-7 flex items-center gap-4">
              <span aria-hidden className="h-px w-10 bg-gold/70" />
              <p className="eyebrow text-paper/55">
                {locale === "es"
                  ? "Perspectivas destacadas"
                  : "Featured perspectives"}
              </p>
              <span
                aria-hidden
                className="hidden h-px flex-1 bg-paper/10 md:block"
              />
              <LinkArrow
                href={localizedPath("/focus/immigration-volatility", locale)}
                tone="paper"
                className="hidden md:inline-flex"
              >
                {dict.common.exploreInsights}
              </LinkArrow>
            </div>

            <ul className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3 md:gap-y-0 lg:gap-x-14">
              {insights.slice(0, 3).map((insight) => {
                const thumb = getImage(imagery, insight.imageId);
                return (
                  <li key={insight.id} className="group">
                    <Link
                      href={localizedPath(insight.href, locale)}
                      className="flex items-start gap-5"
                    >
                      {thumb && (
                        <div className="relative aspect-square w-[80px] shrink-0 overflow-hidden sm:w-[92px]">
                          <Image
                            src={thumb.src}
                            alt=""
                            fill
                            sizes="92px"
                            className={cn(
                              "object-cover opacity-[0.92]",
                              HOVER_IMAGE,
                              "group-hover:opacity-100",
                            )}
                          />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="text-[0.75rem] uppercase tracking-[0.16em] text-paper/60">
                          {t(insight.category, locale)}
                          <span aria-hidden className="mx-2 text-paper/25">
                            ·
                          </span>
                          {t(insight.date, locale)}
                        </p>
                        <h3
                          className={cn(
                            "mt-3 line-clamp-2 text-[1.125rem] leading-[1.3] tracking-[-0.015em] text-paper",
                            HOVER_LINK,
                            "group-hover:text-gold-soft",
                          )}
                        >
                          {t(insight.title, locale)}
                        </h3>
                        <span
                          aria-hidden
                          className="mt-4 block h-px w-8 origin-left bg-gold/70 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-16"
                        />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
