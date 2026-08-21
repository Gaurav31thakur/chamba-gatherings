import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import hall from "@/assets/hall-interior.jpg";
import room from "@/assets/room-three.jpg";

const paths = [
  {
    title: "Planning a Celebration?",
    copy: "Tell us the occasion, the date and how many guests — we'll take it from there.",
    cta: "Send Hall Enquiry",
    to: "/halls" as const,
    image: hall,
    alt: "Hall arranged for a celebration",
  },
  {
    title: "Looking for a Comfortable Stay?",
    copy: "Choose your dates and request one of our six homestay rooms.",
    cta: "Book a Room",
    to: "/homestay" as const,
    image: room,
    alt: "Homestay room with two beds and a mountain view",
  },
];

/** Section 12 — two visitor paths. */
export function FinalCTA() {
  return (
    <section className="section-y container-page">
      <SectionHeading
        align="center"
        eyebrow="Get in touch"
        title="What Brings You to Maharana Pratap Bhawan?"
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
        {paths.map((p, i) => (
          <AnimatedSection key={p.title} reveal="up" delay={i * 140}>
            <Link
              to={p.to}
              className="media-zoom group relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl shadow-elegant"
            >
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <span aria-hidden className="absolute inset-0 bg-earth/65" />
              <span className="relative block p-8 sm:p-10">
                <span className="block font-display text-2xl text-ivory sm:text-3xl">
                  {p.title}
                </span>
                <span className="mt-3 block max-w-sm text-sm leading-relaxed text-beige/85">
                  {p.copy}
                </span>
                <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3 text-sm font-medium text-brown-dark transition-transform duration-300 group-hover:-translate-y-0.5">
                  {p.cta}
                  <ArrowUpRight className="size-4" />
                </span>
              </span>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
