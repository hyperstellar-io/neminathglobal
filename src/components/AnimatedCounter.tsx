import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimatedCounter({
  to,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) =>
    to >= 100 ? Math.round(v).toLocaleString() : v.toFixed(1).replace(/\.0$/, "")
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, to, duration, mv]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
