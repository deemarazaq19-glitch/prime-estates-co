import { useState } from "react";
import { z } from "zod";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(200),
  message: z.string().trim().min(10, "A short message helps us respond").max(1000),
});

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValues({ name: "", email: "", message: "" });
      toast.success("Thanks — an agent will reach out within 24 hours.");
    }, 600);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Get in Touch
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl">
              Tell us what you're looking for.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Send a quick note and we'll pair you with the right agent for
              your neighborhood and timeline.
            </p>
            <form onSubmit={submit} className="mt-8 space-y-5" noValidate>
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  className="mt-1.5"
                  maxLength={100}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  className="mt-1.5"
                  maxLength={200}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                )}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => setValues({ ...values, message: e.target.value })}
                  className="mt-1.5"
                  maxLength={1000}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground transition-transform duration-200 hover:bg-primary/90 hover:scale-[1.02] sm:w-auto"
              >
                {submitting ? "Sending…" : "Send inquiry"}
              </Button>
            </form>
          </div>

          <div className="rounded-2xl border border-border bg-secondary/40 p-8">
            <h3 className="font-display text-2xl font-semibold text-primary">
              Visit our office
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Walk-ins welcome during office hours. Reserve a private
              consultation for evenings.
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  418 Marine Drive, Suite 12<br />
                  Malibu, CA 90265
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <a href="tel:+13105550100" className="hover:text-primary">
                  (310) 555-0100
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <a href="mailto:hello@primeestates.com" className="hover:text-primary">
                  hello@primeestates.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  Mon–Fri · 9:00–18:00<br />
                  Sat · 10:00–16:00
                </span>
              </li>
            </ul>
            <div className="mt-6 aspect-[16/10] overflow-hidden rounded-lg border border-border">
              <iframe
                title="Prime Estates office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-118.7803%2C34.0195%2C-118.6803%2C34.0595&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}