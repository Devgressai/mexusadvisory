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
 * BCG-adjacent hero: content-led on the left, large atmospheric editorial
 * image on the right. Image is the canvas, headline and lede sit on the
 * left column with disciplined whitespace. Single numbered gold-hairline
 * eyebrow, two text-led CTAs plus the WhatsApp ghost pill.
 */
export function HeroHome({ locale, dict }: HeroHomeProps) {
  const img = getImage(imagery, "hero-atmosphere");

  return (
    <section className="relative bg-paper pt-32 pb-24 md:pt-36 md:pb-28 lg:pt-40 lg:pb-36">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-16 lg:gap-x-10">
          {/* Text column */}
          <div className="col-span-12 lg:col-span-6 lg:pt-8">
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

            <Reveal delay={0.08}>
              <h1 className="font-display text-display mt-12 max-w-[20ch] text-ink md:mt-14 lg:mt-16 lg:max-w-[18ch]">
                {dict.home.heroTitle}
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-lede mt-10 max-w-[52ch] md:mt-12">
                {dict.home.heroLede}
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6 md:mt-12">
                <LinkArrow href={localizedPath("/contact", locale)}>
                  {dict.common.discussOpportunity}
                </LinkArrow>
                <LinkArrow href={localizedPath("/capabilities", locale)}>
                  {dict.common.viewCapabilities}
                </LinkArrow>
                <WhatsAppButton label={dict.nav.whatsapp} variant="cta" />
              </div>
            </Reveal>

            {/* Meta strip under CTAs — BCG-style micro-metadata */}
            <Reveal variant="soft" delay={0.36}>
              <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-rule pt-6 md:mt-16">
                <p className="eyebrow text-ink-muted">
                  {locale === "es"
                    ? "Américas · Internacional"
                    : "Americas · International"}
                </p>
                <span aria-hidden className="h-3 w-px bg-rule" />
                <p className="eyebrow text-ink-muted">
                  {locale === "es" ? "Desde 2019" : "Since 2019"}
                </p>
                <span aria-hidden className="h-3 w-px bg-rule" />
                <p className="eyebrow text-ink-muted">
                  {locale === "es"
                    ? "5 prácticas · 4 oficinas"
                    : "5 practices · 4 offices"}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Large atmospheric image */}
          {img && (
            <Reveal
              variant="soft"
              delay={0.2}
              className="relative col-span-12 lg:col-span-6"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/11] lg:aspect-[4/5]">
                <Image
                  src={img.src}
                  alt={t(img.alt, locale)}
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
                {/* Very subtle paper gradient on top-left for legibility of the meta strip */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-br from-paper/0 via-transparent to-navy-900/10"
                />
                {/* Gold hairline frame on the left edge */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-px bg-gold/60"
                />
              </div>

              {/* Image caption — BCG uses tiny credit lines beneath featured imagery */}
              <div className="mt-5 flex items-center gap-3">
                <span aria-hidden className="h-px w-6 bg-gold" />
                <p className="eyebrow text-ink-muted">
                  {locale === "es"
                    ? "Consejo privado transfronterizo"
                    : "Private cross-border counsel"}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
