import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import valley from "@/assets/chamba-valley.jpg";
import { siteConfig } from "@/lib/site-config";

/** Section 8 — sense of place. */
export function ChambaSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={valley}
        alt="Misty hills and rooftops of Chamba, Himachal Pradesh"
        loading="lazy"
        width={1600}
        height={1000}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <span aria-hidden className="absolute inset-0 -z-10 bg-earth/70" />

      <div className="section-y container-page">
        <AnimatedSection reveal="fade" className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3 text-beige">
            <span aria-hidden className="h-px w-8 bg-beige/60" />
            {siteConfig.address.region}
          </p>
          <h2 className="mt-4 text-3xl leading-[1.1] text-ivory sm:text-4xl lg:text-5xl">
            Rooted in Chamba
          </h2>
          <p className="mt-6 text-base leading-relaxed text-beige/85">
            Chamba moves at its own pace — hills on every side, quiet mornings and neighbours who
            still greet each other by name. Our hospitality comes from the same place: unhurried,
            familiar and generous.
          </p>
          <p className="mt-4 text-base leading-relaxed text-beige/85">
            {siteConfig.address.line1}, {siteConfig.address.line2}.
          </p>
          <Button asChild variant="hero" size="xl" className="mt-10">
            <Link to="/contact">Find Us</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
