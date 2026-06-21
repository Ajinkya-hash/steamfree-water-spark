import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight, Download, MapPin } from "lucide-react";

import nectafreshHero from "@/assets/case-nectafresh-hero.jpg.asset.json";
import huechemHero from "@/assets/case-huechem-hero.jpg.asset.json";
import gantexHero from "@/assets/case-gantex-hero.jpg.asset.json";
import veeralHero from "@/assets/case-veeral-hero.jpg.asset.json";
import nectafreshPdf from "@/assets/case-nectafresh.pdf.asset.json";
import huechemPdf from "@/assets/case-huechem.pdf.asset.json";
import gantexPdf from "@/assets/case-gantex.pdf.asset.json";
import veeralPdf from "@/assets/case-veeral.pdf.asset.json";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Success Stories — Commissioned MVR & ZLD Plants | Gatimaan MVR Engineering" },
      { name: "description", content: "Real commissioned MVR and Zero Liquid Discharge projects — textile, dye intermediates, speciality chemicals and food processing. Capacities, energy and recovery numbers from live SCADA." },
      { property: "og:title", content: "Success Stories — Gatimaan MVR Engineering" },
      { property: "og:description", content: "Commissioned MVR-ZLD plants from 72 to 360 KLD — zero steam, full SCADA, audited results." },
      { property: "og:image", content: gantexHero.url },
    ],
  }),
  component: CaseStudies,
});

interface CaseStudy {
  slug: string;
  client: string;
  subline?: string;
  location: string;
  industry: string;
  hero: { url: string };
  pdf: { url: string };
  headline: string;
  summary: string;
  metrics: { k: string; v: string }[];
  highlights: string[];
}

const STUDIES: CaseStudy[] = [
  {
    slug: "shree-gantex",
    client: "Shree Gantex Processors Pvt. Ltd.",
    location: "Tarsadi GIDC, Mahuva, Surat, Gujarat",
    industry: "Textile — Dyeing, Printing & Finishing",
    hero: gantexHero,
    pdf: gantexPdf,
    headline: "300 KLD MVR-ZLD running at +20% over design — at 7–8 kWh/KL.",
    summary:
      "A 5-stage MVR system (4× plate falling-film + 1× forced circulation) treating 5,000–6,000 ppm dye-house effluent under GPCB's ZLD mandate. Live throughput exceeds 360 KLD with condensate TDS below 30 ppm — better than most freshwater sources.",
    metrics: [
      { k: "Design capacity", v: "300 KLD" },
      { k: "Actual throughput", v: ">360 KLD" },
      { k: "Water recovery", v: "98.8%" },
      { k: "Specific energy", v: "7–8 kWh/KL" },
      { k: "Condensate TDS", v: "<30 ppm" },
      { k: "Annual savings", v: "~₹7.5 Cr" },
    ],
    highlights: [
      "Zero continuous steam — boiler runs only 0.30 TPD for cold start",
      "CO₂ reduction of ~32.5 MT/day vs. conventional MEE",
      "GPCB ZLD compliant · 24×7 fully automated PLC + SCADA",
    ],
  },
  {
    slug: "huechem-global",
    client: "Huechem Global",
    subline: "Unit of Gopinath Chemtech",
    location: "Vatva GIDC, Ahmedabad, Gujarat",
    industry: "Dyes & Dye Intermediates",
    hero: huechemHero,
    pdf: huechemPdf,
    headline: "72 KLD ZLD on 27–30% TDS chloride-fluoride effluent — without ATFD or paddle dryer.",
    summary:
      "One of the most demanding effluents we have engineered: corrosive halide-laden dye intermediate wastewater at extreme TDS. Solved with Titanium Grade-2 heat exchangers, SS 316L wetted parts, and a hydrocyclone–thickener–Nutsche filter train — first-of-its-kind in the region.",
    metrics: [
      { k: "Capacity", v: "72 KLD" },
      { k: "Feed TDS", v: "27–30%" },
      { k: "Final slurry", v: "95% TDS" },
      { k: "Specific energy", v: "28 kWh/KL" },
      { k: "vs. MEE energy", v: "7–8% only" },
      { k: "Heat exchanger", v: "Titanium Gr. 2" },
    ],
    highlights: [
      "Zero steam · zero external heat · zero ATFD or paddle dryer",
      "Mother liquor from Nutsche filter recycled back to MVR — closed ZLD loop",
      "GPCB / CPCB compliant — Vatva GIDC's most monitored cluster",
    ],
  },
  {
    slug: "veeral-organics",
    client: "Veeral Organics Pvt. Ltd.",
    subline: "Unit of Vinati Organics Group",
    location: "MIDC Mahad, Raigad, Maharashtra",
    industry: "Speciality Chemicals (IBB, ATBS & intermediates)",
    hero: veeralHero,
    pdf: veeralPdf,
    headline: "140 KLD ZLD for COD up to 1,00,000 mg/L — biological treatment fully replaced.",
    summary:
      "High-strength refractory effluent where biology fails: COD 70k–1L ppm, BOD:COD ~0.30. The MVR plant runs at 17.2 kWh/KL actual — below the 20 kWh/KL design target — recovering ~98% clean condensate while eliminating boiler, ETP biology and hazardous biological sludge.",
    metrics: [
      { k: "Capacity", v: "140 KLD" },
      { k: "Feed COD", v: "70k–1L ppm" },
      { k: "Specific energy", v: "17.2 kWh/KL" },
      { k: "Condensate recovery", v: "~98%" },
      { k: "Steam used", v: "Zero" },
      { k: "Annual savings", v: "~₹3.6 Cr" },
    ],
    highlights: [
      "Two-stage MVR compressors (90 kW + 37 kW) with hot-start mode",
      "Condensate ~137–138 KLD reusable as utility / process water",
      "MPCB ZLD compliant — Mahad MIDC speciality chemical cluster",
    ],
  },
  {
    slug: "nectafresh-glucose",
    client: "Necta Fresh Agro Foods Pvt. Ltd.",
    location: "Jaspur, Udham Singh Nagar, Uttarakhand",
    industry: "Starch Processing — Liquid Glucose",
    hero: nectafreshHero,
    pdf: nectafreshPdf,
    headline: "360 TPD low-temperature MVR for liquid glucose — zero colour, zero steam.",
    summary:
      "A plate-type falling-film MVR concentrating food-grade liquid glucose from 27–28% to 75–80% DS at just 50–70 °C. No boiler, no Maillard browning, no caramelisation — running at ~109 kW for the entire 360 TPD line, with a CIP-ready automated cleaning cycle.",
    metrics: [
      { k: "Feed", v: "360 TPD" },
      { k: "Concentration", v: "27–28% → 75–80% DS" },
      { k: "Running power", v: "~109 kW" },
      { k: "Operating temp", v: "50–70 °C" },
      { k: "Energy savings", v: ">85% vs. MEE" },
      { k: "Annual savings", v: "₹8.11 Cr · ROI <1 yr" },
    ],
    highlights: [
      "Maillard reaction eliminated — water-white to pale-yellow product",
      "Plate-type falling film: seconds of residence time, gentle on viscous syrup",
      "Fully automated PLC-SCADA — auto/semi-auto/CIP modes",
    ],
  },
];

