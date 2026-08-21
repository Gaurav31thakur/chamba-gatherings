import { siteConfig } from "@/lib/site-config";
import { AnimatedSection } from "./AnimatedSection";

/** Temporary shell for pages built in later phases. */
export function PagePlaceholder({ title }: { title: string }) {
  return (
    <section className="section-y container-page pt-36">
      <AnimatedSection className="max-w-xl">
        <p className="eyebrow">{siteConfig.address.region}</p>
        <h1 className="mt-4 text-4xl text-brown-dark sm:text-5xl">{title}</h1>
        <p className="mt-5 text-muted-foreground">
          This page is part of a later build phase and will be designed next.
        </p>
      </AnimatedSection>
    </section>
  );
}
