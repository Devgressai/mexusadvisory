import Image from "next/image";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { Container } from "@/components/primitives/Container";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { WhatsAppButton } from "@/components/shell/WhatsAppButton";
import { Reveal } from "@/components/motion/Reveal";
import { HairlineDraw } from "@/components/motion/HairlineDraw";
import { imagery } from "@/content/imagery";
import { getImage } from "@/lib/imagery";
import { localizedPath, t } from "@/lib/i18n";

interface ContactCTAProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Contact — BCG-style split. Navy block on the left with the headline and
 * text-led CTAs; a full-height atmospheric blue sky image on the right.
 * No form, no subscribe widget, no box treatment inside the block.
 */
export function ContactCTA({ locale, dict }: ContactCTAProps) {
  const img = getImage(imagery, "contact-sky");

  return (
    <section className="relative bg-paper pt-28 pb-32 md:pt-36 md:pb-40 lg:pt-44 lg:pb-52">
      <Container>
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-12">
            {/* Navy content block */}
            <div className="relative col-span-12 bg-navy-900 text-paper lg:col-span-7">
              {/* Gold top rule inside the block */}
              <div className="absolute inset-x-10 top-0 h-px md:inset-x-14 lg:inset-x-16">
                <HairlineDraw tone="gold" />
              </div>

              <div className="px-10 py-14 md:px-14 md:py-20 lg:px-16 lg:py-24 xl:px-20 xl:py-28">
                <Reveal>
                  <div className="flex items-center gap-5">
                    <span aria-hidden className="eyebrow text-paper/60 tabular-nums">
                      06
                    </span>
                    <span aria-hidden className="h-px w-10 bg-gold" />
                    <span className="eyebrow text-paper/60">
                      {dict.nav.contact}
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <h2 className="font-display type-h1 mt-10 max-w-[18ch] text-paper md:mt-12">
                    {dict.home.contactTitle}
                  </h2>
                </Reveal>

                <Reveal delay={0.16}>
                  <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-[1.75] text-paper/75 md:mt-10">
                    {dict.home.contactLede}
                  </p>
                </Reveal>

                <Reveal delay={0.24}>
                  <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6 md:mt-12">
                    <LinkArrow
                      href={localizedPath("/contact", locale)}
                      tone="paper"
                    >
                      {dict.common.discussOpportunity}
                    </LinkArrow>
                    <LinkArrow
                      href={localizedPath("/about/offices", locale)}
                      tone="paper"
                    >
                      {dict.common.viewAllOffices}
                    </LinkArrow>
                    <WhatsAppButton
                      label={dict.nav.whatsapp}
                      variant="cta"
                      tone="navy"
                    />
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Blue sky atmospheric image */}
            {img && (
              <Reveal
                variant="soft"
                delay={0.18}
                className="relative col-span-12 lg:col-span-5"
              >
                <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-full lg:min-h-[30rem]">
                  <Image
                    src={img.src}
                    alt={t(img.alt, locale)}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                  {/* Subtle navy veil on the left edge for a clean seam against the navy block */}
                  <div
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy-900/40 to-transparent"
                  />
                  {/* Gold hairline frame on the outer edges */}
                  <span
                    aria-hidden
                    className="absolute right-0 top-0 h-full w-px bg-gold/60"
                  />
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-px w-full bg-gold/40"
                  />
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
