import { Mail, Phone } from "lucide-react";
import { agents } from "@/data/agents";

export function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Our Agents
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            The people you'll actually work with.
          </h2>
          <p className="mt-3 text-primary-foreground/75">
            A small team by design — every client works directly with a senior
            broker from first tour to closing table.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((a) => (
            <div
              key={a.id}
              className="overflow-hidden rounded-xl bg-background text-foreground"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={a.photo}
                  alt={a.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary">
                  {a.name}
                </h3>
                <p className="text-sm font-medium text-gold">{a.role}</p>
                <div className="mt-4 space-y-2 text-sm text-foreground/80">
                  <a
                    href={`tel:${a.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-gold" />
                    {a.phone}
                  </a>
                  <a
                    href={`mailto:${a.email}`}
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <Mail className="h-4 w-4 text-gold" />
                    <span className="truncate">{a.email}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}