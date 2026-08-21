import { Link } from "@tanstack/react-router";
import { Users, BedDouble, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { previewRooms } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

/** Section 6 — warm, editorial room preview (max 3 rooms). */
export function HomestayPreview() {
  return (
    <section className="section-y container-page">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow={`${siteConfig.homestay.roomCount} registered homestay rooms`}
          title="Stay a Little Longer"
          description="Simple, comfortable rooms looked after by the family — for wedding guests, travellers and anyone who wants an unhurried morning in Chamba."
        />
        <AnimatedSection reveal="fade" delay={120}>
          <Button asChild variant="outline" size="lg">
            <Link to="/homestay">View All {siteConfig.homestay.roomCount} Rooms</Link>
          </Button>
        </AnimatedSection>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {previewRooms.map((room, i) => (
          <AnimatedSection
            key={room.slug}
            reveal="up"
            delay={i * 130}
            className={i === 1 ? "lg:mt-10" : i === 2 ? "lg:mt-20" : undefined}
          >
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow duration-500 hover:shadow-elegant">
              <div className="media-zoom relative">
                <img
                  src={room.image}
                  alt={`Homestay ${room.roomNumber} at Maharana Pratap Bhawan`}
                  loading="lazy"
                  width={1200}
                  height={900}
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

                <p className="mt-6 border-t border-border pt-5 font-display text-xl text-gold">
                  {room.price}
                  <span className="ml-1 font-sans text-xs tracking-wide text-muted-foreground">
                    per night
                  </span>
                </p>

                <div className="mt-6 flex gap-3">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <Link to="/homestay">View Room</Link>
                  </Button>
                  <Button asChild variant="gold" size="sm" className="flex-1">
                    <Link to="/homestay">Book Now</Link>
                  </Button>
                </div>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
