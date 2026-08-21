import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { facilities } from "@/lib/content";

/** Section 9 — facilities as a warm typographic strip. */
export function FacilitiesStrip() {
  return (
    <section className="section-y container-page">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionHeading
          eyebrow="Facilities"
          title="Everything a Gathering Needs"
          description="A practical list, kept honest. Details still being confirmed are marked as placeholders."
        />

        <AnimatedSection reveal="right">
          <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {facilities.map((f, i) => (
              <li
                key={f}
                style={{ "--reveal-delay": `${i * 45}ms` } as React.CSSProperties}
                data-reveal="fade"
                className="flex items-center justify-between gap-4 border-b border-border py-4 text-brown-dark"
              >
                <span className="font-display text-lg">{f}</span>
                <span aria-hidden className="size-1.5 rounded-full bg-gold" />
              </li>
            ))}
          </ul>
          <Link
            to="/facilities"
            className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold"
          >
            See all facilities <ArrowUpRight className="size-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
