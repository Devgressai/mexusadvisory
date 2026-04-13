import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { focusTopics } from "@/content/focus";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { localizedPath, t } from "@/lib/i18n";

interface FocusModulesProps {
  locale: Locale;
  dict: Dictionary;
}

const FOCUS_IMAGERY: Record<
  string,
  { src: string; alt: { en: string; es: string } }
> = {
  "immigration-volatility": {
    src: "/imagery/focus-immigration.webp",
    alt: {
      en: "Empty international airport transit corridor at twilight with polished terrazzo floors",
      es: "Corredor vacío de tránsito de aeropuerto internacional al anochecer con pisos de terrazo pulido",
    },
  },
  "international-investments": {
    src: "/imagery/focus-investments.webp",
    alt: {
      en: "Private banking boardroom with marble walls and walnut paneling in soft morning light",
      es: "Sala de juntas de banca privada con paredes de mármol y paneles de nogal bajo luz suave de la mañana",
    },
  },
  "us-mexico-trade": {
    src: "/imagery/focus-trade.webp",
    alt: {
      en: "Aerial view of a modern logistics and shipping port at golden hour",
      es: "Vista aérea de un puerto logístico y de transporte marítimo moderno en la hora dorada",
    },
  },
};

/**
 * Editorial publication module. Small 16:10 thumbnails treated as article
 * lead images, editorial metadata line (category · date), H3 headline, and
 * a subtle text-led CTA. Section header pairs with an "Explore insights"
 * LinkArrow for BCG-style browsing affordance.
 */
export function FocusModules({ locale, dict }: FocusModulesProps) {
  return (
    <Section tone="bone" size="standard">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-10 md:mb-20 md:flex-row md:items-end lg:mb-24">
          <SectionHeader
            eyebrow={dict.home.focusEyebrow}
            title={dict.home.focusTitle}
            lede={dict.home.focusLede}
          />
          <LinkArrow href={localizedPath("/focus/immigration-volatility", locale)}>
            {dict.common.exploreInsights}
          </LinkArrow>
        </div>

        <Stagger className="grid grid-cols-1 gap-x-6 gap-y-16 border-t border-rule pt-14 md:grid-cols-3 md:gap-y-0">
          {focusTopics.map((topic) => {
            const img = FOCUS_IMAGERY[topic.slug];
            return (
              <StaggerItem key={topic.id} className="group">
                <Link
                  href={localizedPath(`/focus/${topic.slug}`, locale)}
                  className="flex h-full flex-col"
                >
                  {img && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt[locale]}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-[0.92]"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-navy-900/25 via-transparent to-transparent"
                      />
                      <span
                        aria-hidden
                        className="absolute bottom-0 left-0 h-px w-10 origin-left bg-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                      />
                    </div>
                  )}

                  <div className="mt-7 flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-muted">
                    <span className="tabular-nums">{topic.number}</span>
                    <span aria-hidden className="h-px w-4 bg-ink-muted/30" />
                    <span>{locale === "es" ? "Informe" : "Briefing"}</span>
                    <span aria-hidden className="text-ink-muted/30">·</span>
                    <span>{t(topic.dateStamp, locale)}</span>
                  </div>

                  <h3 className="font-display text-h3 mt-5 max-w-[24ch] text-ink transition-colors duration-300 group-hover:text-navy-900">
                    {t(topic.title, locale)}
                  </h3>

                  <p className="mt-5 max-w-[38ch] text-[0.9375rem] leading-[1.7] text-ink-muted">
                    {t(topic.dek, locale)}
                  </p>

                  <p className="mt-auto inline-flex items-baseline gap-2 pt-10 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-navy-900">
                    <span className="relative">
                      {dict.common.readBriefing}
                      <span
                        aria-hidden
                        className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                      />
                    </span>
                    <span
                      aria-hidden
                      className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </p>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
