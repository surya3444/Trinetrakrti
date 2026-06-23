import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { BRAND } from "@/lib/theme";

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: BRAND.lockup,
    template: `%s — ${BRAND.name}`,
  },
  description: BRAND.description,
  applicationName: BRAND.name,
  alternates: { canonical: "/" },
  keywords: [
    "AI automation",
    "custom software development",
    "data engineering",
    "web development",
    "internal tools",
    "business systems studio",
  ],
  openGraph: {
    type: "website",
    siteName: BRAND.name,
    title: BRAND.lockup,
    description: BRAND.description,
    url: BRAND.url,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.lockup,
    description: BRAND.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// schema.org structured data (Change Register #107) — Organization + WebSite.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND.name,
  url: BRAND.url,
  slogan: BRAND.tagline,
  description: BRAND.description,
  logo: `${BRAND.url}/logo.png`,
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BRAND.name,
  url: BRAND.url,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <div className="ol-root">
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFAB />
          <MobileCTA />
          <div className="ol-spacer" style={{ height: 0 }} />
          <style>{`@media(max-width:900px){.ol-spacer{height:78px !important;}}`}</style>
        </div>
      </body>
    </html>
  );
}
