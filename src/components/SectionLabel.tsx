export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-border dark:border-white/20 bg-background/70 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/40 mb-6">
      <span className="size-1.5 rounded-full bg-cyan-glow animate-pulse" />
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground">
        {children}
      </span>
    </div>
  );
}
