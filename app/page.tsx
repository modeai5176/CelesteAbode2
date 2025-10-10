import { HeroSection } from "@/components/hero-section"
import { BrandEssay } from "@/components/brand-essay"
import { FoundingEthos } from "@/components/founding-ethos"
import { WhatMakesDifferent } from "@/components/what-makes-different"

import { KeyPillars } from "@/components/key-pillars"
import { AboutSection } from "@/components/about-section"
import { ValuePropositions } from "@/components/value-propositions"
import { PropertiesSection } from "@/components/properties-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BrandEssay />
        <ValuePropositions />
        <PropertiesSection />
        <WhatMakesDifferent />
        <FoundingEthos />
        <KeyPillars />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
