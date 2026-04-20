import { readFile } from "node:fs/promises";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { marked } from "marked";
import { insights, getInsightBySlug } from "@/content/insights";
import { imagery } from "@/content/imagery";
import { isLocale, getDictionary, localizedPath, t } from "@/lib/i18n";
import { getImage } from "@/lib/imagery";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/primitives/Container";
import { Breadcrumb } from "@/components/primitives/Breadcrumb";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { AuthorAvatar } from "@/components/primitives/AuthorAvatar";
import { Reveal } from "@/components/motion/Reveal";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return insights.flatMap((i) =>
    ["en", "es"].map((locale) => ({ locale, slug: i.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const insight = getInsightBySlug(slug);
  if (!insight) return {};
  const fullTitle = insight.titleFull ?? insight.title;
  return buildMetadata({
    locale,
    title: t(fullTitle, locale),
    description: t(insight.summary, locale),
    path: `/insights/${slug}`,
  });
}

marked.setOptions({ breaks: false, gfm: true });

async function readBody(bodyFile: string): Promise<string> {
  const full = path.join(process.cwd(), "content", "articles", bodyFile);
  return readFile(full, "utf8");
}

export default async function InsightArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();
  const dict = getDictionary(locale);

  const img = getImage(imagery, insight.imageId);
  const raw = await readBody(insight.bodyFile);
  const html = marked.parse(raw) as string;
  const fullTitle = insight.titleFull ?? insight.title;

  return (
    <article className="bg-paper pt-32 pb-28 md:pt-36 md:pb-32 lg:pt-40 lg:pb-40">
      <Container>
        <Breadcrumb
          items={[
            { label: "Mexus Advisory", href: localizedPath("/", locale) },
            {
              label: locale === "es" ? "Perspectivas" : "Insights",
              href: localizedPath("/", locale),
            },
            { label: t(insight.title, locale) },
          ]}
          className="mb-12"
        />

        <Reveal>
          <header className="mx-auto max-w-[68ch]">
            <Eyebrow>
              {t(insight.category, locale)}
              <span aria-hidden className="mx-2 text-ink-muted/40">
                ·
              </span>
              {t(insight.date, locale)}
            </Eyebrow>

            <h1 className="font-display type-h1 mt-8 max-w-[28ch] text-ink">
              {t(fullTitle, locale)}
            </h1>

            {insight.titleFull && insight.titleFull !== insight.title ? (
              <p className="type-lede mt-6 max-w-[56ch]">
                {t(insight.summary, locale)}
              </p>
            ) : null}

            {/* Byline */}
            <div className="mt-10 flex items-center gap-5 border-t border-rule pt-8">
              <AuthorAvatar
                name={insight.author.name}
                personSlug={insight.author.personSlug}
                size={56}
              />
              <div>
                <p className="font-display text-[1rem] leading-tight tracking-[-0.01em] text-ink">
                  {insight.author.name}
                </p>
                <p className="mt-1 text-[0.8125rem] uppercase tracking-[0.16em] text-ink-muted">
                  {t(insight.author.title, locale)}
                </p>
              </div>
            </div>
          </header>
        </Reveal>

        {img && (
          <Reveal delay={0.08}>
            <div className="relative mx-auto mt-14 aspect-[16/10] w-full max-w-[1080px] overflow-hidden md:mt-20">
              <Image
                src={img.src}
                alt={t(img.alt, locale)}
                fill
                priority
                sizes="(min-width: 1080px) 1080px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}

        <Reveal delay={0.12}>
          <div
            className="prose-editorial mx-auto mt-14 md:mt-20"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mx-auto mt-20 max-w-[68ch] border-t border-rule pt-10 md:mt-24 md:pt-14">
            <LinkArrow href={localizedPath("/", locale)}>
              {locale === "es" ? "Volver al inicio" : "Back to home"}
            </LinkArrow>
          </div>
        </Reveal>
      </Container>

      {/* hidden label to satisfy dict import for future locales */}
      <span className="sr-only">{dict.common.exploreInsights}</span>
    </article>
  );
}
