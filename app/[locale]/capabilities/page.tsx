import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, getDictionary, localizedPath, t } from "@/lib/i18n";
import { capabilities } from "@/content/capabilities";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.nav.capabilities,
    description: dict.home.capabilitiesLede,
    path: "/capabilities",
  });
}

export default async function CapabilitiesIndex({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.home.capabilitiesEyebrow}
        title={dict.home.capabilitiesTitle}
        lede={dict.home.capabilitiesLede}
        breadcrumb={[
          { label: "Mexus Advisory", href: localizedPath("/", locale) },
          { label: dict.nav.capabilities },
        ]}
      />
      <Section tone="paper" size="compact">
        <Container>
          <Stagger className="border-t border-rule">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.id}>
                <Link
                  href={localizedPath(`/capabilities/${cap.slug}`, locale)}
                  className="group relative block border-b border-rule"
                >
                  <div className="grid grid-cols-12 items-start gap-x-6 py-12 md:py-14 lg:py-16">
                    <div className="col-span-2 md:col-span-1">
                      <span className="font-display text-[1.25rem] font-light text-ink-muted tabular-nums">
                        {cap.number}
                      </span>
                    </div>
                    <div className="col-span-10 md:col-span-9">
                      <h2 className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.1] tracking-[-0.02em] text-ink">
                        {t(cap.title, locale)}
                      </h2>
                      <p className="mt-5 max-w-[62ch] text-[1rem] leading-[1.7] text-ink-muted">
                        {t(cap.lede, locale)}
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
