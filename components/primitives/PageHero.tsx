import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { GoldRule } from "./Rule";
import { Breadcrumb } from "./Breadcrumb";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  meta?: string;
  breadcrumb?: Array<{ label: string; href?: string }>;
  className?: string;
}

export function PageHero({ eyebrow, title, lede, meta, breadcrumb, className }: PageHeroProps) {
  return (
    <section className={cn("pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-32", className)}>
      <Container>
        {breadcrumb && <Breadcrumb items={breadcrumb} className="mb-10" />}
        {eyebrow && <Eyebrow className="mb-8">{eyebrow}</Eyebrow>}
        <h1 className="font-display text-h1 max-w-5xl text-ink">{title}</h1>
        {lede && (
          <p className="text-lead mt-8 max-w-2xl text-ink-muted">{lede}</p>
        )}
        {meta && <p className="mt-10 eyebrow text-ink-muted">{meta}</p>}
        <div className="mt-14 max-w-[6rem]">
          <GoldRule />
        </div>
      </Container>
    </section>
  );
}
