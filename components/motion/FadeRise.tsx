"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface FadeRiseProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header" | "p" | "span";
}

const ease = [0.22, 1, 0.36, 1] as const;

export function FadeRise({ children, delay = 0, className, as = "div" }: FadeRiseProps) {
  const Comp = m[as];
  return (
    <Comp
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease, delay }}
      className={cn(className)}
    >
      {children}
    </Comp>
  );
}
