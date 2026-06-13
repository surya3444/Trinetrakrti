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
    { name: "Clarity Call", price: "Free", unit: "", tag: "Start here", d: "A 30-min call to understand your problem and tell you what's worth building.", feats: ["Your likely root cause", "What to build (or not)", "Rough effort & approach", "No deck, no obligation"], cta: "Book the free call", hot: false },
    { name: "Build Sprint", price: "Fixed quote", unit: "", tag: "Most popular", d: "We design and ship a focused MVP — a website, app, automation or tool — fast.", feats: ["Scoped, fixed-price build", "Working MVP in weeks", "You own all the code", "2 weeks of fixes included"], cta: "Scope my build", hot: true },
    { name: "Systems Partner", price: "Monthly", unit: "/mo", tag: "Ongoing", d: "We become your build team — shipping, automating and scaling, month after month.", feats: ["Continuous build & automation", "Priority turnaround", "Roadmap & growth planning", "Cancel anytime, no lock-in"], cta: "Talk partnership", hot: false },
  ];
  return (
    <main>
      <PageHero eyebrow="Pricing" title={<>Simple, honest pricing.<br />No hourly surprises.</>} sub="Every build is quoted as a fixed scope tied to an outcome, so you always know what you're paying for. It starts with a free call." showCta={false} />
      <section style={{ padding: "12px 0 80px" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="ol-price-grid">
            {tiers.map((t, i) => (
              <div key={t.name} className="ol-frame ol-reveal" data-delay={i * 80} style={{ background: t.hot ? T.ink : T.panel, color: t.hot ? "#fff" : T.ink, border: `1px solid ${t.hot ? T.ink : T.line2}`, borderRadius: 20, padding: "30px 26px", position: "relative", boxShadow: t.hot ? "0 30px 60px -34px rgba(19,24,43,.5)" : "none", transform: t.hot ? "scale(1.02)" : "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: 20, fontWeight: 700 }}>{t.name}</span><span className="ol-mono" style={{ fontSize: 11, padding: "5px 10px", borderRadius: 999, background: t.hot ? T.coral : T.wash, color: t.hot ? "#fff" : T.mute, fontWeight: 600 }}>{t.tag}</span></div>
                <div style={{ margin: "18px 0 6px", display: "flex", alignItems: "baseline", gap: 4 }}><span style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-.03em", color: t.hot ? T.coral : T.blue }}>{t.price}</span><span style={{ color: t.hot ? "#9AA0B2" : T.faint, fontSize: 15 }}>{t.unit}</span></div>
                <p style={{ margin: "0 0 18px", color: t.hot ? "#B8BCC8" : T.mute, fontSize: 15, lineHeight: 1.55, minHeight: 66 }}>{t.d}</p>
                <div style={{ borderTop: `1px solid ${t.hot ? "#2A3047" : T.line}`, paddingTop: 16, marginBottom: 22 }}>
                  {t.feats.map((f) => <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "7px 0", fontSize: 14.5, color: t.hot ? "#D5D7DE" : T.mute }}><Check c={t.hot ? T.coral : T.green} />{f}</div>)}
                </div>
                <Btn variant={t.hot ? "coral" : "ghost"} onClick={() => router.push("/book")} style={{ width: "100%" }}>{t.cta} <ArrowR s={15} /></Btn>
              </div>
            ))}
          </div>
          <p className="ol-mono ol-reveal" style={{ fontSize: 12.5, color: T.faint, marginTop: 22, textAlign: "center" }}>Exact numbers depend on scope — that's what the free call is for. No tier locks you in.</p>
        </Container>
      </section>
      <FAQ />
      <FinalCTA />
      <style>{`@media(max-width:900px){.ol-price-grid{grid-template-columns:1fr !important;}}`}</style>
    </main>
  );
}