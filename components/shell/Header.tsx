"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { localizedPath } from "@/lib/i18n";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MenuOverlay } from "./MenuOverlay";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          "bg-paper/90 backdrop-blur-md",
          scrolled ? "shadow-[inset_0_-1px_0_0_var(--color-rule)]" : "",
        )}
      >
        <div className="shell-gutter mx-auto flex h-16 max-w-[1440px] items-center justify-between md:h-20">
          {/* Left cluster */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={dict.nav.menu}
              className="group -ml-1 flex items-center gap-2 p-1 text-ink transition-colors hover:text-navy-900"
            >
              <span className="flex h-6 w-6 items-center justify-center">
                <Menu size={20} strokeWidth={1.5} aria-hidden />
              </span>
              <span className="eyebrow hidden md:inline">{dict.nav.menu}</span>
            </button>
            <Link
              href={localizedPath("/", locale)}
              className="flex items-center gap-3"
              aria-label="Mexus Advisory — Home"
            >
              <Logo size={36} />
              <span className="font-display hidden text-[1.0625rem] font-medium tracking-[-0.01em] text-ink md:inline">
                Mexus Advisory
              </span>
            </Link>
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-3 md:gap-5">
            <WhatsAppButton label={dict.nav.whatsapp} />
            <LanguageSwitcher current={locale} />
          </div>
        </div>
      </header>

      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        locale={locale}
        dict={dict}
      />
    </>
  );
}
