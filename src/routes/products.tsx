import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight } from "lucide-react";
import mvr from "@/assets/hero-mvr-plant.jpg";
import plate from "@/assets/plate-falling-film.jpg";
import tubular from "@/assets/tubular-falling-film.jpg";
import centrifuge from "@/assets/pusher-centrifuge.jpg";
import hx from "@/assets/heat-exchanger.jpg";
import atfdAsset from "@/assets/atfd.png.asset.json";
import paddleAsset from "@/assets/paddle-dryer.png.asset.json";

const atfd = atfdAsset.url;
const paddle = paddleAsset.url;

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — MVR Evaporators, Falling Film, Centrifuge | Gatimaan" },
      { name: "description", content: "MVR vaporization & distillation systems, plate and tubular falling film evaporators, pusher centrifuge separation, and heat exchangers — engineered to spec." },
      { property: "og:title", content: "Products | Gatimaan MVR Engineering" },
      { property: "og:description", content: "Skid-mounted MVR plants up to 50 KLD, plate / tubular falling film, pusher centrifuge, heat exchangers." },
    ],
  }),
  component: Products,
});

const PRODUCTS = [
  {
    img: mvr,
    name: "MVR Vaporization & Distillation Systems",
    code: "P-01",
    desc: "Skid-mounted Mechanical Vapour Recompression plants for ZLD, clean water and concentration duty. Single or multi-effect, tailored to feed chemistry.",
    specs: [
      ["Capacity", "0.5 – 50 KLD"],
      ["Energy use", "12 – 25 kW / KL"],
      ["Recovery", "up to 99.5%"],
      ["MOC", "SS-316 / 304 / Duplex"],
      ["Heat source", "Electric — no steam"],
    ],
    use: ["ZLD", "Clean water", "Brine concentration"],
  },
  {
    img: plate,
    name: "Plate Falling Film Evaporators",
    code: "P-02",
    desc: "Compact, low hold-up plate-type falling film evaporators for clean and moderately fouling streams — delivering high heat-transfer with a small footprint.",
    specs: [
      ["Heat-transfer", "1500 – 3500 W/m²K"],
      ["Hold-up", "Low (~30% vs tubular)"],
      ["Cleaning", "CIP friendly"],
      ["MOC", "SS-316L plates"],
    ],
    use: ["Dairy", "Pharma", "Process liquids"],
  },
  {
    img: tubular,
    name: "Tubular Falling Film Evaporators",
    code: "P-03",
    desc: "Robust shell-and-tube falling film design for fouling and corrosive duty. The workhorse of high-TDS effluent evaporation.",
    specs: [
      ["Tube length", "6 – 12 m"],
      ["TDS handling", "up to 280,000 ppm"],
      ["MOC", "SS-316L / Duplex / Ti"],
      ["Configuration", "Single / multi-effect"],
    ],
    use: ["Tannery", "Textile", "Chemical effluent"],
  },
  {
    img: centrifuge,
    name: "Pusher Centrifuge — Solid/Liquid Separation",
    code: "P-04",
    desc: "Continuous pusher-type centrifuges for crystallised salt and solid recovery downstream of the evaporator — high-G separation, dry cake.",
    specs: [
      ["Throughput", "0.5 – 15 TPH"],
      ["G-force", "up to 1500 G"],
      ["Cake moisture", "< 5%"],
      ["MOC", "SS-316L / Duplex"],
    ],
    use: ["Salt recovery", "Crystalliser discharge"],
  },
  {
    img: hx,
    name: "Heat Exchangers",
    code: "P-05",
    desc: "Custom-built shell-and-tube and plate heat exchangers — pre-heaters, condensers and feed/effluent recuperators integral to MVR efficiency.",
    specs: [
      ["Type", "Shell-tube · Plate · Spiral"],
      ["Design code", "ASME Sec. VIII Div. 1"],
      ["Pressure", "up to 25 bar"],
      ["MOC", "SS / Duplex / Ti / SMO"],
    ],
    use: ["Pre-heat", "Condenser", "Recuperator"],
  },
  {
    img: atfd,
    name: "ATFD — Agitated Thin Film Dryer",
    code: "P-06",
    desc: "Vertical agitated thin film dryer for concentrating and drying heat-sensitive, viscous or fouling streams. A high-speed rotor spreads feed as a thin film on the heated wall for short residence time and near-dry discharge downstream of the MVR.",
    specs: [
      ["Heat-transfer area", "0.5 – 25 m²"],
      ["Residence time", "10 – 60 seconds"],
      ["Feed viscosity", "up to 50,000 cP"],
      ["Final solids", "up to 95% w/w"],
      ["MOC", "SS-316L / Hastelloy / Duplex"],
    ],
    use: ["ZLD polishing", "Heat-sensitive concentrates", "Pharma / Specialty chemicals"],
  },
  {
    img: paddle,
    name: "Paddle Dryer",
    code: "P-07",
    desc: "Indirect-heated twin-shaft paddle dryer for drying wet cakes, sludges and salts from the crystalliser or centrifuge. Wedge-shaped paddles provide self-cleaning action, high heat-transfer, and dust-free continuous discharge.",
    specs: [
      ["Heat-transfer area", "2 – 60 m²"],
      ["Feed moisture", "20 – 80%"],
      ["Final moisture", "< 1%"],
      ["Heating medium", "Steam / hot oil / hot water"],
      ["MOC", "SS-316L / Duplex / Carbon steel"],
    ],
    use: ["Salt drying", "ETP / ZLD sludge", "Chemical crystals"],
  },
];

function Products() {
  useReveal();
  return (
    <SiteLayout>
      <section className="hero-grad text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container-x relative">
          <div className="eyebrow text-[var(--aqua)]">Product catalogue</div>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-semibold max-w-3xl">Engineered systems for steam-free vaporization & separation.</h1>
          <p className="mt-5 max-w-xl text-white/70">Five product families. Each one designed, fabricated and commissioned at our Malanpur works in M.P., India.</p>
        </div>
      </section>

      <div className="container-x py-20 space-y-24">
        {PRODUCTS.map((p, i) => (
          <article key={p.code} className="grid lg:grid-cols-12 gap-10 reveal items-center">
            <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
              <div className="relative card-tech overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-[420px] object-cover" />
                <div className="absolute top-4 left-4 font-mono text-[11px] tracking-[0.2em] bg-[var(--ink)] text-white px-2.5 py-1">{p.code}</div>
              </div>
            </div>
            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--aqua-deep)]">{p.code} · Product</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold leading-tight">{p.name}</h2>
              <p className="mt-4 text-muted-foreground">{p.desc}</p>

              <div className="mt-6 border-t border-border">
                {p.specs.map(([k, v]) => (
                  <div key={k} className="spec-row">
                    <span>{k}</span>
                    <span className="text-foreground">{v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.use.map((u) => (
                  <span key={u} className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 border border-border bg-mist">{u}</span>
                ))}
              </div>

              <Link to="/contact" className="btn-ghost mt-6">Request specs <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
