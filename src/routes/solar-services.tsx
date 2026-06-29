import { createFileRoute, Link } from "@tanstack/react-router";
import { motion as m } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Reveal, RevealStagger, itemVariants } from "../components/Reveal";
import { Home, Building2, Factory, Sun, BatteryCharging, Leaf, ArrowUpRight, Zap } from "lucide-react";
import solar from "../assets/solar.jpg";
import {
  SITE_URL,
  buildServiceSchema,
  buildBreadcrumbSchema,
  schemaScript,
} from "../lib/seo";

export const Route = createFileRoute("/solar-services")({
  head: () => ({
    meta: [
      {
        title:
          "Solar EPC Company India — Rooftop & Industrial Solar | Neminath Global",
      },
      {
        name: "description",
        content:
          "Turnkey solar energy solutions for residential, commercial & industrial use in India. Rooftop solar, street lights, water heaters & substations. Get a free quote.",
      },
      {
        property: "og:title",
        content:
          "Solar EPC Company India — Rooftop & Industrial Solar | Neminath Global",
      },
      {
        property: "og:description",
        content:
          "Turnkey solar energy solutions for residential, commercial & industrial use in India. Rooftop solar, street lights, water heaters & substations.",
      },
      { property: "og:url", content: `${SITE_URL}/solar-services` },
      { property: "og:image", content: `${SITE_URL}${solar}` },
      {
        name: "twitter:title",
        content:
          "Solar EPC Company India — Rooftop & Industrial Solar | Neminath Global",
      },
      {
        name: "twitter:description",
        content:
          "Turnkey solar energy solutions for residential, commercial & industrial use in India. Rooftop solar, street lights, water heaters & substations.",
      },
      { name: "twitter:image", content: `${SITE_URL}${solar}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/solar-services` }],
    scripts: [
      schemaScript(
        buildServiceSchema({
          name: "Solar EPC Solutions India",
          description:
            "Turnkey solar energy installation for residential, commercial and industrial applications in India. Services include rooftop solar, solar street lights, solar water heaters and MW-scale industrial arrays.",
          serviceType: "Solar Energy Installation",
          areaServed: "India",
          url: `${SITE_URL}/solar-services`,
        })
      ),
      schemaScript(
        buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Solar Services", url: "/solar-services" },
        ])
      ),
    ],
  }),
  component: Solar,
});

const SEGMENTS = [
  { icon: Home, t: "Residential", d: "Rooftop solar systems designed for Indian homes — turnkey installation, monitoring and aftercare.", points: ["Grid-tied & hybrid", "Net metering", "Long-term warranties", "Lifetime monitoring"] },
  { icon: Building2, t: "Commercial", d: "Solar for offices, retail and hospitality — cut operational costs while meeting ESG goals.", points: ["Custom system design", "CapEx & OpEx models", "Performance guarantees", "Maintenance contracts"] },
  { icon: Factory, t: "Industrial", d: "Megawatt-scale installations for factories and industrial estates with predictable ROI.", points: ["MW-scale arrays", "Energy audits", "Storage integration", "24/7 monitoring"] },
];

const BENEFITS = [
  { icon: Zap, t: "Lower bills", d: "Reduce electricity expenses by up to 80%." },
  { icon: Leaf, t: "Cleaner planet", d: "Cut your carbon footprint substantially." },
  { icon: BatteryCharging, t: "Energy security", d: "Reliable power with storage options." },
  { icon: Sun, t: "Long-term yield", d: "25+ years of dependable generation." },
];

function Solar() {
  return (
    <>
      <PageHero
        eyebrow="Solar Services"
        title={<>Sunlight,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow dark:via-white to-zinc-500">engineered.</span></>}
        subtitle="Sustainable solar solutions for residential, commercial and industrial applications, designed to reduce energy costs and carbon footprint."
        accent={
          <Link to="/contact" className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-cyan-glow transition-colors">
            Request a quote <ArrowUpRight size={16} />
          </Link>
        }
      />

      {/* Hero image */}
      <section className="px-6 md:px-12">
        <Reveal className="relative max-w-[1400px] mx-auto aspect-[21/9] rounded-3xl overflow-hidden border border-border">
          <img src={solar} alt="Solar farm" width={1600} height={900} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-obsidian via-transparent to-transparent" />
        </Reveal>
      </section>

      {/* Segments */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-glow">— Applications</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Built for every<br /><span className="text-muted-foreground">scale.</span>
            </h2>
          </Reveal>
          <RevealStagger className="mt-16 grid md:grid-cols-3 gap-6">
            {SEGMENTS.map((s) => (
              <m.div key={s.t} variants={itemVariants} className="rounded-3xl border border-border bg-card/80 dark:bg-zinc-900/40 p-8 hover:border-cyan-glow/30 transition-colors group">
                <div className="size-14 rounded-2xl bg-cyan-glow/10 border border-cyan-glow/20 grid place-items-center text-cyan-glow group-hover:scale-110 transition-transform">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                <ul className="mt-6 pt-6 border-t border-border space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="text-sm text-foreground dark:text-zinc-300 flex items-center gap-2">
                      <span className="size-1 rounded-full bg-cyan-glow" /> {p}
                    </li>
                  ))}
                </ul>
              </m.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-glow">— Why solar</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">A cleaner balance sheet.</h2>
          </Reveal>
          <RevealStagger className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {BENEFITS.map((b) => (
              <m.div key={b.t} variants={itemVariants} className="rounded-3xl border border-border p-8 dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 transition-colors">
                <b.icon className="text-cyan-glow" size={26} />
                <h4 className="mt-6 text-lg font-bold">{b.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </m.div>
            ))}
          </RevealStagger>
        </div>
      </section>
    </>
  );
}
