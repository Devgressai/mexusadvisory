import Link from "next/link";
import { cn } from "@/lib/cn";

interface BreadcrumbProps {
  items: Array<{ label: string; href?: string }>;
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("eyebrow flex flex-wrap items-center gap-2", className)}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link href={item.href} className="text-ink-muted hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span aria-current={isLast ? "page" : undefined} className="text-ink">
                {item.label}
              </span>
            )}
            {!isLast && (
              <span aria-hidden className="text-gold">
                ·
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
