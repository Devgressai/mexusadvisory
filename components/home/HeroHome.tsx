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
 * BCG-style centered hero carousel.
 *
 * Composition (desktop):
 *   - centered "WELCOME TO MEXUS ADVISORY" eyebrow
 *   - centered Fraunces headline
 *   - 5 portrait cards arranged horizontally, the middle one is featured
 *     at full size and carries an article title overlay, outer cards
 *     scale down progressively
 *   - category tabs beneath the cards cycle which group is featured
 *   - left/right arrows at the bottom-left rotate the active index
 *
 * Interaction:
 *   - clicking a tab resets the active index to 2 (the middle slot)
 *     and swaps the displayed insight set
 *   - clicking arrows rotates the active index through the set
 *   - the active (center) card gets 100% scale, a gold hairline indicator,
 *     and a bottom overlay with the article title
 *   - neighbors scale to 0.88 then 0.76 with graduated opacity
 */

const CATEGORY_GROUPS = [
  { id: "spotlight", label: { en: "Mexus Spotlight", es: "Destacado" } },
  { id: "immigration", label: { en: "Immigration", es: "Migración" }, practice: "global-immigration-consulting" },
  { id: "capital", label: { en: "Capital", es: "Capital" }, practice: "alternative-capital-sourcing" },
  { id: "jurisdiction", label: { en: "Jurisdiction", es: "Jurisdicción" }, practice: "jurisdictional-optimization" },
] as const;

type GroupId = (typeof CATEGORY_GROUPS)[number]["id"];

function pickGroup(id: GroupId): InsightEntry[] {
  // All groups draw from the same canonical insights list; spotlight shows
  // the full curated set. Other groups filter by the target href's practice.
  if (id === "spotlight") return insights.slice(0, 5);
  const group = CATEGORY_GROUPS.find((g) => g.id === id);
  if (!group || !("practice" in group)) return insights.slice(0, 5);
  const filtered = insights.filter((i) => i.href.includes(group.practice));
  // Pad to 5 items by repeating from the global list so the carousel always
  // has a full fan-out — visually stable regardless of how many insights
  // happen to match a given practice.
  const padded = [...filtered];
  let idx = 0;
  while (padded.length < 5 && idx < insights.length) {
    const next = insights[idx++];
    if (next && !padded.some((p) => p.id === next.id)) padded.push(next);
  }
  return padded.slice(0, 5);
}

export function HeroHome({ locale, dict }: HeroHomeProps) {
  const [groupId, setGroupId] = useState<GroupId>("spotlight");
  const [activeIndex, setActiveIndex] = useState(2);

  const items = useMemo(() => pickGroup(groupId), [groupId]);
  const featured = items[activeIndex] ?? items[2] ?? items[0];

  const prev = () => setActiveIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setActiveIndex((i) => (i + 1) % items.length);

  return (
    <section className="relative overflow-hidden bg-paper text-ink">
      <Container className="relative pt-36 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24">
        {/* Eyebrow */}
        <Reveal>
          <div className="flex items-center justify-center gap-4">
            <span aria-hidden className="h-px w-10 bg-gold" />
            <p className="eyebrow text-ink-muted">
              {locale === "es" ? "Bienvenido a Mexus Advisory" : "Welcome to Mexus Advisory"}
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
          <div className="relative mt-16 md:mt-20 lg:mt-24">
            <AnimatePresence mode="popLayout" initial={false}>
              <m.ul
                key={groupId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-end justify-center gap-3 sm:gap-4 md:gap-5"
              >
                {items.map((insight, i) => {
                  const img = getImage(imagery, insight.imageId);
                  const distance = Math.abs(i - activeIndex);
                  const isActive = distance === 0;
                  const isNeighbor = distance === 1;
                  return (
                    <m.li
                      key={`${groupId}-${insight.id}`}
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : isNeighbor ? 0.88 : 0.76,
                        opacity: isActive ? 1 : isNeighbor ? 0.85 : 0.6,
                        y: isActive ? 0 : isNeighbor ? 18 : 36,
                      }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        "group relative shrink-0",
                        isActive
                          ? "w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px]"
                          : "w-[120px] sm:w-[150px] md:w-[180px] lg:w-[210px]",
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveIndex(i)}
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
                              sizes="(min-width: 1024px) 300px, (min-width: 768px) 260px, 50vw"
                              className="object-cover"
                            />
                            {/* Active card overlay */}
                            {isActive && (
                              <>
                                <div
                                  aria-hidden
                                  className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/25 to-transparent"
                                />
                                <div className="absolute inset-x-5 bottom-5 lg:inset-x-7 lg:bottom-7">
                                  <p className="eyebrow text-paper/65">
                                    {t(insight.category, locale)}
                                    <span aria-hidden className="mx-2 text-paper/25">
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
                            )}
                            {/* Inactive card subtle wash */}
                            {!isActive && (
                              <div
                                aria-hidden
                                className="absolute inset-0 bg-paper/40 transition-opacity duration-300 hover:bg-paper/20"
                              />
                            )}
                          </div>
                        )}
                      </button>
                    </m.li>
                  );
                })}
              </m.ul>
            </AnimatePresence>

            {/* Featured card link overlay — clicking the whole center card
                also navigates to the target insight */}
            {featured && (
              <Link
                href={localizedPath(featured.href, locale)}
                aria-label={t(featured.title, locale)}
                className="sr-only"
              >
                {t(featured.title, locale)}
              </Link>
            )}
          </div>
        </Reveal>

        {/* Controls row: arrows + category tabs */}
        <Reveal variant="soft" delay={0.3}>
          <div className="mt-12 grid grid-cols-12 items-center gap-6 md:mt-16">
            {/* Arrow controls */}
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

            {/* Category tabs */}
            <div
              role="tablist"
              aria-label={locale === "es" ? "Categorías" : "Categories"}
              className="col-span-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:col-span-9 md:justify-center lg:gap-x-10"
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
                      setActiveIndex(2);
                    }}
                    className={cn(
                      "relative text-[0.75rem] uppercase tracking-[0.18em] transition-colors duration-300",
                      isActive ? "text-ink" : "text-ink-muted hover:text-ink",
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

      {/* Bottom hairline to seam into the next section */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-rule" />
    </section>
  );
}
