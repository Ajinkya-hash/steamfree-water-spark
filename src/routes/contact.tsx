import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { SiteLayout } from "@/components/site/SiteLayout";
import { submitInquiry } from "@/lib/inquiries.functions";
import { useReveal } from "@/hooks/use-reveal";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Request a Quote | Gatimaan MVR Engineering" },
      { name: "description", content: "Talk to our engineers about your effluent stream. Email info@gatimaanengineering.com or call +91 98771 24293 / +91 79990 02459." },
      { property: "og:title", content: "Contact | Gatimaan MVR Engineering" },
      { property: "og:description", content: "Request a quote for MVR evaporators, ZLD and water recovery plants." },
    ],
  }),
  component: Contact,
});

const INDUSTRIES = ["Textile", "Tannery", "Food & Beverage", "Automotive", "Chemical & Pharma", "Paper", "Dairy & Poultry", "Brewery & Distillery", "Other"];
const SOLUTIONS = ["Zero Liquid Discharge (ZLD)", "Clean Water Recovery", "Salt Recovery", "Process Liquid Concentration", "Pilot / Trial", "Not sure yet"];

function Contact() {
  useReveal();
  const submit = useServerFn(submitInquiry);
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [err, setErr] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErr("");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries()) as Record<string, string>;
    try {
      await submit({ data: payload as never });
      setState("ok");
      e.currentTarget.reset();
    } catch (error: unknown) {
      setState("error");
      setErr(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  return (
    <SiteLayout>
      <section className="hero-grad text-white py-20 md:py-24">
        <div className="container-x">
          <div className="eyebrow text-[var(--aqua)]">Contact</div>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold max-w-3xl">Tell us about your stream.<br />We'll get back within 24 hours.</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          {/* form */}
          <div className="lg:col-span-7 reveal">
            <div className="border border-border bg-card p-8 md:p-10">
              {state === "ok" ? (
                <div className="py-12 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--aqua)]" />
                  <h2 className="mt-5 font-display text-2xl font-semibold">Inquiry received.</h2>
                  <p className="mt-3 text-muted-foreground">Thanks — our team will reach out within one business day.</p>
                  <button onClick={() => setState("idle")} className="btn-ghost mt-6">Send another</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="eyebrow">Inquiry form</div>
                  <h2 className="font-display text-2xl font-semibold">Project details</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full name" name="name" required />
                    <Field label="Company" name="company" />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Select label="Industry" name="industry" options={INDUSTRIES} />
                    <Select label="Solution type" name="solution_type" options={SOLUTIONS} />
                  </div>

                  <Field label="Capacity needed (e.g. 5 KLD, 50 KLD)" name="capacity" />

                  <div>
                    <Label>Message</Label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about the effluent stream, TDS, current treatment, location…"
                      className="w-full mt-1.5 bg-background border border-input px-3 py-2.5 text-sm font-mono outline-none focus:border-[var(--aqua)] focus:ring-2 focus:ring-[var(--aqua)]/20 transition-colors"
                    />
                  </div>

                  {state === "error" && <div className="text-sm text-destructive">{err}</div>}

                  <button type="submit" disabled={state === "loading"} className="btn-primary disabled:opacity-60">
                    {state === "loading" ? "Sending…" : "Submit inquiry"}
                  </button>
                  <p className="font-mono text-[11px] text-muted-foreground">By submitting you consent to being contacted by Gatimaan MVR Engineering.</p>
                </form>
              )}
            </div>
          </div>

          {/* info */}
          <aside className="lg:col-span-5 space-y-6 reveal">
            <InfoCard icon={<Phone className="h-5 w-5 text-[var(--aqua)]" />} title="Call us">
              <a href="tel:+919877124293" className="block">+91 98771 24293 <span className="text-muted-foreground text-xs">— Alok Chauhan, MD</span></a>
              <a href="tel:+917999002459" className="block">+91 79990 02459 <span className="text-muted-foreground text-xs">— Abhishek Chauhan, Operations</span></a>
            </InfoCard>
            <InfoCard icon={<Mail className="h-5 w-5 text-[var(--aqua)]" />} title="Email">
              <a href="mailto:info@gatimaanengineering.com" className="hover:text-[var(--aqua)]">info@gatimaanengineering.com</a>
            </InfoCard>
            <InfoCard icon={<MessageCircle className="h-5 w-5 text-[var(--aqua)]" />} title="WhatsApp">
              <a href="https://wa.me/919877124293" target="_blank" rel="noreferrer" className="hover:text-[var(--aqua)]">Chat on WhatsApp →</a>
            </InfoCard>
            <InfoCard icon={<MapPin className="h-5 w-5 text-[var(--aqua)]" />} title="Locations">
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Corporate office</div>
                  CH-116, Deen Dayal Nagar, Gwalior, M.P.
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Works</div>
                  Plot No. 66 A, Industrial Area Malanpur, Bhind, M.P.
                </div>
              </div>
            </InfoCard>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{children}</label>;
}
function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}{required && <span className="text-[var(--aqua)]"> *</span>}</Label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full mt-1.5 bg-background border border-input px-3 py-2.5 text-sm outline-none focus:border-[var(--aqua)] focus:ring-2 focus:ring-[var(--aqua)]/20 transition-colors"
      />
    </div>
  );
}
function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <Label>{label}</Label>
      <select name={name} className="w-full mt-1.5 bg-background border border-input px-3 py-2.5 text-sm outline-none focus:border-[var(--aqua)] focus:ring-2 focus:ring-[var(--aqua)]/20">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="border border-border bg-card p-6">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <div className="font-mono text-[11px] uppercase tracking-[0.18em]">{title}</div>
      </div>
      <div className="text-sm space-y-1">{children}</div>
    </div>
  );
}
