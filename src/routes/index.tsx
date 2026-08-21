import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { TwoExperiences } from "@/components/sections/TwoExperiences";
import { Occasions } from "@/components/sections/Occasions";
import { CelebrateStay } from "@/components/sections/CelebrateStay";
import { HomestayPreview } from "@/components/sections/HomestayPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ChambaSection } from "@/components/sections/ChambaSection";
import { FacilitiesStrip } from "@/components/sections/FacilitiesStrip";
import { GalleryTeaser } from "@/components/sections/GalleryTeaser";
import { LocationSection } from "@/components/sections/LocationSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maharana Pratap Bhawan · Event Hall & Homestay in Chamba" },
      {
        name: "description",
        content:
          "Celebrate. Stay. Make Memories. A family-run event hall and 6-room homestay in Adarsh Nagar, Hardaspura, Chamba, Himachal Pradesh.",
      },
      { property: "og:title", content: "Maharana Pratap Bhawan · Event Hall & Homestay in Chamba" },
      {
        property: "og:description",
        content:
          "Weddings, birthdays, dham and family functions — plus six homestay rooms at the same property in Chamba, Himachal Pradesh.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Introduction />
      <TwoExperiences />
      <Occasions />
      <CelebrateStay />
      <HomestayPreview />
      <WhyChooseUs />
      <ChambaSection />
      <FacilitiesStrip />
      <GalleryTeaser />
      <LocationSection />
      <FinalCTA />
    </>
  );
}
