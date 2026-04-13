import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { Container } from "@/components/primitives/Container";
import { ButtonLink } from "@/components/primitives/Button";
import { WhatsAppButton } from "@/components/shell/WhatsAppButton";
import { FadeRise } from "@/components/motion/FadeRise";
import { HairlineDraw } from "@/components/motion/HairlineDraw";
import { localizedPath } from "@/lib/i18n";

interface HeroHomeProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Typography-led hero. No imagery. The composition is built entirely from
 * display type, disciplined whitespace, a single eyebrow, and one primary
 * CTA. A single gold hairline and meta row anchor the base of the page.
 */
export function HeroHome({ locale, dict }: HeroHomeProps) {
  return (
    <section className="relative bg-paper pt-40 pb-28 md:pt-48 md:pb-36 lg:pt-56 lg:pb-44">
      <Container>
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

        {/* Headline — spans 9/12 on lg, generous max-w for breathing room */}
        <FadeRise delay={0.08}>
          <h1 className="font-display text-display mt-14 max-w-[22ch] text-ink md:mt-16 lg:mt-20 lg:max-w-[24ch]">
            {dict.home.heroTitle}
          </h1>
        </FadeRise>

        {/* Lede — separate grid column to create typographic tension with H1 */}
        <FadeRise delay={0.18}>
          <div className="mt-14 grid grid-cols-12 gap-x-6 md:mt-16 lg:mt-20">
            <p className="col-span-12 text-lede max-w-[56ch] md:col-span-10 lg:col-span-7 lg:col-start-6">
              {dict.home.heroLede}
            </p>
          </div>
        </FadeRise>

        {/* Action row */}
        <FadeRise delay={0.26}>
          <div className="mt-14 grid grid-cols-12 gap-x-6 md:mt-16 lg:mt-20">
            <div className="col-span-12 flex flex-wrap items-center gap-5 lg:col-span-7 lg:col-start-6">
              <ButtonLink
                href={localizedPath("/contact", locale)}
                variant="primary"
              >
                {dict.common.requestConsultation}
              </ButtonLink>
              <WhatsAppButton label={dict.nav.whatsapp} variant="cta" />
            </div>
          </div>
        </FadeRise>

        {/* Base meta strip — single gold hairline + locale/era meta */}
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
