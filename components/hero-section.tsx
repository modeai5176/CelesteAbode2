"use client";

import Image from "next/image";
import { PillButton } from "@/components/ui/pill-button";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Load video after initial page load to improve LCP
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 2000); // Wait 2 seconds after page load

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Auto-play may fail, that's okay
      });
    }
  }, [shouldLoadVideo]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden relative"
        >
          {/* Full Container Video/Image */}
          <div className="relative h-[580px] lg:h-[620px]">
            {/* Image for Mobile */}
            <Image
              src="/propertyhero.avif"
              alt="Luxury real estate background"
              fill
              priority
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
              sizes="(max-width: 768px) 100vw, 0vw"
              quality={85}
              fetchPriority="high"
            />
            
            {/* Fallback image for Desktop (LCP optimization) - shown until video loads */}
            <Image
              src="/propertyhero.avif"
              alt="Luxury real estate background"
              fill
              priority
              loading="eager"
              className={`hidden md:block absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
                shouldLoadVideo ? 'opacity-0' : 'opacity-100'
              }`}
              sizes="(min-width: 768px) 100vw, 0vw"
              quality={85}
              fetchPriority="high"
            />
            
            {/* Video for Desktop - Lazy loaded after initial render */}
            {shouldLoadVideo && (
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="hidden md:block absolute inset-0 w-full h-full object-cover object-center md:object-cover md:object-bottom opacity-0 transition-opacity duration-1000"
                onLoadedData={(e) => {
                  const target = e.target as HTMLVideoElement;
                  target.classList.remove('opacity-0');
                  target.classList.add('opacity-100');
                }}
              >
                <source src="/HOMEHERO.mp4" type="video/mp4" />
              </video>
            )}

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Left Aligned Text Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="text-left text-[#FAFAF8] max-w-4xl px-4 ml-6 md:px-6 md:ml-8">
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight text-[#FAFAF8]"
                  style={{
                    textShadow: "0 1px 2px rgba(0,0,0,0.35)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <div className="block text-[#FAFAF8]">
                    From Masterpieces of Time To
                  </div>
                  <div className="block text-[#FAFAF8] mt-2">
                    Masterpieces of Living
                  </div>
                </h1>

                <p className="text-base md:text-lg text-[#CBB27A] mb-6 max-w-2xl">
                  Redefining luxury real estate consulting in India's premium
                  segment
                </p>

                <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                  <PillButton
                    variant="primary"
                    size="md"
                    className="text-sm px-4 py-3 md:px-7 bg-white text-[#2B3035] hover:bg-white/90 rounded-full w-fit"
                    asChild
                  >
                    <a href="/projects">Explore Projects</a>
                  </PillButton>
                  <PillButton
                    variant="outline"
                    size="md"
                    className="text-sm px-4 py-3 md:px-7 border border-white text-white hover:bg-white/20 rounded-full w-fit"
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
