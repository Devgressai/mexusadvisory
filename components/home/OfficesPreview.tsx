import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { offices } from "@/content/offices";
import { imagery } from "@/content/imagery";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { Reveal } from "@/components/motion/Reveal";
import { getImage } from "@/lib/imagery";
import { localizedPath, t } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { HOVER_IMAGE, HOVER_LINK } from "@/components/motion/editorial";

interface OfficesPreviewProps {
  locale: Locale;
  dict: Dictionary;
}

/**
 * Locations — each office now renders as an editorial card with a small
 * architectural thumbnail, country/city metadata, address, and languages.
 * 4-col grid on lg, 2-col on sm. No stock photography clichés.
 */
const IMAGE_BY_OFFICE: Record<string, string> = {
  "mexico-city": "office-mexico-city",
  "el-paso": "office-el-paso",
  "san-antonio": "office-san-antonio",
  "ciudad-juarez": "office-juarez",
  chihuahua: "office-chihuahua",
};

// Editorial grade — matches the dedicated offices page so real photography
// reads closer to the site's cinematic architectural palette.
const EDITORIAL_FILTER = "saturate(0.78) contrast(1.04) brightness(0.97)";

export function OfficesPreview({ locale, dict }: OfficesPreviewProps) {
  return (
    <Section tone="paper" size="standard">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-10 md:mb-20 md:flex-row md:items-end">
          <SectionHeader
            eyebrow={dict.home.officesEyebrow}
            title={dict.home.officesTitle}
            lede={dict.home.officesLede}
          />
          <LinkArrow href={localizedPath("/about/offices", locale)}>
            {dict.common.viewAllOffices}
          </LinkArrow>
        </div>

        <Reveal variant="stagger">
          <ul className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => {
              const img = getImage(imagery, IMAGE_BY_OFFICE[office.id] ?? "");
              return (
                <li key={office.id} className="group">
                  <Link
                    href={localizedPath(`/about/offices#${office.id}`, locale)}
                    className="block"
                  >
                    {img && (
                      <div className="relative aspect-[4/5] w-full overflow-hidden">
                        <Image
                          src={img.src}
                          alt={t(img.alt, locale)}
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                          className={cn(
                            "object-cover opacity-[0.94]",
                            HOVER_IMAGE,
                            "group-hover:opacity-100",
                          )}
                          style={{ filter: EDITORIAL_FILTER }}
                        />
                        <span
                          aria-hidden
                          className="absolute bottom-0 left-0 h-px w-8 origin-left bg-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                        />
                      </div>
                    )}

                    <p className="eyebrow mt-7 text-ink-muted">
                      {t(office.country, locale)}
                    </p>
                    <h3
                      className={cn(
                        "font-display type-h3 mt-4 text-ink",
                        HOVER_LINK,
                        "group-hover:text-navy-900",
                      )}
                    >
                      {t(office.city, locale)}
                    </h3>
                    <p className="mt-5 text-[0.9375rem] leading-[1.55] text-ink-muted">
                      {office.address}
                    </p>
                    <p className="mt-3 text-[0.8125rem] text-ink-muted/70">
                      {office.languages.join(" · ")}
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
