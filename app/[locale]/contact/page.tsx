import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { site } from "@/content/site";
import { offices } from "@/content/offices";
import { isLocale, getDictionary, localizedPath, t } from "@/lib/i18n";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { ContactForm } from "@/components/contact/ContactForm";
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
    title: dict.nav.contact,
    description: dict.home.contactLede,
    path: "/contact",
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.nav.contact}
        title={dict.home.contactTitle}
        lede={dict.home.contactLede}
        breadcrumb={[
          { label: "Mexus Advisory", href: localizedPath("/", locale) },
          { label: dict.nav.contact },
        ]}
      />

      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            {/* Form */}
            <ContactForm locale={locale} whatsappLabel={dict.nav.whatsapp} />

            {/* Direct */}
            <aside className="md:col-span-4 md:col-start-9">
              <Eyebrow>{locale === "es" ? "Canales directos" : "Direct channels"}</Eyebrow>
              <div className="mt-8 space-y-10">
                <div>
                  <p className="eyebrow text-ink-muted">Email</p>
                  <p className="font-display mt-3 text-[1.125rem] tracking-[-0.01em] text-ink">
                    {site.email}
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-ink-muted">WhatsApp</p>
                  <p className="font-display mt-3 text-[1.125rem] tracking-[-0.01em] text-ink">
                    {site.whatsappDisplay}
                  </p>
                </div>
              </div>

              <Eyebrow className="mt-14">
                {locale === "es" ? "Oficinas" : "Offices"}
              </Eyebrow>
              <ul className="mt-6 divide-y divide-rule border-t border-rule">
                {offices.map((office) => (
                  <li key={office.id} className="py-4">
                    <p className="font-display text-[1rem] tracking-[-0.01em] text-ink">
                      {t(office.city, locale)}
                    </p>
                    <p className="text-[0.8125rem] text-ink-muted">
                      {t(office.country, locale)}
                    </p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
