"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useReveal } from "@/hooks/useReveal";
import { T, ALL_SERVICES, ServiceItem } from "@/lib/theme";
import { Container, BuildIcon, ArrowR } from "@/components/ui/Shared";
import { PageHero, FinalCTA } from "@/components/sections/SharedSections";

export default function Work() {
  useReveal();
  const router = useRouter();
  return (
    <main>
      <PageHero eyebrow="What we build" title={<>Everything we build,<br />in one place.</>} sub="The full range of what we design and engineer. Pick the thing you need to see how we approach it — or let us figure out the right mix on a call." />
      <section style={{ padding: "80px 0" }}>
        <Container>
          <div style={{ display: "grid", gap: 14 }}>
            {ALL_SERVICES.map((s, i) => (
              <Row key={s.id} s={s} i={i} onClick={() => router.push(`/work/${s.id}`)} />
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </main>
  );
}

function Row({ s, i, onClick }: { s: ServiceItem; i: number; onClick: () => void }) {
  const [h, setH] = React.useState(false);
  return (
    <div className="ol-reveal ol-frame" data-delay={(i % 8) * 40} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}
      style={{ display: "grid", gridTemplateColumns: "auto auto 1fr auto", gap: 24, padding: "24px 26px", border: `1px solid ${T.border}`, borderRadius: T.radius, alignItems: "center", cursor: "pointer", background: "#fff", color: T.fg, boxShadow: h ? T.shadowFloat : T.shadowCard, transform: h ? "translateY(-3px)" : "none" }}>
      <span className="ol-mono" style={{ fontSize: 13, fontWeight: 700, color: T.faint, width: 26 }}>{`0${i + 1}`.slice(-2)}</span>
      <div style={{ width: 50, height: 50, borderRadius: 12, background: T.coralWash, display: "grid", placeItems: "center", flexShrink: 0 }}><BuildIcon name={s.icon} c={T.accent} /></div>
      <div>
        <h3 style={{ fontSize: "clamp(19px,2.4vw,25px)", margin: 0, fontWeight: 600, letterSpacing: "-.02em", lineHeight: 1.1 }}>{s.t}</h3>
        <p style={{ margin: "7px 0 0", color: T.mute, fontSize: 15, lineHeight: 1.5, maxWidth: 640 }} className="ol-row-desc">{s.d}</p>
      </div>
      <span style={{ color: T.accent, display: "inline-flex", transform: h ? "translateX(4px)" : "none", transition: "transform .2s ease" }}><ArrowR s={22} /></span>
    </div>
  );
}
