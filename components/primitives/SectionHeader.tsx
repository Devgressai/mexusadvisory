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
  const titleColor = tone === "navy" ? "text-paper" : "text-ink";
  const ledeColor = tone === "navy" ? "text-paper/70" : "text-ink-muted";

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
      <h2 className={cn("font-display text-h2 max-w-[22ch]", titleColor)}>
        {title}
      </h2>
      {lede && (
        <p className={cn("text-lede mt-7 max-w-[52ch]", ledeColor)}>{lede}</p>
      )}
    </header>
  );
}
