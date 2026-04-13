import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { people, getPerson } from "@/content/people";
import { getCapability } from "@/content/capabilities";
import { isLocale, getDictionary, localizedPath, t, tl } from "@/lib/i18n";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return people.flatMap((p) => ["en", "es"].map((locale) => ({ locale, slug: p.slug })));
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

  return (
    <>
      <PageHero
        eyebrow={t(person.role, locale)}
        title={person.name}
        lede={t(person.location, locale)}
        breadcrumb={[
          { label: "Mexus Advisory", href: localizedPath("/", locale) },
          { label: dict.nav.about, href: localizedPath("/about", locale) },
          { label: dict.nav.people, href: localizedPath("/about/people", locale) },
          { label: person.name },
        ]}
      />

      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="aspect-[4/5] w-full bg-bone ring-1 ring-rule">
                <div className="flex h-full w-full items-end p-8">
                  <span className="font-display text-[4rem] leading-none text-ink-muted/30">
                    {person.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <Eyebrow>{locale === "es" ? "Biografía" : "Biography"}</Eyebrow>
              <div className="mt-8 space-y-6 text-[1.0625rem] leading-[1.8] text-ink-muted">
                {tl(person.bio, locale).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <Eyebrow className="mt-14">{locale === "es" ? "Práctica" : "Practice"}</Eyebrow>
              <ul className="mt-6 space-y-3">
                {person.practices.map((id) => {
                  const cap = getCapability(id);
                  if (!cap) return null;
                  return (
                    <li key={id}>
                      <LinkArrow href={localizedPath(`/capabilities/${cap.slug}`, locale)}>
                        {t(cap.title, locale)}
                      </LinkArrow>
                    </li>
                  );
                })}
              </ul>

              <Eyebrow className="mt-14">{locale === "es" ? "Idiomas" : "Languages"}</Eyebrow>
              <p className="mt-4 text-[1rem] text-ink">{person.languages.join(" · ")}</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
