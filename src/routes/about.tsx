import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Home, Users, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ChambaSection } from "@/components/sections/ChambaSection";
import { siteConfig } from "@/lib/site-config";
import exterior from "@/assets/property-exterior.jpg";
import family from "@/assets/occasion-family.jpg";
import decor from "@/assets/detail-decor.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us · Maharana Pratap Bhawan, Chamba" },
      {
        name: "description",
        content:
          "A family-run event venue and 6-room homestay in Adarsh Nagar, Hardaspura, Chamba — built around Himachali hospitality and celebrations that feel like home.",
      },
      { property: "og:title", content: "About Us · Maharana Pratap Bhawan, Chamba" },
      {
        property: "og:description",
        content:
          "Our story: two event halls, six homestay rooms and a family that looks after every guest personally in Chamba, Himachal Pradesh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "Warmth first",
    copy: "Guests are looked after by the family, not by a script or a front desk.",
  },
  {
    icon: Home,
    title: "One place, two needs",
    copy: "Halls for the celebration and rooms for the night — under a single roof.",
  },
  {
    icon: Users,
    title: "Made for families",
    copy: "Space for elders, children and everyone in between to be comfortable.",
  },
  {
    icon: Mountain,
    title: "Rooted in Himachal",
    copy: "Local customs, dham and traditions are welcome here, not an exception.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        title="A Family Home for Your Celebrations"
        description="Maharana Pratap Bhawan brings together event halls and a registered homestay in Adarsh Nagar, Hardaspura — so that a celebration in Chamba never has to end at the gate."
        image={exterior}
        imageAlt="Maharana Pratap Bhawan property exterior in Chamba"
      >
        <Button asChild variant="hero" size="xl">
          <Link to="/contact">Talk to Us</Link>
        </Button>
        <Button asChild variant="heroOutline" size="xl">
          <Link to="/halls">Explore Our Halls</Link>
        </Button>
      </PageHero>

      <section className="section-y container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <AnimatedSection reveal="left">
            <SectionHeading eyebrow="Our story" title="Built Around Guests, Not Bookings" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Maharana Pratap Bhawan started with a simple idea: families in Chamba needed a place
                where a function could be held properly and where guests travelling in could also
                rest comfortably afterwards.
              </p>
              <p>
                Today the property holds two event halls and {siteConfig.homestay.roomCount}{" "}
                registered homestay rooms. The halls fill with weddings, birthdays, retirement
                functions and dham; the rooms quietly take care of everyone once the music stops.
              </p>
              <p>
                Everything here is still run personally by the family. That means fewer forms, more
                conversation — and someone on site who actually knows what your day needs.
              </p>
              <p className="text-sm text-brown">
                [Founding year and family history — to be added by the owner]
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection reveal="right" className="relative">
            <div className="media-zoom overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={family}
                alt="A family gathered together at the property"
                loading="lazy"
                className="aspect-4/5 w-full object-cover"
              />
            </div>
            <div className="media-zoom absolute -bottom-8 -left-4 hidden w-40 overflow-hidden rounded-2xl border-4 border-ivory shadow-lift sm:block lg:-left-10 lg:w-52">
              <img
                src={decor}
                alt="Marigold and brass decor detail"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-y bg-secondary/60">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="Hospitality, the Himachali Way"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} reveal="up" delay={i * 110}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft transition-shadow duration-500 hover:shadow-elegant">
                  <span className="flex size-12 items-center justify-center rounded-full bg-gold/12 text-gold">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="mt-6 font-display text-xl text-brown-dark">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ChambaSection />

      <section className="section-y container-page text-center">
        <SectionHeading
          align="center"
          eyebrow="Come see the place"
          title="Visits Are Always Welcome"
          description="The easiest way to know if it suits your function is to walk through it. Call ahead and we'll keep time aside for you."
        />
        <AnimatedSection reveal="fade" className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild variant="gold" size="xl">
            <Link to="/contact">Plan a Visit</Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <Link to="/homestay">See the Homestay</Link>
          </Button>
        </AnimatedSection>
      </section>
    </>
  );
}
