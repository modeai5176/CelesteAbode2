"use client"

import { HeroSection } from "@/components/hero-section"
import { BrandEssay } from "@/components/brand-essay"
import { FoundingEthos } from "@/components/founding-ethos"
import { WhatMakesDifferent } from "@/components/what-makes-different"

import { KeyPillars } from "@/components/key-pillars"
import { AboutSection } from "@/components/about-section"
import { FourPillars } from "@/components/four-pillars"
import { ValuePropositions } from "@/components/value-propositions"
import { BrandCarousel } from "@/components/brand-carousel"
import { SegmentedEntry } from "@/components/segmented-entry/SegmentedEntry"
import { WhereWeWork } from "@/components/where-we-work"
import { PropertiesSection } from "@/components/properties-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IntentPayload } from "@/lib/analytics"

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
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />

        {/* Aesthetic Line Separator */}
        <div className="w-full flex justify-center py-8">
          <div className="w-100 h-0.25 bg-gradient-to-r from-transparent via-[#CBB27A] to-transparent"></div>
        </div>

        <BrandEssay />
        <FourPillars />
        <ValuePropositions />
        <BrandCarousel />
        <SegmentedEntry 
          onSubmit={handleIntentSubmit}
          onWhatsApp={handleWhatsAppClick}
          defaultMicroMarkets={["Noida Expressway", "Yamuna Expressway", "Gaur City"]}
        />
        <WhereWeWork />
        <PropertiesSection />
        {/* <WhatMakesDifferent /> */}
        {/* <FoundingEthos /> */}
        {/* <KeyPillars /> */}
        {/* <AboutSection /> */}
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
