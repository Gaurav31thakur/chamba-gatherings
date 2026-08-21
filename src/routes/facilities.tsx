import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { facilityGroups, faqs } from "@/lib/content";
import hallInterior from "@/assets/hall-interior.jpg";
import decor from "@/assets/detail-decor.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities · Maharana Pratap Bhawan, Chamba" },
      {
        name: "description",
        content:
          "Event halls, six homestay rooms, parking, power backup, hot water, Wi-Fi and dham support at Maharana Pratap Bhawan in Chamba, Himachal Pradesh.",
      },
      { property: "og:title", content: "Facilities · Maharana Pratap Bhawan, Chamba" },
      {
        property: "og:description",
        content:
          "Everything available at our Chamba venue and homestay — event facilities, room comforts and everyday essentials.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Everything a Gathering Needs"
        description="A practical, honest list of what the property offers — for celebrations and for stays."
        image={hallInterior}
        imageAlt="Interior of the event hall set up for guests"
      />

      <section className="section-y container-page">
        <div className="space-y-16">
          {facilityGroups.map((group, gi) => (
            <div key={group.title} className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
              <AnimatedSection reveal="left">
                <p className="eyebrow">{String(gi + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-display text-3xl text-brown-dark sm:text-4xl">
                  {group.title}
                </h2>
              </AnimatedSection>

              <AnimatedSection reveal="right">
                <ul className="grid gap-x-10 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-border py-4 text-brown-dark"
                    >
                      <Check className="size-4 shrink-0 text-gold" />
                      <span className="font-display text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-secondary/60">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <AnimatedSection reveal="left">
            <SectionHeading eyebrow="Questions" title="Frequently Asked" />
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-lg text-brown-dark hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>

          <AnimatedSection reveal="right" className="media-zoom overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={decor}
              alt="Marigold garlands and brass lamp decor detail"
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="section-y container-page text-center">
        <SectionHeading
          align="center"
          eyebrow="Still deciding?"
          title="Ask Us Anything"
          description="If something you need isn't listed here, it's worth asking — most things can be arranged."
        />
        <AnimatedSection reveal="fade" className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild variant="gold" size="xl">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <Link to="/halls">Hall Enquiry</Link>
          </Button>
        </AnimatedSection>
      </section>
    </>
  );
}
