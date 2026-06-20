import logoAsset from "@/assets/gatimaan-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoAsset.url}
        alt="Gatimaan MVR Engineering"
        width="44"
        height="44"
        className="h-11 w-11 object-contain"
      />
      <div className="leading-tight">
        <div className="font-display text-[15px] font-semibold tracking-tight">GATIMAAN</div>
        <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">MVR Engineering</div>
      </div>
    </div>
  );
}
