import "./globals.css";
import { Navbar } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";

export const metadata = {
  title: "Only Logic — Business Systems Studio",
  description: "We build websites, apps, AI automations & internal tools — around your logic.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="ol-root">
          <Navbar />
          {children}
          <Footer />
          <MobileCTA />
          <div className="ol-spacer" style={{ height: 0 }} />
          <style>{`@media(max-width:900px){.ol-spacer{height:78px !important;}}`}</style>
        </div>
      </body>
    </html>
  );
}