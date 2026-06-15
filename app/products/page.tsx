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

      <section style={{ padding: "44px 0 80px" }}>
        <Container>
          {loading ? (
            <div className="ol-mono" style={{ textAlign: "center", color: T.faint, padding: "40px 0", letterSpacing: ".1em" }}>Loading products...</div>
          ) : products.length === 0 ? (
            <div className="sw-diagonal" style={{ textAlign: "center", padding: "60px 20px", border: `2px solid ${T.fg}` }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: T.fg, marginBottom: 8, textTransform: "uppercase" }}>Coming Soon</h3>
              <p style={{ color: T.mute, fontSize: 15 }}>We&apos;re polishing up some new products. Check back soon.</p>
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
    <a href={p.link} target="_blank" rel="noreferrer" className="ol-reveal" data-delay={i * 80}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "flex", flexDirection: "column", background: "#fff", border: `2px solid ${T.fg}`, padding: "24px", textDecoration: "none", color: T.fg, transition: "border-color .15s" }}>
      {p.imageUrl && (
        <div style={{ width: "100%", height: 180, overflow: "hidden", marginBottom: 22, border: `2px solid ${T.fg}` }}>
          <img src={p.imageUrl} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: h ? "none" : "grayscale(100%)", transition: "filter .2s" }} />
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18, gap: 10 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span className="ol-mono" style={{ fontSize: 10.5, color: "#fff", background: T.fg, padding: "5px 9px", letterSpacing: ".06em" }}>{p.tag}</span>
          <span className="ol-mono" style={{ fontSize: 10.5, color: isOngoing ? T.fg : "#fff", background: isOngoing ? "#fff" : T.accent, border: `2px solid ${isOngoing ? T.fg : T.accent}`, padding: "3px 9px", letterSpacing: ".06em" }}>{isOngoing ? "Ongoing" : "Live"}</span>
        </div>
        <div style={{ color: T.accent }}><ArrowR s={20} /></div>
      </div>
      <h3 style={{ fontSize: 21, margin: "0 0 12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-.02em" }}>{p.title}</h3>
      <p style={{ margin: "0 0 22px", color: T.mute, fontSize: 15, lineHeight: 1.6, flex: 1 }}>{p.description}</p>
      <div style={{ marginTop: "auto", paddingTop: 18, borderTop: `2px solid ${T.fg}`, color: T.accent, fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 8, textTransform: "uppercase", letterSpacing: ".06em" }}>
        {isOngoing ? "In development" : "Get Access"} <ArrowR s={14} />
      </div>
    </a>
  );
}

function ProductGroupHead({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="ol-reveal" style={{ marginBottom: 24, borderBottom: `2px solid ${T.fg}`, paddingBottom: 14 }}>
      <div className="ol-mono" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: T.accent, letterSpacing: ".14em", fontWeight: 700 }}>
        <span style={{ width: 8, height: 8, background: T.accent }} />{label}
      </div>
      <p style={{ margin: "8px 0 0", color: T.mute, fontSize: 15 }}>{sub}</p>
    </div>
  );
}
