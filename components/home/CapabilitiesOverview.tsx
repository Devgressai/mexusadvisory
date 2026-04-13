import Link from "next/link";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { capabilities } from "@/content/capabilities";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { localizedPath, t } from "@/lib/i18n";

interface CapabilitiesOverviewProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Editorial vertical list — not a tile grid. Each row is a full-width anchor
 * with a single hover transition: an underline progress bar at the bottom
 * of the row and a 4px arrow slide. No boxed buttons, no stacked animations.
 */
export function CapabilitiesOverview({ locale, dict }: CapabilitiesOverviewProps) {
  return (
    <Section tone="paper" size="spacious">
      <Container>
        <SectionHeader
          eyebrow={dict.home.capabilitiesEyebrow}
          title={dict.home.capabilitiesTitle}
          lede={dict.home.capabilitiesLede}
          className="mb-20 md:mb-24 lg:mb-28"
        />

        <Stagger className="border-t border-rule">
          {capabilities.map((cap) => (
            <StaggerItem key={cap.id}>
              <Link
                href={localizedPath(`/capabilities/${cap.slug}`, locale)}
                className="group relative block border-b border-rule"
              >
                <div className="grid grid-cols-12 items-start gap-x-6 py-10 md:py-12 lg:py-14">
                  {/* Number */}
                  <div className="col-span-12 md:col-span-1">
                    <span className="eyebrow text-ink-muted tabular-nums">
                      {cap.number}
                    </span>
                  </div>

                  {/* Title + thesis */}
                  <div className="col-span-12 mt-4 md:col-span-9 md:col-start-2 md:mt-0">
                    <h3 className="font-display text-h2 max-w-[20ch] text-ink transition-colors duration-300 group-hover:text-navy-900">
                      {t(cap.title, locale)}
                    </h3>
                    <p className="mt-5 max-w-[58ch] text-[0.9375rem] leading-[1.7] text-ink-muted">
                      {t(cap.lede, locale)}
                    </p>
                  </div>

                  {/* Inline arrow — no box */}
                  <div className="col-span-12 mt-4 md:col-span-2 md:col-start-11 md:mt-0 md:self-center md:justify-self-end">
                    <span
                      aria-hidden
                      className="text-[1.125rem] font-light text-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>

                {/* Single hover animation — progress bar at row base */}
                <span
                  aria-hidden
                  className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-navy-900 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
