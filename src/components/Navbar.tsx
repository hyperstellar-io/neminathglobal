import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../hooks/use-theme";
import { CatalogueDownload } from "./CatalogueDownload";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/exports", label: "Exports" },
  { to: "/solar-services", label: "Solar" },
  { to: "/global-presence", label: "Global" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { theme, toggleTheme } = useTheme();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-4 inset-x-0 z-50 px-4">
        <div className="mx-auto max-w-[1200px] h-16 px-6 md:px-8 flex items-center justify-between rounded-full border border-border dark:border-white/20 bg-background/70 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/40">
          <Link
            to="/"
            className="font-extrabold tracking-tighter text-base md:text-lg text-foreground"
          >
            NEMINATH <span className="font-medium text-muted-foreground">GLOBAL</span>
          </Link>

          <div className="hidden md:flex items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {links.slice(1, -1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative py-1 group hover:text-cyan-glow transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-cyan-glow transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="size-9 rounded-full border border-border dark:border-white/20 grid place-items-center hover:border-cyan-glow transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.18 }}
                  className="grid place-items-center"
                >
                  {theme === "dark" ? (
                    <Moon size={15} className="text-zinc-300" />
                  ) : (
                    <Sun size={15} className="text-zinc-600" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            <CatalogueDownload
              label="Catalogue"
              className="hidden lg:inline-flex ml-1 px-5 py-2.5 border border-border dark:border-white/20 text-[11px] font-bold uppercase tracking-widest rounded-full hover:border-cyan-glow hover:text-cyan-glow transition-all active:scale-95"
            />
            <Link
              to="/contact"
              className="hidden md:inline-flex ml-1 px-5 py-2.5 bg-foreground text-background text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-cyan-glow transition-all active:scale-95"
            >
              Inquire
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden size-10 grid place-items-center rounded-full border border-border dark:border-white/20 text-foreground relative z-50"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-40 bg-background flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-8 gap-1 overflow-y-auto pt-24 pb-10">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    className="block py-4 text-3xl font-extrabold tracking-tight text-foreground hover:text-cyan-glow border-b border-border active:bg-foreground/5"
                    activeProps={{ className: "text-cyan-glow" }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-8 pb-10 shrink-0 flex flex-col gap-3">
              <CatalogueDownload
                label="Download Catalogue"
                className="w-full inline-flex items-center justify-center px-7 py-4 border border-border dark:border-white/20 text-sm font-bold uppercase tracking-widest rounded-full hover:border-cyan-glow hover:text-cyan-glow transition-all active:scale-95"
              />
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-7 py-4 bg-foreground text-background text-sm font-bold uppercase tracking-widest rounded-full hover:bg-cyan-glow transition-all active:scale-95"
              >
                Inquire
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
