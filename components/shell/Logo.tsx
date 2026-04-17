import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  /** Rendered height of the owl mark in pixels. */
  size?: number;
  /**
   * Wordmark color treatment.
   * - "dark"  → black wordmark (for light backgrounds like the header)
   * - "paper" → near-white wordmark (for dark backgrounds like the footer)
   * - "gold"  → original gold wordmark, untouched
   */
  tone?: "dark" | "paper" | "gold";
  className?: string;
}

// Source asset intrinsic dimensions
const MARK_W = 4843;
const MARK_H = 3583;
const WORD_W = 1650;
const WORD_H = 527;

const WORDMARK_FILTER: Record<NonNullable<LogoProps["tone"]>, string | undefined> = {
  dark: "brightness(0)",
  paper: "brightness(0) invert(1)",
  gold: undefined,
};

export function Logo({ size = 44, tone = "dark", className }: LogoProps) {
  const markW = Math.round((size * MARK_W) / MARK_H);
  // Scale wordmark so its height is ~55% of the mark height — visually balanced
  const wordH = Math.round(size * 0.55);
  const wordW = Math.round((wordH * WORD_W) / WORD_H);
  const wordFilter = WORDMARK_FILTER[tone];
  return (
    <span
      aria-label="Mexus Advisory"
      className={cn("inline-flex shrink-0 items-center gap-3", className)}
    >
      <Image
        src="/brand/dorado-mark.png"
        alt=""
        width={markW}
        height={size}
        priority
        style={{ width: markW, height: size }}
      />
      <Image
        src="/brand/dorado-wordmark.png"
        alt=""
        width={wordW}
        height={wordH}
        priority
        style={{ width: wordW, height: wordH, filter: wordFilter }}
      />
    </span>
  );
}
