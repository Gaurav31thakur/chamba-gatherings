import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";

/** Section 11 — location + configurable map embed. */
export function LocationSection() {
  const { embedUrl, placeUrl, directionsUrl } = siteConfig.maps;

  return (
    <section className="section-y container-page">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Location" title="Find Us in Chamba" />
          <AnimatedSection reveal="up" delay={100} className="mt-8">
            <p className="flex gap-3 text-base text-brown-dark">
              <MapPin className="mt-1 size-5 shrink-0 text-gold" />
              <span>
                <span className="block font-display text-xl">{siteConfig.name}</span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </span>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild={!!directionsUrl} variant="default" size="lg" disabled={!directionsUrl}>
                {directionsUrl ? (
                  <a href={directionsUrl} target="_blank" rel="noreferrer">
                    <Navigation className="size-4" /> Directions
                  </a>
                ) : (
                  <span>
                    <Navigation className="size-4" /> Directions
                  </span>
                )}
              </Button>
              <Button asChild={!!placeUrl} variant="outline" size="lg" disabled={!placeUrl}>
                {placeUrl ? (
                  <a href={placeUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="size-4" /> Open in Google Maps
                  </a>
                ) : (
                  <span>
                    <ExternalLink className="size-4" /> Open in Google Maps
                  </span>
                )}
              </Button>
            </div>

            {!placeUrl && (
              <p className="mt-4 text-xs text-muted-foreground">
                [Google Maps link — to be added in site settings]
              </p>
            )}
          </AnimatedSection>
        </div>

        <AnimatedSection reveal="right">
          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={`Map showing ${siteConfig.name}, Chamba`}
                loading="lazy"
                className="h-[340px] w-full sm:h-[440px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-[340px] w-full flex-col items-center justify-center gap-3 bg-secondary text-center sm:h-[440px]">
                <MapPin className="size-8 text-gold" />
                <p className="font-display text-xl text-brown-dark">Map placeholder</p>
                <p className="max-w-xs text-sm text-muted-foreground">
                  [Google Maps embed URL — to be added]
                </p>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
