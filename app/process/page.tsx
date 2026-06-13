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
      <PageHero 
        eyebrow="How it works" 
        title={<>From your problem to a<br />working system, in five steps.</>} 
        sub="A loop you can see, not a black box. Every step has one job and ends with something real you can hold." 
      />
      <section style={{ padding: "12px 0 90px" }}>
        <Container>
          <div style={{ position: "relative" }}>
            <div aria-hidden style={{ position: "absolute", left: 27, top: 10, bottom: 10, width: 2, background: `linear-gradient(${T.coral},${T.line2})` }} />
            {PHASES.map((p, i) => (
              <div key={p.k} className="ol-reveal" data-delay={i * 80} style={{ display: "flex", gap: 26, padding: "0 0 36px", position: "relative" }}>
                <div style={{ flexShrink: 0, width: 56, display: "flex", justifyContent: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: T.panel, border: `2px solid ${T.coral}`, display: "grid", placeItems: "center", zIndex: 1 }}>
                    <span className="ol-mono" style={{ fontSize: 16, fontWeight: 600, color: T.coral }}>{i + 1}</span>
                  </div>
                </div>
                <div 
                  className="ol-frame" 
                  style={{ flex: 1, background: T.panel, border: `1px solid ${T.line2}`, borderRadius: 18, padding: "24px 26px" }} 
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = T.coral)} 
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = T.line2)}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: 24, margin: 0, fontWeight: 700 }}>{p.k}</h3>
                    <span className="ol-mono" style={{ fontSize: 13, color: T.coral }}>{p.verb}</span>
                  </div>
                  <p style={{ margin: "10px 0 16px", color: T.mute, fontSize: 16, lineHeight: 1.6 }}>{p.d}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {p.out.map((o) => (
                      <span key={o} className="ol-mono" style={{ fontSize: 12.5, color: T.mute, background: T.wash, border: `1px solid ${T.line}`, padding: "6px 12px", borderRadius: 999 }}>
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </main>
  );
}