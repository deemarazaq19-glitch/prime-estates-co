import heroHouse from "@/assets/hero-house.jpg";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";
import p7 from "@/assets/property-7.jpg";
import p8 from "@/assets/property-8.jpg";

export type PropertyType = "house" | "apartment" | "villa";

export type Property = {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: PropertyType;
  image: string;
  description: string;
  features: string[];
};

export const heroImage = heroHouse;

export const properties: Property[] = [
  {
    id: "seaside-villa",
    title: "Seaside Modernist Villa",
    price: 2450000,
    location: "Malibu, CA",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    type: "villa",
    image: p1,
    description:
      "A crisp white-stucco villa steps from the sand, framed by palms and anchored by a full-length lap pool. Floor-to-ceiling glass opens the living pavilion to a sun-washed terrace.",
    features: ["Private pool", "Ocean breeze", "Chef's kitchen", "3-car garage", "Smart home"],
  },
  {
    id: "downtown-loft",
    title: "The Larchmont Residence",
    price: 1290000,
    location: "Downtown, Chicago",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1850,
    type: "apartment",
    image: p2,
    description:
      "A boutique glass tower in the heart of the loop. Warm-lit interiors, private balconies, and a 24-hour concierge define city living.",
    features: ["Concierge", "Rooftop terrace", "Fitness center", "Pet friendly"],
  },
  {
    id: "stonebrook-manor",
    title: "Stonebrook Family Manor",
    price: 875000,
    location: "Naperville, IL",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3600,
    type: "house",
    image: p3,
    description:
      "A stately stone-and-shake residence on a quiet cul-de-sac. Formal living, a chef's kitchen, and a landscaped yard perfect for entertaining.",
    features: ["Corner lot", "Finished basement", "Attached garage", "Top-rated schools"],
  },
  {
    id: "cliffside-retreat",
    title: "Cliffside Ocean Retreat",
    price: 3980000,
    location: "Big Sur, CA",
    bedrooms: 4,
    bathrooms: 5,
    sqft: 5100,
    type: "villa",
    image: p4,
    description:
      "Perched above the Pacific with a glass-edged infinity pool. Sunsets from every room and a private path to the shoreline below.",
    features: ["Infinity pool", "Ocean views", "Wine cellar", "Guest house"],
  },
  {
    id: "maplewood-craftsman",
    title: "Maplewood Craftsman",
    price: 545000,
    location: "Portland, OR",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    type: "house",
    image: p5,
    description:
      "A warmly restored craftsman with a wraparound porch, original millwork, and a garden bursting into autumn color.",
    features: ["Front porch", "Original details", "Detached studio", "Walk-to-park"],
  },
  {
    id: "skyline-penthouse",
    title: "Skyline Penthouse 47B",
    price: 4250000,
    location: "Midtown, New York",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 3200,
    type: "apartment",
    image: p6,
    description:
      "Wraparound floor-to-ceiling windows frame the Manhattan skyline. Bleached oak floors, private elevator, and a chef's kitchen.",
    features: ["Private elevator", "Skyline views", "Doorman", "Sky lounge"],
  },
  {
    id: "olive-grove-villa",
    title: "Olive Grove Villa",
    price: 1150000,
    location: "Sonoma, CA",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3400,
    type: "villa",
    image: p7,
    description:
      "A Mediterranean-inspired estate wrapped in olive trees and terracotta courtyards. Ideal for slow mornings and long harvest dinners.",
    features: ["Courtyard", "Olive grove", "Guest casita", "Outdoor kitchen"],
  },
  {
    id: "brickworks-loft",
    title: "Brickworks Loft",
    price: 725000,
    location: "Brooklyn, NY",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1600,
    type: "apartment",
    image: p8,
    description:
      "An industrial-era brick building reimagined as light-filled lofts. Exposed steel, oversized windows, and a private balcony.",
    features: ["Loft ceilings", "Exposed brick", "Balcony", "Bike storage"],
  },
];

export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}