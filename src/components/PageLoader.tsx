import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 40" width="52" height="21" fill="currentColor" className={className}>
      {/* fuselage, nose pointing right */}
      <path d="M8 21 C8 18 14 17 22 16.5 L70 15 C82 14.7 92 16.5 98 20 C92 23.5 82 25.3 70 25 L22 23.5 C14 23 8 24 8 21 Z" />
      {/* tail fin */}
      <path d="M14 17.5 L20 5 L25 5.5 L21 17 Z" />
      {/* rear stabilizer */}
      <path d="M16 22.5 L11 33 L16 32.5 L21 23 Z" />
      {/* swept main wing */}
      <path d="M44 16 L60 2 L66 3 L52 17.5 Z" />
      <path d="M46 24 L60 37 L66 36 L54 23.5 Z" />
      {/* cockpit highlight */}
      <circle cx="82" cy="19.5" r="1.6" fillOpacity="0.6" />
    </svg>
  );
}

function FlowerIcon({ className }: { className?: string }) {
  const petals = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg
      viewBox="0 0 100 100"
      width="44"
      height="44"
      fill="none"
      stroke="currentColor"
      className={className}
    >
      {petals.map((deg) => (
        <g key={deg} transform={`rotate(${deg} 50 50)`}>
          <ellipse cx="50" cy="26" rx="6" ry="16" strokeWidth="1.25" />
          <circle cx="50" cy="12" r="2.2" fill="currentColor" stroke="none" />
        </g>
      ))}
      <circle cx="50" cy="50" r="9" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  const longRays = [0, 90, 180, 270];
  const shortRays = [45, 135, 225, 315];
  return (
    <svg
      viewBox="0 0 100 100"
      width="44"
      height="44"
      fill="none"
      stroke="currentColor"
      className={className}
    >
      {longRays.map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="50"
          x2="50"
          y2="4"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      {shortRays.map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="18"
          x2="50"
          y2="4"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="18" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="7" fill="currentColor" stroke="none" />
    </svg>
  );
}

const PILLARS = [
  { Icon: PlaneIcon, label: "TRANSPORT", color: "text-cyan-glow" },
  { Icon: FlowerIcon, label: "SPICES", color: "text-amber-600 dark:text-amber-400" },
  { Icon: SunIcon, label: "SOLAR", color: "text-amber-600 dark:text-amber-400" },
] as const;

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background overflow-hidden"
        >
          <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />

          <div className="relative grid grid-cols-3 w-full max-w-3xl px-4 sm:px-6">
            {PILLARS.map((p, i) => (
              <div key={p.label} className="flex flex-col items-center gap-2 sm:gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className={`h-11 flex items-center justify-center ${p.color} drop-shadow-[0_0_10px_currentColor]`}
                >
                  <p.Icon />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.18 }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className={`size-1 rounded-full ${p.color} bg-current`} />
                  <span
                    className={`text-[8px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.3em] font-semibold whitespace-nowrap ${p.color}`}
                  >
                    {p.label}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
