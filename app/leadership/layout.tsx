import type { Metadata } from "next";

const description =
  "Meet the leadership at Trinetrakrti — visionary expertise and deep industry knowledge, committed to driving innovation and delivering exceptional value to our clients.";

export const metadata: Metadata = {
  title: "Leadership",
  description,
  alternates: { canonical: "/leadership" },
  openGraph: { title: "Leadership", description, url: "/leadership" },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
