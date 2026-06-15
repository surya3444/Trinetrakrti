"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { T } from "@/lib/theme";
import { Container, SectionHead, Eyebrow, Btn, ArrowR } from "@/components/ui/Shared";

export const PageHero: React.FC<{ eyebrow: string; title: React.ReactNode; sub?: React.ReactNode; showCta?: boolean; num?: string }> = ({ eyebrow, title, sub, showCta = true, num }) => {
  const router = useRouter();
  return (
    <section style={{ position: "relative", overflow: "hidden", borderBottom: `2px solid ${T.fg}` }}>
      <div aria-hidden className="sw-grid-faint" style={{ position: "absolute", inset: 0, maskImage: "radial-gradient(ellipse 60% 80% at 20% 10%,#000,transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 20% 10%,#000,transparent 75%)" }} />
      <Container style={{ position: "relative", padding: "64px 24px 56px" }}>
        <div className="ol-reveal"><Eyebrow num={num}>{eyebrow}</Eyebrow></div>
        <h1 className="ol-reveal" data-delay="70" style={{ fontSize: "clamp(38px,7vw,78px)", lineHeight: .96, letterSpacing: "-.025em", fontWeight: 900, textTransform: "uppercase", margin: "20px 0 0", maxWidth: 1000 }}>{title}</h1>
        {sub && <p className="ol-reveal" data-delay="130" style={{ marginTop: 20, fontSize: 18, color: T.mute, maxWidth: 600, lineHeight: 1.55 }}>{sub}</p>}
        {showCta && <div className="ol-reveal" data-delay="190" style={{ marginTop: 30 }}><Btn variant="coral" onClick={() => router.push("/book")}>Book a call <ArrowR /></Btn></div>}
      </Container>
    </section>
  );
};

export function FinalCTA() {
  const router = useRouter();
  return (
    <section style={{ padding: "0 0 100px" }}>
      <Container>
        <div className="ol-reveal" style={{ position: "relative", overflow: "hidden", background: T.fg, color: "#fff", padding: "64px 48px", marginTop: "80px", border: `2px solid ${T.fg}` }}>
          <div aria-hidden style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, background: T.accent }} />
          <div aria-hidden style={{ position: "absolute", bottom: -40, right: 120, width: 90, height: 90, border: "2px solid rgba(255,255,255,.35)" }} />
          <div style={{ position: "relative", maxWidth: 640 }}>
            <Eyebrow num="*" color={T.accent}>One conversation away</Eyebrow>
            <h2 style={{ fontSize: "clamp(30px,4.6vw,52px)", lineHeight: 1, fontWeight: 900, letterSpacing: "-.02em", textTransform: "uppercase", margin: "18px 0 16px" }}>Tell us the problem. We&apos;ll tell you what to build.</h2>
            <p style={{ color: "rgba(255,255,255,.72)", fontSize: 18, lineHeight: 1.6, margin: 0, maxWidth: 520 }}>Thirty minutes, no deck needed. You&apos;ll leave knowing the fix and roughly what it takes — whether or not you build it with us.</p>
            <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Btn variant="coral" onClick={() => router.push("/book")}>Book a call <ArrowR /></Btn>
              <Btn variant="ghost" onClick={() => router.push("/pricing")} style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>See pricing</Btn>
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
    <section style={{ padding: "90px 0" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 48, alignItems: "start" }} className="ol-faq-grid">
          <div style={{ position: "sticky", top: 100 }}>
            <SectionHead eyebrow="Before you book" num="FAQ" title="Good questions, straight answers." />
            <div className="ol-reveal" data-delay="160" style={{ marginTop: 26 }}><Btn variant="primary" onClick={() => router.push("/book")}>Ask us live <ArrowR /></Btn></div>
          </div>
          <div className="ol-reveal" data-delay="100" style={{ borderTop: `2px solid ${T.fg}` }}>
            {qs.map((it, i) => {
              const o = open === i;
              return <div key={i} style={{ borderBottom: `2px solid ${T.fg}`, background: o ? T.accent : "transparent", color: o ? "#fff" : T.fg, transition: "background .15s ease-out, color .15s ease-out" }}>
                <button onClick={() => setOpen(o ? -1 : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18, background: "none", border: "none", padding: "22px 4px", textAlign: "left", fontSize: 17, fontWeight: 700, color: "inherit", textTransform: "uppercase", letterSpacing: "-.01em", fontFamily: "'Inter',sans-serif" }}>
                  {it.q}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, transform: o ? "rotate(45deg)" : "none", transition: "transform .2s ease-out" }}><path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" /></svg>
                </button>
                <div style={{ overflow: "hidden", maxHeight: o ? 280 : 0, transition: "max-height .25s ease-out" }}><p style={{ margin: "0 4px 22px", color: o ? "rgba(255,255,255,.85)" : T.mute, fontSize: 16, lineHeight: 1.6 }}>{it.a}</p></div>
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, border: `2px solid ${T.fg}` }} className="ol-tst-grid">
          {items.map((t, i) => (
            <Testimonial key={i} t={t} i={i} last={i === items.length - 1} />
          ))}
        </div>
        <p className="ol-mono" style={{ fontSize: 11, color: T.faint, marginTop: 16, textAlign: "center", letterSpacing: ".1em" }}>Illustrative of the feedback we build for. Real names shared on request.</p>
      </Container>
      <style>{`@media(max-width:820px){.ol-tst-grid{grid-template-columns:1fr !important;}.ol-tst-cell{border-right:none !important;border-bottom:2px solid ${T.fg};}.ol-tst-cell:last-child{border-bottom:none !important;}}`}</style>
    </section>
  );
}

function Testimonial({ t, i, last }: { t: { q: string; n: string; tag: string }; i: number; last: boolean }) {
  const [h, setH] = useState(false);
  return (
    <figure className="ol-reveal ol-tst-cell" data-delay={i * 80} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ margin: 0, background: h ? T.fg : "#fff", color: h ? "#fff" : T.fg, borderRight: last ? "none" : `2px solid ${T.fg}`, padding: "28px 26px", display: "flex", flexDirection: "column", transition: "background .15s ease-out, color .15s ease-out" }}>
      <div aria-hidden style={{ fontSize: 44, lineHeight: 1, color: T.accent, fontWeight: 900 }}>&ldquo;</div>
      <blockquote style={{ margin: "10px 0 18px", fontSize: 16.5, lineHeight: 1.55, fontWeight: 500, flex: 1 }}>{t.q}</blockquote>
      <figcaption style={{ borderTop: `1px solid ${h ? "rgba(255,255,255,.3)" : T.fg}`, paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <span style={{ fontSize: 13, color: h ? "rgba(255,255,255,.7)" : T.mute }}>{t.n}</span>
        <span className="ol-mono" style={{ fontSize: 10.5, letterSpacing: ".08em", color: T.accent }}>{t.tag}</span>
      </figcaption>
    </figure>
  );
}
