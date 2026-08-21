import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/halls")({
  head: () => ({
    meta: [
      { title: "Halls · Maharana Pratap Bhawan, Chamba" },
      {
        name: "description",
        content:
          "Halls at Maharana Pratap Bhawan — an event venue and homestay in Adarsh Nagar, Hardaspura, Chamba, Himachal Pradesh.",
      },
      { property: "og:title", content: "Halls · Maharana Pratap Bhawan, Chamba" },
      {
        property: "og:description",
        content:
          "Halls at Maharana Pratap Bhawan — event halls and homestay rooms in Chamba, Himachal Pradesh.",
      },
    ],
  }),
  component: () => <PagePlaceholder title="Halls" />,
});
