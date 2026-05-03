import React, { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 900px)").matches) return;

    const onMove = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      }
    };
    const onDown = () => ringRef.current && ringRef.current.classList.add("scale-75");
    const onUp = () => ringRef.current && ringRef.current.classList.remove("scale-75");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    let raf;
    const loop = () => {
      const p = posRef.current;
      p.rx += (p.x - p.rx) * 0.14;
      p.ry += (p.y - p.ry) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${p.rx - 16}px, ${p.ry - 16}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[60] w-[6px] h-[6px] rounded-full"
        style={{
          background: "#c9a961",
          boxShadow: "0 0 10px rgba(201,169,97,0.8)",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[59] w-8 h-8 rounded-full transition-transform duration-200"
        style={{
          border: "1px solid rgba(201, 169, 97, 0.45)",
          boxShadow: "0 0 18px rgba(201, 169, 97, 0.2)",
        }}
      />
    </>
  );
}
