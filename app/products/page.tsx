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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
              {products.map((p, i) => (
                <a 
                  key={p.id} 
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="ol-frame ol-reveal" 
                  data-delay={i * 80} 
                  style={{ 
                    display: "flex",
                    flexDirection: "column",
                    background: T.panel, 
                    border: `1px solid ${T.line2}`, 
                    borderRadius: 20, 
                    padding: "24px", // Reduced padding slightly to make room for image
                    textDecoration: "none",
                    color: "inherit"
                  }} 
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = T.coral)} 
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = T.line2)}
                >
                  
                  {/* Product Cover Image */}
                  {p.imageUrl && (
                    <div style={{ width: "100%", height: 180, borderRadius: 12, overflow: "hidden", marginBottom: 24, border: `1px solid ${T.line}` }}>
                      <img src={p.imageUrl} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  )}

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <span className="ol-mono" style={{ fontSize: 11, color: T.blue, background: T.blueWash, padding: "5px 10px", borderRadius: 999 }}>
                      {p.tag}
                    </span>
                    <div style={{ color: T.coral }}><ArrowR s={20} /></div>
                  </div>
                  
                  <h3 style={{ fontSize: 22, margin: "0 0 12px", fontWeight: 700, letterSpacing: "-.02em" }}>
                    {p.title}
                  </h3>
                  
                  <p style={{ margin: "0 0 24px", color: T.mute, fontSize: 15.5, lineHeight: 1.6, flex: 1 }}>
                    {p.description}
                  </p>
                  
                  <div style={{ marginTop: "auto", paddingTop: 20, borderTop: `1px solid ${T.line}`, color: T.coral, fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                    Get Access <ArrowR s={14} />
                  </div>
                </a>
              ))}
            </div>
          )}
        </Container>
      </section>
      
      <FinalCTA />
    </main>
  );
}