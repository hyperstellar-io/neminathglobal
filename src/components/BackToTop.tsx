import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="btt"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 left-6 z-50 size-11 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-lg grid place-items-center hover:border-cyan-glow hover:shadow-cyan-glow/20 transition-all"
        >
          <ArrowUp size={17} className="text-zinc-700 dark:text-zinc-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
