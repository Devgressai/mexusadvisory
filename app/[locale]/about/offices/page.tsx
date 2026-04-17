import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { offices } from "@/content/offices";
import { imagery } from "@/content/imagery";
import { isLocale, getDictionary, localizedPath, t, tl } from "@/lib/i18n";
import { Container } from "@/components/primitives/Container";
import { Breadcrumb } from "@/components/primitives/Breadcrumb";
import { Reveal } from "@/components/motion/Reveal";
import { getImage } from "@/lib/imagery";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";
import { HOVER_IMAGE } from "@/components/motion/editorial";

interface Props {
  params: Promise<{ locale: string }>;
}

const IMAGE_BY_OFFICE: Record<string, string> = {
  "mexico-city": "office-mexico-city",
  "el-paso": "office-el-paso",
  "san-antonio": "office-san-antonio",
  "ciudad-juarez": "office-juarez",
  chihuahua: "office-chihuahua",
};

// Editorial grade — gently desaturates + lifts contrast so real-world
// photography reads closer to the site's cinematic architectural palette.
const EDITORIAL_FILTER = "saturate(0.78) contrast(1.04) brightness(0.97)";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.nav.offices,
    description: dict.home.officesLede,
    path: "/about/offices",
  });
}

export default async function OfficesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <section className="bg-paper pt-32 pb-24 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
      <Container>
        <Breadcrumb
          items={[
            { label: "Mexus Advisory", href: localizedPath("/", locale) },
            { label: dict.nav.about, href: localizedPath("/about", locale) },
            { label: dict.nav.offices },
          ]}
          className="mb-8"
        />

        {/* Compact header */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 border-b border-rule pb-10 md:flex-row md:items-end md:pb-12">
            <h1 className="font-display type-h1 max-w-[22ch] text-ink">
              {dict.home.officesTitle}
            </h1>
            <p className="text-[0.9375rem] leading-[1.55] text-ink-muted md:max-w-md md:text-right">
              {dict.home.officesLede}
            </p>
          </div>
        </Reveal>

        {/* 4-col image grid (same pattern as homepage OfficesPreview) */}
        <Reveal variant="stagger" className="mt-14 md:mt-16">
          <ul className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {offices.map((office) => {
              const img = getImage(imagery, IMAGE_BY_OFFICE[office.id] ?? "");
              return (
                <li key={office.id} id={office.id} className="group scroll-mt-32">
                  {img && (
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={img.src}
                        alt={t(img.alt, locale)}
                        fill
                        sizes="(min-width: 1024px) 18vw, (min-width: 768px) 33vw, (min-width: 640px) 45vw, 100vw"
                        className={cn(
                          "object-cover opacity-[0.96]",
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
                  <h2 className="font-display mt-4 text-[1.375rem] leading-[1.2] tracking-[-0.015em] text-ink">
                    {t(office.city, locale)}
                  </h2>

                  <dl className="mt-6 space-y-4 text-[0.875rem] leading-[1.55]">
                    <div>
                      <dt className="eyebrow text-ink-muted">
                        {locale === "es" ? "Dirección" : "Address"}
                      </dt>
                      <dd className="mt-1 text-ink">{office.address}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-ink-muted">
                        {locale === "es" ? "Teléfono" : "Telephone"}
                      </dt>
                      <dd className="mt-1 text-ink">{office.phone}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-ink-muted">
                        {locale === "es" ? "Horario" : "Hours"}
                      </dt>
                      <dd className="mt-1 text-ink">{t(office.hours, locale)}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-ink-muted">
                        {locale === "es" ? "Idiomas" : "Languages"}
                      </dt>
                      <dd className="mt-1 text-ink">
                        {office.languages.join(" · ")}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 border-t border-rule pt-5">
                    <p className="eyebrow text-ink-muted">
                      {locale === "es" ? "Enfoque" : "Focus"}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {tl(office.focus, locale).map((item, idx) => (
                        <li
                          key={idx}
                          className="grid grid-cols-[auto_1fr] items-start gap-2.5 text-[0.8125rem] leading-[1.5] text-ink"
                        >
                          <span
                            aria-hidden
                            className="mt-[0.55em] inline-block h-[4px] w-[4px] rounded-full bg-gold"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
