import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Our process: understand, design, build, automate, scale. How we turn a business problem into a working system.",
  alternates: { canonical: "/process" },
  openGraph: { title: "How It Works", description: "Our process: understand, design, build, automate, scale. How we turn a business problem into a working system.", url: "/process" },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
