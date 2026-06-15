"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useReveal } from "@/hooks/useReveal";
import { T } from "@/lib/theme";
import { Container, Btn, ArrowR, Check } from "@/components/ui/Shared";
import { PageHero, FAQ, FinalCTA } from "@/components/sections/SharedSections";

export default function Pricing() {
  useReveal();
  const router = useRouter();
  const tiers = [
    { name: "Clarity Call", price: "Free", unit: "", tag: "Start here", d: "A 30-min call to understand your problem.", feats: ["Your likely root cause", "What to build (or not)"], cta: "Book the call", hot: false },
    { name: "Build Sprint", price: "Fixed quote", unit: "", tag: "Most popular", d: "We design and ship a focused MVP.", feats: ["Scoped, fixed-price build", "Working MVP in weeks"], cta: "Scope my build", hot: true },
    { name: "Systems Partner", price: "Monthly", unit: "/mo", tag: "Ongoing", d: "We become your build team.", feats: ["Continuous build & automation", "Priority turnaround"], cta: "Talk partnership", hot: false },
  ];
  return (
    <main>
      <PageHero num="01" eyebrow="Pricing" title={<>Simple, honest pricing.<br />No hourly surprises.</>} sub="Every build is quoted as a fixed scope tied to an outcome." showCta={false} />
      <section style={{ padding: "44px 0 80px" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, border: `2px solid ${T.fg}` }} className="ol-price-grid">
            {tiers.map((t, i) => (
              <div key={t.name} className="ol-reveal ol-price-cell" data-delay={i * 80} style={{ background: t.hot ? T.fg : "#fff", color: t.hot ? "#fff" : T.fg, borderLeft: i ? `2px solid ${T.fg}` : "none", padding: "32px 26px", position: "relative", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}><span style={{ fontSize: 19, fontWeight: 800, textTransform: "uppercase", letterSpacing: "-.01em" }}>{t.name}</span><span className="ol-mono" style={{ fontSize: 10.5, padding: "5px 9px", background: t.hot ? T.accent : T.muted, color: t.hot ? "#fff" : T.fg, fontWeight: 700, letterSpacing: ".06em" }}>{t.tag}</span></div>
                <div style={{ margin: "20px 0 6px", display: "flex", alignItems: "baseline", gap: 4 }}><span style={{ fontSize: 38, fontWeight: 900, letterSpacing: "-.03em", color: T.accent }}>{t.price}</span><span style={{ color: t.hot ? "rgba(255,255,255,.6)" : T.faint, fontSize: 15 }}>{t.unit}</span></div>
                <p style={{ margin: "0 0 20px", color: t.hot ? "rgba(255,255,255,.72)" : T.mute, fontSize: 15, lineHeight: 1.55, minHeight: 56 }}>{t.d}</p>
                <div style={{ borderTop: `2px solid ${t.hot ? "rgba(255,255,255,.25)" : T.fg}`, paddingTop: 18, marginBottom: 22, flex: 1 }}>
                  {t.feats.map((f) => <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "7px 0", fontSize: 14.5, color: t.hot ? "rgba(255,255,255,.85)" : T.mute }}><Check c={T.accent} />{f}</div>)}
                </div>
                <Btn variant={t.hot ? "coral" : "ghost"} onClick={() => router.push("/book")} style={{ width: "100%", ...(t.hot ? {} : {}) }}>{t.cta} <ArrowR s={15} /></Btn>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <FAQ />
      <FinalCTA />
      <style>{`@media(max-width:900px){.ol-price-grid{grid-template-columns:1fr !important;}.ol-price-cell{border-left:none !important;border-top:2px solid ${T.fg};}.ol-price-cell:first-child{border-top:none !important;}}`}</style>
    </main>
  );
}
