"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { PillButton } from "@/components/ui/pill-button";
import {
  Star,
  Quote,
  Users,
  Award,
  TrendingUp,
  Shield,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ReviewsPage() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      rating: 5,
      content:
        "Celeste Abode transformed our property search experience completely. Their team's understanding of our lifestyle requirements and investment goals was exceptional. They didn't just show us properties; they presented us with opportunities that perfectly aligned with our vision. The level of personalization and attention to detail was beyond anything we've experienced before.",
      category: "Luxury Living",
      highlight: "Personalized Service",
    },
    {
      name: "Priya Sharma",
      role: "NRI Investor",
      rating: 5,
      content:
        "As an NRI, I was concerned about managing property investments from abroad. Celeste Abode made the entire process seamless and transparent. Their technology-driven approach combined with human expertise gave me confidence in every decision. They truly understand the unique challenges faced by international investors.",
      category: "NRI Investment",
      highlight: "Global Expertise",
    },
    {
      name: "Amit Patel",
      role: "Tech Professional",
      rating: 5,
      content:
        "What impressed me most was their data-driven approach to property selection. They didn't rely on gut feelings; every recommendation was backed by comprehensive market analysis and future projections. Their insights helped me make informed decisions that have already started showing returns.",
      category: "Smart Investment",
      highlight: "Data-Driven Results",
    },
    {
      name: "Sunita Verma",
      role: "Luxury Home Seeker",
      rating: 5,
      content:
        "Finding the perfect luxury property was a dream come true with Celeste Abode. Their curated portfolio featured only the finest developments, and their understanding of luxury living standards was impeccable. They didn't just sell us a property; they helped us find our dream lifestyle.",
      category: "Luxury Living",
      highlight: "Dream Lifestyle",
    },
    {
      name: "Vikram Singh",
      role: "Real Estate Investor",
      rating: 5,
      content:
        "The exclusive access to premium projects before public launch was a game-changer. We got the best units and pricing because of their strong relationships with leading developers. Their market intelligence and insider knowledge gave us a significant advantage in the market.",
      category: "Exclusive Access",
      highlight: "Market Advantage",
    },
    {
      name: "Meera Reddy",
      role: "Family Home Buyer",
      rating: 5,
      content:
        "Celeste Abode's end-to-end support made our property acquisition journey stress-free and enjoyable. From initial consultation to final possession, every step was handled with professionalism and care. They truly care about their clients' long-term satisfaction.",
      category: "Family Investment",
      highlight: "Stress-Free Journey",
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "98%", label: "Satisfaction Rate" },
    { icon: TrendingUp, value: "₹2.5Cr+", label: "Average ROI" },
    { icon: Shield, value: "100%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-0">
        {/* Hero Section */}
        <section className="pt-0 pb-8 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 min-h-[60vh] flex flex-col">
          <div className="flex-1 flex items-center justify-center pt-24">
            <div className="max-w-4xl mx-auto text-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">
                  Client <span className="text-[#CBB27A]">Success Stories</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-tight font-normal">
                  Real experiences from real clients who have transformed their
                  lives through our services
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Section className="py-16 bg-gradient-to-r from-[#CBB27A]/10 to-primary/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Testimonials Grid */}
        <Section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-bold text-primary mb-4">
                What Our <span className="text-[#CBB27A]">Clients Say</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Real stories from real people who found their perfect property
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 border-foreground/10 shadow-2xl shadow-black/20 h-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-3xl hover:shadow-[#CBB27A]/20 hover:border-[#CBB27A]/30 cursor-pointer group">
                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="flex justify-between items-start mb-6">
                        <Quote className="w-8 h-8 text-[#CBB27A]/30 group-hover:text-[#CBB27A]/60 transition-colors duration-300" />
                        <div className="bg-[#CBB27A]/10 px-3 py-1 rounded-full">
                          <span className="text-xs font-semibold text-[#CBB27A]">
                            {testimonial.category}
                          </span>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-[#CBB27A] fill-current"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Highlight */}
                      <div className="bg-gradient-to-r from-[#CBB27A]/10 to-primary/10 p-4 rounded-lg mb-6">
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-[#CBB27A]" />
                          <span className="text-sm font-semibold text-foreground">
                            {testimonial.highlight}
                          </span>
                        </div>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#CBB27A] rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-white">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Trust Indicators */}
        <Section className="py-16 bg-gradient-to-br from-[#CBB27A]/5 to-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-bold text-primary mb-4">
                Trusted by{" "}
                <span className="text-[#CBB27A]">Industry Leaders</span>
              </h2>
              <p className="text-xl text-muted-foreground text-center">
                Our clients include successful entrepreneurs, NRI investors, and
                luxury home seekers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Proven Results
                </h3>
                <p className="text-muted-foreground">
                  Our clients have achieved an average ROI of 25%+ on their
                  property investments
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  100% Success Rate
                </h3>
                <p className="text-muted-foreground">
                  Every client who has worked with us has successfully found
                  their perfect property
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Award-Winning Service
                </h3>
                <p className="text-muted-foreground">
                  Recognized for excellence in real estate consulting and client
                  satisfaction
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-16 md:py-20">
          <div className="bg-gradient-to-br from-primary/10 to-[#CBB27A]/20 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ready to Write Your{" "}
                <span className="text-[#CBB27A]">Success Story</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have found their perfect
                property with Celeste Abode
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <PillButton className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                    Start Your Journey
                  </PillButton>
                </a>
                <a href="tel:+91XXXXXXXXXX">
                  <PillButton
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
                  >
                    Schedule Consultation
                  </PillButton>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
