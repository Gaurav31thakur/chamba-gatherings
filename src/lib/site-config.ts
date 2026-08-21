/**
 * Central, editable business information.
 * Values marked PLACEHOLDER must be replaced with real details by the owner.
 * Nothing here is invented business data — placeholders stay visible as placeholders.
 */

export const siteConfig = {
  name: "Maharana Pratap Bhawan",
  tagline: "Celebrate. Stay. Make Memories.",
  kicker: "Event Venue & Homestay · Chamba",
  address: {
    line1: "Adarsh Nagar, Hardaspura",
    line2: "Chamba, Himachal Pradesh",
    region: "Chamba · Himachal Pradesh",
  },
  contact: {
    phone: "[Phone number — to be added]",
    phoneHref: "", // e.g. "tel:+91XXXXXXXXXX"
    email: "[Email address — to be added]",
    emailHref: "", // e.g. "mailto:hello@example.com"
    timings: "[Business timings — to be added]",
  },
  maps: {
    // Leave empty until the real Google Maps place link / embed is provided.
    embedUrl: "",
    placeUrl: "",
    directionsUrl: "",
  },
  social: {
    instagram: "",
    facebook: "",
    whatsapp: "",
  },
  homestay: {
    roomCount: 6,
    checkIn: "[Check-in time — to be added]",
    checkOut: "[Check-out time — to be added]",
  },
} as const;

export const publicNav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Halls", to: "/halls" },
  { label: "Homestay", to: "/homestay" },
  { label: "Facilities", to: "/facilities" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
] as const;
