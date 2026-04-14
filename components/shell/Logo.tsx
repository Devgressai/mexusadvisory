import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  /** Rendered height of the owl mark in pixels. */
  size?: number;
  className?: string;
}

// Source asset intrinsic dimensions
const MARK_W = 1679;
const MARK_H = 1099;
const WORD_W = 1650;
const WORD_H = 527;

export function Logo({ size = 44, className }: LogoProps) {
  const markW = Math.round((size * MARK_W) / MARK_H);
  // Scale wordmark so its height is ~55% of the mark height — visually balanced
  const wordH = Math.round(size * 0.55);
  const wordW = Math.round((wordH * WORD_W) / WORD_H);
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
        style={{ width: wordW, height: wordH }}
      />
    </span>
  );
}
