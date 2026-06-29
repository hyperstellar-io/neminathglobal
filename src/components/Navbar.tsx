import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../hooks/use-theme";
import logoUrl from "../assets/Logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/exports", label: "Exports" },
  { to: "/solar-services", label: "Solar" },
  { to: "/global-presence", label: "Global" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 0.85]);
  const blur = useTransform(scrollY, [0, 120], [0, 18]);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { theme, toggleTheme } = useTheme();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.nav
      className="fixed top-0 inset-x-0 z-50 border-b border-transparent"
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(var(--nav-bg-rgb),${v})`),
        backdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoUrl} alt="Neminath Global" className="h-8 w-auto object-contain" />
          <span className="font-extrabold tracking-tighter text-base md:text-lg">
            NEMINATH <span className="font-light text-muted-foreground">GLOBAL</span>
          </span>
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
            className="size-9 rounded-full border border-border grid place-items-center hover:border-cyan-glow transition-colors"
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
                {theme === "dark"
                  ? <Moon size={15} className="text-zinc-300" />
                  : <Sun size={15} className="text-zinc-600" />}
              </motion.span>
            </AnimatePresence>
          </button>

          <Link
            to="/contact"
            className="hidden md:inline-flex ml-1 px-5 py-2.5 bg-foreground text-background text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-cyan-glow transition-all active:scale-95"
          >
            Inquire
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden size-10 grid place-items-center rounded-full border border-border text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border"
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="py-3 text-sm uppercase tracking-widest font-semibold text-foreground hover:text-cyan-glow border-b border-border"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
