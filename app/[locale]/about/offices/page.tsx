import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { offices } from "@/content/offices";
import { isLocale, getDictionary, localizedPath, t, tl } from "@/lib/i18n";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string }>;
}

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
    <>
      <PageHero
        eyebrow={dict.home.officesEyebrow}
        title={dict.home.officesTitle}
        lede={dict.home.officesLede}
        breadcrumb={[
          { label: "Mexus Advisory", href: localizedPath("/", locale) },
          { label: dict.nav.about, href: localizedPath("/about", locale) },
          { label: dict.nav.offices },
        ]}
      />

      <Section tone="paper" size="standard">
        <Container>
          <Stagger className="border-t border-rule">
            {offices.map((office) => (
              <StaggerItem key={office.id}>
                <article
                  id={office.id}
                  className="grid grid-cols-1 gap-8 border-b border-rule py-14 md:grid-cols-12 md:gap-x-6"
                >
                  <div className="md:col-span-4">
                    <p className="eyebrow text-ink-muted">{t(office.country, locale)}</p>
                    <h2 className="font-display mt-4 text-[clamp(1.875rem,2.8vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-ink">
                      {t(office.city, locale)}
                    </h2>
                  </div>
                  <div className="md:col-span-4">
                    <p className="eyebrow text-ink-muted">Address</p>
                    <p className="mt-3 text-[1rem] leading-[1.6] text-ink">{office.address}</p>
                    <p className="eyebrow mt-6 text-ink-muted">Telephone</p>
                    <p className="mt-3 text-[1rem] text-ink">{office.phone}</p>
                    <p className="eyebrow mt-6 text-ink-muted">Hours</p>
                    <p className="mt-3 text-[1rem] text-ink">{t(office.hours, locale)}</p>
                    <p className="eyebrow mt-6 text-ink-muted">Languages</p>
                    <p className="mt-3 text-[1rem] text-ink">{office.languages.join(" · ")}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="eyebrow text-ink-muted">
                      {locale === "es" ? "Enfoque" : "Focus"}
                    </p>
                    <ul className="mt-3 space-y-3">
                      {tl(office.focus, locale).map((item, idx) => (
                        <li
                          key={idx}
                          className="grid grid-cols-[auto_1fr] items-start gap-3 text-[1rem] leading-[1.55] text-ink"
                        >
                          <span
                            aria-hidden
                            className="mt-[0.65em] inline-block h-[5px] w-[5px] rounded-full bg-gold"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
    </>
  );
}
