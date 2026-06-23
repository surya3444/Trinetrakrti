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
      <section className="st-hero">
        <div aria-hidden className="st-grid-overlay" style={{ position: "absolute", inset: 0, zIndex: 1 }} />
        <Container style={{ position: "relative", padding: "76px 24px 72px" }}>
          <div className="ol-reveal"><Eyebrow num="*" color="#FFD7C2">Book a call</Eyebrow></div>
          <h1 className="ol-reveal" data-delay="70" style={{ fontSize: "clamp(36px,5.4vw,64px)", lineHeight: 1.04, letterSpacing: "-.035em", fontWeight: 700, margin: "16px 0 0", maxWidth: 760, color: "#fff" }}>Pick a service.<br />Tell us the problem.</h1>
          <p className="ol-reveal" data-delay="130" style={{ marginTop: 18, fontSize: 19, color: "rgba(255,255,255,.84)", maxWidth: 540, lineHeight: 1.55 }}>One short form. Choose what you&apos;re after, describe what&apos;s slowing you down, and we&apos;ll come back within one business day. No deck needed.</p>
        </Container>
      </section>

      <section style={{ padding: "72px 0 100px" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 24, alignItems: "start" }} className="ol-book-grid">
            {/* Left: what happens */}
            <div className="ol-book-aside" style={{ padding: "34px 32px", background: T.muted, border: `1px solid ${T.borderSoft}`, borderRadius: T.radius }}>
              <div className="ol-mono" style={{ fontSize: 12, letterSpacing: ".1em", color: T.accent, fontWeight: 600 }}>What happens next</div>
              <div style={{ display: "grid", gap: 12, marginTop: 22 }}>
                {[
                  "We read your note and route it to the right person.",
                  "You get an email within one business day to lock a time.",
                  "On the call: your likely root cause, what to build (or not), and a clear next step.",
                ].map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px 18px", background: "#fff", border: `1px solid ${T.border}`, borderRadius: 12, boxShadow: T.shadowCard, fontSize: 14.5, fontWeight: 500, lineHeight: 1.5, color: T.fg }}>
                    <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: 999, background: T.coralWash, color: T.accent, fontSize: 12, fontWeight: 700, display: "grid", placeItems: "center" }}>{i + 1}</span>{t}
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 13.5, color: T.mute, lineHeight: 1.65, marginTop: 22 }}>The first call is free. After it, you get a fixed-scope quote tied to a specific outcome — no open-ended hourly surprises.</div>
            </div>

            {/* Right: form */}
            <div style={{ padding: "34px 34px", background: "#fff", border: `1px solid ${T.border}`, borderRadius: T.radius, boxShadow: T.shadowFloat }}>
              {sent ? (
                <div style={{ textAlign: "left", padding: "20px 0", animation: "ol-fade .4s ease" }}>
                  <div style={{ width: 60, height: 60, borderRadius: 16, background: T.accentGradient, display: "grid", placeItems: "center", marginBottom: 22, boxShadow: "0 12px 24px rgba(229,50,43,.32)" }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 10px", letterSpacing: "-.025em", color: T.fg }}>You&apos;re booked in.</h3>
                  <p style={{ color: T.mute, fontSize: 16, lineHeight: 1.6, maxWidth: 380 }}>We&apos;ll email you within one business day to talk about <strong style={{ color: T.fg }}>{selected?.t ?? "your project"}</strong>. Bring the problem — we&apos;ll bring the plan.</p>
                  <Btn variant="ghost" onClick={() => { setSent(false); setStep(1); setService(""); setForm({ problem: "", name: "", email: "", phone: "", company: "", stage: "Startup / idea" }); }} style={{ marginTop: 26 }}>Book another</Btn>
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                    {[1, 2].map((s) => <React.Fragment key={s}>
                      <div style={{ width: 30, height: 30, borderRadius: 999, display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700, background: step >= s ? T.accent : "#fff", color: step >= s ? "#fff" : T.faint, border: `1px solid ${step >= s ? T.accent : T.border}` }}>{s}</div>
                      {s === 1 && <div style={{ flex: 1, height: 2, borderRadius: 2, background: step > 1 ? T.accent : T.border }} />}
                    </React.Fragment>)}
                    <span className="ol-mono" style={{ fontSize: 11, color: T.faint, marginLeft: 6, letterSpacing: ".1em" }}>Step {step} / 2</span>
                  </div>

                  {step === 1 ? (
                    <div style={{ animation: "ol-fade .3s ease" }}>
                      <div className="ol-mono" style={{ fontSize: 12, letterSpacing: ".09em", color: T.accent }}>Which service?</div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "12px 0 22px", maxHeight: 260, overflowY: "auto", paddingRight: 2 }} className="ol-svc-pick">
                        {SERVICES.map((s) => {
                          const a = service === s.id;
                          return <button key={s.id} onClick={() => setService(s.id)} className="ol-btn" style={{ textAlign: "left", padding: "11px 14px", borderRadius: 10, border: `1px solid ${a ? T.accent : T.border}`, background: a ? T.coralWash : "#fff", color: a ? T.accent : T.fg, fontSize: 13.5, fontWeight: 500, lineHeight: 1.25 }}>{s.t}</button>;
                        })}
                      </div>
                      <div className="ol-mono" style={{ fontSize: 12, letterSpacing: ".09em", color: T.accent }}>What&apos;s slowing you down?</div>
                      <textarea value={form.problem} onChange={set("problem")} rows={4} placeholder="e.g. We waste hours every week copying data between three tools..." style={{ width: "100%", padding: "14px", borderRadius: 12, border: `1px solid ${T.border}`, background: "#fff", fontSize: 15, fontFamily: "'Inter',sans-serif", color: T.fg, resize: "vertical", lineHeight: 1.5, marginTop: 10 }} />
                      <Btn variant="coral" onClick={() => s1 && setStep(2)} disabled={!s1} style={{ width: "100%", marginTop: 18 }}>Continue <ArrowR /></Btn>
                      <p style={{ fontSize: 12.5, color: T.faint, marginTop: 12, marginBottom: 0 }}>Under a minute. No obligation.</p>
                    </div>
                  ) : (
                    <div style={{ animation: "ol-fade .3s ease" }}>
                      <div className="ol-mono" style={{ fontSize: 12, letterSpacing: ".09em", color: T.accent }}>{selected?.t} · Almost there</div>
                      <h3 style={{ fontSize: 23, fontWeight: 700, margin: "10px 0 20px", letterSpacing: "-.02em", color: T.fg }}>Where do we send the invite?</h3>
                      <Field label="Your name" v={form.name} onChange={set("name")} ph="Krishna" />
                      <Field label="Work email" v={form.email} onChange={set("email")} ph="you@company.com" type="email" />
                      <Field label="Phone number" v={form.phone} onChange={set("phone")} ph="+91 90000 00000" type="tel" />
                      <Field label="Company / project" v={form.company} onChange={set("company")} ph="Optional" />
                      <div style={{ marginBottom: 18 }}>
                        <label style={{ fontSize: 13, fontWeight: 600, color: T.fg, display: "block", marginBottom: 8 }}>Stage</label>
                        <select value={form.stage} onChange={set("stage")} style={{ width: "100%", padding: "13px 14px", borderRadius: 12, border: `1px solid ${T.border}`, background: "#fff", fontSize: 15, fontFamily: "'Inter',sans-serif", color: T.fg, appearance: "none" }}>
                          {["Startup / idea", "Small / medium business", "Growth-stage company", "Just exploring"].map((o) => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      {error && <div style={{ color: T.accent, background: T.coralWash, borderRadius: 10, fontSize: 14, marginBottom: 16, padding: "12px 14px", fontWeight: 600 }}>{error}</div>}
                      <div style={{ display: "flex", gap: 12 }}>
                        <Btn variant="ghost" onClick={() => setStep(1)} disabled={isSubmitting}>Back</Btn>
                        <Btn variant="coral" onClick={handleSubmit} disabled={!s2 || isSubmitting} style={{ flex: 1 }}>
                          {isSubmitting ? "Booking..." : "Book my call"} {!isSubmitting && <ArrowR />}
                        </Btn>
                      </div>
                      <p style={{ fontSize: 12.5, color: T.faint, marginTop: 12, marginBottom: 0 }}>No spam, ever. We reply within one business day.</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </Container>
      </section>
      <style>{`@media(max-width:820px){.ol-book-grid{grid-template-columns:1fr !important;}.ol-svc-pick{grid-template-columns:1fr !important;}}`}</style>
    </main>
  );
}

function Field({ label, v, onChange, ph, type = "text" }: { label: string; v: string; onChange: any; ph: string; type?: string }) {
  const [f, setF] = useState(false);
  return <div style={{ marginBottom: 16 }}>
    <label style={{ fontSize: 13, fontWeight: 600, color: T.fg, display: "block", marginBottom: 8 }}>{label}</label>
    <input value={v} onChange={onChange} placeholder={ph} type={type} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ width: "100%", padding: "13px 14px", borderRadius: 12, border: `1px solid ${f ? T.accent : T.border}`, background: "#fff", fontSize: 15, fontFamily: "'Inter',sans-serif", color: T.fg, outline: "none", boxShadow: f ? "0 0 0 3px rgba(229,50,43,.12)" : "none", transition: "border-color .15s, box-shadow .15s" }} />
  </div>;
}
