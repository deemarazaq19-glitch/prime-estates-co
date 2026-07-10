import { Award, HandshakeIcon, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Trusted for 25 years",
    body: "A boutique brokerage with roots in three coastal markets and a spotless client record.",
  },
  {
    icon: Award,
    title: "Award-winning agents",
    body: "Our team consistently ranks in the top 1% for closed luxury transactions.",
  },
  {
    icon: HandshakeIcon,
    title: "Concierge from offer to keys",
    body: "Inspections, staging, financing, and moving day — we coordinate the whole arc.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              About Prime Estates
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-primary sm:text-4xl">
              A steady hand for one of life's biggest decisions.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              Prime Estates was founded on a simple belief: buying or selling a
              home should feel considered, not chaotic. Our agents live in the
              neighborhoods we sell, and every listing gets the same careful
              staging, story, and marketing regardless of price.
            </p>
            <p className="mt-4 text-foreground/70">
              From first-time buyers to multi-generational estates, we bring
              the same discipline to every transaction — clear communication,
              honest counsel, and a network that opens doors most listings
              never reach.
            </p>
          </div>
          <div className="grid gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold">
                  <p.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}