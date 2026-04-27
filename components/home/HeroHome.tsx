"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { m } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/motion/Reveal";
import { AuthorAvatar } from "@/components/primitives/AuthorAvatar";
import { imagery } from "@/content/imagery";
import { insights, type InsightEntry } from "@/content/insights";
import { getImage } from "@/lib/imagery";
import { localizedPath, t } from "@/lib/i18n";
import { cn } from "@/lib/cn";

interface HeroHomeProps {
  locale: Locale;
  dict: Dictionary;
}

const NAV_BUTTONS = [
  {
    id: "focus",
    label: { en: "Focus", es: "Enfoque" },
    href: "/focus",
  },
  {
    id: "immigration",
    label: { en: "Immigration", es: "Migración" },
    href: "/immigration-pathway",
  },
  {
    id: "foreign-investments",
    label: { en: "Foreign Investments", es: "Inversión Extranjera" },
    href: "/foreign-investments",
  },
] as const;

/**
 * BCG-style centered editorial carousel.
 *
 * Interaction model:
 *   - Move the cursor across the carousel area to scrub through cards
 *     (`active` is a float so cards interpolate smoothly between slots).
 *   - When the cursor leaves the area, `active` snaps to the nearest
 *     integer so the display settles on a clear featured card.
 *   - Click any card (featured or sibling) to navigate to that article.
 *     Every card is a Link; clicks are always valid because navigation is
 *     the same target regardless of which card was clicked.
 *   - Left/right arrow buttons step through cards as a keyboard-accessible
 *     alternative.
 *
 * The featured card is wider than siblings (it carries the author panel),
 * so `offsetAt(d)` uses a piecewise formula to keep siblings from ever
 * overlapping the featured card no matter how many items are in the rail.
 */

/**
 * Offset math. Featured card is wider than siblings (it carries the
 * author panel), so the first-sibling jump is larger than the jumps
 * between consecutive siblings. This keeps cards from overlapping the
 * featured card no matter how many items are in the rail.
 */
const FEATURED_HALF = 220;
const SIBLING_HALF = 135;
const FIRST_GAP = 20;
const SIBLING_GAP = 14;

function offsetAt(d: number): number {
  if (d === 0) return 0;
  const sign = Math.sign(d);
  const absD = Math.abs(d);
  const firstStep = FEATURED_HALF + SIBLING_HALF + FIRST_GAP;
  // For fractional distance (|d| < 1), interpolate linearly from center
  // to the first sibling slot so the featured card slides cleanly through
  // 0 instead of jumping when active crosses an integer.
  if (absD < 1) {
    return sign * absD * firstStep;
  }
  const extra = (absD - 1) * (SIBLING_HALF * 2 + SIBLING_GAP);
  return sign * (firstStep + extra);
}

/**
 * Shortest signed distance from `active` to index `i` on an infinite loop
 * of length `len`. The carousel wraps, so every card is always within
 * ±len/2 of the current position — no edge cards, every article reachable
 * from any scrub position.
 */
function wrappedD(i: number, active: number, len: number): number {
  const raw = i - active;
  const candidates = [raw, raw - len, raw + len];
  return candidates.reduce((best, c) =>
    Math.abs(c) < Math.abs(best) ? c : best,
  );
}

