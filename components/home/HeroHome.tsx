import Image from "next/image";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { ButtonLink } from "@/components/primitives/Button";
import { WhatsAppButton } from "@/components/shell/WhatsAppButton";
import { FadeRise } from "@/components/motion/FadeRise";
import { HairlineDraw } from "@/components/motion/HairlineDraw";
import { localizedPath } from "@/lib/i18n";

interface HeroHomeProps {
  locale: Locale;
  dict: Dictionary;
}

const HERO_ALT = {
  en: "Minimalist executive terrace in concrete and glass overlooking a calm coastal horizon at dawn",
  es: "Terraza ejecutiva minimalista de concreto y vidrio con vista a un horizonte costero en calma al amanecer",
} as const;

export function HeroHome({ locale, dict }: HeroHomeProps) {
  return (
    <section className="relative overflow-hidden bg-paper pt-40 pb-24 md:pt-48 md:pb-32 lg:min-h-[100svh] lg:pt-56 lg:pb-40">
      <Container>
        <div className="grid grid-cols-12 items-start gap-x-6 lg:gap-x-10">
          {/* Text column */}
          <div className="col-span-12 lg:col-span-7">
            <FadeRise>
              <Eyebrow tone="gold">{dict.home.heroEyebrow}</Eyebrow>
            </FadeRise>

            <FadeRise delay={0.08}>
              <h1 className="font-display text-display mt-10 max-w-[18ch] text-ink">
                {dict.home.heroTitle}
              </h1>
            </FadeRise>

            <FadeRise delay={0.18}>
              <p className="text-lead mt-10 max-w-[52ch] text-ink-muted">
                {dict.home.heroLede}
              </p>
            </FadeRise>

            <FadeRise delay={0.26}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <ButtonLink href={localizedPath("/contact", locale)} variant="primary">
                  {dict.common.requestConsultation}
                </ButtonLink>
                <WhatsAppButton label={dict.nav.whatsapp} variant="cta" />
              </div>
            </FadeRise>
          </div>

          {/* Image column — visible from lg up */}
          <FadeRise
            delay={0.2}
            className="relative col-span-12 mt-16 hidden lg:col-span-5 lg:mt-0 lg:block"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/imagery/hero-atmosphere.webp"
                alt={HERO_ALT[locale]}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              {/* Subtle navy veil to lock into palette without dominating */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-navy-900/10 via-transparent to-navy-900/25"
              />
              {/* Gold hairline frame on left edge */}
              <div aria-hidden className="absolute left-0 top-0 h-full w-px bg-gold/60" />
            </div>

            {/* Caption meta */}
            <div className="mt-6 flex items-center gap-4">
              <span aria-hidden className="h-px w-8 bg-gold" />
              <p className="eyebrow text-ink-muted">Americas · International</p>
            </div>
          </FadeRise>
        </div>

        {/* Vertical gold hairline ornament (mobile only — image replaces it on desktop) */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-6 top-[56%] hidden h-24 w-px -translate-y-1/2 md:flex lg:hidden"
        >
          <div className="relative h-full w-px">
            <HairlineDraw tone="gold" className="absolute left-0 top-0 h-full w-px" />
            <span className="absolute -left-[3px] top-0 h-[7px] w-[7px] rounded-full bg-gold" />
          </div>
        </div>
      </Container>
    </section>
  );
}
