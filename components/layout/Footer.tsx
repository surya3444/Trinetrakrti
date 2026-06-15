"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { T, NAV } from "@/lib/theme";
import { Container, Btn, ArrowR } from "@/components/ui/Shared";

export function Footer() {
  const router = useRouter();
  return (
    <footer style={{ background: T.fg, color: "#fff", borderTop: `2px solid ${T.fg}` }}>
      <Container style={{ padding: "0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1.2fr" }} className="ol-fg">
          <div style={{ padding: "64px 36px 48px 0", borderRight: "2px solid rgba(255,255,255,.16)" }} className="ol-fcol">
            <img style={{ width: "150px", marginBottom: 18 }} src="/tot1.svg" alt="Trinetrakrti" />
            <p style={{ color: "rgba(255,255,255,.66)", maxWidth: 330, lineHeight: 1.65, fontSize: 15, margin: 0 }}>We build websites, apps, AI automations and internal tools — around how your business actually works.</p>
            <div className="ol-mono" style={{ marginTop: 22, fontSize: 12, color: T.accent }}>Find the fix. Build the system.</div>
          </div>
          <div style={{ padding: "64px 36px 48px", borderRight: "2px solid rgba(255,255,255,.16)" }} className="ol-fcol">
            <div className="ol-mono" style={{ fontSize: 11, letterSpacing: ".18em", color: T.accent, marginBottom: 18 }}>Explore</div>
            {[...NAV, { to: "/book", label: "Book a call" }].map((n) => <Link key={n.to} href={n.to} style={{ display: "block", color: "rgba(255,255,255,.66)", padding: "8px 0", fontSize: 14, letterSpacing: ".04em", textTransform: "uppercase", fontWeight: 500 }} onMouseEnter={(e) => (e.currentTarget.style.color = T.accent)} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.66)")}>{n.label}</Link>)}
          </div>
          <div style={{ padding: "64px 0 48px 36px" }} className="ol-fcol">
            <div className="ol-mono" style={{ fontSize: 11, letterSpacing: ".18em", color: T.accent, marginBottom: 18 }}>Start here</div>
            <p style={{ color: "rgba(255,255,255,.66)", fontSize: 15, lineHeight: 1.6, marginTop: 0 }}>Tell us what's slowing you down. We'll tell you what to build — in 30 minutes.</p>
            <Btn variant="coral" onClick={() => router.push("/book")} style={{ marginTop: 8 }}>Book a call <ArrowR /></Btn>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 0 36px", borderTop: "2px solid rgba(255,255,255,.16)", flexWrap: "wrap", gap: 12 }}>
          <span className="ol-mono" style={{ fontSize: 12, color: "rgba(255,255,255,.5)" }}>© {new Date().getFullYear()} Trinetrakrti — Business Systems Studio</span>
          <span className="ol-mono" style={{ fontSize: 12, color: "rgba(255,255,255,.5)" }}>Built around how you work.</span>
        </div>
      </Container>
      <style>{`@media(max-width:780px){.ol-fg{grid-template-columns:1fr !important;}.ol-fcol{border-right:none !important;padding:40px 0 !important;border-bottom:2px solid rgba(255,255,255,.16);}}`}</style>
    </footer>
  );
}
