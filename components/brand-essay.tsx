"use client"

import { Section } from "@/components/ui/section"
import { ImageFigure } from "@/components/ui/image-figure"
import { PillButton } from "@/components/ui/pill-button"
import { Kicker } from "@/components/ui/kicker"
import { Lead } from "@/components/ui/lead"
import Link from "next/link"

export function BrandEssay() {
  return (
    <Section className="py-16 md:py-20">
      <div className="lg:grid lg:grid-cols-12 gap-8 md:gap-16">
        {/* Left Column - Media (Sticky on Desktop) */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32 flex justify-center" style={{ height: 'fit-content' }}>
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl">
              <ImageFigure
                src="/modern-luxury-apartment-building-architectural-pho.png"
                alt="Modern luxury apartment building architectural photography"
                width={700}
                height={600}
                className="aspect-[7/6] object-contain"
                imageClassName="object-center object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-7">
          {/* Section Header */}
          <div className="mb-8 vertical-rhythm">
            <Kicker>Who we are</Kicker>
            <h1 className="heading-bold text-primary mb-6">
              <span className="text-[#CBB27A]">Celeste Abode</span>
            </h1>
            <Lead>
              We are a premium real estate consulting firm that specializes in curating and presenting the finest luxury real estate projects that redefine modern living.
            </Lead>
          </div>
          
          {/* Copy Structure */}
          <div className="max-w-prose vertical-rhythm">
            {/* Curated Portfolio */}
            <div>
              <h4 className="h4 text-foreground mb-3">Curated Portfolio</h4>
              <p className="body-text text-muted-foreground">
                Our portfolio features handpicked developments from renowned developers, each offering unique value propositions and exceptional investment opportunities. We believe in complete transparency in all our dealings, with every project thoroughly vetted and all legal compliances clearly communicated.
              </p>
            </div>

            {/* Transparent Process */}
            <div>
              <h4 className="h4 text-foreground mb-3">Transparent Process</h4>
              <p className="body-text text-muted-foreground">
                We provide exclusive access to premium projects before public launch, comprehensive project analysis and investment guidance, and end-to-end support from selection to possession. Our trusted partnerships with leading developers ensure you get the best opportunities in the market.
              </p>
            </div>

            {/* Exclusive Access */}
            <div>
              <h4 className="h4 text-foreground mb-3">Exclusive Access</h4>
            </div>

            {/* Closing Statement */}
            <div>
              <p className="body-text text-muted-foreground">
                At Celeste Abode, we don't just sell properties; we curate lifestyles. Our personalized approach ensures that every client finds not just a home, but a perfect match for their aspirations, values, and future vision.
              </p>
            </div>
          </div>

          {/* Proof Strip */}
          <div className="mt-8 pt-6 border-t border-border">
            <ul className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <li>• Pre-launch access</li>
              <li>• Vetted compliance</li>
              <li>• Investment guidance</li>
            </ul>
          </div>

          {/* CTA Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <PillButton 
              variant="primary"
              size="md"
              asChild
            >
              <Link href="/philosophy" aria-label="Explore our philosophy and values">
                Explore Our Philosophy
              </Link>
            </PillButton>
            
            <PillButton 
              variant="outline"
              size="md"
              asChild
            >
              <Link href="/services" aria-label="View our comprehensive services">
                View Services
              </Link>
            </PillButton>
          </div>
          
        </div>
      </div>
    </Section>
  )
}
