import roomOne from "@/assets/homestay-room-hero.jpg";
import roomTwo from "@/assets/room-two.jpg";
import roomThree from "@/assets/room-three.jpg";
import hallInterior from "@/assets/hall-interior.jpg";
import weddingHall from "@/assets/occasion-wedding.jpg";

/**
 * Editable placeholder content for the homepage.
 * Real room names, numbers, prices and amenities must be confirmed by the owner.
 */

export interface RoomPreview {
  slug: string;
  name: string;
  roomNumber: string;
  image: string;
  capacity: string;
  beds: string;
  bathroom: string;
  amenities: string[];
  price: string;
}

export const previewRooms: RoomPreview[] = [
  {
    slug: "room-1",
    name: "[Room name]",
    roomNumber: "Room 01",
    image: roomOne,
    capacity: "[Guests]",
    beds: "[Beds]",
    bathroom: "[Bathroom type]",
    amenities: ["[Amenity]", "[Amenity]", "[Amenity]"],
    price: "[Price per night]",
  },
  {
    slug: "room-2",
    name: "[Room name]",
    roomNumber: "Room 02",
    image: roomTwo,
    capacity: "[Guests]",
    beds: "[Beds]",
    bathroom: "[Bathroom type]",
    amenities: ["[Amenity]", "[Amenity]", "[Amenity]"],
    price: "[Price per night]",
  },
  {
    slug: "room-3",
    name: "[Room name]",
    roomNumber: "Room 03",
    image: roomThree,
    capacity: "[Guests]",
    beds: "[Beds]",
    bathroom: "[Bathroom type]",
    amenities: ["[Amenity]", "[Amenity]", "[Amenity]"],
    price: "[Price per night]",
  },
];

export const facilities = [
  "Event Hall",
  "Homestay Rooms",
  "Parking",
  "Wi-Fi",
  "Hot Water",
  "Attached Bathrooms",
  "Dining / Dham Support",
  "Power Backup",
  "Decoration Support",
  "Family Friendly",
  "Outdoor Space",
  "Dining Area",
] as const;

/* ---------- Halls ---------- */

export interface Hall {
  slug: string;
  name: string;
  image: string;
  capacity: string;
  bestFor: string[];
  description: string;
  features: string[];
}

export const halls: Hall[] = [
  {
    slug: "main-hall",
    name: "Main Hall",
    image: hallInterior,
    capacity: "[Seating capacity — to be confirmed]",
    bestFor: ["Weddings", "Receptions", "Large family functions"],
    description:
      "Our largest space, used for weddings, receptions and big family gatherings. Open floor with room for dining, seating and a stage area.",
    features: [
      "Stage / seating arrangement",
      "Dining space",
      "Decoration support",
      "[Air cooling — to be confirmed]",
      "Power backup",
      "Parking access",
    ],
  },
  {
    slug: "banquet-hall",
    name: "Banquet Hall",
    image: weddingHall,
    capacity: "[Seating capacity — to be confirmed]",
    bestFor: ["Birthdays", "Dham", "Ceremonies", "Meetings"],
    description:
      "A warmer, more intimate hall for birthdays, dham, ring ceremonies and smaller gatherings where everyone can sit together.",
    features: [
      "Flexible seating",
      "Dham / dining support",
      "Sound & lighting friendly",
      "Attached washrooms",
      "Family-friendly layout",
      "Easy loading access",
    ],
  },
];

export const occasionsList = [
  "Weddings",
  "Receptions",
  "Engagements & Ring Ceremonies",
  "Birthday Parties",
  "Retirement Functions",
  "Dham & Traditional Feasts",
  "Family Get-togethers",
  "Community & Religious Functions",
] as const;

/* ---------- Homestay ---------- */

export const rooms: RoomPreview[] = [
  ...previewRooms,
  {
    slug: "room-4",
    name: "[Room name]",
    roomNumber: "Room 04",
    image: roomTwo,
    capacity: "[Guests]",
    beds: "[Beds]",
    bathroom: "[Bathroom type]",
    amenities: ["[Amenity]", "[Amenity]", "[Amenity]"],
    price: "[Price per night]",
  },
  {
    slug: "room-5",
    name: "[Room name]",
    roomNumber: "Room 05",
    image: roomThree,
    capacity: "[Guests]",
    beds: "[Beds]",
    bathroom: "[Bathroom type]",
    amenities: ["[Amenity]", "[Amenity]", "[Amenity]"],
    price: "[Price per night]",
  },
  {
    slug: "room-6",
    name: "[Room name]",
    roomNumber: "Room 06",
    image: roomOne,
    capacity: "[Guests]",
    beds: "[Beds]",
    bathroom: "[Bathroom type]",
    amenities: ["[Amenity]", "[Amenity]", "[Amenity]"],
    price: "[Price per night]",
  },
];

/* ---------- Facilities, grouped ---------- */

export const facilityGroups = [
  {
    title: "Event Facilities",
    items: [
      "Two event halls",
      "Stage & seating arrangement",
      "Decoration support",
      "Dham & catering space",
      "Sound and lighting friendly",
      "Loading & vendor access",
    ],
  },
  {
    title: "Homestay Comforts",
    items: [
      "6 registered rooms",
      "Attached bathrooms",
      "Hot water",
      "Fresh linen & housekeeping",
      "Wi-Fi",
      "Mountain-facing windows",
    ],
  },
  {
    title: "Everyday Essentials",
    items: [
      "Parking",
      "Power backup",
      "Drinking water",
      "Family-friendly spaces",
      "Outdoor / open area",
      "Assistance from the family on site",
    ],
  },
] as const;

/* ---------- FAQ ---------- */

export const faqs = [
  {
    q: "How do I book a hall?",
    a: "Send an enquiry with your date, occasion and guest count. We confirm availability and share pricing directly with you.",
  },
  {
    q: "Are hall prices fixed?",
    a: "Hall bookings are enquiry-based — the final amount depends on the date, hall, duration and arrangements you need.",
  },
  {
    q: "Are the room prices final?",
    a: "Room rates shown are estimates. The final rate is confirmed when we respond to your booking request.",
  },
  {
    q: "Can event guests also stay at the homestay?",
    a: "Yes. That is exactly why both exist at the same property — guests can celebrate and stay a few steps away.",
  },
  {
    q: "Do you support dham and traditional functions?",
    a: "Yes. Dham and local ceremonies are very much at home here. Share the details in your enquiry.",
  },
] as const;
