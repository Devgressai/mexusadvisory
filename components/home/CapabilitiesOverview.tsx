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

export function CapabilitiesOverview({ locale, dict }: CapabilitiesOverviewProps) {
  return (
    <Section tone="paper" size="standard">
      <Container>
        <SectionHeader
          eyebrow={dict.home.capabilitiesEyebrow}
          title={dict.home.capabilitiesTitle}
          lede={dict.home.capabilitiesLede}
          className="mb-16 md:mb-20"
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
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-display text-[clamp(1.25rem,1.4vw,1.5rem)] font-light text-ink-muted tabular-nums">
                      {cap.number}
                    </span>
                  </div>

                  {/* Title + thesis */}
                  <div className="col-span-10 md:col-span-9">
                    <h3 className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.1] tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-navy-900">
                      {t(cap.title, locale)}
                    </h3>
                    <p className="mt-5 max-w-[60ch] text-[1rem] leading-[1.7] text-ink-muted">
                      {t(cap.lede, locale)}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-12 mt-4 flex justify-end md:col-span-2 md:mt-0 md:items-center md:self-center md:justify-self-end">
                    <span
                      aria-hidden
                      className="inline-flex h-10 w-10 items-center justify-center border border-ink/10 text-ink transition-all duration-300 group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-paper"
                    >
                      →
                    </span>
                  </div>
                </div>

                {/* Hover progress bar */}
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
