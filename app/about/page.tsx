"use client";
import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { T } from "@/lib/theme";
import { Container } from "@/components/ui/Shared";
import { PageHero, FinalCTA } from "@/components/sections/SharedSections";

export default function About() {
  useReveal();
  return (
    <main>
      <PageHero eyebrow="About" title={<>We build with logic,<br />not guesswork.</>} sub="Too many businesses get handed software they didn't need, built off a spec nobody pressure-tested. We do it the other way around." />
      <section style={{ padding: "12px 0 80px" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="ol-about-grid">
            <div className="ol-reveal">
              <p style={{ fontSize: 18, lineHeight: 1.7, color: T.ink70 }}>Only Logic is a Business Systems Studio. We build websites, apps, AI automations and internal tools — but we lead with understanding, not order-taking.</p>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: T.ink70, marginTop: 18 }}>Every project starts the same way: we sit with you, map how the business actually works, and find where the real friction is. Then we build the smallest thing that fixes it, learn from how it's used, and scale what works.</p>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: T.ink70, marginTop: 18 }}>The result is software you'll actually use — because it was built around your logic, not someone else's template.</p>
            </div>
            <div className="ol-reveal" data-delay="100" style={{ display: "grid", gap: 14, alignContent: "start" }}>
              {[ 
                { t: "Logic first", d: "We understand the business before we touch a keyboard." }, 
                { t: "MVP-friendly", d: "Ship small, learn fast, scale what proves out." },
                { t: "Outcomes, not output", d: "Judged on impact, not feature count." },
                { t: "Long-term partners", d: "We iterate and grow alongside you." },
              ].map((v, i) => (
                <div key={v.t} className="ol-frame" style={{ background: T.panel, border: `1px solid ${T.line2}`, borderRadius: 16, padding: "20px 22px" }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = T.coral)} onMouseLeave={(e) => (e.currentTarget.style.borderColor = T.line2)}>
                  <div className="ol-mono" style={{ fontSize: 11, color: T.coral, marginBottom: 8 }}>value.0{i + 1}</div>
                  <div style={{ fontSize: 18, fontWeight: 600 }}>{v.t}</div>
                  <p style={{ margin: "6px 0 0", color: T.mute, fontSize: 14.5, lineHeight: 1.5 }}>{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <FinalCTA />
      <style>{`@media(max-width:820px){.ol-about-grid{grid-template-columns:1fr !important;gap:28px !important;}}`}</style>
    </main>
  );
}