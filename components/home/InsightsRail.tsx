"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { m } from "framer-motion";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { insights } from "@/content/insights";
import { imagery } from "@/content/imagery";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { getImage } from "@/lib/imagery";
import { localizedPath, t } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { EASE_OUT_EXPO, HOVER_IMAGE, HOVER_LINK, revealUp } from "@/components/motion/editorial";

interface InsightsRailProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Horizontal editorial rail — browsing-oriented, no autoplay, no dots,
 * no snapping theatrics. Native scroll with scroll-snap gives us smooth
 * swipe on touch, trackpad momentum on macOS, and keyboard control via
 * understated left/right arrow controls.
 *
 * The rail sits immediately below the hero and carries the "more live"
 * feeling without turning the hero itself into a slideshow.
 */
export function InsightsRail({ locale, dict }: InsightsRailProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollBy = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstChild = el.firstElementChild as HTMLElement | null;
    const step = firstChild
      ? firstChild.getBoundingClientRect().width + 24
      : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  }, []);

  return (
    <section className="relative bg-paper pb-28 pt-8 md:pb-36 md:pt-10 lg:pb-44 lg:pt-12">
      <Container>
        {/* Header row */}
        <m.div
          {...revealUp}
          transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
          className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-16 md:flex-row md:items-end lg:mb-20"
        >
          <div className="max-w-xl">
            <Eyebrow>{locale === "es" ? "Perspectivas" : "Featured perspectives"}</Eyebrow>
            <h2 className="font-display type-h2 mt-7 max-w-[24ch] text-ink">
              {locale === "es"
                ? "Seis lecturas para conversaciones en curso."
                : "Six readings for conversations already under way."}
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <LinkArrow href={localizedPath("/focus/immigration-volatility", locale)}>
              {dict.common.exploreInsights}
            </LinkArrow>

            {/* Understated arrow controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={locale === "es" ? "Anterior" : "Previous"}
                onClick={() => scrollBy(-1)}
                disabled={!canScrollPrev}
                className={cn(
                  "flex h-10 w-10 items-center justify-center border border-rule text-ink",
                  HOVER_LINK,
                  canScrollPrev
                    ? "hover:border-navy-900 hover:text-navy-900"
                    : "opacity-30",
                )}
              >
                <ArrowLeft size={16} strokeWidth={1.5} aria-hidden />
              </button>
              <button
                type="button"
                aria-label={locale === "es" ? "Siguiente" : "Next"}
                onClick={() => scrollBy(1)}
                disabled={!canScrollNext}
                className={cn(
                  "flex h-10 w-10 items-center justify-center border border-rule text-ink",
                  HOVER_LINK,
                  canScrollNext
                    ? "hover:border-navy-900 hover:text-navy-900"
                    : "opacity-30",
                )}
              >
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
              </button>
            </div>
          </div>
        </m.div>
      </Container>

      {/* Scroll rail — breaks out of container to allow edge bleed */}
      <div
        ref={scrollerRef}
        className={cn(
          "relative flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4",
          "scrollbar-none [&::-webkit-scrollbar]:hidden",
          // Left gutter matches shell-gutter, right gets generous tail
          "scroll-smooth",
        )}
        style={{
          scrollbarWidth: "none",
          paddingLeft: "clamp(1.5rem, 6vw, 6rem)",
          paddingRight: "clamp(1.5rem, 6vw, 6rem)",
        }}
      >
        {insights.map((insight, idx) => {
          const img = getImage(imagery, insight.imageId);
          return (
            <Link
              key={insight.id}
              href={localizedPath(insight.href, locale)}
              className="group flex w-[88vw] shrink-0 snap-start flex-col sm:w-[60vw] md:w-[44vw] lg:w-[30vw] xl:w-[26rem]"
            >
              {/* Image */}
              {img && (
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={img.src}
                    alt={t(img.alt, locale)}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 44vw, 88vw"
                    className={cn(
                      "object-cover opacity-[0.94]",
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
                <span className="tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
                <span aria-hidden className="h-px w-4 bg-ink-muted/30" />
                <span>{t(insight.category, locale)}</span>
                <span aria-hidden className="text-ink-muted/30">·</span>
                <span>{t(insight.date, locale)}</span>
              </div>

              {/* Title */}
              <h3
                className={cn(
                  "font-display type-h3 mt-5 max-w-[24ch] text-ink",
                  HOVER_LINK,
                  "group-hover:text-navy-900",
                )}
              >
                {t(insight.title, locale)}
              </h3>

              {/* Summary */}
              <p className="mt-4 max-w-[38ch] text-[0.9375rem] leading-[1.7] text-ink-muted">
                {t(insight.summary, locale)}
              </p>

              {/* Read */}
              <p className="mt-auto inline-flex items-baseline gap-2 pt-8 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-navy-900">
                <span className="relative">
                  {dict.common.readBriefing}
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
                  />
                </span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-[3px]"
                >
                  →
                </span>
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
