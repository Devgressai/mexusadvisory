"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/cn";

interface HairlineDrawProps {
  tone?: "gold" | "rule" | "paper";
  delay?: number;
  className?: string;
}

const toneClass = {
  gold: "bg-gold",
  rule: "bg-rule",
  paper: "bg-paper",
} as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function HairlineDraw({ tone = "gold", delay = 0, className }: HairlineDrawProps) {
  return (
    <m.span
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease, delay }}
      style={{ transformOrigin: "left" }}
      className={cn("block h-px w-full", toneClass[tone], className)}
    />
  );
}
