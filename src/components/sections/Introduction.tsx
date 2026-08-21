import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { siteConfig } from "@/lib/site-config";
import exterior from "@/assets/property-exterior.jpg";
import decor from "@/assets/detail-decor.jpg";

/** Section 2 — editorial introduction with overlapping images. */
export function Introduction() {
  return (
    <section id="welcome" className="section-y container-page">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <AnimatedSection reveal="left" className="relative">
          <div className="media-zoom overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={exterior}
              alt="Maharana Pratap Bhawan property exterior in Chamba"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-4/5 w-full object-cover"
            />
          </div>
          <div className="media-zoom absolute -right-4 -bottom-10 hidden w-44 overflow-hidden rounded-2xl border-4 border-ivory shadow-lift sm:block lg:-right-10 lg:w-56">
            <img
              src={decor}
              alt="Marigold garlands and a brass lamp used in celebration decor"
              loading="lazy"
              width={900}
              height={900}
              className="aspect-square w-full object-cover"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection reveal="right">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-gold/50" />
            Welcome
          </p>
          <h2 className="mt-4 text-3xl leading-[1.1] text-brown-dark sm:text-4xl lg:text-5xl">
            Welcome to Maharana Pratap Bhawan
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              We are a family-run venue in Chamba where celebrations and comfortable stays live side
              by side. Weddings, birthdays, retirement gatherings and dham all find a home in our
              halls — and when the day is done, our homestay rooms are just a few steps away.
            </p>
            <p>
              Everything here is looked after personally, the way families in Himachal have always
              welcomed guests: with warmth, patience and a little extra care.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-stretch gap-4">
            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-soft">
              <p className="font-display text-3xl text-gold">Event Venue</p>
              <p className="mt-1 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                Halls for every occasion
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-soft">
              <p className="font-display text-3xl text-gold">
                {siteConfig.homestay.roomCount} Rooms
              </p>
              <p className="mt-1 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                Registered homestay
              </p>
            </div>
          </div>

          <Button asChild variant="default" size="lg" className="mt-10">
            <Link to="/about">Discover Our Story</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
