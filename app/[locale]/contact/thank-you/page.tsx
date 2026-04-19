import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { site } from "@/content/site";
import { isLocale, getDictionary, localizedPath } from "@/lib/i18n";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { ButtonLink } from "@/components/primitives/Button";
import { WhatsAppButton } from "@/components/shell/WhatsAppButton";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const title = locale === "es" ? "Gracias" : "Thank you";
  const description =
    locale === "es"
      ? "Hemos recibido su mensaje y nos pondremos en contacto pronto."
      : "We have received your message and will be in touch shortly.";
  return {
    ...buildMetadata({
      locale,
      title,
      description,
      path: "/contact/thank-you",
    }),
    robots: { index: false, follow: false },
  };
}

export default async function ContactThankYouPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const title = locale === "es" ? "Gracias por su mensaje" : "Thank you for your message";
  const lede =
    locale === "es"
      ? "Hemos recibido su consulta. Un asesor de Mexus Advisory se pondrá en contacto con usted en breve."
      : "We have received your inquiry. A Mexus Advisory counselor will be in touch with you shortly.";

  const nextSteps =
    locale === "es"
      ? "Mientras tanto, también puede contactarnos directamente a través de los siguientes canales."
      : "In the meantime, you may also reach us directly through the channels below.";

  const backLabel = locale === "es" ? "Volver al inicio" : "Back to home";
  const contactLabel = locale === "es" ? "Enviar otro mensaje" : "Send another message";

  return (
    <>
      <PageHero
        eyebrow={locale === "es" ? "Confirmación" : "Confirmation"}
        title={title}
        lede={lede}
        breadcrumb={[
          { label: "Mexus Advisory", href: localizedPath("/", locale) },
          { label: dict.nav.contact, href: localizedPath("/contact", locale) },
          { label: locale === "es" ? "Gracias" : "Thank you" },
        ]}
      />

      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="type-lede text-ink-muted">{nextSteps}</p>

              <div className="mt-12 flex flex-wrap items-center gap-4">
                <ButtonLink href={localizedPath("/", locale)} variant="secondary">
                  {backLabel}
                </ButtonLink>
                <ButtonLink
                  href={localizedPath("/contact", locale)}
                  variant="ghost"
                >
                  {contactLabel}
                </ButtonLink>
                <WhatsAppButton label={dict.nav.whatsapp} variant="cta" />
              </div>
            </div>

            <aside className="md:col-span-4 md:col-start-9">
              <Eyebrow>{locale === "es" ? "Canales directos" : "Direct channels"}</Eyebrow>
              <div className="mt-8 space-y-10">
                <div>
                  <p className="eyebrow text-ink-muted">Email</p>
                  <a
                    href="mailto:dcartagena@mexusadvisory.com"
                    className="font-display mt-3 block text-[1.125rem] tracking-[-0.01em] text-ink hover:text-navy-900"
                  >
                    dcartagena@mexusadvisory.com
                  </a>
                </div>
                <div>
                  <p className="eyebrow text-ink-muted">WhatsApp</p>
                  <p className="font-display mt-3 text-[1.125rem] tracking-[-0.01em] text-ink">
                    {site.whatsappDisplay}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
