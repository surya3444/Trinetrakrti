"use client";
import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { T, BRAND, IconName } from "@/lib/theme";
import { Container, BuildIcon, ArrowR, Check } from "@/components/ui/Shared";
import { PageHero, FinalCTA } from "@/components/sections/SharedSections";

interface Role {
  id: string;
  title: string;
  type: string;
  location: string;
  icon: IconName;
  d: string;
  skills: string[];
}

const ROLES: Role[] = [
  {
    id: "software-intern",
    title: "Software Intern",
    type: "Internship",
    location: "Bangalore / Remote",
    icon: "code",
    d: "Work alongside our engineers on real client products — websites, apps and internal tools. You'll ship code that goes live, not throwaway exercises, and learn how software is built end to end.",
    skills: ["JavaScript / TypeScript", "React or Next.js", "Git & APIs", "Eagerness to learn"],
  },
  {
    id: "uiux-designer",
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Bangalore / Remote",
    icon: "spark",
    d: "Own the experience from flow to pixel. You'll map user journeys, prototype interfaces and build design systems our engineers can ship without guesswork — designing around how people actually work.",
    skills: ["Figma", "Design systems", "Prototyping", "User research"],
  },
  {
    id: "iot-engineer",
    title: "IoT Solutions Engineer",
    type: "Full-time",
    location: "Bangalore / On-site",
    icon: "chip",
    d: "Connect the physical world to our software — from device firmware and connectivity to telemetry pipelines and live dashboards. You'll take projects from sensor to insight.",
    skills: ["Embedded C / Python", "MQTT & protocols", "Edge & cloud telemetry", "Hardware integration"],
  },
  {
    id: "arvr-developer",
    title: "AR/VR Developer",
    type: "Full-time",
    location: "Bangalore / Remote",
    icon: "cube",
    d: "Build immersive augmented and virtual reality experiences for real use cases — product visualizers, training simulations and interactive showcases that help people understand and decide faster.",
    skills: ["Unity / Unreal", "C# / C++", "3D & WebAR", "Spatial UX"],
  },
];

export default function Careers() {
  useReveal();
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title={<>Build the systems<br />behind the work.</>}
        sub="We're a small team that ships real products for real businesses. If you'd rather solve the root problem than tick off a feature list, you'll fit right in."
        showCta={false}
      />

      <section style={{ padding: "72px 0 90px" }}>
        <Container>
          <div className="ol-reveal" style={{ marginBottom: 36 }}>
            <div className="ol-mono" style={{ fontSize: 13, letterSpacing: ".09em", color: T.accent, fontWeight: 600 }}>Open roles</div>
            <h2 style={{ fontSize: "clamp(26px,3.6vw,40px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-.025em", margin: "14px 0 0", color: T.fg }}>Where we&apos;re hiring right now.</h2>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            {ROLES.map((r, i) => (
              <RoleCard key={r.id} r={r} i={i} />
            ))}
          </div>

          <p className="ol-reveal" style={{ marginTop: 30, color: T.mute, fontSize: 15.5, lineHeight: 1.6 }}>
            Don&apos;t see your role? We&apos;re always glad to meet sharp people. Email us at{" "}
            <a href={`mailto:${BRAND.email}?subject=${encodeURIComponent("Open application — Trinetrakrti")}`} style={{ color: T.accent, fontWeight: 600 }}>{BRAND.email}</a>.
          </p>
        </Container>
      </section>

      <FinalCTA />
      <style>{`@media(max-width:720px){.ol-role{grid-template-columns:1fr !important;}.ol-role-apply{justify-self:start !important;}}`}</style>
    </main>
  );
}

function RoleCard({ r, i }: { r: Role; i: number }) {
  const [h, setH] = React.useState(false);
  const mailto = `mailto:${BRAND.email}?subject=${encodeURIComponent(`Application: ${r.title}`)}&body=${encodeURIComponent(`Hi Trinetrakrti,\n\nI'd like to apply for the ${r.title} role.\n\n(Tell us a bit about yourself and attach your resume / portfolio.)`)}`;
  return (
    <div className="ol-reveal ol-frame ol-role" data-delay={i * 70} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 26, padding: "28px 28px", border: `1px solid ${T.border}`, borderRadius: T.radius, background: "#fff", boxShadow: h ? T.shadowFloat : T.shadowCard, transform: h ? "translateY(-3px)" : "none", alignItems: "center" }}>
      <div style={{ width: 54, height: 54, borderRadius: 14, background: T.coralWash, display: "grid", placeItems: "center", flexShrink: 0 }}>
        <BuildIcon name={r.icon} c={T.accent} />
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <h3 style={{ fontSize: "clamp(19px,2.4vw,24px)", margin: 0, fontWeight: 600, letterSpacing: "-.02em", color: T.fg }}>{r.title}</h3>
          <span style={{ fontSize: 12, fontWeight: 600, color: T.accent, background: T.coralWash, borderRadius: 999, padding: "4px 11px" }}>{r.type}</span>
          <span style={{ fontSize: 12.5, fontWeight: 500, color: T.mute, background: T.muted, borderRadius: 999, padding: "4px 11px" }}>{r.location}</span>
        </div>
        <p style={{ margin: "10px 0 0", color: T.mute, fontSize: 15.5, lineHeight: 1.6, maxWidth: 640 }}>{r.d}</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
          {r.skills.map((s) => (
            <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, fontWeight: 500, color: T.fg, background: T.muted, borderRadius: 999, padding: "5px 12px" }}><Check c={T.accent} s={14} />{s}</span>
          ))}
        </div>
      </div>
      <a href={mailto} className="ol-role-apply ol-btn" style={{ justifySelf: "end", display: "inline-flex", alignItems: "center", gap: 8, background: T.accentGradient, color: "#fff", borderRadius: T.radiusPill, padding: "12px 22px", fontSize: 15, fontWeight: 600, whiteSpace: "nowrap", boxShadow: T.shadowBtn }}>
        Apply <ArrowR s={16} />
      </a>
    </div>
  );
}
