"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { T, NAV, BRAND } from "@/lib/theme";
import { Container, Btn, ArrowR } from "@/components/ui/Shared";

export function Footer() {
  const router = useRouter();
  return (
    <footer style={{ background: T.darkGradient, color: "#fff" }}>
      <Container style={{ padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1.2fr", gap: 48, padding: "72px 0 52px" }} className="ol-fg">
          <div className="ol-fcol">
            <img style={{ width: "150px", marginBottom: 20 }} src="/tot1.svg" alt="Trinetrakrti" />
            <p style={{ color: "rgba(255,255,255,.6)", maxWidth: 330, lineHeight: 1.7, fontSize: 15.5, margin: 0 }}>We build websites, apps, AI automations and internal tools — around how your business actually works.</p>
            <div className="ol-mono" style={{ marginTop: 22, fontSize: 12.5, letterSpacing: ".08em", color: "#FF8A78" }}>Find the fix. Build the system.</div>
          </div>
          <div className="ol-fcol">
            <div className="ol-mono" style={{ fontSize: 12, letterSpacing: ".1em", color: "rgba(255,255,255,.4)", marginBottom: 18 }}>Explore</div>
            {[...NAV, { to: "/book", label: "Book a call" }].map((n) => <Link key={n.to} href={n.to} style={{ display: "block", color: "rgba(255,255,255,.66)", padding: "8px 0", fontSize: 15, fontWeight: 500, transition: "color .15s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.66)")}>{n.label}</Link>)}
          </div>
          <div className="ol-fcol">
            <div className="ol-mono" style={{ fontSize: 12, letterSpacing: ".1em", color: "rgba(255,255,255,.4)", marginBottom: 18 }}>Start here</div>
            <p style={{ color: "rgba(255,255,255,.66)", fontSize: 15.5, lineHeight: 1.65, marginTop: 0 }}>Tell us what's slowing you down. We'll tell you what to build — in 30 minutes.</p>
            <Btn variant="coral" onClick={() => router.push("/book")} style={{ marginTop: 8 }}>Book a call <ArrowR /></Btn>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0 40px", borderTop: "1px solid rgba(255,255,255,.1)", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13.5, color: "rgba(255,255,255,.45)" }}>© {new Date().getFullYear()} {BRAND.lockup}</span>
          <span style={{ fontSize: 13.5, color: "rgba(255,255,255,.45)" }}>Built around how you work.</span>
        </div>
      </Container>
      <style>{`@media(max-width:780px){.ol-fg{grid-template-columns:1fr !important;gap:36px !important;padding:48px 0 40px !important;}}`}</style>
    </footer>
  );
}
