import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, RotateCcw } from "lucide-react";

interface ErrorPageProps {
  code: string;
  title: string;
  subtitle: string;
  description: string;
  onRetry?: () => void;
}

export function ErrorPage({ code, title, subtitle, description, onRetry }: ErrorPageProps) {
  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Giant code — outline only, centred behind content */}
      <div
        className="absolute select-none pointer-events-none font-extrabold tracking-tighter leading-none text-transparent"
        style={{
          fontSize: "clamp(140px, 28vw, 280px)",
          WebkitTextStroke: "1px rgba(34,211,238,0.12)",
        }}
        aria-hidden
      >
        {code}
      </div>

      {/* Glow blob */}
      <div className="absolute size-[500px] rounded-full bg-cyan-glow/5 blur-[120px] pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-lg text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Error code badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border dark:border-white/20 bg-foreground/5 text-[10px] uppercase tracking-[0.2em] font-bold text-cyan-glow mb-8">
          <span className="size-1.5 rounded-full bg-cyan-glow" />
          Error {code}
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
          {title}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-cyan-900 to-zinc-700 dark:from-cyan-glow dark:via-white dark:to-zinc-500">
            {subtitle}
          </span>
        </h1>

        <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm mx-auto">{description}</p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cyan-glow transition-colors"
          >
            <ArrowLeft size={14} />
            Return home
          </Link>

          {onRetry ? (
            <button
              onClick={onRetry}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border dark:border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:border-cyan-glow hover:text-cyan-glow transition-colors"
            >
              <RotateCcw size={14} />
              Try again
            </button>
          ) : (
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border dark:border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:border-cyan-glow hover:text-cyan-glow transition-colors"
            >
              Contact us
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}
