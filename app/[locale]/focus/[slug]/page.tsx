import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { focusTopics, getFocusTopic } from "@/content/focus";
import { isLocale, getDictionary, localizedPath, t, tl } from "@/lib/i18n";
import { Container } from "@/components/primitives/Container";
import { Breadcrumb } from "@/components/primitives/Breadcrumb";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { GoldRule } from "@/components/primitives/Rule";
import { Reveal } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return focusTopics.flatMap((f) =>
    ["en", "es"].map((locale) => ({ locale, slug: f.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const topic = getFocusTopic(slug);
  if (!topic) return {};
  return buildMetadata({
    locale,
    title: t(topic.title, locale),
    description: tl(topic.sectionOverview, locale)[1] ?? "",
    path: `/focus/${slug}`,
  });
}

export default async function FocusTopicPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const topic = getFocusTopic(slug);
  if (!topic) notFound();
  const dict = getDictionary(locale);

  return (
    <section className="bg-paper pt-32 pb-28 md:pt-36 md:pb-32 lg:pt-40 lg:pb-40">
      <Container>
        <Breadcrumb
          items={[
            { label: "Mexus Advisory", href: localizedPath("/", locale) },
            { label: dict.nav.focus, href: localizedPath("/focus", locale) },
            { label: t(topic.title, locale) },
          ]}
          className="mb-8"
        />

        <Reveal>
          <header>
            <h1 className="font-display type-h1 max-w-[22ch] text-ink">
              {t(topic.title, locale)}
            </h1>
            <div className="mt-12 max-w-[6rem]">
              <GoldRule />
            </div>
          </header>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-10 md:mt-20 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>
                {locale === "es" ? "Resumen de la Sección" : "Section Overview"}
              </Eyebrow>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-6 text-[1.0625rem] leading-[1.85] text-ink-muted">
                {tl(topic.sectionOverview, locale).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-rule pt-14 md:mt-20 md:grid-cols-12 md:pt-16">
            <div className="md:col-span-4">
              <Eyebrow>
                {locale === "es"
                  ? "Lo que esto significa para usted"
                  : "What This Means for You"}
              </Eyebrow>
            </div>
            <div className="md:col-span-8">
              <p className="text-[1.0625rem] leading-[1.85] text-ink-muted">
                {t(topic.whatThisMeansForYou, locale)}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
