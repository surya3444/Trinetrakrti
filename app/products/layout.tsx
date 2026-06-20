import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Standalone products, templates and SaaS tools engineered by Trinetrakrti and ready to deploy today.",
  alternates: { canonical: "/products" },
  openGraph: { title: "Our Products", description: "Standalone products, templates and SaaS tools engineered by Trinetrakrti and ready to deploy today.", url: "/products" },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
