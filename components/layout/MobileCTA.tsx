"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { T } from "@/lib/theme";
import { Btn, ArrowR } from "@/components/ui/Shared";

export function MobileCTA() {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname === "/book") return null;

  return (
    <div className="ol-mcta" style={{ display: "none", position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 60, padding: "12px 16px calc(12px + env(safe-area-inset-bottom))", background: "#fff", borderTop: `2px solid ${T.fg}` }}>
      <Btn variant="coral" onClick={() => router.push("/book")} style={{ width: "100%" }}>Book a call <ArrowR /></Btn>
      <style>{`@media(max-width:920px){.ol-mcta{display:block !important;}}`}</style>
    </div>
  );
}
