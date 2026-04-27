import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { immigrationPathway } from "@/content/immigration-pathway";
import { isLocale, localizedPath, t, tl } from "@/lib/i18n";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Breadcrumb } from "@/components/primitives/Breadcrumb";
import { GoldRule } from "@/components/primitives/Rule";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    title: t(immigrationPathway.title, locale),
    description: tl(immigrationPathway.body, locale)[0] ?? "",
    path: "/immigration-pathway",
  });
}

export default async function ImmigrationPathwayPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 lg:pt-52 lg:pb-24">
        <Container>
          <Breadcrumb
            items={[
              { label: "Mexus Advisory", href: localizedPath("/", locale) },
              { label: t(immigrationPathway.title, locale) },
            ]}
            className="mb-10"
          />
          <h1 className="font-display type-h1 max-w-5xl text-ink">
            {t(immigrationPathway.title, locale)}
          </h1>
          <div className="mt-14 max-w-[6rem]">
            <GoldRule />
          </div>
        </Container>
      </section>
      <Section tone="paper" size="standard">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-12">
            <div className="md:col-span-8 md:col-start-3">
              <div className="space-y-6 text-[1.0625rem] leading-[1.85] text-ink-muted">
                {tl(immigrationPathway.body, locale).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
