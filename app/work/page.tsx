"use client";
import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { T, BUILDS } from "@/lib/theme";
import { Container, BuildIcon } from "@/components/ui/Shared";
import { PageHero, FinalCTA } from "@/components/sections/SharedSections";

export default function Work() {
  useReveal();
  return (
    <main>
      <PageHero eyebrow="What we build" title={<>Websites, apps, automations<br />and tools — built to work together.</>} sub="Pick the thing you need, or let us figure out the right mix on a call. Either way, it's one team building one connected system." />
      <section style={{ padding: "12px 0 80px" }}>
        <Container>
          {BUILDS.map((b, i) => (
            <div key={b.t} className="ol-reveal" data-delay={i * 60} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 26, padding: "30px 0", borderTop: `1px solid ${T.line2}`, alignItems: "start" }}>
              <div style={{ width: 60, height: 60, borderRadius: 16, background: T.wash, border: `1px solid ${T.line}`, display: "grid", placeItems: "center", flexShrink: 0 }}><BuildIcon name={b.icon} c={T.coral} /></div>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}><h3 style={{ fontSize: 26, margin: 0, fontWeight: 700 }}>{b.t}</h3><span className="ol-mono" style={{ fontSize: 12, color: T.faint }}>0{i + 1}</span></div>
                <p style={{ margin: "10px 0 14px", color: T.mute, fontSize: 17, lineHeight: 1.6, maxWidth: 640 }}>{b.d}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{b.tags.map((t) => <span key={t} className="ol-mono" style={{ fontSize: 12.5, color: T.mute, background: T.wash, border: `1px solid ${T.line}`, padding: "6px 12px", borderRadius: 999 }}>{t}</span>)}</div>
              </div>
            </div>
          ))}
        </Container>
      </section>
      <FinalCTA />
    </main>
  );
}