import React, { useEffect, useState } from "react";
import { navLinks, personal } from "../mock";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((n) => document.getElementById(n.id)).filter(Boolean);
      const y = window.scrollY + 160;
      let current = "home";
      for (const s of sections) {
        if (s.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container-cine flex items-center justify-between py-5">
        <button onClick={() => go("home")} className="flex items-center gap-3 group">
          <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-sm border border-amber-200/30 bg-amber-100/[0.02] group-hover:bg-amber-100/5 transition">
            <span className="display text-[16px] text-amber-200/90 font-semibold tracking-tight">SB</span>
          </span>
          <div className="flex flex-col items-start leading-none">
            <span className="display text-[13px] font-semibold tracking-[0.28em] text-amber-100">
              SAHIL BHOI
            </span>
            <span className="mono text-[9px] tracking-[0.3em] uppercase text-zinc-500 mt-1">
              Post — Production
            </span>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((n, i) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={`relative px-4 py-2 display text-[11px] tracking-[0.32em] uppercase transition-colors ${
                active === n.id ? "text-amber-200" : "text-zinc-400 hover:text-amber-100"
              }`}
            >
              <span className="mr-2 text-amber-200/50">{String(i + 1).padStart(2, "0")}</span>
              {n.label}
              {active === n.id && (
                <span
                  className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[1px] w-6"
                  style={{ background: "linear-gradient(90deg, transparent, #c9a961, transparent)" }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`mailto:${personal.email}`} className="btn-lux btn-lux-solid rounded-sm">
            Hire Me
          </a>
        </div>

        <button className="lg:hidden p-2 text-amber-100" onClick={() => setOpen((v) => !v)} aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-amber-200/10">
          <div className="container-cine py-4 flex flex-col gap-1">
            {navLinks.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`text-left px-3 py-3 display text-[12px] tracking-[0.3em] uppercase rounded-sm ${
                  active === n.id ? "text-amber-200 bg-amber-100/5" : "text-zinc-300 hover:bg-white/5"
                }`}
              >
                {n.label}
              </button>
            ))}
            <a href={`mailto:${personal.email}`} className="btn-lux btn-lux-solid mt-3 text-center">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
