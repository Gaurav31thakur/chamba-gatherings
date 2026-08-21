import roomOne from "@/assets/homestay-room-hero.jpg";
import roomTwo from "@/assets/room-two.jpg";
import roomThree from "@/assets/room-three.jpg";

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
