"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
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

/**
 * BCG-style centered editorial carousel.
 *
 * Interaction model:
 *   - Click a non-featured card → it becomes the featured (centered) card.
 *   - Click the featured card → navigates to the article detail page.
 *   - Left/right arrow buttons step through cards as a keyboard-accessible
 *     alternative.
 *
 * This replaces an earlier cursor-scrub mechanic. Scrub felt lively with
 * 6 cards but broke for 8: the scrub updated `active` continuously as the
 * cursor moved, turning side cards into moving targets that could never
 * be clicked. Click-to-feature is predictable, deterministic, and works
 * identically for 2, 6, or 20 items.
 */

const CATEGORY_GROUPS = [
  { id: "spotlight", label: { en: "Mexus Spotlight", es: "Destacado" } },
  {
    id: "immigration",
    label: { en: "Immigration", es: "Migración" },
    category: "Immigration",
  },
  {
    id: "capital",
    label: { en: "Capital", es: "Capital" },
    category: "Capital",
  },
  {
    id: "insurance",
    label: { en: "Insurance", es: "Seguros" },
    category: "Insurance",
  },
  {
    id: "trade",
    label: { en: "Trade", es: "Comercio" },
    category: "Trade",
  },
] as const;

type GroupId = (typeof CATEGORY_GROUPS)[number]["id"];

function pickGroup(id: GroupId): InsightEntry[] {
  if (id === "spotlight") return insights;
  const group = CATEGORY_GROUPS.find((g) => g.id === id);
  if (!group || !("category" in group)) return insights;
  const filtered = insights.filter((i) => i.category.en === group.category);
  const padded = [...filtered];
  let idx = 0;
  while (padded.length < 6 && idx < insights.length) {
    const next = insights[idx++];
    if (next && !padded.some((p) => p.id === next.id)) padded.push(next);
  }
  return padded.slice(0, 6);
}

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
  const extra = (absD - 1) * (SIBLING_HALF * 2 + SIBLING_GAP);
  return sign * (firstStep + extra);
}

export function HeroHome({ locale, dict }: HeroHomeProps) {
  const [groupId, setGroupId] = useState<GroupId>("spotlight");
  const items = useMemo(() => pickGroup(groupId), [groupId]);
  const len = items.length;

  const [active, setActive] = useState<number>(Math.floor(len / 2));

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(len - 1, a + 1));

  const featured = items[active];

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
            {locale === "es" ? "Elija un artículo" : "Select an article"}
          </p>
        </Reveal>

        {/* Carousel area */}
        <Reveal variant="soft" delay={0.24}>
          <div
            className="relative mt-8 h-[500px] select-none md:mt-10 lg:h-[560px]"
            role="region"
            aria-label={locale === "es" ? "Perspectivas destacadas" : "Featured perspectives"}
          >
            {items.map((insight, i) => {
              const img = getImage(imagery, insight.imageId);
              const d = i - active;
              const absD = Math.abs(d);
              const isFeatured = i === active;

              const x = offsetAt(d);
              const scale = isFeatured ? 1 : Math.max(0.62, 1 - absD * 0.12);
              const opacity = absD > 3.5 ? 0 : Math.max(0.1, 1 - absD * 0.22);
              const y = absD * 14;
              const zIndex = Math.round(30 - absD * 5);

              const featuredWidthClass =
                "w-[360px] sm:w-[400px] md:w-[420px] lg:w-[440px]";
              const siblingWidthClass =
                "w-[200px] sm:w-[230px] md:w-[250px] lg:w-[270px]";

              return (
                <m.div
                  key={`${groupId}-${insight.id}`}
                  initial={false}
                  animate={{ x, scale, opacity, y }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "absolute left-1/2 top-0 -translate-x-1/2 will-change-transform",
                    isFeatured ? featuredWidthClass : siblingWidthClass,
                  )}
                  style={{ zIndex }}
                >
                  {isFeatured ? (
                    <FeaturedCard insight={insight} img={img} locale={locale} />
                  ) : (
                    <SiblingCard
                      insight={insight}
                      img={img}
                      locale={locale}
                      onSelect={() => setActive(i)}
                    />
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
                disabled={active === 0}
                aria-label={locale === "es" ? "Anterior" : "Previous"}
                className={cn(
                  "flex h-10 w-10 items-center justify-center border border-rule text-ink transition-colors duration-300 hover:border-navy-900 hover:text-navy-900",
                  active === 0 && "opacity-30",
                )}
              >
                <ArrowLeft size={16} strokeWidth={1.5} aria-hidden />
              </button>
              <button
                type="button"
                onClick={next}
                disabled={active === len - 1}
                aria-label={locale === "es" ? "Siguiente" : "Next"}
                className={cn(
                  "flex h-10 w-10 items-center justify-center border border-rule text-ink transition-colors duration-300 hover:border-navy-900 hover:text-navy-900",
                  active === len - 1 && "opacity-30",
                )}
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
                      setActive(Math.floor(pickGroup(g.id).length / 2));
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
  onSelect: () => void;
}

/**
 * Sibling card: image only. Clicking promotes it to the featured slot.
 * Kept as a button (not a link) so it doesn't navigate — the featured
 * state is where the outbound link lives.
 */
function SiblingCard({ insight, img, locale, onSelect }: SiblingCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`${t(insight.title, locale)} — ${
        locale === "es" ? "destacar" : "feature"
      }`}
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
    </button>
  );
}
