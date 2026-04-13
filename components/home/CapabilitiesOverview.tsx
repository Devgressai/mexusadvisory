import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { capabilities } from "@/content/capabilities";
import { imagery } from "@/content/imagery";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { Reveal } from "@/components/motion/Reveal";
import { getImage } from "@/lib/imagery";
import { localizedPath, t } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { HOVER_IMAGE, HOVER_LINK } from "@/components/motion/editorial";

interface CapabilitiesOverviewProps {
  locale: Locale;
  dict: Dictionary;
}

const IMAGE_BY_SLUG: Record<string, string> = {
  "global-immigration-consulting": "cap-immigration",
  "risk-management": "cap-risk",
  "wealth-advisory": "cap-wealth",
  "alternative-capital-sourcing": "cap-capital",
  "jurisdictional-optimization": "cap-jurisdiction",
};

/**
 * Services — a single organized block directly under the hero.
 * Compact editorial card grid (5 across on lg). Small portrait thumbnail,
 * number, title, thesis, arrow. Disciplined, scannable, no sprawl.
 */
export function CapabilitiesOverview({ locale, dict }: CapabilitiesOverviewProps) {
  return (
    <Section tone="paper" size="compact">
      <Container>
        {/* Section header */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <Eyebrow className="mb-6">{dict.home.capabilitiesEyebrow}</Eyebrow>
              <h2 className="font-display type-h1 max-w-[22ch] text-ink">
                {dict.home.capabilitiesTitle}
              </h2>
              <p className="type-lede mt-5 max-w-[56ch]">
                {dict.home.capabilitiesLede}
              </p>
            </div>
            <LinkArrow href={localizedPath("/capabilities", locale)}>
              {dict.common.viewCapabilities}
            </LinkArrow>
          </div>
        </Reveal>

        {/* Compact 5-up grid */}
        <Reveal variant="stagger" className="mt-12 md:mt-16 lg:mt-20">
          <ul className="grid grid-cols-1 gap-x-5 gap-y-12 border-t border-rule pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {capabilities.map((cap) => {
              const img = getImage(imagery, IMAGE_BY_SLUG[cap.slug] ?? "");
              return (
                <li key={cap.id} className="group">
                  <Link
                    href={localizedPath(`/capabilities/${cap.slug}`, locale)}
                    className="flex h-full flex-col"
                  >
                    {img && (
                      <div className="relative aspect-[4/5] w-full overflow-hidden">
                        <Image
                          src={img.src}
                          alt={t(img.alt, locale)}
                          fill
                          sizes="(min-width: 1024px) 18vw, (min-width: 768px) 33vw, (min-width: 640px) 45vw, 100vw"
                          className={cn(
                            "object-cover opacity-[0.96]",
                            HOVER_IMAGE,
                            "group-hover:opacity-100",
                          )}
                        />
                        <span
                          aria-hidden
                          className="absolute bottom-0 left-0 h-px w-8 origin-left bg-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                        />
                      </div>
                    )}

                    <div className="mt-6 flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-muted">
                      <span className="tabular-nums">{cap.number}</span>
                      <span aria-hidden className="h-px w-4 bg-ink-muted/30" />
                      <span>{locale === "es" ? "Servicio" : "Service"}</span>
                    </div>

                    <h3
                      className={cn(
                        "font-display type-h3 mt-4 text-ink",
                        HOVER_LINK,
                        "group-hover:text-navy-900",
                      )}
                    >
                      {t(cap.title, locale)}
                    </h3>

                    <p className="mt-4 text-[0.875rem] leading-[1.6] text-ink-muted">
                      {t(cap.lede, locale)}
                    </p>

                    <p className="mt-auto inline-flex items-baseline gap-2 pt-6 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-navy-900">
                      <span className="relative">
                        {dict.common.learnMore}
                        <span
                          aria-hidden
                          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                        />
                      </span>
                      <span
                        aria-hidden
                        className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px]"
                      >
                        →
                      </span>
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
