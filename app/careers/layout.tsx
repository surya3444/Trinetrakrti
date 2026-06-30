import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Trinetrakrti. Open roles: Software Intern, UI/UX Designer, IoT Solutions Engineer and AR/VR Developer — build real products for real businesses.",
  alternates: { canonical: "/careers" },
  openGraph: { title: "Careers", description: "Join Trinetrakrti. Open roles: Software Intern, UI/UX Designer, IoT Solutions Engineer and AR/VR Developer — build real products for real businesses.", url: "/careers" },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
