import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Logo } from "./Logo";
import { Menu, X, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/applications", label: "Applications" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <div className="hidden md:block border-b border-border/60 bg-[oklch(0.18_0.03_240)] text-[oklch(0.85_0.02_230)]">
        <div className="container-x flex items-center justify-between py-2 font-mono text-[11px] tracking-wide">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-[var(--aqua)]" /> Gwalior · Malanpur, M.P. India</span>
            <span className="flex items-center gap-1.5"><Mail className="h-3 w-3 text-[var(--aqua)]" /> info@gatimaanengineering.com</span>
          </div>
          <div className="flex gap-5">
            <a href="tel:+919877124293" className="hover:text-[var(--aqua)]">+91 98771 24293</a>
            <a href="tel:+917999002459" className="hover:text-[var(--aqua)]">+91 79990 02459</a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-border py-2"
            : "bg-background border-transparent py-4"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <Link to="/" className="text-foreground"><Logo /></Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:bg-[var(--aqua)]" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary ml-3">Request a Quote</Link>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container-x flex flex-col py-3">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-medium border-b border-border/60 last:border-0"
                >
                  {n.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 self-start">Request a Quote</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-[oklch(0.16_0.035_240)] text-[oklch(0.88_0.015_230)]">
        <div className="container-x py-16 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo className="text-white" />
            <p className="mt-4 text-sm text-[oklch(0.7_0.02_230)] max-w-xs">
              Mechanical Vapour Recompression evaporators for zero liquid discharge — without steam.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--aqua)] mb-4">Navigate</div>
            <ul className="space-y-2 text-sm">
              {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-[var(--aqua)]">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--aqua)] mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-[var(--aqua)]" /><div><div>+91 98771 24293</div><div className="text-xs text-[oklch(0.65_0.02_230)]">Alok Chauhan, MD</div></div></li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-[var(--aqua)]" /><div><div>+91 79990 02459</div><div className="text-xs text-[oklch(0.65_0.02_230)]">Abhishek Chauhan, Ops</div></div></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-[var(--aqua)]" /><a href="mailto:info@gatimaanengineering.com" className="hover:text-[var(--aqua)]">info@gatimaanengineering.com</a></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--aqua)] mb-4">Locations</div>
            <ul className="space-y-3 text-sm">
              <li><div className="font-mono text-[10px] uppercase text-[oklch(0.65_0.02_230)]">Corporate</div>CH-116, Deen Dayal Nagar, Gwalior, M.P.</li>
              <li><div className="font-mono text-[10px] uppercase text-[oklch(0.65_0.02_230)]">Works</div>Plot 66 A, Industrial Area Malanpur, Bhind, M.P.</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-x py-5 flex flex-col md:flex-row justify-between gap-2 font-mono text-[11px] text-[oklch(0.6_0.02_230)]">
            <div>© {new Date().getFullYear()} Gatimaan MVR Engineering Pvt. Ltd. — All rights reserved.</div>
            <div>Manufacturers of MVR Evaporators · Made in India</div>
          </div>
        </div>
      </footer>

      {/* WhatsApp sticky */}
      <a
        href="https://wa.me/919877124293"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
