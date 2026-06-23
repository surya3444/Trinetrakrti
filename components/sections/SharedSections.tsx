"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { T } from "@/lib/theme";
import { Container, SectionHead, Eyebrow, Btn, ArrowR } from "@/components/ui/Shared";

export const PageHero: React.FC<{ eyebrow: string; title: React.ReactNode; sub?: React.ReactNode; showCta?: boolean; num?: string }> = ({ eyebrow, title, sub, showCta = true, num }) => {
  const router = useRouter();
  return (
    <section className="st-hero">
      <div aria-hidden className="st-grid-overlay" style={{ position: "absolute", inset: 0, zIndex: 1 }} />
      <Container style={{ position: "relative", padding: "84px 24px 88px" }}>
        <div className="ol-reveal"><Eyebrow num={num} color="#FFD7C2">{eyebrow}</Eyebrow></div>
        <h1 className="ol-reveal" data-delay="70" style={{ fontSize: "clamp(36px,5.4vw,68px)", lineHeight: 1.04, letterSpacing: "-.035em", fontWeight: 700, margin: "16px 0 0", maxWidth: 980, color: "#fff" }}>{title}</h1>
        {sub && <p className="ol-reveal" data-delay="130" style={{ marginTop: 20, fontSize: 20, color: "rgba(255,255,255,.84)", maxWidth: 620, lineHeight: 1.55 }}>{sub}</p>}
        {showCta && <div className="ol-reveal" data-delay="190" style={{ marginTop: 32 }}><Btn variant="coral" onClick={() => router.push("/book")} style={{ background: "#fff", color: T.accent, fontSize: 16, padding: "14px 26px" }}>Book a call <ArrowR /></Btn></div>}
      </Container>
    </section>
  );
};

