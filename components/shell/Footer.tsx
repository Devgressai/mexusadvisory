import Link from "next/link";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { footerOffices, footerAbout } from "@/content/navigation";
import { site } from "@/content/site";
import { localizedPath, t } from "@/lib/i18n";
import { Container } from "@/components/primitives/Container";
import { ButtonLink } from "@/components/primitives/Button";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="bg-navy-900 text-paper">
      {/* Gold top rule */}
      <div aria-hidden className="h-px w-full bg-gold" />

      <Container className="py-20 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Left: offices + about */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
              <div>
                <p className="eyebrow mb-6 text-gold">— {dict.footer.offices}</p>
                <ul className="space-y-3">
                  {footerOffices.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={localizedPath(item.href, locale)}
                        className="font-display text-[1.125rem] tracking-[-0.01em] text-paper transition-colors hover:text-gold-soft"
                      >
                        {t(item.label, locale)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-6 text-gold">— {dict.footer.about}</p>
                <ul className="space-y-3">
                  {footerAbout.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={localizedPath(item.href, locale)}
                        className="font-display text-[1.125rem] tracking-[-0.01em] text-paper transition-colors hover:text-gold-soft"
                      >
                        {t(item.label, locale)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: how can we help */}
          <div className="md:col-span-5">
            <p className="eyebrow mb-6 text-gold">— {dict.footer.howCanWeHelp}</p>
            <h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] leading-[1.1] tracking-[-0.015em] text-paper">
              {t(site.description, locale)}
            </h3>
            <div className="mt-8">
              <ButtonLink
                href={localizedPath("/contact", locale)}
                variant="secondary"
                tone="navy"
              >
                {dict.common.contactFirm}
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-paper/15 pt-10 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Logo size={48} />
            <span className="font-display text-[1rem] tracking-[-0.01em] text-paper">
              Mexus Advisory
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <p className="text-[0.8125rem] text-paper/50">{t(site.legal, locale)}</p>
            <LanguageSwitcher current={locale} tone="navy" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
