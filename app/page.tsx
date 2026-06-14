"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useReveal } from "@/hooks/useReveal";
import { T, BUILDS } from "@/lib/theme";
import { Container, SectionHead, Eyebrow, ArrowR, Check, Btn, Rotator, CountUp, BuildCard } from "@/components/ui/Shared";
import { Testimonials, FAQ, FinalCTA } from "@/components/sections/SharedSections";

export default function Home() {
  useReveal();
  const router = useRouter();

  return (
    <main>
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${T.line} 1px,transparent 1px),linear-gradient(90deg,${T.line} 1px,transparent 1px)`, backgroundSize: "56px 56px", opacity: .6, maskImage: "radial-gradient(ellipse 70% 60% at 50% 25%,#000 30%,transparent 78%)", WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 25%,#000 30%,transparent 78%)" }} />
        <Container style={{ position: "relative", padding: "52px 24px 64px", textAlign: "center" }}>
          <div className="ol-reveal" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "7px 14px 7px 8px", border: `1px solid ${T.line2}`, borderRadius: 999, background: T.panel, fontSize: 13, color: T.mute, marginBottom: 26 }}>
            <span className="ol-mono" style={{ background: T.coralWash, color: T.coral, borderRadius: 999, padding: "2px 9px", fontWeight: 600, fontSize: 12 }}>NEW</span>AI automations that pay for themselves <ArrowR s={13} />
          </div>
          <h1 className="ol-reveal" data-delay="60" style={{ fontSize: "clamp(38px,6.6vw,76px)", lineHeight: 1.02, letterSpacing: "-.04em", fontWeight: 700, margin: "0 auto", maxWidth: 1000 }}>
            We build the <Rotator words={["websites", "apps", "AI automations", "internal tools"]} color={T.coral} />
            <span style={{ display: "block", marginTop: 4 }}>that grow your business.</span>
          </h1>
          <p className="ol-reveal" data-delay="130" style={{ margin: "26px auto 0", fontSize: "clamp(17px,2.2vw,21px)", lineHeight: 1.6, color: T.ink70, maxWidth: 660 }}>Most studios take your spec and build it. We do the more useful thing first — understand your business, find what's really slowing it down, then build, automate and scale the fix.</p>
          <div className="ol-reveal" data-delay="190" style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap", justifyContent: "center" }}>
            <Btn variant="coral" onClick={() => router.push("/book")}>Book a free 30-min call <ArrowR /></Btn>
            <Btn variant="ghost" onClick={() => router.push("/results")}>See real results</Btn>
          </div>
          <div className="ol-reveal ol-mono" data-delay="250" style={{ marginTop: 20, fontSize: 13, color: T.faint }}>
            No deck. No obligation. You'll leave knowing exactly what to build next.
          </div>
          <BuildPipeline />
        </Container>
      </section>

      {/* NEW: Project Logos Scroller */}
      <ProjectLogos />



      <section style={{ padding: "90px 0 0" }}>
        <Container>
          <SectionHead eyebrow="Sound familiar?" title="You don't have a tech problem. You have a logic problem." sub="Buying another tool rarely fixes things — it usually just adds a tab. The real fix starts with understanding how the work actually flows." />
          <div className="ol-reveal" data-delay="120" style={{ marginTop: 44, border: `1px solid ${T.line2}`, borderRadius: 20, overflow: "hidden", background: T.panel }}>
            {[ 
              { p: "“We’ve got ten tools and none of them talk to each other.”", f: "One connected system, not ten disconnected tabs." }, 
              { p: "“My team spends half the week on copy-paste busywork.”", f: "Automations that do the repetitive work for them." }, 
              { p: "“I have an idea but no clue what to build first.”", f: "A sharp MVP that proves value before you over-spend." },
              { p: "“Every new customer makes operations messier.”", f: "Systems that add revenue, not friction, as you grow." }
            ].map((row, i) => (
              <div key={i} className="ol-frame" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 20, padding: "22px 26px", borderTop: i ? `1px solid ${T.line}` : "none" }} onMouseEnter={(e) => (e.currentTarget.style.background = T.wash)} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                <div style={{ fontSize: 16.5, color: T.ink70, fontWeight: 500 }}>{row.p}</div><div style={{ color: T.coral }}><ArrowR s={18} /></div><div style={{ fontSize: 16.5, fontWeight: 600, display: "flex", gap: 10, alignItems: "center" }}><Check />{row.f}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: "90px 0 84px" }}>
        <Container>
          <SectionHead eyebrow="What we build" title="Four things, built as one system." sub="Not four vendors stitched together. One team building the website, the app, the automations and the tools so they actually work as a whole." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16, marginTop: 46 }} className="ol-build-grid">
            {BUILDS.map((b, i) => <BuildCard key={b.t} b={b} i={i} onClick={() => router.push(b.id === "ai" ? "/ai" : "/work")} />)}
          </div>
        </Container>
      </section>

      <WhoFor router={router} />

      <section style={{ padding: "90px 0" }}>
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <SectionHead eyebrow="Proof, not promises" title="The kind of change clients feel." />
            <Btn variant="ghost" onClick={() => router.push("/results")} style={{ marginBottom: 6 }}>See all results <ArrowR /></Btn>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 44 }} className="ol-stat-grid">
            {[ 
              { n: 70, s: "%", t: "less manual work", d: "once a weekly process became an automation." }, 
              { n: 3, s: "×", t: "faster to launch", d: "with a focused MVP instead of a bloated v1." }, 
              { n: 1, s: "", t: "place for everything", d: "one system replacing the tab-juggling." } 
            ].map((c, i) => (
              <div key={i} className="ol-frame ol-reveal" data-delay={i * 80} style={{ background: T.panel, border: `1px solid ${T.line2}`, borderRadius: 18, padding: "30px 26px" }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = T.coral)} onMouseLeave={(e) => (e.currentTarget.style.borderColor = T.line2)}>
                <div style={{ fontSize: 54, fontWeight: 700, letterSpacing: "-.04em", lineHeight: 1, color: T.blue }}><CountUp to={c.n} suffix={c.s} /></div>
                <div style={{ fontSize: 17, fontWeight: 600, marginTop: 12 }}>{c.t}</div>
                <p style={{ margin: "8px 0 0", color: T.mute, fontSize: 14.5, lineHeight: 1.55 }}>{c.d}</p>
              </div>
            ))}
          </div>
          <p className="ol-mono" style={{ fontSize: 12, color: T.faint, marginTop: 18 }}>* Typical of our engagements. Your numbers get scoped on the call.</p>
        </Container>
      </section>

      <Testimonials />

      <section style={{ padding: "90px 0" }}>
        <Container>
          <div style={{ maxWidth: 720 }}>
            <Eyebrow>The difference</Eyebrow>
            <h2 style={{ fontSize: "clamp(28px,4.4vw,46px)", lineHeight: 1.1, fontWeight: 700, letterSpacing: "-.03em", margin: "18px 0 0" }}>Most studios build what you ask for. We build what you actually need.</h2>
          </div>
          <div className="ol-reveal" data-delay="100" style={{ marginTop: 44, border: `1px solid ${T.line2}`, borderRadius: 20, overflow: "hidden", background: T.panel }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr" }}>
              {["", "A typical agency", "Only Logic"].map((h, i) => (
                <div key={i} style={{ padding: "18px 22px", borderBottom: `1px solid ${T.line2}`, background: i === 2 ? T.blueWash : "transparent", fontWeight: 600, fontSize: 14, color: i === 2 ? T.blue : T.mute, borderLeft: i ? `1px solid ${T.line}` : "none" }} className="ol-mono">{h}</div>
              ))}
              {[
                ["Starts with", "Your spec", "Your problem"],
                ["Delivers", "Features off a list", "Systems that work together"],
                ["Bills for", "Hours logged", "A fixed outcome"],
                ["After launch", "Hands off & gone", "Iterates, scales, stays"],
                ["You end up with", "More tools to manage", "Time and clarity back"],
              ].map((row, ri) => (
                <React.Fragment key={ri}>
                  <div style={{ padding: "16px 22px", borderTop: `1px solid ${T.line}`, fontSize: 15, fontWeight: 500 }}>{row[0]}</div>
                  <div style={{ padding: "16px 22px", borderTop: `1px solid ${T.line}`, borderLeft: `1px solid ${T.line}`, fontSize: 15, color: T.mute }}>{row[1]}</div>
                  <div style={{ padding: "16px 22px", borderTop: `1px solid ${T.line}`, borderLeft: `1px solid ${T.line}`, fontSize: 15, fontWeight: 600, background: T.blueWash, display: "flex", gap: 9, alignItems: "center" }}><Check c={T.blue} s={16} />{row[2]}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FAQ />
      <FinalCTA />
      <style>{`@media(max-width:900px){.ol-build-grid, .ol-stat-grid{grid-template-columns:1fr !important;}}`}</style>
    </main>
  );
}

function ProjectLogos() {
  // Added a 'link' property to each object
  const projects = [
    { name: "Campus Verse", logo: "/campusverse.svg", link: "https://campusverse.app" },
    { name: "OAAS", logo: "/oaas.png", link: "https://oaas.rajchavin.com" },
    { name: "Horticogen", logo: "/horticogen.png", link: "https://horticogen.com" },
    { name: "trinetrakriti", logo: "/tot.png", link: "https://roopantara.com" },
    { name: "rajchavin", logo: "/rajchavin.png", link: "https://rajchavin.com" }
  ];
  
  // Quadruple the array so it seamlessly loops on ultra-wide screens
  const loop = [...projects, ...projects, ...projects, ...projects];

  return (
    <section className="ol-reveal" style={{ borderBottom: `1px solid ${T.line}`, background: T.panel, padding: "34px 0", overflow: "hidden" }}>
      <Container>
        <div className="ol-mono" style={{ fontSize: 12, color: T.faint, textAlign: "center", marginBottom: 36, letterSpacing: ".1em", textTransform: "uppercase" }}>
          Systems we've engineered
        </div>
      </Container>
      
      <div style={{ display: "flex", width: "max-content", animation: "ol-marq 45s linear infinite" }}>
        {loop.map((p, i) => (
          <a 
            key={i} 
            href={p.link}
            style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              padding: "0 46px", 
             // filter: "grayscale(100%)", 
             // opacity: 0.5, 
              transition: "all .3s cubic-bezier(.2,.7,.2,1)",
              textDecoration: "none"
            }} 
            onMouseEnter={(e) => { 
              e.currentTarget.style.filter = "grayscale(0%)"; 
              e.currentTarget.style.opacity = "1"; 
              e.currentTarget.style.transform = "scale(1.05)";
            }} 
            
          >
            {/* Logo Container - floating without borders */}
            <div style={{ height: 44, width: 140, display: "grid", placeItems: "center" }}>
              {p.logo ? (
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                  onError={(e) => { 
                    // Fallback to text if image is missing
                    e.currentTarget.style.display = 'none'; 
                    e.currentTarget.parentElement!.innerHTML = `<span class="ol-mono" style="font-size: 18px; font-weight: 700; color: ${T.mute}">${p.name}</span>`; 
                  }} 
                />
              ) : (
                <span className="ol-mono" style={{ fontSize: 18, fontWeight: 700, color: T.mute }}>{p.name}</span>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function BuildPipeline() {
  const stages = [ { k: "Understand", d: "We learn your business" }, { k: "Design", d: "We shape the right fix" }, { k: "Build", d: "Website · app · tool" }, { k: "Automate", d: "AI does the busywork" }, { k: "Scale", d: "It grows with you" } ];
  return (
    <div className="ol-reveal" data-delay="300" style={{ marginTop: 54, maxWidth: 1000, marginLeft: "auto", marginRight: "auto" }}>
      <div className="ol-pipe" style={{ display: "flex", alignItems: "stretch", background: T.panel, border: `1px solid ${T.line2}`, borderRadius: 18, padding: 10, overflowX: "auto" }}>
        {stages.map((s, i) => (
          <React.Fragment key={s.k}>
            <div style={{ flex: "1 1 0", minWidth: 130, padding: "16px 16px", textAlign: "left" }}>
              <div className="ol-mono" style={{ fontSize: 11, color: T.coral, marginBottom: 8 }}>0{i + 1}</div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{s.k}</div>
              <div style={{ color: T.faint, fontSize: 13, marginTop: 4 }}>{s.d}</div>
            </div>
            {i < stages.length - 1 && <div aria-hidden style={{ display: "flex", alignItems: "center", color: T.line2 }}><ArrowR s={20} /></div>}
          </React.Fragment>
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
        <div style={{ background: T.wash, border: `1px solid ${T.line2}`, borderRadius: 24, padding: "44px 40px" }}>
          <SectionHead eyebrow="Who it's for" title="Built for where you are right now." align="center" />
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 30 }}>
            {segs.map((seg) => {
              const a = active === seg.id;
              return <button key={seg.id} onClick={() => setActive(seg.id)} className="ol-btn" style={{ padding: "11px 20px", borderRadius: 999, fontSize: 14.5, fontWeight: 600, border: `1px solid ${a ? T.ink : T.line2}`, background: a ? T.ink : T.panel, color: a ? "#fff" : T.ink70 }}>{seg.label}</button>;
            })}
          </div>
          <div key={active} style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 32, alignItems: "center", animation: "ol-fade .4s ease" }} className="ol-who-grid">
            <div>
              <h3 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 700, letterSpacing: "-.02em", margin: 0 }}>{s.head}</h3>
              <p style={{ color: T.mute, fontSize: 17, lineHeight: 1.6, marginTop: 14 }}>{s.d}</p>
              <Btn variant="primary" onClick={() => router.push("/book")} style={{ marginTop: 20 }}>Book a free call <ArrowR /></Btn>
            </div>
            <div style={{ display: "grid", gap: 10 }}>{s.points.map((p) => <div key={p} style={{ display: "flex", gap: 12, alignItems: "center", background: T.panel, border: `1px solid ${T.line}`, borderRadius: 14, padding: "16px 18px", fontSize: 15.5, fontWeight: 500 }}><Check />{p}</div>)}</div>
          </div>
        </div>
      </Container>
      <style>{`@media(max-width:820px){.ol-who-grid{grid-template-columns:1fr !important;gap:24px !important;}}`}</style>
    </section>
  );
}