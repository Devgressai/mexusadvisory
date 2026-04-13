"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/motion/Reveal";
import { imagery } from "@/content/imagery";
import { insights, type InsightEntry } from "@/content/insights";
import { getImage } from "@/lib/imagery";
import { localizedPath, t } from "@/lib/i18n";
import { cn } from "@/lib/cn";

interface HeroHomeProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * BCG-style centered hero carousel that rotates like a roundabout.
 *
 * Mechanics:
 *   - activeIndex grows/shrinks freely; we wrap it by the content length
 *     when accessing items. Five slots are always visible: center plus
 *     two neighbors on each side.
 *   - For each insight, we compute a "circular delta" d in [-2, 2]. Items
 *     outside that window are unmounted. On rotation, one item unmounts
 *     from the leaving side and one mounts from the incoming side.
 *   - AnimatePresence with a direction custom prop makes entering cards
 *     slide in from the correct side and exiting cards slide out the
 *     opposite side — giving the proper roundabout feel without any
 *     cross-screen jump artifacts.
 *   - Cards that stay visible smoothly transition between their target
 *     x / scale / opacity / y for their new slot.
 */

const CATEGORY_GROUPS = [
  { id: "spotlight", label: { en: "Mexus Spotlight", es: "Destacado" } },
  {
    id: "immigration",
    label: { en: "Immigration", es: "Migración" },
    practice: "global-immigration-consulting",
  },
  {
    id: "capital",
    label: { en: "Capital", es: "Capital" },
    practice: "alternative-capital-sourcing",
  },
  {
    id: "jurisdiction",
    label: { en: "Jurisdiction", es: "Jurisdicción" },
    practice: "jurisdictional-optimization",
  },
] as const;

type GroupId = (typeof CATEGORY_GROUPS)[number]["id"];

function pickGroup(id: GroupId): InsightEntry[] {
  if (id === "spotlight") return insights;
  const group = CATEGORY_GROUPS.find((g) => g.id === id);
  if (!group || !("practice" in group)) return insights;
  const filtered = insights.filter((i) => i.href.includes(group.practice));
  const padded = [...filtered];
  let idx = 0;
  while (padded.length < 6 && idx < insights.length) {
    const next = insights[idx++];
    if (next && !padded.some((p) => p.id === next.id)) padded.push(next);
  }
  return padded.slice(0, 6);
}

// Horizontal offset per slot (px). Hidden slots sit beyond the rendered
// viewport so entering/exiting animations have somewhere to come from.
const SLOT_X: Record<number, number> = {
  0: 0,
  1: 280,
  "-1": -280,
  2: 500,
  "-2": -500,
};
const ENTER_X = 720;

// Scale / opacity / y per absolute distance from center
const SLOT_SCALE: Record<number, number> = { 0: 1, 1: 0.88, 2: 0.76 };
const SLOT_OPACITY: Record<number, number> = { 0: 1, 1: 0.9, 2: 0.55 };
const SLOT_Y: Record<number, number> = { 0: 0, 1: 20, 2: 44 };

