"use client";
import React, { useEffect, useState } from "react";
import { BRAND } from "@/lib/theme";

// Floating WhatsApp click-to-chat button, fixed bottom-right on every page.
export function WhatsAppFAB() {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  // pop in after a beat so it doesn't fight the hero on first paint
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 600);
    return () => clearTimeout(t);
  }, []);

  const href = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`;

  return (
    <a
      className="wa-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 70,
        display: "inline-flex",
        alignItems: "center",
        gap: 0,
        height: 58,
        padding: 0,
        borderRadius: 999,
        background: "linear-gradient(180deg, #2EE36A 0%, #25D366 100%)",
        color: "#fff",
        overflow: "hidden",
        transform: show ? "scale(1)" : "scale(0)",
        opacity: show ? 1 : 0,
        animation: show ? "st-wa-pulse 2.6s ease-out infinite" : "none",
        transition: "transform .25s cubic-bezier(.16,.84,.44,1), opacity .25s ease",
      }}
    >
      <span style={{ width: 58, height: 58, display: "grid", placeItems: "center", flexShrink: 0 }}>
        <svg width="30" height="30" viewBox="0 0 32 32" fill="#fff" aria-hidden>
          <path d="M16.04 3.2c-7.06 0-12.8 5.73-12.8 12.79 0 2.25.59 4.45 1.71 6.39L3.2 28.8l6.6-1.73a12.78 12.78 0 0 0 6.24 1.59h.01c7.05 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.05-3.61Zm0 23.27h-.01a10.6 10.6 0 0 1-5.41-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.6 10.6 0 0 1-1.62-5.64c0-5.86 4.77-10.62 10.63-10.62 2.84 0 5.5 1.11 7.51 3.12a10.55 10.55 0 0 1 3.11 7.52c0 5.86-4.77 10.62-10.63 10.62Zm5.83-7.95c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.53-.71-.54l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.43 5.45 4.81.76.33 1.35.52 1.82.67.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </span>
      <span
        style={{
          maxWidth: hover ? 180 : 0,
          paddingRight: hover ? 22 : 0,
          fontSize: 15,
          fontWeight: 600,
          whiteSpace: "nowrap",
          overflow: "hidden",
          transition: "max-width .3s cubic-bezier(.16,.84,.44,1), padding-right .3s ease",
        }}
      >
        Chat with us
      </span>
    </a>
  );
}
