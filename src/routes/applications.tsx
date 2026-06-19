import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useReveal } from "@/hooks/use-reveal";

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

const APPS = [
  { code: "A-01", name: "Textile", streams: "Dye-house effluent, RO reject, sizing wash", outcome: "ZLD compliance, salt recovery" },
  { code: "A-02", name: "Tannery", streams: "Chrome and salt-laden effluent", outcome: "Chrome recovery, sodium chloride recovery" },
  { code: "A-03", name: "Food & Beverages", streams: "CIP effluent, syrup concentrates, juice clarification", outcome: "Process liquid concentration, water reuse" },
  { code: "A-04", name: "Automotive", streams: "Pre-treatment & paint shop effluent, oily water", outcome: "Discharge-free paint shops" },
  { code: "A-05", name: "Chemical & Pharma", streams: "Mother liquors, API effluent, solvent recovery streams", outcome: "Concentration, distillate recovery" },
  { code: "A-06", name: "Paper", streams: "Black liquor, machine white-water", outcome: "Solids concentration, water reuse" },
  { code: "A-07", name: "Dairy & Poultry", streams: "Whey concentration, blood / processing effluent", outcome: "By-product recovery, COD reduction" },
  { code: "A-08", name: "Brewery & Distillery", streams: "Spent wash, vinasse, RO concentrate", outcome: "Concentration, potash recovery" },
];

function Applications() {
  useReveal();
  return (
    <SiteLayout>
      <section className="hero-grad text-white py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow text-[var(--aqua)]">Applications</div>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-semibold max-w-3xl">Wherever there's a hard effluent stream, MVR delivers.</h1>
          <p className="mt-5 max-w-xl text-white/70">Eight industries. Custom-engineered process flows for each. Below — what we treat and what we deliver.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-x">
          <div className="border-t border-border">
            {APPS.map((a, i) => (
              <article
                key={a.code}
                className="grid md:grid-cols-12 gap-6 py-8 border-b border-border reveal hover:bg-mist transition-colors"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="md:col-span-1 font-mono text-xs text-muted-foreground">{a.code}</div>
                <div className="md:col-span-3 font-display text-2xl font-semibold">{a.name}</div>
                <div className="md:col-span-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">Streams handled</div>
                  <div className="text-sm">{a.streams}</div>
                </div>
                <div className="md:col-span-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--aqua-deep)] mb-1">Outcome</div>
                  <div className="text-sm">{a.outcome}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 border border-border p-10 bg-mist flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="eyebrow">Don't see your industry?</div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold">If it has water in it, we can probably evaporate it.</h3>
            </div>
            <Link to="/contact" className="btn-primary">Get a feasibility study</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
