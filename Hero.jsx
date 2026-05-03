import React, { useEffect, useRef, useState } from "react";
import { personal } from "../mock";
import { ArrowDown, Play, Film } from "lucide-react";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const target = personal.tagline;
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(target.slice(0, i));
      if (i >= target.length) clearInterval(id);
    }, 65);
    return () => clearInterval(id);
  }, [target]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* backdrop */}
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
      {/* warm vignette glows */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,169,97,0.12) 0%, transparent 65%)" }}
      />
      <div
        className="absolute -bottom-52 -right-40 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139, 90, 43, 0.22) 0%, transparent 70%)" }}
      />

      <div className="container-cine relative z-10 pt-32 pb-20 w-full">
        {/* top meta */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-3">
            <Film size={14} className="text-amber-200" />
            <span className="display text-[11px] tracking-[0.4em] uppercase text-amber-200/80">
              A Sahil Bhoi Production
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 mono text-[10px] tracking-[0.3em] uppercase text-zinc-500">
            <span>Est. 2022</span>
            <span className="w-1 h-1 rounded-full bg-amber-200/40" />
            <span>Raipur, India</span>
            <span className="w-1 h-1 rounded-full bg-amber-200/40" />
            <span>Reel 2025</span>
          </div>
        </div>

        <div className="ornate mono text-[10px] tracking-[0.45em] uppercase mb-6">Presenting</div>

        <h1 className="hero-title">
          <span className="block text-amber-50">Sahil</span>
          <span
            className="block italic"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              letterSpacing: "0.02em",
              backgroundImage: "linear-gradient(180deg, #e8cc8c 0%, #c9a961 55%, #8b5a2b 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Bhoi
          </span>
        </h1>

        <div className="mt-6 max-w-2xl">
          <p
            className="display text-[clamp(0.82rem,1.3vw,1rem)] tracking-[0.35em] uppercase text-amber-100/90"
            aria-label={target}
          >
            {typed}
            <span className="inline-block w-[2px] h-[0.9em] align-[-0.08em] ml-1 bg-amber-200 animate-pulse" />
          </p>
          <p className="mt-7 text-zinc-300/90 text-[15px] md:text-[17px] leading-[1.85] max-w-xl serif">
            {personal.bio}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button onClick={() => scrollTo("work")} className="btn-lux btn-lux-solid inline-flex items-center gap-3">
            <Play size={13} strokeWidth={2} fill="currentColor" /> Watch Showreel
          </button>
          <button onClick={() => scrollTo("contact")} className="btn-lux inline-flex items-center gap-2">
            Commission a Film
          </button>
        </div>

        {/* side label */}
        <div className="hidden md:flex absolute left-4 lg:left-8 bottom-10 flex-col items-center gap-3">
          <div className="v-text mono text-[9px] text-zinc-500">SCROLL • ACT I</div>
          <div className="w-px h-20 bg-gradient-to-b from-amber-200/40 to-transparent" />
        </div>

        {/* reel perforations */}
        <div className="mt-16 reel-perf" />

        {/* stats strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {[
            { k: "Projects", v: "120+" },
            { k: "Reach", v: "100K+" },
            { k: "Clients", v: "40+" },
            { k: "Years", v: "3+" },
          ].map((s) => (
            <div key={s.k} className="relative">
              <div className="display text-2xl md:text-3xl font-semibold text-amber-100">{s.v}</div>
              <div className="mono text-[10px] tracking-[0.35em] uppercase text-zinc-500 mt-2">{s.k}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="hidden md:inline-flex absolute right-6 lg:right-10 bottom-10 items-center gap-2 mono text-[10px] tracking-[0.35em] uppercase text-zinc-500 hover:text-amber-200 transition-colors"
        >
          Act II — About <ArrowDown size={12} />
        </button>
      </div>
    </section>
  );
}
