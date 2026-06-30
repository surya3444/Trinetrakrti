"use client";
import React from "react";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { T, SERVICES } from "@/lib/theme";
import { Container, SectionHead, Eyebrow, CountUp, BuildIcon, Check, ArrowR } from "@/components/ui/Shared";
import { PageHero, FinalCTA } from "@/components/sections/SharedSections";

const POINTS = [
  "A multidisciplinary team of developers, designers, analysts and strategists",
  "Tailor-made solutions powered by emerging technologies",
  "Rooted in creativity, driven by data",
  "Built to help you launch, scale and grow smarter",
];

const STATS = [
  { to: 70, suffix: "+", label: "Projects completed" },
  { to: 100, suffix: "%", label: "Satisfied clients" },
  { to: 3, suffix: "+", label: "Years of work" },
  { to: 3, suffix: "+", label: "Awards" },
];

const PROCESS = [
  { n: "01", t: "Goal setting", d: "Define your project objectives and goals so every decision points at the outcome that matters." },
  { n: "02", t: "Select service", d: "Choose the right capability for the job — we help you pick what actually fixes the problem." },
  { n: "03", t: "Solve problem", d: "We build and ship the solution using the latest technology, then iterate on what works." },
];

export default function AboutUs() {
  useReveal();
  return (
    <main>
      <PageHero
        num="01"
        eyebrow="About"
        title={<>We build digital<br />experiences that matter.</>}
        sub="From startups with bold ideas to enterprises navigating transformation, we partner with companies across industries to deliver tailor-made, AI-driven solutions."
      />

      {/* Know about us */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="ol-au-grid">
            <div className="ol-reveal">
              <Eyebrow>Know about us</Eyebrow>
              <h2 style={{ fontSize: "clamp(28px,4vw,46px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-.025em", margin: "14px 0 0", color: T.fg }}>About Us</h2>
              <p style={{ fontSize: 19, lineHeight: 1.7, color: T.fg, marginTop: 20, fontWeight: 500 }}>At Trinetrakrti, we do more than build tech — we build digital experiences that matter.</p>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: T.mute, marginTop: 18 }}>Rooted in creativity and driven by data, we bring a multidisciplinary team of developers, designers, analysts and strategists together to help you launch, scale and grow smarter with our AI-driven, cutting-edge solutions.</p>
            </div>
            <div className="ol-reveal" data-delay="100" style={{ display: "grid", gap: 12 }}>
              {POINTS.map((p) => (
                <div key={p} className="ol-frame" style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "18px 20px", border: `1px solid ${T.border}`, borderRadius: T.radius, background: "#fff", boxShadow: T.shadowCard }}>
                  <Check c={T.accent} s={20} />
                  <span style={{ fontSize: 15.5, lineHeight: 1.5, color: T.fg, fontWeight: 500 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stats band */}
      <section style={{ padding: "0 0 80px" }}>
        <Container>
          <div className="ol-reveal" style={{ position: "relative", overflow: "hidden", background: T.darkGradient, color: "#fff", borderRadius: 28, padding: "56px 48px", boxShadow: T.shadowFloat }}>
            <div aria-hidden className="st-grid-overlay" style={{ position: "absolute", inset: 0 }} />
            <div style={{ position: "relative" }}>
              <Eyebrow color="#FF8A78">Work experience</Eyebrow>
              <h2 style={{ fontSize: "clamp(26px,3.6vw,40px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-.025em", margin: "14px 0 36px", color: "#fff" }}>We&apos;ve been building for over three years.</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 28 }} className="ol-au-stats">
                {STATS.map((s) => (
                  <div key={s.label} style={{ borderLeft: "2px solid rgba(255,138,120,.6)", paddingLeft: 18 }}>
                    <div style={{ fontSize: "clamp(34px,5vw,52px)", fontWeight: 700, letterSpacing: "-.03em", lineHeight: 1, color: "#fff" }}>
                      <CountUp to={s.to} suffix={s.suffix} />
                    </div>
                    <div style={{ marginTop: 10, fontSize: 14.5, color: "rgba(255,255,255,.7)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Work process */}
      <section style={{ padding: "0 0 90px" }}>
        <Container>
          <div style={{ textAlign: "center" }}>
            <SectionHead align="center" eyebrow="Work process" title="Our work process" sub="A simple, repeatable path from your problem to a working solution." />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 44 }} className="ol-au-proc">
            {PROCESS.map((p, i) => (
              <div key={p.n} className="ol-reveal ol-frame" data-delay={i * 80} style={{ padding: "30px 26px", border: `1px solid ${T.border}`, borderRadius: T.radius, background: "#fff", boxShadow: T.shadowCard }}>
                <div className="ol-mono" style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".1em", color: T.accent }}>{p.n}</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-.02em", margin: "12px 0 0", color: T.fg }}>{p.t}</h3>
                <p style={{ margin: "10px 0 0", color: T.mute, fontSize: 15.5, lineHeight: 1.6 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Who we are */}
      <section style={{ padding: "0 0 90px" }}>
        <Container>
          <div className="ol-reveal" style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <Eyebrow>Who we are</Eyebrow>
            <h2 style={{ fontSize: "clamp(26px,3.6vw,40px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-.025em", margin: "14px 0 18px", color: T.fg }}>A trusted partner for reliable, efficient IT.</h2>
            <p style={{ color: T.mute, fontSize: 18, lineHeight: 1.7, margin: 0 }}>
              Trinetrakrti is a leading IT company specializing in innovative solutions for businesses worldwide. Our mission is to empower organizations with cutting-edge technology so they can thrive in the digital world. With a team of expert developers, designers and project managers, we offer a wide range of services — {SERVICES.map((s) => s.t).join(", ")} and more.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginTop: 26 }}>
              {SERVICES.map((s) => (
                <span key={s.id} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13.5, fontWeight: 500, color: T.fg, background: T.muted, borderRadius: 999, padding: "8px 14px" }}>
                  <BuildIcon name={s.icon} c={T.accent} />{s.t}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership teaser */}
      <section style={{ padding: "0 0 100px" }}>
        <Container>
          <Link href="/leadership" className="ol-reveal ol-frame" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 26, alignItems: "center", padding: "32px 36px", border: `1px solid ${T.border}`, borderRadius: T.radius, background: "#fff", boxShadow: T.shadowCard }}>
            <div>
              <Eyebrow>Our leadership</Eyebrow>
              <h3 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 700, letterSpacing: "-.025em", margin: "12px 0 8px", color: T.fg }}>Meet the team behind Trinetrakrti.</h3>
              <p style={{ margin: 0, color: T.mute, fontSize: 16, lineHeight: 1.6, maxWidth: 560 }}>Visionary expertise and deep industry knowledge, committed to driving innovation and delivering exceptional value.</p>
            </div>
            <span className="ol-btn" style={{ justifySelf: "end", display: "inline-flex", alignItems: "center", gap: 8, background: T.accentGradient, color: "#fff", borderRadius: T.radiusPill, padding: "12px 22px", fontSize: 15, fontWeight: 600, whiteSpace: "nowrap", boxShadow: T.shadowBtn }}>
              Meet the team <ArrowR s={16} />
            </span>
          </Link>
        </Container>
      </section>

      <FinalCTA />
      <style>{`@media(max-width:860px){.ol-au-grid{grid-template-columns:1fr !important;gap:32px !important;}.ol-au-stats{grid-template-columns:1fr 1fr !important;gap:24px !important;}.ol-au-proc{grid-template-columns:1fr !important;}}@media(max-width:620px){.ol-au-stats{grid-template-columns:1fr 1fr !important;}}`}</style>
    </main>
  );
}
