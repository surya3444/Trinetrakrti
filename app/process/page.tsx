"use client";
import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { T } from "@/lib/theme";
import { Container } from "@/components/ui/Shared";
import { PageHero, FinalCTA } from "@/components/sections/SharedSections";

export default function Process() {
  useReveal();

  const PHASES = [
    { k: "Understand", verb: "we map", d: "We learn how your business really runs — the workflows, the leaks, the bottlenecks — before proposing anything.", out: ["Business audit", "Workflow map", "Opportunity list"] },
    { k: "Design", verb: "we shape", d: "We design the fix that fits the real problem: the right website, app, automation or tool — not the flashiest one.", out: ["Solution blueprint", "Architecture", "Roadmap"] },
    { k: "Build", verb: "we ship", d: "We build a working MVP you can put in front of real users in weeks, then improve from what they actually do.", out: ["Working MVP", "Live release", "Docs"] },
    { k: "Automate", verb: "we remove", d: "We strip out the manual, repetitive friction with AI and automation so your team stops doing robot work.", out: ["Automations", "AI workflows", "Integrations"] },
    { k: "Scale", verb: "we compound", d: "We monitor, refine and extend so growth adds revenue instead of breaking your operations.", out: ["Optimisation", "New features", "Ongoing support"] },
  ];

  return (
    <main>
      <PageHero num="01" eyebrow="How it works" title={<>Problem to working<br />system, in five steps.</>} sub="A loop you can see, not a black box. Every step has one job and ends with something real you can hold." />
      <section style={{ padding: "44px 0 90px" }}>
        <Container>
          <div style={{ borderTop: `2px solid ${T.fg}` }}>
            {PHASES.map((p, i) => (
              <div key={p.k} className="ol-reveal ol-phase" data-delay={i * 70} style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 26, padding: "30px 16px", borderBottom: `2px solid ${T.fg}`, alignItems: "start" }}>
                <div style={{ width: 56, height: 56, background: T.fg, color: "#fff", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <span className="ol-mono" style={{ fontSize: 18, fontWeight: 800 }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: "clamp(22px,3vw,30px)", margin: 0, fontWeight: 800, textTransform: "uppercase", letterSpacing: "-.02em" }}>{p.k}</h3>
                    <span className="ol-mono" style={{ fontSize: 12, color: T.accent }}>{p.verb}</span>
                  </div>
                  <p style={{ margin: "10px 0 0", color: T.mute, fontSize: 16, lineHeight: 1.6, maxWidth: 620 }}>{p.d}</p>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end", maxWidth: 240 }} className="ol-phase-out">
                  {p.out.map((o) => (
                    <span key={o} className="ol-mono" style={{ fontSize: 11, color: T.fg, border: `1px solid ${T.fg}`, padding: "6px 10px", letterSpacing: ".04em" }}>{o}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
      <style>{`@media(max-width:760px){.ol-phase{grid-template-columns:auto 1fr !important;}.ol-phase-out{grid-column:1 / -1;justify-content:flex-start !important;max-width:none !important;margin-top:6px;}}`}</style>
    </main>
  );
}
