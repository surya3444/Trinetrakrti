"use client";
import React, { useRef, useState, useEffect } from "react";
import { T, BuildItem, ServiceItem, IconName } from "@/lib/theme";

export const Container: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 24px", ...style }}>{children}</div>
);

// Swiss section label: red number/square prefix + uppercase tracked text.
export const Eyebrow: React.FC<{ children: React.ReactNode; color?: string; num?: string }> = ({ children, color = T.accent, num }) => (
  <span className="ol-mono" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 12, letterSpacing: ".18em", color, fontWeight: 600 }}>
    {num ? <span style={{ fontWeight: 700 }}>{num}.</span> : <span style={{ width: 8, height: 8, background: color, display: "inline-block" }} />}
    {children}
  </span>
);

export const ArrowR: React.FC<{ s?: number }> = ({ s = 16 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" /></svg>;
export const Check: React.FC<{ c?: string; s?: number }> = ({ c = T.fg, s = 17 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}><path d="M5 13l4 4L19 7" stroke={c} strokeWidth="2.4" strokeLinecap="square" strokeLinejoin="miter" /></svg>;

export const Magnetic: React.FC<{ children: React.ReactNode; strength?: number; block?: boolean; style?: React.CSSProperties }> = ({ children, block, style }) => (
  <span style={{ display: block ? "block" : "inline-block", ...style }}>{children}</span>
);

type Variant = "primary" | "coral" | "ghost";
export const Btn: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }> = ({ children, onClick, variant = "primary", style, disabled, ...rest }) => {
  const [h, setH] = useState(false);
  const base: React.CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "15px 28px", borderRadius: 0, fontWeight: 700, fontSize: 13.5, letterSpacing: ".08em", textTransform: "uppercase", border: "2px solid", fontFamily: "'Inter',sans-serif", whiteSpace: "nowrap", minHeight: 48 };
  const palette: Record<Variant, { rest: React.CSSProperties; hover: React.CSSProperties }> = {
    primary: { rest: { background: T.fg, color: "#fff", borderColor: T.fg }, hover: { background: T.accent, color: "#fff", borderColor: T.accent } },
    coral: { rest: { background: T.accent, color: "#fff", borderColor: T.accent }, hover: { background: T.fg, color: "#fff", borderColor: T.fg } },
    ghost: { rest: { background: "#fff", color: T.fg, borderColor: T.fg }, hover: { background: T.fg, color: "#fff", borderColor: T.fg } },
  };
  const v = palette[variant];
  return (
    <button className="ol-btn" onClick={onClick} disabled={disabled} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ ...base, ...v.rest, ...(h && !disabled ? v.hover : {}), ...(disabled ? { opacity: .4, cursor: "not-allowed" } : {}), ...style }} {...rest}>
      {children}
    </button>
  );
};

