import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MIN_MS = 2700;

// ── Plane ─────────────────────────────────────────────────────────────────

function PlaneIcon() {
  return (
    <motion.svg
      viewBox="0 0 130 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-32 h-14 md:w-40 md:h-[4.5rem]"
      initial={{ x: -28, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.65, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Contrail dashes */}
      <motion.path
        d="M2 29 Q14 27 32 28"
        stroke="#22d3ee"
        strokeWidth="1"
        strokeOpacity="0.22"
        strokeLinecap="round"
        strokeDasharray="3 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.6 }}
      />
      {/* Fuselage */}
      <motion.path
        d="M22 29 Q27 24 38 23 L86 23 Q100 23 106 28 Q100 33 86 33 L38 33 Q27 34 22 29Z"
        fill="rgba(34,211,238,0.08)"
        stroke="#22d3ee"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.78, duration: 0.95, ease: "easeOut" }}
      />
      {/* Nose cone */}
      <motion.path
        d="M86 23 Q106 28 86 33Z"
        fill="rgba(34,211,238,0.2)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.12, duration: 0.35 }}
      />
      {/* Main wing */}
      <motion.path
        d="M54 23 L66 4 L78 6 L70 23Z"
        fill="rgba(34,211,238,0.14)"
        stroke="#22d3ee"
        strokeWidth="0.9"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.75, ease: "easeOut" }}
      />
      {/* Vertical tail fin */}
      <motion.path
        d="M30 23 L32 12 L38 13 L36 23Z"
        fill="rgba(34,211,238,0.14)"
        stroke="#22d3ee"
        strokeWidth="0.8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.06, duration: 0.5 }}
      />
      {/* Horizontal tail fin */}
      <motion.path
        d="M26 23 L19 17 L28 17 L30 23Z"
        fill="rgba(34,211,238,0.14)"
        stroke="#22d3ee"
        strokeWidth="0.8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.09, duration: 0.45 }}
      />
      {/* Engine pod */}
      <motion.path
        d="M65 32 Q72 31 82 32 Q72 35 65 34Z"
        fill="rgba(34,211,238,0.12)"
        stroke="#22d3ee"
        strokeWidth="0.7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.18, duration: 0.3 }}
      />
      {/* Cabin windows */}
      <motion.path
        d="M63 27 Q72 26 82 26"
        stroke="#22d3ee"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeOpacity="0.38"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.22, duration: 0.4 }}
      />
    </motion.svg>
  );
}

// ── Star Anise (Spice) ────────────────────────────────────────────────────

function SpiceIcon() {
  const petalCount = 8;
  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[5.5rem] h-[5.5rem] md:w-28 md:h-28"
      initial={{ opacity: 0, scale: 0.35, rotate: -70 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.62, duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "center" }}
    >
      {/* Petals */}
      {Array.from({ length: petalCount }, (_, i) => {
        const angle = i * (360 / petalCount);
        const rad = (angle * Math.PI) / 180;
        const cx = 50 + 18 * Math.sin(rad);
        const cy = 50 - 18 * Math.cos(rad);
        const seedX = 50 + 30 * Math.sin(rad);
        const seedY = 50 - 30 * Math.cos(rad);
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.88 + i * 0.065,
              duration: 0.55,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            style={{ transformOrigin: "50px 50px", transformBox: "fill-box" }}
          >
            {/* Petal body */}
            <ellipse
              cx={cx}
              cy={cy}
              rx="5.5"
              ry="12"
              fill="rgba(245,158,11,0.18)"
              stroke="#f59e0b"
              strokeWidth="0.8"
              transform={`rotate(${angle}, ${cx}, ${cy})`}
            />
            {/* Radial vein */}
            <line
              x1={50 + 8 * Math.sin(rad)}
              y1={50 - 8 * Math.cos(rad)}
              x2={50 + 28 * Math.sin(rad)}
              y2={50 - 28 * Math.cos(rad)}
              stroke="#f59e0b"
              strokeWidth="0.5"
              strokeOpacity="0.45"
            />
            {/* Seed pod */}
            <circle
              cx={seedX}
              cy={seedY}
              r="3"
              fill="rgba(251,191,36,0.35)"
              stroke="#fbbf24"
              strokeWidth="0.65"
            />
          </motion.g>
        );
      })}
      {/* Centre ring */}
      <motion.circle
        cx="50"
        cy="50"
        r="7.5"
        fill="rgba(251,191,36,0.22)"
        stroke="#fbbf24"
        strokeWidth="1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.45, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      />
      {/* Centre dot */}
      <motion.circle
        cx="50"
        cy="50"
        r="3"
        fill="#fbbf24"
        fillOpacity="0.85"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.58, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      />
    </motion.svg>
  );
}

// ── Sun / Solar ───────────────────────────────────────────────────────────

