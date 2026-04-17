"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import type { Locale, LocalizedString, NavItem } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { primaryNav } from "@/content/navigation";
import { localizedPath, t } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { LinkArrow } from "@/components/primitives/LinkArrow";
import { WhatsAppButton } from "./WhatsAppButton";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  dict: Dictionary;
}

const ease = [0.22, 1, 0.36, 1] as const;

// Section ledes live next to the menu UI (inline) rather than threading four
// extra keys through the full Dictionary — they are menu-specific and not
// reused elsewhere on the site.
interface Section {
  id: string;
  nav: NavItem;
  lede: LocalizedString;
}

const navByHref = (href: string): NavItem => {
  const found = primaryNav.find((item) => item.href === href);
  if (!found) throw new Error(`MenuOverlay: primaryNav is missing ${href}`);
  return found;
};

const SECTIONS: Section[] = [
  {
    id: "capabilities",
    nav: navByHref("/capabilities"),
    lede: {
      en: "Five mandates where cross-border posture changes the outcome — immigration, risk, wealth, capital, and jurisdiction.",
      es: "Cinco mandatos donde la postura transfronteriza cambia el resultado — migración, riesgo, patrimonio, capital y jurisdicción.",
    },
  },
  {
    id: "about",
    nav: navByHref("/about"),
    lede: {
      en: "A private cross-border advisory firm. Meet the people behind the practice and visit our offices across the Americas.",
      es: "Una firma privada de asesoría transfronteriza. Conozca al equipo detrás de la práctica y visite nuestras oficinas en las Américas.",
    },
  },
  {
    id: "partners",
    nav: navByHref("/partners-program"),
    lede: {
      en: "A curated network of professionals who extend the firm's reach. Selective, reciprocal, and governed by the standards clients expect from Mexus Advisory.",
      es: "Una red curada de profesionales que amplía el alcance de la firma. Selectiva, recíproca y regida por los estándares que los clientes esperan de Mexus Advisory.",
    },
  },
];

export function MenuOverlay({ open, onClose, locale, dict }: MenuOverlayProps) {
  const [activeId, setActiveId] = useState<string>("capabilities");
  const activeSection: Section =
    SECTIONS.find((s) => s.id === activeId) ?? SECTIONS[0]!;

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(o) => {
        if (!o) onClose();
        else setActiveId("capabilities");
      }}
    >
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 bg-navy-900/30"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <m.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                exit={{ clipPath: "inset(0 100% 0 0)" }}
                transition={{ duration: 0.7, ease }}
                className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-navy-900 text-paper"
              >
                <Dialog.Title className="sr-only">{dict.nav.menu}</Dialog.Title>

                <div className="shell-gutter mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
                  {/* Top bar — just the close control, minimal chrome */}
                  <div className="flex h-16 items-center justify-end md:h-20">
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label={dict.nav.close}
                        className="group flex items-center gap-2 p-1 text-paper transition-opacity hover:opacity-80"
                      >
                        <span className="eyebrow">{dict.nav.close}</span>
                        <X size={18} strokeWidth={1.5} aria-hidden />
                      </button>
                    </Dialog.Close>
                  </div>

                  {/* Body */}
                  <m.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease, delay: 0.15 }}
                    className="flex-1 py-10 md:py-14"
                  >
                    {/* ───── Desktop: two-column sidebar + detail ───── */}
                    <div className="hidden md:grid md:grid-cols-12 md:gap-10">
                      {/* Sidebar */}
                      <nav
                        aria-label={dict.nav.menu}
                        className="md:col-span-4 lg:col-span-4"
                      >
                        <p className="eyebrow mb-5 text-paper/50">
                          — {locale === "es" ? "Navegar" : "Navigate"}
                        </p>
                        <ul>
                          {SECTIONS.map((section) => {
                            const isActive = section.id === activeId;
                            return (
                              <li key={section.id}>
                                <Link
                                  href={localizedPath(section.nav.href, locale)}
                                  onClick={onClose}
                                  onMouseEnter={() => setActiveId(section.id)}
                                  onFocus={() => setActiveId(section.id)}
                                  className={cn(
                                    "group relative block border-l-2 py-3 pr-3 pl-5 transition-colors duration-200",
                                    isActive
                                      ? "border-gold bg-paper/[0.04] text-paper"
                                      : "border-transparent text-paper/70 hover:border-paper/25 hover:text-paper",
                                  )}
                                >
                                  <span className="font-display block text-[1.0625rem] leading-[1.3] tracking-[-0.01em]">
                                    {t(section.nav.label, locale)}
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </nav>

                      {/* Detail panel */}
                      <div className="md:col-span-8 md:border-l md:border-paper/10 md:pl-10 lg:col-span-7 lg:col-start-6">
                        <AnimatePresence mode="wait">
                          <m.div
                            key={activeSection.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.25, ease }}
                          >
                            <h2 className="font-display text-[clamp(1.5rem,2vw,1.875rem)] leading-[1.15] tracking-[-0.015em] text-paper">
                              {t(activeSection.nav.label, locale)}
                            </h2>
                            <p className="mt-4 max-w-[58ch] text-[0.9375rem] leading-[1.6] text-paper/70">
                              {t(activeSection.lede, locale)}
                            </p>

                            {activeSection.nav.children ? (
                              <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                                {activeSection.nav.children.map((child) => (
                                  <li key={child.href}>
                                    <Link
                                      href={localizedPath(child.href, locale)}
                                      onClick={onClose}
                                      className="group inline-flex items-baseline gap-2 text-[0.9375rem] leading-[1.45] text-paper/85 transition-colors hover:text-paper"
                                    >
                                      <span className="relative">
                                        {t(child.label, locale)}
                                        <span
                                          aria-hidden
                                          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                                        />
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <div className="mt-10">
                                <LinkArrow
                                  href={localizedPath(activeSection.nav.href, locale)}
                                  tone="paper"
                                >
                                  {locale === "es"
                                    ? "Visitar el programa"
                                    : "Visit the program"}
                                </LinkArrow>
                              </div>
                            )}
                          </m.div>
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* ───── Mobile: stacked accordion ───── */}
                    <nav
                      aria-label={dict.nav.menu}
                      className="md:hidden"
                    >
                      <ul className="divide-y divide-paper/10 border-y border-paper/10">
                        {SECTIONS.map((section) => (
                          <li key={section.id} className="py-5">
                            <Link
                              href={localizedPath(section.nav.href, locale)}
                              onClick={onClose}
                              className="font-display block text-[1.25rem] leading-[1.2] tracking-[-0.01em] text-paper"
                            >
                              {t(section.nav.label, locale)}
                            </Link>
                            {section.nav.children && (
                              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                                {section.nav.children.map((child) => (
                                  <li key={child.href}>
                                    <Link
                                      href={localizedPath(child.href, locale)}
                                      onClick={onClose}
                                      className="eyebrow text-paper/60 transition-colors hover:text-paper"
                                    >
                                      {t(child.label, locale)}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </m.div>

                  {/* Footer strip */}
                  <div className="mt-auto flex flex-col items-start justify-between gap-6 border-t border-paper/15 py-8 md:flex-row md:items-center">
                    <WhatsAppButton label={dict.nav.whatsapp} tone="navy" />
                    <LanguageSwitcher current={locale} tone="navy" />
                  </div>
                </div>
              </m.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
