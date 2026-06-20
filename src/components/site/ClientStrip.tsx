import clienteleAsset from "@/assets/clientele-logos.png.asset.json";

export function ClientStrip() {
  return (
    <section className="border-y border-border bg-background">
      <div className="container-x py-10">
        <div className="flex items-center justify-between mb-6">
          <div className="eyebrow">Trusted by industry</div>
          <div className="font-mono text-[11px] text-muted-foreground">8 active clients · India</div>
        </div>
        <div className="rounded-lg border border-border overflow-hidden bg-white">
          <img
            src={clienteleAsset.url}
            alt="Our Clientele — Gopinath Chem-Tech, Vinati Organics, Centaac Corporation, Kay Precision, Shree Ganesh Engineering, Nectafresh Agro Foods, VSM Polyols, Biznustek"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
