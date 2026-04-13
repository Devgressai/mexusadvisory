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
 * Services — the first thing after the hero. Editorial stacked rows with
 * per-row atmospheric thumbnails, no boxed arrow buttons, single hover
 * pattern. Capabilities-anchor image lives above the list as a single
 * restrained atmospheric anchor.
 */
const IMAGE_BY_SLUG: Record<string, string> = {
  "global-immigration-consulting": "cap-immigration",
  "risk-management": "cap-risk",
  "wealth-advisory": "cap-wealth",
  "alternative-capital-sourcing": "cap-capital",
  "jurisdictional-optimization": "cap-jurisdiction",
};

export function CapabilitiesOverview({ locale, dict }: CapabilitiesOverviewProps) {
  const anchor = getImage(imagery, "capabilities-anchor");

  return (
    <Section tone="paper" size="spacious">
      <Container>
        {/* Header row — section intro + Browse CTA */}
        <div className="mb-16 grid grid-cols-12 gap-x-6 gap-y-12 md:mb-20 lg:mb-24">
          <Reveal className="col-span-12 lg:col-span-7">
            <Eyebrow className="mb-8">{dict.home.capabilitiesEyebrow}</Eyebrow>
            <h2 className="font-display text-h1 max-w-[22ch] text-ink">
              {dict.home.capabilitiesTitle}
            </h2>
            <p className="text-lede mt-7 max-w-[56ch]">
              {dict.home.capabilitiesLede}
            </p>
            <div className="mt-10">
              <LinkArrow href={localizedPath("/capabilities", locale)}>
                {dict.common.viewCapabilities}
              </LinkArrow>
            </div>
          </Reveal>

          {/* Atmospheric anchor image */}
          {anchor && (
            <Reveal
              variant="soft"
              delay={0.15}
              className="relative col-span-12 lg:col-span-5"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <Image
                  src={anchor.src}
                  alt={t(anchor.alt, locale)}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover opacity-[0.94]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-tr from-paper/20 via-transparent to-transparent"
                />
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-px bg-gold/60"
                />
              </div>
            </Reveal>
          )}
        </div>

        {/* Stacked capability rows */}
        <Reveal variant="stagger">
          <ul className="border-t border-rule">
            {capabilities.map((cap) => {
              const img = getImage(imagery, IMAGE_BY_SLUG[cap.slug] ?? "");
              return (
                <li key={cap.id} className="border-b border-rule">
                  <Link
                    href={localizedPath(`/capabilities/${cap.slug}`, locale)}
                    className="group relative grid grid-cols-12 items-center gap-x-6 py-10 md:py-12 lg:py-14"
                  >
                    {/* Number */}
                    <div className="col-span-12 md:col-span-1">
                      <span className="eyebrow text-ink-muted tabular-nums">
                        {cap.number}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="col-span-12 mt-4 md:col-span-6 md:col-start-2 md:mt-0 lg:col-span-7">
                      <h3
                        className={cn(
                          "font-display text-h2 max-w-[22ch] text-ink",
                          HOVER_LINK,
                          "group-hover:text-navy-900",
                        )}
                      >
                        {t(cap.title, locale)}
                      </h3>
                      <p className="mt-4 max-w-[56ch] text-[0.9375rem] leading-[1.7] text-ink-muted">
                        {t(cap.lede, locale)}
                      </p>
                    </div>

                    {/* Thumbnail */}
                    {img && (
                      <div className="col-span-10 mt-6 md:col-span-4 md:col-start-9 md:mt-0 lg:col-span-3 lg:col-start-10">
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <Image
                            src={img.src}
                            alt={t(img.alt, locale)}
                            fill
                            sizes="(min-width: 1024px) 22vw, (min-width: 768px) 33vw, 100vw"
                            className={cn(
                              "object-cover opacity-[0.94]",
                              HOVER_IMAGE,
                              "group-hover:opacity-100",
                            )}
                          />
                          <span
                            aria-hidden
                            className="absolute bottom-0 left-0 h-px w-6 origin-left bg-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                          />
                        </div>
                      </div>
                    )}

                    {/* Arrow */}
                    <div className="col-span-2 mt-6 justify-self-end md:col-span-1 md:col-start-12 md:mt-0">
                      <span
                        aria-hidden
                        className="text-[1.125rem] font-light text-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px]"
                      >
                        →
                      </span>
                    </div>

                    {/* Row progress hairline */}
                    <span
                      aria-hidden
                      className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-navy-900 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                    />
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
