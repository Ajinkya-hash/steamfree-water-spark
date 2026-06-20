import gopinathAsset from "@/assets/client-gopinath.png.asset.json";
import vinatiAsset from "@/assets/client-vinati.png.asset.json";
import centaacAsset from "@/assets/client-centaac.png.asset.json";
import biznustekAsset from "@/assets/client-biznustek.png.asset.json";
import nectafreshAsset from "@/assets/client-nectafresh.png.asset.json";
import vsmAsset from "@/assets/client-vsm.png.asset.json";
import kayAsset from "@/assets/client-kay.png.asset.json";
import shreeGaneshAsset from "@/assets/client-shree-ganesh.png.asset.json";

interface Client {
  name: string;
  logo: { url: string };
  industry: string;
  description: string;
}

const CLIENTS: Client[] = [
  {
    name: "Gopinath Chem-Tech Limited",
    logo: gopinathAsset,
    industry: "Chemical Manufacturing",
    description:
      "Supplied MVR-based Zero Liquid Discharge system for chemical effluent recovery, achieving 99.5% water recovery and substantial salt recovery from process streams.",
  },
  {
    name: "Vinati Organics Limited",
    logo: vinatiAsset,
    industry: "Specialty Chemicals",
    description:
      "Installed steam-free MVR evaporators for ATBS and organic chemical production, replacing boiler dependency with pure electric drive for crystallisation and concentration.",
  },
  {
    name: "Centaac Corporation",
    logo: centaacAsset,
    industry: "Engineering & Infrastructure",
    description:
      "Deployed integrated MVR evaporation and crystallisation plant for industrial wastewater treatment, delivering continuous clean water reuse with minimal chemical dosing.",
  },
  {
    name: "Biznustek",
    logo: biznustekAsset,
    industry: "Business Solutions",
    description:
      "Provided compact MVR pilot system for R&D and process validation, enabling data-driven scale-up decisions for effluent treatment expansion.",
  },
  {
    name: "Nectafresh Agro Foods",
    logo: nectafreshAsset,
    industry: "Food Processing",
    description:
      "Engineered hygienic-design MVR evaporator for fruit juice concentration and agro-food effluent processing, maintaining product integrity while maximising water recovery.",
  },
  {
    name: "VSM Polyols Pvt. Ltd.",
    logo: vsmAsset,
    industry: "Polyols & Sweeteners",
    description:
      "Delivered multi-effect MVR plant for polyol process condensate recovery and salt crystallisation, supporting 'Creating Healthy Sweetness' with sustainable water management.",
  },
  {
    name: "Kay Precision",
    logo: kayAsset,
    industry: "Precision Engineering",
    description:
      "Installed closed-loop MVR evaporation system for metalworking coolant and wash water recovery, cutting fresh water intake and disposal costs by over 90%.",
  },
  {
    name: "Shree Ganesh Engineering Works",
    logo: shreeGaneshAsset,
    industry: "Industrial Fabrication",
    description:
      "Partnered for MVR evaporator fabrication and commissioning support, supplying robust falling-film and forced-circulation systems for diverse effluent profiles across India.",
  },
];

export function ClientStrip() {
  return (
    <section className="border-y border-border bg-background">
      <div className="container-x py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="eyebrow">Trusted by industry</div>
          <div className="font-mono text-[11px] text-muted-foreground">
            {CLIENTS.length} active clients · India
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="group relative rounded-xl border border-border bg-white overflow-hidden cursor-pointer transition-all duration-300 hover:border-aqua/60 hover:shadow-lg hover:shadow-aqua/5"
            >
              {/* Logo area */}
              <div className="relative h-36 md:h-40 flex items-center justify-center p-6">
                <img
                  src={client.logo.url}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-95 opacity-90 group-hover:opacity-40"
                  loading="lazy"
                />
              </div>

              {/* Default label */}
              <div className="px-4 pb-4 text-center transition-opacity duration-300 group-hover:opacity-0">
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  {client.industry}
                </p>
              </div>

              {/* Hover overlay with description */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 bg-white/95 backdrop-blur-sm">
                <h4 className="font-display text-sm font-semibold text-foreground mb-2 leading-tight">
                  {client.name}
                </h4>
                <p className="text-[11px] font-mono uppercase tracking-wider text-aqua mb-2">
                  {client.industry}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
