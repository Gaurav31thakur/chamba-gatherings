import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import wedding from "@/assets/occasion-wedding.jpg";
import birthday from "@/assets/occasion-birthday.jpg";
import dham from "@/assets/occasion-dham.jpg";
import family from "@/assets/occasion-family.jpg";

/** Section 4 — occasions as an editorial collage, not six identical cards. */
export function Occasions() {
  return (
    <section className="section-y container-page">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <SectionHeading
          eyebrow="Occasions"
          title="Made for Life's Special Moments"
          description="Every gathering has its own rhythm. Our spaces adapt to the celebration you have in mind."
        />
        <AnimatedSection reveal="fade" delay={120}>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
            {[
              "Weddings",
              "Birthday Parties",
              "Retirement Celebrations",
              "Dham",
              "Family Functions",
              "Gatherings",
            ].map((label) => (
              <li
                key={label}
                className="font-display text-xl text-brown-dark/70 transition-colors hover:text-gold sm:text-2xl"
              >
                {label}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-12">
        <AnimatedSection reveal="up" className="col-span-2 lg:col-span-5">
          <figure className="media-zoom relative overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={wedding}
              alt="Bride and groom exchanging marigold garlands"
              loading="lazy"
              width={900}
              height={1200}
              className="aspect-3/4 w-full object-cover"
            />
            <figcaption className="absolute bottom-0 w-full bg-gradient-overlay p-6 font-display text-2xl text-ivory">
              Weddings
            </figcaption>
          </figure>
        </AnimatedSection>

        <div className="col-span-2 grid gap-4 sm:gap-6 lg:col-span-7">
          <AnimatedSection reveal="up" delay={100}>
            <figure className="media-zoom relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={birthday}
                alt="Family celebrating a birthday around a cake in the hall"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-16/10 w-full object-cover"
              />
              <figcaption className="absolute bottom-0 w-full bg-gradient-overlay p-6 font-display text-2xl text-ivory">
                Birthdays & Retirements
              </figcaption>
            </figure>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <AnimatedSection reveal="up" delay={180}>
              <figure className="media-zoom relative overflow-hidden rounded-3xl shadow-elegant">
                <img
                  src={dham}
                  alt="Traditional Himachali dham served in brass utensils"
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="aspect-4/5 w-full object-cover sm:aspect-square"
                />
                <figcaption className="absolute bottom-0 w-full bg-gradient-overlay p-5 font-display text-xl text-ivory">
                  Dham
                </figcaption>
              </figure>
            </AnimatedSection>
            <AnimatedSection reveal="up" delay={260}>
              <figure className="media-zoom relative overflow-hidden rounded-3xl shadow-elegant">
                <img
                  src={family}
                  alt="Multigenerational family gathering in the courtyard"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-4/5 w-full object-cover sm:aspect-square"
                />
                <figcaption className="absolute bottom-0 w-full bg-gradient-overlay p-5 font-display text-xl text-ivory">
                  Family Functions
                </figcaption>
              </figure>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
