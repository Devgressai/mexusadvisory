import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { Container } from "@/components/primitives/Container";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { WhatsAppButton } from "@/components/shell/WhatsAppButton";
import { Reveal } from "@/components/motion/Reveal";
import { HairlineDraw } from "@/components/motion/HairlineDraw";
import { localizedPath } from "@/lib/i18n";

interface HeroHomeProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Typography-only hero. No image, no side panel. The entire weight of the
 * opening statement is carried by hierarchy, whitespace, and a single
 * numbered gold-hairline eyebrow. Two text-led CTAs (no filled buttons)
 * plus the WhatsApp ghost pill.
 *
 * The page's visual "alive" feeling now comes from the InsightsRail that
 * sits directly below — this hero stays calm, paper-dominant, and direct.
 */
export function HeroHome({ locale, dict }: HeroHomeProps) {
  return (
    <section className="relative bg-paper pt-36 pb-24 md:pt-44 md:pb-28 lg:pt-52 lg:pb-32">
      <Container>
        {/* Eyebrow — gold hairline + counter */}
        <Reveal>
          <div className="flex items-center gap-5">
            <span aria-hidden className="eyebrow text-ink-muted tabular-nums">
              01
            </span>
            <span aria-hidden className="h-px w-10 bg-gold" />
            <span className="eyebrow text-ink-muted">
              {dict.home.heroEyebrow}
            </span>
          </div>
        </Reveal>

        {/* Headline — wide max for breathing room */}
        <Reveal delay={0.08}>
          <h1 className="font-display text-display mt-14 max-w-[24ch] text-ink md:mt-16 lg:mt-20 lg:max-w-[26ch]">
            {dict.home.heroTitle}
          </h1>
        </Reveal>

        {/* Lede — offset into a 12-col grid for editorial tension */}
        <Reveal delay={0.18}>
          <div className="mt-14 grid grid-cols-12 gap-x-6 md:mt-16 lg:mt-20">
            <p className="text-lede col-span-12 max-w-[56ch] md:col-span-10 lg:col-span-8 lg:col-start-5">
              {dict.home.heroLede}
            </p>
          </div>
        </Reveal>

        {/* Action row — pure text-led CTAs */}
        <Reveal delay={0.26}>
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
        </Reveal>

        {/* Base meta strip — single rule + locale/era meta */}
        <div className="mt-28 md:mt-32 lg:mt-40">
          <HairlineDraw tone="rule" delay={0.35} />
          <Reveal variant="soft" delay={0.45}>
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
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
