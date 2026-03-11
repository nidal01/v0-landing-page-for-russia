import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CollectionsSection } from "@/components/collections-section"
import { BenefitsSection } from "@/components/benefits-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CollectionsSection />
      <BenefitsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
