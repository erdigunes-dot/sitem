import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { FeaturedSection } from "@/components/featured-section"
import { NeighborhoodsSection } from "@/components/neighborhoods-section"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <NeighborhoodsSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
