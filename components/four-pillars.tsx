"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Eye, Zap } from "lucide-react";
import { PillButton } from "@/components/ui/pill-button";
import Link from "next/link";

export function FourPillars() {
  const pillars = [
    {
      id: "lifestyle",
      title: "Lifestyle-Aligned Advisory",
      description:
        "Each recommendation fits your routine, family goals, and aesthetic—not just your budget. We curate options that resonate with how you want to live.",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      id: "diligence",
      title: "RERA-Aligned Diligence",
      description:
        "Every project is vetted for legal and regulatory clarity against RERA guidelines, securing your investment from the first signature.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      id: "transparency",
      title: "ROI & Risk Transparency",
      description:
        "You see the numbers behind the dream: entry price, absorption, yield, and exit liquidity. No black boxes, only clarity.",
      icon: <Eye className="w-8 h-8" />,
    },
    {
      id: "technology",
      title: "AI-Driven Property Matches",
      description:
        "Proprietary technology filters hundreds of projects to find the few perfect matches that meet your specific investment and living criteria.",
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-bold text-primary mb-6">
            From <span className="text-[#CBB27A]">Options to Certainty.</span>
          </h2>
          <p className="text-xl text-muted max-w-4xl mx-auto leading-relaxed">
            Celeste Abode acts as your decision partner, ensuring every property
            choice is informed, strategically aligned, and optimized for your
            future.
          </p>
        </motion.div>

        {/* Divider Line */}
        <div className="w-24 h-0.5 bg-[#CBB27A] mx-auto mb-16"></div>

        {/* Four Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="text-ink mb-6 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-ink leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#CBB27A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button - Centered */}
        <div className="mt-12 flex justify-center">
          <PillButton
            variant="outline"
            size="md"
            asChild
            className="border-[#CBB27A] text-black hover:text-[#CBB27A] hover:border-[#CBB27A] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Link href="/services" aria-label="View our comprehensive services">
              Explore Our Expertise
            </Link>
          </PillButton>
        </div>
      </div>
    </section>
  );
}