export function FinalCTA() {
  const router = useRouter();
  return (
    <section style={{ padding: "20px 0 110px" }}>
      <Container>
        <div className="ol-reveal" style={{ position: "relative", overflow: "hidden", background: T.darkGradient, color: "#fff", padding: "72px 56px", borderRadius: 28, boxShadow: T.shadowFloat }}>
          <div aria-hidden style={{ position: "absolute", top: "-40%", right: "-10%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(229,50,43,.55), transparent 65%)", filter: "blur(10px)" }} />
          <div aria-hidden className="st-grid-overlay" style={{ position: "absolute", inset: 0 }} />
          <div style={{ position: "relative", maxWidth: 640 }}>
            <Eyebrow color="#FF8A78">One conversation away</Eyebrow>
            <h2 style={{ fontSize: "clamp(28px,4.2vw,48px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-.03em", margin: "16px 0 16px", color: "#fff" }}>Tell us the problem. We&apos;ll tell you what to build.</h2>
            <p style={{ color: "rgba(255,255,255,.74)", fontSize: 19, lineHeight: 1.6, margin: 0, maxWidth: 520 }}>Thirty minutes, no deck needed. You&apos;ll leave knowing the fix and roughly what it takes — whether or not you build it with us.</p>
            <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Btn variant="coral" onClick={() => router.push("/book")} style={{ background: "#fff", color: T.accent }}>Book a call <ArrowR /></Btn>
              <Btn variant="light" onClick={() => router.push("/pricing")}>See pricing</Btn>
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
    { q: "I'm not even sure what I need built yet. Can you still help?", a: "That's the best place to start. The call exists to figure out what's worth building — sometimes it's a website, sometimes an automation, sometimes a process fix and no software at all. You'll leave with a clear answer." },
    { q: "Do you build just one thing, or the whole stack?", a: "The whole stack. Websites, apps, AI automations and internal tools — built by one team so they actually talk to each other instead of becoming four disconnected projects." },
    { q: "How much does it cost?", a: "The first call is free. After it, you get a fixed-scope quote tied to a specific outcome — no open-ended hourly surprises. The Pricing page has starting points." },
    { q: "How fast can we see something real?", a: "We build MVP-first, so most projects put a working version in front of real users in weeks, not quarters. We'd rather ship small and improve than vanish for six months." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: "100px 0" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 56, alignItems: "start" }} className="ol-faq-grid">
          <div style={{ position: "sticky", top: 100 }}>
            <SectionHead eyebrow="Before you book" num="FAQ" title="Good questions, straight answers." />
            <div className="ol-reveal" data-delay="160" style={{ marginTop: 26 }}><Btn variant="primary" onClick={() => router.push("/book")}>Ask us live <ArrowR /></Btn></div>
          </div>
          <div className="ol-reveal" data-delay="100" style={{ display: "grid", gap: 14 }}>
            {qs.map((it, i) => {
              const o = open === i;
              return <div key={i} style={{ border: `1px solid ${o ? "transparent" : T.border}`, borderRadius: T.radius, background: "#fff", boxShadow: o ? T.shadowFloat : T.shadowCard, transition: "box-shadow .2s ease", overflow: "hidden" }}>
                <button onClick={() => setOpen(o ? -1 : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18, background: "none", border: "none", padding: "22px 24px", textAlign: "left", fontSize: 18, fontWeight: 600, color: T.fg, letterSpacing: "-.015em", fontFamily: "'Inter',sans-serif" }}>
                  {it.q}
                  <span style={{ flexShrink: 0, display: "inline-flex", width: 28, height: 28, borderRadius: 999, background: o ? T.accent : T.muted, alignItems: "center", justifyContent: "center", transition: "background .2s ease" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: o ? "rotate(45deg)" : "none", transition: "transform .2s ease-out" }}><path d="M12 5v14M5 12h14" stroke={o ? "#fff" : T.fg} strokeWidth="2.2" strokeLinecap="round" /></svg>
                  </span>
                </button>
                <div style={{ overflow: "hidden", maxHeight: o ? 300 : 0, transition: "max-height .28s ease-out" }}><p style={{ margin: "0 24px 24px", color: T.mute, fontSize: 16.5, lineHeight: 1.6 }}>{it.a}</p></div>
              </div>;
            })}
          </div>
        </div>
      </Container>
      <style>{`@media(max-width:820px){.ol-faq-grid{grid-template-columns:1fr !important;gap:28px !important;}.ol-faq-grid>div:first-child{position:static !important;}}`}</style>
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
    <section style={{ padding: "0" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="ol-tst-grid">
          {items.map((t, i) => (
            <Testimonial key={i} t={t} i={i} />
          ))}
        </div>
        <p style={{ fontSize: 13, color: T.faint, marginTop: 18, textAlign: "center" }}>Illustrative of the feedback we build for. Real names shared on request.</p>
      </Container>
      <style>{`@media(max-width:820px){.ol-tst-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}

function Testimonial({ t, i }: { t: { q: string; n: string; tag: string }; i: number }) {
  const [h, setH] = useState(false);
  return (
    <figure className="ol-reveal ol-frame" data-delay={i * 80} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ margin: 0, background: "#fff", color: T.fg, border: `1px solid ${T.border}`, borderRadius: T.radius, padding: "28px 26px", display: "flex", flexDirection: "column", boxShadow: h ? T.shadowFloat : T.shadowCard, transform: h ? "translateY(-4px)" : "none" }}>
      <div aria-hidden style={{ fontSize: 48, lineHeight: .6, height: 22, color: T.accent, fontWeight: 700 }}>&ldquo;</div>
      <blockquote style={{ margin: "16px 0 20px", fontSize: 17, lineHeight: 1.55, fontWeight: 500, color: T.ink70, flex: 1 }}>{t.q}</blockquote>
      <figcaption style={{ borderTop: `1px solid ${T.border}`, paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: T.fg }}>{t.n}</span>
        <span style={{ fontSize: 12, fontWeight: 500, color: T.accent, background: T.coralWash, borderRadius: 999, padding: "4px 10px" }}>{t.tag}</span>
      </figcaption>
    </figure>
  );
}
