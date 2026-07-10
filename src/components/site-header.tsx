import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#properties", label: "Properties" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Agents" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground">
            <span className="font-display text-lg">P</span>
          </span>
          <span className="truncate font-display text-xl font-semibold tracking-tight text-primary">
            Prime Estates
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90">
            <a href="#contact">Book a Viewing</a>
          </Button>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-gold text-gold-foreground hover:bg-gold/90"
              onClick={() => setOpen(false)}
            >
              <a href="#contact">Book a Viewing</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}