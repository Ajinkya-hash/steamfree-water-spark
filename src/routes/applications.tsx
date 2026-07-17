import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight, Droplets, Factory, FlaskConical, Beer, Milk, Newspaper, Car, Shirt, Layers } from "lucide-react";
import textileA from "@/assets/app-textile.jpg.asset.json";
import tanneryA from "@/assets/app-tannery.jpg.asset.json";
import foodA from "@/assets/app-food.jpg.asset.json";
import automotiveA from "@/assets/app-automotive.jpg.asset.json";
import chemicalA from "@/assets/app-chemical.jpg.asset.json";
import paperA from "@/assets/app-paper.jpg.asset.json";
import dairyA from "@/assets/app-dairy.jpg.asset.json";
import breweryA from "@/assets/app-brewery.jpg.asset.json";

const textile = textileA.url;
const tannery = tanneryA.url;
const food = foodA.url;
const automotive = automotiveA.url;
const chemical = chemicalA.url;
const paper = paperA.url;
const dairy = dairyA.url;
const brewery = breweryA.url;

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications — Industries Served | Gatimaan MVR Engineering" },
      { name: "description", content: "MVR evaporator applications across textile, tannery, food & beverage, automotive, chemical & pharma, paper, dairy & poultry, and brewery & distillery." },
      { property: "og:title", content: "Applications | Gatimaan MVR Engineering" },
      { property: "og:description", content: "Industry-specific ZLD and clean water recovery from textile to brewery effluent." },
    ],
  }),
  component: Applications,
});

type App = {
  code: string;
  name: string;
  streams: string;
  outcome: string;
  image: string;
  icon: typeof Droplets;
  tds: string;
  recovery: string;
  bullets: string[];
};

const APPS: App[] = [
  {
    code: "A-01", name: "Textile", image: textile, icon: Shirt,
    streams: "Dye-house effluent, RO reject, sizing wash",
    outcome: "ZLD compliance, salt recovery",
    tds: "60,000 – 180,000 ppm", recovery: "up to 98%",
    bullets: ["Colour & COD reduction", "Sodium sulphate / chloride recovery", "Reuse water back to dye-house"],
  },
  {
    code: "A-02", name: "Tannery", image: tannery, icon: Layers,
    streams: "Chrome and salt-laden effluent",
    outcome: "Chrome recovery, sodium chloride recovery",
    tds: "80,000 – 220,000 ppm", recovery: "up to 97%",
    bullets: ["Segregated chrome liquor treatment", "NaCl crystallisation", "Discharge-free tannery"],
  },
  {
    code: "A-03", name: "Food & Beverages", image: food, icon: Droplets,
    streams: "CIP effluent, syrup concentrates, juice clarification",
    outcome: "Process liquid concentration, water reuse",
    tds: "10,000 – 90,000 ppm", recovery: "up to 95%",
    bullets: ["Low-temperature evaporation", "Product-grade concentrate", "CIP-friendly SS-316L build"],
  },
  {
    code: "A-04", name: "Automotive", image: automotive, icon: Car,
    streams: "Pre-treatment & paint shop effluent, oily water",
    outcome: "Discharge-free paint shops",
    tds: "30,000 – 120,000 ppm", recovery: "up to 96%",
    bullets: ["Oily / emulsified stream handling", "Heavy metal concentration", "Paint-shop ZLD"],
  },
  {
    code: "A-05", name: "Chemical & Pharma", image: chemical, icon: FlaskConical,
    streams: "Mother liquors, API effluent, solvent recovery streams",
    outcome: "Concentration, distillate recovery",
    tds: "up to 280,000 ppm", recovery: "up to 99.5%",
    bullets: ["Corrosion-resistant MOC (Duplex / Ti)", "Solvent & product recovery", "GMP-aligned fabrication"],
  },
  {
    code: "A-06", name: "Paper", image: paper, icon: Newspaper,
    streams: "Black liquor, machine white-water",
    outcome: "Solids concentration, water reuse",
    tds: "40,000 – 200,000 ppm", recovery: "up to 96%",
    bullets: ["Black liquor concentration", "Fibre-friendly design", "White-water recycling"],
  },
  {
    code: "A-07", name: "Dairy & Poultry", image: dairy, icon: Milk,
    streams: "Whey concentration, blood / processing effluent",
    outcome: "By-product recovery, COD reduction",
    tds: "20,000 – 100,000 ppm", recovery: "up to 97%",
    bullets: ["Whey → high-solids concentrate", "COD reduction > 90%", "Hygienic sanitary finish"],
  },
  {
    code: "A-08", name: "Brewery & Distillery", image: brewery, icon: Beer,
    streams: "Spent wash, vinasse, RO concentrate",
    outcome: "Concentration, potash recovery",
    tds: "80,000 – 250,000 ppm", recovery: "up to 98%",
    bullets: ["Spent wash concentration for incineration/potash", "Vinasse handling", "ZLD distillery compliance"],
  },
];

