import { createFileRoute } from "@tanstack/react-router";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealStagger, itemVariants } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import {
  Compass,
  Heart,
  Globe2,
  Award,
  Recycle,
  Handshake,
  Truck,
  ShoppingBag,
  Tag,
  MapPin,
  BadgeCheck,
  Package,
  Receipt,
  FileCheck,
  CheckCircle2,
} from "lucide-react";
import warehouse from "../assets/warehouse.jpg";
import spices from "../assets/spices.jpg";
import { SITE_URL, buildBreadcrumbSchema, schemaScript } from "../lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Neminath Global — Indian Export Company Since 2023",
      },
      {
        name: "description",
        content:
          "Neminath Global (brand of Nemminath Enterprisee) is a trusted Indian export company and solar EPC provider operating since 2023 across 50+ countries.",
      },
      {
        property: "og:title",
        content: "About Neminath Global — Indian Export Company Since 2023",
      },
      {
        property: "og:description",
        content:
          "Neminath Global is a trusted Indian export company and solar EPC provider operating since 2023 across 50+ countries.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: `${SITE_URL}${warehouse}` },
      {
        name: "twitter:title",
        content: "About Neminath Global — Indian Export Company Since 2023",
      },
      {
        name: "twitter:description",
        content:
          "Neminath Global is a trusted Indian export company and solar EPC provider operating since 2023 across 50+ countries.",
      },
      { name: "twitter:image", content: `${SITE_URL}${warehouse}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
    scripts: [
      schemaScript(
        buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]),
      ),
    ],
  }),
  component: About,
});

const VALUES = [
  { icon: Heart, t: "Integrity", d: "Transparent dealings, clear documentation, no surprises." },
  { icon: Award, t: "Quality", d: "Every shipment meets international export standards." },
  {
    icon: Handshake,
    t: "Partnership",
    d: "Long-term relationships with importers and growers alike.",
  },
  { icon: Recycle, t: "Sustainability", d: "Solar-led energy transition is core to our future." },
  { icon: Globe2, t: "Global", d: "Active trade routes spanning 50+ countries today." },
  { icon: Compass, t: "Reliability", d: "On-time delivery and predictable logistics, always." },
];

const WHO_STATS = [
  { value: "4", label: "Core Product Categories" },
  { value: "2", label: "Countries — India & Germany" },
  { value: "100%", label: "Export Documentation Handled For You" },
  { value: "Trial Orders", label: "Welcome, Small MOQs" },
];

const PARTNER_TYPES = [
  {
    icon: Truck,
    t: "Importers & Distributors",
    d: "Long-term supply partnerships across all four categories.",
  },
  {
    icon: ShoppingBag,
    t: "Retail & Supermarket Buyers",
    d: "Retail-ready packaging and volume-based pricing.",
  },
  {
    icon: Tag,
    t: "Private Label / OEM Partners",
    d: "Your brand, our sourcing and manufacturing network.",
  },
  {
    icon: MapPin,
    t: "Regional Exclusive Partners",
    d: "Territory-based partnerships for long-term growth.",
  },
];

const PARTNER_BENEFITS = [
  {
    icon: BadgeCheck,
    t: "Premium, Origin-Certified Quality",
    d: "Every product is sourced and graded to meet international quality benchmarks.",
  },
  {
    icon: Package,
    t: "Custom Packaging & Labelling",
    d: "Private label and buyer-branded packaging available on request.",
  },
  {
    icon: Handshake,
    t: "Flexible MOQ",
    d: "Trial orders welcome — we scale with your business, not the other way around.",
  },
  {
    icon: Receipt,
    t: "FOB & CIF Pricing",
    d: "Transparent pricing structured around your preferred incoterm.",
  },
  {
    icon: FileCheck,
    t: "Full Export Documentation",
    d: "Certificates of origin, phytosanitary and quality documents handled end-to-end.",
  },
];

const PARTNER_BADGES = [
  { icon: BadgeCheck, t: "Origin-Certified", d: "Traceable sourcing" },
  { icon: CheckCircle2, t: "Quality Checked", d: "Every batch inspected" },
  { icon: FileCheck, t: "Export Ready", d: "Full documentation" },
  { icon: Globe2, t: "India + Germany", d: "Two points of contact" },
];

const TIMELINE = [
  {
    year: "2023",
    title: "Founded",
    desc: "Nemminath Enterprisee established to bridge Indian producers with global buyers.",
  },
  {
    year: "2024",
    title: "Industrial expansion",
    desc: "Catalogue grows into grains, industrial commodities and hygiene essentials.",
  },
  {
    year: "2025",
    title: "Neminath Global launches",
    desc: "Neminath Global launched as the export and solar brand under Nemminath Enterprisee.",
  },
  {
    year: "2025",
    title: "Solar division",
    desc: "Renewable energy services launched for residential, commercial and industrial markets.",
  },
  {
    year: "2026",
    title: "Global Trade Network",
    desc: "Active corridors in 50+ countries, with hubs across MENA, Europe and APAC.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            From India,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-cyan-900 to-zinc-700 dark:from-cyan-glow dark:via-white dark:to-zinc-500">
              for the world.
            </span>
          </>
        }
        subtitle="Neminath Global is a brand of Nemminath Enterprisee — a global trading house exporting premium Indian goods and sustainable solar solutions to partners across continents."
      />

      {/* Who we are */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-glow">
              Who we are
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
              Exporting quality
              <br />
              <span className="text-muted-foreground">from India to the world.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-8 max-w-3xl space-y-5 text-muted-foreground font-medium text-lg leading-relaxed">
              <p>
                Neminath Global is a brand of Nemminath Enterprisee, an India-based exporter of
                premium agricultural products, food items and hygiene goods, supplying importers,
                distributors and retailers across the globe.
              </p>
              <p>
                We source from trusted growing regions across India, selecting each product for
                quality and consistency before it&apos;s processed and packed at our facilities in
                Rajasthan — combining traditional expertise with modern export standards. Every
                shipment is backed by flexible MOQs, competitive FOB/CIF pricing and full export
                documentation, so our partners can order with confidence.
              </p>
              <p>
                Our Germany office, based in Kaiserslautern, now brings us closer to our European
                buyers — enabling faster communication, easier logistics coordination and a direct
                local point of contact for the EU market.
              </p>
            </div>
          </Reveal>
          <RevealStagger className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {WHO_STATS.map((s) => (
              <m.div
                key={s.label}
                variants={itemVariants}
                className="rounded-3xl border border-border p-6 md:p-8"
              >
                <div className="text-3xl md:text-4xl font-extrabold tracking-tighter text-cyan-glow">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </m.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16">
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-glow">
              Mission
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tighter leading-[0.95]">
              Make global trade
              <br />
              feel local.
            </h2>
            <p className="mt-6 text-muted-foreground font-medium text-lg leading-relaxed">
              We work closely with trusted suppliers to ensure consistent quality, competitive
              pricing and reliable delivery for our international partners — turning the complexity
              of global logistics into a quiet, dependable rhythm.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-glow">
              Vision
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tighter leading-[0.95]">
              A cleaner,
              <br />
              more connected planet.
            </h2>
            <p className="mt-6 text-muted-foreground font-medium text-lg leading-relaxed">
              Beyond trade, we invest in sustainable solar solutions for homes, businesses and
              industries, supporting a more energy-efficient future where commerce and conservation
              share one road.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Image strip */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-6">
          <Reveal className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border">
            <img
              src={warehouse}
              alt="Warehouse"
              width={1600}
              height={1024}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </Reveal>
          <Reveal
            delay={1}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border"
          >
            <img
              src={spices}
              alt="Indian spices"
              width={1024}
              height={1024}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Why partner with us */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-glow">
              Why Neminath Global
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Why partner with
              <br />
              <span className="text-muted-foreground">Neminath Global.</span>
            </h2>
          </Reveal>

          <div className="mt-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Open to
            </span>
            <RevealStagger className="mt-6 grid md:grid-cols-4 gap-6">
              {PARTNER_TYPES.map((p) => (
                <m.div
                  key={p.t}
                  variants={itemVariants}
                  className="group rounded-3xl border border-border bg-card/80 dark:bg-zinc-900/40 p-8 hover:border-cyan-glow/30 transition-colors"
                >
                  <div className="size-12 rounded-xl bg-cyan-glow/10 border border-cyan-glow/20 grid place-items-center text-cyan-glow group-hover:scale-110 transition-transform">
                    <p.icon size={20} />
                  </div>
                  <h4 className="mt-6 text-lg font-bold leading-snug">{p.t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </m.div>
              ))}
            </RevealStagger>
          </div>

          <RevealStagger className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNER_BENEFITS.map((b) => (
              <m.div
                key={b.t}
                variants={itemVariants}
                className="rounded-3xl border border-border p-8 dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 transition-colors"
              >
                <b.icon className="text-cyan-glow" size={24} />
                <h4 className="mt-6 text-base font-bold leading-snug">{b.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </m.div>
            ))}
          </RevealStagger>

          <RevealStagger className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30 border border-border rounded-3xl overflow-hidden">
            {PARTNER_BADGES.map((b) => (
              <m.div
                key={b.t}
                variants={itemVariants}
                className="bg-background p-6 flex items-center gap-3"
              >
                <b.icon size={18} className="text-cyan-glow shrink-0" />
                <div>
                  <div className="text-sm font-bold">{b.t}</div>
                  <div className="text-xs text-muted-foreground">{b.d}</div>
                </div>
              </m.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-glow">
              Core values
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Principles, made
              <br />
              <span className="text-muted-foreground">non-negotiable.</span>
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
      <Timeline />
    </>
  );
}

function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-glow">
            Journey
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
            A decade in motion.
          </h2>
        </Reveal>
        <div ref={trackRef} className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          <m.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cyan-glow -translate-x-1/2 glow-cyan"
          />
          <div className="space-y-12">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i}>
                <div
                  className={`relative flex md:items-center gap-6 md:gap-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-4 md:left-1/2 size-4 rounded-full bg-cyan-glow border-4 border-obsidian -translate-x-1/2 mt-1.5" />
                  <div className="md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <div className="text-cyan-glow text-3xl md:text-5xl font-extrabold tracking-tighter mb-2">
                      {t.year}
                    </div>
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
  );
}