function SolarIcon() {
  const rayCount = 12;
  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[5.5rem] h-[5.5rem] md:w-28 md:h-28"
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.62, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "center" }}
    >
      {/* Slow-spinning ambient dashed ring */}
      <motion.circle
        cx="50"
        cy="50"
        r="47"
        stroke="#fbbf24"
        strokeWidth="0.35"
        strokeOpacity="0.12"
        strokeDasharray="2.5 7"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      />

      {/* Rays — draw outward from core */}
      {Array.from({ length: rayCount }, (_, i) => {
        const angle = i * (360 / rayCount);
        const rad = ((angle - 90) * Math.PI) / 180;
        const isLong = i % 3 === 0;
        const r1 = 23;
        const r2 = isLong ? 43 : 36;
        return (
          <motion.line
            key={i}
            x1={50 + r1 * Math.cos(rad)}
            y1={50 + r1 * Math.sin(rad)}
            x2={50 + r2 * Math.cos(rad)}
            y2={50 + r2 * Math.sin(rad)}
            stroke="#fbbf24"
            strokeWidth={isLong ? 2.2 : 1.3}
            strokeOpacity={isLong ? 0.88 : 0.42}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: isLong ? 0.88 : 0.42 }}
            transition={{ delay: 0.88 + i * 0.04, duration: 0.5, ease: "easeOut" }}
          />
        );
      })}

      {/* Core circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="19"
        fill="rgba(251,191,36,0.1)"
        stroke="#fbbf24"
        strokeWidth="1.4"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.12, duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      />

      {/* Solar panel grid lines */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.42, duration: 0.45 }}
      >
        <line x1="33" y1="50" x2="67" y2="50" stroke="#fbbf24" strokeWidth="0.65" strokeOpacity="0.32" />
        <line x1="50" y1="33" x2="50" y2="67" stroke="#fbbf24" strokeWidth="0.65" strokeOpacity="0.32" />
        <line x1="38.7" y1="38.7" x2="61.3" y2="61.3" stroke="#fbbf24" strokeWidth="0.45" strokeOpacity="0.22" />
        <line x1="61.3" y1="38.7" x2="38.7" y2="61.3" stroke="#fbbf24" strokeWidth="0.45" strokeOpacity="0.22" />
      </motion.g>

      {/* Centre glint — spring pop */}
      <motion.circle
        cx="50"
        cy="50"
        r="5.5"
        fill="#fbbf24"
        fillOpacity="0.8"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.35, 1] }}
        transition={{ delay: 1.55, duration: 0.6, times: [0, 0.55, 1] }}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      />
    </motion.svg>
  );
}

// ── Sector data ───────────────────────────────────────────────────────────

const SECTORS = [
  {
    id: "transport",
    label: "Transport",
    Icon: PlaneIcon,
    accent: "#22d3ee",
    glow: "rgba(34,211,238,0.055)",
  },
  {
    id: "spices",
    label: "Spices",
    Icon: SpiceIcon,
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.055)",
  },
  {
    id: "solar",
    label: "Solar",
    Icon: SolarIcon,
    accent: "#fbbf24",
    glow: "rgba(251,191,36,0.055)",
  },
] as const;

const panelVariants = {
  hidden: { opacity: 0, y: 55 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ── Loading Screen ────────────────────────────────────────────────────────

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const mountedAt = useRef(Date.now());

  useEffect(() => {
    const hide = () => {
      const elapsed = Date.now() - mountedAt.current;
      const wait = Math.max(0, MIN_MS - elapsed);
      setTimeout(() => setVisible(false), wait);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
      return () => window.removeEventListener("load", hide);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] flex flex-col md:flex-row overflow-hidden"
          style={{ backgroundColor: "#050507" }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
          transition={{ duration: 0.85, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none select-none"
            style={{
              backgroundImage: [
                "linear-gradient(rgba(255,255,255,0.013) 1px, transparent 1px)",
                "linear-gradient(90deg, rgba(255,255,255,0.013) 1px, transparent 1px)",
              ].join(","),
              backgroundSize: "52px 52px",
            }}
          />

          {/* Three sector panels */}
          {SECTORS.map((sector, i) => (
            <motion.div
              key={sector.id}
              custom={i}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              className="relative flex flex-1 flex-col items-center justify-center py-10 md:py-0"
              style={{
                background: `radial-gradient(ellipse 65% 55% at center, ${sector.glow} 0%, transparent 80%)`,
                minHeight: "33.33vh",
              }}
            >
              {/* Vertical divider — desktop */}
              {i < SECTORS.length - 1 && (
                <motion.span
                  className="absolute right-0 top-[18%] bottom-[18%] w-px hidden md:block"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.65, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              {/* Horizontal divider — mobile */}
              {i < SECTORS.length - 1 && (
                <motion.span
                  className="absolute bottom-0 left-[18%] right-[18%] h-px md:hidden"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.65, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                />
              )}

              {/* Icon */}
              <div className="flex items-center justify-center mb-6 md:mb-10">
                <sector.Icon />
              </div>

              {/* Accent pip */}
              <motion.span
                className="block w-1 h-1 rounded-full mb-3"
                style={{ backgroundColor: sector.accent }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.55, scale: 1 }}
                transition={{
                  delay: 1.65 + i * 0.09,
                  duration: 0.45,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              />

              {/* Sector label */}
              <motion.p
                className="font-sans font-light text-[10px] md:text-[11px] tracking-[0.42em] uppercase select-none"
                style={{ color: sector.accent }}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 0.55, y: 0 }}
                transition={{ delay: 1.75 + i * 0.09, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                {sector.label}
              </motion.p>
            </motion.div>
          ))}

          {/* Company wordmark */}
          <motion.div
            className="absolute bottom-7 md:bottom-10 left-0 right-0 text-center pointer-events-none select-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.05, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="font-sans font-light text-[9px] md:text-[11px] tracking-[0.6em] uppercase"
              style={{ color: "rgba(255,255,255,0.22)" }}
            >
              Neminath&nbsp;&nbsp;Global
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
