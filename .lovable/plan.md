
# Prime Estates — Real Estate Agency Website

A polished, trustworthy real estate site with navy/white/gold palette, functional property filtering, and responsive layout across all sections.

## Design system

Update `src/styles.css` tokens:
- Background: warm white (#fdfcf9)
- Foreground / primary: deep navy (~oklch(0.22 0.05 260))
- Accent: gold/beige (~oklch(0.78 0.11 80))
- Muted: soft beige
- Serif display font (Playfair Display) for headings + Inter for body, loaded via `<link>` in `__root.tsx` head
- Update `__root.tsx` metadata: title "Prime Estates — Luxury Homes & Real Estate", matching description and OG tags

## Routes

Single-page marketing site with anchor scroll between sections (Hero, Properties, About, Team, Contact) plus separate detail route:

- `src/routes/index.tsx` — main landing (all sections)
- `src/routes/properties.$id.tsx` — property detail page (image, full description, features, agent contact, back link). Own `head()` with property-specific title, description, and og:image.

Shared header nav links scroll to sections on `/`. Footer with social + contact.

## Property data

Local seed data in `src/data/properties.ts` — 8–10 properties with:
`id, title, price, location, bedrooms, bathrooms, sqft, type (house|apartment|villa), image, description, features[]`

Team data in `src/data/agents.ts` — 3 agents with photo, name, role, phone, email.

Images generated via `imagegen` and saved to `src/assets/` (hero house, ~8 property photos, 3 agent portraits).

## Components

Under `src/components/`:
- `SiteHeader.tsx` — sticky nav, logo, anchor links, mobile menu
- `Hero.tsx` — full-bleed background image, headline, `SearchBar`
- `SearchBar.tsx` — location text, price range select, bedrooms select; on submit scrolls to Properties and applies filters via state
- `PropertyFilters.tsx` — price range + property type toggle group + sort dropdown (price asc/desc, newest)
- `PropertyCard.tsx` — clickable card linking to `/properties/$id`
- `FeaturedProperties.tsx` — reads filter state, renders responsive grid (1/2/3 cols)
- `About.tsx` — agency blurb + 3 "why choose us" cards (Trusted, Experienced, Local Experts) with icons
- `Team.tsx` — 3 agent cards
- `Contact.tsx` — zod-validated inquiry form (name/email/message) with toast on submit + office address block with map placeholder
- `SiteFooter.tsx` — logo, quick links, contact, socials

Filter/search state lives in the index route component (React `useState`) and is passed to `FeaturedProperties`. `SearchBar` submit updates the same state and scrolls to `#properties`.

## Forms & validation

Contact form uses `react-hook-form` + `zod` (already in stack). No backend — submit shows a success toast via existing `sonner`. Trim + length limits on all fields.

## Responsive

- Mobile-first Tailwind
- Hero: stacked search on mobile, inline row on md+
- Property grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Header collapses to hamburger sheet on mobile
- Follow grid + `min-w-0` + `shrink-0` pattern for header rows

## Out of scope

- No backend / Lovable Cloud (all data is local seed data)
- No real map integration (static address block; can add later)
- No authentication or saved favorites

## File checklist

New:
- `src/routes/properties.$id.tsx`
- `src/data/properties.ts`, `src/data/agents.ts`
- `src/components/site-header.tsx`, `site-footer.tsx`, `hero.tsx`, `search-bar.tsx`, `property-filters.tsx`, `property-card.tsx`, `featured-properties.tsx`, `about.tsx`, `team.tsx`, `contact.tsx`
- Generated images in `src/assets/`

Modified:
- `src/routes/__root.tsx` — metadata, font `<link>`
- `src/routes/index.tsx` — replace placeholder with full landing
- `src/styles.css` — palette + font tokens
