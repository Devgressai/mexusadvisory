import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Tone = "paper" | "bone" | "navy";
type Size = "hero" | "standard" | "compact";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  tone?: Tone;
  size?: Size;
  children: ReactNode;
}

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  bone: "bg-bone text-ink",
  navy: "bg-navy-900 text-paper",
};

const sizeClass: Record<Size, string> = {
  hero: "py-24 md:py-32 lg:py-40",
  standard: "py-20 md:py-24 lg:py-32",
  compact: "py-14 md:py-16 lg:py-20",
};

export function Section({
  tone = "paper",
  size = "standard",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section className={cn(toneClass[tone], sizeClass[size], "relative", className)} {...rest}>
      {children}
    </section>
  );
}
