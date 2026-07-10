import { useState } from "react";
import { Search } from "lucide-react";
import heroImg from "@/assets/hero-house.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SearchState } from "@/lib/property-filters";

type Props = {
  onSearch: (s: Partial<SearchState>) => void;
};

export function Hero({ onSearch }: Props) {
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("any");
  const [beds, setBeds] = useState("any");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    onSearch({
      location: location.trim(),
      maxPrice: maxPrice === "any" ? null : Number(maxPrice),
      minBeds: beds === "any" ? null : Number(beds),
    });
    const el = document.getElementById("properties");
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Modern luxury home at dusk"
        width={1920}
        height={1200}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/70 via-primary/55 to-primary/85" />
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pb-32 lg:pt-40">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-gold">
            Curated by Prime Estates
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl">
            Homes with a sense of place.
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
            Discover a hand-picked collection of residences and work with agents
            who know each street, courtyard and coastline.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="mt-10 grid gap-3 rounded-2xl border border-white/15 bg-background/95 p-4 shadow-2xl backdrop-blur sm:mt-14 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_auto] md:items-end md:gap-3"
        >
          <div className="min-w-0">
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Location
            </label>
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, neighborhood…"
              className="mt-1 h-11 border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
              maxLength={80}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Max price
            </label>
            <Select value={maxPrice} onValueChange={setMaxPrice}>
              <SelectTrigger className="mt-1 h-11 border-0 bg-transparent px-0 text-base shadow-none focus:ring-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any price</SelectItem>
                <SelectItem value="750000">Up to $750K</SelectItem>
                <SelectItem value="1500000">Up to $1.5M</SelectItem>
                <SelectItem value="3000000">Up to $3M</SelectItem>
                <SelectItem value="5000000">Up to $5M</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Bedrooms
            </label>
            <Select value={beds} onValueChange={setBeds}>
              <SelectTrigger className="mt-1 h-11 border-0 bg-transparent px-0 text-base shadow-none focus:ring-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            type="submit"
            className="h-11 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </form>
      </div>
    </section>
  );
}