export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-border bg-foreground/5 backdrop-blur-xl mb-6">
      <span className="size-1.5 rounded-full bg-cyan-glow animate-pulse" />
      <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">{children}</span>
    </div>
  );
}
