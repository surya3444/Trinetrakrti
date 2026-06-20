import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call",
  description: "Book a no-deck, no-obligation call. Tell us the problem and you'll leave knowing exactly what to build next.",
  alternates: { canonical: "/book" },
  openGraph: { title: "Book a Call", description: "Book a no-deck, no-obligation call. Tell us the problem and you'll leave knowing exactly what to build next.", url: "/book" },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
