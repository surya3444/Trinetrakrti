"use client";
import React, { useRef, useState, useEffect } from "react";
import { T, BuildItem } from "@/lib/theme";

export const Container: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div style={{ width: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px", ...style }}>{children}</div>
);

export const Eyebrow: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = T.blue }) => (
  <span className="ol-mono" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color, fontWeight: 500 }}>
    <span style={{ width: 6, height: 6, borderRadius: "50%", background: color, animation: "ol-glow 2.4s ease-in-out infinite" }} />{children}
  </span>
);

export const ArrowR: React.FC<{ s?: number }> = ({ s = 16 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
export const Check: React.FC<{ c?: string; s?: number }> = ({ c = T.green, s = 17 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}><path d="M5 13l4 4L19 7" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export const Magnetic: React.FC<{ children: React.ReactNode; strength?: number; block?: boolean; style?: React.CSSProperties }> = ({ children, strength = 12, block, style }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const move = (e: React.MouseEvent) => { const el = ref.current; if (!el) return; const r = el.getBoundingClientRect(); el.style.transform = `translate(${((e.clientX - (r.left + r.width / 2)) / r.width) * strength}px,${((e.clientY - (r.top + r.height / 2)) / r.height) * strength}px)`; };
  const reset = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };
  return <span ref={ref} className="ol-mag" onMouseMove={move} onMouseLeave={reset} style={{ display: block ? "block" : "inline-block", ...style }}>{children}</span>;
};

export const Btn: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "coral" | "ghost" }> = ({ children, onClick, variant = "primary", style, disabled, ...rest }) => {
  const base: React.CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "15px 28px", borderRadius: 12, fontWeight: 600, fontSize: 15, border: "1px solid transparent", fontFamily: "'Poppins',sans-serif", whiteSpace: "nowrap" };
  const v = { primary: { background: T.ink, color: "#fff", boxShadow: "0 14px 30px -14px rgba(19,24,43,.55)" }, coral: { background: T.coral, color: "#fff", boxShadow: `0 14px 32px -12px ${T.coral}88` }, ghost: { background: T.panel, color: T.ink, border: `1px solid ${T.line2}` } };
  return <Magnetic><button className="ol-btn" onClick={onClick} disabled={disabled} style={{ ...base, ...v[variant], ...(disabled ? { opacity: .45, cursor: "not-allowed" } : {}), ...style }} {...rest}>{children}</button></Magnetic>;
};

export const SectionHead: React.FC<{ eyebrow: string; title: React.ReactNode; sub?: React.ReactNode; align?: "left" | "center" }> = ({ eyebrow, title, sub, align = "left" }) => (
  <div style={{ maxWidth: 720, margin: align === "center" ? "0 auto" : 0, textAlign: align }}>
    <div className="ol-reveal"><Eyebrow>{eyebrow}</Eyebrow></div>
    <h2 className="ol-reveal" data-delay="60" style={{ fontSize: "clamp(28px,4.4vw,46px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-.03em", margin: "18px 0 0" }}>{title}</h2>
    {sub && <p className="ol-reveal" data-delay="120" style={{ marginTop: 18, color: T.mute, fontSize: 18, lineHeight: 1.6 }}>{sub}</p>}
  </div>
);

export const CountUp: React.FC<{ to: number; suffix?: string; dur?: number }> = ({ to, suffix = "", dur = 1500 }) => {
  const [n, setN] = useState(0); const ref = useRef<HTMLSpanElement>(null); const done = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true; const t0 = performance.now();
        const tick = (t: number) => { const p = Math.min(1, (t - t0) / dur); setN(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(tick); };
        requestAnimationFrame(tick);
      }
    }, { threshold: .5 });
    if (ref.current) io.observe(ref.current); return () => io.disconnect();
  }, [to, dur]);
  return <span ref={ref}>{n}{suffix}</span>;
};

export const Rotator: React.FC<{ words: string[]; color: string }> = ({ words, color }) => {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((p) => (p + 1) % words.length), 2100); return () => clearInterval(t); }, [words.length]);
  return <span style={{ position: "relative", display: "inline-grid", verticalAlign: "bottom" }}>
    {words.map((w) => <span key={w} aria-hidden style={{ gridArea: "1/1", visibility: "hidden", fontWeight: 700 }}>{w}</span>)}
    <span style={{ gridArea: "1/1", overflow: "hidden" }}><span key={i} style={{ display: "inline-block", color, fontWeight: 700, animation: "ol-rot 2.1s cubic-bezier(.2,.7,.2,1)" }}>{words[i]}</span></span>
  </span>;
};

export const BuildIcon: React.FC<{ name: BuildItem["icon"]; c: string }> = ({ name, c }) => {
  const p = { 
    width: 24, 
    height: 24, 
    fill: "none", 
    stroke: c, 
    strokeWidth: 1.7, 
    strokeLinecap: "round" as const,  // <-- Added 'as const'
    strokeLinejoin: "round" as const  // <-- Added 'as const'
  };
  
  const m = {
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></>,
    phone: <><rect x="7" y="3" width="10" height="18" rx="2.5" /><path d="M11 18h2" /></>,
    spark: <><path d="M12 3v5M12 16v5M3 12h5M16 12h5" /><circle cx="12" cy="12" r="2.5" /></>,
    tool: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 14h5" /></>,
  };
  
  return <svg viewBox="0 0 24 24" {...p}>{m[name]}</svg>;
};

export const BuildCard: React.FC<{ b: BuildItem; i: number; onClick: () => void }> = ({ b, i, onClick }) => {
  const [h, setH] = useState(false);
  return (
    <div className="ol-frame ol-reveal" data-delay={i * 70} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick} style={{ background: T.panel, border: `1px solid ${h ? T.coral : T.line2}`, borderRadius: 20, padding: "30px 28px", cursor: "pointer", position: "relative", overflow: "hidden", transform: h ? "translateY(-6px)" : "none", boxShadow: h ? `0 26px 50px -32px ${T.coral}44` : "none" }}>
      <div aria-hidden style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: "50%", background: T.coralWash, opacity: h ? 1 : 0, transition: "opacity .4s" }} />
      <div style={{ position: "relative", width: 52, height: 52, borderRadius: 14, background: h ? T.coral : T.wash, display: "grid", placeItems: "center", transition: "background .35s" }}><BuildIcon name={b.icon} c={h ? "#fff" : T.ink} /></div>
      <h3 style={{ fontSize: 23, margin: "20px 0 8px", fontWeight: 600, position: "relative" }}>{b.t}</h3>
      <p style={{ margin: 0, color: T.mute, fontSize: 15.5, lineHeight: 1.6, position: "relative" }}>{b.d}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18, position: "relative" }}>{b.tags.map((t) => <span key={t} className="ol-mono" style={{ fontSize: 12, color: T.mute, background: T.wash, border: `1px solid ${T.line}`, padding: "5px 11px", borderRadius: 999 }}>{t}</span>)}</div>
      <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 8, color: T.coral, fontSize: 14, fontWeight: 600, position: "relative" }}>Learn more <span style={{ transform: h ? "translateX(4px)" : "none", transition: "transform .3s", display: "inline-flex" }}><ArrowR s={15} /></span></div>
    </div>
  );
};