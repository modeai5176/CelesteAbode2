"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"

export function MissionVision() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Mission Card */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Our Mission</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                To revolutionize luxury real estate consulting by combining cutting-edge technology with human-centered service delivery, ensuring every client finds not just a property, but a perfect match for their lifestyle aspirations and investment goals.
              </p>
              <p>
                We are committed to maintaining the highest standards of transparency, integrity, and professionalism in all our dealings, while providing exclusive access to premium real estate opportunities that are typically reserved for a select few.
              </p>
              <p>
                Our mission is to transform the property search experience from a transactional process into an immersive journey of discovery, where every recommendation is backed by comprehensive market intelligence and personalized lifestyle analysis.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Vision Card */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Our Vision</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                To become the most trusted and respected name in luxury real estate consulting, recognized for our innovative approach, unwavering commitment to client success, and ability to consistently deliver exceptional results that exceed expectations.
              </p>
              <p>
                We envision a future where technology and human expertise work in perfect harmony to create a new standard of real estate consulting, where every client interaction is meaningful, every recommendation is precise, and every outcome is transformative.
              </p>
              <p>
                Our vision extends beyond individual transactions to encompass the broader goal of elevating the entire luxury real estate industry, setting new benchmarks for service quality, client satisfaction, and professional excellence.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}









