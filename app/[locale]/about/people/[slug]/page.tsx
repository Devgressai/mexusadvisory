import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { people, getPerson } from "@/content/people";
import { getCapability } from "@/content/capabilities";
import { site } from "@/content/site";
import { isLocale, getDictionary, localizedPath, t, tl } from "@/lib/i18n";
import { Container } from "@/components/primitives/Container";
import { Breadcrumb } from "@/components/primitives/Breadcrumb";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { Reveal } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";
import { getPortrait } from "@/components/primitives/AuthorAvatar";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return people.flatMap((p) =>
    ["en", "es"].map((locale) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const person = getPerson(slug);
  if (!person) return {};
  return buildMetadata({
    locale,
    title: person.name,
    description: t(person.role, locale),
    path: `/about/people/${slug}`,
  });
}

export default async function PersonPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const person = getPerson(slug);
  if (!person) notFound();
  const dict = getDictionary(locale);
  const src = getPortrait(person.slug);
  const emailTo = person.email ?? site.email;

  return (
    <section className="bg-paper pt-32 pb-24 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
      <Container>
        <Breadcrumb
          items={[
            { label: "Mexus Advisory", href: localizedPath("/", locale) },
            { label: dict.nav.about, href: localizedPath("/about", locale) },
            {
              label: dict.nav.people,
              href: localizedPath("/about/people", locale),
            },
            { label: person.name },
          ]}
          className="mb-10"
        />

        {/* Compact header — portrait + name/title/location/email in one row */}
        <Reveal>
          <header className="flex flex-col items-start gap-8 border-b border-rule pb-12 sm:flex-row sm:items-start sm:gap-10">
            {/* Portrait */}
            <div className="relative aspect-square w-[140px] shrink-0 overflow-hidden md:w-[180px]">
              {src ? (
                <Image
                  src={src}
                  alt={`${person.name} — ${t(person.role, locale)}`}
                  fill
                  priority
                  sizes="180px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-end bg-bone p-4 ring-1 ring-rule">
                  <span className="font-display text-[2.5rem] leading-none text-ink-muted/40">
                    {person.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </span>
                </div>
              )}
            </div>

            {/* Name + title + location + email icon */}
            <div className="flex min-w-0 flex-1 flex-col pt-1 md:pt-3">
              <h1 className="font-display type-h1 text-ink">{person.name}</h1>
              <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-[1.55] text-ink-muted md:mt-4">
                {t(person.role, locale)}
              </p>
              <p className="mt-1 text-[0.8125rem] italic text-ink-muted/70">
                {t(person.location, locale)}
              </p>
              {person.education && (
                <p className="mt-3 text-[0.75rem] uppercase tracking-[0.14em] text-ink-muted/80">
                  {t(person.education, locale)}
                </p>
              )}
              <a
                href={`mailto:${emailTo}`}
                aria-label={`Email ${person.name}`}
                className="mt-4 inline-flex items-center gap-2 text-[0.8125rem] text-ink-muted/70 transition-colors duration-300 hover:text-navy-900"
              >
                <Mail size={15} strokeWidth={1.5} />
                <span>{emailTo}</span>
              </a>
            </div>
          </header>
        </Reveal>

        {/* Bio + practice + languages in a single 2-col layout */}
        <Reveal delay={0.08}>
          <div className="mt-14 grid grid-cols-1 gap-16 md:mt-16 md:grid-cols-12">
            <div className="md:col-span-8">
              <Eyebrow>{locale === "es" ? "Biografía" : "Biography"}</Eyebrow>
              <div className="mt-6 space-y-5 text-[1.0625rem] leading-[1.8] text-ink-muted">
                {tl(person.bio, locale).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            <aside className="md:col-span-4">
              <Eyebrow>{locale === "es" ? "Práctica" : "Practice"}</Eyebrow>
              <ul className="mt-6 space-y-3">
                {person.practices.map((id) => {
                  const cap = getCapability(id);
                  if (!cap) return null;
                  return (
                    <li key={id}>
                      <LinkArrow
                        href={localizedPath(
                          `/capabilities/${cap.slug}`,
                          locale,
                        )}
                      >
                        {t(cap.title, locale)}
                      </LinkArrow>
                    </li>
                  );
                })}
              </ul>

              <Eyebrow className="mt-12">
                {locale === "es" ? "Idiomas" : "Languages"}
              </Eyebrow>
              <p className="mt-4 text-[0.9375rem] text-ink">
                {person.languages.join(" · ")}
              </p>
            </aside>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
