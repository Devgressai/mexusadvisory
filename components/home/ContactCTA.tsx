import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { WhatsAppButton } from "@/components/shell/WhatsAppButton";
import { FadeRise } from "@/components/motion/FadeRise";
import { HairlineDraw } from "@/components/motion/HairlineDraw";
import { localizedPath } from "@/lib/i18n";

interface ContactCTAProps {
  locale: Locale;
  dict: Dictionary;
}

export function ContactCTA({ locale, dict }: ContactCTAProps) {
  return (
    <Section tone="mist" size="hero">
      <Container>
        <HairlineDraw tone="gold" />

        <div className="mt-20 grid grid-cols-12 gap-x-6 md:mt-24 lg:mt-28">
          <div className="col-span-12 lg:col-span-10">
            <FadeRise>
              <div className="flex items-center gap-5">
                <span aria-hidden className="eyebrow text-ink-muted tabular-nums">
                  06
                </span>
                <span aria-hidden className="h-px w-10 bg-gold" />
                <span className="eyebrow text-ink-muted">
                  {dict.nav.contact}
                </span>
              </div>
            </FadeRise>

            <FadeRise delay={0.08}>
              <h2 className="font-display text-display mt-14 max-w-[18ch] text-ink md:mt-16">
                {dict.home.contactTitle}
              </h2>
            </FadeRise>

            <FadeRise delay={0.16}>
              <p className="text-lede mt-10 max-w-[56ch] md:mt-12">
                {dict.home.contactLede}
              </p>
            </FadeRise>

            <FadeRise delay={0.24}>
              <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 md:mt-16">
                <LinkArrow href={localizedPath("/contact", locale)}>
                  {dict.common.discussOpportunity}
                </LinkArrow>
                <LinkArrow href={localizedPath("/about/offices", locale)}>
                  {dict.common.viewAllOffices}
                </LinkArrow>
                <WhatsAppButton label={dict.nav.whatsapp} variant="cta" />
              </div>
            </FadeRise>
          </div>
        </div>
      </Container>
    </Section>
  );
}
