"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { m } from "framer-motion";
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
 * BCG-style centered hero carousel with cursor-driven scrubbing.
 *
 * Interaction model:
 *   - The active "index" is a float, not an integer, so cards interpolate
 *     smoothly between slots.
 *   - Moving the cursor across the carousel area maps cursor X directly to
 *     the float active index (scrubbing). No clicks required.
 *   - When the cursor leaves the area, the active index snaps to the
 *     nearest integer so the display settles on a clear featured card.
 *   - Arrow buttons step through integer indices as a keyboard-accessible
 *     alternative.
 *   - Clicking a card snaps directly to that card.
 *
 * Visual:
 *   - Each card's x / scale / opacity / y derive from its distance to the
 *     float active index, so the whole row flows continuously as the
 *     cursor moves. A small inter-card gap keeps the slots from touching.
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

/** Pixel offset per slot unit. A small constant is added so adjacent cards
 * never touch — "tiny bit" gap between cards even at peak density. */
const SLOT_BASE_OFFSET = 260;
const SLOT_GAP = 14;

export function HeroHome({ locale, dict }: HeroHomeProps) {
  const [groupId, setGroupId] = useState<GroupId>("spotlight");
  const items = useMemo(() => pickGroup(groupId), [groupId]);
  const len = items.length;

  // Active index is a float so cards can interpolate between slots.
  const [active, setActive] = useState<number>((len - 1) / 2);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = carouselRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relativeX = (e.clientX - rect.left) / rect.width;
    const clamped = Math.max(0, Math.min(1, relativeX));
    setActive(clamped * (len - 1));
  };

  const handleLeave = () => {
    setActive((a) => Math.round(a));
  };

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = carouselRef.current?.getBoundingClientRect();
    const touch = e.touches[0];
    if (!rect || !touch) return;
    const relativeX = (touch.clientX - rect.left) / rect.width;
    const clamped = Math.max(0, Math.min(1, relativeX));
    setActive(clamped * (len - 1));
  };

  const prev = () => setActive((a) => Math.max(0, Math.round(a) - 1));
  const next = () => setActive((a) => Math.min(len - 1, Math.round(a) + 1));

  // Featured is the card nearest the float active index
  const featuredIndex = Math.round(active);
  const featured = items[featuredIndex];

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
          <h1 className="font-display type-display mx-auto mt-10 max-w-[22ch] text-center text-ink md:mt-12 lg:mt-14">
            {dict.home.heroTitle}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="type-lede mx-auto mt-8 max-w-[58ch] text-center md:mt-10">
            {dict.home.heroLede}
          </p>
        </Reveal>

        {/* Scrub hint */}
        <Reveal variant="soft" delay={0.2}>
          <p className="eyebrow mx-auto mt-10 w-fit text-ink-muted/70">
            {locale === "es"
              ? "Mueva el cursor para explorar"
              : "Move the cursor to browse"}
          </p>
        </Reveal>

        {/* Carousel area */}
        <Reveal variant="soft" delay={0.24}>
          <div
            ref={carouselRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            onTouchMove={handleTouch}
            className="relative mt-8 h-[460px] cursor-ew-resize select-none md:mt-10 lg:h-[520px]"
            role="region"
            aria-label={locale === "es" ? "Perspectivas destacadas" : "Featured perspectives"}
          >
            {items.map((insight, i) => {
              const img = getImage(imagery, insight.imageId);
              const d = i - active; // signed float distance from active
              const absD = Math.abs(d);
              const isFeatured = i === featuredIndex;

              // Motion targets — smooth continuous interpolation
              const x = d * SLOT_BASE_OFFSET + Math.sign(d) * absD * SLOT_GAP;
              const scale = Math.max(0.5, 1 - absD * 0.12);
              const opacity = absD > 2.6 ? 0 : Math.max(0, 1 - absD * 0.24);
              const y = absD * 18;
              const zIndex = Math.round(20 - absD * 5);

              const widthClass = isFeatured
                ? "w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px]"
                : "w-[170px] sm:w-[210px] md:w-[240px] lg:w-[280px]";

              return (
                <m.div
                  key={`${groupId}-${insight.id}`}
                  initial={false}
                  animate={{ x, scale, opacity, y }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "absolute left-1/2 top-0 -translate-x-1/2 will-change-transform",
                    widthClass,
                  )}
                  style={{ zIndex }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={t(insight.title, locale)}
                    className="relative block w-full text-left"
                  >
                    {img && (
                      <div className="relative aspect-[3/4] w-full overflow-hidden">
                        <Image
                          src={img.src}
                          alt={t(img.alt, locale)}
                          fill
                          priority={isFeatured}
                          sizes="(min-width: 1024px) 340px, (min-width: 768px) 300px, 60vw"
                          className="object-cover"
                        />
                        {isFeatured ? (
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
                            className="absolute inset-0 bg-paper/30 transition-opacity duration-300 hover:bg-paper/10"
                          />
                        )}
                      </div>
                    )}
                  </button>
                </m.div>
              );
            })}
          </div>
        </Reveal>

        {/* Featured link for accessibility */}
        {featured && (
          <Link
            href={localizedPath(featured.href, locale)}
            className="sr-only"
          >
            {t(featured.title, locale)}
          </Link>
        )}

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
                      setActive(((pickGroup(g.id).length - 1) / 2));
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
