import { Hero } from "@/components/Hero";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { WhyDream } from "@/components/WhyDream";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

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
