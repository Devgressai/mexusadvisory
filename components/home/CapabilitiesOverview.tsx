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

/**
 * Services — alternating image/text rows in the BCG "Capabilities" pattern.
 * Each row: ~5/7 split, image on left for odd rows, image on right for even
 * rows. Generous vertical rhythm, single hover pattern, no boxed buttons.
 */
const IMAGE_BY_SLUG: Record<string, string> = {
  "global-immigration-consulting": "cap-immigration",
  "risk-management": "cap-risk",
  "wealth-advisory": "cap-wealth",
  "alternative-capital-sourcing": "cap-capital",
  "jurisdictional-optimization": "cap-jurisdiction",
};

export function CapabilitiesOverview({ locale, dict }: CapabilitiesOverviewProps) {
  return (
    <Section tone="paper" size="spacious">
      <Container>
        {/* Section header */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <Eyebrow className="mb-8">{dict.home.capabilitiesEyebrow}</Eyebrow>
              <h2 className="font-display text-h1 max-w-[22ch] text-ink">
                {dict.home.capabilitiesTitle}
              </h2>
              <p className="text-lede mt-7 max-w-[56ch]">
                {dict.home.capabilitiesLede}
              </p>
            </div>
            <LinkArrow href={localizedPath("/capabilities", locale)}>
              {dict.common.viewCapabilities}
            </LinkArrow>
          </div>
        </Reveal>

        {/* Alternating rows */}
        <div className="mt-20 space-y-20 md:mt-28 md:space-y-28 lg:mt-32 lg:space-y-32">
          {capabilities.map((cap, idx) => {
            const img = getImage(imagery, IMAGE_BY_SLUG[cap.slug] ?? "");
            const imageFirst = idx % 2 === 0;
            return (
              <Reveal key={cap.id}>
                <Link
                  href={localizedPath(`/capabilities/${cap.slug}`, locale)}
                  className="group grid grid-cols-12 items-center gap-x-6 gap-y-10 lg:gap-x-12"
                >
                  {/* Image column */}
                  {img && (
                    <div
                      className={cn(
                        "relative col-span-12 lg:col-span-6",
                        imageFirst ? "lg:order-1" : "lg:order-2",
                      )}
                    >
                      <div className="relative aspect-[5/4] w-full overflow-hidden">
                        <Image
                          src={img.src}
                          alt={t(img.alt, locale)}
                          fill
                          sizes="(min-width: 1024px) 48vw, 100vw"
                          className={cn(
                            "object-cover opacity-[0.96]",
                            HOVER_IMAGE,
                            "group-hover:opacity-100",
                          )}
                        />
                        {/* Gold hairline on the inside edge */}
                        <span
                          aria-hidden
                          className={cn(
                            "absolute top-0 h-full w-px bg-gold/60",
                            imageFirst ? "right-0" : "left-0",
                          )}
                        />
                      </div>
                    </div>
                  )}

                  {/* Text column */}
                  <div
                    className={cn(
                      "col-span-12 lg:col-span-6",
                      imageFirst ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8",
                    )}
                  >
                    <div className="flex items-center gap-4 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-muted">
                      <span className="tabular-nums">{cap.number}</span>
                      <span aria-hidden className="h-px w-6 bg-ink-muted/30" />
                      <span>
                        {locale === "es" ? "Servicio" : "Service"}
                      </span>
                    </div>

                    <h3
                      className={cn(
                        "font-display text-h1 mt-6 max-w-[16ch] text-ink",
                        HOVER_LINK,
                        "group-hover:text-navy-900",
                      )}
                    >
                      {t(cap.title, locale)}
                    </h3>

                    <p className="mt-6 max-w-[56ch] text-[1rem] leading-[1.7] text-ink-muted">
                      {t(cap.lede, locale)}
                    </p>

                    <p className="mt-10 inline-flex items-baseline gap-2 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-navy-900">
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
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
