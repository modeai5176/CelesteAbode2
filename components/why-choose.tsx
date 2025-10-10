"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Globe, Award, Zap } from "lucide-react"

export function WhyChoose() {
  const highlights = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Strategic Personalization",
      bullets: [
        "Every recommendation is tailored to your specific lifestyle preferences and investment goals",
        "Our algorithms learn from your preferences to improve future suggestions",
        "Personalized market analysis based on your risk tolerance and timeline",
        "Customized property tours that focus on features most relevant to you"
      ]
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Global Perspective, Local Mastery",
      bullets: [
        "International market insights combined with deep local expertise",
        "Understanding of global real estate trends and their local impact",
        "Network of international partners for cross-border investments",
        "Local market knowledge that gives you insider advantages"
      ]
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "White-Glove Service",
      bullets: [
        "Dedicated relationship manager for every client",
        "24/7 availability for urgent queries and support",
        "Luxury-level attention to detail in every interaction",
        "Concierge-style service that anticipates your needs"
      ]
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Future-Ready Advisory",
      bullets: [
        "Forward-looking analysis that considers emerging market trends",
        "Technology integration that keeps you ahead of the curve",
        "Sustainable investment strategies for long-term value",
        "Innovation-focused approach to real estate consulting"
      ]
    }
  ]

  return (
    <Section
      intro={{
        title: "Why Choose Celeste Abode",
        lead: "Four compelling reasons that make us the preferred choice for luxury real estate"
      }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {highlights.map((highlight, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-secondary">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {highlight.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {highlight.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}









