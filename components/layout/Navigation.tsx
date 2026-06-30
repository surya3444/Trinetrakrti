"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { T, NAV } from "@/lib/theme";
import { Container, Btn, ArrowR } from "@/components/ui/Shared";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: scrolled ? "rgba(255,255,255,.85)" : "rgba(255,255,255,.7)", backdropFilter: "saturate(180%) blur(12px)", WebkitBackdropFilter: "saturate(180%) blur(12px)", borderBottom: `1px solid ${scrolled ? T.border : "transparent"}`, boxShadow: scrolled ? "0 4px 20px rgba(50,50,93,.06)" : "none", transition: "all .25s ease" }}>
      <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: scrolled ? 62 : 76, transition: "height .25s ease" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img style={{ width: scrolled ? "120px" : "146px", transition: "width .25s ease" }} src="/tot-new.png" alt="Trinetrakrti" />
        </Link>
        <nav className="ol-dnav" style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {NAV.slice(1).map((n) => {
            const a = pathname === n.to;
            return (
              <Link key={n.to} href={n.to} className="sw-navlink" style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-.01em", color: a ? T.accent : T.fg }}>
                <span>{n.label}</span>
              </Link>
            );
          })}
          <Btn variant="coral" onClick={() => router.push("/book")} style={{ padding: "10px 18px", minHeight: 0, fontSize: 14.5, background: T.maroonGradient }}>Contact us <ArrowR s={15} /></Btn>
        </nav>

        {/* Mobile burger */}
        <button className="ol-burg" onClick={() => setOpen((o) => !o)} aria-label="Menu" style={{ display: "none", background: "none", border: "none", width: 40, height: 40, position: "relative" }}>
          <span style={{ position: "absolute", left: 8, right: 8, height: 2, borderRadius: 2, background: T.fg, top: open ? 19 : 14, transform: open ? "rotate(45deg)" : "none", transition: "all .2s" }} />
          <span style={{ position: "absolute", left: 8, right: 8, height: 2, borderRadius: 2, background: T.fg, top: 19, opacity: open ? 0 : 1, transition: "all .2s" }} />
          <span style={{ position: "absolute", left: 8, right: 8, height: 2, borderRadius: 2, background: T.fg, top: open ? 19 : 24, transform: open ? "rotate(-45deg)" : "none", transition: "all .2s" }} />
        </button>
      </Container>

      {/* Mobile nav */}
      <div style={{ overflow: "hidden", maxHeight: open ? 580 : 0, transition: "max-height .3s ease-out", background: "#fff", borderBottom: open ? `1px solid ${T.border}` : "none" }}>
        <Container style={{ padding: "8px 24px 22px" }}>
          {NAV.map((n) => (
            <Link key={n.to} href={n.to} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", borderBottom: `1px solid ${T.borderSoft}`, padding: "16px 2px", fontSize: 16, fontWeight: pathname === n.to ? 600 : 500, color: pathname === n.to ? T.accent : T.fg }}>
              {n.label}
              <ArrowR s={15} />
            </Link>
          ))}
          <Btn variant="coral" onClick={() => router.push("/book")} style={{ marginTop: 18, width: "100%", background: T.maroonGradient }}>Contact us <ArrowR /></Btn>
        </Container>
      </div>
      <style>{`@media(max-width:920px){.ol-dnav{display:none !important;}.ol-burg{display:block !important;}}`}</style>
    </header>
  );
}
