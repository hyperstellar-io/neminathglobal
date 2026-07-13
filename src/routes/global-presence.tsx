import { createFileRoute } from "@tanstack/react-router";
import { motion as m } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Reveal, RevealStagger, itemVariants } from "../components/Reveal";
import { WorldMap } from "../components/WorldMap";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { useTheme } from "../hooks/use-theme";
import { SITE_URL, buildBreadcrumbSchema, schemaScript } from "../lib/seo";

export const Route = createFileRoute("/global-presence")({
  head: () => ({
    meta: [
      {
        title: "Global Export Network — 50+ Countries | Neminath Global",
      },
      {
        name: "description",
        content:
          "Neminath Global's active trade corridors span Asia, Europe, Middle East & Americas. Reliable Indian exporter connecting producers to importers worldwide.",
      },
      {
        property: "og:title",
        content: "Global Export Network — 50+ Countries | Neminath Global",
      },
      {
        property: "og:description",
        content:
          "Neminath Global's active trade corridors span Asia, Europe, Middle East & Americas. Reliable Indian exporter connecting producers to importers worldwide.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/global-presence`,
      },
      {
        name: "twitter:title",
        content: "Global Export Network — 50+ Countries | Neminath Global",
      },
      {
        name: "twitter:description",
        content:
          "Neminath Global's active trade corridors span Asia, Europe, Middle East & Americas. Reliable Indian exporter connecting producers to importers worldwide.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/global-presence` }],
    scripts: [
      schemaScript(
        buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Global Presence", url: "/global-presence" },
        ]),
      ),
    ],
  }),
  component: GlobalPresence,
});

const REGIONS = [
  {
    region: "Asia Pacific",
    countries: [
      "Vietnam",
      "Singapore",
      "Malaysia",
      "Thailand",
      "Indonesia",
      "Japan",
      "South Korea",
      "Australia",
    ],
  },
  {
    region: "Europe",
    countries: [
      "Germany",
      "Netherlands",
      "United Kingdom",
      "Spain",
      "Italy",
      "France",
      "Belgium",
      "Poland",
    ],
  },
  {
    region: "Middle East & Africa",
    countries: [
      "UAE",
      "Saudi Arabia",
      "Oman",
      "Egypt",
      "Kenya",
      "South Africa",
      "Nigeria",
      "Qatar",
    ],
  },
  {
    region: "Americas",
    countries: ["United States", "Canada", "Brazil", "Mexico", "Argentina", "Chile"],
  },
];

function GlobalPresence() {
  const { theme } = useTheme();
  return (
    <>
      <PageHero
        eyebrow="Global Presence"
        title={
          <>
            Anywhere
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-cyan-900 to-zinc-700 dark:from-cyan-glow dark:via-white dark:to-zinc-500">
              your business goes.
            </span>
          </>
        }
        subtitle="Live trade corridors connecting Indian production hubs with importers, distributors and partners across more than 50 countries."
      />

      <section className="px-6 md:px-12">
        <Reveal className="relative max-w-[1400px] mx-auto aspect-[2/1] min-h-[280px] bg-obsidian-soft rounded-3xl overflow-hidden border border-border p-4">
          <WorldMap light={theme === "light"} />
        </Reveal>
      </section>

      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: 50, s: "+", l: "Countries served" },
            { v: 4, s: "", l: "Continents active" },
            { v: 12, s: "+", l: "Strategic hubs" },
            { v: 99.4, s: "%", l: "Delivery accuracy" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i}>
              <div>
                <div className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                  <AnimatedCounter to={s.v} />
                  <span className="text-cyan-glow text-3xl md:text-5xl ml-1">{s.s}</span>
                </div>
                <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-12 md:py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-glow">
              Active corridors
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Regional reach.
            </h2>
          </Reveal>
          <RegionalReach />
        </div>
      </section>
    </>
  );
}

function MarqueeRow({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  const track = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <m.div
        className="flex w-max gap-2"
        animate={{ x: direction === "left" ? ["0%", "-25%"] : ["-25%", "0%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        {track.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="shrink-0 text-xs px-3 py-1.5 rounded-full border border-border dark:border-white/20 text-foreground dark:text-zinc-300 hover:border-cyan-glow hover:text-cyan-glow transition-colors"
          >
            {c}
          </span>
        ))}
      </m.div>
    </div>
  );
}

function RegionCard({ r }: { r: (typeof REGIONS)[number] }) {
  const half = Math.ceil(r.countries.length / 2);
  const row1 = r.countries.slice(0, half);
  const row2 = r.countries.slice(half);
  return (
    <m.div
      variants={itemVariants}
      className="rounded-3xl border border-border bg-card/80 dark:bg-zinc-900/40 p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-extrabold">{r.region}</h3>
        <span className="text-[10px] font-mono font-bold text-cyan-glow tracking-widest">
          {r.countries.length} markets
        </span>
      </div>
      <div className="space-y-3">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </m.div>
  );
}

function RegionalReach() {
  return (
    <RevealStagger className="mt-16 grid md:grid-cols-2 gap-6">
      {REGIONS.map((r) => (
        <RegionCard key={r.region} r={r} />
      ))}
    </RevealStagger>
  );
}
