import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities · Maharana Pratap Bhawan, Chamba" },
      {
        name: "description",
        content:
          "Facilities at Maharana Pratap Bhawan — an event venue and homestay in Adarsh Nagar, Hardaspura, Chamba, Himachal Pradesh.",
      },
      { property: "og:title", content: "Facilities · Maharana Pratap Bhawan, Chamba" },
      {
        property: "og:description",
        content:
          "Facilities at Maharana Pratap Bhawan — event halls and homestay rooms in Chamba, Himachal Pradesh.",
      },
    ],
  }),
  component: () => <PagePlaceholder title="Facilities" />,
});
