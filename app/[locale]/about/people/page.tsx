import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { people } from "@/content/people";
import { site } from "@/content/site";
import { isLocale, getDictionary, localizedPath, t } from "@/lib/i18n";
import { Container } from "@/components/primitives/Container";
import { Breadcrumb } from "@/components/primitives/Breadcrumb";
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
    <section className="bg-paper pt-32 pb-24 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
      <Container>
        {/* Compact header — breadcrumb + title on one line, cards right below */}
        <Breadcrumb
          items={[
            { label: "Mexus Advisory", href: localizedPath("/", locale) },
            { label: dict.nav.about, href: localizedPath("/about", locale) },
            { label: dict.nav.people },
          ]}
          className="mb-8"
        />

        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 border-b border-rule pb-10 md:flex-row md:items-end md:pb-12">
            <h1 className="font-display type-h1 max-w-[22ch] text-ink">
              {dict.nav.people}
            </h1>
            <p className="text-[0.9375rem] leading-[1.55] text-ink-muted md:max-w-md md:text-right">
              {locale === "es"
                ? "Un grupo pequeño y senior que atiende personalmente cada compromiso."
                : "A small, senior team that personally handles every engagement."}
            </p>
          </div>
        </Reveal>

        {/* Card grid */}
        <Reveal variant="stagger" className="mt-12 md:mt-14">
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
                    className="group block h-full border border-rule bg-paper px-6 py-7 transition-colors duration-300 hover:border-navy-900 md:px-7 md:py-8"
                  >
                    <div className="flex items-start gap-6">
                      {/* Portrait */}
                      <div className="relative aspect-square w-[88px] shrink-0 overflow-hidden md:w-[100px]">
                        {src ? (
                          <Image
                            src={src}
                            alt={`${person.name} — ${t(person.role, locale)}`}
                            fill
                            sizes="100px"
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
                        <h3 className="font-display text-[1.1875rem] leading-[1.2] tracking-[-0.015em] text-ink underline decoration-gold/70 decoration-[1px] underline-offset-[6px] transition-colors duration-300 group-hover:text-navy-900 group-hover:decoration-gold">
                          {person.name}
                        </h3>
                        <p className="mt-3 text-[0.8125rem] leading-[1.5] text-ink-muted">
                          {t(person.role, locale)}
                        </p>
                        <p className="mt-1 text-[0.75rem] italic text-ink-muted/70">
                          {t(person.location, locale)}
                        </p>
                        <span
                          aria-hidden
                          className="mt-5 inline-flex h-6 w-6 items-center justify-center text-ink-muted/60 transition-colors duration-300 group-hover:text-navy-900"
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
    </section>
  );
}
