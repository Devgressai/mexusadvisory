import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Tone = "paper" | "mist" | "bone" | "navy";
type Size = "hero" | "spacious" | "standard" | "compact" | "tight";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  tone?: Tone;
  size?: Size;
  children: ReactNode;
}

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  mist: "bg-mist text-ink",
  bone: "bg-bone text-ink",
  navy: "bg-navy-900 text-paper",
};

// Varied rhythm — editorial, not uniform
const sizeClass: Record<Size, string> = {
  hero: "pt-40 pb-32 md:pt-48 md:pb-40 lg:pt-56 lg:pb-48",
  spacious: "py-32 md:py-40 lg:py-52",
  standard: "py-24 md:py-28 lg:py-32",
  compact: "py-20 md:py-24 lg:py-28",
  tight: "py-16 md:py-20 lg:py-24",
};

export function Section({
  tone = "paper",
  size = "standard",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(toneClass[tone], sizeClass[size], "relative", className)}
      {...rest}
    >
      {children}
    </section>
  );
}
