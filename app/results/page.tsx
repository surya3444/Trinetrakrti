"use client";
import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { T } from "@/lib/theme";
import { Container, ArrowR } from "@/components/ui/Shared";
import { PageHero, Testimonials, FinalCTA } from "@/components/sections/SharedSections";

export default function Results() {
  useReveal();
  const cases = [
    { tag: "Web app + automations", title: "From spreadsheet chaos to one system", who: "EdTech startup", before: "Admissions tracked across 3 spreadsheets and a WhatsApp group.", after: "One dashboard with automated follow-ups and live status.", metric: "70%", metricLabel: "less manual data entry" },
    { tag: "AI automation", title: "Reports that write themselves", who: "Services firm", before: "A full day every week spent assembling client reports by hand.", after: "Reports auto-generated, summarised and emailed on schedule.", metric: "~4 hrs", metricLabel: "saved per week" },
    { tag: "Mobile app", title: "MVP in the market in 6 weeks", who: "Consumer startup", before: "An idea, a deadline, and no technical team.", after: "A live app in users' hands, iterating on real feedback.", metric: "3×", metricLabel: "faster than quoted elsewhere" },
  ];
  return (
    <main>
      <PageHero num="01" eyebrow="Results" title={<>Proof beats promises.</>} sub="Every project is judged on one thing: did it remove friction the client can feel? These snapshots show the before, the after, and the number that moved." />
      <section style={{ padding: "44px 0 80px" }}>
        <Container>
          <div style={{ borderTop: `2px solid ${T.fg}` }}>
            {cases.map((c, i) => (
              <div key={i} className="ol-reveal ol-case" data-delay={i * 70} style={{ borderBottom: `2px solid ${T.fg}`, padding: "32px 16px", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 28, alignItems: "center" }}>
                <div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}><span className="ol-mono" style={{ fontSize: 11, color: "#fff", background: T.accent, padding: "5px 10px", letterSpacing: ".06em" }}>{c.tag}</span><span style={{ fontSize: 13, color: T.faint }}>{c.who}</span></div>
                  <h3 style={{ fontSize: "clamp(22px,2.8vw,30px)", margin: "0 0 18px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-.02em", lineHeight: 1 }}>{c.title}</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 0, alignItems: "stretch", border: `2px solid ${T.fg}` }}>
                    <div style={{ background: T.muted, padding: "14px 16px" }}><div className="ol-mono" style={{ fontSize: 10.5, color: T.mute, marginBottom: 6, letterSpacing: ".1em" }}>Before</div><div style={{ fontSize: 14, color: T.fg, lineHeight: 1.5 }}>{c.before}</div></div>
                    <div style={{ color: T.accent, display: "grid", placeItems: "center", padding: "0 10px", borderLeft: `2px solid ${T.fg}`, borderRight: `2px solid ${T.fg}` }}><ArrowR s={20} /></div>
                    <div style={{ background: "#fff", padding: "14px 16px" }}><div className="ol-mono" style={{ fontSize: 10.5, color: T.accent, marginBottom: 6, letterSpacing: ".1em" }}>After</div><div style={{ fontSize: 14, color: T.fg, lineHeight: 1.5, fontWeight: 600 }}>{c.after}</div></div>
                  </div>
                </div>
                <div style={{ textAlign: "left", borderLeft: `2px solid ${T.fg}`, paddingLeft: 28 }} className="ol-case-metric"><div style={{ fontSize: "clamp(44px,6vw,72px)", fontWeight: 900, letterSpacing: "-.04em", color: T.accent, lineHeight: .9 }}>{c.metric}</div><div style={{ fontSize: 14.5, color: T.mute, marginTop: 10, textTransform: "uppercase", letterSpacing: ".04em", fontWeight: 600 }}>{c.metricLabel}</div></div>
              </div>
            ))}
          </div>
          <p className="ol-mono" style={{ fontSize: 11, color: T.faint, marginTop: 18, letterSpacing: ".08em" }}>Illustrative engagements. Detailed references shared on request.</p>
        </Container>
      </section>
      <Testimonials />
      <div style={{ height: 40 }} />
      <FinalCTA />
      <style>{`@media(max-width:780px){.ol-case{grid-template-columns:1fr !important;gap:18px !important;}.ol-case-metric{border-left:none !important;padding-left:0 !important;border-top:2px solid ${T.fg};padding-top:18px;}}`}</style>
    </main>
  );
}
