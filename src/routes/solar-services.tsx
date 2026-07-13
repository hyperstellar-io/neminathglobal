import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { PageHero } from "../components/PageHero";
import { Reveal, RevealStagger, itemVariants } from "../components/Reveal";
import {
  Home,
  Building2,
  Factory,
  Sun,
  BatteryCharging,
  Leaf,
  ArrowUpRight,
  Zap,
  Droplets,
  Lightbulb,
  Radio,
  Antenna,
  Cctv,
  Cog,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import solar from "../assets/solar.jpg";
import proj2 from "../assets/solar-projects/2.jpeg";
import proj3 from "../assets/solar-projects/3.jpeg";
import proj4 from "../assets/solar-projects/4.jpeg";
import proj5 from "../assets/solar-projects/5.jpeg";
import proj6 from "../assets/solar-projects/6.jpeg";
import proj8 from "../assets/solar-projects/8.jpeg";
import proj9 from "../assets/solar-projects/9.jpeg";
import proj10 from "../assets/solar-projects/10.jpeg";
import proj11 from "../assets/solar-projects/11.jpeg";
import proj12 from "../assets/solar-projects/12.jpeg";
import proj13 from "../assets/solar-projects/13.jpeg";
import proj14 from "../assets/solar-projects/14.jpeg";
import proj15 from "../assets/solar-projects/15.jpeg";
import proj17 from "../assets/solar-projects/17.jpeg";
import proj18 from "../assets/solar-projects/18.jpeg";
import proj19 from "../assets/solar-projects/19.jpeg";
import projControlPanel from "../assets/solar-projects/electrical-control-panel-setup.jpeg";
import projGuyedMast from "../assets/solar-projects/guyed-mast-installation.jpeg";
import projPanelInstall from "../assets/solar-projects/solar-panel-installation-work.jpeg";
import { SITE_URL, buildServiceSchema, buildBreadcrumbSchema, schemaScript } from "../lib/seo";

export const Route = createFileRoute("/solar-services")({
  head: () => ({
    meta: [
      {
        title: "Solar EPC Company India — Rooftop & Industrial Solar | Neminath Global",
      },
      {
        name: "description",
        content:
          "Turnkey solar energy solutions for residential, commercial & industrial use in India. Rooftop solar, street lights, water heaters & substations. Get a free quote.",
      },
      {
        property: "og:title",
        content: "Solar EPC Company India — Rooftop & Industrial Solar | Neminath Global",
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
        content: "Solar EPC Company India — Rooftop & Industrial Solar | Neminath Global",
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
        }),
      ),
      schemaScript(
        buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Solar Services", url: "/solar-services" },
        ]),
      ),
    ],
  }),
  component: Solar,
});

const SEGMENTS = [
  {
    icon: Home,
    t: "Residential",
    d: "Rooftop solar systems designed for Indian homes — turnkey installation, monitoring and aftercare.",
    points: ["Grid-tied & hybrid", "Net metering", "Long-term warranties", "Lifetime monitoring"],
  },
  {
    icon: Building2,
    t: "Commercial",
    d: "Solar for offices, retail and hospitality — cut operational costs while meeting ESG goals.",
    points: [
      "Custom system design",
      "CapEx & OpEx models",
      "Performance guarantees",
      "Maintenance contracts",
    ],
  },
  {
    icon: Factory,
    t: "Industrial",
    d: "Megawatt-scale installations for factories and industrial estates with predictable ROI.",
    points: ["MW-scale arrays", "Energy audits", "Storage integration", "24/7 monitoring"],
  },
];

const BENEFITS = [
  { icon: Zap, t: "Lower bills", d: "Reduce electricity expenses by up to 80%." },
  { icon: Leaf, t: "Cleaner planet", d: "Cut your carbon footprint substantially." },
  { icon: BatteryCharging, t: "Energy security", d: "Reliable power with storage options." },
  { icon: Sun, t: "Long-term yield", d: "25+ years of dependable generation." },
];

const PRODUCTS = [
  { icon: Home, name: "Rooftop Solar Plants" },
  { icon: Droplets, name: "Solar Geyser" },
  { icon: BatteryCharging, name: "Solar Submersible Pump" },
  { icon: Lightbulb, name: "Solar Street Light" },
  { icon: Radio, name: "33/11 KV Substation" },
  { icon: Antenna, name: "High Mast Installation" },
  { icon: Cog, name: "Automation" },
  { icon: Zap, name: "GI Octagonal Pole" },
  { icon: Cctv, name: "CCTV" },
];

const PROJECT_PHOTOS = [
  { src: proj2 },
  { src: proj3 },
  { src: proj4 },
  { src: proj5 },
  { src: proj6 },
  { src: proj8 },
  { src: proj9 },
  { src: proj10 },
  { src: proj11 },
  { src: proj12 },
  { src: proj13 },
  { src: proj14 },
  { src: proj15 },
  { src: proj17 },
  { src: proj18 },
  { src: proj19 },
  { src: projControlPanel, caption: "Electrical Control Panel Setup" },
  { src: projGuyedMast, caption: "Guyed Mast Installation" },
  { src: projPanelInstall, caption: "Solar Panel Installation Work" },
];

