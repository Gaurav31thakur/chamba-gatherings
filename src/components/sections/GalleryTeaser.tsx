import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import wedding from "@/assets/occasion-wedding.jpg";
import hall from "@/assets/hall-interior.jpg";
import room from "@/assets/room-two.jpg";
import dham from "@/assets/occasion-dham.jpg";
import exterior from "@/assets/property-exterior.jpg";
import birthday from "@/assets/occasion-birthday.jpg";

const shots = [
  { src: wedding, caption: "Weddings", span: "sm:row-span-2" },
  { src: hall, caption: "Halls", span: "" },
  { src: birthday, caption: "Celebrations", span: "" },
  { src: room, caption: "Homestay", span: "" },
  { src: dham, caption: "Dham", span: "sm:row-span-2" },
  { src: exterior, caption: "Property", span: "" },
];

/** Section 10 — masonry-style gallery teaser. */
export function GalleryTeaser() {
  return (
    <section className="section-y bg-secondary/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments Made Here"
          description="Celebrations, quiet corners and everyday warmth around the property."
        />

        <div className="mt-14 grid auto-rows-[170px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-3 sm:gap-5 lg:auto-rows-[230px]">
          {shots.map((shot, i) => (
            <AnimatedSection
              key={i}
              reveal="zoom"
              delay={i * 90}
              className={`media-zoom group relative overflow-hidden rounded-2xl shadow-soft ${shot.span}`}
            >
              <img
                src={shot.src}
                alt={`${shot.caption} at Maharana Pratap Bhawan`}
                loading="lazy"
                className="size-full object-cover"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-overlay opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="absolute bottom-4 left-5 translate-y-2 text-sm font-medium tracking-wide text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {shot.caption}
              </span>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection reveal="fade" className="mt-12 text-center">
          <Button asChild variant="default" size="lg">
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
