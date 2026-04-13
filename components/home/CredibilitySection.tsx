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

/**
 * The single navy moment on the homepage. Architectural composition.
 * No imagery — the metadata list and editorial typography carry the
 * weight that background photography was doing before.
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
      {/* Gold top rule */}
      <div className="absolute inset-x-0 top-0 h-px">
        <HairlineDraw tone="gold" />
      </div>

      <Container className="relative py-28 md:py-36 lg:py-48">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-12">
          {/* Header */}
          <div className="md:col-span-12">
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

          {/* Body */}
          <FadeRise delay={0.15} className="md:col-span-6 md:col-start-1">
            <div className="space-y-6 text-[1.0625rem] leading-[1.8] text-paper/75">
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
            <dl className="border-t border-paper/15">
              {meta.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-paper/15 py-6"
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
    </section>
  );
}
