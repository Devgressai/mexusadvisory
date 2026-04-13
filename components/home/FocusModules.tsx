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
 * Editorial typographic Focus cards. No imagery. Each card leads with a
 * gold hairline that animates from a fixed 32px width to full width on
 * hover, inviting interaction without decoration.
 */
export function FocusModules({ locale, dict }: FocusModulesProps) {
  return (
    <Section tone="bone" size="compact">
      <Container>
        <SectionHeader
          eyebrow={dict.home.focusEyebrow}
          title={dict.home.focusTitle}
          lede={dict.home.focusLede}
          className="mb-16 md:mb-20 lg:mb-24"
        />

        <Stagger className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-3 md:gap-y-0">
          {focusTopics.map((topic) => (
            <StaggerItem key={topic.id} className="group">
              <Link
                href={localizedPath(`/focus/${topic.slug}`, locale)}
                className="relative flex h-full flex-col"
              >
                {/* Gold hairline — fixed 32px, extends to full width on hover */}
                <span
                  aria-hidden
                  className="block h-px w-8 origin-left bg-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                />

                <div className="flex h-full flex-col pt-9 md:pr-4">
                  <p className="eyebrow text-ink-muted">
                    <span className="tabular-nums">{topic.number}</span>
                    <span aria-hidden className="mx-2 text-ink-muted/40">·</span>
                    {t(topic.title, locale)}
                  </p>

                  <h3 className="font-display text-h3 mt-7 max-w-[22ch] text-ink">
                    {t(topic.dek, locale)}
                  </h3>

                  <p className="mt-6 max-w-[38ch] text-[0.9375rem] leading-[1.7] text-ink-muted">
                    {t(topic.lede, locale)}
                  </p>

                  <p className="mt-10 inline-flex items-baseline gap-2 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-navy-900">
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
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
