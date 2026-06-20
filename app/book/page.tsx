"use client";
import React, { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { T, ALL_SERVICES as SERVICES } from "@/lib/theme";
import { Container, Eyebrow, Btn, ArrowR } from "@/components/ui/Shared";

export default function Book() {
  useReveal();
  const [service, setService] = useState<string>("");
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    problem: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    stage: "Startup / idea",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const selected = SERVICES.find((s) => s.id === service);
  const s1 = !!service && form.problem.trim().length > 8;
  const s2 = form.name.trim() && /\S+@\S+\.\S+/.test(form.email);

  const handleSubmit = async () => {
    if (!s2) return;
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service: selected?.t ?? service, ...form }),
      });
      if (!response.ok) throw new Error("Failed to submit booking.");
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section style={{ position: "relative", overflow: "hidden", borderBottom: `2px solid ${T.fg}` }}>
        <div aria-hidden className="sw-grid-faint" style={{ position: "absolute", inset: 0, maskImage: "radial-gradient(ellipse 60% 70% at 20% 10%,#000,transparent 72%)", WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 20% 10%,#000,transparent 72%)" }} />
        <Container style={{ position: "relative", padding: "56px 24px 44px" }}>
          <div className="ol-reveal"><Eyebrow num="*">Book a call</Eyebrow></div>
          <h1 className="ol-reveal" data-delay="70" style={{ fontSize: "clamp(36px,5.6vw,68px)", lineHeight: .96, letterSpacing: "-.025em", fontWeight: 900, textTransform: "uppercase", margin: "20px 0 0", maxWidth: 760 }}>Pick a service.<br />Tell us the problem.</h1>
          <p className="ol-reveal" data-delay="130" style={{ marginTop: 18, fontSize: 18, color: T.mute, maxWidth: 540, lineHeight: 1.55 }}>One short form. Choose what you&apos;re after, describe what&apos;s slowing you down, and we&apos;ll come back within one business day. No deck needed.</p>
        </Container>
      </section>

      <section style={{ padding: "44px 0 100px" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 0, border: `2px solid ${T.fg}`, alignItems: "stretch" }} className="ol-book-grid">
            {/* Left: what happens */}
            <div className="sw-diagonal ol-book-aside" style={{ padding: "34px 32px", borderRight: `2px solid ${T.fg}` }}>
              <div className="ol-mono" style={{ fontSize: 11, letterSpacing: ".18em", color: T.accent, fontWeight: 700 }}>What happens next</div>
              <div style={{ display: "grid", gap: 0, marginTop: 24, border: `2px solid ${T.fg}`, background: "#fff" }}>
                {[
                  "We read your note and route it to the right person.",
                  "You get an email within one business day to lock a time.",
                  "On the call: your likely root cause, what to build (or not), and a clear next step.",
                ].map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "16px 18px", borderTop: i ? `2px solid ${T.fg}` : "none", fontSize: 14.5, fontWeight: 500, lineHeight: 1.5 }}>
                    <span className="ol-mono" style={{ color: T.accent, fontWeight: 700 }}>0{i + 1}</span>{t}
                  </div>
                ))}
              </div>
              <div className="ol-mono" style={{ fontSize: 12, color: T.mute, lineHeight: 1.6, marginTop: 22, textTransform: "none", letterSpacing: 0 }}>The first call is free. After it, you get a fixed-scope quote tied to a specific outcome — no open-ended hourly surprises.</div>
            </div>

            {/* Right: form */}
            <div style={{ padding: "34px 32px", background: "#fff" }}>
              {sent ? (
                <div style={{ textAlign: "left", padding: "20px 0", animation: "ol-fade .4s ease" }}>
                  <div style={{ width: 60, height: 60, background: T.accent, display: "grid", placeItems: "center", marginBottom: 20 }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.6" strokeLinecap="square" /></svg>
                  </div>
                  <h3 style={{ fontSize: 28, fontWeight: 900, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "-.02em" }}>You&apos;re booked in.</h3>
                  <p style={{ color: T.mute, fontSize: 16, lineHeight: 1.6, maxWidth: 380 }}>We&apos;ll email you within one business day to talk about <strong style={{ color: T.fg }}>{selected?.t ?? "your project"}</strong>. Bring the problem — we&apos;ll bring the plan.</p>
                  <Btn variant="ghost" onClick={() => { setSent(false); setStep(1); setService(""); setForm({ problem: "", name: "", email: "", phone: "", company: "", stage: "Startup / idea" }); }} style={{ marginTop: 26 }}>Book another</Btn>
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                    {[1, 2].map((s) => <React.Fragment key={s}>
                      <div style={{ width: 28, height: 28, display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700, background: step >= s ? T.fg : "#fff", color: step >= s ? "#fff" : T.faint, border: `2px solid ${T.fg}` }}>{s}</div>
                      {s === 1 && <div style={{ flex: 1, height: 2, background: step > 1 ? T.fg : T.muted }} />}
                    </React.Fragment>)}
                    <span className="ol-mono" style={{ fontSize: 11, color: T.faint, marginLeft: 6, letterSpacing: ".1em" }}>Step {step} / 2</span>
                  </div>

                  {step === 1 ? (
                    <div style={{ animation: "ol-fade .3s ease" }}>
                      <div className="ol-mono" style={{ fontSize: 11, letterSpacing: ".14em", color: T.accent }}>Which service?</div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "12px 0 22px", maxHeight: 260, overflowY: "auto", paddingRight: 2 }} className="ol-svc-pick">
                        {SERVICES.map((s) => {
                          const a = service === s.id;
                          return <button key={s.id} onClick={() => setService(s.id)} className="ol-btn" style={{ textAlign: "left", padding: "11px 13px", border: `2px solid ${T.fg}`, background: a ? T.accent : "#fff", color: a ? "#fff" : T.fg, fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".02em", lineHeight: 1.2 }}>{s.t}</button>;
                        })}
                      </div>
                      <div className="ol-mono" style={{ fontSize: 11, letterSpacing: ".14em", color: T.accent }}>What&apos;s slowing you down?</div>
                      <textarea value={form.problem} onChange={set("problem")} rows={4} placeholder="e.g. We waste hours every week copying data between three tools..." style={{ width: "100%", padding: "14px", borderRadius: 0, border: `2px solid ${T.fg}`, background: "#fff", fontSize: 15, fontFamily: "'Inter',sans-serif", color: T.fg, resize: "vertical", lineHeight: 1.5, marginTop: 10 }} />
                      <Btn variant="primary" onClick={() => s1 && setStep(2)} disabled={!s1} style={{ width: "100%", marginTop: 18 }}>Continue <ArrowR /></Btn>
                      <p className="ol-mono" style={{ fontSize: 11, color: T.faint, marginTop: 12, marginBottom: 0, letterSpacing: ".08em" }}>Under a minute. No obligation.</p>
                    </div>
                  ) : (
                    <div style={{ animation: "ol-fade .3s ease" }}>
                      <div className="ol-mono" style={{ fontSize: 11, letterSpacing: ".14em", color: T.accent }}>{selected?.t} · Almost there</div>
                      <h3 style={{ fontSize: 22, fontWeight: 800, margin: "10px 0 18px", textTransform: "uppercase", letterSpacing: "-.01em" }}>Where do we send the invite?</h3>
                      <Field label="Your name" v={form.name} onChange={set("name")} ph="Krishna" />
                      <Field label="Work email" v={form.email} onChange={set("email")} ph="you@company.com" type="email" />
                      <Field label="Phone number" v={form.phone} onChange={set("phone")} ph="+91 90000 00000" type="tel" />
                      <Field label="Company / project" v={form.company} onChange={set("company")} ph="Optional" />
                      <div style={{ marginBottom: 18 }}>
                        <label className="ol-mono" style={{ fontSize: 11, color: T.fg, display: "block", marginBottom: 8, letterSpacing: ".1em" }}>Stage</label>
                        <select value={form.stage} onChange={set("stage")} style={{ width: "100%", padding: "13px 14px", borderRadius: 0, border: `2px solid ${T.fg}`, background: "#fff", fontSize: 15, fontFamily: "'Inter',sans-serif", color: T.fg, appearance: "none" }}>
                          {["Startup / idea", "Small / medium business", "Growth-stage company", "Just exploring"].map((o) => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      {error && <div style={{ color: "#fff", background: T.accent, fontSize: 14, marginBottom: 16, padding: "10px 14px", fontWeight: 600 }}>{error}</div>}
                      <div style={{ display: "flex", gap: 12 }}>
                        <Btn variant="ghost" onClick={() => setStep(1)} disabled={isSubmitting}>Back</Btn>
                        <Btn variant="primary" onClick={handleSubmit} disabled={!s2 || isSubmitting} style={{ flex: 1 }}>
                          {isSubmitting ? "Booking..." : "Book my call"} {!isSubmitting && <ArrowR />}
                        </Btn>
                      </div>
                      <p className="ol-mono" style={{ fontSize: 11, color: T.faint, marginTop: 12, marginBottom: 0, letterSpacing: ".08em" }}>No spam, ever. We reply within one business day.</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </Container>
      </section>
      <style>{`@media(max-width:820px){.ol-book-grid{grid-template-columns:1fr !important;}.ol-book-aside{border-right:none !important;border-bottom:2px solid ${T.fg};}.ol-svc-pick{grid-template-columns:1fr !important;}}`}</style>
    </main>
  );
}

function Field({ label, v, onChange, ph, type = "text" }: { label: string; v: string; onChange: any; ph: string; type?: string }) {
  const [f, setF] = useState(false);
  return <div style={{ marginBottom: 16 }}>
    <label className="ol-mono" style={{ fontSize: 11, color: T.fg, display: "block", marginBottom: 8, letterSpacing: ".1em" }}>{label}</label>
    <input value={v} onChange={onChange} placeholder={ph} type={type} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ width: "100%", padding: "13px 14px", borderRadius: 0, border: `2px solid ${f ? T.accent : T.fg}`, background: "#fff", fontSize: 15, fontFamily: "'Inter',sans-serif", color: T.fg, outline: "none", transition: "border-color .15s" }} />
  </div>;
}
