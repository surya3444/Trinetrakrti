"use client";
import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { T } from "@/lib/theme";
import { Container } from "@/components/ui/Shared";
import { PageHero, FinalCTA } from "@/components/sections/SharedSections";

export default function About() {
  useReveal();
  const values = [
    { t: "Logic first", d: "We understand the business before we touch a keyboard." },
    { t: "MVP-friendly", d: "Ship small, learn fast, scale what proves out." },
    { t: "Outcomes, not output", d: "Judged on impact, not feature count." },
    { t: "Long-term partners", d: "We iterate and grow alongside you." },
  ];
  return (
    <main>
      <PageHero num="01" eyebrow="About" title={<>We build with logic,<br />not guesswork.</>} sub="Too many businesses get handed software they didn't need, built off a spec nobody pressure-tested. We do it the other way around." />
      <section style={{ padding: "0 0 80px" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: `2px solid ${T.fg}`, borderTop: "none" }} className="ol-about-grid">
            <div className="ol-reveal" style={{ padding: "44px 36px", borderRight: `2px solid ${T.fg}` }} >
              <p style={{ fontSize: 18, lineHeight: 1.7, color: T.fg, marginTop: 0 }}>Trinetrakrti is a Business Systems Studio. We build websites, apps, AI automations and internal tools — but we lead with understanding, not order-taking.</p>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: T.mute, marginTop: 18 }}>Every project starts the same way: we sit with you, map how the business actually works, and find where the real friction is. Then we build the smallest thing that fixes it, learn from how it&apos;s used, and scale what works.</p>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: T.mute, marginTop: 18 }}>The result is software you&apos;ll actually use — because it was built around your logic, not someone else&apos;s template.</p>
            </div>
            <div className="ol-reveal" data-delay="100" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {values.map((v, i) => (
                <Value key={v.t} v={v} i={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>
      <FinalCTA />
      <style>{`@media(max-width:820px){.ol-about-grid{grid-template-columns:1fr !important;}.ol-about-grid>div:first-child{border-right:none !important;border-bottom:2px solid ${T.fg};}}`}</style>
    </main>
  );
}

function Value({ v, i }: { v: { t: string; d: string }; i: number }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ padding: "24px 22px", borderLeft: i % 2 ? `2px solid ${T.fg}` : "none", borderTop: i > 1 ? `2px solid ${T.fg}` : "none", background: h ? T.accent : "#fff", color: h ? "#fff" : T.fg, transition: "background .15s ease-out, color .15s ease-out", minHeight: 150 }}>
      <div className="ol-mono" style={{ fontSize: 11, color: h ? "#fff" : T.accent, marginBottom: 10, fontWeight: 700, letterSpacing: ".1em" }}>value.0{i + 1}</div>
      <div style={{ fontSize: 18, fontWeight: 800, textTransform: "uppercase", letterSpacing: "-.01em" }}>{v.t}</div>
      <p style={{ margin: "8px 0 0", color: h ? "rgba(255,255,255,.85)" : T.mute, fontSize: 14.5, lineHeight: 1.5 }}>{v.d}</p>
    </div>
  );
}
