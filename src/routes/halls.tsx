import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { HallEnquiryForm } from "@/components/forms/HallEnquiryForm";
import { halls, occasionsList } from "@/lib/content";
import hallInterior from "@/assets/hall-interior.jpg";

export const Route = createFileRoute("/halls")({
  head: () => ({
    meta: [
      { title: "Event Halls in Chamba · Maharana Pratap Bhawan" },
      {
        name: "description",
        content:
          "Two event halls in Chamba for weddings, birthdays, retirement functions and dham. Enquiry-based booking with personal support from the family.",
      },
      { property: "og:title", content: "Event Halls in Chamba · Maharana Pratap Bhawan" },
      {
        property: "og:description",
        content:
          "Host weddings, receptions, dham and family functions at Maharana Pratap Bhawan, Adarsh Nagar, Hardaspura, Chamba.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HallsPage,
});

function HallsPage() {
  return (
    <>
      <PageHero
        eyebrow="Event Halls · Chamba"
        title="Halls Made for Big Days"
        description="Weddings, receptions, birthdays, dham and everything in between. Tell us the date and the occasion — we'll take care of the space."
        image={hallInterior}
        imageAlt="Event hall arranged for a celebration"
      >
        <Button asChild variant="hero" size="xl">
          <a href="#enquiry">Send an Enquiry</a>
        </Button>
        <Button asChild variant="heroOutline" size="xl">
          <Link to="/gallery">See the Gallery</Link>
        </Button>
      </PageHero>

      <section className="section-y container-page">
        <SectionHeading
          eyebrow="Our spaces"
          title="Two Halls, One Property"
          description="Both halls sit on the same property as our homestay rooms, so your guests never have to travel far after the function."
        />

        <div className="mt-16 space-y-20">
          {halls.map((hall, i) => (
            <div
              key={hall.slug}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <AnimatedSection
                reveal={i % 2 === 0 ? "left" : "right"}
                className={`media-zoom overflow-hidden rounded-3xl shadow-elegant ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={hall.image}
                  alt={`${hall.name} at Maharana Pratap Bhawan`}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              </AnimatedSection>

              <AnimatedSection reveal={i % 2 === 0 ? "right" : "left"}>
                <p className="eyebrow">Hall {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-3xl text-brown-dark sm:text-4xl">
                  {hall.name}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {hall.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">
                    <Users className="size-4 text-gold" /> {hall.capacity}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">
                    <Sparkles className="size-4 text-gold" /> {hall.bestFor.join(" · ")}
                  </span>
                </div>

                <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {hall.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-brown-dark">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button asChild variant="gold" size="lg" className="mt-9">
                  <a href="#enquiry">Enquire About {hall.name}</a>
                </Button>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-secondary/60">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Occasions"
            title="What People Celebrate Here"
            description="If your function isn't on this list, it almost certainly still fits. Ask us."
          />
          <AnimatedSection reveal="right">
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {occasionsList.map((o) => (
                <li
                  key={o}
                  className="flex items-center justify-between gap-4 border-b border-border py-4 font-display text-lg text-brown-dark"
                >
                  {o}
                  <span aria-hidden className="size-1.5 rounded-full bg-gold" />
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-y container-page">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="How booking works"
              title="Enquiry First, Always"
              description="Hall bookings are not priced online — every function is different, so we prefer to understand yours before quoting."
            />
            <ol className="mt-10 space-y-6">
              {[
                "Send your date, occasion and expected guest count.",
                "We check availability and call you back.",
                "We share pricing and arrangements for your function.",
                "Confirm the date, and we hold the hall for you.",
              ].map((step, i) => (
                <AnimatedSection
                  key={step}
                  as="li"
                  reveal="up"
                  delay={i * 100}
                  className="flex gap-4"
                >
                  <span className="font-display text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-brown-dark">{step}</span>
                </AnimatedSection>
              ))}
            </ol>
          </div>

          <AnimatedSection reveal="up" id="enquiry" className="scroll-mt-28">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-elegant sm:p-10">
              <h2 className="font-display text-2xl text-brown-dark sm:text-3xl">
                Hall Enquiry
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Share a few details and we'll get back with availability and pricing.
              </p>
              <div className="mt-8">
                <HallEnquiryForm />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
