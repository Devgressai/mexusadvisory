import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "section" | "header" | "footer" | "article" | "main";
  children: ReactNode;
}

export function Container({
  as: Tag = "div",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn("shell-gutter mx-auto w-full max-w-[1440px]", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
