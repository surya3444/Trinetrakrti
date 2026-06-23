"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useReveal } from "@/hooks/useReveal";
import { T } from "@/lib/theme";
import { Container, ArrowR } from "@/components/ui/Shared";
import { PageHero, FinalCTA } from "@/components/sections/SharedSections";

interface Product {
  id: string;
  title: string;
  tag: string;
  description: string;
  link: string;
  imageUrl?: string;
  status?: "Live" | "Ongoing";
}

export default function ProductsPage() {
  useReveal();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[];
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const live = products.filter((p) => (p.status || "Live") === "Live");
  const ongoing = products.filter((p) => p.status === "Ongoing");

  const renderCard = (p: Product, i: number) => <ProductCard key={p.id} p={p} i={i} />;

  return (
    <main>
      <PageHero num="01" eyebrow="Products" title={<>Tools and templates,<br />ready to deploy.</>} sub="We don't just build custom software. Here are the standalone products, templates, and SaaS tools we've engineered for you to use right now." />

      <section style={{ padding: "72px 0 90px" }}>
        <Container>
          {loading ? (
            <div className="ol-mono" style={{ textAlign: "center", color: T.faint, padding: "40px 0", letterSpacing: ".1em" }}>Loading products...</div>
          ) : products.length === 0 ? (
            <div style={{ textAlign: "center", padding: "72px 20px", background: T.muted, border: `1px solid ${T.borderSoft}`, borderRadius: 24 }}>
              <h3 style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-.02em", color: T.fg, marginBottom: 8 }}>Coming soon</h3>
              <p style={{ color: T.mute, fontSize: 16 }}>We&apos;re polishing up some new products. Check back soon.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
              {live.length > 0 && (
                <div>
                  <ProductGroupHead label="Live now" sub="Available to use today." />
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>{live.map((p, i) => renderCard(p, i))}</div>
                </div>
              )}
              {ongoing.length > 0 && (
                <div>
                  <ProductGroupHead label="Ongoing" sub="In active development — coming soon." />
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>{ongoing.map((p, i) => renderCard(p, i))}</div>
                </div>
              )}
            </div>
          )}
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}

function ProductCard({ p, i }: { p: Product; i: number }) {
  const [h, setH] = useState(false);
  const isOngoing = p.status === "Ongoing";
  return (
    <a href={p.link} target="_blank" rel="noreferrer" className="ol-reveal ol-frame" data-delay={i * 80}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "flex", flexDirection: "column", background: "#fff", border: `1px solid ${T.border}`, borderRadius: T.radius, padding: "22px", textDecoration: "none", color: T.fg, boxShadow: h ? T.shadowFloat : T.shadowCard, transform: h ? "translateY(-4px)" : "none" }}>
      {p.imageUrl && (
        <div style={{ width: "100%", height: 180, overflow: "hidden", marginBottom: 22, borderRadius: 12, border: `1px solid ${T.border}` }}>
          <img src={p.imageUrl} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transform: h ? "scale(1.04)" : "none", transition: "transform .3s ease" }} />
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, gap: 10 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, fontWeight: 500, color: T.mute, background: T.muted, borderRadius: 999, padding: "5px 11px" }}>{p.tag}</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: isOngoing ? T.mute : T.accent, background: isOngoing ? T.muted : T.coralWash, borderRadius: 999, padding: "5px 11px", display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 7, height: 7, borderRadius: 7, background: isOngoing ? T.faint : T.accent }} />{isOngoing ? "Ongoing" : "Live"}</span>
        </div>
      </div>
      <h3 style={{ fontSize: 21, margin: "0 0 10px", fontWeight: 600, letterSpacing: "-.02em" }}>{p.title}</h3>
      <p style={{ margin: "0 0 22px", color: T.mute, fontSize: 15, lineHeight: 1.6, flex: 1 }}>{p.description}</p>
      <div style={{ marginTop: "auto", paddingTop: 18, borderTop: `1px solid ${T.border}`, color: T.accent, fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
        {isOngoing ? "In development" : "Get access"} <span style={{ display: "inline-flex", transform: h ? "translateX(4px)" : "none", transition: "transform .2s ease" }}><ArrowR s={15} /></span>
      </div>
    </a>
  );
}

function ProductGroupHead({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="ol-reveal" style={{ marginBottom: 24 }}>
      <div className="ol-mono" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: T.accent, letterSpacing: ".09em", fontWeight: 600 }}>
        <span style={{ width: 7, height: 7, borderRadius: 7, background: T.accent }} />{label}
      </div>
      <p style={{ margin: "10px 0 0", color: T.mute, fontSize: 16 }}>{sub}</p>
    </div>
  );
}
