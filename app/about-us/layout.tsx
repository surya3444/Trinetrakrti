import type { Metadata } from "next";

const description =
  "Trinetrakrti is a leading IT company building tailor-made, AI-driven digital solutions — from startups with bold ideas to enterprises navigating transformation.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about-us" },
  openGraph: { title: "About Us", description, url: "/about-us" },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
