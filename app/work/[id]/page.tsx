"use client";
import React, { use } from "react";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useReveal } from "@/hooks/useReveal";
import { T, ALL_SERVICES } from "@/lib/theme";
import { Container, BuildIcon, Btn, ArrowR, Check } from "@/components/ui/Shared";
import { FinalCTA } from "@/components/sections/SharedSections";

export default function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  useReveal();
  const router = useRouter();
  const service = ALL_SERVICES.find((s) => s.id === id);
  if (!service) notFound();

  return (
    <main>
      {/* Hero */}
      <section className="st-hero">
        <div aria-hidden className="st-grid-overlay" style={{ position: "absolute", inset: 0, zIndex: 1 }} />
        <Container style={{ position: "relative", padding: "84px 24px 88px" }}>
          <button onClick={() => router.push("/work")} className="ol-reveal ol-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", borderRadius: T.radiusPill, color: "#fff", padding: "8px 16px", fontSize: 14, fontWeight: 600, fontFamily: "'Inter',sans-serif", marginBottom: 26 }}>
            <span style={{ display: "inline-flex", transform: "rotate(180deg)" }}><ArrowR s={15} /></span> All services
          </button>
          <div className="ol-reveal" data-delay="40" style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: 14, background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)" }}>
              <BuildIcon name={service.icon} c="#fff" />
            </span>
            <span className="ol-mono" style={{ fontSize: 13, letterSpacing: ".09em", color: "#FFD7C2", fontWeight: 600 }}>What we build</span>
          </div>
          <h1 className="ol-reveal" data-delay="80" style={{ fontSize: "clamp(36px,5.4vw,68px)", lineHeight: 1.04, letterSpacing: "-.035em", fontWeight: 700, margin: "20px 0 0", maxWidth: 880, color: "#fff" }}>{service.t}</h1>
          <p className="ol-reveal" data-delay="140" style={{ marginTop: 20, fontSize: 20, color: "rgba(255,255,255,.84)", maxWidth: 640, lineHeight: 1.55 }}>{service.long ?? service.d}</p>
          <div className="ol-reveal" data-delay="190" style={{ marginTop: 32 }}>
            <Btn variant="coral" onClick={() => router.push("/book")} style={{ background: "#fff", color: T.accent, fontSize: 16, padding: "14px 26px" }}>Book a call <ArrowR /></Btn>
          </div>
        </Container>
      </section>

      {/* What's included */}
      {service.includes && service.includes.length > 0 && (
        <section style={{ padding: "80px 0 30px" }}>
          <Container>
            <div className="ol-reveal" style={{ maxWidth: 760 }}>
              <div className="ol-mono" style={{ fontSize: 13, letterSpacing: ".09em", color: T.accent, fontWeight: 600 }}>What&apos;s included</div>
              <h2 style={{ fontSize: "clamp(26px,3.6vw,40px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-.025em", margin: "14px 0 0", color: T.fg }}>Everything you need, end to end.</h2>
            </div>
            <div className="ol-reveal ol-svc-ex" data-delay="80" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14, marginTop: 36 }}>
              {service.includes.map((it, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "20px 22px", background: "#fff", border: `1px solid ${T.border}`, borderRadius: T.radius, boxShadow: T.shadowCard, fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: T.fg }}>
                  <span style={{ flexShrink: 0, marginTop: 1 }}><Check /></span>{it}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Examples */}
      {service.examples && service.examples.length > 0 && (
        <section style={{ padding: "60px 0 90px" }}>
          <Container>
            <div className="ol-reveal" style={{ maxWidth: 760 }}>
              <div className="ol-mono" style={{ fontSize: 13, letterSpacing: ".09em", color: T.accent, fontWeight: 600 }}>Examples</div>
              <h2 style={{ fontSize: "clamp(26px,3.6vw,40px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-.025em", margin: "14px 0 0", color: T.fg }}>What this looks like in practice.</h2>
            </div>
            <div className="ol-reveal ol-svc-ex" data-delay="80" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20, marginTop: 36 }}>
              {service.examples.map((ex, i) => (
                <div key={i} className="ol-frame" style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: T.radius, padding: "30px 30px", boxShadow: T.shadowCard }}>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 42, height: 42, borderRadius: 11, background: T.coralWash, marginBottom: 18 }}>
                    <BuildIcon name={service.icon} c={T.accent} />
                  </span>
                  <h3 style={{ fontSize: 20, margin: "0 0 10px", fontWeight: 600, letterSpacing: "-.02em", lineHeight: 1.15, color: T.fg }}>{ex.t}</h3>
                  <p style={{ margin: 0, color: T.mute, fontSize: 15.5, lineHeight: 1.6 }}>{ex.d}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FinalCTA />
      <style>{`@media(max-width:760px){.ol-svc-ex{grid-template-columns:1fr !important;}}`}</style>
    </main>
  );
}
