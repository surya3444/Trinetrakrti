import type { MetadataRoute } from "next";
import { BRAND, ALL_SERVICES } from "@/lib/theme";

// Change Register #110 — XML sitemap. Static marketing routes; product/case-study
// detail routes get added here as those pages are built (Phase 3).
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/work", priority: 0.9, changeFrequency: "monthly" },
  { path: "/our-work", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products", priority: 0.8, changeFrequency: "weekly" },
  { path: "/results", priority: 0.8, changeFrequency: "monthly" },
  { path: "/process", priority: 0.6, changeFrequency: "yearly" },
  { path: "/pricing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/careers", priority: 0.6, changeFrequency: "monthly" },
  { path: "/book", priority: 0.9, changeFrequency: "yearly" },
  ...ALL_SERVICES.map((s) => ({ path: `/work/${s.id}`, priority: 0.7, changeFrequency: "monthly" as const })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${BRAND.url}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
