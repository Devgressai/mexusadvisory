"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { revealSoft, revealUp, revealStagger } from "./editorial";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  as?: "div" | "section" | "article" | "header" | "p" | "li";
  delay?: number;
  variant?: "up" | "soft" | "stagger";
  className?: string;
}

/**
 * Declarative wrapper around the editorial motion primitives. Single entry
 * point for page-level reveal behavior; keeps all components using the same
 * motion contract.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  variant = "up",
  className,
}: RevealProps) {
  const Tag = m[as];
  const spec =
    variant === "soft"
      ? revealSoft
      : variant === "stagger"
        ? revealStagger
        : revealUp;

  return (
    <Tag
      {...spec}
      transition={{ ...spec.transition, delay }}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
