import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Sparkles, Ship, Sun, Leaf, ShieldCheck, Globe2 } from "lucide-react";
import { Reveal, RevealStagger, itemVariants } from "../components/Reveal";
import { SectionLabel } from "../components/SectionLabel";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { MagneticButton } from "../components/MagneticButton";
import { WorldMap } from "../components/WorldMap";
import { motion as m } from "framer-motion";
import { useTheme } from "../hooks/use-theme";

import {
  SITE_URL,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
  schemaScript,
} from "../lib/seo";

import heroShip from "../assets/hero-ship.jpg";
import spices from "../assets/spices.jpg";
import solar from "../assets/solar.jpg";
import grains from "../assets/grains.jpg";
import warehouse from "../assets/warehouse.jpg";
import scaleBg from "../assets/scale.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Indian Agricultural Products Exporter | Neminath Global",
      },
      {
        name: "description",
        content:
          "Premium Indian spices, grains, frozen foods & hygiene goods exported worldwide. Trusted B2B export supplier from Rajasthan, India. Request a bulk quote.",
      },
      {
        property: "og:title",
        content: "Indian Agricultural Products Exporter | Neminath Global",
      },
      {
        property: "og:description",
        content:
          "Premium Indian spices, grains, frozen foods & hygiene goods exported worldwide. Trusted B2B export supplier from Rajasthan, India.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}${heroShip}` },
      {
        name: "twitter:title",
        content: "Indian Agricultural Products Exporter | Neminath Global",
      },
      {
        name: "twitter:description",
        content:
          "Premium Indian spices, grains, frozen foods & hygiene goods exported worldwide. Trusted B2B export supplier from Rajasthan, India.",
      },
      { name: "twitter:image", content: `${SITE_URL}${heroShip}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      schemaScript(buildLocalBusinessSchema()),
      schemaScript(
        buildBreadcrumbSchema([{ name: "Home", url: "/" }])
      ),
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <FeatureGrid />
      <Sectors />
      <GlobalNetwork />
      <Process />
      <Testimonials />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 overflow-hidden">
      {/* concentric rings */}
      <div className="absolute right-[-20%] top-[10%] w-[800px] h-[800px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow" />
        <div className="absolute inset-16 border border-cyan-glow/20 rounded-full animate-spin-slower" />
        <div className="absolute inset-32 border border-white/5 rounded-full animate-spin-slow" />
        <div className="absolute inset-48 border border-cyan-glow/10 rounded-full animate-spin-slower" />
      </div>
      {/* mesh gradient blob */}
      <div className="absolute -left-40 top-1/2 w-[500px] h-[500px] rounded-full bg-cyan-glow/10 blur-[140px] animate-mesh pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative max-w-[1400px] mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <SectionLabel>Global Trade · Renewable Energy · 2026</SectionLabel>
        </motion.div>

        <h1 className="text-6xl md:text-[9rem] font-extrabold tracking-tighter leading-[0.85] mb-10">
          {["BORDERLESS", "TRADE."].map((word, wi) => (
            <span key={wi} className="block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 + wi * 0.15 }}
              >
                {wi === 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow dark:via-white to-zinc-500">
                    {word}
                  </span>
                ) : word}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="grid md:grid-cols-12 gap-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-span-5 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            We move the materials, spices, grains and clean energy that build the modern world — from
            India&apos;s most trusted sources to importers, distributors and partners across continents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:col-span-7 flex flex-wrap items-center gap-4"
          >
            <MagneticButton className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-cyan-glow transition-colors">
              <Link to="/exports" className="flex items-center gap-3">
                Explore Exports
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
            <Link
              to="/solar-services"
              className="inline-flex items-center gap-3 border border-border px-7 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:border-cyan-glow hover:text-cyan-glow transition-colors"
            >
              <Sun size={16} /> Solar Services
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-zinc-600 flex flex-col items-center gap-2"
      >
        scroll
        <span className="h-8 w-px bg-gradient-to-b from-zinc-600 to-transparent" />
      </motion.div>
    </section>
  );
}

const STATS = [
  { value: 50, suffix: "+", label: "Countries Served" },
  { value: 12, suffix: "+", label: "Years Operating" },
  { value: 200, suffix: "+", label: "Trusted Partners" },
  { value: 99.4, suffix: "%", label: "On-time Delivery" },
];

function Stats() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-y border-border">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i}>
            <div className="group cursor-default">
              <div className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                <AnimatedCounter to={s.value} suffix="" />
                <span className="text-cyan-glow text-3xl md:text-5xl ml-1">{s.suffix}</span>
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-foreground transition-colors">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <SectionLabel>What we do</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Two engines.<br />
            <span className="text-muted-foreground">One mission.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[640px]">
          <Reveal className="md:col-span-8 relative overflow-hidden group rounded-3xl bg-card border border-border">
            <img
              src={heroShip}
              alt="Container ship at sea"
              width={1600}
              height={1024}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />
            <div className="relative h-full flex flex-col justify-between p-10">
              <Ship className="text-cyan-glow" size={28} />
              <div>
                <span className="text-[10px] text-cyan-glow font-bold tracking-[0.25em] uppercase">01 — Exports</span>
                <h3 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tighter text-white">Global Trade</h3>
                <p className="mt-4 text-zinc-300 max-w-md">
                  High-quality agricultural goods, spices, grains, hygiene essentials and industrial commodities, sourced from India and delivered to importers worldwide.
                </p>
                <Link to="/exports" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-cyan-glow">
                  Explore <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-4 flex flex-col gap-6">
            <Reveal delay={1} className="flex-1 relative rounded-3xl overflow-hidden group bg-[#0b0b10] border border-white/[0.06]">
              <img src={solar} alt="Solar farm" width={1024} height={1024} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-1000" />
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <Sun className="text-[#22d3ee]" size={26} />
                  <Link
                    to="/solar-services"
                    className="size-11 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm grid place-items-center hover:bg-[#22d3ee] hover:border-[#22d3ee] transition-all duration-200 group/btn"
                    aria-label="Explore Solar Services"
                  >
                    <ArrowUpRight size={15} className="text-white group-hover/btn:scale-110 transition-transform" />
                  </Link>
                </div>
                <div>
                  <span className="text-[10px] text-[#22d3ee] font-bold tracking-[0.25em] uppercase">02 — Energy</span>
                  <h4 className="mt-2 text-2xl font-extrabold tracking-tight text-white">Solar Services</h4>
                  <p className="mt-2 text-sm text-white/60">Residential, commercial, and industrial photovoltaic systems.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={2} className="flex-1 relative rounded-3xl overflow-hidden border border-white/[0.06] p-8 flex flex-col justify-between">
              <img src={scaleBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none" />
              <div className="relative flex items-start justify-between">
                <Sparkles className="text-[#22d3ee]" size={26} />
                <Link
                  to="/global-presence"
                  className="size-11 rounded-full border border-white/20 grid place-items-center hover:bg-[#22d3ee] hover:border-[#22d3ee] transition-all duration-200 group/btn"
                  aria-label="Explore Global Presence"
                >
                  <ArrowUpRight size={15} className="text-white group-hover/btn:scale-110 transition-all" />
                </Link>
              </div>
              <div className="relative">
                <span className="text-[10px] text-[#22d3ee] font-bold tracking-[0.25em] uppercase">Promise</span>
                <h4 className="mt-2 text-2xl font-extrabold tracking-tight text-white">Trusted at scale.</h4>
                <p className="mt-2 text-sm text-white/60">Verified suppliers, consistent quality, transparent documentation.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const SECTORS = [
  { icon: Leaf, name: "Spices", desc: "Turmeric, chili, cardamom, cumin, coriander — clean, sortex-graded, fully traceable.", img: spices },
  { icon: Sparkles, name: "Grains", desc: "Rice, wheat, pulses and millets sourced from premium Indian agricultural belts.", img: grains },
  { icon: ShieldCheck, name: "Industrial", desc: "Hygiene essentials, packaging materials and commodity goods at export scale.", img: warehouse },
];

function Sectors() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <Reveal>
            <SectionLabel>Core sectors</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              The catalogue<br /><span className="text-muted-foreground">of essentials.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <a href="#lets-build" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-cyan-glow">
              View full catalog <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>

        <RevealStagger className="grid md:grid-cols-3 gap-6">
          {SECTORS.map((s) => (
            <m.div
              key={s.name}
              variants={itemVariants}
              className="group relative rounded-3xl overflow-hidden border border-border bg-card/60 dark:bg-zinc-900/60 aspect-[4/5] cursor-pointer"
            >
              <img src={s.img} alt={s.name} width={1024} height={1280} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-all duration-[1200ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-between">
                <s.icon className="text-cyan-glow" size={28} />
                <div>
                  <h3 className="text-3xl font-extrabold tracking-tight mb-2">{s.name}</h3>
                  <p className="text-sm text-zinc-400 max-w-xs">{s.desc}</p>
                </div>
              </div>
            </m.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function GlobalNetwork() {
  const { theme } = useTheme();
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <Reveal>
            <SectionLabel>Global presence</SectionLabel>
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-[0.9]">
              Beyond<br /><span className="text-muted-foreground">borders.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-muted-foreground max-w-md text-lg">
              Active trade corridors across <span className="text-foreground dark:text-white">50+ countries</span>, connecting Indian production
              hubs to global demand centers in real time.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative w-full aspect-[2/1] bg-obsidian-soft rounded-3xl overflow-hidden border border-border p-4">
            <WorldMap light={theme === "light"} />
            <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-foreground/5 border border-border backdrop-blur-xl text-[10px] uppercase tracking-widest text-cyan-glow flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-cyan-glow animate-pulse" /> Live trade network
            </div>
            <div className="absolute bottom-6 right-6 max-w-xs bg-background/80 backdrop-blur-xl p-5 rounded-2xl border border-border">
              <span className="text-[10px] font-bold text-cyan-glow uppercase tracking-widest">Primary Hub</span>
              <h5 className="text-lg font-bold mt-1">Rajasthan, India</h5>
              <p className="text-xs text-muted-foreground mt-1">Headquartered with sourcing networks across Indian agricultural belts.</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex justify-end">
          <Link to="/global-presence" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-cyan-glow">
            Explore network <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", title: "Source", desc: "We partner with India&apos;s most trusted growers and manufacturers." },
  { n: "02", title: "Verify", desc: "Multi-stage quality control, lab testing and documentation." },
  { n: "03", title: "Ship", desc: "Optimized routing with real-time tracking, container by container." },
  { n: "04", title: "Deliver", desc: "Compliant clearance, accurate paperwork, predictable arrival." },
];

function Process() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <SectionLabel>How we work</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Precision, end to end.
          </h2>
        </Reveal>
        <RevealStagger className="mt-16 grid md:grid-cols-4 border-t border-border">
          {STEPS.map((s) => (
            <m.div
              key={s.n}
              variants={itemVariants}
              className="group p-8 md:p-10 border-b md:border-b-0 md:border-r border-border hover:bg-foreground/[0.02] transition-colors last:border-r-0"
            >
              <div className="text-2xl font-extrabold text-cyan-glow tracking-tighter mb-10">{s.n}</div>
              <h3 className="text-2xl font-extrabold mb-3 group-hover:text-cyan-glow transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: s.desc }} />
            </m.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote: "We've been importing from Nemminath Ent, India for years now and their reliability is unmatched. Products always arrive on time, well-packaged and exactly as described.",
    name: "Amarjit S",
    role: "CEO, Global Traders Ltd",
  },
  {
    quote: "The quality of the mangoes and spices we received was exceptional. Fresh, aromatic, perfectly packed. Our customers in the UK loved them.",
    name: "Elena R",
    role: "Purchasing, FreshFields Imports",
  },
  {
    quote: "Bulk order of raw materials arrived securely and without damage. Export documentation was accurate which made clearance hassle-free.",
    name: "Nguyen T",
    role: "Logistics, VietCon Group",
  },
];

function Testimonials() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <SectionLabel>Partners speaking</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Trusted by traders<br /><span className="text-muted-foreground">across continents.</span>
          </h2>
        </Reveal>
        <RevealStagger className="mt-16 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => {
            const initial = t.name.charAt(0).toUpperCase();
            const hue = (initial.charCodeAt(0) * 47) % 360;
            return (
              <m.figure
                key={t.name}
                variants={itemVariants}
                className="relative rounded-3xl border border-border bg-card/80 dark:bg-zinc-900/40 p-8 backdrop-blur-xl hover:border-cyan-glow/30 transition-colors"
              >
                <div
                  className="size-11 rounded-full flex items-center justify-center mb-4 text-sm font-bold text-white select-none"
                  style={{ background: `hsl(${hue},55%,45%)` }}
                  aria-hidden
                >
                  {initial}
                </div>
                <blockquote className="text-foreground dark:text-zinc-300 leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
                </figcaption>
              </m.figure>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
