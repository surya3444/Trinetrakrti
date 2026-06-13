"use client";
import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { T } from "@/lib/theme";
import { Container, ArrowR } from "@/components/ui/Shared";
import { PageHero, FinalCTA } from "@/components/sections/SharedSections";

export default function OurWork() {
  useReveal();

  // Added a 'logo' property to each project. 
  // Place your actual image files inside your Next.js 'public' folder.
  // Example: if logo is "/hydrocalc.png", place hydrocalc.png inside the public/ directory.
  const projects = [
    {
      title: "Campus Verse",
      logo: "/campusverse1.png", 
      category: "Institutinal Management Software",
      description: "Campus Verse unifies institutional management, student health, and career readiness into one powerful, scalable ecosystem — built for schools, colleges, and multi-branch universities.",
      tech: ["ERP", "JavaScript", "Next.js", "SQL"],
      link: "https://campusverse.app"
    },
    {
      title: "OAAS",
      logo: "/oaas1.png",
      category: "Organization as a Service",
      description: "The enterprise-grade architecture for managing dynamic databases, team workflows, and custom data structures at scale.",
      tech: ["React", "Node.js", "AWS"],
      link: "oaas.rajchavin.com"
    },
    {
      title: "Real-Estate Management Software (ERP)",
      logo: "/raas1.png",
      category: "Full-Stack Platform",
      description: "Centralize project planning, live inventory tracking, and revenue intelligence in one powerful interface. Gain real-time visibility across layouts, phases, and performance metrics.Role-based access control, tenant-level data isolation, encrypted infrastructure, and complete activity logs — built for institutional-grade compliance.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://raas.rajchavin.com"
    },
    {
      title: "Horticogen",
      logo: "/horticogen1.png",
      category: "Ecommerce",
      description: "Horticogen is your premier destination for high-quality horticulture products, laboratory equipment, and organic gardening accessories.",
      tech: ["Next.js", "JavaScript", "Node.js"],
      link: "https://horticogen.com"
    }
  ];

  return (
    <main>
      <PageHero 
        eyebrow="Our Work" 
        title={<>Things we've built.<br />Logic in action.</>} 
        sub="A look at some of the recent systems, platforms, and tools we've engineered to solve real-world problems." 
      />
      
      <section style={{ padding: "40px 0 80px" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="ol-portfolio-grid">
            {projects.map((p, i) => (
              <a 
                key={p.title} 
                href={p.link}
                className="ol-frame ol-reveal" 
                data-delay={i * 80} 
                style={{ 
                  display: "flex",
                  flexDirection: "column",
                  background: T.panel, 
                  border: `1px solid ${T.line2}`, 
                  borderRadius: 20, 
                  padding: "36px 32px",
                  textDecoration: "none",
                  color: "inherit"
                }} 
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = T.coral)} 
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = T.line2)}
              >
                {/* Top Row: Category Tag & Arrow */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                  <span className="ol-mono" style={{ fontSize: 11, color: T.blue, background: T.blueWash, padding: "5px 10px", borderRadius: 999 }}>
                    {p.category}
                  </span>
                  <div style={{ color: T.coral }}><ArrowR s={20} /></div>
                </div>
                
                {/* Title Row with Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                  <div style={{ 
                    width: 52, 
                    height: 52, 
                    borderRadius: 14, 
                    background: T.wash, 
                    border: `1px solid ${T.line}`, 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    overflow: "hidden",
                    flexShrink: 0
                  }}>
                    {p.logo ? (
                      <img src={p.logo} alt={`${p.title} logo`} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = `<span class="ol-mono" style="font-size: 20px; color: ${T.faint}">${p.title.charAt(0)}</span>`; }} />
                    ) : (
                      <span className="ol-mono" style={{ fontSize: 20, color: T.faint }}>{p.title.charAt(0)}</span>
                    )}
                  </div>
                  <h3 style={{ fontSize: 24, margin: 0, fontWeight: 700, letterSpacing: "-.02em" }}>
                    {p.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p style={{ margin: "0 0 24px", color: T.mute, fontSize: 15.5, lineHeight: 1.6, flex: 1 }}>
                  {p.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto", paddingTop: 20, borderTop: `1px solid ${T.line}` }}>
                  {p.tech.map((t) => (
                    <span key={t} className="ol-mono" style={{ fontSize: 12, color: T.mute, background: T.wash, border: `1px solid ${T.line}`, padding: "4px 10px", borderRadius: 999 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>
      
      <FinalCTA />
      
      <style>{`
        @media(max-width: 820px) {
          .ol-portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}