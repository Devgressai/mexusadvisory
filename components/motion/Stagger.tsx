"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const child = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

export function Stagger({ children, className }: StaggerProps) {
  return (
    <m.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className }: StaggerProps) {
  return (
    <m.div variants={child} className={cn(className)}>
      {children}
    </m.div>
  );
}
