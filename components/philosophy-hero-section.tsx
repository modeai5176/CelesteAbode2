"use client";

import Image from "next/image";
import { PillButton } from "@/components/ui/pill-button";
import { motion } from "framer-motion";

export function PhilosophyHeroSection() {
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
              src="/philosophy image2.png"
              alt="Philosophy - The Morning Light, The View, The Peace You Seek"
              fill
              priority
              className="object-cover object-center md:object-cover md:object-bottom"
              sizes="100vw"
              quality={85}
            />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Left Aligned Text Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="text-left text-white max-w-4xl px-4 ml-6 md:px-6 md:ml-8">
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight text-white"
                  style={{
                    textShadow: "0 1px 2px rgba(0,0,0,0.35)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <div className="block text-white">
                    More Than Property - It's{" "}
                    <span className="text-[#CBB27A]">Personal</span>
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
