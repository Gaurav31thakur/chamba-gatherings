import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import hall from "@/assets/hall-interior.jpg";
import room from "@/assets/homestay-room-hero.jpg";

const experiences = [
  {
    title: "Event Halls",
    image: hall,
    alt: "Event hall prepared with round tables for a family function",
    description:
      "Beautiful spaces for weddings, birthdays, retirement celebrations, dham and family gatherings.",
    cta: "Explore Halls",
    to: "/halls" as const,
  },
  {
    title: "Homestay",
    image: room,
    alt: "Warm homestay bedroom with mountain views",
    description: "Six comfortable homestay rooms for families, travellers and event guests.",
    cta: "Explore Rooms",
    to: "/homestay" as const,
  },
];

/** Section 3 — two large immersive experience blocks. */
export function TwoExperiences() {
  return (
    <section className="section-y bg-secondary/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Two experiences, one address"
          title="Celebrate With Us. Stay With Us."
          description="A hall filled with music and a quiet room upstairs — both belong to the same evening."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {experiences.map((item, i) => (
            <AnimatedSection
              key={item.title}
              reveal="up"
              delay={i * 140}
              className={i === 1 ? "lg:mt-16" : undefined}
            >
              <Link
                to={item.to}
                className="media-zoom group relative block overflow-hidden rounded-3xl shadow-elegant"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  width={1100}
                  height={1400}
                  className="aspect-4/5 w-full object-cover sm:aspect-3/4"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-overlay" />
                <span className="absolute inset-x-0 bottom-0 block p-7 sm:p-10">
                  <span className="block font-display text-3xl text-ivory sm:text-4xl">
                    {item.title}
                  </span>
                  <span className="mt-3 block max-w-sm text-sm leading-relaxed text-ivory/80">
                    {item.description}
                  </span>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-beige transition-transform duration-300 group-hover:translate-x-1">
                    {item.cta}
                    <ArrowUpRight className="size-4" />
                  </span>
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
