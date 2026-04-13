import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  tone?: "muted" | "gold" | "paper";
  withMarker?: boolean;
  className?: string;
}

const toneClass: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  muted: "text-ink-muted",
  gold: "text-gold",
  paper: "text-paper/70",
};

export function Eyebrow({ children, tone = "muted", withMarker = true, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "eyebrow inline-flex items-center gap-3",
        toneClass[tone],
        className,
      )}
    >
      {withMarker && (
        <span
          aria-hidden
          className={cn(
            "inline-block h-px w-6",
            tone === "gold" ? "bg-gold" : tone === "paper" ? "bg-gold" : "bg-gold/70",
          )}
        />
      )}
      <span>{children}</span>
    </p>
  );
}
