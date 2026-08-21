import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { publicNav, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";

/** Warm deep-brown footer: editorial masthead + compact link rails. */
export function Footer() {
  return (
    <footer className="bg-gradient-earth text-ivory">
      <div className="container-page py-16 md:py-20">
        <AnimatedSection className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-beige">{siteConfig.kicker}</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ivory sm:text-4xl">
              {siteConfig.name}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-beige/80">
              A family-run event venue and {siteConfig.homestay.roomCount}-room homestay in Chamba —
              one place to gather, celebrate and rest.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/halls">Hall Enquiry</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/homestay">Book a Room</Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 text-sm text-beige/85 sm:grid-cols-2">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </p>
              <div className="space-y-3">
                <p className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>{siteConfig.contact.phone}</span>
                </p>
                <p className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>{siteConfig.contact.email}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:border-l lg:border-ivory/12 lg:pl-16">
            <nav aria-label="Footer">
              <h3 className="text-xs font-semibold tracking-[0.24em] text-beige uppercase">
                Explore
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {publicNav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="link-underline text-ivory/80 transition-colors hover:text-ivory"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="text-xs font-semibold tracking-[0.24em] text-beige uppercase">
                Visit & Follow
              </h3>
              <p className="mt-5 text-sm text-beige/70">
                Map link: <span className="text-ivory/60">[Google Maps link — to be added]</span>
              </p>
              <p className="mt-3 text-sm text-beige/70">
                Timings: <span className="text-ivory/60">{siteConfig.contact.timings}</span>
              </p>
              <div className="mt-6 flex gap-3">
                {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                  <span
                    key={i}
                    aria-hidden
                    className="inline-flex size-10 items-center justify-center rounded-full border border-ivory/20 text-beige/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="size-4" />
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-beige/50">[Social links — to be added]</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/12 pt-6 text-xs text-beige/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.address.region}</p>
        </div>
      </div>
    </footer>
  );
}
