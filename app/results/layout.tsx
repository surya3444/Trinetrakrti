import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results",
  description: "Proof, not promises — the measurable change clients feel: less manual work, faster launches, one system to run on.",
  alternates: { canonical: "/results" },
  openGraph: { title: "Results", description: "Proof, not promises — the measurable change clients feel: less manual work, faster launches, one system to run on.", url: "/results" },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
