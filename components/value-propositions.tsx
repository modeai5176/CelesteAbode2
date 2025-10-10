"use client"

import { motion } from "framer-motion"

export function ValuePropositions() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h1 
          className="heading-bold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#CBB27A]">Achievements & Impact</span>
        </motion.h1>
        
        {/* Statistics Grid - 2-1-2 Layout */}
        <div className="bg-muted/30 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16">
          {/* Statistics Grid - 2-1-2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Left Column - 2 Stats */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-primary mb-3 md:mb-4 tabular-nums">
                  5M+
                </div>
                <p className="body-text text-muted-foreground">
                  Sq.Ft of Area Sold
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-primary mb-3 md:mb-4 tabular-nums">
                  2500+
                </div>
                <p className="body-text text-muted-foreground">
                  Happy Investors
                </p>
              </div>
            </motion.div>

            {/* Center - Experience Number */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="text-8xl md:text-[10rem] lg:text-[14rem] font-semibold mb-4 md:mb-6 bg-clip-text text-transparent tabular-nums"
                style={{
                  backgroundImage: `url('/modern-luxury-apartment-building-architectural-pho.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text'
                }}
              >
                10
              </div>
              <p className="h3 text-foreground uppercase tracking-wide">
                Years of Experience
              </p>
            </motion.div>

            {/* Right Column - 2 Stats */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-primary mb-3 md:mb-4 tabular-nums">
                  50+
                </div>
                <p className="body-text text-muted-foreground">
                  Skilled Professionals
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-primary mb-3 md:mb-4 tabular-nums">
                  25+
                </div>
                <p className="body-text text-muted-foreground">
                  Proud Builder Associates
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
