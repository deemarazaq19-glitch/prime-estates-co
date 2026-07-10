import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-gold text-gold-foreground">
              <span className="font-display text-lg">P</span>
            </span>
            <span className="font-display text-xl font-semibold">Prime Estates</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            A boutique brokerage helping clients find, buy, and sell
            exceptional homes since 2000.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#properties" className="hover:text-gold">Properties</a></li>
            <li><a href="#about" className="hover:text-gold">About us</a></li>
            <li><a href="#team" className="hover:text-gold">Agents</a></li>
            <li><a href="#contact" className="hover:text-gold">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>418 Marine Drive, Suite 12</li>
            <li>Malibu, CA 90265</li>
            <li>(310) 555-0100</li>
            <li>hello@primeestates.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
            Follow
          </h4>
          <div className="mt-4 flex gap-3">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Facebook, label: "Facebook" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/25 text-primary-foreground/80 transition-colors hover:border-gold hover:text-gold"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Prime Estates. All rights reserved.</span>
          <span>Licensed real estate brokerage · DRE #01234567</span>
        </div>
      </div>
    </footer>
  );
}