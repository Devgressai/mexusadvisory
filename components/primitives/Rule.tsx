import { cn } from "@/lib/cn";

interface RuleProps {
  tone?: "rule" | "gold" | "ink" | "paper";
  className?: string;
}

const toneClass: Record<NonNullable<RuleProps["tone"]>, string> = {
  rule: "bg-rule",
  gold: "bg-gold",
  ink: "bg-ink/15",
  paper: "bg-paper/15",
};

export function Rule({ tone = "rule", className }: RuleProps) {
  return <div role="presentation" className={cn("h-px w-full", toneClass[tone], className)} />;
}

export function GoldRule({ className }: { className?: string }) {
  return (
    <div
      role="presentation"
      aria-hidden
      className={cn("h-px w-full bg-gold", className)}
    />
  );
}
