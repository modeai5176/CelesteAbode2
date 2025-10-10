"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart } from "lucide-react"

export function KeyPillars() {
  const pillars = [
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Lifestyle-Centric Curation",
      description: "We curate properties that perfectly align with your lifestyle preferences, aspirations, and long-term vision, ensuring every recommendation enhances your quality of life and reflects your values."
    },
    {
      icon: <Target className="w-12 h-12 text-secondary" />,
      title: "Technology-Enabled Precision",
      description: "Our proprietary algorithms and market intelligence systems ensure every recommendation is backed by comprehensive data analysis, market trends, and future projections, eliminating guesswork and maximizing your investment potential."
    },
    {
      icon: <Heart className="w-12 h-12 text-secondary" />,
      title: "Human-Centered Consulting",
      description: "We believe in the power of human connection and personalized service, providing dedicated support throughout your journey with empathy, understanding, and unwavering commitment to your success."
    }
  ]

  return (
    <Section>
      <div className="text-center mb-12">
        <h1 className="heading-bold text-primary mb-6">
          Key Pillars of <span className="text-[#CBB27A]">Celeste Abode</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The foundation upon which we build exceptional real estate experiences
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
            <CardContent className="p-8">
              <div className="mb-6 flex justify-center">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}









