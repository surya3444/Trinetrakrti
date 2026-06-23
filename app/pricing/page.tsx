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
      <section style={{ padding: "72px 0 90px" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, alignItems: "stretch" }} className="ol-price-grid">
            {tiers.map((t, i) => (
              <div key={t.name} className="ol-reveal ol-price-cell" data-delay={i * 80} style={{ background: t.hot ? T.darkGradient : "#fff", color: t.hot ? "#fff" : T.fg, border: `1px solid ${t.hot ? "transparent" : T.border}`, borderRadius: T.radius, padding: "34px 28px", position: "relative", display: "flex", flexDirection: "column", boxShadow: t.hot ? T.shadowFloat : T.shadowCard, transform: t.hot ? "translateY(-8px)" : "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}><span style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-.015em" }}>{t.name}</span><span style={{ fontSize: 12, padding: "5px 11px", borderRadius: 999, background: t.hot ? "rgba(255,255,255,.15)" : T.coralWash, color: t.hot ? "#fff" : T.accent, fontWeight: 600 }}>{t.tag}</span></div>
                <div style={{ margin: "22px 0 6px", display: "flex", alignItems: "baseline", gap: 4 }}><span style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-.03em", color: t.hot ? "#fff" : T.accent }}>{t.price}</span><span style={{ color: t.hot ? "rgba(255,255,255,.6)" : T.faint, fontSize: 15 }}>{t.unit}</span></div>
                <p style={{ margin: "0 0 22px", color: t.hot ? "rgba(255,255,255,.72)" : T.mute, fontSize: 15, lineHeight: 1.55, minHeight: 56 }}>{t.d}</p>
                <div style={{ borderTop: `1px solid ${t.hot ? "rgba(255,255,255,.18)" : T.border}`, paddingTop: 18, marginBottom: 24, flex: 1 }}>
                  {t.feats.map((f) => <div key={f} style={{ display: "flex", gap: 10, alignItems: "center", padding: "8px 0", fontSize: 15, color: t.hot ? "rgba(255,255,255,.9)" : T.mute }}><Check c={t.hot ? "#fff" : T.accent} />{f}</div>)}
                </div>
                <Btn variant={t.hot ? "coral" : "ghost"} onClick={() => router.push("/book")} style={{ width: "100%", ...(t.hot ? { background: "#fff", color: T.accent } : {}) }}>{t.cta} <ArrowR s={15} /></Btn>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <FAQ />
      <FinalCTA />
      <style>{`@media(max-width:900px){.ol-price-grid{grid-template-columns:1fr !important;}.ol-price-cell{transform:none !important;}}`}</style>
    </main>
  );
}
