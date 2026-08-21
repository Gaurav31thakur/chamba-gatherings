import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "dark" | "light";
}

/** Editorial section header: eyebrow label, serif title, supporting copy. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "dark",
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        tone === "light" && "text-ivory",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow flex items-center gap-3",
            align === "center" && "justify-center",
            tone === "light" && "text-beige",
          )}
        >
          <span
            aria-hidden
            className={cn("h-px w-8", tone === "light" ? "bg-beige/60" : "bg-gold/50")}
          />
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.1] text-balance-display sm:text-4xl lg:text-5xl",
          tone === "light" ? "text-ivory" : "text-brown-dark",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            tone === "light" ? "text-beige/85" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </AnimatedSection>
  );
}
