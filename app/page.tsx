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

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <WhyDream />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
