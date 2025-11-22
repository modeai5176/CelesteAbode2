"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import BlurText from "@/components/blur-text";

export function BrandIntro() {
  return (
    <Section className="pt-[102px] pb-12 md:pb-20 bg-background relative overflow-hidden">
      {/* Subtle architectural blueprint watermark background */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h100M50 0v100M0 0l100 100M0 100l100-100' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch"
        >
          {/* Left Column (40%) - Headline + Eyebrow */}
          <div className="lg:col-span-2 flex flex-col h-full">
            {/* Eyebrow Tag */}
            <p 
              className="text-sm md:text-base tracking-widest uppercase mb-6 text-left"
              style={{ 
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                color: '#CBB27A',
                letterSpacing: '0.15em'
              }}
            >
              THE CELESTE PHILOSOPHY
            </p>

            {/* Headline */}
            <BlurText
              text="The Convergence of Data Intelligence and Luxury Living."
              animateBy="words"
              direction="top"
              delay={50}
              stepDuration={0.2}
              threshold={0.2}
              rootMargin="-50px"
              as="h2"
              className="text-2xl md:text-3xl lg:text-4xl leading-tight text-left"
              style={{ 
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 900,
                color: '#0B1020',
                fontSize: 'clamp(1.875rem, 3.75vw, 2.75rem)',
                flex: '1 1 auto',
                margin: 0
              }}
            />
          </div>

          {/* Right Column (60%) - Body Text */}
          <div className="lg:col-span-3 flex flex-col h-full">
            <div style={{ height: 'calc(1.5rem + 1.25rem)' }}></div>
            <motion.p 
              className="text-lg md:text-xl leading-relaxed text-left"
              style={{ 
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                color: '#0B1020',
                maxWidth: '650px',
                flex: '1 1 auto'
              }}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: '-50px', amount: 0.2 }}
              transition={{ 
                duration: 0.5,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              Celeste Abode is the pinnacle of luxury real estate consulting in the NCR. We reject the transaction-first model to focus on data-backed investment security and lifestyle curation. Born from a fusion of global tech leadership and luxury market mastery, we replace guesswork with precision ensuring your acquisition in Noida, Gurugram, or the Yamuna Expressway is secured by proprietary analytics and ethical stewardship.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

