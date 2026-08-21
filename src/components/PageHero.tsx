import type { ReactNode } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { siteConfig } from "@/lib/site-config";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}

/** Shared editorial page header with full-bleed photography. */
export function PageHero({
  eyebrow = siteConfig.address.region,
  title,
  description,
  image,
  imageAlt,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <span aria-hidden className="absolute inset-0 -z-10 bg-earth/72" />

      <div className="container-page pt-40 pb-20 sm:pt-48 sm:pb-28">
        <AnimatedSection className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3 text-beige">
            <span aria-hidden className="h-px w-8 bg-beige/60" />
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-beige/85">{description}</p>
          ) : null}
          {children ? <div className="mt-10 flex flex-wrap gap-4">{children}</div> : null}
        </AnimatedSection>
      </div>
    </section>
  );
}
