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

const CREDIBILITY_ALT = {
  en: "Private advisory library with tall walnut bookshelves and warm indirect lighting",
  es: "Biblioteca de asesoría privada con altas estanterías de nogal e iluminación indirecta cálida",
} as const;

export function CredibilitySection({ locale, dict }: CredibilitySectionProps) {
  const meta = [
    { label: dict.home.credibilityMeta.founded, value: "2019" },
    { label: dict.home.credibilityMeta.practices, value: "5" },
    { label: dict.home.credibilityMeta.offices, value: "4" },
    { label: dict.home.credibilityMeta.languages, value: "EN · ES · PT" },
  ];

  return (
    <section className="relative overflow-hidden bg-navy-900 text-paper">
      {/* Ambient background image — far behind, heavy navy wash */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/imagery/credibility.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/85 to-navy-900" />
      </div>

      {/* Gold top rule */}
      <div className="absolute inset-x-0 top-0 h-px">
        <HairlineDraw tone="gold" />
      </div>

      <Container className="relative py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-x-6">
          {/* Header */}
          <div className="md:col-span-12">
            <FadeRise>
              <Eyebrow tone="gold" withMarker className="text-gold">
                {dict.home.credibilityEyebrow}
              </Eyebrow>
            </FadeRise>
            <FadeRise delay={0.08}>
              <h2 className="font-display mt-8 max-w-4xl text-h2 text-paper">
                {dict.home.credibilityTitle}
              </h2>
            </FadeRise>
          </div>

          {/* Body */}
          <FadeRise delay={0.15} className="md:col-span-6 md:col-start-1">
            <div className="space-y-6 text-[1.0625rem] leading-[1.75] text-paper/75">
              {dict.home.credibilityBody.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
              <LinkArrow href={localizedPath("/about", locale)} tone="paper">
                {dict.nav.about}
              </LinkArrow>
              <LinkArrow href={localizedPath("/about/people", locale)} tone="paper">
                {dict.nav.people}
              </LinkArrow>
            </div>
          </FadeRise>

          {/* Meta list */}
          <FadeRise delay={0.22} className="md:col-span-5 md:col-start-8">
            <dl>
              {meta.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-t border-paper/15 py-6 last:border-b"
                >
                  <dt className="eyebrow text-paper/45">{item.label}</dt>
                  <dd className="font-display text-[1.25rem] tracking-[-0.01em] text-paper">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeRise>
        </div>
      </Container>

      {/* Hidden decorative element for alt-only asset reference (screen readers skip) */}
      <span className="sr-only">{CREDIBILITY_ALT[locale]}</span>
    </section>
  );
}