export function HeroHome({ locale, dict }: HeroHomeProps) {
  const items: InsightEntry[] = insights;
  const len = items.length;

  // Active index is a float so cards can interpolate between slots during
  // scrub. Initial state is an integer so one card is exactly centered on
  // first paint.
  const [active, setActive] = useState<number>(Math.floor(len / 2));
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scrub is on by default. Once the user clicks an arrow button they've
  // signaled explicit control — we disable hover-scrub so the featured
  // card stays put and is reliably clickable.
  const [scrubEnabled, setScrubEnabled] = useState(true);

  // Cards follow the cursor near-instantly while scrubbing so the
  // featured slot stays under the mouse, then ease into place on snap.
  const [isScrubbing, setIsScrubbing] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrubEnabled) return;
    const rect = carouselRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relativeX = (e.clientX - rect.left) / rect.width;
    const clamped = Math.max(0, Math.min(1, relativeX));
    if (!isScrubbing) setIsScrubbing(true);
    // Map across the full rail. The wrapped-distance layout means every
    // card is still reachable from any cursor position — the extremes no
    // longer sit alone at the edges of the region.
    setActive(clamped * len);
  };

  const handleLeave = () => {
    if (!scrubEnabled) return;
    setIsScrubbing(false);
    setActive((a) => Math.round(a));
  };

  const prev = () => {
    setScrubEnabled(false);
    setIsScrubbing(false);
    setActive((a) => {
      const rounded = Math.round(a);
      return (rounded - 1 + len) % len;
    });
  };
  const next = () => {
    setScrubEnabled(false);
    setIsScrubbing(false);
    setActive((a) => {
      const rounded = Math.round(a);
      return (rounded + 1) % len;
    });
  };

  // Featured is the card nearest the float active index (wrapped to valid range).
  const featuredIndex = ((Math.round(active) % len) + len) % len;
  const featured = items[featuredIndex];

  return (
    <section className="relative overflow-hidden bg-paper text-ink">
      <Container className="relative pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-48 lg:pb-28">
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
            {scrubEnabled
              ? locale === "es"
                ? "Mueva el cursor para explorar"
                : "Move the cursor to browse"
              : locale === "es"
                ? "Use las flechas o haga clic"
                : "Use the arrows or click a card"}
          </p>
        </Reveal>

        {/* Carousel area */}
        <Reveal variant="soft" delay={0.24}>
          <div
            ref={carouselRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className={cn(
              "relative mt-8 h-[500px] touch-pan-y select-none md:mt-10 lg:h-[560px]",
              scrubEnabled && "md:cursor-ew-resize",
            )}
            role="region"
            aria-label={locale === "es" ? "Perspectivas destacadas" : "Featured perspectives"}
          >
            {items.map((insight, i) => {
              const img = getImage(imagery, insight.imageId);
              const d = wrappedD(i, active, len);
              const absD = Math.abs(d);
              const isFeatured = i === featuredIndex;

              const x = offsetAt(d);
              const scale = isFeatured ? 1 : 0.88;
              const opacity = absD > 3.5 ? 0 : Math.max(0.1, 1 - absD * 0.22);
              const y = 0;
              const zIndex = Math.round(30 - absD * 5);

              const featuredWidthClass =
                "w-[360px] sm:w-[400px] md:w-[420px] lg:w-[440px]";
              const siblingWidthClass =
                "w-[200px] sm:w-[230px] md:w-[250px] lg:w-[270px]";

              return (
                <m.div
                  key={insight.id}
                  initial={false}
                  animate={{ x, scale, opacity, y }}
                  transition={
                    isScrubbing
                      ? { duration: 0.08, ease: "linear" }
                      : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
                  }
                  className={cn(
                    "absolute left-1/2 top-0 -translate-x-1/2 will-change-transform",
                    isFeatured ? featuredWidthClass : siblingWidthClass,
                  )}
                  style={{ zIndex }}
                >
                  {isFeatured ? (
                    <FeaturedCard insight={insight} img={img} locale={locale} />
                  ) : (
                    <SiblingCard insight={insight} img={img} locale={locale} />
                  )}
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
          <div className="mt-12 grid grid-cols-12 items-center gap-6 md:mt-16">
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

            <nav
              aria-label={locale === "es" ? "Secciones" : "Sections"}
              className="col-span-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:col-span-9 lg:gap-x-10"
            >
              {NAV_BUTTONS.map((b) => (
                <Link
                  key={b.id}
                  href={localizedPath(b.href, locale)}
                  className="group relative text-[0.75rem] uppercase tracking-[0.18em] text-ink-muted transition-colors duration-300 hover:text-ink"
                >
                  <span className="relative">
                    {t(b.label, locale)}
                    <span
                      aria-hidden
                      className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                    />
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </Reveal>
      </Container>

      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-rule" />
    </section>
  );
}

interface FeaturedCardProps {
  insight: InsightEntry;
  img: ReturnType<typeof getImage>;
  locale: Locale;
}

/**
 * Featured card: split layout. Image (with dark overlay + metadata) on
 * the left; author panel (portrait + name + title) on the right.
 * Clicking the whole card navigates to /insights/<slug>.
 */
function FeaturedCard({ insight, img, locale }: FeaturedCardProps) {
  return (
    <Link
      href={localizedPath(insight.href, locale)}
      aria-label={t(insight.title, locale)}
      className="group flex w-full overflow-hidden bg-navy-900 text-left shadow-[0_10px_40px_-20px_rgba(14,37,69,0.35)]"
    >
      {/* Image side */}
      <div className="relative aspect-[3/4] w-[62%] overflow-hidden">
        {img && (
          <>
            <Image
              src={img.src}
              alt={t(img.alt, locale)}
              fill
              priority
              sizes="(min-width: 1024px) 280px, 240px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/25 to-transparent"
            />
            <div className="absolute inset-x-5 bottom-5 lg:inset-x-6 lg:bottom-6">
              <p className="eyebrow text-paper/65">
                {t(insight.category, locale)}
                <span aria-hidden className="mx-2 text-paper/25">
                  ·
                </span>
                {t(insight.date, locale)}
              </p>
              <h3 className="font-display mt-3 text-[1.0625rem] leading-[1.2] tracking-[-0.015em] text-paper sm:text-[1.125rem] lg:text-[1.25rem]">
                {t(insight.title, locale)}
              </h3>
              <span aria-hidden className="mt-4 block h-px w-8 bg-gold" />
            </div>
          </>
        )}
      </div>

      {/* Author side */}
      <div className="flex w-[38%] flex-col justify-between bg-navy-900 px-5 py-6 text-paper lg:px-6 lg:py-7">
        <div>
          <AuthorAvatar
            name={insight.author.name}
            personSlug={insight.author.personSlug}
            size={56}
            tone="navy"
          />
          <p className="mt-5 font-display text-[0.9375rem] leading-tight tracking-[-0.01em] text-paper lg:text-[1rem]">
            {insight.author.name}
          </p>
          <p className="mt-2 text-[0.6875rem] uppercase tracking-[0.14em] text-paper/60">
            {t(insight.author.title, locale)}
          </p>
        </div>

        <p className="mt-6 text-[0.8125rem] leading-[1.55] text-paper/75">
          {t(insight.summary, locale)}
        </p>
      </div>
    </Link>
  );
}

interface SiblingCardProps {
  insight: InsightEntry;
  img: ReturnType<typeof getImage>;
  locale: Locale;
}

/**
 * Sibling card: image only. Clicking navigates to that article's detail
 * page. Scrub determines which card is visually featured; click lands on
 * whichever card the cursor is over at the moment of the click.
 */
function SiblingCard({ insight, img, locale }: SiblingCardProps) {
  return (
    <Link
      href={localizedPath(insight.href, locale)}
      aria-label={t(insight.title, locale)}
      className="group relative block w-full overflow-hidden text-left"
    >
      {img && (
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={img.src}
            alt={t(img.alt, locale)}
            fill
            sizes="(min-width: 1024px) 270px, 230px"
            className="object-cover transition-[filter,opacity] duration-500 group-hover:brightness-110"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-paper/25 transition-opacity duration-500 group-hover:bg-paper/5"
          />
        </div>
      )}
    </Link>
  );
}
