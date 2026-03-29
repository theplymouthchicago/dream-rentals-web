import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { WhyDream } from "@/components/WhyDream";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Chicago Vacation Rentals & Corporate Housing | Dream Rentals",
  description: "125+ premium furnished apartments in Chicago. Short-term rentals, corporate housing & vacation stays in The Loop, River North, Uptown & more. Book direct and save.",
  alternates: { canonical: "https://www.thedreamrentals.com" },
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What neighborhoods in Chicago does Dream Rentals operate in?", "acceptedAnswer": { "@type": "Answer", "text": "Dream Rentals has 125+ properties across Chicago including The Loop, River North, South Loop, Uptown, Lincoln Park, Wicker Park, West Loop, and Streeterville." } },
    { "@type": "Question", "name": "What is the minimum stay at Dream Rentals?", "acceptedAnswer": { "@type": "Answer", "text": "Dream Rentals offers flexible stays from 1 night to 12+ months. Short-term vacation rentals, monthly corporate housing, and long-term furnished apartments are all available." } },
    { "@type": "Question", "name": "Are Dream Rentals properties fully furnished?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — every property includes full furniture, premium linens, a fully stocked kitchen, high-speed WiFi, in-unit washer/dryer, and 24/7 guest support." } },
    { "@type": "Question", "name": "How do I book a Dream Rentals property?", "acceptedAnswer": { "@type": "Answer", "text": "You can book directly at thedreamrentals.com/properties to check live availability and book instantly, or contact us at info@dreamchi.org for custom requests." } },
    { "@type": "Question", "name": "Does Dream Rentals offer corporate housing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Dream Rentals specializes in 30-day to 12-month corporate housing for business travelers, relocating professionals, and companies. Corporate billing and invoicing available." } },
    { "@type": "Question", "name": "Is Dream Rentals available on Airbnb?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, many Dream Rentals properties are listed on Airbnb and VRBO. However, booking directly at thedreamrentals.com ensures the best rates with no platform fees." } },
  ]
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <FeaturedProperties />
      <WhyDream />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
