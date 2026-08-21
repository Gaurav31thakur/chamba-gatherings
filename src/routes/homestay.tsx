import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, BedDouble, Bath, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { RoomBookingForm } from "@/components/forms/RoomBookingForm";
import { rooms } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import roomHero from "@/assets/homestay-room-hero.jpg";

export const Route = createFileRoute("/homestay")({
  head: () => ({
    meta: [
      { title: "Homestay in Chamba · 6 Rooms · Maharana Pratap Bhawan" },
      {
        name: "description",
        content:
          "Six registered homestay rooms in Adarsh Nagar, Hardaspura, Chamba. Comfortable, family-run stays with estimated rates and simple booking requests.",
      },
      { property: "og:title", content: "Homestay in Chamba · Maharana Pratap Bhawan" },
      {
        property: "og:description",
        content:
          "Stay in one of six family-run homestay rooms in Chamba, Himachal Pradesh — a few steps from our event halls.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomestayPage,
});

function HomestayPage() {
  return (
    <>
      <PageHero
        eyebrow={`${siteConfig.homestay.roomCount} Registered Rooms · Chamba`}
        title="Stay With Us in Chamba"
        description="Simple, comfortable rooms looked after by the family — for wedding guests, travellers and anyone who wants an unhurried morning in the hills."
        image={roomHero}
        imageAlt="Homestay room with warm wooden interiors and a mountain view"
      >
        <Button asChild variant="hero" size="xl">
          <a href="#booking">Request a Booking</a>
        </Button>
        <Button asChild variant="heroOutline" size="xl">
          <Link to="/facilities">See Facilities</Link>
        </Button>
      </PageHero>

      <section className="section-y container-page">
        <SectionHeading
          eyebrow="Our rooms"
          title="All Six Rooms"
          description="Room names, layouts and rates are being finalised — the placeholders below are ready for the real details."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <AnimatedSection key={room.slug} reveal="up" delay={(i % 3) * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow duration-500 hover:shadow-elegant">
                <div className="media-zoom relative">
                  <img
                    src={room.image}
                    alt={`${room.roomNumber} at Maharana Pratap Bhawan homestay`}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-ivory/90 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-brown-dark uppercase backdrop-blur">
                    {room.roomNumber}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl text-brown-dark">{room.name}</h3>

                  <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <Users className="size-4 text-gold" /> {room.capacity}
                    </li>
                    <li className="flex items-center gap-3">
                      <BedDouble className="size-4 text-gold" /> {room.beds}
                    </li>
                    <li className="flex items-center gap-3">
                      <Bath className="size-4 text-gold" /> {room.bathroom}
                    </li>
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {room.amenities.map((a, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                      >
                        {a}
                      </span>
                    ))}
                  </div>

                  <p className="mt-auto border-t border-border pt-5 font-display text-xl text-gold">
                    {room.price}
                    <span className="ml-1 font-sans text-xs tracking-wide text-muted-foreground">
                      estimated / night
                    </span>
                  </p>

                  <Button asChild variant="gold" size="sm" className="mt-6">
                    <a href="#booking">Request This Room</a>
                  </Button>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-y bg-secondary/60">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Good to know"
            title="Stay Details"
            description="Prices shown are estimates. Final rates are confirmed personally when we reply to your request."
          />
          <AnimatedSection reveal="right">
            <dl className="grid gap-x-10 sm:grid-cols-2">
              {[
                { t: "Check-in", d: siteConfig.homestay.checkIn, icon: Clock },
                { t: "Check-out", d: siteConfig.homestay.checkOut, icon: Clock },
                { t: "Registered rooms", d: `${siteConfig.homestay.roomCount} rooms`, icon: BedDouble },
                { t: "Meals", d: "[Meal options — to be confirmed]", icon: Users },
              ].map((item) => (
                <div key={item.t} className="border-b border-border py-5">
                  <dt className="flex items-center gap-2 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    <item.icon className="size-4 text-gold" />
                    {item.t}
                  </dt>
                  <dd className="mt-2 font-display text-lg text-brown-dark">{item.d}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-muted-foreground">
              House rules, cancellation terms and meal arrangements will be listed here once
              confirmed by the family.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-y container-page">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="center"
            eyebrow="Booking request"
            title="Tell Us Your Dates"
            description="No online payment. We check availability and confirm everything with you directly."
          />
          <AnimatedSection reveal="up" id="booking" className="mt-12 scroll-mt-28">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-elegant sm:p-10">
              <RoomBookingForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
