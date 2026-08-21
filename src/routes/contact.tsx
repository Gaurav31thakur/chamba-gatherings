import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Maharana Pratap Bhawan, Chamba" },
      {
        name: "description",
        content:
          "Contact at Maharana Pratap Bhawan — an event venue and homestay in Adarsh Nagar, Hardaspura, Chamba, Himachal Pradesh.",
      },
      { property: "og:title", content: "Contact · Maharana Pratap Bhawan, Chamba" },
      {
        property: "og:description",
        content:
          "Contact at Maharana Pratap Bhawan — event halls and homestay rooms in Chamba, Himachal Pradesh.",
      },
    ],
  }),
  component: () => <PagePlaceholder title="Contact" />,
});
