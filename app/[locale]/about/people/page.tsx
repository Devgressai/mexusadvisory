import Image from "next/image";
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
import { cn } from "@/lib/cn";
import { HOVER_IMAGE, HOVER_LINK } from "@/components/motion/editorial";

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
          <Stagger className="grid grid-cols-1 gap-x-6 gap-y-16 border-t border-rule pt-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {people.map((person) => {
              const src = PORTRAIT_BY_SLUG[person.slug];
              return (
                <StaggerItem key={person.id}>
                  <Link
                    href={localizedPath(`/about/people/${person.slug}`, locale)}
                    className="group block"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      {src ? (
                        <Image
                          src={src}
                          alt={`${person.name} — ${t(person.role, locale)}`}
                          fill
                          sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                          className={cn(
                            "object-cover opacity-[0.96]",
                            HOVER_IMAGE,
                            "group-hover:opacity-100",
                          )}
                        />
                      ) : (
                        <div className="flex h-full w-full items-end bg-bone p-6 ring-1 ring-rule">
                          <span className="font-display text-[2.5rem] leading-none text-ink-muted/40">
                            {person.name
                              .split(" ")
                              .map((p) => p[0])
                              .join("")}
                          </span>
                        </div>
                      )}
                      <span
                        aria-hidden
                        className="absolute bottom-0 left-0 h-px w-8 origin-left bg-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                      />
                    </div>
                    <div className="mt-6">
                      <h3
                        className={cn(
                          "font-display type-h3 text-ink",
                          HOVER_LINK,
                          "group-hover:text-navy-900",
                        )}
                      >
                        {person.name}
                      </h3>
                      <p className="eyebrow mt-3 text-ink-muted">
                        {t(person.role, locale)} · {t(person.location, locale)}
                      </p>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>
    </>
  );
}
