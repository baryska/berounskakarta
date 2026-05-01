export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-primary/25 bg-primary/12 px-3.5 py-1.5 font-display text-[0.82rem] font-semibold tracking-wide text-primary">
      <span className="h-[7px] w-[7px] rounded-full bg-accent" />
      {children}
    </span>
  );
}

export function BadgeWhite({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-white/30 bg-white/12 px-3.5 py-1.5 font-display text-[0.82rem] font-semibold tracking-wide text-white">
      <span className="h-[7px] w-[7px] rounded-full bg-accent" />
      {children}
    </span>
  );
}
