import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { publicNav, siteConfig } from "@/lib/site-config";
import { useScrolled } from "@/hooks/use-reveal";

/**
 * Responsive public navbar.
 * Transparent over the hero, warm solid + blur after scroll,
 * animated active link, accessible mobile menu.
 */
export function Navbar() {
  const scrolled = useScrolled(32);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border/70 bg-ivory/85 backdrop-blur-xl shadow-soft"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-18 items-center justify-between gap-6 py-4"
      >
        <Link
          to="/"
          className={cn(
            "font-display text-lg leading-tight tracking-tight transition-colors sm:text-xl",
            overHero ? "text-ivory" : "text-brown-dark",
          )}
        >
          {siteConfig.name}
          <span
            className={cn(
              "block text-[0.6rem] font-sans font-semibold tracking-[0.22em] uppercase",
              overHero ? "text-beige/80" : "text-gold",
            )}
          >
            Event Venue & Homestay
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {publicNav.map((item) => {
            const active = pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  data-active={active}
                  className={cn(
                    "link-underline text-sm font-medium transition-colors",
                    overHero
                      ? "text-ivory/90 hover:text-ivory"
                      : active
                        ? "text-gold"
                        : "text-brown hover:text-gold",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant={overHero ? "heroOutline" : "outline"} size="sm">
            <Link to="/halls">Enquire for Hall</Link>
          </Button>
          <Button asChild variant={overHero ? "hero" : "gold"} size="sm">
            <Link to="/homestay">Book a Room</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden",
            overHero && !open
              ? "border-ivory/40 text-ivory"
              : "border-border text-brown-dark hover:bg-secondary",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="container-page overflow-hidden border-t border-border/60 bg-ivory pb-8 lg:hidden"
      >
        <ul className="flex flex-col py-3">
          {publicNav.map((item, i) => (
            <li key={item.to}>
              <Link
                to={item.to}
                style={{ animationDelay: `${i * 45}ms` }}
                className={cn(
                  "block animate-[fade-up_0.5s_cubic-bezier(0.22,1,0.36,1)_both] border-b border-border/50 py-3.5 font-display text-xl",
                  pathname === item.to ? "text-gold" : "text-brown-dark",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3">
          <Button asChild variant="outline" size="lg">
            <Link to="/halls">Enquire for Hall</Link>
          </Button>
          <Button asChild variant="gold" size="lg">
            <Link to="/homestay">Book a Room</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
