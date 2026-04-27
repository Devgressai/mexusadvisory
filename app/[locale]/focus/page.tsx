import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { focusTopics } from "@/content/focus";
import { isLocale, getDictionary, localizedPath, t, tl } from "@/lib/i18n";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Breadcrumb } from "@/components/primitives/Breadcrumb";
import { GoldRule } from "@/components/primitives/Rule";
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
    title: dict.nav.focus,
    path: "/focus",
  });
}

export default async function FocusIndex({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 lg:pt-52 lg:pb-24">
        <Container>
          <Breadcrumb
            items={[
              { label: "Mexus Advisory", href: localizedPath("/", locale) },
              { label: dict.nav.focus },
            ]}
            className="mb-10"
          />
          <h1 className="font-display type-h1 max-w-5xl text-ink">
            {locale === "es" ? "Mexus Focus" : "Mexus Focus"}
          </h1>
          <div className="mt-14 max-w-[6rem]">
            <GoldRule />
          </div>
        </Container>
      </section>
      <Section tone="paper" size="compact">
        <Container>
          <Stagger className="border-t border-rule">
            {focusTopics.map((topic) => (
              <StaggerItem key={topic.id}>
                <Link
                  href={localizedPath(`/focus/${topic.slug}`, locale)}
                  className="group relative block border-b border-rule"
                >
                  <div className="grid grid-cols-12 items-start gap-x-6 py-12 md:py-14 lg:py-16">
                    <div className="col-span-12 md:col-span-10">
                      <h2 className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.1] tracking-[-0.02em] text-ink">
                        {t(topic.title, locale)}
                      </h2>
                      <p className="mt-5 max-w-[62ch] text-[1rem] leading-[1.7] text-ink-muted">
                        {tl(topic.sectionOverview, locale)[1] ??
                          tl(topic.sectionOverview, locale)[0]}
                      </p>
                    </div>
                    <div className="col-span-12 mt-4 flex md:col-span-2 md:mt-0 md:items-center md:self-center md:justify-self-end">
                      <span
                        aria-hidden
                        className="inline-flex h-10 w-10 items-center justify-center border border-ink/10 text-ink transition-all duration-300 group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-paper"
                      >
                        →
                      </span>
                    </div>
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
