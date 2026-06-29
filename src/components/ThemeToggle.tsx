import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-6 right-6 z-50 size-11 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-lg grid place-items-center hover:shadow-cyan-glow/30 transition-shadow"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="grid place-items-center"
        >
          {isDark ? (
            <Moon size={18} className="text-zinc-300" />
          ) : (
            <Sun size={18} className="text-zinc-600" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
