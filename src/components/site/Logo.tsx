export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect x="1" y="1" width="38" height="38" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 26 Q 14 14, 20 20 T 30 14" stroke="var(--aqua)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="30" cy="14" r="2.5" fill="var(--aqua)" />
        <path d="M8 32h24" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
      <div className="leading-tight">
        <div className="font-display text-[15px] font-semibold tracking-tight">GATIMAAN</div>
        <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">MVR Engineering</div>
      </div>
    </div>
  );
}
