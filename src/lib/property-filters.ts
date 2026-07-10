import type { Property, PropertyType } from "@/data/properties";

export type SearchState = {
  location: string;
  maxPrice: number | null;
  minBeds: number | null;
  types: PropertyType[];
  sort: "featured" | "price-asc" | "price-desc";
};

export const defaultSearch: SearchState = {
  location: "",
  maxPrice: null,
  minBeds: null,
  types: [],
  sort: "featured",
};

export function applyFilters(list: Property[], s: SearchState): Property[] {
  const q = s.location.trim().toLowerCase();
  let out = list.filter((p) => {
    if (q && !p.location.toLowerCase().includes(q) && !p.title.toLowerCase().includes(q)) {
      return false;
    }
    if (s.maxPrice != null && p.price > s.maxPrice) return false;
    if (s.minBeds != null && p.bedrooms < s.minBeds) return false;
    if (s.types.length > 0 && !s.types.includes(p.type)) return false;
    return true;
  });
  if (s.sort === "price-asc") out = [...out].sort((a, b) => a.price - b.price);
  else if (s.sort === "price-desc") out = [...out].sort((a, b) => b.price - a.price);
  return out;
}