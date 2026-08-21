import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealKind = "up" | "left" | "right" | "fade" | "zoom";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** Direction of the entrance animation. */
  reveal?: RevealKind;
  /** Stagger delay in milliseconds. */
  delay?: number;
  as?: ElementType;
  id?: string;
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
