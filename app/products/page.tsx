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
  imageUrl?: string; // <-- Added Image URL
  status?: "Live" | "Ongoing"; // Live = available now, Ongoing = in development
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
        const fetchedProducts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Product[];
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

  const renderCard = (p: Product, i: number) => {
    const isOngoing = p.status === "Ongoing";
    const accent = isOngoing ? "#B7791F" : T.green;
    const accentWash = isOngoing ? "#FFF6E5" : "#E6F6EF";
    return (
      <a
        key={p.id}
        href={p.link}
        target="_blank"
        rel="noreferrer"
        className="ol-frame ol-reveal"
        data-delay={i * 80}
        style={{ display: "flex", flexDirection: "column", background: T.panel, border: `1px solid ${T.line2}`, borderRadius: 20, padding: "24px", textDecoration: "none", color: "inherit" }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = T.coral)}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = T.line2)}
      >
        {p.imageUrl && (
          <div style={{ width: "100%", height: 180, borderRadius: 12, overflow: "hidden", marginBottom: 24, border: `1px solid ${T.line}` }}>
            <img src={p.imageUrl} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, gap: 10 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span className="ol-mono" style={{ fontSize: 11, color: T.blue, background: T.blueWash, padding: "5px 10px", borderRadius: 999 }}>{p.tag}</span>
            <span className="ol-mono" style={{ fontSize: 11, color: accent, background: accentWash, padding: "5px 10px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: accent }} />{isOngoing ? "Ongoing" : "Live"}
            </span>
          </div>
          <div style={{ color: T.coral }}><ArrowR s={20} /></div>
        </div>

        <h3 style={{ fontSize: 22, margin: "0 0 12px", fontWeight: 700, letterSpacing: "-.02em" }}>{p.title}</h3>

        <p style={{ margin: "0 0 24px", color: T.mute, fontSize: 15.5, lineHeight: 1.6, flex: 1 }}>{p.description}</p>

        <div style={{ marginTop: "auto", paddingTop: 20, borderTop: `1px solid ${T.line}`, color: accent, fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
          {isOngoing ? "In development" : "Get Access"} <ArrowR s={14} />
        </div>
      </a>
    );
  };

  return (
    <main>
      <PageHero 
        eyebrow="Products" 
        title={<>Tools and templates<br />ready to deploy.</>} 
        sub="We don't just build custom software. Here are the standalone products, templates, and SaaS tools we've engineered for you to use right now." 
      />
      
      <section style={{ padding: "80px 0" }}>
        <Container>
          {loading ? (
            <div className="ol-mono" style={{ textAlign: "center", color: T.faint, padding: "40px 0" }}>
              Loading products...
            </div>
          ) : products.length === 0 ? (
            <div className="ol-frame" style={{ textAlign: "center", padding: "60px 20px", background: T.wash, border: `1px dashed ${T.line2}`, borderRadius: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: T.ink, marginBottom: 8 }}>Coming Soon</h3>
              <p style={{ color: T.mute, fontSize: 15 }}>We're polishing up some new products. Check back soon.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
              {live.length > 0 && (
                <div>
                  <ProductGroupHead label="Live now" sub="Available to use today." color={T.green} />
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
                    {live.map((p, i) => renderCard(p, i))}
                  </div>
                </div>
              )}

              {ongoing.length > 0 && (
                <div>
                  <ProductGroupHead label="Ongoing" sub="In active development — coming soon." color="#B7791F" />
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
                    {ongoing.map((p, i) => renderCard(p, i))}
                  </div>
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

function ProductGroupHead({ label, sub, color }: { label: string; sub: string; color: string }) {
  return (
    <div className="ol-reveal" style={{ marginBottom: 28 }}>
      <div className="ol-mono" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, color, textTransform: "uppercase", letterSpacing: ".12em", fontWeight: 600 }}>
        <span style={{ width: 7, height: 7, borderRadius: 999, background: color }} />{label}
      </div>
      <p style={{ margin: "8px 0 0", color: T.mute, fontSize: 15 }}>{sub}</p>
    </div>
  );
}