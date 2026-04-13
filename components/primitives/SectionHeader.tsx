import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "right";
  tone?: "paper" | "navy";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "paper",
  className,
}: SectionHeaderProps) {
  const eyebrowTone = tone === "navy" ? "paper" : "muted";
  // Direct string concat — cn() runs tailwind-merge which strips the custom
  // .type-h1 / .type-lede classes by mistaking them for tailwind text
  // utilities. Concat preserves them and applies the theme color alongside.
  const titleClass =
    tone === "navy"
      ? "font-display type-h1 max-w-[24ch] text-paper"
      : "font-display type-h1 max-w-[24ch] text-ink";
  const ledeClass =
    tone === "navy"
      ? "type-lede mt-7 max-w-[52ch] text-paper/70"
      : "type-lede mt-7 max-w-[52ch] text-ink-muted";

  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "right" && "ml-auto text-right",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow tone={eyebrowTone} className="mb-8">
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className={titleClass}>{title}</h2>
      {lede && <p className={ledeClass}>{lede}</p>}
    </header>
  );
}
