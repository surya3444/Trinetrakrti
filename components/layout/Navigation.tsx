"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { T, NAV } from "@/lib/theme";
import { Container, Btn, ArrowR } from "@/components/ui/Shared";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: `2px solid ${T.fg}` }}>
      <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 74 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img style={{ width: "150px" }} src="/tot2.svg" alt="Trinetrakrti" />
        </Link>
        <nav className="ol-dnav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {NAV.slice(1).map((n) => {
            const a = pathname === n.to;
            return (
              <Link key={n.to} href={n.to} className="sw-navlink" style={{ fontSize: 12.5, fontWeight: a ? 700 : 500, letterSpacing: ".1em", textTransform: "uppercase", color: a ? T.accent : T.fg }}>
                <span data-text={n.label}>{n.label}</span>
              </Link>
            );
          })}
          <Btn variant="coral" onClick={() => router.push("/book")} style={{ padding: "12px 20px", minHeight: 0 }}>Book a call</Btn>
        </nav>

        {/* Mobile burger */}
        <button className="ol-burg" onClick={() => setOpen((o) => !o)} aria-label="Menu" style={{ display: "none", background: "none", border: "none", width: 40, height: 40, position: "relative" }}>
          <span style={{ position: "absolute", left: 8, right: 8, height: 2, background: T.fg, top: open ? 19 : 14, transform: open ? "rotate(45deg)" : "none", transition: "all .2s" }} />
          <span style={{ position: "absolute", left: 8, right: 8, height: 2, background: T.fg, top: 19, opacity: open ? 0 : 1, transition: "all .2s" }} />
          <span style={{ position: "absolute", left: 8, right: 8, height: 2, background: T.fg, top: open ? 19 : 24, transform: open ? "rotate(-45deg)" : "none", transition: "all .2s" }} />
        </button>
      </Container>

      {/* Mobile nav */}
      <div style={{ overflow: "hidden", maxHeight: open ? 560 : 0, transition: "max-height .3s ease-out", background: "#fff", borderBottom: open ? `2px solid ${T.fg}` : "none" }}>
        <Container style={{ padding: "8px 24px 22px" }}>
          {NAV.map((n, i) => (
            <Link key={n.to} href={n.to} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", borderBottom: `1px solid ${T.fg}`, padding: "16px 2px", fontSize: 15, fontWeight: pathname === n.to ? 700 : 500, letterSpacing: ".06em", textTransform: "uppercase", color: pathname === n.to ? T.accent : T.fg }}>
              {n.label}
              <span className="ol-mono" style={{ fontSize: 12, color: T.accent }}>0{i + 1}</span>
            </Link>
          ))}
          <Btn variant="coral" onClick={() => router.push("/book")} style={{ marginTop: 18, width: "100%" }}>Book a call <ArrowR /></Btn>
        </Container>
      </div>
      <style>{`@media(max-width:920px){.ol-dnav{display:none !important;}.ol-burg{display:block !important;}}`}</style>
    </header>
  );
}
