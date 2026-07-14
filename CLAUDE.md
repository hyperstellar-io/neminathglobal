# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server
npm run build      # production build
npm run lint       # ESLint
npm run format     # Prettier
```

There are no tests in this project.

## Architecture

**Stack:** React 19 + TanStack Start (SSR) + TanStack Router (file-based) + Tailwind CSS v4 + Framer Motion

### Routing

File-based routing lives in `src/routes/`. `routeTree.gen.ts` is **auto-generated** — never edit it manually. See `src/routes/README.md` for file-naming conventions. The root layout (`__root.tsx`) wraps every page and includes `Navbar`, `Footer`, and `LenisProvider`.

### Design System

Custom design tokens are defined in `src/styles.css` via Tailwind v4's `@theme inline` block:

- `bg-obsidian` / `bg-obsidian-soft` — near-black backgrounds (`#050507`, `#0b0b10`)
- `text-cyan-glow` / `text-cyan-deep` — primary accent colors (`#22d3ee`, `#0891b2`)
- Font: **Plus Jakarta Sans** (weights 300/400/500/600/800)

No shadcn/ui components are currently installed (`src/components/ui/` was removed as unused — the site is hand-built with plain Tailwind classes). `components.json` is still configured, so add one on demand with `npx shadcn@latest add <name>` if a route needs it.

### Custom Components

- `Reveal` / `RevealStagger` — scroll-triggered fade-up animations (Framer Motion, `viewport: once`)
- `PageHero` — shared hero section for inner pages (eyebrow + title + subtitle)
- `SectionLabel` — small all-caps eyebrow label
- `MagneticButton` — hover-tracking button with spring physics
- `AnimatedCounter` — viewport-triggered number counter
- `LenisProvider` — smooth scroll (Lenis), mounts once in root layout
- `WorldMap` — SVG world map component for the global presence section

### SSR / Server

`src/server.ts` wraps TanStack Start's server entry to handle catastrophic SSR errors that h3 would otherwise swallow as opaque JSON 500s. `vite.config.ts` composes `tanstackStart`, `viteReact`, `tailwindcss`, and `tsConfigPaths` directly, plus `nitro` at build time (defaults to the `cloudflare-module` preset, overridden automatically by platform auto-detection on other hosts like Vercel).

### Path Aliases

`@/` maps to `src/` (configured via `vite-tsconfig-paths`).
