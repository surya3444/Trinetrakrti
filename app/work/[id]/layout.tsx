import type { Metadata } from "next";
import { ALL_SERVICES } from "@/lib/theme";

export function generateStaticParams() {
  return ALL_SERVICES.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const service = ALL_SERVICES.find((s) => s.id === id);
  if (!service) return { title: "Service" };
  const description = service.long ?? service.d;
  return {
    title: service.t,
    description,
    alternates: { canonical: `/work/${service.id}` },
    openGraph: { title: service.t, description, url: `/work/${service.id}` },
  };
}

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
