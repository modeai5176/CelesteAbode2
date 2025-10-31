"use client";

import Image from "next/image";
import { PillButton } from "@/components/ui/pill-button";
import { motion } from "framer-motion";

export function PhilosophyHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden relative"
        >
          {/* Full Container Image */}
          <div className="relative h-[580px] lg:h-[620px]">
            <Image
              src="/PHILOSOPHYHERO.avif"
              alt="Philosophy - The Morning Light, The View, The Peace You Seek"
              fill
              priority
              loading="eager"
              className="object-cover object-center md:object-cover md:object-[center_40%]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Left side vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            {/* Left Aligned Text Overlay */}
            <div className="absolute inset-0 flex items-end pb-16">
              <div className="text-left text-[#FAFAF8] max-w-4xl px-4 ml-6 md:px-6 md:ml-8">
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight text-[#FAFAF8]"
                  style={{
                    textShadow: "0 1px 2px rgba(0,0,0,0.35)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <div className="block text-[#FAFAF8]">
                    More Than Property -
                  </div>
                  <div className="block text-[#FAFAF8] mt-2">
                    It's <span className="text-[#CBB27A]">Personal</span>
                  </div>
                </h1>

                <p className="text-base md:text-lg text-[#CBB27A] mb-6 max-w-2xl">
                  Guiding Your Aspiration, Defining Your Investment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
