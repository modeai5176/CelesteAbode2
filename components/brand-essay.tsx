"use client";

import { Section } from "@/components/ui/section";
import { ImageFigure } from "@/components/ui/image-figure";
import { PillButton } from "@/components/ui/pill-button";
import { Kicker } from "@/components/ui/kicker";
import { Lead } from "@/components/ui/lead";
import Link from "next/link";

export function BrandEssay() {
  return (
    <Section className="py-16 md:py-20">
      <div className="lg:grid lg:grid-cols-12 gap-8 md:gap-16">
        {/* Left Column - Content */}
        <div className="lg:col-span-7">
          {/* Section Header */}
          <div className="mb-8 vertical-rhythm">
            <Kicker>Who we are</Kicker>
            <h1 className="heading-bold text-primary mb-6">
              <span className="text-[#CBB27A]">Celeste Abode</span>
            </h1>
            <Lead>
              Welcome to Celeste Abode, a new era of real estate consulting in
              India where technology meets trust and every home feels destined.
              We transform property journeys into masterpieces of living by
              merging data-backed advisory, emotional understanding, and
              end-to-end diligence.
            </Lead>
          </div>

          {/* Copy Structure */}
          <div className="max-w-prose vertical-rhythm">
            {/* Why We Exist */}
            <div>
              <h4 className="h4 text-foreground mb-3">Why We Exist</h4>
              <p className="body-text text-muted-foreground">
                Real estate was never meant to be a race through listings. Our
                mission is to bring clarity and confidence to every decision.
                Celeste Abode replaces generic brokering with true consulting —
                curating lifestyle-aligned homes that fit your identity and
                investment vision.
              </p>
            </div>

            {/* Our Approach */}
            <div>
              <p className="body-text text-muted-foreground">
                We help you see beyond square feet to ROI, beyond projects to
                possibility, and beyond transactions to transformation.
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
              className="hover:text-[#CBB27A] transition-all duration-300"
            >
              <Link
                href="/philosophy"
                aria-label="Explore our philosophy and values"
              >
                Explore Our Philosophy
              </Link>
            </PillButton>
          </div>
        </div>

        {/* Right Column - Media (Sticky on Desktop) */}
        <div className="lg:col-span-5">
          <div
            className="lg:sticky lg:top-32 flex justify-center"
            style={{ height: "fit-content" }}
          >
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
      </div>
    </Section>
  );
}
