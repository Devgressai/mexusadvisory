import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { people } from "@/content/people";
import { isLocale, getDictionary, localizedPath, t } from "@/lib/i18n";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";
import { HOVER_IMAGE, HOVER_LINK } from "@/components/motion/editorial";

interface Props {
  params: Promise<{ locale: string }>;
}

const ABOUT_COPY = {
  en: {
    eyebrow: "About Mexus Advisory",
    title: "Unlock a Seamless Path to Success with Mexus Advisory",
    lede: "Welcome to Mexus Advisory — a leading global mobility firm dedicated to facilitating seamless transitions for immigrants, international talent, and families.",
    intro:
      "With strategically positioned offices across the United States and Mexico, we specialize in comprehensive immigration consulting, innovative international talent acquisition and placement strategies, and bespoke third-party family office services.",
    tagline: "Let us be your partner in prosperity.",
    practiceEyebrow: "Our practice",
    practiceBody: [
      "Mexus Advisory is a small, senior cross-border counsel — the firm principals call when immigration, capital, jurisdiction and risk collide across the Americas. Our posture is calm, private, and informed. We take positions, we do not sell services.",
      "We work with a deliberately limited number of clients so that every engagement receives the attention a demanding principal expects. When a question extends beyond our bench, we coordinate with a curated network of lawyers, bankers, and fiduciaries on the client's behalf.",
    ],
    teamEyebrow: "Our team",
    teamTitle: "A small, senior team that personally handles every engagement.",
  },
  es: {
    eyebrow: "Sobre Mexus Advisory",
    title: "Abra un camino transfronterizo con Mexus Advisory",
    lede: "Bienvenido a Mexus Advisory — un despacho de movilidad global dedicado a facilitar transiciones fluidas para inmigrantes, talento internacional y familias.",
    intro:
      "Con oficinas estratégicamente ubicadas en Estados Unidos y México, nos especializamos en consultoría migratoria integral, adquisición y colocación de talento internacional, y servicios de family office a medida.",
    tagline: "Somos su socio en prosperidad.",
    practiceEyebrow: "Nuestra práctica",
    practiceBody: [
      "Mexus Advisory es un despacho pequeño y senior de asesoría transfronteriza — al que los principales acuden cuando la migración, el capital, la jurisdicción y el riesgo convergen en las Américas. Nuestra postura es tranquila, privada e informada. Tomamos posiciones, no vendemos servicios.",
      "Trabajamos con un número deliberadamente limitado de clientes para que cada compromiso reciba la atención que un principal exigente espera. Cuando una pregunta excede nuestro equipo, coordinamos con una red curada de abogados, banqueros y fiduciarios en nombre del cliente.",
    ],
    teamEyebrow: "Nuestro equipo",
    teamTitle: "Un equipo pequeño y senior que atiende cada compromiso personalmente.",
  },
};

import { getPortrait } from "@/components/primitives/AuthorAvatar";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = ABOUT_COPY[locale];
  return buildMetadata({
    locale,
    title: copy.eyebrow,
    description: copy.lede,
    path: "/about",
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const copy = ABOUT_COPY[locale];

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        lede={copy.lede}
        breadcrumb={[
          { label: "Mexus Advisory", href: localizedPath("/", locale) },
          { label: dict.nav.about },
        ]}
      />

      {/* Intro */}
      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>{copy.practiceEyebrow}</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <p className="type-lede max-w-[62ch] text-ink">{copy.intro}</p>
              <div className="mt-10 space-y-6 text-[1.0625rem] leading-[1.8] text-ink-muted">
                {copy.practiceBody.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
              <p className="font-display mt-12 max-w-[28ch] type-h3 text-ink">
                {copy.tagline}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Team grid */}
      <Section tone="bone" size="compact">
        <Container>
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div>
              <Eyebrow>{copy.teamEyebrow}</Eyebrow>
              <h2 className="font-display type-h2 mt-4 max-w-[26ch] text-ink">
                {copy.teamTitle}
              </h2>
            </div>
            <LinkArrow href={localizedPath("/about/people", locale)}>
              {locale === "es" ? "Ver el equipo completo" : "View the full team"}
            </LinkArrow>
          </div>

          <ul className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-12 lg:grid-cols-4">
            {people.map((person) => {
              const src = getPortrait(person.slug);
              return (
                <li key={person.id} className="group">
                  <Link
                    href={localizedPath(`/about/people/${person.slug}`, locale)}
                    className="block"
                  >
                    <div className="relative aspect-square w-full overflow-hidden">
                      {src ? (
                        <Image
                          src={src}
                          alt={`${person.name} — ${t(person.role, locale)}`}
                          fill
                          sizes="(min-width: 1024px) 22vw, (min-width: 768px) 24vw, 50vw"
                          className={cn(
                            "object-cover opacity-[0.96]",
                            HOVER_IMAGE,
                            "group-hover:opacity-100",
                          )}
                        />
                      ) : (
                        <div className="relative h-full w-full bg-navy-900">
                          <Image
                            src="/brand/mexus-mark-gold-square.png"
                            alt="Mexus Advisory"
                            fill
                            sizes="(min-width: 1024px) 22vw, (min-width: 768px) 24vw, 50vw"
                            className="object-contain p-[20%] transition-opacity duration-500 group-hover:opacity-90"
                          />
                        </div>
                      )}
                      <span
                        aria-hidden
                        className="absolute bottom-0 left-0 h-px w-8 origin-left bg-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                      />
                    </div>
                    <h3
                      className={cn(
                        "font-display mt-5 text-[1rem] leading-[1.2] tracking-[-0.015em] text-ink sm:text-[1.0625rem]",
                        HOVER_LINK,
                        "group-hover:text-navy-900",
                      )}
                    >
                      {person.name}
                    </h3>
                    <p className="mt-2 text-[0.6875rem] uppercase tracking-[0.14em] text-ink-muted">
                      {t(person.role, locale)}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* Cross-links */}
      <Section tone="paper" size="compact">
        <Container>
          <div className="grid grid-cols-1 gap-10 border-t border-rule pt-14 md:grid-cols-3">
            <LinkArrow href={localizedPath("/about/people", locale)}>
              {dict.nav.people}
            </LinkArrow>
            <LinkArrow href={localizedPath("/about/offices", locale)}>
              {dict.nav.offices}
            </LinkArrow>
            <LinkArrow href={localizedPath("/partners-program", locale)}>
              {dict.nav.partners}
            </LinkArrow>
          </div>
        </Container>
      </Section>
    </>
  );
}
