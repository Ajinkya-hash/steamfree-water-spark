import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ClientStrip } from "@/components/site/ClientStrip";
import { SteamVsMvr } from "@/components/site/SteamVsMvr";
import { VaporParticles } from "@/components/site/VaporParticles";
import { Counter } from "@/components/site/Counter";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight, Droplets, Zap, FlaskConical, Factory, Beaker, Cookie, Car, NotebookPen, Wheat, GlassWater } from "lucide-react";
import heroImg from "@/assets/hero-mvr-plant.jpg";
import etpImg from "@/assets/etp-plant.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gatimaan MVR Engineering — Zero Liquid Discharge without Steam" },
      { name: "description", content: "MVR evaporators delivering 99.5% water recovery using only electricity — no steam, no boilers. Built for ZLD, clean water and salt recovery." },
      { property: "og:title", content: "Gatimaan MVR Engineering — ZLD without Steam" },
      { property: "og:description", content: "MVR evaporators with 99.5% recovery, 12–25 kW/KL — without steam." },
    ],
  }),
  component: Home,
});

const INDUSTRIES = [
  { icon: Beaker, label: "Textile" },
  { icon: FlaskConical, label: "Tannery" },
  { icon: Cookie, label: "Food & Beverage" },
  { icon: Car, label: "Automotive" },
  { icon: NotebookPen, label: "Chemical & Pharma" },
  { icon: Wheat, label: "Paper" },
  { icon: GlassWater, label: "Dairy & Poultry" },
  { icon: Factory, label: "Brewery & Distillery" },
];

function Home() {
  useReveal();
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden hero-grad text-white">
        <div className="absolute inset-0 grid-bg opacity-[0.08]" />
        <VaporParticles />
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.035_240)] via-[oklch(0.2_0.04_240)/0.7] to-transparent" />

        <div className="container-x relative pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="max-w-3xl">
            <div className="eyebrow text-[var(--aqua)]">Mechanical Vapour Recompression · Est. 2020</div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight">
              Zero liquid discharge.<br />
              <span className="text-[var(--aqua)]">Without steam.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl">
              We engineer MVR evaporators that recover up to 99.5% of industrial wastewater
              using nothing but electricity — replacing boilers, condensers and the cost of steam.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Talk to an engineer <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/products" className="btn-ghost text-white/90">Explore products</Link>
            </div>

            {/* spec strip */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 max-w-3xl">
              {[
                { k: "Water recovery", v: <><Counter to={99.5} decimals={1} suffix="%" /></> },
                { k: "Energy use", v: <>12–25<span className="text-[var(--aqua)]"> kW/KL</span></> },
                { k: "Capacity", v: <>up to <Counter to={50} suffix=" KLD" /></> },
                { k: "vs steam CAPEX", v: <>−<Counter to={75} suffix="%" /></> },
              ].map((s) => (
                <div key={s.k} className="bg-[oklch(0.18_0.035_240)] p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">{s.k}</div>
                  <div className="mt-2 font-display text-2xl md:text-3xl font-semibold">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STEAM vs MVR */}
      <section className="py-24 bg-mist">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <div className="eyebrow">How it works</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight">
              From burning fuel to <span className="text-[var(--aqua-deep)]">recompressing vapour.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Conventional evaporators dump latent heat into a cooling tower. Our MVR systems
              compress the low-pressure vapour and reuse its energy — closing the loop and
              eliminating the boiler.
            </p>
            <ul className="mt-6 space-y-3 font-mono text-sm">
              <li className="flex gap-3"><span className="text-[var(--aqua)]">→</span> No boiler. No steam line. No cooling tower load.</li>
              <li className="flex gap-3"><span className="text-[var(--aqua)]">→</span> Electric drive · variable speed · remote monitored.</li>
              <li className="flex gap-3"><span className="text-[var(--aqua)]">→</span> Recovers latent heat at >85% efficiency.</li>
            </ul>
          </div>
          <div className="reveal card-tech p-6 md:p-8 bg-card">
            <SteamVsMvr />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 reveal">
            <div>
              <div className="eyebrow">Three solution pillars</div>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold max-w-2xl">One technology, three outcomes engineered into your plant.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Droplets, t: "Zero Liquid Discharge", d: "Concentrate every drop of effluent until only solids remain — full regulatory compliance, no liquid waste leaves your boundary.", k: "ZLD" },
              { icon: Zap, t: "Clean Water Recovery", d: "Distill condensate back to process-grade water — return up to 99.5% of input back to your operations.", k: "WATER" },
              { icon: FlaskConical, t: "Salt Recovery", d: "Crystallise saleable salts from concentrated brine via integrated centrifuge separation — turn a waste stream into a by-product.", k: "SALT" },
            ].map((p, i) => (
              <article key={p.t} className="card-tech p-7 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-center justify-between mb-6">
                  <p.icon className="h-7 w-7 text-[var(--aqua)]" />
                  <span className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">0{i + 1} / {p.k}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        className="py-24 relative bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(180deg, oklch(0.18 0.035 240 / 0.92), oklch(0.16 0.035 240 / 0.96)), url(${etpImg})` }}
      >
        <div className="container-x relative text-white">
          <div className="reveal max-w-2xl">
            <div className="eyebrow text-[var(--aqua)]">Industries we serve</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold">Eight industries. One promise — no liquid leaves your plant.</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {INDUSTRIES.map((ind, i) => (
              <div key={ind.label} className="bg-[oklch(0.2_0.04_240)] p-6 group hover:bg-[oklch(0.24_0.05_240)] transition-colors reveal" style={{ transitionDelay: `${i * 40}ms` }}>
                <ind.icon className="h-7 w-7 text-[var(--aqua)] group-hover:scale-110 transition-transform" />
                <div className="mt-5 font-display text-lg">{ind.label}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 mt-1">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientStrip />

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="border border-border bg-mist p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[var(--aqua)] opacity-10 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="eyebrow">Next step</div>
                <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold">Tell us your effluent profile.<br />We'll engineer the rest.</h2>
              </div>
              <div className="md:justify-self-end">
                <p className="text-muted-foreground max-w-md mb-6">From feasibility and pilot trials to skid-mounted commissioning — our team has delivered MVR plants for the toughest streams in the industry.</p>
                <Link to="/contact" className="btn-primary">Request a quote <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
