import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealKind = "up" | "left" | "right" | "fade" | "zoom";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string | undefined;
  /** Direction of the entrance animation. */
  reveal?: RevealKind | undefined;
  /** Stagger delay in milliseconds. */
  delay?: number | undefined;
  as?: ElementType | undefined;
  id?: string | undefined;
}

/**
 * Wraps content in a scroll-triggered entrance animation.
 * Driven by the global Intersection Observer in `useReveal()`.
 */
export function AnimatedSection({
  children,
  className,
  reveal = "up",
  delay = 0,
  as: Tag = "div",
  id,
}: AnimatedSectionProps) {
  return (
    <Tag
      id={id}
      data-reveal={reveal}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
