import type { Metadata } from "next";
import { Hero } from "@/components/pages/homepage/hero";
import { Manifesto } from "@/components/pages/homepage/manifesto";
import { FeaturedProducts } from "@/components/pages/homepage/featured-products";
import { NewsletterSection } from "@/components/pages/homepage/newsletter-section";

export const metadata: Metadata = {
  title: "EDGE SPARK — The New Frequency",
  description:
    "A contemporary luxury clothing brand from Guntur, Andhra Pradesh, India. Sharp structure, quiet movement, and pieces built to stay in rotation.",
  metadataBase: new URL("https://edgespark.in"),
  openGraph: {
    title: "EDGE SPARK — The New Frequency",
    description:
      "A contemporary luxury clothing brand from Guntur, Andhra Pradesh, India.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDGE SPARK — The New Frequency",
    description:
      "A contemporary luxury clothing brand from Guntur, Andhra Pradesh, India.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FeaturedProducts />
      <NewsletterSection />
    </>
  );
}
