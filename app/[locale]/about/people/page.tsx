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
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";
import { HOVER_IMAGE } from "@/components/motion/editorial";
import { getPortrait } from "@/components/primitives/AuthorAvatar";

interface Props {
  params: Promise<{ locale: string }>;
}

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

  const members = people.filter((p) => p.tier !== "executive");
  const executives = people.filter((p) => p.tier === "executive");

  return (
    <section className="bg-paper pt-32 pb-24 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
      <Container>
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

        {/* Members */}
        <div className="mt-14 md:mt-16">
          <Reveal>
            <Eyebrow>{locale === "es" ? "Socios" : "Members"}</Eyebrow>
          </Reveal>
          <Reveal variant="stagger" className="mt-8">
            <PeopleGrid people={members} locale={locale} />
          </Reveal>
        </div>

        {/* Executives */}
        {executives.length > 0 && (
          <div className="mt-20 md:mt-24">
            <Reveal>
              <Eyebrow>{locale === "es" ? "Ejecutivos" : "Executives"}</Eyebrow>
            </Reveal>
            <Reveal variant="stagger" className="mt-8">
              <PeopleGrid people={executives} locale={locale} />
            </Reveal>
          </div>
        )}

        {/* Contact note below grid */}
        <Reveal variant="soft" delay={0.2}>
          <p className="mt-16 text-[0.875rem] text-ink-muted">
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

function PeopleGrid({
  people: list,
  locale,
}: {
  people: typeof people;
  locale: "en" | "es";
}) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
      {list.map((person) => {
        const src = getPortrait(person.slug);
        return (
          <li key={person.id}>
            <Link
              href={localizedPath(`/about/people/${person.slug}`, locale)}
              className="group block h-full border border-rule bg-paper px-6 py-7 transition-colors duration-300 hover:border-navy-900 md:px-7 md:py-8"
            >
              <div className="flex items-start gap-6">
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
                    <div className="flex h-full w-full items-center justify-center bg-navy-900">
                      <div className="relative h-[64%] w-[64%]">
                        <Image
                          src="/brand/mexus-mark-gold-square.png"
                          alt="Mexus Advisory"
                          fill
                          sizes="100px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>

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
  );
}
