"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useReveal } from "@/hooks/useReveal";
import { T, SERVICES } from "@/lib/theme";
import { Container, SectionHead, ArrowR, Check, Btn, Rotator, CountUp, ServiceCard, GeoComposition } from "@/components/ui/Shared";
import { Testimonials, FAQ, FinalCTA } from "@/components/sections/SharedSections";

export default function Home() {
  useReveal();
  const router = useRouter();

  return (
    <main>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", borderBottom: `2px solid ${T.fg}` }}>
        <div aria-hidden className="sw-grid-faint" style={{ position: "absolute", inset: 0 }} />
        <Container style={{ position: "relative", padding: "56px 24px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.35fr .65fr", gap: 40, alignItems: "center" }} className="ol-hero-grid">
            <div>
              <div className="ol-reveal" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 14px", border: `2px solid ${T.fg}`, fontSize: 12, color: T.fg, marginBottom: 26, textTransform: "uppercase", letterSpacing: ".1em", fontWeight: 600 }}>
                <span style={{ background: T.accent, color: "#fff", padding: "2px 8px", fontWeight: 700 }}>New</span>AI automations that pay for themselves
              </div>
              <h1 className="ol-reveal" data-delay="60" style={{ fontSize: "clamp(40px,6.4vw,88px)", lineHeight: .94, letterSpacing: "-.03em", fontWeight: 900, margin: 0, textTransform: "uppercase" }}>
                We build the <Rotator words={["websites", "apps", "AI automations", "internal tools"]} color={T.accent} />
                <span style={{ display: "block" }}>that grow your business.</span>
              </h1>
              <p className="ol-reveal" data-delay="130" style={{ margin: "26px 0 0", fontSize: "clamp(16px,2vw,20px)", lineHeight: 1.55, color: T.mute, maxWidth: 560 }}>Most studios take your spec and build it. We do the more useful thing first — understand your business, find what&apos;s really slowing it down, then build, automate and scale the fix.</p>
              <div className="ol-reveal" data-delay="190" style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
                <Btn variant="coral" onClick={() => router.push("/book")}>Book a call <ArrowR /></Btn>
                <Btn variant="ghost" onClick={() => router.push("/results")}>See real results</Btn>
              </div>
              <div className="ol-reveal ol-mono" data-delay="250" style={{ marginTop: 22, fontSize: 11, color: T.faint, letterSpacing: ".1em" }}>
                No deck. No obligation. You&apos;ll leave knowing exactly what to build next.
              </div>
            </div>
            <div className="ol-reveal ol-hero-geo" data-delay="160" style={{ aspectRatio: "1", maxWidth: 360, marginLeft: "auto" }}>
              <GeoComposition />
            </div>
          </div>
          <BuildPipeline />
        </Container>
      </section>

      {/* SOUND FAMILIAR */}
      <section style={{ padding: "90px 0 0" }}>
        <Container>
          <SectionHead num="01" eyebrow="Sound familiar?" title="You don't have a tech problem. You have a logic problem." sub="Buying another tool rarely fixes things — it usually just adds a tab. The real fix starts with understanding how the work actually flows." />
          <div className="ol-reveal" data-delay="120" style={{ marginTop: 44, border: `2px solid ${T.fg}` }}>
            {[
              { p: "“We’ve got ten tools and none of them talk to each other.”", f: "One connected system, not ten disconnected tabs." },
              { p: "“My team spends half the week on copy-paste busywork.”", f: "Automations that do the repetitive work for them." },
              { p: "“I have an idea but no clue what to build first.”", f: "A sharp MVP that proves value before you over-spend." },
              { p: "“Every new customer makes operations messier.”", f: "Systems that add revenue, not friction, as you grow." }
            ].map((row, i) => (
              <div key={i} className="ol-frame ol-prob" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 20, padding: "22px 26px", borderTop: i ? `2px solid ${T.fg}` : "none" }} onMouseEnter={(e) => (e.currentTarget.style.background = T.muted)} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                <div style={{ fontSize: 16.5, color: T.mute, fontWeight: 500 }}>{row.p}</div><div style={{ color: T.accent }}><ArrowR s={18} /></div><div style={{ fontSize: 16.5, fontWeight: 600, display: "flex", gap: 10, alignItems: "center" }}><Check c={T.accent} />{row.f}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES — focused hero capabilities (#38) */}
      <section style={{ padding: "90px 0 84px" }}>
        <Container>
          <SectionHead num="02" eyebrow="Services" title="What we build." sub="One team, focused on the capabilities we lead with — custom software, AI, data, web and apps. Pick what you need, or let us figure out the right mix on a call." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 46 }} className="ol-svc-grid">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.id} s={s} i={i} onClick={() => router.push("/book")} />
            ))}
          </div>
        </Container>
      </section>

      <WhoFor router={router} />

      {/* STATS */}
      <section style={{ padding: "90px 0" }}>
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <SectionHead num="03" eyebrow="Proof, not promises" title="The kind of change clients feel." />
            <Btn variant="ghost" onClick={() => router.push("/results")} style={{ marginBottom: 6 }}>See all results <ArrowR /></Btn>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, marginTop: 44, border: `2px solid ${T.fg}` }} className="ol-stat-grid">
            {[
              { n: 70, s: "%", t: "less manual work", d: "once a weekly process became an automation." },
              { n: 3, s: "×", t: "faster to launch", d: "with a focused MVP instead of a bloated v1." },
              { n: 1, s: "", t: "place for everything", d: "one system replacing the tab-juggling." }
            ].map((c, i) => (
              <div key={i} className="ol-reveal ol-stat-cell" data-delay={i * 80} style={{ padding: "30px 26px", borderRight: i < 2 ? `2px solid ${T.fg}` : "none" }}>
                <div style={{ fontSize: 64, fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1, color: T.accent }}><CountUp to={c.n} suffix={c.s} /></div>
                <div style={{ fontSize: 16, fontWeight: 700, marginTop: 12, textTransform: "uppercase", letterSpacing: ".02em" }}>{c.t}</div>
                <p style={{ margin: "8px 0 0", color: T.mute, fontSize: 14.5, lineHeight: 1.55 }}>{c.d}</p>
              </div>
            ))}
          </div>
          <p className="ol-mono" style={{ fontSize: 11, color: T.faint, marginTop: 18, letterSpacing: ".08em" }}>* Typical of our engagements. Your numbers get scoped on the call.</p>
        </Container>
      </section>

      <Testimonials />

      {/* DIFFERENCE / COMPARISON */}
      <section style={{ padding: "90px 0" }}>
        <Container>
          <SectionHead num="04" eyebrow="The difference" title="Most studios build what you ask for. We build what you actually need." />
          <div className="ol-reveal" data-delay="100" style={{ marginTop: 44, border: `2px solid ${T.fg}` }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr" }}>
              {["", "A typical agency", "Trinetrakrti"].map((h, i) => (
                <div key={i} className="ol-mono" style={{ padding: "16px 22px", borderBottom: `2px solid ${T.fg}`, background: i === 2 ? T.accent : i === 1 ? T.muted : "#fff", fontWeight: 700, fontSize: 12, color: i === 2 ? "#fff" : T.fg, borderLeft: i ? `2px solid ${T.fg}` : "none", letterSpacing: ".08em" }}>{h || " "}</div>
              ))}
              {[
                ["Starts with", "Your spec", "Your problem"],
                ["Delivers", "Features off a list", "Systems that work together"],
                ["Bills for", "Hours logged", "A fixed outcome"],
                ["After launch", "Hands off & gone", "Iterates, scales, stays"],
                ["You end up with", "More tools to manage", "Time and clarity back"],
              ].map((row, ri) => (
                <React.Fragment key={ri}>
                  <div style={{ padding: "16px 22px", borderTop: ri ? `1px solid ${T.fg}` : "none", fontSize: 15, fontWeight: 600 }}>{row[0]}</div>
                  <div style={{ padding: "16px 22px", borderTop: ri ? `1px solid ${T.fg}` : "none", borderLeft: `2px solid ${T.fg}`, fontSize: 15, color: T.mute }}>{row[1]}</div>
                  <div style={{ padding: "16px 22px", borderTop: ri ? `1px solid ${T.fg}` : "none", borderLeft: `2px solid ${T.fg}`, fontSize: 15, fontWeight: 600, display: "flex", gap: 9, alignItems: "center" }}><Check c={T.accent} s={16} />{row[2]}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FAQ />
      <FinalCTA />
      <style>{`
        @media(max-width:980px){.ol-svc-grid{grid-template-columns:repeat(2,1fr) !important;}}
        @media(max-width:900px){.ol-hero-grid{grid-template-columns:1fr !important;}.ol-hero-geo{display:none !important;}.ol-stat-grid{grid-template-columns:1fr !important;}.ol-stat-cell{border-right:none !important;border-bottom:2px solid ${T.fg};}.ol-stat-cell:last-child{border-bottom:none !important;}}
        @media(max-width:600px){.ol-svc-grid{grid-template-columns:1fr !important;}.ol-prob{grid-template-columns:1fr !important;gap:10px !important;}}
      `}</style>
    </main>
  );
}

function BuildPipeline() {
  const stages = [{ k: "Understand", d: "We learn your business" }, { k: "Design", d: "We shape the right fix" }, { k: "Build", d: "Website · app · tool" }, { k: "Automate", d: "AI does the busywork" }, { k: "Scale", d: "It grows with you" }];
  return (
    <div className="ol-reveal" data-delay="300" style={{ marginTop: 56, marginBottom: 64 }}>
      <div className="ol-pipe" style={{ display: "flex", alignItems: "stretch", border: `2px solid ${T.fg}`, overflowX: "auto" }}>
        {stages.map((s, i) => (
          <div key={s.k} style={{ flex: "1 1 0", minWidth: 150, padding: "20px 18px", borderLeft: i ? `2px solid ${T.fg}` : "none" }}>
            <div className="ol-mono" style={{ fontSize: 11, color: T.accent, marginBottom: 10, fontWeight: 700 }}>0{i + 1}</div>
            <div style={{ fontWeight: 700, fontSize: 15, textTransform: "uppercase", letterSpacing: ".02em" }}>{s.k}</div>
            <div style={{ color: T.mute, fontSize: 13, marginTop: 4 }}>{s.d}</div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:760px){.ol-pipe{justify-content:flex-start;}}`}</style>
    </div>
  );
}

function WhoFor({ router }: { router: any }) {
  const segs = [
    { id: "founder", label: "Startup founders", head: "Launch the right thing — fast.", d: "You've got the idea and the urgency. We scope a sharp MVP, build it in weeks, and put it in front of real users before you burn the runway.", points: ["Validate before you over-build", "A working MVP, not a slide deck", "A technical partner who gets startups"] },
    { id: "smb", label: "Small & medium businesses", head: "Stop running on duct tape and spreadsheets.", d: "Your team is busy doing work software should be doing. We map the chaos, automate the busywork, and give you one system to run on.", points: ["Automate the repetitive work", "One connected system, not ten tools", "Visibility into what's actually happening"] },
    { id: "growth", label: "Growth-stage companies", head: "Grow without your operations breaking.", d: "Scaling is exposing the cracks. We re-architect the systems and automations so each new customer adds revenue, not friction.", points: ["Systems that scale calmly", "Internal tools your team will love", "Performance you can measure"] },
  ];
  const [active, setActive] = useState("founder");
  const s = segs.find((x) => x.id === active)!;
  return (
    <section>
      <Container>
        <div className="sw-diagonal" style={{ border: `2px solid ${T.fg}`, padding: "44px 40px" }}>
          <SectionHead num="05" eyebrow="Who it's for" title="Built for where you are right now." align="center" />
          <div style={{ display: "flex", gap: 0, justifyContent: "center", flexWrap: "wrap", marginTop: 30, border: `2px solid ${T.fg}`, width: "fit-content", margin: "30px auto 0" }}>
            {segs.map((seg, i) => {
              const a = active === seg.id;
              return <button key={seg.id} onClick={() => setActive(seg.id)} className="ol-btn" style={{ padding: "12px 20px", fontSize: 12.5, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", border: "none", borderLeft: i ? `2px solid ${T.fg}` : "none", background: a ? T.fg : "#fff", color: a ? "#fff" : T.fg }}>{seg.label}</button>;
            })}
          </div>
          <div key={active} style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 32, alignItems: "center", animation: "ol-fade .3s ease", background: "#fff", border: `2px solid ${T.fg}`, padding: 28 }} className="ol-who-grid">
            <div>
              <h3 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 800, letterSpacing: "-.02em", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>{s.head}</h3>
              <p style={{ color: T.mute, fontSize: 17, lineHeight: 1.6, marginTop: 14 }}>{s.d}</p>
              <Btn variant="coral" onClick={() => router.push("/book")} style={{ marginTop: 20 }}>Book a call <ArrowR /></Btn>
            </div>
            <div style={{ display: "grid", gap: 0, border: `2px solid ${T.fg}` }}>{s.points.map((p, pi) => <div key={p} style={{ display: "flex", gap: 12, alignItems: "center", padding: "16px 18px", fontSize: 15.5, fontWeight: 600, borderTop: pi ? `2px solid ${T.fg}` : "none" }}><Check c={T.accent} />{p}</div>)}</div>
          </div>
        </div>
      </Container>
      <style>{`@media(max-width:820px){.ol-who-grid{grid-template-columns:1fr !important;gap:24px !important;}}`}</style>
    </section>
  );
}
