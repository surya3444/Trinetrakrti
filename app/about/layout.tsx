import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Trinetrakrti is a business systems studio. Our story, mission and the way we lead with understanding, not order-taking.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About", description: "Trinetrakrti is a business systems studio. Our story, mission and the way we lead with understanding, not order-taking.", url: "/about" },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
