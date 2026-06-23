"use client";
import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { T } from "@/lib/theme";
import { Container, ArrowR } from "@/components/ui/Shared";
import { PageHero, FinalCTA } from "@/components/sections/SharedSections";

interface Project {
  title: string;
  logo: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Campus Verse",
    logo: "/campusverse1.png",
    category: "Institutional Management Software",
    description: "Campus Verse unifies institutional management, student health, and career readiness into one powerful, scalable ecosystem — built for schools, colleges, and multi-branch universities.",
    tech: ["ERP", "JavaScript", "Next.js", "SQL"],
    link: "https://campusverse.app",
  },
  {
    title: "OAAS",
    logo: "/oaas1.png",
    category: "Organization as a Service",
    description: "The enterprise-grade architecture for managing dynamic databases, team workflows, and custom data structures at scale.",
    tech: ["React", "Node.js", "AWS"],
    link: "https://oaas.rajchavin.com",
  },
  {
    title: "Real-Estate Management Software (ERP)",
    logo: "/raas1.png",
    category: "Full-Stack Platform",
    description: "Centralize project planning, live inventory tracking, and revenue intelligence in one powerful interface. Role-based access control, tenant-level data isolation, encrypted infrastructure, and complete activity logs — built for institutional-grade compliance.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://raas.rajchavin.com",
  },
  {
    title: "Horticogen",
    logo: "/horticogen1.png",
    category: "Ecommerce",
    description: "Horticogen is your premier destination for high-quality horticulture products, laboratory equipment, and organic gardening accessories.",
    tech: ["Next.js", "JavaScript", "Node.js"],
    link: "https://horticogen.com",
  },
];

export default function OurWork() {
  useReveal();
  return (
    <main>
      <PageHero num="01" eyebrow="Our Work" title={<>Things we&apos;ve built.<br />Logic in action.</>} sub="A look at some of the recent systems, platforms, and tools we've engineered to solve real-world problems." />

      <section style={{ padding: "72px 0 90px" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }} className="ol-portfolio-grid">
            {projects.map((p, i) => <Card key={p.title} p={p} i={i} />)}
          </div>
        </Container>
      </section>

      <FinalCTA />
      <style>{`@media(max-width:820px){.ol-portfolio-grid{grid-template-columns:1fr !important;}}`}</style>
    </main>
  );
}

function Card({ p, i }: { p: Project; i: number }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={p.link} target="_blank" rel="noreferrer" className="ol-reveal ol-frame" data-delay={i * 80}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "flex", flexDirection: "column", background: "#fff", border: `1px solid ${T.border}`, borderRadius: T.radius, padding: "30px 30px", textDecoration: "none", color: T.fg, boxShadow: h ? T.shadowFloat : T.shadowCard, transform: h ? "translateY(-4px)" : "none" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: T.mute, background: T.muted, borderRadius: 999, padding: "5px 12px" }}>{p.category}</span>
        <span style={{ color: T.accent, display: "inline-flex", transform: h ? "translate(3px,-3px)" : "none", transition: "transform .2s ease" }}><ArrowR s={20} /></span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
        <div style={{ width: 54, height: 54, borderRadius: 14, border: `1px solid ${T.border}`, background: T.muted, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", flexShrink: 0 }}>
          <img src={p.logo} alt={`${p.title} logo`} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "filter .2s" }} onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement!.innerHTML = `<span style="font-size: 22px; font-weight:600; color: ${T.fg}">${p.title.charAt(0)}</span>`; }} />
        </div>
        <h3 style={{ fontSize: 21, margin: 0, fontWeight: 600, letterSpacing: "-.02em", lineHeight: 1.1 }}>{p.title}</h3>
      </div>
      <p style={{ margin: "0 0 24px", color: T.mute, fontSize: 15, lineHeight: 1.6, flex: 1 }}>{p.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto", paddingTop: 18, borderTop: `1px solid ${T.border}` }}>
        {p.tech.map((t) => <span key={t} style={{ fontSize: 12, fontWeight: 500, color: T.mute, background: T.muted, borderRadius: 999, padding: "5px 11px" }}>{t}</span>)}
      </div>
    </a>
  );
}
