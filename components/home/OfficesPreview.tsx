import Link from "next/link";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { offices } from "@/content/offices";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { localizedPath, t } from "@/lib/i18n";

interface OfficesPreviewProps {
  locale: Locale;
  dict: Dictionary;
}

export function OfficesPreview({ locale, dict }: OfficesPreviewProps) {
  return (
    <Section tone="paper" size="standard">
      <Container>
        <SectionHeader
          eyebrow={dict.home.officesEyebrow}
          title={dict.home.officesTitle}
          lede={dict.home.officesLede}
          className="mb-20"
        />

        <Stagger className="grid grid-cols-1 gap-x-6 gap-y-12 border-t border-rule pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office) => (
            <StaggerItem key={office.id}>
              <Link
                href={localizedPath(`/about/offices#${office.id}`, locale)}
                className="group block"
              >
                <p className="eyebrow text-ink-muted">{t(office.country, locale)}</p>
                <h3 className="font-display mt-4 text-[clamp(1.5rem,2vw,1.875rem)] tracking-[-0.015em] text-ink">
                  <span className="relative inline-block">
                    {t(office.city, locale)}
                    <span
                      aria-hidden
                      className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
                    />
                  </span>
                </h3>
                <p className="mt-6 text-[0.9375rem] leading-[1.6] text-ink-muted">
                  {office.address}
                </p>
                <p className="mt-3 text-[0.8125rem] text-ink-muted/80">
                  {office.languages.join(" · ")}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-16">
          <LinkArrow href={localizedPath("/about/offices", locale)}>
            {dict.common.viewAllOffices}
          </LinkArrow>
        </div>
      </Container>
    </Section>
  );
}
