"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import {
  DEFAULT_THEME,
  THEMES,
  THEME_LABELS,
  THEME_STORAGE_KEY,
  type ThemeId,
  isTheme,
} from "@/lib/theme";

interface ThemeSwitcherProps {
  tone?: "paper" | "navy";
  className?: string;
}

/**
 * Top-right theme switcher. Reads the active theme from the <html>
 * data-theme attribute (already set by the inline init script in the root
 * layout) and updates it + localStorage on click.
 *
 * Presented as three compact labels separated by thin rules so it reads
 * as a disciplined editorial control, not a SaaS toggle.
 */
export function ThemeSwitcher({ tone = "paper", className }: ThemeSwitcherProps) {
  const [theme, setTheme] = useState<ThemeId>(DEFAULT_THEME);

  // Sync with the attribute set by the inline init script
  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (isTheme(current)) setTheme(current);
  }, []);

  const apply = useCallback((next: ThemeId) => {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // ignore — localStorage may be unavailable in private mode
    }
  }, []);

  const activeClass = tone === "navy" ? "text-paper" : "text-ink";
  const inactiveClass =
    tone === "navy"
      ? "text-paper/40 hover:text-paper"
      : "text-ink-muted/70 hover:text-ink";
  const separatorClass = tone === "navy" ? "bg-paper/20" : "bg-ink-muted/30";

  return (
    <div
      role="group"
      aria-label="Theme"
      className={cn("hidden items-center gap-2 lg:inline-flex", className)}
    >
      {THEMES.map((id, idx) => {
        const isActive = theme === id;
        return (
          <div key={id} className="flex items-center gap-2">
            {idx > 0 && (
              <span aria-hidden className={cn("h-3 w-px", separatorClass)} />
            )}
            <button
              type="button"
              onClick={() => apply(id)}
              aria-pressed={isActive}
              aria-label={`${THEME_LABELS[id].label} theme`}
              title={THEME_LABELS[id].blurb}
              className={cn(
                "eyebrow relative transition-colors duration-300",
                isActive ? activeClass : inactiveClass,
              )}
            >
              <span className="relative">
                {THEME_LABELS[id].label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left bg-gold transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
