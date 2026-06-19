const CLIENTS = [
  "Gopinath Chem-Tech",
  "Vinati Organics",
  "Centaac Corporation",
  "Kay Precision",
  "Shree Ganesh Engg.",
  "Nectafresh Agro Foods",
  "VSM Polyols",
  "Biznustek",
];

export function ClientStrip() {
  return (
    <section className="border-y border-border bg-mist">
      <div className="container-x py-10">
        <div className="flex items-center justify-between mb-6">
          <div className="eyebrow">Trusted by industry</div>
          <div className="font-mono text-[11px] text-muted-foreground">{CLIENTS.length} active clients · India</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {CLIENTS.map((c) => (
            <div
              key={c}
              className="bg-mist hover:bg-background transition-colors py-7 px-4 flex items-center justify-center text-center"
            >
              <span className="font-display text-sm font-medium tracking-tight text-foreground/75 hover:text-foreground transition-colors">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
