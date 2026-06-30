"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { T, NAV, BRAND, ALL_SERVICES } from "@/lib/theme";
import { Container, Btn, ArrowR } from "@/components/ui/Shared";

const SOCIALS: { key: keyof typeof BRAND.social; label: string; path: React.ReactNode }[] = [
  { key: "facebook", label: "Facebook", path: <path d="M14 8.5h2.2V5.6C15.8 5.5 14.9 5.4 14 5.4c-2 0-3.3 1.2-3.3 3.4v1.8H8v3h2.7V21h3.3v-7.4h2.6l.4-3H14V9.2c0-.5.3-.7 1-.7Z" /> },
  { key: "instagram", label: "Instagram", path: <><rect x="4.5" y="4.5" width="15" height="15" rx="4.5" /><circle cx="12" cy="12" r="3.6" /><circle cx="16.4" cy="7.6" r="1.1" fill="currentColor" stroke="none" /></> },
  { key: "linkedin", label: "LinkedIn", path: <><rect x="4.5" y="4.5" width="15" height="15" rx="2.5" /><path d="M8 10.5V16M8 7.8v.01M11.5 16v-3.2c0-1 .8-1.8 1.8-1.8s1.7.8 1.7 1.8V16" /></> },
  { key: "youtube", label: "YouTube", path: <><rect x="3.5" y="6.5" width="17" height="11" rx="3" /><path d="M10.5 9.8v4.4l4-2.2-4-2.2Z" fill="currentColor" stroke="none" /></> },
];

const ContactIcon = ({ children }: { children: React.ReactNode }) => (
  <span style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)" }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF8A78" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
  </span>
);

export function Footer() {
  const router = useRouter();
  return (
    <footer style={{ background: T.darkGradient, color: "#fff" }}>
      <Container style={{ padding: "0 24px" }}>
        {/* Brand + CTA row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 48, padding: "72px 0 40px" }} className="ol-fg">
          <div className="ol-fcol">
            <img style={{ width: "150px", marginBottom: 20 }} src="/tot1.svg" alt="Trinetrakrti" />
            <p style={{ color: "rgba(255,255,255,.6)", maxWidth: 330, lineHeight: 1.7, fontSize: 15.5, margin: 0 }}>We build websites, apps, AI automations and internal tools — around how your business actually works.</p>
            <div className="ol-mono" style={{ marginTop: 22, fontSize: 12.5, letterSpacing: ".08em", color: "#FF8A78" }}>Find the fix. Build the system.</div>
          </div>
          <div className="ol-fcol" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
            <p style={{ color: "rgba(255,255,255,.66)", fontSize: 15.5, lineHeight: 1.65, marginTop: 0, maxWidth: 320 }}>Tell us what&apos;s slowing you down. We&apos;ll tell you what to build — in 30 minutes.</p>
            <Btn variant="coral" onClick={() => router.push("/book")} style={{ marginTop: 8 }}>Book a call <ArrowR /></Btn>
          </div>
        </div>

        {/* Services + Explore + Contact */}
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1.4fr", gap: 48, padding: "8px 0 52px", borderTop: "1px solid rgba(255,255,255,.1)", paddingTop: 52 }} className="ol-fg2">
          {/* Our Services */}
          <div className="ol-fcol">
            <div className="ol-mono" style={{ fontSize: 12, letterSpacing: ".1em", color: "rgba(255,255,255,.4)", marginBottom: 18 }}>Our Services</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 28, rowGap: 2 }} className="ol-fsvc">
              {ALL_SERVICES.map((s) => (
                <Link key={s.id} href={`/work/${s.id}`} style={{ display: "block", color: "rgba(255,255,255,.66)", padding: "7px 0", fontSize: 14.5, fontWeight: 500, transition: "color .15s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.66)")}>{s.t}</Link>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="ol-fcol">
            <div className="ol-mono" style={{ fontSize: 12, letterSpacing: ".1em", color: "rgba(255,255,255,.4)", marginBottom: 18 }}>Explore</div>
            {[...NAV, { to: "/careers", label: "Careers" }, { to: "/book", label: "Book a call" }].map((n) => <Link key={n.to} href={n.to} style={{ display: "block", color: "rgba(255,255,255,.66)", padding: "7px 0", fontSize: 14.5, fontWeight: 500, transition: "color .15s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.66)")}>{n.label}</Link>)}
          </div>

          {/* Contact Info */}
          <div className="ol-fcol">
            <div className="ol-mono" style={{ fontSize: 12, letterSpacing: ".1em", color: "rgba(255,255,255,.4)", marginBottom: 18 }}>Contact Info</div>
            <div style={{ display: "grid", gap: 16 }}>
              <a href={`mailto:${BRAND.email}`} style={{ display: "flex", gap: 14, alignItems: "center", color: "rgba(255,255,255,.78)", fontSize: 15 }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.78)")}>
                <ContactIcon><><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6 8.5-6" /></></ContactIcon>
                <span><span style={{ fontWeight: 600, color: "#fff" }}>Email:</span> {BRAND.email}</span>
              </a>
              <a href={`tel:${BRAND.phone}`} style={{ display: "flex", gap: 14, alignItems: "center", color: "rgba(255,255,255,.78)", fontSize: 15 }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.78)")}>
                <ContactIcon><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 6a2 2 0 0 1 2-2Z" /></ContactIcon>
                <span><span style={{ fontWeight: 600, color: "#fff" }}>Phone:</span> {BRAND.phoneDisplay}</span>
              </a>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", color: "rgba(255,255,255,.78)", fontSize: 15 }}>
                <ContactIcon><><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></></ContactIcon>
                <span style={{ lineHeight: 1.5 }}><span style={{ fontWeight: 600, color: "#fff" }}>Location:</span> {BRAND.locations.join(" · ")}</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {SOCIALS.map((soc) => (
                <a key={soc.key} href={BRAND.social[soc.key]} target="_blank" rel="noreferrer" aria-label={soc.label}
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 999, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)", color: "rgba(255,255,255,.78)", transition: "all .15s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = T.accent; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = T.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.08)"; e.currentTarget.style.color = "rgba(255,255,255,.78)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.14)"; }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{soc.path}</svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0 40px", borderTop: "1px solid rgba(255,255,255,.1)", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13.5, color: "rgba(255,255,255,.45)" }}>© {new Date().getFullYear()} {BRAND.lockup}</span>
          <span style={{ fontSize: 13.5, color: "rgba(255,255,255,.45)" }}>Built around how you work.</span>
        </div>
      </Container>
      <style>{`
        @media(max-width:880px){.ol-fg2{grid-template-columns:1fr 1fr !important;gap:36px !important;}.ol-fg2 .ol-fcol:first-child{grid-column:1 / -1 !important;}}
        @media(max-width:780px){.ol-fg{grid-template-columns:1fr !important;gap:36px !important;padding:48px 0 32px !important;}}
        @media(max-width:560px){.ol-fg2{grid-template-columns:1fr !important;}.ol-fsvc{grid-template-columns:1fr 1fr !important;}}
      `}</style>
    </footer>
  );
}
