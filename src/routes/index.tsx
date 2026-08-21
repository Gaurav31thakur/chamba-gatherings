import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-warm">
      <div
        aria-hidden
        className="animate-float absolute -top-24 -right-24 size-96 rounded-full bg-beige/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 size-80 rounded-full bg-terracotta/10 blur-3xl"
      />

      <div className="container-page relative pt-32 pb-24">
        <AnimatedSection reveal="fade" className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-gold/60" />
            {siteConfig.kicker}
          </p>
          <h1 className="mt-6 text-4xl leading-[1.05] text-balance-display text-brown-dark sm:text-6xl lg:text-7xl">
            Celebrate. Stay.
            <span className="block text-gold italic">Make Memories.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From unforgettable celebrations to comfortable stays, {siteConfig.name} welcomes you with
            warm hospitality in the heart of Chamba.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="earth" size="xl">
              <Link to="/halls">Explore Our Halls</Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/homestay">Book Your Stay</Link>
            </Button>
          </div>
          <p className="mt-14 text-sm text-muted-foreground">
            {siteConfig.address.line1} · {siteConfig.address.line2}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
