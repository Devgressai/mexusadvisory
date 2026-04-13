import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { people } from "@/content/people";
import { site } from "@/content/site";
import { isLocale, getDictionary, localizedPath, t } from "@/lib/i18n";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";
import { HOVER_IMAGE } from "@/components/motion/editorial";

interface Props {
  params: Promise<{ locale: string }>;
}

const PORTRAIT_BY_SLUG: Record<string, string> = {
  "mace-miller": "/people/mace-miller.webp",
  "darilu-cartagena": "/people/darilu-cartagena.webp",
  "jeremy-anderson": "/people/jeremy-anderson.webp",
  "roberto-ortigoza": "/people/roberto-ortigoza.webp",
  "federico-vielledent": "/people/federico-vielledent.webp",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.nav.people,
    description: dict.home.credibilityBody[0] ?? "",
    path: "/about/people",
  });
}

export default async function PeopleIndex({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.nav.about}
        title={dict.nav.people}
        lede={
          locale === "es"
            ? "Un grupo pequeño y senior que atiende personalmente cada compromiso."
            : "A small, senior team that personally handles every engagement."
        }
        breadcrumb={[
          { label: "Mexus Advisory", href: localizedPath("/", locale) },
          { label: dict.nav.about, href: localizedPath("/about", locale) },
          { label: dict.nav.people },
        ]}
      />

      <Section tone="paper" size="standard">
        <Container>
          <Reveal>
            <Eyebrow className="mb-10">
              {locale === "es" ? "Comité ejecutivo" : "Executive Committee"}
            </Eyebrow>
          </Reveal>

          <Reveal variant="stagger">
            <ul className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
              {people.map((person) => {
                const src = PORTRAIT_BY_SLUG[person.slug];
                return (
                  <li key={person.id}>
                    <Link
                      href={localizedPath(
                        `/about/people/${person.slug}`,
                        locale,
                      )}
                      className="group block h-full border border-rule p-6 transition-colors duration-300 hover:border-navy-900"
                    >
                      <div className="flex items-start gap-5">
                        {/* Portrait */}
                        <div className="relative aspect-square w-20 shrink-0 overflow-hidden sm:w-24">
                          {src ? (
                            <Image
                              src={src}
                              alt={`${person.name} — ${t(person.role, locale)}`}
                              fill
                              sizes="96px"
                              className={cn(
                                "object-cover opacity-[0.96]",
                                HOVER_IMAGE,
                                "group-hover:opacity-100",
                              )}
                            />
                          ) : (
                            <div className="flex h-full w-full items-end bg-bone p-2 ring-1 ring-rule">
                              <span className="font-display text-[1.5rem] leading-none text-ink-muted/40">
                                {person.name
                                  .split(" ")
                                  .map((p) => p[0])
                                  .join("")}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Text */}
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-[1.125rem] leading-[1.2] tracking-[-0.015em] text-ink">
                            <span className="relative inline-block">
                              {person.name}
                              <span
                                aria-hidden
                                className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-navy-900 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                              />
                            </span>
                          </h3>
                          <p className="mt-2 text-[0.8125rem] leading-[1.45] text-ink-muted">
                            {t(person.role, locale)}
                          </p>
                          <p className="mt-1 text-[0.75rem] italic text-ink-muted/70">
                            {t(person.location, locale)}
                          </p>

                          {/* Email icon */}
                          <span
                            aria-hidden
                            className="mt-4 inline-flex h-6 w-6 items-center justify-center text-ink-muted/60 transition-colors duration-300 group-hover:text-navy-900"
                          >
                            <Mail size={14} strokeWidth={1.5} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Contact note below grid */}
          <Reveal variant="soft" delay={0.2}>
            <p className="mt-14 text-[0.875rem] text-ink-muted">
              {locale === "es"
                ? "Para consultas directas, escríbanos a "
                : "For direct inquiries, write to "}
              <a
                href={`mailto:${site.email}`}
                className="text-navy-900 underline decoration-gold underline-offset-4 transition-colors duration-300 hover:text-action"
              >
                {site.email}
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
