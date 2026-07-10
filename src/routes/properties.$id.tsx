import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Bath, BedDouble, MapPin, Ruler, Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { properties, formatPrice } from "@/data/properties";
import { agents } from "@/data/agents";

export const Route = createFileRoute("/properties/$id")({
  loader: ({ params }) => {
    const property = properties.find((p) => p.id === params.id);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Property not found — Prime Estates" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.property;
    return {
      meta: [
        { title: `${p.title} — Prime Estates` },
        { name: "description", content: `${p.title} in ${p.location}. ${p.bedrooms} bed · ${p.bathrooms} bath · ${p.sqft.toLocaleString()} sqft.` },
        { property: "og:title", content: `${p.title} — Prime Estates` },
        { property: "og:description", content: p.description },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  component: PropertyDetail,
  notFoundComponent: NotFound,
});

function PropertyDetail() {
  const { property } = Route.useLoaderData();
  const agent = agents[0];
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to listings
        </Link>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border">
          <img
            src={property.image}
            alt={property.title}
            width={1200}
            height={800}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {property.type}
                </span>
                <h1 className="mt-1 font-display text-3xl font-semibold text-primary sm:text-4xl">
                  {property.title}
                </h1>
                <p className="mt-2 flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {property.location}
                </p>
              </div>
              <div className="shrink-0 rounded-lg bg-primary px-4 py-2 font-display text-2xl font-semibold text-primary-foreground">
                {formatPrice(property.price)}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 border-y border-border py-5 text-sm">
              <span className="flex items-center gap-2"><BedDouble className="h-4 w-4 text-gold" />{property.bedrooms} bedrooms</span>
              <span className="flex items-center gap-2"><Bath className="h-4 w-4 text-gold" />{property.bathrooms} bathrooms</span>
              <span className="flex items-center gap-2"><Ruler className="h-4 w-4 text-gold" />{property.sqft.toLocaleString()} sqft</span>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85">{property.description}</p>
            <h2 className="mt-10 font-display text-2xl font-semibold text-primary">Features</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {property.features.map((f: string) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground/85">
                  <Check className="h-4 w-4 text-gold" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-2xl border border-border bg-secondary/40 p-6">
            <div className="flex items-center gap-3">
              <img src={agent.photo} alt={agent.name} className="h-14 w-14 rounded-full object-cover" />
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold text-primary">{agent.name}</p>
                <p className="text-xs text-gold">{agent.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Reach out to schedule a private tour or request the full property brochure.
            </p>
            <div className="mt-5 space-y-2">
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={`mailto:${agent.email}`}>Email {agent.name.split(" ")[0]}</a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href={`tel:${agent.phone.replace(/\D/g, "")}`}>Call {agent.phone}</a>
              </Button>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-semibold text-primary">Property not found</h1>
        <p className="mt-3 text-muted-foreground">This listing may have been sold or removed.</p>
        <Link to="/" className="mt-6 inline-flex text-sm font-semibold text-gold hover:underline">
          Back to all listings →
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}