"use client";
import React, { useRef, useState, useEffect } from "react";
import { T, BuildItem, ServiceItem, IconName } from "@/lib/theme";

export const Container: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div style={{ width: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px", ...style }}>{children}</div>
);

// Stripe eyebrow: small, uppercase, tracked, brand-coloured.
export const Eyebrow: React.FC<{ children: React.ReactNode; color?: string; num?: string }> = ({ children, color = T.accent }) => (
  <span className="ol-mono" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, letterSpacing: ".09em", color, fontWeight: 600 }}>
    {children}
  </span>
);

export const ArrowR: React.FC<{ s?: number }> = ({ s = 16 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden style={{ flexShrink: 0 }}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
export const Check: React.FC<{ c?: string; s?: number }> = ({ c = T.accent, s = 18 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="11" fill={c} opacity=".12" /><path d="M7 12.5l3.2 3.2L17 9" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export const Magnetic: React.FC<{ children: React.ReactNode; strength?: number; block?: boolean; style?: React.CSSProperties }> = ({ children, block, style }) => (
  <span style={{ display: block ? "block" : "inline-block", ...style }}>{children}</span>
);

type Variant = "primary" | "coral" | "ghost" | "light";
export const Btn: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }> = ({ children, onClick, variant = "primary", style, disabled, ...rest }) => {
  const [h, setH] = useState(false);
  const base: React.CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 22px", borderRadius: T.radiusPill, fontWeight: 600, fontSize: 15, letterSpacing: "-.01em", border: "1px solid transparent", fontFamily: "'Inter',sans-serif", whiteSpace: "nowrap", minHeight: 44, lineHeight: 1 };
  const palette: Record<Variant, { rest: React.CSSProperties; hover: React.CSSProperties }> = {
    // brand red — Stripe's primary CTA energy
    coral: { rest: { background: T.accentGradient, color: "#fff", boxShadow: T.shadowBtn }, hover: { transform: "translateY(-1px)", boxShadow: T.shadowHover } },
    // navy solid — secondary strong action
    primary: { rest: { background: T.fg, color: "#fff", boxShadow: T.shadowBtn }, hover: { transform: "translateY(-1px)", boxShadow: T.shadowHover } },
    // quiet outline on light backgrounds
    ghost: { rest: { background: "#fff", color: T.fg, borderColor: T.border, boxShadow: "0 1px 2px rgba(50,50,93,.08)" }, hover: { transform: "translateY(-1px)", boxShadow: T.shadowCard, borderColor: "#D5DCE6" } },
    // translucent pill for dark/gradient backgrounds
    light: { rest: { background: "rgba(255,255,255,.14)", color: "#fff", borderColor: "rgba(255,255,255,.30)" }, hover: { background: "rgba(255,255,255,.24)", transform: "translateY(-1px)" } },
  };
  const v = palette[variant];
  return (
    <button className="ol-btn" onClick={onClick} disabled={disabled} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ ...base, ...v.rest, ...(h && !disabled ? v.hover : {}), ...(disabled ? { opacity: .45, cursor: "not-allowed", transform: "none", boxShadow: "none" } : {}), ...style }} {...rest}>
      {children}
    </button>
  );
};

export const SectionHead: React.FC<{ eyebrow: string; title: React.ReactNode; sub?: React.ReactNode; align?: "left" | "center"; num?: string }> = ({ eyebrow, title, sub, align = "left", num }) => (
  <div style={{ maxWidth: align === "center" ? 780 : 760, margin: align === "center" ? "0 auto" : 0, textAlign: align }}>
    <div className="ol-reveal"><Eyebrow num={num}>{eyebrow}</Eyebrow></div>
    <h2 className="ol-reveal" data-delay="60" style={{ fontSize: "clamp(28px,4vw,46px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-.025em", margin: "14px 0 0" }}>{title}</h2>
    {sub && <p className="ol-reveal" data-delay="120" style={{ marginTop: 18, color: T.mute, fontSize: 19, lineHeight: 1.55, maxWidth: 620, marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>{sub}</p>}
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

export const BuildIcon: React.FC<{ name: IconName; c: string }> = ({ name, c }) => {
  const p = { width: 24, height: 24, fill: "none", stroke: c, strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const m: Record<IconName, React.ReactNode> = {
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></>,
    phone: <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></>,
    spark: <><path d="M12 3v5M12 16v5M3 12h5M16 12h5" /><rect x="9.5" y="9.5" width="5" height="5" rx="1" /></>,
    tool: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 14h5" /></>,
    palette: <><circle cx="12" cy="12" r="9" /><circle cx="8.5" cy="9.5" r="1" fill={c} stroke="none" /><circle cx="15.5" cy="9.5" r="1" fill={c} stroke="none" /><circle cx="9.5" cy="15" r="1" fill={c} stroke="none" /></>,
    code: <><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></>,
    cloud: <><path d="M6 16h11a3 3 0 0 0 0-6 5 5 0 0 0-9.6-1.4A3.5 3.5 0 0 0 6 16Z" /></>,
    chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" /></>,
    cube: <><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="M12 3v18M4 7.5l8 4.5 8-4.5" /></>,
    chain: <><rect x="3" y="8" width="9" height="8" rx="2" /><rect x="12" y="8" width="9" height="8" rx="2" /></>,
    bot: <><rect x="5" y="8" width="14" height="11" rx="2" /><path d="M12 4v4M8 13h.01M16 13h.01M9 19v2M15 19v2" /></>,
    data: <><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
  };
  return <svg viewBox="0 0 24 24" {...p}>{m[name]}</svg>;
};

// Stripe-style service card — white, rounded, hairline border, floats on hover.
export const ServiceCard: React.FC<{ s: ServiceItem | BuildItem; i: number; num?: string; onClick?: () => void }> = ({ s, i, num, onClick }) => {
  const [h, setH] = useState(false);
  const tags = (s as BuildItem).tags;
  return (
    <div className="ol-frame ol-reveal" data-delay={(i % 6) * 50} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}
      style={{ background: "#fff", color: T.fg, border: `1px solid ${T.border}`, borderRadius: T.radius, padding: "26px 24px", cursor: onClick ? "pointer" : "default", display: "flex", flexDirection: "column", minHeight: 210, boxShadow: h ? T.shadowFloat : T.shadowCard, transform: h ? "translateY(-4px)" : "none" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, borderRadius: 12, background: T.coralWash }}>
          <BuildIcon name={s.icon} c={T.accent} />
        </span>
        <span className="ol-mono" style={{ fontSize: 12, fontWeight: 600, color: T.faint }}>{num ?? `0${i + 1}`}</span>
      </div>
      <h3 style={{ fontSize: 19, margin: "0 0 8px", fontWeight: 600, letterSpacing: "-.015em", lineHeight: 1.2 }}>{s.t}</h3>
      <p style={{ margin: 0, color: T.mute, fontSize: 15, lineHeight: 1.55, flex: 1 }}>{s.d}</p>
      {tags && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>{tags.map((t) => <span key={t} style={{ fontSize: 12.5, fontWeight: 500, color: T.mute, background: T.muted, borderRadius: 999, padding: "5px 11px" }}>{t}</span>)}</div>
      )}
      <div style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 7, color: T.accent, fontSize: 14, fontWeight: 600, opacity: onClick ? 1 : 0 }}>
        Learn more <span style={{ display: "inline-flex", transform: h ? "translateX(4px)" : "none", transition: "transform .2s ease" }}><ArrowR s={15} /></span>
      </div>
    </div>
  );
};

// Stripe-style flowing "silk ribbon" gradient — vivid, heavily-blurred gradient
// streaks (a mesh gradient) that sweep diagonally and drift gently like fabric.
export const GeoComposition: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  // Stripe-style flowing mesh: large, soft, overlapping colour clouds that drift
  // and morph independently so they blend into one continuous animated wash.
  const blobs = [
    { size: "90%", top: "-18%", left: "8%", color: "rgba(143,166,255,.85)", anim: "mesh-a", dur: 19 },
    { size: "80%", top: "6%", left: "30%", color: "rgba(192,124,245,.8)", anim: "mesh-b", dur: 23 },
    { size: "85%", top: "32%", left: "2%", color: "rgba(255,111,156,.82)", anim: "mesh-c", dur: 21 },
    { size: "95%", top: "20%", left: "34%", color: "rgba(255,133,90,.9)", anim: "mesh-a", dur: 17 },
    { size: "78%", top: "48%", left: "22%", color: "rgba(229,50,43,.85)", anim: "mesh-b", dur: 25 },
    { size: "70%", top: "-6%", left: "44%", color: "rgba(255,203,116,.78)", anim: "mesh-c", dur: 20 },
  ];
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "visible", filter: "blur(42px)", ...style }}>
      {blobs.map((b, i) => (
        <div
          key={i}
          aria-hidden
          style={{
            position: "absolute",
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at 50% 50%, ${b.color}, transparent 66%)`,
            mixBlendMode: "screen",
            willChange: "transform",
            animation: `${b.anim} ${b.dur}s ease-in-out ${i * -3}s infinite`,
          }}
        />
      ))}
    </div>
  );
};
