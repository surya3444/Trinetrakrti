"use client";
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".ol-reveal:not(.is-in)")) as HTMLElement[];
    
    if (!("IntersectionObserver" in window)) { 
      els.forEach((e) => e.classList.add("is-in")); 
      return; 
    }

    const io = new IntersectionObserver((en) => en.forEach((x) => {
      if (x.isIntersecting) {
        const target = x.target as HTMLElement;
        target.style.animationDelay = `${target.getAttribute("data-delay") || 0}ms`; 
        target.classList.add("is-in"); 
        io.unobserve(target); 
      }
    }), { threshold: 0.12 });
    
    els.forEach((e) => io.observe(e));
    
    return () => io.disconnect();
  });
}