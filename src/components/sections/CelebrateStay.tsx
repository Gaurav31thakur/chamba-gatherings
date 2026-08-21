import { Link } from "@tanstack/react-router";
import { PartyPopper, BedDouble, Sunrise } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const journey = [
  {
    icon: PartyPopper,
    title: "Celebrate",
    copy: "Music, food and family in the hall — for as long as the evening lasts.",
  },
  {
    icon: BedDouble,
    title: "Stay",
    copy: "Walk a few steps to a warm room instead of a long drive home.",
  },
  {
    icon: Sunrise,
    title: "Wake Up in Chamba",
    copy: "Morning light, quiet hills and breakfast with the people you love.",
  },
];

/** Section 5 — connects the two offerings. */
export function CelebrateStay() {
  return (
    <section className="relative overflow-hidden bg-gradient-earth">
      <div
        aria-hidden
        className="animate-float absolute -top-20 right-0 size-72 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="section-y container-page relative">
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="Events + Stay"
          title="Celebrate Without Rushing Home"
          description="From the last song of the celebration to a peaceful night's rest, everything can happen under one roof."
        />

        <ol className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6">
          {journey.map((step, i) => (
            <AnimatedSection
              key={step.title}
              reveal="up"
              delay={i * 140}
              as="li"
              className="relative text-center md:text-left"
            >
              <span className="inline-flex size-14 items-center justify-center rounded-full border border-ivory/20 bg-ivory/5 text-gold">
                <step.icon className="size-6" />
              </span>
              <p className="mt-5 text-xs tracking-[0.24em] text-beige/70 uppercase">
                Step {i + 1}
              </p>
              <h3 className="mt-2 font-display text-2xl text-ivory">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-beige/75">{step.copy}</p>
              {i < journey.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-7 -right-3 hidden h-px w-6 bg-ivory/25 md:block"
                />
              )}
            </AnimatedSection>
          ))}
        </ol>

        <AnimatedSection reveal="fade" delay={200} className="mt-14 text-center md:text-left">
          <Button asChild variant="gold" size="xl">
            <Link to="/homestay">Explore Our Homestay</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
