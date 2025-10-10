import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"

export default function ReviewsPage() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      rating: 5,
      content: "Celeste Abode transformed our property search experience completely. Their team's understanding of our lifestyle requirements and investment goals was exceptional. They didn't just show us properties; they presented us with opportunities that perfectly aligned with our vision. The level of personalization and attention to detail was beyond anything we've experienced before."
    },
    {
      name: "Priya Sharma",
      role: "NRI Investor",
      rating: 5,
      content: "As an NRI, I was concerned about managing property investments from abroad. Celeste Abode made the entire process seamless and transparent. Their technology-driven approach combined with human expertise gave me confidence in every decision. They truly understand the unique challenges faced by international investors."
    },
    {
      name: "Amit Patel",
      role: "Tech Professional",
      rating: 5,
      content: "What impressed me most was their data-driven approach to property selection. They didn't rely on gut feelings; every recommendation was backed by comprehensive market analysis and future projections. Their insights helped me make informed decisions that have already started showing returns."
    },
    {
      name: "Sunita Verma",
      role: "Luxury Home Seeker",
      rating: 5,
      content: "Finding the perfect luxury property was a dream come true with Celeste Abode. Their curated portfolio featured only the finest developments, and their understanding of luxury living standards was impeccable. They didn't just sell us a property; they helped us find our dream lifestyle."
    },
    {
      name: "Vikram Singh",
      role: "Real Estate Investor",
      rating: 5,
      content: "The exclusive access to premium projects before public launch was a game-changer. We got the best units and pricing because of their strong relationships with leading developers. Their market intelligence and insider knowledge gave us a significant advantage in the market."
    },
    {
      name: "Meera Reddy",
      role: "Family Home Buyer",
      rating: 5,
      content: "Celeste Abode's end-to-end support made our property acquisition journey stress-free and enjoyable. From initial consultation to final possession, every step was handled with professionalism and care. They truly care about their clients' long-term satisfaction."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-bold text-primary mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real experiences from real clients who have transformed their lives through our services
            </p>
          </div>
        </Section>

        {/* Testimonials */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-semibold text-primary">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section className="bg-muted/30">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-muted-foreground mb-6 text-center">
              Experience the Celeste Abode difference for yourself
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
