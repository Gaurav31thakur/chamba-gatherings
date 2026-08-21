import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Maharana Pratap Bhawan, Chamba" },
      {
        name: "description",
        content:
          "About at Maharana Pratap Bhawan — an event venue and homestay in Adarsh Nagar, Hardaspura, Chamba, Himachal Pradesh.",
      },
      { property: "og:title", content: "About · Maharana Pratap Bhawan, Chamba" },
      {
        property: "og:description",
        content:
          "About at Maharana Pratap Bhawan — event halls and homestay rooms in Chamba, Himachal Pradesh.",
      },
    ],
  }),
  component: () => <PagePlaceholder title="About" />,
});