function Applications() {
  useReveal();
  const [active, setActive] = useState(0);
  const current = APPS[active];
  const Icon = current.icon;

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="hero-grad text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container-x relative">
          <div className="eyebrow text-[var(--aqua)]">Applications</div>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-semibold max-w-3xl">Wherever there's a hard effluent stream, MVR delivers.</h1>
          <p className="mt-5 max-w-xl text-white/70">Eight industries. Custom-engineered process flows for each. Explore what we treat and what we deliver.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {APPS.map((a, i) => (
              <button
                key={a.code}
                onClick={() => setActive(i)}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] px-3 py-2 border transition-all ${
                  i === active
                    ? "border-[var(--aqua)] bg-[var(--aqua)]/10 text-[var(--aqua)]"
                    : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                {a.code} · {a.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE EXPLORER */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: list */}
            <div className="lg:col-span-4">
              <div className="eyebrow">Explore by industry</div>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-semibold">Pick a stream. See what changes.</h2>
              <div className="mt-6 border-t border-border">
                {APPS.map((a, i) => {
                  const AI = a.icon;
                  const isActive = i === active;
                  return (
                    <button
                      key={a.code}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`group w-full text-left border-b border-border py-4 flex items-center gap-4 transition-all ${
                        isActive ? "pl-4 bg-mist" : "hover:pl-2"
                      }`}
                    >
                      <span
                        className={`h-9 w-9 flex items-center justify-center border transition-colors ${
                          isActive ? "border-[var(--aqua)] text-[var(--aqua)] bg-white" : "border-border text-muted-foreground"
                        }`}
                      >
                        <AI className="h-4 w-4" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{a.code}</span>
                        <span className="block font-display text-lg font-semibold">{a.name}</span>
                      </span>
                      <ArrowRight
                        className={`h-4 w-4 transition-all ${
                          isActive ? "text-[var(--aqua)] translate-x-0" : "text-muted-foreground -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: detail */}
            <div className="lg:col-span-8">
              <div key={current.code} className="reveal in">
                <div className="relative card-tech overflow-hidden">
                  <img
                    src={current.image}
                    alt={`${current.name} facility`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full h-[300px] md:h-[440px] object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-[var(--ink)]/20 to-transparent" />
                  <div className="absolute top-4 left-4 font-mono text-[11px] tracking-[0.2em] bg-[var(--ink)] text-white px-2.5 py-1">{current.code}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-[var(--aqua)]" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--aqua)]">Industry</span>
                    </div>
                    <h3 className="mt-2 font-display text-3xl md:text-4xl font-semibold">{current.name}</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="border border-border p-5 bg-mist">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Streams handled</div>
                    <div className="mt-2 text-sm">{current.streams}</div>
                  </div>
                  <div className="border border-border p-5 bg-mist">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Typical TDS</div>
                    <div className="mt-2 font-display text-xl font-semibold">{current.tds}</div>
                  </div>
                  <div className="border border-[var(--aqua)]/40 p-5 bg-[var(--aqua)]/5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--aqua-deep)]">Water recovery</div>
                    <div className="mt-2 font-display text-xl font-semibold text-[var(--aqua-deep)]">{current.recovery}</div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--aqua-deep)] mb-3">Outcome</div>
                  <p className="font-display text-xl md:text-2xl font-medium leading-snug">{current.outcome}</p>
                  <ul className="mt-5 space-y-2">
                    {current.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm">
                        <span className="mt-2 h-1 w-4 bg-[var(--aqua)] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">Discuss my {current.name.toLowerCase()} stream</Link>
                  <Link to="/case-studies" className="btn-ghost">See case studies <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / OVERVIEW */}
      <section className="py-20 bg-mist">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="eyebrow">All industries at a glance</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">Hover any tile for the outcome.</h2>
            </div>
            <div className="font-mono text-xs text-muted-foreground">08 sectors · 100+ installations</div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {APPS.map((a, i) => {
              const AI = a.icon;
              return (
                <button
                  key={a.code}
                  onClick={() => {
                    setActive(i);
                    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group relative overflow-hidden border border-border text-left reveal aspect-[4/5]"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <img
                    src={a.image}
                    alt={a.name}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent transition-opacity group-hover:from-[var(--ink)]/95" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.2em] bg-white/10 backdrop-blur px-2 py-1 border border-white/20">{a.code}</span>
                      <AI className="h-5 w-5 text-[var(--aqua)]" />
                    </div>
                    <div>
                      <div className="font-display text-2xl font-semibold">{a.name}</div>
                      <div className="mt-1 text-xs text-white/70 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                        {a.outcome}
                      </div>
                      <div className="mt-3 h-px w-8 bg-[var(--aqua)] transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-x">
          <div className="border border-border p-10 md:p-14 bg-mist flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-[0.08] pointer-events-none" />
            <div className="relative">
              <div className="eyebrow"><Factory className="h-3.5 w-3.5" /> Don't see your industry?</div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold">If it has water in it, we can probably evaporate it.</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">Send us your effluent analysis. We'll run the mass balance and propose the right MVR configuration.</p>
            </div>
            <Link to="/contact" className="btn-primary relative">Get a feasibility study <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
