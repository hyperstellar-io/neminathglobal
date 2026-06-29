import { createFileRoute } from "@tanstack/react-router";
import { motion as m } from "framer-motion";
import { Reveal, RevealStagger, itemVariants } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import { Compass, Heart, Globe2, Award, Recycle, Handshake } from "lucide-react";
import warehouse from "../assets/warehouse.jpg";
import spices from "../assets/spices.jpg";
import {
  SITE_URL,
  buildBreadcrumbSchema,
  schemaScript,
} from "../lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "About Neminath Global — Indian Export Company Since 2013",
      },
      {
        name: "description",
        content:
          "Neminath Global (brand of Nemminath Enterprisee) is a trusted Indian export company and solar EPC provider operating since 2013 across 50+ countries.",
      },
      {
        property: "og:title",
        content:
          "About Neminath Global — Indian Export Company Since 2013",
      },
      {
        property: "og:description",
        content:
          "Neminath Global is a trusted Indian export company and solar EPC provider operating since 2013 across 50+ countries.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: `${SITE_URL}${warehouse}` },
      {
        name: "twitter:title",
        content:
          "About Neminath Global — Indian Export Company Since 2013",
      },
      {
        name: "twitter:description",
        content:
          "Neminath Global is a trusted Indian export company and solar EPC provider operating since 2013 across 50+ countries.",
      },
      { name: "twitter:image", content: `${SITE_URL}${warehouse}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
    scripts: [
      schemaScript(
        buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])
      ),
    ],
  }),
  component: About,
});

const VALUES = [
  { icon: Heart, t: "Integrity", d: "Transparent dealings, clear documentation, no surprises." },
  { icon: Award, t: "Quality", d: "Every shipment meets international export standards." },
  { icon: Handshake, t: "Partnership", d: "Long-term relationships with importers and growers alike." },
  { icon: Recycle, t: "Sustainability", d: "Solar-led energy transition is core to our future." },
  { icon: Globe2, t: "Global", d: "Active trade routes spanning 50+ countries today." },
  { icon: Compass, t: "Reliability", d: "On-time delivery and predictable logistics, always." },
];

const TIMELINE = [
  { year: "2013", title: "Founded", desc: "Nemminath Enterprisee established to bridge Indian producers with global buyers." },
  { year: "2016", title: "First exports", desc: "First container shipments of spices and grains to Southeast Asia." },
  { year: "2019", title: "Industrial expansion", desc: "Catalogue grows into industrial commodities and hygiene essentials." },
  { year: "2022", title: "Solar division", desc: "Renewable energy services launched for residential and commercial markets." },
  { year: "2026", title: "Global Trade Network", desc: "Active corridors in 50+ countries, with hubs across MENA, Europe and APAC." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>From India,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow dark:via-white to-zinc-500">for the world.</span></>}
        subtitle="Neminath Global is a brand of Nemminath Enterprisee — a global trading house exporting premium Indian goods and sustainable solar solutions to partners across continents."
      />

      {/* Mission / Vision */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-glow">Mission</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tighter leading-[0.95]">
              Make global trade<br />feel local.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              We work closely with trusted suppliers to ensure consistent quality, competitive pricing
              and reliable delivery for our international partners — turning the complexity of global
              logistics into a quiet, dependable rhythm.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-glow">Vision</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tighter leading-[0.95]">
              A cleaner,<br />more connected planet.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Beyond trade, we invest in sustainable solar solutions for homes, businesses and industries,
              supporting a more energy-efficient future where commerce and conservation share one road.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Image strip */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-6">
          <Reveal className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border">
            <img src={warehouse} alt="Warehouse" width={1600} height={1024} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </Reveal>
          <Reveal delay={1} className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border">
            <img src={spices} alt="Indian spices" width={1024} height={1024} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-glow">— Core values</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Principles, made<br /><span className="text-muted-foreground">non-negotiable.</span>
            </h2>
          </Reveal>
          <RevealStagger className="mt-16 grid md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <m.div
                key={v.t}
                variants={itemVariants}
                className="group rounded-3xl border border-border bg-card/80 dark:bg-zinc-900/40 p-8 hover:border-cyan-glow/30 dark:hover:bg-zinc-900/70 transition-all"
              >
                <div className="size-12 rounded-xl bg-cyan-glow/10 border border-cyan-glow/20 grid place-items-center text-cyan-glow group-hover:scale-110 transition-transform">
                  <v.icon size={20} />
                </div>
                <h3 className="mt-6 text-xl font-bold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </m.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-glow">— Journey</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">A decade in motion.</h2>
          </Reveal>
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-glow/60 via-white/10 to-transparent -translate-x-1/2" />
            <div className="space-y-12">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i}>
                  <div className={`relative flex md:items-center gap-6 md:gap-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-4 md:left-1/2 size-4 rounded-full bg-cyan-glow border-4 border-obsidian -translate-x-1/2 mt-1.5" />
                    <div className="md:w-1/2 pl-12 md:pl-0 md:px-12">
                      <div className="text-cyan-glow text-3xl md:text-5xl font-extrabold tracking-tighter mb-2">{t.year}</div>
                      <h4 className="text-xl font-bold">{t.title}</h4>
                      <p className="text-muted-foreground mt-2 max-w-md">{t.desc}</p>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
