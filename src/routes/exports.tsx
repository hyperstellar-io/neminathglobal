import { createFileRoute } from "@tanstack/react-router";
import { motion as m } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Reveal, RevealStagger, itemVariants } from "../components/Reveal";
import { Plus, UtensilsCrossed, ShoppingBag, Hotel, Factory, FlaskConical, Package, Truck, Building2 } from "lucide-react";
import { useState } from "react";
import spices from "../assets/spices.jpg";
import grains from "../assets/grains.jpg";
import mangoes from "../assets/mangoes.jpg";
import warehouse from "../assets/warehouse.jpg";
import {
  SITE_URL,
  buildServiceSchema,
  buildItemListSchema,
  buildBreadcrumbSchema,
  schemaScript,
} from "../lib/seo";

export const Route = createFileRoute("/exports")({
  head: () => ({
    meta: [
      {
        title:
          "Indian Spices, Grains & Food Exporter | Neminath Global",
      },
      {
        name: "description",
        content:
          "Wholesale exporter of Indian spices, grains, pulses, frozen vegetables & hygiene products. FOB/CIF pricing, full export documentation, 50+ countries served.",
      },
      {
        property: "og:title",
        content:
          "Indian Spices, Grains & Food Exporter | Neminath Global",
      },
      {
        property: "og:description",
        content:
          "Wholesale exporter of Indian spices, grains, pulses, frozen vegetables & hygiene products. FOB/CIF pricing, full export documentation, 50+ countries served.",
      },
      { property: "og:url", content: `${SITE_URL}/exports` },
      { property: "og:image", content: `${SITE_URL}${spices}` },
      {
        name: "twitter:title",
        content:
          "Indian Spices, Grains & Food Exporter | Neminath Global",
      },
      {
        name: "twitter:description",
        content:
          "Wholesale exporter of Indian spices, grains, pulses, frozen vegetables & hygiene products. FOB/CIF pricing, full export documentation, 50+ countries served.",
      },
      { name: "twitter:image", content: `${SITE_URL}${spices}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/exports` }],
    scripts: [
      schemaScript(
        buildServiceSchema({
          name: "Indian Agricultural Products Export",
          description:
            "Wholesale export of Indian spices, grains, pulses, frozen vegetables, hygiene products and industrial commodities to importers worldwide.",
          serviceType: "Export Services",
          areaServed: "Worldwide",
          url: `${SITE_URL}/exports`,
        })
      ),
      schemaScript(
        buildItemListSchema([
          { name: "Spices", url: "/exports" },
          { name: "Grains & Pulses", url: "/exports" },
          { name: "Fresh Produce", url: "/exports" },
          { name: "Industrial & Hygiene", url: "/exports" },
        ])
      ),
      schemaScript(
        buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Exports", url: "/exports" },
        ])
      ),
    ],
  }),
  component: Exports,
});

const CATEGORIES = [
  {
    name: "Spices",
    desc: "Turmeric, red chili, cumin, coriander, cardamom, cloves and custom blends — sortex-graded and lab-verified.",
    items: ["Turmeric powder & whole", "Red chili powder", "Cumin seeds", "Coriander seeds", "Cardamom", "Black pepper", "Cloves"],
    img: spices,
  },
  {
    name: "Grains & Pulses",
    desc: "Basmati and non-basmati rice, wheat, millets, lentils and pulses sourced from premium agricultural belts.",
    items: ["Basmati rice", "Non-basmati rice", "Wheat", "Toor dal", "Moong dal", "Chickpeas", "Millets"],
    img: grains,
  },
  {
    name: "Fresh Produce",
    desc: "Seasonal mangoes (Alphonso, Kesar), pomegranates, onions and other fresh agricultural produce.",
    items: ["Alphonso mangoes", "Kesar mangoes", "Pomegranates", "Onions", "Fresh garlic", "Bananas"],
    img: mangoes,
  },
  {
    name: "Industrial & Hygiene",
    desc: "Personal hygiene goods, packaging materials and essential industrial commodities at export scale.",
    items: ["Personal hygiene goods", "Industrial commodities", "Packaging materials", "Food essentials", "Custom sourcing"],
    img: warehouse,
  },
];

function Exports() {
  return (
    <>
      <PageHero
        eyebrow="Exports Catalogue"
        title={<>Indian quality,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow dark:via-white to-zinc-500">worldwide reach.</span></>}
        subtitle="Spices, grains, fresh produce, hygiene essentials and industrial commodities — sourced from trusted Indian suppliers and shipped to importers, distributors and wholesalers across continents."
      />

      <section className="px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto space-y-6">
          {CATEGORIES.map((cat, i) => (
            <CategoryRow key={cat.name} cat={cat} reverse={i % 2 === 1} index={i} />
          ))}
        </div>
      </section>

      {/* Industries served */}
      <IndustriesServed />
    </>
  );
}

function CategoryRow({ cat, reverse, index }: { cat: typeof CATEGORIES[number]; reverse: boolean; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal>
      <div className={`group rounded-3xl border border-border bg-card/60 dark:bg-zinc-900/30 overflow-hidden grid md:grid-cols-12 gap-0 ${reverse ? "md:[direction:rtl]" : ""}`}>
        <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto overflow-hidden [direction:ltr]">
          <img src={cat.img} alt={cat.name} width={1024} height={1024} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 to-transparent" />
        </div>
        <div className="md:col-span-7 p-8 md:p-14 flex flex-col justify-center [direction:ltr]">
          <span className="text-[10px] font-mono text-cyan-glow tracking-[0.3em]">CATEGORY · {String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tighter">{cat.name}</h3>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl">{cat.desc}</p>
          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-8 inline-flex items-center gap-3 w-fit text-xs uppercase tracking-widest font-bold text-cyan-glow"
          >
            <span className={`size-7 rounded-full border border-cyan-glow/40 grid place-items-center transition-transform ${open ? "rotate-45" : ""}`}>
              <Plus size={12} />
            </span>
            {open ? "Hide products" : "View products"}
          </button>
          <m.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            className="overflow-hidden"
          >
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
              {cat.items.map((it) => (
                <div key={it} className="text-sm text-foreground dark:text-zinc-300 flex items-center gap-2 border-b border-border py-2">
                  <span className="size-1 rounded-full bg-cyan-glow" /> {it}
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </Reveal>
  );
}

const INDUSTRIES = [
  { label: "Food & Beverage",    Icon: UtensilsCrossed },
  { label: "Retail & Wholesale", Icon: ShoppingBag     },
  { label: "Hospitality",        Icon: Hotel           },
  { label: "Manufacturing",      Icon: Factory         },
  { label: "Pharmaceuticals",    Icon: FlaskConical    },
  { label: "FMCG",               Icon: Package         },
  { label: "Distribution",       Icon: Truck           },
  { label: "Hospitality Chains", Icon: Building2       },
];

function IndustriesServed() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-glow">— Industries served</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Trusted across<br /><span className="text-muted-foreground">verticals.</span>
          </h2>
        </Reveal>
        <RevealStagger className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30 border border-border rounded-3xl overflow-hidden">
          {INDUSTRIES.map(({ label, Icon }) => (
            <m.div
              key={label}
              variants={itemVariants}
              className="bg-background p-8 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/70 transition-colors group"
            >
              <Icon size={22} className="text-cyan-glow" />
              <div className="mt-6 text-lg font-bold group-hover:text-cyan-glow transition-colors">{label}</div>
            </m.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