export const SectionHead: React.FC<{ eyebrow: string; title: React.ReactNode; sub?: React.ReactNode; align?: "left" | "center"; num?: string }> = ({ eyebrow, title, sub, align = "left", num }) => (
  <div style={{ maxWidth: align === "center" ? 820 : 900, margin: align === "center" ? "0 auto" : 0, textAlign: align }}>
    <div className="ol-reveal"><Eyebrow num={num}>{eyebrow}</Eyebrow></div>
    <h2 className="ol-reveal" data-delay="60" style={{ fontSize: "clamp(30px,5vw,62px)", lineHeight: .98, fontWeight: 800, letterSpacing: "-.02em", textTransform: "uppercase", margin: "18px 0 0" }}>{title}</h2>
    {sub && <p className="ol-reveal" data-delay="120" style={{ marginTop: 18, color: T.mute, fontSize: 18, lineHeight: 1.55, maxWidth: 640, marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>{sub}</p>}
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
    {words.map((w) => <span key={w} aria-hidden style={{ gridArea: "1/1", visibility: "hidden", fontWeight: 900 }}>{w}</span>)}
    <span style={{ gridArea: "1/1", overflow: "hidden" }}><span key={i} style={{ display: "inline-block", color, fontWeight: 900, animation: "ol-rot 2.1s cubic-bezier(.2,.7,.2,1)" }}>{words[i]}</span></span>
  </span>;
};

export const BuildIcon: React.FC<{ name: IconName; c: string }> = ({ name, c }) => {
  const p = { width: 26, height: 26, fill: "none", stroke: c, strokeWidth: 1.8, strokeLinecap: "square" as const, strokeLinejoin: "miter" as const };
  const m: Record<IconName, React.ReactNode> = {
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></>,
    phone: <><rect x="7" y="3" width="10" height="18" /><path d="M11 18h2" /></>,
    spark: <><path d="M12 3v5M12 16v5M3 12h5M16 12h5" /><rect x="9.5" y="9.5" width="5" height="5" /></>,
    tool: <><rect x="3" y="4" width="18" height="14" /><path d="M3 9h18M8 14h5" /></>,
    palette: <><circle cx="12" cy="12" r="9" /><circle cx="8.5" cy="9.5" r="1" fill={c} stroke="none" /><circle cx="15.5" cy="9.5" r="1" fill={c} stroke="none" /><circle cx="9.5" cy="15" r="1" fill={c} stroke="none" /></>,
    code: <><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></>,
    cloud: <><path d="M6 16h11a3 3 0 0 0 0-6 5 5 0 0 0-9.6-1.4A3.5 3.5 0 0 0 6 16Z" /></>,
    chip: <><rect x="6" y="6" width="12" height="12" /><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" /></>,
    cube: <><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="M12 3v18M4 7.5l8 4.5 8-4.5" /></>,
    chain: <><rect x="3" y="8" width="9" height="8" /><rect x="12" y="8" width="9" height="8" /></>,
    bot: <><rect x="5" y="8" width="14" height="11" /><path d="M12 4v4M8 13h.01M16 13h.01M9 19v2M15 19v2" /></>,
    data: <><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
  };
  return <svg viewBox="0 0 24 24" {...p}>{m[name]}</svg>;
};

// Swiss service/build card — bordered, flat, full color inversion on hover.
export const ServiceCard: React.FC<{ s: ServiceItem | BuildItem; i: number; num?: string; onClick?: () => void }> = ({ s, i, num, onClick }) => {
  const [h, setH] = useState(false);
  const tags = (s as BuildItem).tags;
  return (
    <div className="ol-frame ol-reveal" data-delay={(i % 6) * 50} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}
      style={{ background: h ? T.accent : T.bg, color: h ? "#fff" : T.fg, border: `2px solid ${h ? T.accent : T.fg}`, padding: "28px 26px", cursor: onClick ? "pointer" : "default", display: "flex", flexDirection: "column", minHeight: 200 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
        <BuildIcon name={s.icon} c={h ? "#fff" : T.fg} />
        <span className="ol-mono" style={{ fontSize: 12, fontWeight: 700, color: h ? "#fff" : T.accent }}>{num ?? `0${i + 1}`}</span>
      </div>
      <h3 style={{ fontSize: 19, margin: "0 0 10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-.01em", lineHeight: 1.1 }}>{s.t}</h3>
      <p style={{ margin: 0, color: h ? "rgba(255,255,255,.88)" : T.mute, fontSize: 14.5, lineHeight: 1.55, flex: 1 }}>{s.d}</p>
      {tags && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>{tags.map((t) => <span key={t} className="ol-mono" style={{ fontSize: 11, letterSpacing: ".06em", color: h ? "#fff" : T.mute, border: `1px solid ${h ? "rgba(255,255,255,.5)" : T.fg}`, padding: "4px 9px" }}>{t}</span>)}</div>
      )}
    </div>
  );
};

// Bauhaus-style geometric composition for hero / accent areas.
export const GeoComposition: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg viewBox="0 0 320 320" width="100%" height="100%" aria-hidden style={style}>
    <rect x="2" y="2" width="316" height="316" fill="none" stroke={T.fg} strokeWidth="2" />
    <circle cx="110" cy="110" r="78" fill="none" stroke={T.fg} strokeWidth="2" />
    <rect x="150" y="150" width="120" height="120" fill={T.accent} />
    <rect x="40" y="200" width="70" height="70" fill="none" stroke={T.fg} strokeWidth="2" />
    <line x1="2" y1="150" x2="318" y2="150" stroke={T.fg} strokeWidth="2" />
    <line x1="150" y1="2" x2="150" y2="318" stroke={T.fg} strokeWidth="2" />
    <circle cx="255" cy="70" r="22" fill={T.fg} />
  </svg>
);
