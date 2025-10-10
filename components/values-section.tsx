"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Star, Users, Award, CheckCircle, Zap } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Timeless Craftsmanship",
      oneLiner: "We believe in the enduring value of quality and attention to detail in every aspect of our service delivery.",
      support: "Our commitment to craftsmanship extends beyond property selection to every client interaction, ensuring that every detail is perfect and every experience is memorable."
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Personalized Luxury",
      oneLiner: "We curate experiences that reflect your unique lifestyle preferences and aspirations.",
      support: "Luxury is personal, and we understand that true luxury lies in the perfect alignment between your vision and our recommendations."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Ethical Stewardship",
      oneLiner: "We maintain the highest standards of integrity and transparency in all our dealings.",
      support: "Trust is the foundation of our relationships, and we earn it through consistent ethical behavior and complete transparency."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Data-Driven Distinction",
      oneLiner: "Our recommendations are backed by comprehensive market intelligence and analytical insights.",
      support: "We combine human expertise with cutting-edge technology to deliver insights that give you a competitive advantage in the market."
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Sustainable Legacy",
      oneLiner: "We focus on investments that create lasting value for future generations.",
      support: "Our approach considers not just immediate returns, but long-term sustainability and the legacy you want to create."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Human-Centric Innovation",
      oneLiner: "We use technology to enhance human connection, not replace it.",
      support: "Innovation serves humanity, and we ensure that every technological advancement makes our service more personal and effective."
    }
  ]

  return (
    <Section
      intro={{
        title: "Core Values – Premium Lifestyle Positioning",
        lead: "The principles that guide every decision and define our approach to luxury real estate"
      }}
    >
      {/* Values Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {values.map((value, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="text-secondary mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 text-center">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                {value.oneLiner}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Support Sentences in Multi-Column */}
      <div className="md:columns-2 gap-12 space-y-6">
        {values.map((value, index) => (
          <div key={index} className="break-inside-avoid">
            <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
            <p className="text-muted-foreground leading-relaxed">
              {value.support}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
