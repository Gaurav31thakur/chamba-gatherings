import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { LocationSection } from "@/components/sections/LocationSection";
import { HallEnquiryForm } from "@/components/forms/HallEnquiryForm";
import { RoomBookingForm } from "@/components/forms/RoomBookingForm";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import exterior from "@/assets/property-exterior.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us · Maharana Pratap Bhawan, Chamba" },
      {
        name: "description",
        content:
          "Contact Maharana Pratap Bhawan in Adarsh Nagar, Hardaspura, Chamba — hall enquiries, homestay booking requests, address and directions.",
      },
      { property: "og:title", content: "Contact Us · Maharana Pratap Bhawan, Chamba" },
      {
        property: "og:description",
        content:
          "Send a hall enquiry or a homestay booking request, or find directions to our Chamba property.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [tab, setTab] = useState<"hall" | "stay">("hall");

  const details = [
    {
      icon: MapPin,
      label: "Address",
      value: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      href: siteConfig.maps.placeUrl,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.contact.phone,
      href: siteConfig.contact.phoneHref,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contact.email,
      href: siteConfig.contact.emailHref,
    },
    { icon: Clock, label: "Timings", value: siteConfig.contact.timings, href: "" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Plan It Together"
        description="Whether it's a wedding in the hall or a quiet night in one of our rooms — tell us what you need and we'll reply personally."
        image={exterior}
        imageAlt="Maharana Pratap Bhawan property in Chamba"
      />

      <section className="section-y container-page">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Reach us" title="Get in Touch" />
            <ul className="mt-10 space-y-7">
              {details.map((d, i) => (
                <AnimatedSection
                  key={d.label}
                  as="li"
                  reveal="up"
                  delay={i * 90}
                  className="flex gap-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                    <d.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      {d.label}
                    </span>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="link-underline mt-1 block font-display text-lg text-brown-dark"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <span className="mt-1 block font-display text-lg text-brown-dark">
                        {d.value}
                      </span>
                    )}
                  </span>
                </AnimatedSection>
              ))}
            </ul>
          </div>

          <AnimatedSection reveal="right">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-elegant sm:p-10">
              <div className="flex gap-2 rounded-full bg-secondary p-1.5">
                {(
                  [
                    { id: "hall", label: "Hall Enquiry" },
                    { id: "stay", label: "Room Booking" },
                  ] as const
                ).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTab(t.id)}
                    aria-pressed={tab === t.id}
                    className={cn(
                      "flex-1 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300",
                      tab === t.id
                        ? "bg-gold text-gold-foreground shadow-soft"
                        : "text-brown hover:text-brown-dark",
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                {tab === "hall" ? <HallEnquiryForm /> : <RoomBookingForm />}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <LocationSection />
    </>
  );
}
