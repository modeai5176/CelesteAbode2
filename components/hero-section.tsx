"use client";

import Image from "next/image";
import { PillButton } from "@/components/ui/pill-button";
import { motion } from "framer-motion";

export function HeroSection() {


  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background py-24 pt-32">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden relative"
        >
          {/* Full Container Image */}
          <div className="relative h-[500px] lg:h-[650px]">
            <Image
              src="/hero-.png"
              alt="Luxury real estate background"
              fill
              priority
              className="object-cover object-bottom"
              sizes="100vw"
              quality={85}
            />
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Left Aligned Text Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="text-left text-white max-w-4xl px-6 ml-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight text-white" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.35)', letterSpacing: '-0.01em' }}>
                  <div className="block text-white">
                    From Masterpieces of Time To
                  </div>
                  <div className="block text-white mt-2">
                    Masterpieces of Living
                  </div>
                </h1>

                <p className="text-base md:text-lg text-[#CBB27A] mb-6 max-w-2xl">
                  Redefining luxury real estate consulting in India's premium segment
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <PillButton
                    variant="primary"
                    size="md"
                    className="text-sm px-7 py-3 bg-white text-[#2B3035] hover:bg-white/90 rounded-full"
                    asChild
                  >
                    <a href="/properties">Explore Properties</a>
                  </PillButton>
                  <PillButton
                    variant="outline"
                    size="md"
                    className="text-sm px-7 py-3 border border-white text-white hover:bg-white/20 rounded-full"
                    asChild
                  >
                    <a href="/contact">Book Consultation</a>
                  </PillButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