function CaseStudies() {
  useReveal();
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="hero-grad text-white py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow text-[var(--aqua)]">Success stories</div>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-semibold max-w-4xl leading-[1.05]">
            Plants we have built. Numbers from live SCADA.
          </h1>
          <p className="mt-5 max-w-2xl text-white/70">
            Four commissioned MVR-ZLD references across textile, dye intermediates, speciality
            chemicals and food processing. Every figure below is measured — not estimated.
          </p>
        </div>
      </section>

      {/* STUDIES */}
      <section className="py-20 bg-background">
        <div className="container-x space-y-20">
          {STUDIES.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid lg:grid-cols-12 gap-10 reveal scroll-mt-24"
            >
              {/* media */}
              <div
                className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-last" : ""}`}
              >
                <div className="relative card-tech overflow-hidden">
                  <img
                    src={s.hero.url}
                    alt={`${s.client} — MVR plant`}
                    className="w-full h-72 md:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-background/85 backdrop-blur px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground border border-border">
                    Story · 0{i + 1}
                  </div>
                </div>
              </div>

              {/* body */}
              <div className="lg:col-span-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--aqua-deep)]">
                  {s.industry}
                </div>
                <h2 className="mt-3 font-display text-2xl md:text-4xl font-semibold leading-tight">
                  {s.headline}
                </h2>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{s.client}</span>
                  {s.subline && <span className="font-mono text-[11px]">{s.subline}</span>}
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[var(--aqua)]" />
                    {s.location}
                  </span>
                </div>
                <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
                  {s.summary}
                </p>

                {/* metrics */}
                <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-px bg-border border border-border">
                  {s.metrics.map((m) => (
                    <div key={m.k} className="bg-card p-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {m.k}
                      </div>
                      <div className="mt-1.5 font-display text-lg md:text-xl font-semibold leading-tight">
                        {m.v}
                      </div>
                    </div>
                  ))}
                </div>

                {/* highlights */}
                <ul className="mt-6 space-y-2 font-mono text-sm">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="text-[var(--aqua)]">→</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={s.pdf.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    Download success story PDF <Download className="h-4 w-4" />
                  </a>
                  <Link to="/contact" className="btn-ghost">
                    Discuss a similar project
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-mist">
        <div className="container-x">
          <div className="border border-border bg-background p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="eyebrow">Your effluent next</div>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight">
                Send us a feed analysis. We'll quote a real plant.
              </h2>
            </div>
            <div className="md:justify-self-end">
              <p className="text-muted-foreground max-w-md mb-6">
                From feasibility and pilot trials to skid-mounted commissioning — every project
                above started with a single email.
              </p>
              <Link to="/contact" className="btn-primary">
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
