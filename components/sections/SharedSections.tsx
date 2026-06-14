"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { T } from "@/lib/theme";
import { Container, SectionHead, Eyebrow, Btn, ArrowR } from "@/components/ui/Shared";

export const PageHero: React.FC<{ eyebrow: string; title: React.ReactNode; sub?: React.ReactNode; showCta?: boolean }> = ({ eyebrow, title, sub, showCta = true }) => {
  const router = useRouter();
  return (
    <section style={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${T.line}` }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${T.line} 1px,transparent 1px),linear-gradient(90deg,${T.line} 1px,transparent 1px)`, backgroundSize: "56px 56px", opacity: .5, maskImage: "radial-gradient(ellipse 60% 70% at 30% 20%,#000,transparent 72%)", WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 30% 20%,#000,transparent 72%)" }} />
      <Container style={{ position: "relative", padding: "56px 24px 52px" }}>
        <div className="ol-reveal"><Eyebrow>{eyebrow}</Eyebrow></div>
        <h1 className="ol-reveal" data-delay="70" style={{ fontSize: "clamp(32px,5.4vw,58px)", lineHeight: 1.05, letterSpacing: "-.03em", fontWeight: 700, margin: "18px 0 0", maxWidth: 820 }}>{title}</h1>
        {sub && <p className="ol-reveal" data-delay="130" style={{ marginTop: 18, fontSize: 18, color: T.mute, maxWidth: 600, lineHeight: 1.6 }}>{sub}</p>}
        {showCta && <div className="ol-reveal" data-delay="190" style={{ marginTop: 28 }}><Btn variant="coral" onClick={() => router.push("/book")}>Book a free call <ArrowR /></Btn></div>}
      </Container>
    </section>
  );
};

export function FinalCTA() {
  const router = useRouter();
  return (
    <section style={{ padding: "0 0 100px" }}>
      <Container>
        <div className="ol-reveal" style={{ position: "relative", overflow: "hidden", borderRadius: 26, background: T.ink, color: "#fff", padding: "62px 48px", marginTop: "80px" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle, rgba(255,255,255,.07) 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
          <div aria-hidden style={{ position: "absolute", top: -80, right: -40, width: 360, height: 360, borderRadius: "50%", background: `radial-gradient(circle,${T.coral}55,transparent 65%)`, filter: "blur(20px)" }} />
          <div style={{ position: "relative", maxWidth: 640 }}>
            <Eyebrow color={T.coral}>One conversation away</Eyebrow>
            <h2 style={{ fontSize: "clamp(30px,4.4vw,48px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-.03em", margin: "16px 0 14px" }}>Tell us the problem. We'll tell you what to build.</h2>
            <p style={{ color: "#B8BCC8", fontSize: 18, lineHeight: 1.6, margin: 0, maxWidth: 520 }}>Thirty minutes, free, no deck needed. You'll leave knowing the fix and roughly what it takes — whether or not you build it with us.</p>
            <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Btn variant="coral" onClick={() => router.push("/book")}>Book a free call <ArrowR /></Btn>
              <Btn variant="ghost" onClick={() => router.push("/pricing")} style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,.28)" }}>See pricing</Btn>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FAQ() {
  const router = useRouter();
  const qs = [
    { q: "I'm not even sure what I need built yet. Can you still help?", a: "That's the best place to start. The free call exists to figure out what's worth building — sometimes it's a website, sometimes an automation, sometimes a process fix and no software at all. You'll leave with a clear answer." },
    { q: "Do you build just one thing, or the whole stack?", a: "The whole stack. Website, app, AI automations and internal tools — built by one team so they actually talk to each other instead of becoming four disconnected projects." },
    { q: "How much does it cost?", a: "The first call is free. After it, you get a fixed-scope quote tied to a specific outcome — no open-ended hourly surprises. The Pricing page has starting points." },
    { q: "How fast can we see something real?", a: "We build MVP-first, so most projects put a working version in front of real users in weeks, not quarters. We'd rather ship small and improve than vanish for six months." },
    ];
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: "90px 0" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 48, alignItems: "start" }} className="ol-faq-grid">
          <div style={{ position: "sticky", top: 96 }}>
            <SectionHead eyebrow="Before you book" title="Good questions, straight answers." />
            <div className="ol-reveal" data-delay="160" style={{ marginTop: 26 }}><Btn variant="primary" onClick={() => router.push("/book")}>Ask us live — book a call <ArrowR /></Btn></div>
          </div>
          <div className="ol-reveal" data-delay="100">
            {qs.map((it, i) => {
              const o = open === i;
              return <div key={i} style={{ borderBottom: `1px solid ${T.line}` }}>
                <button onClick={() => setOpen(o ? -1 : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18, background: "none", border: "none", padding: "22px 2px", textAlign: "left", fontSize: 17, fontWeight: 600, color: T.ink, fontFamily: "'Poppins',sans-serif" }}>
                  {it.q}
                  <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", border: `1.5px solid ${o ? T.coral : T.line2}`, display: "grid", placeItems: "center", background: o ? T.coral : "transparent", transition: "all .3s" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ transform: o ? "rotate(45deg)" : "none", transition: "transform .3s" }}><path d="M12 5v14M5 12h14" stroke={o ? "#fff" : T.ink} strokeWidth="2.4" strokeLinecap="round" /></svg>
                  </span>
                </button>
                <div style={{ overflow: "hidden", maxHeight: o ? 260 : 0, transition: "max-height .4s cubic-bezier(.2,.7,.2,1)" }}><p style={{ margin: "0 2px 22px", color: T.mute, fontSize: 16, lineHeight: 1.65 }}>{it.a}</p></div>
              </div>;
            })}
          </div>
        </div>
      </Container>
      <style>{`@media(max-width:820px){.ol-faq-grid{grid-template-columns:1fr !important;gap:24px !important;}.ol-faq-grid>div:first-child{position:static !important;}}`}</style>
    </section>
  );
}

