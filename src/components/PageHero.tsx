import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  accent,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  accent?: React.ReactNode;
}) {
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(circle_at_50%_30%,black,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-glow/10 blur-[120px] animate-mesh pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>{eyebrow}</SectionLabel>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] max-w-5xl text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl font-medium text-muted-foreground max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {accent && <div className="mt-10">{accent}</div>}
      </div>
    </section>
  );
}
