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
      {/* HERO — Stripe-style angled gradient canvas */}
      <section className="st-hero" style={{ position: "relative", paddingBottom: 0 }}>
        <div aria-hidden className="st-grid-overlay" style={{ position: "absolute", inset: 0, zIndex: 1 }} />
        {/* flowing silk-ribbon gradient — absolute overlay on the right, definite size */}
        <div aria-hidden className="ol-hero-ribbon" style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "58%", zIndex: 1, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-6%", left: "8%", right: "-12%", bottom: "-18%" }}>
            <GeoComposition />
          </div>
        </div>
        <Container style={{ position: "relative", padding: "72px 24px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 48, alignItems: "center" }} className="ol-hero-grid">
            <div>
              <div className="ol-reveal" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 6px 6px 14px", borderRadius: 999, background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.22)", fontSize: 13.5, color: "#fff", marginBottom: 26, fontWeight: 500, backdropFilter: "blur(6px)" }}>
                AI automations that pay for themselves
                <span style={{ background: "#fff", color: T.accent, padding: "3px 10px", borderRadius: 999, fontWeight: 700, fontSize: 12 }}>New</span>
              </div>
              <h1 className="ol-reveal" data-delay="60" style={{ fontSize: "clamp(40px,5.6vw,76px)", lineHeight: 1.02, letterSpacing: "-.035em", fontWeight: 700, margin: 0, color: "#fff" }}>
                We build the <Rotator words={["websites", "apps", "AI automations", "internal tools"]} color="#FFD7C2" />
                <span style={{ display: "block" }}>that grow your business.</span>
              </h1>
              <p className="ol-reveal" data-delay="130" style={{ margin: "26px 0 0", fontSize: "clamp(17px,2vw,21px)", lineHeight: 1.55, color: "rgba(255,255,255,.86)", maxWidth: 560 }}>Most studios take your spec and build it. We do the more useful thing first — understand your business, find what&apos;s really slowing it down, then build, automate and scale the fix.</p>
              <div className="ol-reveal" data-delay="190" style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}>
                <Btn variant="coral" onClick={() => router.push("/book")} style={{ background: "#fff", color: T.accent, fontSize: 16, padding: "14px 26px" }}>Book a call <ArrowR /></Btn>
                <Btn variant="light" onClick={() => router.push("/results")} style={{ fontSize: 16, padding: "14px 26px" }}>See real results</Btn>
              </div>
              <div className="ol-reveal" data-delay="250" style={{ marginTop: 22, fontSize: 14, color: "rgba(255,255,255,.66)" }}>
                No deck. No obligation. You&apos;ll leave knowing exactly what to build next.
              </div>
            </div>
            <div className="ol-hero-geo"><HeroPanel /></div>
          </div>
          <BuildPipeline />
        </Container>
      </section>

      {/* SOUND FAMILIAR */}
      <section style={{ padding: "100px 0 0" }}>
        <Container>
          <SectionHead num="01" eyebrow="Sound familiar?" title="You don't have a tech problem. You have a logic problem." sub="Buying another tool rarely fixes things — it usually just adds a tab. The real fix starts with understanding how the work actually flows." />
          <div className="ol-reveal" data-delay="120" style={{ marginTop: 44, display: "grid", gap: 14 }}>
            {[
              { p: "“We've got ten tools and none of them talk to each other.”", f: "One connected system, not ten disconnected tabs." },
              { p: "“My team spends half the week on copy-paste busywork.”", f: "Automations that do the repetitive work for them." },
              { p: "“I have an idea but no clue what to build first.”", f: "A sharp MVP that proves value before you over-spend." },
              { p: "“Every new customer makes operations messier.”", f: "Systems that add revenue, not friction, as you grow." }
            ].map((row, i) => (
              <div key={i} className="ol-frame ol-prob" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 20, padding: "22px 26px", background: "#fff", border: `1px solid ${T.border}`, borderRadius: T.radius, boxShadow: T.shadowCard }}>
                <div style={{ fontSize: 16.5, color: T.mute }}>{row.p}</div><div style={{ color: T.accent }}><ArrowR s={18} /></div><div style={{ fontSize: 16.5, fontWeight: 600, color: T.fg, display: "flex", gap: 10, alignItems: "center" }}><Check c={T.accent} />{row.f}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "100px 0 96px" }}>
        <Container>
          <SectionHead num="02" eyebrow="Services" title="What we build." sub="One team, focused on the capabilities we lead with — custom software, AI, data, web and apps. Pick what you need, or let us figure out the right mix on a call." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 46 }} className="ol-svc-grid">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.id} s={s} i={i} onClick={() => router.push("/book")} />
            ))}
          </div>
        </Container>
      </section>

      <WhoFor router={router} />

      {/* STATS */}
      <section style={{ padding: "100px 0" }}>
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <SectionHead num="03" eyebrow="Proof, not promises" title="The kind of change clients feel." />
            <Btn variant="ghost" onClick={() => router.push("/results")} style={{ marginBottom: 6 }}>See all results <ArrowR /></Btn>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 44 }} className="ol-stat-grid">
            {[
              { n: 70, s: "%", t: "less manual work", d: "once a weekly process became an automation." },
              { n: 3, s: "×", t: "faster to launch", d: "with a focused MVP instead of a bloated v1." },
              { n: 1, s: "", t: "place for everything", d: "one system replacing the tab-juggling." }
            ].map((c, i) => (
              <div key={i} className="ol-reveal ol-stat-cell" data-delay={i * 80} style={{ padding: "32px 28px", background: "#fff", border: `1px solid ${T.border}`, borderRadius: T.radius, boxShadow: T.shadowCard }}>
                <div style={{ fontSize: 60, fontWeight: 700, letterSpacing: "-.04em", lineHeight: 1, color: T.accent }}><CountUp to={c.n} suffix={c.s} /></div>
                <div style={{ fontSize: 16, fontWeight: 600, marginTop: 14, color: T.fg }}>{c.t}</div>
                <p style={{ margin: "8px 0 0", color: T.mute, fontSize: 15, lineHeight: 1.55 }}>{c.d}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: T.faint, marginTop: 18 }}>* Typical of our engagements. Your numbers get scoped on the call.</p>
        </Container>
      </section>

      <Testimonials />

      {/* DIFFERENCE / COMPARISON */}
      <section style={{ padding: "100px 0" }}>
        <Container>
          <SectionHead num="04" eyebrow="The difference" title="Most studios build what you ask for. We build what you actually need." />
          <div className="ol-reveal" data-delay="100" style={{ marginTop: 44, border: `1px solid ${T.border}`, borderRadius: T.radius, overflow: "hidden", boxShadow: T.shadowFloat }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr" }}>
              {["", "A typical agency", "Trinetrakrti"].map((h, i) => (
                <div key={i} style={{ padding: "18px 24px", borderBottom: `1px solid ${T.border}`, background: i === 2 ? T.accent : i === 1 ? T.muted : "#fff", fontWeight: 600, fontSize: 14, color: i === 2 ? "#fff" : T.fg, borderLeft: i ? `1px solid ${i === 2 ? "rgba(255,255,255,.18)" : T.border}` : "none" }}>{h || " "}</div>
              ))}
              {[
                ["Starts with", "Your spec", "Your problem"],
                ["Delivers", "Features off a list", "Systems that work together"],
                ["Bills for", "Hours logged", "A fixed outcome"],
                ["After launch", "Hands off & gone", "Iterates, scales, stays"],
                ["You end up with", "More tools to manage", "Time and clarity back"],
              ].map((row, ri) => (
                <React.Fragment key={ri}>
                  <div style={{ padding: "18px 24px", borderTop: ri ? `1px solid ${T.border}` : "none", fontSize: 15.5, fontWeight: 600, color: T.fg }}>{row[0]}</div>
                  <div style={{ padding: "18px 24px", borderTop: ri ? `1px solid ${T.border}` : "none", borderLeft: `1px solid ${T.border}`, fontSize: 15.5, color: T.mute }}>{row[1]}</div>
                  <div style={{ padding: "18px 24px", borderTop: ri ? `1px solid ${T.border}` : "none", borderLeft: `1px solid ${T.border}`, fontSize: 15.5, fontWeight: 600, color: T.fg, display: "flex", gap: 9, alignItems: "center" }}><Check c={T.accent} s={18} />{row[2]}</div>
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
        @media(max-width:900px){.ol-hero-grid{grid-template-columns:1fr !important;}.ol-hero-geo{display:none !important;}.ol-hero-ribbon{width:78% !important;opacity:.42 !important;}.ol-stat-grid{grid-template-columns:1fr !important;}}
        @media(max-width:600px){.ol-svc-grid{grid-template-columns:1fr !important;}.ol-prob{grid-template-columns:1fr !important;gap:10px !important;}}
      `}</style>
    </main>
  );
}

function HeroPanel() {
  const bars = [42, 58, 49, 70, 64, 88, 96];
  const rows = [
    { k: "New lead captured", t: "0.2s" },
    { k: "Enriched & scored", t: "0.4s" },
    { k: "Synced to CRM", t: "0.6s" },
  ];
  return (
    <div className="ol-reveal ol-hero-panel" data-delay="240" style={{ position: "relative", height: "100%", minHeight: 360 }}>
      {/* main glass dashboard card */}
      <div style={{ position: "relative", animation: "st-float 6s ease-in-out infinite", background: "rgba(255,255,255,.82)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", border: "1px solid rgba(255,255,255,.7)", borderRadius: 18, boxShadow: "0 30px 60px rgba(20,24,40,.34)", padding: 22 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <span style={{ width: 9, height: 9, borderRadius: 999, background: "#2EC48C", animation: "st-pulse 2s infinite" }} />
            <span className="ol-mono" style={{ fontSize: 11, color: T.fg, fontWeight: 700 }}>Automation · Live</span>
          </div>
          <span style={{ fontSize: 11.5, color: T.faint, fontWeight: 600 }}>this week</span>
        </div>
        <div style={{ marginTop: 16, display: "flex", alignItems: "flex-end", gap: 8 }}>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-.04em", lineHeight: 1, color: T.fg }}>
            <CountUp to={1240} />
          </div>
          <div style={{ marginBottom: 6, fontSize: 13, fontWeight: 700, color: "#2EC48C", display: "flex", alignItems: "center", gap: 3 }}>▲ 32%</div>
        </div>
        <div style={{ fontSize: 12.5, color: T.mute, marginTop: 4 }}>tasks handled without a human</div>
        {/* bar chart */}
        <div style={{ marginTop: 18, display: "flex", alignItems: "flex-end", gap: 7, height: 70 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 5, transformOrigin: "bottom", background: i === bars.length - 1 ? T.accent : "rgba(229,50,43,.22)", animation: `st-bar .9s cubic-bezier(.16,.84,.44,1) ${i * 0.08}s both` }} />
          ))}
        </div>
      </div>
      {/* floating workflow card */}
      <div style={{ position: "absolute", left: -28, bottom: -34, width: 250, animation: "st-float-b 7s ease-in-out infinite", background: "rgba(255,255,255,.92)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", border: "1px solid rgba(255,255,255,.8)", borderRadius: 16, boxShadow: "0 24px 50px rgba(20,24,40,.3)", padding: "16px 18px" }}>
        <div className="ol-mono" style={{ fontSize: 10.5, color: T.accent, fontWeight: 700, marginBottom: 12 }}>Workflow run</div>
        <div style={{ display: "grid", gap: 11 }}>
          {rows.map((r) => (
            <div key={r.k} style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <Check c="#2EC48C" s={16} />
              <span style={{ fontSize: 13, fontWeight: 600, color: T.fg, flex: 1 }}>{r.k}</span>
              <span style={{ fontSize: 11.5, color: T.faint, fontWeight: 600 }}>{r.t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BuildPipeline() {
  const stages = [{ k: "Understand", d: "We learn your business" }, { k: "Design", d: "We shape the right fix" }, { k: "Build", d: "Website · app · tool" }, { k: "Automate", d: "AI does the busywork" }, { k: "Scale", d: "It grows with you" }];
  return (
    <div className="ol-reveal" data-delay="300" style={{ marginTop: 56, marginBottom: 56 }}>
      <div className="ol-pipe" style={{ display: "flex", alignItems: "stretch", background: "#fff", border: `1px solid ${T.border}`, borderRadius: T.radius, overflowX: "auto", boxShadow: T.shadowFloat }}>
        {stages.map((s, i) => (
          <div key={s.k} style={{ flex: "1 1 0", minWidth: 150, padding: "22px 20px", borderLeft: i ? `1px solid ${T.border}` : "none" }}>
            <div className="ol-mono" style={{ fontSize: 11.5, color: T.accent, marginBottom: 10, fontWeight: 700 }}>0{i + 1}</div>
            <div style={{ fontWeight: 600, fontSize: 15.5, color: T.fg }}>{s.k}</div>
            <div style={{ color: T.mute, fontSize: 13.5, marginTop: 4 }}>{s.d}</div>
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
    <section style={{ padding: "0 0" }}>
      <Container>
        <div style={{ background: T.muted, borderRadius: 24, padding: "56px 48px", border: `1px solid ${T.borderSoft}` }} className="ol-who-wrap">
          <SectionHead num="05" eyebrow="Who it's for" title="Built for where you are right now." align="center" />
          <div style={{ display: "inline-flex", gap: 4, justifyContent: "center", flexWrap: "wrap", marginTop: 30, background: "#fff", borderRadius: 999, padding: 5, border: `1px solid ${T.border}`, boxShadow: T.shadowCard, margin: "30px auto 0" }}>
            {segs.map((seg) => {
              const a = active === seg.id;
              return <button key={seg.id} onClick={() => setActive(seg.id)} className="ol-btn" style={{ padding: "10px 18px", fontSize: 13.5, fontWeight: 600, borderRadius: 999, border: "none", background: a ? T.fg : "transparent", color: a ? "#fff" : T.mute }}>{seg.label}</button>;
            })}
          </div>
          <div key={active} style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 36, alignItems: "center", animation: "ol-fade .3s ease", background: "#fff", borderRadius: T.radius, border: `1px solid ${T.border}`, padding: 34, boxShadow: T.shadowFloat }} className="ol-who-grid">
            <div>
              <h3 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 700, letterSpacing: "-.025em", lineHeight: 1.12, margin: 0, color: T.fg }}>{s.head}</h3>
              <p style={{ color: T.mute, fontSize: 17, lineHeight: 1.6, marginTop: 14 }}>{s.d}</p>
              <Btn variant="coral" onClick={() => router.push("/book")} style={{ marginTop: 22 }}>Book a call <ArrowR /></Btn>
            </div>
            <div style={{ display: "grid", gap: 12 }}>{s.points.map((p) => <div key={p} style={{ display: "flex", gap: 12, alignItems: "center", padding: "16px 18px", fontSize: 15.5, fontWeight: 600, color: T.fg, background: T.muted, borderRadius: 12 }}><Check c={T.accent} />{p}</div>)}</div>
          </div>
        </div>
      </Container>
      <style>{`@media(max-width:820px){.ol-who-grid{grid-template-columns:1fr !important;gap:24px !important;}.ol-who-wrap{padding:40px 24px !important;}}`}</style>
    </section>
  );
}
