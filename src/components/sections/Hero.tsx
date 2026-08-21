import { Link } from "@tanstack/react-router";
import { MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import heroImage from "@/assets/hero-celebration.jpg";

/** Section 1 — cinematic hero. */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={heroImage}
        alt="Evening celebration at Maharana Pratap Bhawan, decorated with marigolds and warm lights"
        width={1920}
        height={1200}
        className="absolute inset-0 size-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-overlay" />
      <div
        aria-hidden
        className="absolute inset-0 bg-earth/25 mix-blend-multiply"
      />

      <div className="container-page relative w-full pb-20 sm:pb-28">
        <div className="max-w-3xl">
          <p className="eyebrow flex animate-[fade-in_1s_ease-out_both] items-center gap-3 text-beige">
            <span aria-hidden className="h-px w-10 bg-beige/70" />
            {siteConfig.kicker}
          </p>

          <h1 className="mt-6 animate-[fade-up_1s_cubic-bezier(0.22,1,0.36,1)_0.1s_both] text-4xl leading-[1.03] text-balance-display text-ivory sm:text-6xl lg:text-7xl">
            Celebrate. Stay.
            <span className="block text-beige italic">Make Memories.</span>
          </h1>

          <p className="mt-6 max-w-xl animate-[fade-up_1s_cubic-bezier(0.22,1,0.36,1)_0.25s_both] text-base leading-relaxed text-ivory/85 sm:text-lg">
            From unforgettable celebrations to comfortable stays, {siteConfig.name} welcomes you with
            warm hospitality in the heart of Chamba.
          </p>

          <div className="mt-10 flex animate-[fade-up_1s_cubic-bezier(0.22,1,0.36,1)_0.4s_both] flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/halls">Explore Our Halls</Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/homestay">Book Your Stay</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-xs tracking-[0.18em] text-ivory/70 uppercase">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-beige" />
              {siteConfig.address.region}
            </span>
            <span aria-hidden className="hidden h-px w-16 bg-ivory/30 sm:block" />
            <span>{siteConfig.homestay.roomCount} Homestay Rooms</span>
          </div>
        </div>

        <a
          href="#welcome"
          className="mt-14 inline-flex items-center gap-3 text-xs tracking-[0.24em] text-ivory/70 uppercase transition-colors hover:text-ivory"
        >
          <span className="inline-flex size-10 animate-bounce items-center justify-center rounded-full border border-ivory/40">
            <ArrowDown className="size-4" />
          </span>
          Scroll
        </a>
      </div>
    </section>
  );
}
