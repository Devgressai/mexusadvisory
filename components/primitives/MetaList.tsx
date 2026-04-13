import { cn } from "@/lib/cn";

interface MetaListProps {
  items: Array<{ label: string; value: string }>;
  tone?: "ink" | "paper";
  className?: string;
}

export function MetaList({ items, tone = "ink", className }: MetaListProps) {
  const labelColor = tone === "paper" ? "text-paper/50" : "text-ink-muted";
  const valueColor = tone === "paper" ? "text-paper" : "text-ink";
  const borderColor = tone === "paper" ? "border-paper/15" : "border-rule";

  return (
    <dl className={cn(className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={cn(
            "grid grid-cols-[1fr_auto] items-baseline gap-6 border-t py-5 last:border-b",
            borderColor,
          )}
        >
          <dt className={cn("eyebrow", labelColor)}>{item.label}</dt>
          <dd
            className={cn(
              "font-display text-[1.125rem] tracking-[-0.01em]",
              valueColor,
            )}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
