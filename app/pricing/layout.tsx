import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent, outcome-based engagement options. Pick what you need, or scope the right mix on a call.",
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Pricing", description: "Transparent, outcome-based engagement options. Pick what you need, or scope the right mix on a call.", url: "/pricing" },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
