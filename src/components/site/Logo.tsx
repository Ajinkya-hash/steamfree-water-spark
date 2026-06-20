export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect x="2" y="2" width="36" height="36" rx="3" stroke="#1FB6C9" strokeWidth="2" fill="none" />
        <polyline
          points="8,28 14,22 20,26 26,16 32,20"
          stroke="#1FB6C9"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="22" r="2" fill="#1FB6C9" />
        <circle cx="20" cy="26" r="2" fill="#1FB6C9" />
        <circle cx="26" cy="16" r="2" fill="#1FB6C9" />
        <circle cx="32" cy="20" r="2" fill="#1FB6C9" />
      </svg>
      <div className="leading-tight">
        <div className="font-display text-[15px] font-semibold tracking-tight">GATIMAAN</div>
        <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">MVR Engineering</div>
      </div>
    </div>
  );
}
