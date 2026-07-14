import { motion } from "framer-motion";
import worldMapUrl from "../assets/world-map.webp";

// Equirectangular projection, image fills SVG 1000×500 exactly (preserveAspectRatio="none")
// x = (lon + 180) / 360 * 1000
// y = (90 - lat) / 180 * 500

// Jaipur, Rajasthan  75.78°E  26.91°N  → x=711  y=175
// Cairo, Egypt       31.24°E  30.04°N  → x=587  y=167
// Dubai, UAE         55.30°E  25.20°N  → x=654  y=180
// Ho Chi Minh City  106.66°E  10.82°N  → x=796  y=220

const ORIGIN = { x: 690, y: 225, label: "INDIA" };

const DESTINATIONS = [
  { x: 565, y: 220, label: "Egypt", delay: 0.3, cpx: 649, cpy: 101 },
  { x: 630, y: 220, label: "Dubai", delay: 0.7, cpx: 683, cpy: 118 },
  { x: 790, y: 240, label: "Vietnam", delay: 1.1, cpx: 754, cpy: 133 },
];

export function WorldMap({ light = false }: { light?: boolean }) {
  const dotColor = light ? "#0891b2" : "#22d3ee";
  const lineColor = light ? "rgba(8,145,178,0.55)" : "rgba(34,211,238,0.5)";

  return (
    <svg viewBox="480 60 420 350" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id="trade-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill={lineColor} />
        </marker>
      </defs>

      {/* World map dot background — screen blend makes black transparent, leaving white dots */}
      <image
        href={worldMapUrl}
        x="0"
        y="0"
        width="1000"
        height="500"
        preserveAspectRatio="none"
        style={{
          mixBlendMode: "screen" as React.CSSProperties["mixBlendMode"],
          opacity: light ? 0.28 : 0.22,
        }}
      />

      {/* Animated trade lines */}
      {DESTINATIONS.map((d) => {
        const pathD = `M ${ORIGIN.x} ${ORIGIN.y} Q ${d.cpx} ${d.cpy} ${d.x} ${d.y}`;
        return (
          <g key={d.label}>
            <motion.path
              d={pathD}
              stroke={lineColor}
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="4 5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: d.delay, ease: "easeOut" }}
            />
            <motion.path
              d={pathD}
              stroke={lineColor}
              strokeWidth="0.01"
              fill="none"
              markerEnd="url(#trade-arrow)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: d.delay + 1.9 }}
            />
          </g>
        );
      })}

      {/* Origin: Rajasthan */}
      <motion.circle
        cx={ORIGIN.x}
        cy={ORIGIN.y}
        r={7}
        fill={dotColor}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      />
      <motion.circle
        cx={ORIGIN.x}
        cy={ORIGIN.y}
        r={14}
        fill="none"
        stroke={dotColor}
        strokeWidth="0.8"
        animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
      <motion.text
        x={ORIGIN.x}
        y={ORIGIN.y - 16}
        textAnchor="middle"
        fill={dotColor}
        fontSize="9"
        fontWeight="700"
        letterSpacing="1.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {ORIGIN.label}
      </motion.text>

      {/* Destination nodes */}
      {DESTINATIONS.map((d) => (
        <g key={`node-${d.label}`}>
          <motion.circle
            cx={d.x}
            cy={d.y}
            r={4}
            fill={dotColor}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: d.delay + 1.8 }}
          />
          <motion.circle
            cx={d.x}
            cy={d.y}
            r={8}
            fill="none"
            stroke={dotColor}
            strokeWidth="0.7"
            animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: d.delay + 2 }}
          />
          <motion.text
            x={d.x}
            y={d.y + 18}
            textAnchor="middle"
            fill={dotColor}
            fontSize="8"
            letterSpacing="1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: d.delay + 2.1 }}
          >
            {d.label.toUpperCase()}
          </motion.text>
        </g>
      ))}
    </svg>
  );
}
