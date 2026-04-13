import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface LinkArrowProps {
  href: string;
  children: ReactNode;
  tone?: "navy" | "paper";
  className?: string;
}

export function LinkArrow({ href, children, tone = "navy", className }: LinkArrowProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-baseline gap-3 text-[0.9375rem] font-medium tracking-[0.01em]",
        tone === "navy" ? "text-navy-900" : "text-paper",
        className,
      )}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden
          className={cn(
            "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100",
            "bg-gold",
          )}
        />
      </span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
