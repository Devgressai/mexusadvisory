import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface ProseProps {
  children: ReactNode;
  tone?: "ink" | "paper";
  size?: "default" | "lead";
  className?: string;
}

export function Prose({ children, tone = "ink", size = "default", className }: ProseProps) {
  const color = tone === "paper" ? "text-paper/80" : "text-ink-muted";
  const textSize = size === "lead" ? "text-lead" : "text-[1.0625rem] leading-[1.75]";
  return (
    <div
      className={cn(
        "max-w-[68ch] space-y-6",
        textSize,
        color,
        className,
      )}
    >
      {children}
    </div>
  );
}
