import { Link } from "@tanstack/react-router";
import { Mail, Phone, ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="px-4 pb-4">
      <div className="relative pt-32 pb-12 px-8 md:px-16 rounded-[2.5rem] border border-border dark:border-white/20 bg-background/70 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/40 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />

        <div className="relative max-w-[1400px] mx-auto">
          <Reveal>
            <div id="lets-build" className="mb-24 max-w-4xl">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-glow mb-6">
                Let&apos;s build
              </div>
              <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9]">
                Trade, refined for
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-cyan-900 to-zinc-700 dark:from-cyan-glow dark:via-white dark:to-zinc-500">
                  a borderless world.
                </span>
              </h3>
              <motion.div
                className="mt-12 inline-block"
                animate={{ scale: [1, 1.06, 1, 1.06, 1, 1, 1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 px-7 py-4 bg-foreground text-background rounded-full font-bold text-sm uppercase tracking-widest hover:bg-cyan-glow transition-all group"
                >
                  Start a conversation
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </motion.div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-12 gap-15 mb-20">
            <div className="col-span-2 md:col-span-5">
              <div className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-6">
                NEMINATH
              </div>
              <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                A global trading house exporting premium spices, grains, agricultural and industrial
                goods from India, alongside sustainable solar energy solutions worldwide.
              </p>
              <div className="mt-10 flex flex-col gap-3 text-sm text-muted-foreground">
                <a
                  href="mailto:info@neminathglobal.com"
                  className="flex items-center gap-3 hover:text-cyan-glow"
                >
                  <Mail size={14} className="text-cyan-glow" /> info@neminathglobal.com
                </a>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="tel:+4915208268849"
                    className="flex items-center gap-3 hover:text-cyan-glow"
                  >
                    <Phone size={14} className="text-cyan-glow" /> 🇩🇪 +49 152 0826 8849
                  </a>
                  <a
                    href="tel:+919075240933"
                    className="flex items-center gap-3 hover:text-cyan-glow"
                  >
                    <Phone size={14} className="text-cyan-glow" /> 🇮🇳 +91 90752 40933
                  </a>
                </div>
              </div>
            </div>

            <FooterCol
              title="Explore"
              links={[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Exports", to: "/exports" },
                { label: "Solar Services", to: "/solar-services" },
              ]}
            />
            <FooterCol
              title="Network"
              links={[
                { label: "Global Presence", to: "/global-presence" },
                { label: "Contact", to: "/contact" },
              ]}
            />
            <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Follow Us
              </span>
              <div className="flex items-center gap-4 mt-1">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyan-glow transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyan-glow transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.indiamart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyan-glow transition-colors text-xs font-bold uppercase tracking-wide"
                >
                  IM
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyan-glow transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-10 border-t border-border gap-4">
            <div className="pl-0 md:pl-10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              © {new Date().getFullYear()} Neminath Global · A brand of Nemminath Enterprisee ·
              GSTIN: 08BKXPJ8189D1ZD
            </div>
            <div className="flex gap-10 pr-0 md:pr-10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>
          <div className="mt-6 pl-0 md:pl-10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
            Designed and Developed by HyperStellar Technology
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-4">
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {title}
      </span>
      {links.map((l) => (
        <Link
          key={l.label}
          to={l.to}
          className="text-sm text-muted-foreground hover:text-cyan-glow transition-colors w-fit"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
