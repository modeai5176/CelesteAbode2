"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function BrandCarousel() {
  // Placeholder data for developer logos
  const developers = [
    { name: "Developer 1", placeholder: "/placeholder-logo-1.png" },
    { name: "Developer 2", placeholder: "/placeholder-logo-2.png" },
    { name: "Developer 3", placeholder: "/placeholder-logo-3.png" },
    { name: "Developer 4", placeholder: "/placeholder-logo-4.png" },
    { name: "Developer 5", placeholder: "/placeholder-logo-5.png" }
  ]

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-bold text-primary mb-6">
            Trusted <span className="text-[#CBB27A]">partners</span>, better outcomes
          </h1>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-8 md:gap-12 items-center"
            animate={{ 
              x: [0, -100 * developers.length]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set of logos */}
            {developers.map((developer, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="w-24 h-16 md:w-32 md:h-20 bg-muted/50 rounded-lg flex items-center justify-center border border-border/50">
                  <span className="text-xs text-muted-foreground font-medium">
                    {developer.name}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {developers.map((developer, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="w-24 h-16 md:w-32 md:h-20 bg-muted/50 rounded-lg flex items-center justify-center border border-border/50">
                  <span className="text-xs text-muted-foreground font-medium">
                    {developer.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
