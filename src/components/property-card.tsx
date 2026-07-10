import { Link } from "@tanstack/react-router";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import type { Property } from "@/data/properties";
import { formatPrice } from "@/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      to="/properties/$id"
      params={{ id: property.id }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          width={1200}
          height={800}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          {property.type}
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground">
          {formatPrice(property.price)}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="min-w-0">
          <h3 className="truncate font-display text-xl font-semibold text-primary">
            {property.title}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{property.location}</span>
          </p>
        </div>
        <div className="mt-auto flex items-center gap-4 border-t border-border pt-4 text-sm text-foreground/80">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-gold" />
            {property.bedrooms} bd
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-gold" />
            {property.bathrooms} ba
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4 text-gold" />
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>
        <span className="inline-flex items-center text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
          View Details →
        </span>
      </div>
    </Link>
  );
}