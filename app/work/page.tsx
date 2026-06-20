"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useReveal } from "@/hooks/useReveal";
import { T, SERVICES } from "@/lib/theme";
import { Container, BuildIcon, ArrowR } from "@/components/ui/Shared";
import { PageHero, FinalCTA } from "@/components/sections/SharedSections";

export default function Work() {
  useReveal();
  const router = useRouter();
  return (
    <main>
      <PageHero num="01" eyebrow="What we build" title={<>The capabilities<br />we lead with.</>} sub="Pick the thing you need, or let us figure out the right mix on a call. Either way, it's one team building one connected system." />
      <section style={{ padding: "0 0 80px" }}>
        <Container>
          <div style={{ borderTop: `2px solid ${T.fg}` }}>
            {SERVICES.map((s, i) => (
              <Row key={s.id} s={s} i={i} onClick={() => router.push("/book")} />
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </main>
  );
}

function Row({ s, i, onClick }: { s: typeof SERVICES[number]; i: number; onClick: () => void }) {
  const [h, setH] = React.useState(false);
  return (
    <div className="ol-reveal" data-delay={(i % 8) * 40} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}
      style={{ display: "grid", gridTemplateColumns: "auto auto 1fr auto", gap: 26, padding: "26px 16px", borderBottom: `2px solid ${T.fg}`, alignItems: "center", cursor: "pointer", background: h ? T.fg : "transparent", color: h ? "#fff" : T.fg, transition: "background .15s ease-out, color .15s ease-out" }}>
      <span className="ol-mono" style={{ fontSize: 13, fontWeight: 700, color: h ? "#fff" : T.accent, width: 28 }}>{`0${i + 1}`.slice(-2)}</span>
      <div style={{ width: 48, height: 48, border: `2px solid ${h ? "#fff" : T.fg}`, display: "grid", placeItems: "center", flexShrink: 0 }}><BuildIcon name={s.icon} c={h ? "#fff" : T.fg} /></div>
      <div>
        <h3 style={{ fontSize: "clamp(20px,2.6vw,28px)", margin: 0, fontWeight: 800, textTransform: "uppercase", letterSpacing: "-.01em", lineHeight: 1 }}>{s.t}</h3>
        <p style={{ margin: "8px 0 0", color: h ? "rgba(255,255,255,.8)" : T.mute, fontSize: 15, lineHeight: 1.5, maxWidth: 640 }} className="ol-row-desc">{s.d}</p>
      </div>
      <ArrowR s={22} />
    </div>
  );
}
