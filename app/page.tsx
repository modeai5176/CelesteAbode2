"use client"

import { HeroSection } from "@/components/hero-section"
import { BrandEssay } from "@/components/brand-essay"
import { FourPillars } from "@/components/four-pillars"
import { CoreServices } from "@/components/core-services"
import { ValuePropositions } from "@/components/value-propositions"
import { BrandCarousel } from "@/components/brand-carousel"
import { SegmentedEntry } from "@/components/segmented-entry/SegmentedEntry"
import { TechnologySection } from "@/components/technology-section"
import { WhoWeServe } from "@/components/who-we-serve"
import { WhereWeWork } from "@/components/where-we-work"
import { Landscape2025 } from "@/components/landscape-2025"
import { PropertiesSection } from "@/components/properties-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IntentPayload } from "@/lib/analytics"
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchema } from "@/lib/structured-data"

export default function HomePage() {
  const handleIntentSubmit = (payload: IntentPayload) => {
    console.log('Intent submitted:', payload)
    // TODO: Send to backend/CRM
  }

  const handleWhatsAppClick = (payload: IntentPayload) => {
    console.log('WhatsApp clicked:', payload)
    // TODO: Open WhatsApp with pre-filled message
  }

  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <LocalBusinessSchema />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />

          {/* Aesthetic Line Separator */}
          <div className="w-full flex justify-center py-8">
            <div className="w-100 h-0.25 bg-gradient-to-r from-transparent via-[#CBB27A] to-transparent"></div>
          </div>

          {/* Welcome to a New Era of Real Estate */}
          <BrandEssay />
          
          {/* Why Choose Celeste Abode */}
          <FourPillars />
          
          {/* Our Core Services */}
          <CoreServices />
          
          {/* The Mark of Expertise: Our Impact & Results */}
          <ValuePropositions />
          
          {/* Trusted partners, better outcomes */}
          <BrandCarousel />
          
          {/* Live, Invest, or Aspire. We make it real */}
          <SegmentedEntry 
            onSubmit={handleIntentSubmit}
            onWhatsApp={handleWhatsAppClick}
            defaultMicroMarkets={["Noida Expressway", "Yamuna Expressway", "Gaur City"]}
          />
          
          {/* Technology That Redefines Real Estate */}
          <TechnologySection />
          
          {/* Who We Serve */}
          <WhoWeServe />
          
          {/* Where We Work - Regional Expertise */}
          <WhereWeWork />
          
          {/* India's Real Estate Landscape in 2025 */}
          <Landscape2025 />
          
          {/* Projects Section */}
          {/* <PropertiesSection /> */}
          
          {/* What Our Clients Say */}
          <TestimonialsSection />
          
          {/* Trusted by Thousands of Families */}
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}
