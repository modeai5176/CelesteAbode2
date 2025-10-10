"use client";

import { Section } from "@/components/ui/section";
import { PillButton } from "@/components/ui/pill-button";
import { Phone, Mail } from "lucide-react";

export function CTASection() {
  // EDIT: changed bright gold gradient to dark card background + gold accent for premium look
  return (
    <Section className="bg-card/80 text-foreground">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8" style={{ fontFamily: 'Satoshi, system-ui, sans-serif', fontStyle: 'normal' }}>
          Ready to find your masterpiece?
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
          <PillButton
            variant="outline"
            size="md"
            className="bg-primary text-primary-foreground border-primary hover:bg-primary/90"
            asChild
          >
            <a href="/contact">Book a Consultation</a>
          </PillButton>
        </div>

        {/* Inline Contact Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <a
            href="tel:+919818735258"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+91 9818735258</span>
          </a>
          <a
            href={`mailto:${
              process.env.NEXT_PUBLIC_APP_EMAIL || "celesteabode@gmail.com"
            }`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>
              {process.env.NEXT_PUBLIC_APP_EMAIL || "celesteabode@gmail.com"}
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
}
