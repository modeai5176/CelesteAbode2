"use client"

import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { BrandIntro } from "@/components/brand-intro"
import { StickyValuePillars } from "@/components/sticky-value-pillars"
import { ConversionBridge } from "@/components/conversion-bridge"
import { CelesteConsultingFramework } from "@/components/celeste-consulting-framework"
import { ValuePropositions } from "@/components/value-propositions"
import { BrandCarousel } from "@/components/brand-carousel"
import { VaultTeaser } from "@/components/vault-teaser"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IntentPayload } from "@/lib/analytics"
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchema } from "@/lib/structured-data"
import { HomepageServiceSchema, HomepageServicesListSchema, AggregateRatingSchema } from "@/lib/homepage-schema"

// Lazy load below-the-fold components to reduce initial JS bundle
const SegmentedEntry = dynamic(
  () => import("@/components/segmented-entry/SegmentedEntry").then(mod => ({ default: mod.SegmentedEntry })),
  { ssr: false, loading: () => <div className="min-h-[400px]" /> }
)

const TechnologySection = dynamic(
  () => import("@/components/technology-section").then(mod => ({ default: mod.TechnologySection })),
  { ssr: true }
)

const WhoWeServe = dynamic(
  () => import("@/components/who-we-serve").then(mod => ({ default: mod.WhoWeServe })),
  { ssr: true }
)

const WhereWeWork = dynamic(
  () => import("@/components/where-we-work").then(mod => ({ default: mod.WhereWeWork })),
  { ssr: false, loading: () => <div className="min-h-[600px]" /> }
)


const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then(mod => ({ default: mod.TestimonialsSection })),
  { ssr: false, loading: () => <div className="min-h-[400px]" /> }
)

const CTASection = dynamic(
  () => import("@/components/cta-section").then(mod => ({ default: mod.CTASection })),
  { ssr: true }
)

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
      <HomepageServiceSchema />
      <HomepageServicesListSchema />
      <AggregateRatingSchema />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />

          {/* Aesthetic Line Separator */}
          <div className="w-full flex justify-center py-8">
            <div className="w-100 h-0.25 bg-gradient-to-r from-transparent via-[#CBB27A] to-transparent"></div>
          </div>

          {/* Section 2: Brand Introduction */}
          <BrandIntro />
          
          {/* Aesthetic Line Separator */}
          <div className="w-full flex justify-center py-8">
            <div className="w-100 h-0.25 bg-gradient-to-r from-transparent via-[#CBB27A] to-transparent"></div>
          </div>
          
          {/* The Mark of Expertise: Our Impact & Results */}
          <ValuePropositions />

          {/* Aesthetic Line Separator */}
          <div className="w-full flex justify-center py-8">
            <div className="w-100 h-0.25 bg-gradient-to-r from-transparent via-[#CBB27A] to-transparent"></div>
          </div>

          {/* Section 3: Sticky Scroll Value Pillars */}
          <StickyValuePillars />

          {/* Aesthetic Line Separator */}
          <div className="w-full flex justify-center py-8">
            <div className="w-100 h-0.25 bg-gradient-to-r from-transparent via-[#CBB27A] to-transparent"></div>
          </div>

          {/* Vault Teaser - Source of Foresight */}
          <VaultTeaser />

          {/* Aesthetic Line Separator */}
          <div className="w-full flex justify-center py-8">
            <div className="w-100 h-0.25 bg-gradient-to-r from-transparent via-[#CBB27A] to-transparent"></div>
          </div>
          
          {/* Trusted partners, better outcomes */}
          <BrandCarousel />

          {/* Aesthetic Line Separator */}
          <div className="w-full flex justify-center py-8">
            <div className="w-100 h-0.25 bg-gradient-to-r from-transparent via-[#CBB27A] to-transparent"></div>
          </div>
          
          {/* The Celeste Consulting Framework */}
          <CelesteConsultingFramework />
          
          {/* Live, Invest, or Aspire. We make it real */}
          <SegmentedEntry 
            onSubmit={handleIntentSubmit}
            onWhatsApp={handleWhatsAppClick}
            defaultMicroMarkets={["Noida Expressway", "Yamuna Expressway", "Gaur City"]}
          />
          
          {/* Who We Serve */}
          <WhoWeServe />
          
          {/* Where We Work - Regional Expertise */}
          <WhereWeWork />
          
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
