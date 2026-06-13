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
      <PageHero eyebrow="Results" title={<>Proof beats promises.<br />Here's the kind of change we build.</>} sub="Every project is judged on one thing: did it remove friction the client can feel? These snapshots show the before, the after, and the number that moved." />
      <section style={{ padding: "12px 0 80px" }}>
        <Container>
          <div style={{ display: "grid", gap: 16 }}>
            {cases.map((c, i) => (
              <div key={i} className="ol-frame ol-reveal ol-case" data-delay={i * 70} style={{ background: T.panel, border: `1px solid ${T.line2}`, borderRadius: 20, padding: "30px 30px", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 28, alignItems: "center" }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = T.coral)} onMouseLeave={(e) => (e.currentTarget.style.borderColor = T.line2)}>
                <div className="ol-case-main">
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}><span className="ol-mono" style={{ fontSize: 11, color: T.blue, background: T.blueWash, padding: "5px 10px", borderRadius: 999 }}>{c.tag}</span><span style={{ fontSize: 13, color: T.faint }}>{c.who}</span></div>
                  <h3 style={{ fontSize: 23, margin: "0 0 16px", fontWeight: 700, letterSpacing: "-.02em" }}>{c.title}</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 14, alignItems: "center" }}>
                    <div style={{ background: T.wash, border: `1px solid ${T.line}`, borderRadius: 12, padding: "14px 16px" }}><div className="ol-mono" style={{ fontSize: 10.5, letterSpacing: ".1em", textTransform: "uppercase", color: T.faint, marginBottom: 6 }}>Before</div><div style={{ fontSize: 14, color: T.ink70, lineHeight: 1.5 }}>{c.before}</div></div>
                    <div style={{ color: T.coral }}><ArrowR s={20} /></div>
                    <div style={{ background: T.blueWash, border: `1px solid ${T.blue}22`, borderRadius: 12, padding: "14px 16px" }}><div className="ol-mono" style={{ fontSize: 10.5, letterSpacing: ".1em", textTransform: "uppercase", color: T.blue, marginBottom: 6 }}>After</div><div style={{ fontSize: 14, color: T.ink, lineHeight: 1.5, fontWeight: 500 }}>{c.after}</div></div>
                  </div>
                </div>
                <div style={{ textAlign: "center", borderLeft: `1px solid ${T.line}`, paddingLeft: 24 }} className="ol-case-metric"><div style={{ fontSize: 56, fontWeight: 700, letterSpacing: "-.04em", color: T.coral, lineHeight: 1 }}>{c.metric}</div><div style={{ fontSize: 14.5, color: T.mute, marginTop: 8 }}>{c.metricLabel}</div></div>
              </div>
            ))}
          </div>
          <p className="ol-mono" style={{ fontSize: 12, color: T.faint, marginTop: 18, textAlign: "center" }}>Illustrative engagements. Detailed references shared on request.</p>
        </Container>
      </section>
      <Testimonials />
      <div style={{ height: 40 }} />
      <FinalCTA />
      <style>{`@media(max-width:780px){.ol-case{grid-template-columns:1fr !important;}.ol-case-metric{border-left:none !important;padding-left:0 !important;border-top:1px solid ${T.line};padding-top:18px;}}`}</style>
    </main>
  );
}