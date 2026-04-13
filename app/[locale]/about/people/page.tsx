import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { people } from "@/content/people";
import { isLocale, getDictionary, localizedPath, t } from "@/lib/i18n";
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
          <Stagger className="grid grid-cols-1 gap-x-6 gap-y-16 border-t border-rule pt-14 sm:grid-cols-2 lg:grid-cols-4">
            {people.map((person) => (
              <StaggerItem key={person.id}>
                <Link
                  href={localizedPath(`/about/people/${person.slug}`, locale)}
                  className="group block"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden bg-bone ring-1 ring-rule">
                    <div className="flex h-full w-full items-end p-6">
                      <span className="font-display text-[2.5rem] leading-none text-ink-muted/40">
                        {person.name
                          .split(" ")
                          .map((p) => p[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-display text-[1.25rem] tracking-[-0.015em] text-ink">
                      <span className="relative inline-block">
                        {person.name}
                        <span
                          aria-hidden
                          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
                        />
                      </span>
                    </h3>
                    <p className="eyebrow mt-3 text-ink-muted">
                      {t(person.role, locale)} · {t(person.location, locale)}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
    </>
  );
}
