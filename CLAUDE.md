# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev        # start dev server
bun run build      # production build
bun run lint       # ESLint
bun run format     # Prettier
```

There are no tests in this project.

## Architecture

**Stack:** React 19 + TanStack Start (SSR) + TanStack Router (file-based) + Tailwind CSS v4 + Framer Motion + shadcn/ui (New York style)

### Routing

File-based routing lives in `src/routes/`. `routeTree.gen.ts` is **auto-generated** — never edit it manually. See `src/routes/README.md` for file-naming conventions. The root layout (`__root.tsx`) wraps every page and includes `Navbar`, `Footer`, and `LenisProvider`.

### Design System

Custom design tokens are defined in `src/styles.css` via Tailwind v4's `@theme inline` block:

- `bg-obsidian` / `bg-obsidian-soft` — near-black backgrounds (`#050507`, `#0b0b10`)
- `text-cyan-glow` / `text-cyan-deep` — primary accent colors (`#22d3ee`, `#0891b2`)
- Font: **Plus Jakarta Sans** (weights 300/400/600/800)

shadcn/ui components live in `src/components/ui/`. Add new shadcn components with `bunx shadcn@latest add <name>`.

### Custom Components

- `Reveal` / `RevealStagger` — scroll-triggered fade-up animations (Framer Motion, `viewport: once`)
- `PageHero` — shared hero section for inner pages (eyebrow + title + subtitle)
- `SectionLabel` — small all-caps eyebrow label
- `MagneticButton` — hover-tracking button with spring physics
- `AnimatedCounter` — viewport-triggered number counter
- `LenisProvider` — smooth scroll (Lenis), mounts once in root layout
- `WorldMap` — SVG world map component for the global presence section

### SSR / Server

`src/server.ts` wraps TanStack Start's server entry to handle catastrophic SSR errors that h3 would otherwise swallow as opaque JSON 500s. `vite.config.ts` uses `@lovable.dev/vite-tanstack-config` — **do not add** `tanstackStart`, `viteReact`, `tailwindcss`, or `tsConfigPaths` plugins manually; they are already bundled.

### Path Aliases

`@/` maps to `src/` (configured via `vite-tsconfig-paths`).

## Lovable Integration

This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history (no force-push, rebase, amend, or squash on already-pushed commits) — it corrupts Lovable's project history on their side.
