import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery · Maharana Pratap Bhawan, Chamba" },
      {
        name: "description",
        content:
          "Gallery at Maharana Pratap Bhawan — an event venue and homestay in Adarsh Nagar, Hardaspura, Chamba, Himachal Pradesh.",
      },
      { property: "og:title", content: "Gallery · Maharana Pratap Bhawan, Chamba" },
      {
        property: "og:description",
        content:
          "Gallery at Maharana Pratap Bhawan — event halls and homestay rooms in Chamba, Himachal Pradesh.",
      },
    ],
  }),
  component: () => <PagePlaceholder title="Gallery" />,
});
