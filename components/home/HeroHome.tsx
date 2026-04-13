import Image from "next/image";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { Container } from "@/components/primitives/Container";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { WhatsAppButton } from "@/components/shell/WhatsAppButton";
import { Reveal } from "@/components/motion/Reveal";
import { imagery } from "@/content/imagery";
import { getImage } from "@/lib/imagery";
import { localizedPath, t } from "@/lib/i18n";

interface HeroHomeProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Full-bleed editorial hero — BCG-adjacent. A large atmospheric image
 * fills the viewport width with a navy scrim and vertical gradient for
 * legibility. Text is overlaid on the left: gold-hairline eyebrow,
 * display headline, short dek, text-led CTAs. A bottom meta strip with
 * three micro-facts anchors the composition against a 1px gold rule.
 */
export function HeroHome({ locale, dict }: HeroHomeProps) {
  const img = getImage(imagery, "hero-bridge");

  return (
    <section className="relative overflow-hidden bg-navy-900 text-paper">
      {/* Full-bleed image — blends with the navy section via its own opacity.
          No vertical gradient overlays or seam bands, so there is nothing to
          produce a visible fade edge at the top or bottom. The section's
          own bg-navy-900 handles any pixel-level edge. */}
      {img && (
        <Image
          src={img.src}
          alt={t(img.alt, locale)}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover opacity-80"
        />
      )}
      {/* Single horizontal scrim — darker on the left where the headline
          lives, fading to transparent so the image reads cleanly on the
          right. No top or bottom overlays. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/35 to-transparent"
      />

      <Container className="relative flex min-h-[88vh] flex-col justify-between pt-40 pb-16 md:pt-48 md:pb-20 lg:min-h-[94vh] lg:pt-56 lg:pb-24">
        {/* Top content block */}
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-9 xl:col-span-8">
            <Reveal>
              <div className="flex items-center gap-5">
                <span
                  aria-hidden
                  className="eyebrow text-paper/60 tabular-nums"
                >
                  01
                </span>
                <span aria-hidden className="h-px w-12 bg-gold" />
                <span className="eyebrow text-paper/60">
                  {dict.home.heroEyebrow}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display text-display mt-10 max-w-[20ch] text-paper md:mt-14 lg:mt-16 lg:max-w-[22ch]">
                {dict.home.heroTitle}
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-10 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-paper/80 md:mt-12 md:text-[1.125rem]">
                {dict.home.heroLede}
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 md:mt-14">
                <LinkArrow
                  href={localizedPath("/contact", locale)}
                  tone="paper"
                >
                  {dict.common.discussOpportunity}
                </LinkArrow>
                <LinkArrow
                  href={localizedPath("/capabilities", locale)}
                  tone="paper"
                >
                  {dict.common.viewCapabilities}
                </LinkArrow>
                <WhatsAppButton
                  label={dict.nav.whatsapp}
                  variant="cta"
                  tone="navy"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom meta strip */}
        <Reveal variant="soft" delay={0.4}>
          <div className="mt-20 border-t border-paper/15 pt-6 md:mt-28">
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-12 md:items-baseline md:gap-x-6">
              <p className="eyebrow col-span-12 text-paper/50 md:col-span-4">
                {locale === "es"
                  ? "Américas · Internacional"
                  : "Americas · International"}
              </p>
              <p className="eyebrow col-span-12 text-paper/50 md:col-span-4">
                {locale === "es" ? "Fundado en 2019" : "Founded 2019"}
              </p>
              <p className="eyebrow col-span-12 text-paper/50 md:col-span-4 md:text-right">
                {locale === "es"
                  ? "5 prácticas · 4 oficinas"
                  : "5 practices · 4 offices"}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
