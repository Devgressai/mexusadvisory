import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { focusTopics } from "@/content/focus";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { localizedPath, t } from "@/lib/i18n";

interface FocusModulesProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Per-topic imagery with bilingual alt text.
 * Images generated via Gemini Imagen — editorial architectural photography,
 * no people, no clichés, muted palette.
 */
const FOCUS_IMAGERY: Record<
  string,
  { src: string; alt: { en: string; es: string } }
> = {
  "immigration-volatility": {
    src: "/imagery/focus-immigration.webp",
    alt: {
      en: "Empty international airport transit corridor at twilight with polished terrazzo floors and soft indirect lighting",
      es: "Corredor vacío de tránsito de aeropuerto internacional al anochecer con pisos de terrazo pulido y luz indirecta",
    },
  },
  "international-investments": {
    src: "/imagery/focus-investments.webp",
    alt: {
      en: "Private banking boardroom with marble walls and walnut paneling bathed in soft morning light",
      es: "Sala de juntas de banca privada con paredes de mármol y paneles de nogal iluminada por luz suave de la mañana",
    },
  },
  "us-mexico-trade": {
    src: "/imagery/focus-trade.webp",
    alt: {
      en: "Aerial view of a vast modern logistics and shipping port at golden hour",
      es: "Vista aérea de un vasto puerto logístico y de transporte marítimo moderno en la hora dorada",
    },
  },
};

export function FocusModules({ locale, dict }: FocusModulesProps) {
  return (
    <Section tone="bone" size="standard">
      <Container>
        <SectionHeader
          eyebrow={dict.home.focusEyebrow}
          title={dict.home.focusTitle}
          lede={dict.home.focusLede}
          className="mb-20"
        />

        <Stagger className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6 lg:gap-8">
          {focusTopics.map((topic) => {
            const img = FOCUS_IMAGERY[topic.slug];
            return (
              <StaggerItem key={topic.id} className="group">
                <Link
                  href={localizedPath(`/focus/${topic.slug}`, locale)}
                  className="block"
                >
                  {/* Image */}
                  {img && (
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt[locale]}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                      />
                      {/* Subtle navy veil for palette coherence */}
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-navy-900/5 to-transparent"
                      />
                      {/* Gold hairline — animates on hover */}
                      <div
                        aria-hidden
                        className="absolute bottom-0 left-0 h-px w-8 origin-left bg-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                      />
                    </div>
                  )}

                  {/* Text */}
                  <div className="pt-8">
                    <p className="eyebrow text-ink-muted">
                      {topic.number} · {t(topic.title, locale)}
                    </p>
                    <h3 className="font-display mt-5 text-[clamp(1.375rem,1.7vw,1.75rem)] leading-[1.18] tracking-[-0.02em] text-ink">
                      {t(topic.dek, locale).split(".")[0]}.
                    </h3>
                    <p className="mt-5 max-w-sm text-[0.9375rem] leading-[1.65] text-ink-muted">
                      {t(topic.lede, locale)}
                    </p>
                    <p className="mt-8 inline-flex items-baseline gap-2 text-[0.875rem] font-medium tracking-[0.01em] text-navy-900">
                      <span className="relative">
                        {dict.common.readBriefing}
                        <span
                          aria-hidden
                          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
                        />
                      </span>
                      <span
                        aria-hidden
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