function Solar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Solar Services"
        title={
          <>
            Sunlight,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-cyan-900 to-zinc-700 dark:from-cyan-glow dark:via-white dark:to-zinc-500">
              engineered.
            </span>
          </>
        }
        subtitle="Sustainable solar solutions for residential, commercial and industrial applications, designed to reduce energy costs and carbon footprint."
        accent={
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-cyan-glow transition-colors"
          >
            Request a quote <ArrowUpRight size={16} />
          </Link>
        }
      />

      {/* Hero image */}
      <section className="px-6 md:px-12">
        <Reveal className="relative max-w-[1400px] mx-auto aspect-[21/9] rounded-3xl overflow-hidden border border-border">
          <img
            src={solar}
            alt="Solar farm"
            width={1600}
            height={900}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-obsidian via-transparent to-transparent" />
        </Reveal>
      </section>

      {/* Segments */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-glow">
              Applications
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Built for every
              <br />
              <span className="text-muted-foreground">scale.</span>
            </h2>
          </Reveal>
          <RevealStagger className="mt-16 grid md:grid-cols-3 gap-6">
            {SEGMENTS.map((s) => (
              <m.div
                key={s.t}
                variants={itemVariants}
                className="rounded-3xl border border-border bg-card/80 dark:bg-zinc-900/40 p-8 hover:border-cyan-glow/30 transition-colors group"
              >
                <div className="size-14 rounded-2xl bg-cyan-glow/10 border border-cyan-glow/20 grid place-items-center text-cyan-glow group-hover:scale-110 transition-transform">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                <ul className="mt-6 pt-6 border-t border-border space-y-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="text-sm text-foreground dark:text-zinc-300 flex items-center gap-2"
                    >
                      <span className="size-1 rounded-full bg-cyan-glow" /> {p}
                    </li>
                  ))}
                </ul>
              </m.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Product categories */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-glow">
              Product range
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Everything solar,
              <br />
              <span className="text-muted-foreground">under one roof.</span>
            </h2>
          </Reveal>
          <RevealStagger className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {PRODUCTS.map((p) => (
              <m.div
                key={p.name}
                variants={itemVariants}
                className="rounded-3xl border border-border p-8 dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 transition-colors group"
              >
                <p.icon
                  className="text-cyan-glow group-hover:scale-110 transition-transform"
                  size={26}
                />
                <h4 className="mt-6 text-base font-bold leading-snug">{p.name}</h4>
              </m.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Project gallery */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-glow">
              Work done
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Solar & infrastructure
              <br />
              <span className="text-muted-foreground">projects.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl">
              A showcase of our completed installations and on-site execution, reflecting our
              expertise in delivering reliable and efficient solutions.
            </p>
          </Reveal>
          <RevealStagger className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {PROJECT_PHOTOS.map((p, i) => (
              <m.button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                variants={itemVariants}
                className="relative aspect-square rounded-2xl overflow-hidden border border-border group text-left"
              >
                <img
                  src={p.src}
                  alt={p.caption ?? `Solar and infrastructure project ${i + 1}`}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {p.caption && (
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {p.caption}
                  </span>
                )}
              </m.button>
            ))}
          </RevealStagger>
        </div>
      </section>

      <ProjectLightbox
        photos={PROJECT_PHOTOS}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />

      {/* Benefits */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-glow">
              Why solar
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              A cleaner balance sheet.
            </h2>
          </Reveal>
          <RevealStagger className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {BENEFITS.map((b) => (
              <m.div
                key={b.t}
                variants={itemVariants}
                className="rounded-3xl border border-border p-8 dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 transition-colors"
              >
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

function ProjectLightbox({
  photos,
  activeIndex,
  onClose,
  onNavigate,
}: {
  photos: { src: string; caption?: string }[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const open = activeIndex !== null;

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && activeIndex !== null)
        onNavigate((activeIndex + 1) % photos.length);
      if (e.key === "ArrowLeft" && activeIndex !== null)
        onNavigate((activeIndex - 1 + photos.length) % photos.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, activeIndex, photos.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {open && activeIndex !== null && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-sm grid place-items-center px-4 md:px-16"
          onClick={onClose}
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute top-6 right-6 size-10 rounded-full border border-white/20 text-white grid place-items-center hover:border-cyan-glow hover:text-cyan-glow transition-colors"
          >
            <X size={18} />
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex - 1 + photos.length) % photos.length);
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 size-10 rounded-full border border-white/20 text-white grid place-items-center hover:border-cyan-glow hover:text-cyan-glow transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex + 1) % photos.length);
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 size-10 rounded-full border border-white/20 text-white grid place-items-center hover:border-cyan-glow hover:text-cyan-glow transition-colors"
          >
            <ChevronRight size={18} />
          </button>
          <m.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-5xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[activeIndex].src}
              alt={
                photos[activeIndex].caption ?? `Solar and infrastructure project ${activeIndex + 1}`
              }
              className="w-full h-full max-h-[80vh] object-contain rounded-2xl"
            />
            {photos[activeIndex].caption && (
              <div className="mt-4 text-center text-sm font-semibold text-white/90">
                {photos[activeIndex].caption}
              </div>
            )}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
