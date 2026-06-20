import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Real projects and case studies: Campus Verse, OAAS, Real-Estate ERP and Horticogen — systems we designed, built and shipped.",
  alternates: { canonical: "/our-work" },
  openGraph: { title: "Our Work", description: "Real projects and case studies: Campus Verse, OAAS, Real-Estate ERP and Horticogen — systems we designed, built and shipped.", url: "/our-work" },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