export function HeroHome({ locale, dict }: HeroHomeProps) {
  const [groupId, setGroupId] = useState<GroupId>("spotlight");
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const items = useMemo(() => pickGroup(groupId), [groupId]);
  const len = items.length;

  const prev = () => {
    setDirection(-1);
    setActiveIndex((i) => (i - 1 + len) % len);
  };
  const next = () => {
    setDirection(1);
    setActiveIndex((i) => (i + 1) % len);
  };

  // Build the visible window of items with their per-item delta and target
  // motion values. Items outside |d| ≤ 2 are filtered out.
  const visible = items
    .map((insight, i) => {
      let d = i - activeIndex;
      if (d > len / 2) d -= len;
      if (d < -len / 2) d += len;
      return { insight, d, originalIndex: i };
    })
    .filter(({ d }) => Math.abs(d) <= 2)
    .sort((a, b) => a.d - b.d);

  return (
    <section className="relative overflow-hidden bg-paper text-ink">
      <Container className="relative pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-48 lg:pb-28">
        {/* Eyebrow */}
        <Reveal>
          <div className="flex items-center justify-center gap-4">
            <span aria-hidden className="h-px w-10 bg-gold" />
            <p className="eyebrow text-ink-muted">
              {locale === "es"
                ? "Bienvenido a Mexus Advisory"
                : "Welcome to Mexus Advisory"}
            </p>
            <span aria-hidden className="h-px w-10 bg-gold" />
          </div>
        </Reveal>

        {/* Centered headline */}
        <Reveal delay={0.08}>
          <h1 className="font-display text-display mx-auto mt-10 max-w-[22ch] text-center text-ink md:mt-12 lg:mt-14">
            {dict.home.heroTitle}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="text-lede mx-auto mt-8 max-w-[58ch] text-center md:mt-10">
            {dict.home.heroLede}
          </p>
        </Reveal>

        {/* Carousel row */}
        <Reveal variant="soft" delay={0.22}>
          <div className="relative mt-16 h-[460px] md:mt-20 lg:mt-24 lg:h-[520px]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {visible.map(({ insight, d }) => {
                const img = getImage(imagery, insight.imageId);
                const absD = Math.abs(d);
                const isActive = d === 0;
                const targetX = SLOT_X[d] ?? 0;
                const targetScale = SLOT_SCALE[absD] ?? 0.6;
                const targetOpacity = SLOT_OPACITY[absD] ?? 0;
                const targetY = SLOT_Y[absD] ?? 0;
                const widthClass = isActive
                  ? "w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px]"
                  : absD === 1
                    ? "w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]"
                    : "w-[130px] sm:w-[170px] md:w-[200px] lg:w-[240px]";

                return (
                  <m.div
                    key={`${groupId}-${insight.id}`}
                    custom={direction}
                    initial={(dir: 1 | -1) => ({
                      x: dir > 0 ? ENTER_X : -ENTER_X,
                      opacity: 0,
                      scale: 0.68,
                      y: 80,
                    })}
                    animate={{
                      x: targetX,
                      opacity: targetOpacity,
                      scale: targetScale,
                      y: targetY,
                    }}
                    exit={(dir: 1 | -1) => ({
                      x: dir > 0 ? -ENTER_X : ENTER_X,
                      opacity: 0,
                      scale: 0.62,
                      y: 80,
                    })}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "absolute left-1/2 top-0 -translate-x-1/2",
                      widthClass,
                    )}
                    style={{ zIndex: 10 - absD }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        if (d === 0) return;
                        setDirection(d > 0 ? 1 : -1);
                        setActiveIndex(
                          (prev) => (prev + d + len) % len,
                        );
                      }}
                      aria-label={t(insight.title, locale)}
                      className="relative block w-full"
                    >
                      {img && (
                        <div className="relative aspect-[3/4] w-full overflow-hidden">
                          <Image
                            src={img.src}
                            alt={t(img.alt, locale)}
                            fill
                            priority={isActive}
                            sizes="(min-width: 1024px) 340px, (min-width: 768px) 300px, 60vw"
                            className="object-cover"
                          />
                          {isActive ? (
                            <>
                              <div
                                aria-hidden
                                className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/25 to-transparent"
                              />
                              <div className="absolute inset-x-5 bottom-5 lg:inset-x-7 lg:bottom-7">
                                <p className="eyebrow text-paper/65">
                                  {t(insight.category, locale)}
                                  <span
                                    aria-hidden
                                    className="mx-2 text-paper/25"
                                  >
                                    ·
                                  </span>
                                  {t(insight.date, locale)}
                                </p>
                                <h3 className="font-display mt-3 text-[1.0625rem] leading-[1.18] tracking-[-0.015em] text-paper sm:text-[1.1875rem] lg:text-[1.375rem]">
                                  {t(insight.title, locale)}
                                </h3>
                                <span
                                  aria-hidden
                                  className="mt-5 block h-px w-8 bg-gold"
                                />
                              </div>
                            </>
                          ) : (
                            <div
                              aria-hidden
                              className="absolute inset-0 bg-paper/35 transition-opacity duration-300 hover:bg-paper/15"
                            />
                          )}
                        </div>
                      )}
                    </button>
                  </m.div>
                );
              })}
            </AnimatePresence>

            {/* Sr-only jump to featured */}
            {visible.find((v) => v.d === 0) && (
              <Link
                href={localizedPath(
                  visible.find((v) => v.d === 0)!.insight.href,
                  locale,
                )}
                className="sr-only"
              >
                {t(visible.find((v) => v.d === 0)!.insight.title, locale)}
              </Link>
            )}
          </div>
        </Reveal>

        {/* Controls row */}
        <Reveal variant="soft" delay={0.3}>
          <div className="mt-10 grid grid-cols-12 items-center gap-6 md:mt-14">
            <div className="col-span-4 flex items-center gap-2 md:col-span-3">
              <button
                type="button"
                onClick={prev}
                aria-label={locale === "es" ? "Anterior" : "Previous"}
                className="flex h-10 w-10 items-center justify-center border border-rule text-ink transition-colors duration-300 hover:border-navy-900 hover:text-navy-900"
              >
                <ArrowLeft size={16} strokeWidth={1.5} aria-hidden />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label={locale === "es" ? "Siguiente" : "Next"}
                className="flex h-10 w-10 items-center justify-center border border-rule text-ink transition-colors duration-300 hover:border-navy-900 hover:text-navy-900"
              >
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
              </button>
            </div>

            <div
              role="tablist"
              aria-label={locale === "es" ? "Categorías" : "Categories"}
              className="col-span-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:col-span-9 lg:gap-x-10"
            >
              {CATEGORY_GROUPS.map((g) => {
                const isActive = g.id === groupId;
                return (
                  <button
                    key={g.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setGroupId(g.id);
                      setDirection(1);
                      setActiveIndex(0);
                    }}
                    className={cn(
                      "relative text-[0.75rem] uppercase tracking-[0.18em] transition-colors duration-300",
                      isActive
                        ? "text-ink"
                        : "text-ink-muted hover:text-ink",
                    )}
                  >
                    <span className="relative">
                      {t(g.label, locale)}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute -bottom-2 left-0 h-px w-full origin-left bg-gold transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          isActive ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>

      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-rule" />
    </section>
  );
}
