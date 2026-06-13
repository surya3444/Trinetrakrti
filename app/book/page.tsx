"use client";
import React, { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { T } from "@/lib/theme";
import { Container, Eyebrow, Btn, ArrowR } from "@/components/ui/Shared";

type CallType = "clarity" | "technical";

export default function Book() {
  useReveal();
  const [type, setType] = useState<CallType>("clarity");
  const [step, setStep] = useState(1);
  
  // Added 'phone' to the form state
  const [form, setForm] = useState({ 
    problem: "", 
    name: "", 
    email: "", 
    phone: "", 
    company: "", 
    stage: "Startup / idea" 
  });
  
  // API Integration States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));
  
  const s1 = form.problem.trim().length > 8;
  const s2 = form.name.trim() && /\S+@\S+\.\S+/.test(form.email);

  // Form Submission Handler
  const handleSubmit = async () => {
    if (!s2) return;
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...form }),
      });

      if (!response.ok) throw new Error("Failed to submit booking.");
      
      setSent(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const calls = {
    clarity: { n: "Clarity Call", price: "Free", time: "30 min", line: "Understand the problem and hear what's worth building.", walk: ["Your likely root cause", "What to build (or not)", "Whether software is even the answer"] },
    technical: { n: "Technical Call", price: "Scope & quote", time: "45 min", line: "Get the stack, the plan and a fixed quote to start.", walk: ["Recommended approach & tech", "Scope, timeline & fixed quote", "A clear path to kickoff"] },
  };
  const c = calls[type];

  return (
    <main>
      <section style={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${T.line}` }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${T.line} 1px,transparent 1px),linear-gradient(90deg,${T.line} 1px,transparent 1px)`, backgroundSize: "56px 56px", opacity: .5, maskImage: "radial-gradient(ellipse 60% 60% at 30% 18%,#000,transparent 72%)", WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 30% 18%,#000,transparent 72%)" }} />
        <Container style={{ position: "relative", padding: "52px 24px 36px" }}>
          <div className="ol-reveal"><Eyebrow>Book a call</Eyebrow></div>
          <h1 className="ol-reveal" data-delay="70" style={{ fontSize: "clamp(32px,5.2vw,56px)", lineHeight: 1.05, letterSpacing: "-.03em", fontWeight: 700, margin: "18px 0 0", maxWidth: 720 }}>Tell us the problem.<br />We'll tell you what to build.</h1>
          <p className="ol-reveal" data-delay="130" style={{ marginTop: 18, fontSize: 18, color: T.mute, maxWidth: 540, lineHeight: 1.6 }}>Two short conversations. Pick where you are — we'll take it from there. No deck needed.</p>
        </Container>
      </section>
      <section style={{ padding: "20px 0 100px" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 28, alignItems: "start" }} className="ol-book-grid">
            <div style={{ display: "grid", gap: 14 }}>
              {(Object.entries(calls) as [CallType, typeof calls[CallType]][]).map(([id, o]) => {
                const a = type === id;
                return <button key={id} onClick={() => setType(id)} className="ol-frame" style={{ textAlign: "left", background: a ? T.ink : T.panel, color: a ? "#fff" : T.ink, border: `1.5px solid ${a ? T.ink : T.line2}`, borderRadius: 18, padding: "22px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 21, fontWeight: 700 }}>{o.n}</span>
                    <span style={{ display: "flex", gap: 8 }}>
                      <span className="ol-mono" style={{ fontSize: 12, padding: "5px 11px", borderRadius: 999, background: a ? "rgba(255,255,255,.12)" : T.wash, color: a ? "#fff" : T.mute }}>{o.time}</span>
                      <span className="ol-mono" style={{ fontSize: 12, padding: "5px 11px", borderRadius: 999, background: T.coral, color: "#fff", fontWeight: 600 }}>{o.price}</span>
                    </span>
                  </div>
                  <p style={{ margin: "12px 0 14px", fontSize: 15, lineHeight: 1.5, color: a ? "#C2C5D0" : T.mute }}>{o.line}</p>
                  {o.walk.map((w) => <div key={w} style={{ display: "flex", gap: 9, alignItems: "center", padding: "5px 0", fontSize: 14, color: a ? "#E2E3E8" : T.ink70 }}><span style={{ color: T.coral, fontWeight: 700 }}>→</span>{w}</div>)}
                </button>;
              })}
              <div className="ol-mono" style={{ fontSize: 12.5, color: T.faint, lineHeight: 1.6, padding: "2px 4px" }}>New here? Start with the <span style={{ color: T.coral }}>free Clarity Call</span> — it tells us both whether there's a fit.</div>
            </div>

            <div style={{ background: T.panel, border: `1px solid ${T.line2}`, borderRadius: 22, padding: "28px 30px", boxShadow: "0 30px 60px -42px rgba(19,24,43,.25)" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "30px 10px", animation: "ol-fade .5s ease" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: T.green, display: "grid", placeItems: "center", margin: "0 auto 20px" }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 10px" }}>You're booked in.</h3>
                  <p style={{ color: T.mute, fontSize: 16, lineHeight: 1.6, maxWidth: 360, margin: "0 auto" }}>We'll email you within one business day to lock a time for your <strong style={{ color: T.ink }}>{c.n}</strong>. Bring the problem — we'll bring the logic.</p>
                  <Btn variant="ghost" onClick={() => { setSent(false); setStep(1); setForm({ problem: "", name: "", email: "", phone: "", company: "", stage: "Startup / idea" }); }} style={{ marginTop: 26 }}>Book another</Btn>
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                    {[1, 2].map((s) => <React.Fragment key={s}>
                      <div style={{ width: 26, height: 26, borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 600, background: step >= s ? T.ink : T.wash, color: step >= s ? "#fff" : T.faint, transition: "all .3s" }}>{s}</div>
                      {s === 1 && <div style={{ flex: 1, height: 2, background: step > 1 ? T.ink : T.line2, transition: "background .3s" }} />}
                    </React.Fragment>)}
                    <span className="ol-mono" style={{ fontSize: 12, color: T.faint, marginLeft: 6 }}>Step {step} of 2</span>
                  </div>
                  
                  {step === 1 ? (
                    <div style={{ animation: "ol-fade .35s ease" }}>
                      <div className="ol-mono" style={{ fontSize: 12, letterSpacing: ".1em", color: T.coral, textTransform: "uppercase" }}>Booking · {c.n}</div>
                      <h3 style={{ fontSize: 23, fontWeight: 700, margin: "10px 0 6px" }}>What's slowing you down?</h3>
                      <p style={{ color: T.mute, fontSize: 14.5, margin: "0 0 16px", lineHeight: 1.5 }}>One or two lines is plenty — it's all we need to make the call useful.</p>
                      <textarea value={form.problem} onChange={set("problem")} rows={5} placeholder="e.g. We waste hours every week copying data between three tools..." style={{ width: "100%", padding: "14px", borderRadius: 12, border: `1px solid ${T.line2}`, background: T.paper, fontSize: 15, fontFamily: "'Poppins',sans-serif", color: T.ink, resize: "vertical", lineHeight: 1.5 }} />
                      <Btn variant="primary" onClick={() => s1 && setStep(2)} disabled={!s1} style={{ width: "100%", marginTop: 18 }}>Continue <ArrowR /></Btn>
                      <p className="ol-mono" style={{ fontSize: 11.5, color: T.faint, textAlign: "center", marginTop: 12, marginBottom: 0 }}>Under a minute. No obligation.</p>
                    </div>
                  ) : (
                    <div style={{ animation: "ol-fade .35s ease" }}>
                      <div className="ol-mono" style={{ fontSize: 12, letterSpacing: ".1em", color: T.coral, textTransform: "uppercase" }}>Almost there</div>
                      <h3 style={{ fontSize: 23, fontWeight: 700, margin: "10px 0 16px" }}>Where do we send the invite?</h3>
                      <Field label="Your name" v={form.name} onChange={set("name")} ph="Krishna" />
                      <Field label="Work email" v={form.email} onChange={set("email")} ph="you@company.com" type="email" />
                      
                      {/* NEW PHONE NUMBER FIELD */}
                      <Field label="Phone number" v={form.phone} onChange={set("phone")} ph="+91 90000 00000" type="tel" />
                      
                      <Field label="Company / project" v={form.company} onChange={set("company")} ph="Optional" />
                      <div style={{ marginBottom: 18 }}>
                        <label className="ol-mono" style={{ fontSize: 12, color: T.mute, display: "block", marginBottom: 7 }}>Stage</label>
                        <select value={form.stage} onChange={set("stage")} style={{ width: "100%", padding: "13px 14px", borderRadius: 12, border: `1px solid ${T.line2}`, background: T.paper, fontSize: 15, fontFamily: "'Poppins',sans-serif", color: T.ink, appearance: "none" }}>
                          {["Startup / idea", "Small / medium business", "Growth-stage company", "Just exploring"].map((o) => <option key={o}>{o}</option>)}
                        </select>
                      </div>

                      {error && <div style={{ color: T.coral, fontSize: 14, marginBottom: 16 }}>{error}</div>}

                      <div style={{ display: "flex", gap: 12 }}>
                        <Btn variant="ghost" onClick={() => setStep(1)} disabled={isSubmitting}>Back</Btn>
                        <Btn 
                          variant="primary" 
                          onClick={handleSubmit} 
                          disabled={!s2 || isSubmitting} 
                          style={{ flex: 1, opacity: isSubmitting ? 0.7 : 1 }}
                        >
                          {isSubmitting ? "Booking..." : `Book my ${c.n}`} {!isSubmitting && <ArrowR />}
                        </Btn>
                      </div>
                      <p className="ol-mono" style={{ fontSize: 11.5, color: T.faint, textAlign: "center", marginTop: 12, marginBottom: 0 }}>No spam, ever. We reply within one business day.</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </Container>
      </section>
      <style>{`@media(max-width:820px){.ol-book-grid{grid-template-columns:1fr !important;}}`}</style>
    </main>
  );
}

function Field({ label, v, onChange, ph, type = "text" }: { label: string; v: string; onChange: any; ph: string; type?: string }) {
  const [f, setF] = useState(false);
  return <div style={{ marginBottom: 16 }}>
    <label className="ol-mono" style={{ fontSize: 12, color: T.mute, display: "block", marginBottom: 7 }}>{label}</label>
    <input value={v} onChange={onChange} placeholder={ph} type={type} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ width: "100%", padding: "13px 14px", borderRadius: 12, border: `1px solid ${f ? T.coral : T.line2}`, background: T.paper, fontSize: 15, fontFamily: "'Poppins',sans-serif", color: T.ink, outline: "none", boxShadow: f ? `0 0 0 4px ${T.coralWash}` : "none", transition: "all .2s" }} />
  </div>;
}