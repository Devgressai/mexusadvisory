"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import type { Locale } from "@/types/content";

interface LanguageSwitcherProps {
  current: Locale;
  tone?: "paper" | "navy";
  className?: string;
}

function swapLocale(pathname: string, next: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "en" || parts[0] === "es") {
    parts[0] = next;
  } else {
    parts.unshift(next);
  }
  const path = "/" + parts.join("/");
  if (next === "en") {
    return path.replace(/^\/en/, "") || "/";
  }
  return path;
}

export function LanguageSwitcher({ current, tone = "paper", className }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const active = tone === "navy" ? "text-paper" : "text-ink";
  const inactive = tone === "navy" ? "text-paper/40 hover:text-paper" : "text-ink-muted hover:text-ink";

  return (
    <div
      className={cn("eyebrow flex items-center gap-2", className)}
      aria-label="Language"
    >
      <Link
        href={swapLocale(pathname, "en")}
        className={cn("transition-colors", current === "en" ? active : inactive)}
        aria-current={current === "en" ? "true" : undefined}
      >
        EN
      </Link>
      <span aria-hidden className={tone === "navy" ? "text-paper/20" : "text-ink-muted/40"}>
        /
      </span>
      <Link
        href={swapLocale(pathname, "es")}
        className={cn("transition-colors", current === "es" ? active : inactive)}
        aria-current={current === "es" ? "true" : undefined}
      >
        ES
      </Link>
    </div>
  );
}
