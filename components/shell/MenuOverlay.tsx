"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Locale } from "@/types/content";
import type { Dictionary } from "@/content/i18n/en";
import { primaryNav } from "@/content/navigation";
import { focusTopics } from "@/content/focus";
import { localizedPath, t } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { WhatsAppButton } from "./WhatsAppButton";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  dict: Dictionary;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function MenuOverlay({ open, onClose, locale, dict }: MenuOverlayProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
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
                className="fixed inset-0 z-50 overflow-y-auto bg-navy-900 text-paper"
              >
                <Dialog.Title className="sr-only">{dict.nav.menu}</Dialog.Title>
                <div className="shell-gutter mx-auto max-w-[1440px]">
                  {/* overlay header */}
                  <div className="flex h-16 items-center justify-between md:h-20">
                    <span className="eyebrow text-paper/60">{dict.nav.menu}</span>
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

                  {/* body */}
                  <m.div
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
                    }}
                    className="grid grid-cols-1 gap-16 py-16 md:grid-cols-12 md:gap-8 md:pt-24 md:pb-24 lg:pt-32"
                  >
                    {/* Primary nav */}
                    <m.nav
                      variants={{
                        hidden: { opacity: 0, y: 16 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                      }}
                      className="md:col-span-7 md:col-start-1"
                      aria-label={dict.nav.menu}
                    >
                      <ul className="space-y-12">
                        {primaryNav.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={localizedPath(item.href, locale)}
                              onClick={onClose}
                              className="font-display group inline-flex items-baseline gap-4 text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.02em] text-paper"
                            >
                              <span>{t(item.label, locale)}</span>
                              <span
                                aria-hidden
                                className="inline-block translate-x-0 text-paper/40 transition-transform duration-300 group-hover:translate-x-2"
                              >
                                →
                              </span>
                            </Link>
                            {item.children && (
                              <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2 pl-0">
                                {item.children.map((child) => (
                                  <li key={child.href}>
                                    <Link
                                      href={localizedPath(child.href, locale)}
                                      onClick={onClose}
                                      className="eyebrow text-paper/50 transition-colors hover:text-paper"
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
                    </m.nav>

                    {/* Featured column */}
                    <m.aside
                      variants={{
                        hidden: { opacity: 0, y: 16 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease, delay: 0.1 } },
                      }}
                      className="md:col-span-4 md:col-start-9"
                    >
                      <p className="eyebrow mb-8 text-gold">— {dict.nav.featured}</p>
                      <ul className="space-y-8">
                        {focusTopics.map((topic) => (
                          <li key={topic.id}>
                            <Link
                              href={localizedPath(`/focus/${topic.slug}`, locale)}
                              onClick={onClose}
                              className="group block border-t border-paper/15 pt-5 transition-colors hover:border-gold"
                            >
                              <p className="eyebrow text-paper/40">
                                {topic.number} · {t(topic.title, locale)}
                              </p>
                              <p className="font-display mt-2 text-[1.25rem] leading-tight tracking-[-0.01em] text-paper">
                                {t(topic.dek, locale).split(".")[0]}.
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </m.aside>
                  </m.div>

                  {/* overlay footer */}
                  <div
                    className={cn(
                      "flex flex-col items-start justify-between gap-6 border-t border-paper/15 py-10 md:flex-row md:items-center",
                    )}
                  >
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
