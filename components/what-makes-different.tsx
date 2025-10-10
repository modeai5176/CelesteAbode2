"use client"

import { motion } from "framer-motion"

export function WhatMakesDifferent() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-bold text-center mb-12 text-primary">What Makes <span className="text-[#CBB27A]">Celeste Abode</span> Different</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Timeless Craftsmanship */}
            <motion.div 
              className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="h4 text-foreground mb-3">Timeless Craftsmanship</h4>
              <p className="body-text text-muted-foreground">
                We curate properties defined by enduring beauty, architectural excellence, and lifestyle relevance.
              </p>
            </motion.div>

            {/* Personalized Luxury */}
            <motion.div 
              className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="h4 text-foreground mb-3">Personalized Luxury</h4>
              <p className="body-text text-muted-foreground">
                Every client experience is bespoke—crafted to reflect your unique identity and aspirations.
              </p>
            </motion.div>

            {/* Ethical Stewardship */}
            <motion.div 
              className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="h4 text-foreground mb-3">Ethical Stewardship</h4>
              <p className="body-text text-muted-foreground">
                We safeguard your interests with transparency, responsibility, and respect for your vision.
              </p>
            </motion.div>

            {/* Data-Driven Distinction */}
            <motion.div 
              className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="h4 text-foreground mb-3">Data-Driven Distinction</h4>
              <p className="body-text text-muted-foreground">
                Harnessing advanced intelligence to anticipate needs and deliver targeted, informed solutions.
              </p>
            </motion.div>

            {/* Sustainable Legacy */}
            <motion.div 
              className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4 className="h4 text-foreground mb-3">Sustainable Legacy</h4>
              <p className="body-text text-muted-foreground">
                Building value that transcends transactions—designed to inspire for decades.
              </p>
            </motion.div>

            {/* Human-Centric Innovation */}
            <motion.div 
              className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="h4 text-foreground mb-3">Human-Centric Innovation</h4>
              <p className="body-text text-muted-foreground">
                Where technology meets empathy to create connections beyond the closing table.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
