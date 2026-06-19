import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { useReveal } from "@/hooks/use-reveal";
import { ShieldCheck, Cpu, FlaskConical, Headset } from "lucide-react";
import scada from "@/assets/scada-panel.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sustainable Steam-Free Evaporation | Gatimaan MVR Engineering" },
      { name: "description", content: "Founded in 2020 by industry veterans, Gatimaan MVR Engineering builds MVR evaporators that eliminate steam — backed by trial infrastructure, remote monitoring and 99.5% recovery." },
      { property: "og:title", content: "About | Gatimaan MVR Engineering" },
      { property: "og:description", content: "Steam-free MVR evaporation, engineered in Gwalior, India." },
    ],
  }),
  component: About,
});

const STRENGTHS = [
  { icon: ShieldCheck, t: "99.5% Recovery", d: "Track record of high-recovery MVR plants on the toughest streams in the industry." },
  { icon: Cpu, t: "Remote Monitoring", d: "Every plant ships SCADA-ready with secure remote access for our engineers and yours." },
  { icon: FlaskConical, t: "Trial Infrastructure", d: "Pilot-scale evaporators at our Malanpur works. We test your effluent before we engineer your plant." },
  { icon: Headset, t: "Dedicated Service", d: "Annual maintenance contracts, 24×7 remote support and Indian-stocked spares." },
];

function About() {
  useReveal();
  return (
    <SiteLayout>
      <section className="hero-grad text-white py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow text-[var(--aqua)]">About Gatimaan</div>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-semibold leading-[1.05]">A small team replacing the boiler with the compressor — across Indian industry.</h1>
          </div>
          <p className="lg:col-span-5 text-white/75 text-lg">
            Founded in 2020 in Gwalior, M.P., we've delivered high-performance MVR evaporation systems
            for some of the most challenging effluent profiles in the country — setting new benchmarks
            in sustainability and energy efficiency.
          </p>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="py-24 bg-background">
        <div className="container-x grid md:grid-cols-2 gap-10">
          <div className="card-tech p-10 reveal">
            <div className="eyebrow">Vision</div>
            <h2 className="mt-4 font-display text-3xl font-semibold">Sustainable, steam-free evaporation.</h2>
            <p className="mt-4 text-muted-foreground">Dedicated to exploring sustainable, environment-friendly and affordable alternatives to direct steam or external heat sources for evaporation and distillation.</p>
          </div>
          <div className="card-tech p-10 reveal">
            <div className="eyebrow">Mission</div>
            <h2 className="mt-4 font-display text-3xl font-semibold">Innovative, energy-efficient process solutions.</h2>
            <p className="mt-4 text-muted-foreground">To provide industries with highly innovative, energy-efficient evaporation and distillation solutions — for waste water management or process liquid concentration.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[oklch(0.18_0.035_240)] text-white">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { k: "Water recovery", v: <><Counter to={99.5} decimals={1} suffix="%" /></> },
            { k: "Energy use", v: <>12–25 <span className="text-[var(--aqua)] text-xl">kW/KL</span></> },
            { k: "vs steam systems", v: <>−<Counter to={75} suffix="%" /></> },
            { k: "Skid-mounted up to", v: <><Counter to={50} suffix=" KLD" /></> },
          ].map((s) => (
            <div key={s.k} className="reveal">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">{s.k}</div>
              <div className="mt-3 font-display text-4xl md:text-5xl font-semibold">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Strengths */}
      <section className="py-24 bg-mist">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <div className="eyebrow">Why Gatimaan</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold">Backed by 14+ years in plant operations and process design.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRENGTHS.map((s, i) => (
              <div key={s.t} className="card-tech p-7 bg-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <s.icon className="h-7 w-7 text-[var(--aqua)]" />
                <h3 className="mt-5 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="card-tech overflow-hidden">
              <img src={scada} alt="SCADA control panel" loading="lazy" className="w-full h-[420px] object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 reveal">
            <div className="eyebrow">Leadership</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold">Mr. Alok Chauhan — Managing Director</h2>
            <p className="mt-5 text-muted-foreground">
              B.Sc. (Physics, Chemistry, Mathematics) and ANSI in Sugar Technology. 14 years in sugar
              manufacturing — rising to General Manager (Technical) at Wave Industries by 2012.
            </p>
            <p className="mt-4 text-muted-foreground">
              Transitioned to engineering, leading Design & Development at Spray Engineering Devices Ltd.
              by 2020. Founded Gatimaan MVR Engineering the same year with a vision to revolutionise
              industrial wastewater treatment through MVR technology.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-mist border-t border-border">
        <div className="container-x flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <h3 className="font-display text-2xl md:text-3xl font-semibold max-w-2xl">Bring us a tough effluent stream — we'll engineer the steam-free solution.</h3>
          <Link to="/contact" className="btn-primary">Start a conversation</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
