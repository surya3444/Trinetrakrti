"use client";
import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { T } from "@/lib/theme";
import { Container, SectionHead } from "@/components/ui/Shared";
import { PageHero, FinalCTA } from "@/components/sections/SharedSections";

const EXPERTISE = [
  { t: "AI & Machine Learning", d: "Prompt Engineering, Generative AI, and AI tools including ChatGPT, Blackbox, Gemini and Claude." },
  { t: "Big Data", d: "Hadoop, Spark & Scala, Kafka, Airflow, Data Warehousing, Data Lake processing and ETL/ELT." },
  { t: "Cloud Computing", d: "AWS and Azure services, plus Snowflake." },
  { t: "Programming & Analytics", d: "Python, data analytics & visualization, and Business Intelligence (BI)." },
];

const EDUCATION = [
  { t: "MBA", d: "Business Analytics, Alliance School of Business." },
  { t: "Bachelor's Degree", d: "Electronics & Communication, SDM College of Engineering and Technology." },
];

interface Director {
  name: string;
  role: string;
  intro: string;
  sectionTitle: string;
  areas: { t: string; d: string }[];
  close: string;
}

const DIRECTORS: Director[] = [
  {
    name: "Rajkumar B Tirlapur",
    role: "Director, Trinetrakrti",
    intro:
      "Rajkumar B. Tirlapur serves as a Director at Trinetrakrti, bringing a wealth of diverse business experience to the company's strategic oversight. As the father of Founder & CEO Vinayak R. Tirlapur, his involvement represents a cornerstone of support and seasoned wisdom.",
    sectionTitle: "Areas of expertise",
    areas: [
      { t: "Finance", d: "His acumen in financial matters provides valuable guidance for our fiscal strategies and sustainable growth." },
      { t: "Real Estate", d: "Experience in real estate offers a pragmatic perspective on asset management and long-term planning." },
      { t: "Agriculture", d: "His background in agriculture demonstrates adaptability and a deep understanding of varied industries." },
    ],
    close:
      "Rajkumar's multi-faceted business background offers a unique perspective — providing stability and a broad understanding of market dynamics as the company navigates the rapidly evolving AI industry.",
  },
  {
    name: "Chandrakala R Tirlapur",
    role: "Director, Trinetrakrti",
    intro:
      "Chandrakala R. Tirlapur is a respected Director at Trinetrakrti, bringing a unique blend of dedication and foundational support. As the mother of Founder & CEO Vinayak R. Tirlapur, her presence on the board symbolizes the deep-rooted values from which the company has emerged.",
    sectionTitle: "Background & contribution",
    areas: [
      { t: "Educational Experience", d: "A retired teacher, Chandrakala's profession instilled clarity, structured thinking and a commitment to nurturing growth — qualities profoundly valuable in governance." },
      { t: "Values & Vision", d: "Her experience in education emphasizes patience, attention to detail and long-term development, prioritizing stability and ethical operations." },
    ],
    close:
      "Her involvement underscores the belief in strong foundational principles and the importance of a supportive ecosystem for innovation to thrive.",
  },
];

const VALUES = [
  { t: "Innovation", d: "We constantly push boundaries and explore new possibilities in AI and technology to create solutions that make a difference.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /> },
  { t: "Collaboration", d: "We believe in the power of diverse perspectives and collaborative effort to solve complex challenges and deliver exceptional results.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> },
  { t: "Integrity", d: "We uphold the highest standards of ethics and transparency in all our operations, building trust with our clients and partners.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
];

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: T.muted, borderRadius: T.radius, borderLeft: `4px solid ${T.accent}`, padding: "22px 24px" }}>
      <h4 style={{ margin: 0, fontSize: 17, fontWeight: 600, letterSpacing: "-.015em", color: T.fg }}>{title}</h4>
      {children}
    </div>
  );
}

