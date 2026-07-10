import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { FeaturedProperties } from "@/components/featured-properties";
import { About } from "@/components/about";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";
import { defaultSearch, type SearchState } from "@/lib/property-filters";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [search, setSearch] = useState<SearchState>(defaultSearch);
  const patch = (p: Partial<SearchState>) => setSearch((s) => ({ ...s, ...p }));

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero onSearch={patch} />
        <FeaturedProperties search={search} onChange={patch} />
        <About />
        <Team />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
