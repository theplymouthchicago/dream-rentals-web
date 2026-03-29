import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const BASE_URL = "https://www.thedreamrentals.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Chicago Vacation Rentals & Corporate Housing | Dream Rentals",
    template: "%s | Dream Rentals Chicago",
  },
  description: "125+ premium furnished apartments in Chicago. Luxury short-term rentals, corporate housing & vacation stays in The Loop, Uptown, River North & more. Book direct and save.",
  keywords: [
    "Chicago vacation rentals",
    "Chicago short term rentals",
    "Chicago furnished apartments",
    "Chicago corporate housing",
    "Chicago Airbnb alternative",
    "Chicago temporary housing",
    "luxury apartments Chicago",
    "furnished apartments Chicago Loop",
    "Chicago group rentals",
    "Chicago extended stay",
    "Dream Rentals Chicago",
    "Chicago bachelorette party rental",
    "Chicago family vacation rental",
  ],
  authors: [{ name: "Dream Rentals", url: BASE_URL }],
  creator: "Dream Rentals",
  publisher: "Dream Rentals",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Chicago Vacation Rentals & Corporate Housing | Dream Rentals",
    description: "125+ premium furnished apartments in Chicago. Luxury short-term rentals and corporate housing. Book direct.",
    url: BASE_URL,
    siteName: "Dream Rentals",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Dream Rentals Chicago" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicago Vacation Rentals & Corporate Housing | Dream Rentals",
    description: "125+ premium furnished apartments in Chicago. Book direct.",
    images: ["/og-image.jpg"],
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Dream Rentals",
      description: "Premium furnished apartments and corporate housing across Chicago. 125+ properties in The Loop, Uptown, River North, South Loop, and beyond.",
      url: BASE_URL,
      telephone: "+13124710454",
      email: "info@dreamchi.org",
      address: {
        "@type": "PostalAddress",
        streetAddress: "323 E Wacker Dr",
        addressLocality: "Chicago",
        addressRegion: "IL",
        postalCode: "60601",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 41.8864, longitude: -87.619 },
      image: `${BASE_URL}/og-image.jpg`,
      sameAs: [
        "https://www.airbnb.com",
        "https://www.vrbo.com",
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Chicago Furnished Apartments",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Accommodation", name: "Short-Term Furnished Apartment", description: "Fully furnished apartments for short-term stays in Chicago" } },
          { "@type": "Offer", itemOffered: { "@type": "Accommodation", name: "Corporate Housing", description: "Monthly furnished apartments for business travelers and relocating professionals" } },
          { "@type": "Offer", itemOffered: { "@type": "Accommodation", name: "Vacation Rental", description: "Premium vacation rentals for families, groups, and events in Chicago" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Dream Rentals",
      publisher: { "@id": `${BASE_URL}/#business` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/properties?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Google Analytics placeholder — add GA4 measurement ID when ready */}
      </body>
    </html>
  );
}
