import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/theme";

// Change Register #110 — robots + sitemap pointer.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${BRAND.url}/sitemap.xml`,
    host: BRAND.url,
  };
}
