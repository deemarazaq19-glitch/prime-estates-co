import { useMemo } from "react";
import { properties } from "@/data/properties";
import type { PropertyType } from "@/data/properties";
import { applyFilters, type SearchState } from "@/lib/property-filters";
import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const typeOptions: { value: PropertyType; label: string }[] = [
  { value: "house", label: "Houses" },
  { value: "apartment", label: "Apartments" },
  { value: "villa", label: "Villas" },
];

const priceOptions = [
  { value: "any", label: "Any price" },
  { value: "750000", label: "Up to $750K" },
  { value: "1500000", label: "Up to $1.5M" },
  { value: "3000000", label: "Up to $3M" },
  { value: "5000000", label: "Up to $5M" },
];

type Props = {
  search: SearchState;
  onChange: (patch: Partial<SearchState>) => void;
};

export function FeaturedProperties({ search, onChange }: Props) {
  const filtered = useMemo(() => applyFilters(properties, search), [search]);

  function toggleType(t: PropertyType) {
    const has = search.types.includes(t);
    onChange({ types: has ? search.types.filter((x) => x !== t) : [...search.types, t] });
  }

  return (
    <section id="properties" className="scroll-mt-24 bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Featured
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl">
              Homes on the market this week
            </h2>
            <p className="mt-2 text-muted-foreground">
              A refreshed selection from our brokerage, updated as new listings arrive.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "home" : "homes"}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:flex-wrap sm:items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Type
            </span>
            {typeOptions.map((t) => {
              const active = search.types.includes(t.value);
              return (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => toggleType(t.value)}
                  className={
                    "rounded-full border px-3 py-1.5 text-sm transition-colors " +
                    (active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground/80 hover:border-gold")
                  }
                >
                  {t.label}
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:ml-auto">
            <Select
              value={search.maxPrice == null ? "any" : String(search.maxPrice)}
              onValueChange={(v) => onChange({ maxPrice: v === "any" ? null : Number(v) })}
            >
              <SelectTrigger className="w-[160px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {priceOptions.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={search.sort}
              onValueChange={(v) => onChange({ sort: v as SearchState["sort"] })}
            >
              <SelectTrigger className="w-[170px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: low to high</SelectItem>
                <SelectItem value="price-desc">Price: high to low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-xl border border-dashed border-border bg-card p-12 text-center">
            <p className="text-muted-foreground">
              No properties match your filters yet.
            </p>
            <Button
              variant="ghost"
              className="mt-3"
              onClick={() =>
                onChange({ location: "", maxPrice: null, minBeds: null, types: [] })
              }
            >
              Reset filters
            </Button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}