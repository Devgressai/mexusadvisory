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
          "fixed inset-x-0 top-0 z-40 transition-[background,height,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "bg-paper shadow-[inset_0_-1px_0_0_var(--color-rule)]"
            : "bg-paper/95 backdrop-blur-md",
        )}
      >
        <div
          className={cn(
            "shell-gutter mx-auto flex max-w-[1440px] items-center justify-between transition-[height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            scrolled ? "h-14 md:h-[72px]" : "h-16 md:h-20",
          )}
        >
          {/* Left cluster */}
          <div className="flex items-center gap-5 md:gap-7">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={dict.nav.menu}
              className="group flex items-center gap-2.5 text-ink transition-opacity hover:opacity-70"
            >
              <span className="flex h-5 w-5 items-center justify-center">
                <Menu size={18} strokeWidth={1.5} aria-hidden />
              </span>
              <span className="eyebrow hidden lg:inline">
                {dict.nav.menu}
              </span>
            </button>

            <span
              aria-hidden
              className="hidden h-5 w-px bg-rule md:inline-block"
            />

            <Link
              href={localizedPath("/", locale)}
              className="flex items-center gap-3.5"
              aria-label="Mexus Advisory — Home"
            >
              <Logo size={scrolled ? 40 : 48} className="transition-[width,height] duration-300" />
            </Link>
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-4 md:gap-6">
            <WhatsAppButton label={dict.nav.whatsapp} />
            <span
              aria-hidden
              className="hidden h-5 w-px bg-rule md:inline-block"
            />
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