export function Testimonials() {
  const items = [
    { q: "They didn't just build what we asked — they told us what we actually needed, then built it. Saved us months.", n: "Founder, EdTech startup", tag: "Web app + automations" },
    { q: "The reporting that used to eat my Monday now lands in my inbox done. I didn't know that was even possible.", n: "Operations lead, services firm", tag: "AI automation" },
    { q: "One system replaced four tools and a pile of spreadsheets. Onboarding a new client is finally calm.", n: "Director, growth-stage SaaS", tag: "Internal tools" },
  ];
  return (
    <section style={{ padding: "0 0 0" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="ol-tst-grid">
          {items.map((t, i) => (
            <figure key={i} className="ol-reveal" data-delay={i * 80} style={{ margin: 0, background: T.panel, border: `1px solid ${T.line2}`, borderRadius: 18, padding: "26px 24px", display: "flex", flexDirection: "column" }}>
              <div aria-hidden style={{ fontSize: 40, lineHeight: 1, color: T.coral, fontWeight: 700, fontFamily: "Georgia,serif" }}>“</div>
              <blockquote style={{ margin: "8px 0 18px", fontSize: 16.5, lineHeight: 1.55, fontWeight: 500, flex: 1 }}>{t.q}</blockquote>
              <figcaption style={{ borderTop: `1px solid ${T.line}`, paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 13.5, color: T.mute }}>{t.n}</span>
                <span className="ol-mono" style={{ fontSize: 11, color: T.blue, background: T.blueWash, padding: "4px 9px", borderRadius: 999, whiteSpace: "nowrap" }}>{t.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="ol-mono" style={{ fontSize: 12, color: T.faint, marginTop: 16, textAlign: "center" }}>Illustrative of the feedback we build for. Real names shared on request.</p>
      </Container>
      <style>{`@media(max-width:820px){.ol-tst-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

{/*
export function Trust() {
  const items = ["Founder-led builds", "Fixed-scope quotes", "You own all the code", "MVP in weeks, not quarters", "No lock-in", "Outcomes, not output"];
  const loop = [...items, ...items];
  return (
    <div style={{ borderTop: `1px solid ${T.line}`, borderBottom: `1px solid ${T.line}`, background: T.wash, overflow: "hidden", padding: "15px 0" }}>
      <div style={{ display: "flex", width: "max-content", animation: "ol-marq 32s linear infinite" }}>
        {loop.map((w, i) => <span key={i} style={{ fontSize: 15, fontWeight: 500, color: T.ink70, padding: "0 26px", display: "inline-flex", alignItems: "center", gap: 26, whiteSpace: "nowrap" }}>{w} <span style={{ color: T.coral }}>◆</span></span>)}
      </div>
    </div>
  );
}
  */}