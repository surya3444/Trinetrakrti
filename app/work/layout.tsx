import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Build",
  description: "Focused engineering capabilities — custom software, AI development, data, web and app — delivered by one team as one connected system.",
  alternates: { canonical: "/work" },
  openGraph: { title: "What We Build", description: "Focused engineering capabilities — custom software, AI development, data, web and app — delivered by one team as one connected system.", url: "/work" },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
