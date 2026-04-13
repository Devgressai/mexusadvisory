import Image from "next/image";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { Container } from "@/components/primitives/Container";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { WhatsAppButton } from "@/components/shell/WhatsAppButton";
import { FadeRise } from "@/components/motion/FadeRise";
import { HairlineDraw } from "@/components/motion/HairlineDraw";
import { localizedPath } from "@/lib/i18n";

interface HeroHomeProps {
  locale: Locale;
  dict: Dictionary;
}

const HERO_IMG_ALT = {
  en: "Calm coastal horizon at dawn seen through a minimalist concrete and glass terrace",
  es: "Horizonte costero tranquilo al amanecer visto desde una terraza minimalista de concreto y vidrio",
};

/**
 * Typography-led hero with a narrow atmospheric side strip (not a panel).
 * CTAs are text-led — no filled buttons, which drift into marketing-site
 * territory. The image is restrained to ~3 cols on lg and carries a
 * navy wash so it reads as atmosphere rather than photography.
 */
export function HeroHome({ locale, dict }: HeroHomeProps) {
  return (
    <section className="relative bg-paper pt-36 pb-28 md:pt-44 md:pb-36 lg:pt-52 lg:pb-44">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10">
          {/* Text column */}
          <div className="col-span-12 lg:col-span-9">
            {/* Eyebrow — integrated gold marker + index counter */}
            <FadeRise>
              <div className="flex items-center gap-5">
                <span aria-hidden className="eyebrow text-ink-muted tabular-nums">
                  01
                </span>
                <span aria-hidden className="h-px w-10 bg-gold" />
                <span className="eyebrow text-ink-muted">
                  {dict.home.heroEyebrow}
                </span>
              </div>
            </FadeRise>

            {/* Headline */}
            <FadeRise delay={0.08}>
              <h1 className="font-display text-display mt-14 max-w-[22ch] text-ink md:mt-16 lg:mt-20 lg:max-w-[24ch]">
                {dict.home.heroTitle}
              </h1>
            </FadeRise>

            {/* Lede — offset inside its own grid for editorial tension */}
            <FadeRise delay={0.18}>
              <div className="mt-14 grid grid-cols-12 gap-x-6 md:mt-16 lg:mt-20">
                <p className="text-lede col-span-12 max-w-[56ch] md:col-span-10 lg:col-span-8 lg:col-start-5">
                  {dict.home.heroLede}
                </p>
              </div>
            </FadeRise>

            {/* Action row — text-led, no filled buttons */}
            <FadeRise delay={0.26}>
              <div className="mt-14 grid grid-cols-12 gap-x-6 md:mt-16 lg:mt-20">
                <div className="col-span-12 flex flex-wrap items-center gap-x-10 gap-y-6 lg:col-span-8 lg:col-start-5">
                  <LinkArrow href={localizedPath("/contact", locale)}>
                    {dict.common.discussOpportunity}
                  </LinkArrow>
                  <LinkArrow href={localizedPath("/capabilities", locale)}>
                    {dict.common.viewCapabilities}
                  </LinkArrow>
                  <WhatsAppButton label={dict.nav.whatsapp} variant="cta" />
                </div>
              </div>
            </FadeRise>
          </div>

          {/* Narrow atmospheric side strip — 3 cols on lg, hidden below */}
          <FadeRise
            delay={0.22}
            className="relative col-span-12 mt-20 hidden lg:col-span-3 lg:col-start-10 lg:mt-0 lg:block"
          >
            <div className="relative aspect-[2/5] w-full overflow-hidden">
              <Image
                src="/imagery/hero-atmosphere.webp"
                alt={HERO_IMG_ALT[locale]}
                fill
                priority
                sizes="(min-width: 1024px) 20vw, 0vw"
                className="object-cover"
              />
              {/* Heavy navy wash — reads as atmosphere, not focal image */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-b from-navy-900/35 via-navy-900/25 to-navy-900/45"
              />
              {/* Gold hairline frames */}
              <div aria-hidden className="absolute left-0 top-0 h-full w-px bg-gold/60" />
            </div>

            {/* Strip caption */}
            <div className="mt-5 flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-gold" />
              <p className="eyebrow text-ink-muted">Americas · International</p>
            </div>
          </FadeRise>
        </div>

        {/* Base meta strip — single rule + editorial meta */}
        <div className="mt-32 md:mt-40 lg:mt-52">
          <HairlineDraw tone="rule" delay={0.4} />
          <FadeRise delay={0.5}>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="eyebrow text-ink-muted">
                {locale === "es"
                  ? "Américas · Internacional · Desde 2019"
                  : "Americas · International · Since 2019"}
              </p>
              <p className="eyebrow text-ink-muted">
                {locale === "es"
                  ? "Consejo privado transfronterizo"
                  : "Private cross-border counsel"}
              </p>
            </div>
          </FadeRise>
        </div>
      </Container>
    </section>
  );
}
