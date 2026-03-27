import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chicago Vacation Rentals & Corporate Housing | Dream Rentals",
  description: "Premium furnished apartments and corporate housing in Chicago. Luxury short-term stays in The Loop, Uptown, South Loop & more. Book with Dream Rentals today.",
  metadataBase: new URL("https://thedreamrentals.com"),
  openGraph: {
    title: "Dream Rentals — Chicago Luxury Stays",
    description: "94 premium furnished apartments across Chicago's finest neighborhoods.",
    url: "https://thedreamrentals.com",
    siteName: "Dream Rentals",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
