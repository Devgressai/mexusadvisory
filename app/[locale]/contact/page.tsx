import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { site } from "@/content/site";
import { offices } from "@/content/offices";
import { isLocale, getDictionary, localizedPath, t } from "@/lib/i18n";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";
import { WhatsAppButton } from "@/components/shell/WhatsAppButton";
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

  const fieldClass =
    "w-full border-b border-ink/20 bg-transparent py-3 text-[1rem] text-ink placeholder:text-ink-muted/60 focus:border-navy-900";
  const labelClass = "eyebrow text-ink-muted";

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
            <form
              className="space-y-10 md:col-span-7"
              action="mailto:advisory@mexus.example"
              method="post"
              encType="text/plain"
            >
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>
                    {locale === "es" ? "Nombre" : "Name"}
                  </span>
                  <input type="text" name="name" required className={`${fieldClass} mt-3`} />
                </label>
                <label className="block">
                  <span className={labelClass}>
                    {locale === "es" ? "Firma / Organización" : "Firm / Organization"}
                  </span>
                  <input type="text" name="firm" className={`${fieldClass} mt-3`} />
                </label>
                <label className="block sm:col-span-2">
                  <span className={labelClass}>
                    {locale === "es" ? "Correo" : "Email"}
                  </span>
                  <input type="email" name="email" required className={`${fieldClass} mt-3`} />
                </label>
                <label className="block sm:col-span-2">
                  <span className={labelClass}>
                    {locale === "es" ? "Naturaleza de la consulta" : "Nature of inquiry"}
                  </span>
                  <input type="text" name="inquiry" className={`${fieldClass} mt-3`} />
                </label>
                <label className="block sm:col-span-2">
                  <span className={labelClass}>
                    {locale === "es" ? "Mensaje" : "Message"}
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    className={`${fieldClass} mt-3 resize-none`}
                  />
                </label>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" variant="primary">
                  {locale === "es" ? "Enviar mensaje" : "Send message"}
                </Button>
                <WhatsAppButton label={dict.nav.whatsapp} variant="cta" />
              </div>
            </form>

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
