import React from "react";
import { software } from "../mock";

export default function Software() {
  return (
    <section id="software" className="relative section-pad">
      <div className="container-cine relative z-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="section-label">04 — The Arsenal</div>
            <h2 className="section-title mt-5">Tools of the Craft</h2>
            <div className="accent-line mt-6" />
          </div>
          <p className="text-zinc-400 max-w-md text-[16px] leading-[1.85] serif italic">
            Industry-standard software honed into a personal pipeline — every tool chosen for one reason: story first.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {software.map((s) => (
            <div key={s.name} className="sw-tile glass reveal">
              <div
                className="orb"
                style={{ background: `radial-gradient(circle, ${s.glow} 0%, transparent 60%)` }}
              />

              <div className="flex flex-col items-center justify-center w-full h-full relative z-10">
                <div className="logo-wrap">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="w-full h-full object-contain select-none"
                    draggable="false"
                    style={{ filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.5))" }}
                  />
                </div>
                <div className="mt-4 text-center">
                  <div className="display text-[13px] font-semibold tracking-[0.18em] text-amber-100">
                    {s.name}
                  </div>
                  <div className="mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 mt-2">
                    {s.description}
                  </div>
                </div>
              </div>

              {/* Corner markers */}
              <div className="absolute top-3 left-3 w-3 h-3 border-l border-t border-amber-200/30" />
              <div className="absolute top-3 right-3 w-3 h-3 border-r border-t border-amber-200/30" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-l border-b border-amber-200/30" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-amber-200/30" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 mono text-[10px] tracking-[0.4em] uppercase text-zinc-600">
          <span className="w-12 h-px bg-amber-200/20" />
          Certified Workflow
          <span className="w-12 h-px bg-amber-200/20" />
        </div>
      </div>
    </section>
  );
}
