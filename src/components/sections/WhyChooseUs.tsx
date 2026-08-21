import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import decor from "@/assets/detail-decor.jpg";
import family from "@/assets/occasion-family.jpg";

const reasons = [
  { title: "Event spaces and accommodation together", note: "One property, two needs answered." },
  { title: "Family hospitality", note: "Looked after by the family, not a front desk." },
  { title: "Made for family gatherings", note: "From small functions to full celebrations." },
  { title: "Convenient Chamba location", note: "Adarsh Nagar, Hardaspura." },
  { title: "Event support", note: "[Support details — to be confirmed]" },
  { title: "Parking", note: "[Parking details — to be confirmed]" },
  { title: "Comfortable homestay", note: "Six registered rooms." },
  { title: "Traditional celebrations welcome", note: "Dham and local customs at home here." },
];

/** Section 7 — typographic list paired with photography. */
export function WhyChooseUs() {
  return (
    <section className="section-y bg-secondary/60">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Why families choose us"
            title="Hospitality That Feels Personal"
            description="Not a checklist of services — just the things we genuinely take care of for every guest."
          />
          <AnimatedSection reveal="left" delay={140} className="relative mt-12 hidden lg:block">
            <div className="media-zoom overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={family}
                alt="Family welcomed at the property courtyard"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <div className="media-zoom absolute -top-10 -right-8 w-36 overflow-hidden rounded-2xl border-4 border-ivory shadow-lift">
              <img
                src={decor}
                alt="Celebration decor detail"
                loading="lazy"
                width={900}
                height={900}
                className="aspect-square w-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {reasons.map((r, i) => (
            <AnimatedSection
              key={r.title}
              as="li"
              reveal="up"
              delay={i * 70}
              className="group flex items-baseline gap-5 py-5 transition-colors hover:bg-ivory/60"
            >
              <span className="font-display text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-display text-xl text-brown-dark sm:text-2xl">
                  {r.title}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{r.note}</span>
              </span>
            </AnimatedSection>
          ))}
        </ul>
      </div>
    </section>
  );
}
