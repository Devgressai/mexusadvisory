import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
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

/**
 * Contact invitation — per brief, this must feel like a refined editorial
 * invitation to connect, not a boxed lead-capture widget. No bg fill, no
 * container card, no form. A single gold hairline is the only structural mark.
 */
export function ContactCTA({ locale, dict }: ContactCTAProps) {
  return (
    <section className="relative bg-paper pt-32 pb-40 md:pt-40 md:pb-48 lg:pt-48 lg:pb-56">
      <Container>
        {/* Full-width gold hairline — the only structural mark */}
        <div className="mb-20 md:mb-24 lg:mb-28">
          <HairlineDraw tone="gold" />
        </div>

        <div className="grid grid-cols-12 items-end gap-x-6">
          <div className="col-span-12 lg:col-span-10">
            <FadeRise>
              <p className="eyebrow text-ink-muted">
                <span aria-hidden className="mr-3 inline-block h-px w-6 bg-gold align-middle" />
                {dict.nav.contact}
              </p>
            </FadeRise>

            <FadeRise delay={0.08}>
              <h2 className="font-display mt-10 max-w-[14ch] text-[clamp(2.75rem,5vw,5rem)] leading-[1.02] tracking-[-0.025em] text-ink">
                {dict.home.contactTitle}
              </h2>
            </FadeRise>

            <FadeRise delay={0.16}>
              <p className="text-lead mt-12 max-w-[58ch] text-ink-muted">
                {dict.home.contactLede}
              </p>
            </FadeRise>

            <FadeRise delay={0.24}>
              <div className="mt-16 flex flex-wrap items-center gap-x-12 gap-y-6">
                <LinkArrow href={localizedPath("/contact", locale)}>
                  {dict.common.contactFirm}
                </LinkArrow>
                <WhatsAppButton label={dict.nav.whatsapp} variant="cta" />
              </div>
            </FadeRise>
          </div>
        </div>
      </Container>
    </section>
  );
}
