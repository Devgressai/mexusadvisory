import Image from "next/image";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { FadeRise } from "@/components/motion/FadeRise";
import { HairlineDraw } from "@/components/motion/HairlineDraw";
import { localizedPath } from "@/lib/i18n";

interface CredibilitySectionProps {
  locale: Locale;
  dict: Dictionary;
}

const CREDIBILITY_IMG_ALT = {
  en: "Private advisory library with tall walnut shelves and warm indirect lighting",
  es: "Biblioteca de asesoría privada con altas estanterías de nogal e iluminación indirecta cálida",
};

/**
 * The single navy moment on the homepage. Architectural composition with
 * a narrow atmospheric image on the right, treated with heavy navy wash so
 * it reads as depth rather than photography. Body + meta list stack on the
 * left. All CTAs are text-led.
 */
export function CredibilitySection({ locale, dict }: CredibilitySectionProps) {
  const meta = [
    { label: dict.home.credibilityMeta.founded, value: "2019" },
    { label: dict.home.credibilityMeta.practices, value: "5" },
    { label: dict.home.credibilityMeta.offices, value: "4" },
    { label: dict.home.credibilityMeta.languages, value: "EN · ES · PT" },
  ];

  return (
    <section className="relative bg-navy-900 text-paper">
      <div className="absolute inset-x-0 top-0 h-px">
        <HairlineDraw tone="gold" />
      </div>

      <Container className="relative py-28 md:py-36 lg:py-48">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          {/* Header */}
          <div className="col-span-12">
            <FadeRise>
              <div className="flex items-center gap-5">
                <span aria-hidden className="h-px w-10 bg-gold" />
                <Eyebrow tone="gold" withMarker={false} className="text-gold">
                  {dict.home.credibilityEyebrow}
                </Eyebrow>
              </div>
            </FadeRise>
            <FadeRise delay={0.08}>
              <h2 className="font-display text-h1 mt-10 max-w-[24ch] text-paper">
                {dict.home.credibilityTitle}
              </h2>
            </FadeRise>
          </div>

          {/* Body + meta stacked */}
          <FadeRise delay={0.15} className="col-span-12 lg:col-span-7">
            <div className="space-y-6 text-[1.0625rem] leading-[1.8] text-paper/75">
              {dict.home.credibilityBody.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Meta list */}
            <dl className="mt-12 grid grid-cols-2 gap-x-12 gap-y-0 border-t border-paper/15 md:grid-cols-4">
              {meta.map((item, idx) => (
                <div key={idx} className="border-b border-paper/15 py-5">
                  <dt className="eyebrow text-paper/45">{item.label}</dt>
                  <dd className="font-display mt-3 text-[1.375rem] tracking-[-0.015em] text-paper">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
              <LinkArrow href={localizedPath("/about", locale)} tone="paper">
                {dict.nav.about}
              </LinkArrow>
              <LinkArrow href={localizedPath("/about/people", locale)} tone="paper">
                {dict.nav.people}
              </LinkArrow>
              <LinkArrow href={localizedPath("/about/offices", locale)} tone="paper">
                {dict.nav.offices}
              </LinkArrow>
            </div>
          </FadeRise>

          {/* Narrow atmospheric image column */}
          <FadeRise
            delay={0.22}
            className="relative col-span-12 lg:col-span-4 lg:col-start-9"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/imagery/credibility.webp"
                alt={CREDIBILITY_IMG_ALT[locale]}
                fill
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover opacity-80"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/20 to-navy-900/60"
              />
              <div aria-hidden className="absolute left-0 top-0 h-full w-px bg-gold/60" />
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-gold" />
              <p className="eyebrow text-paper/60">
                {locale === "es"
                  ? "Un gabinete privado"
                  : "A private practice"}
              </p>
            </div>
          </FadeRise>
        </div>
      </Container>
    </section>
  );
}