export default function Leadership() {
  useReveal();
  return (
    <main>
      <PageHero
        num="02"
        eyebrow="Leadership"
        title={<>Meet our team.</>}
        sub="The leadership at Trinetrakrti combines visionary expertise with deep industry knowledge — committed to driving innovation and delivering exceptional value to our clients."
        showCta={false}
      />

      {/* Founder feature */}
      <section style={{ padding: "80px 0 0" }}>
        <Container>
          <div className="ol-reveal ol-frame" style={{ border: `1px solid ${T.border}`, borderRadius: 22, background: "#fff", boxShadow: T.shadowFloat, padding: "40px 40px 44px" }}>
            <div style={{ borderBottom: `1px solid ${T.border}`, paddingBottom: 22, marginBottom: 26 }}>
              <h2 style={{ margin: 0, fontSize: "clamp(26px,3.4vw,38px)", fontWeight: 700, letterSpacing: "-.03em", color: T.fg }}>Vinayak R Tirlapur</h2>
              <p style={{ margin: "8px 0 0", fontSize: 18, fontWeight: 500, color: T.accent }}>Founder &amp; CEO, Trinetrakrti</p>
            </div>

            <p style={{ fontSize: 18, lineHeight: 1.7, color: T.fg, margin: 0, fontWeight: 500 }}>
              Vinayak R. Tirlapur is the visionary Founder and CEO of Trinetrakrti, an AI company at the forefront of innovation. He brings over nine years of experience in the IT industry — primarily as a Data Engineer — to his leadership role, where his deep expertise and entrepreneurial drive are key to the company&apos;s mission.
            </p>

            <div style={{ display: "grid", gap: 18, marginTop: 28 }}>
              <Panel title="Professional journey & expertise">
                <p style={{ margin: "12px 0 0", color: T.mute, fontSize: 15.5, lineHeight: 1.65 }}>
                  Vinayak&apos;s career has seen him contribute to prominent organizations including TCS, HCL, Mphasis, Pitney Bowes and Fusion Software Solutions — giving him a comprehensive understanding of data and technology. His skill set spans the technologies crucial to the AI landscape:
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }} className="ol-ld-2col">
                  {EXPERTISE.map((e) => (
                    <div key={e.t} style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: T.radiusSm, padding: "16px 18px" }}>
                      <div style={{ fontSize: 15, fontWeight: 600, color: T.fg }}>{e.t}</div>
                      <p style={{ margin: "6px 0 0", fontSize: 14, lineHeight: 1.55, color: T.mute }}>{e.d}</p>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel title="Educational background">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }} className="ol-ld-2col">
                  {EDUCATION.map((e) => (
                    <div key={e.t} style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: T.radiusSm, padding: "16px 18px" }}>
                      <div style={{ fontSize: 15, fontWeight: 600, color: T.fg }}>{e.t}</div>
                      <p style={{ margin: "6px 0 0", fontSize: 14, lineHeight: 1.55, color: T.mute }}>{e.d}</p>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel title="Current pursuits & vision">
                <p style={{ margin: "12px 0 0", color: T.mute, fontSize: 15.5, lineHeight: 1.65 }}>
                  Vinayak is currently pursuing his PhD. Driven by an unwavering passion for Generative AI and Prompt Engineering, this ongoing academic endeavour reflects his commitment to pushing the boundaries of AI research and development — directly shaping Trinetrakrti&apos;s innovative direction and its mission to create impactful solutions.
                </p>
              </Panel>
            </div>
          </div>
        </Container>
      </section>

      {/* Directors */}
      <section style={{ padding: "26px 0 0" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="ol-ld-dirs">
            {DIRECTORS.map((d, i) => (
              <div key={d.name} className="ol-reveal ol-frame" data-delay={i * 90} style={{ border: `1px solid ${T.border}`, borderRadius: 18, background: "#fff", boxShadow: T.shadowCard, padding: "30px 30px 32px" }}>
                <div style={{ borderBottom: `1px solid ${T.border}`, paddingBottom: 16, marginBottom: 20 }}>
                  <h3 style={{ margin: 0, fontSize: 23, fontWeight: 700, letterSpacing: "-.02em", color: T.fg }}>{d.name}</h3>
                  <p style={{ margin: "6px 0 0", fontSize: 15, fontWeight: 500, color: T.accent }}>{d.role}</p>
                </div>
                <div style={{ display: "grid", gap: 18 }}>
                  <p style={{ margin: 0, color: T.mute, fontSize: 15.5, lineHeight: 1.65 }}>{d.intro}</p>
                  <Panel title={d.sectionTitle}>
                    <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
                      {d.areas.map((a) => (
                        <div key={a.t} style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: T.radiusSm, padding: "12px 14px" }}>
                          <div style={{ fontSize: 14.5, fontWeight: 600, color: T.fg }}>{a.t}</div>
                          <p style={{ margin: "5px 0 0", fontSize: 13.5, lineHeight: 1.55, color: T.mute }}>{a.d}</p>
                        </div>
                      ))}
                    </div>
                  </Panel>
                  <p style={{ margin: 0, color: T.mute, fontSize: 15, lineHeight: 1.65 }}>{d.close}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership values */}
      <section style={{ padding: "90px 0 100px" }}>
        <Container>
          <div style={{ textAlign: "center" }}>
            <SectionHead align="center" eyebrow="Our philosophy" title="Leadership values" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 44 }} className="ol-ld-vals">
            {VALUES.map((v, i) => (
              <div key={v.t} className="ol-reveal ol-frame" data-delay={i * 80} style={{ textAlign: "center", padding: "34px 28px", border: `1px solid ${T.border}`, borderTop: `4px solid ${T.accent}`, borderRadius: T.radius, background: "#fff", boxShadow: T.shadowCard }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: 999, background: T.coralWash, marginBottom: 18 }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={T.accent}>{v.icon}</svg>
                </span>
                <h3 style={{ margin: 0, fontSize: 21, fontWeight: 700, letterSpacing: "-.02em", color: T.fg }}>{v.t}</h3>
                <p style={{ margin: "10px 0 0", color: T.mute, fontSize: 15.5, lineHeight: 1.6 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
      <style>{`@media(max-width:860px){.ol-ld-dirs{grid-template-columns:1fr !important;}.ol-ld-vals{grid-template-columns:1fr !important;}}@media(max-width:560px){.ol-ld-2col{grid-template-columns:1fr !important;}}`}</style>
    </main>
  );
}
