import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import wedding from "@/assets/occasion-wedding.jpg";
import birthday from "@/assets/occasion-birthday.jpg";
import dham from "@/assets/occasion-dham.jpg";
import familyPhoto from "@/assets/occasion-family.jpg";
import hall from "@/assets/hall-interior.jpg";
import roomOne from "@/assets/homestay-room-hero.jpg";
import roomTwo from "@/assets/room-two.jpg";
import roomThree from "@/assets/room-three.jpg";
import exterior from "@/assets/property-exterior.jpg";
import valley from "@/assets/chamba-valley.jpg";
import decor from "@/assets/detail-decor.jpg";
import hero from "@/assets/hero-celebration.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery · Maharana Pratap Bhawan, Chamba" },
      {
        name: "description",
        content:
          "Photographs of our event halls, homestay rooms, celebrations and the property in Adarsh Nagar, Hardaspura, Chamba, Himachal Pradesh.",
      },
      { property: "og:title", content: "Gallery · Maharana Pratap Bhawan, Chamba" },
      {
        property: "og:description",
        content:
          "Weddings, dham, birthdays, homestay rooms and quiet corners of our Chamba property.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

type Category = "Halls" | "Homestay" | "Celebrations" | "Property";

const images: { src: string; alt: string; category: Category; tall?: boolean }[] = [
  { src: hero, alt: "Evening celebration under draped lights", category: "Celebrations", tall: true },
  { src: hall, alt: "Event hall set up with tables and chairs", category: "Halls" },
  { src: wedding, alt: "Wedding rituals with marigold garlands", category: "Celebrations", tall: true },
  { src: roomOne, alt: "Homestay room with wooden ceiling", category: "Homestay" },
  { src: exterior, alt: "Property exterior in Chamba", category: "Property", tall: true },
  { src: birthday, alt: "Birthday celebration with a cake", category: "Celebrations" },
  { src: roomTwo, alt: "Twin-bed homestay room", category: "Homestay" },
  { src: dham, alt: "Traditional Himachali dham being served", category: "Celebrations", tall: true },
  { src: roomThree, alt: "Homestay room with a mountain-facing window", category: "Homestay" },
  { src: decor, alt: "Marigold and brass decor detail", category: "Property" },
  { src: familyPhoto, alt: "Family gathered outside the property", category: "Celebrations" },
  { src: valley, alt: "Hills and rooftops of Chamba valley", category: "Property", tall: true },
];

const filters = ["All", "Halls", "Homestay", "Celebrations", "Property"] as const;

function GalleryPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = active === "All" ? images : images.filter((i) => i.category === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments Made Here"
        description="Celebrations in the halls, quiet mornings in the rooms and the everyday warmth in between."
        image={wedding}
        imageAlt="Wedding celebration at Maharana Pratap Bhawan"
      />

      <section className="section-y container-page">
        <SectionHeading
          eyebrow="Browse"
          title="A Look Around the Property"
          description="Photographs will be replaced with real event and room photography as it becomes available."
        />

        <AnimatedSection reveal="fade" className="mt-10 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={cn(
                "rounded-full border px-5 py-2 text-sm transition-colors duration-300",
                active === f
                  ? "border-gold bg-gold text-gold-foreground"
                  : "border-border bg-card text-brown hover:border-gold/60 hover:text-brown-dark",
              )}
            >
              {f}
            </button>
          ))}
        </AnimatedSection>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {shown.map((img, i) => (
            <AnimatedSection
              key={`${active}-${img.src}-${i}`}
              reveal="zoom"
              delay={(i % 6) * 80}
              className="media-zoom group mb-5 break-inside-avoid overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={cn("w-full object-cover", img.tall ? "aspect-3/4" : "aspect-4/3")}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-y bg-secondary/60 text-center">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Your turn"
            title="Add Your Celebration to This Wall"
          />
          <AnimatedSection reveal="fade" className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild variant="gold" size="xl">
              <Link to="/halls">Enquire for a Hall</Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/homestay">Book a Room</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
