"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PillButton } from "@/components/ui/pill-button";
import { ImageFigure } from "@/components/ui/image-figure";
import { motion } from "framer-motion";
import { Scale, Heart, Star, Rocket, Building2, Eye } from "lucide-react";

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="pt-0 pb-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-6xl mx-auto text-center pt-32">
            <h1 className="text-5xl md:text-6xl text-foreground mb-4">
              Our <span className="text-primary">Philosophy</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A deep dive into the principles, values, and beliefs that drive
              everything we do at Celeste Abode
            </p>
          </div>
        </section>

        {/* Core Philosophy */}
        <Section className="py-16 md:py-20">
          <div className="lg:grid lg:grid-cols-12 gap-8 md:gap-16">
            {/* Left Column - Media */}
            <div className="lg:col-span-5">
              <div
                className="lg:sticky lg:top-32 flex justify-center"
                style={{ height: "fit-content" }}
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl w-[28rem] h-[450px] bg-muted">
                  <img
                    src="/luxury-modern-apartment.png"
                    alt="Luxury modern apartment representing our philosophy of thoughtful design and attention to detail"
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-7">
              <div className="mb-8 vertical-rhythm">
                <h1 className="heading-bold text-primary mb-6">
                  Beyond Transactions, Into Transformations
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We believe that real estate is not just about buying and
                  selling properties—it's about crafting the foundation for your
                  life's most meaningful moments.
                </p>
              </div>

              <div className="max-w-prose vertical-rhythm">
                <div>
                  <h4 className="h4 text-foreground mb-3">
                    The Art of Curation
                  </h4>
                  <p className="body-text text-muted-foreground">
                    Like a master curator in a world-class museum, we don't
                    simply present options—we carefully select and arrange
                    experiences that resonate with your deepest aspirations.
                    Every property in our portfolio is chosen not just for its
                    market value, but for its potential to enhance your life
                    story.
                  </p>
                </div>

                <div>
                  <h4 className="h4 text-foreground mb-3">
                    Technology as a Bridge
                  </h4>
                  <p className="body-text text-muted-foreground">
                    We see technology not as a replacement for human connection,
                    but as a powerful bridge that brings us closer to
                    understanding your unique needs. Our algorithms don't make
                    decisions—they illuminate possibilities that our human
                    expertise can then interpret and personalize.
                  </p>
                </div>

                <div>
                  <h4 className="h4 text-foreground mb-3">The Long View</h4>
                  <p className="body-text text-muted-foreground">
                    While others focus on closing deals, we focus on opening
                    doors—to new neighborhoods, new communities, and new
                    chapters in your life. Our relationship with you begins with
                    a handshake and continues through every milestone,
                    celebration, and new beginning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Values in Action */}
        <Section className="bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="heading-bold text-primary mb-6">
                Values in Action
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These aren't just words on a wall—they're the principles that
                guide every interaction, every recommendation, and every
                decision we make on your behalf.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Integrity First */}
              <motion.div
                className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h4 text-foreground mb-4">Integrity First</h3>
                <p className="body-text text-muted-foreground">
                  We believe that trust is earned through consistent actions,
                  not just promises. Every piece of information we share is
                  verified, every recommendation is transparent, and every
                  commitment is honored.
                </p>
              </motion.div>

              {/* Empathy-Driven */}
              <motion.div
                className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="h4 text-foreground mb-4">Empathy-Driven</h3>
                <p className="body-text text-muted-foreground">
                  We understand that behind every property search is a person
                  with dreams, concerns, and aspirations. Our approach is built
                  on listening first, understanding deeply, and responding with
                  genuine care.
                </p>
              </motion.div>

              {/* Excellence Obsessed */}
              <motion.div
                className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h4 text-foreground mb-4">Excellence Obsessed</h3>
                <p className="body-text text-muted-foreground">
                  Good enough is never good enough. We continuously refine our
                  processes, expand our knowledge, and elevate our service to
                  ensure that every client experience exceeds expectations.
                </p>
              </motion.div>

              {/* Innovation Minded */}
              <motion.div
                className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="h4 text-foreground mb-4">Innovation Minded</h3>
                <p className="body-text text-muted-foreground">
                  We embrace new technologies and methodologies not for their
                  novelty, but for their ability to serve you better. Innovation
                  is our tool, not our goal.
                </p>
              </motion.div>

              {/* Community Focused */}
              <motion.div
                className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h4 text-foreground mb-4">Community Focused</h3>
                <p className="body-text text-muted-foreground">
                  We understand that a home is more than walls and windows—it's
                  your connection to a community. We help you find not just a
                  property, but your place in a neighborhood.
                </p>
              </motion.div>

              {/* Future Forward */}
              <motion.div
                className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="h4 text-foreground mb-4">Future Forward</h3>
                <p className="body-text text-muted-foreground">
                  We don't just consider your needs today—we anticipate how your
                  life might evolve and ensure your investment grows with you,
                  not against you.
                </p>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* The Celeste Way */}
        <Section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-bold text-primary mb-8">
              The Celeste Way
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Our philosophy comes to life through a distinctive approach that
              combines the best of human intuition with the power of modern
              technology.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.div
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="h4 text-foreground mb-2">Listen Deeply</h4>
                    <p className="body-text text-muted-foreground">
                      We begin every relationship by understanding not just what
                      you want, but why you want it. Your motivations, concerns,
                      and aspirations become the foundation of our approach.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="h4 text-foreground mb-2">
                      Analyze Thoroughly
                    </h4>
                    <p className="body-text text-muted-foreground">
                      Our technology scans thousands of data points while our
                      expertise interprets market trends, developer credibility,
                      and future potential to present you with informed options.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="h4 text-foreground mb-2">
                      Present Thoughtfully
                    </h4>
                    <p className="body-text text-muted-foreground">
                      We don't overwhelm you with options. Instead, we present a
                      carefully curated selection with clear rationale, helping
                      you make confident decisions.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-8">
                <motion.div
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="h4 text-foreground mb-2">
                      Support Continuously
                    </h4>
                    <p className="body-text text-muted-foreground">
                      Our relationship doesn't end at closing. We're here for
                      the long term, supporting you through possession, setup,
                      and any future real estate needs.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="h4 text-foreground mb-2">
                      Evolve Constantly
                    </h4>
                    <p className="body-text text-muted-foreground">
                      We continuously refine our approach based on market
                      changes, client feedback, and emerging technologies to
                      ensure we always deliver the best possible service.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section className="bg-card/80 text-foreground">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Experience Philosophy in Action
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to see how our philosophy translates into exceptional
              results for your real estate journey?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PillButton
                variant="outline"
                size="md"
                className="bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                asChild
              >
                <a href="/contact">Start Your Journey</a>
              </PillButton>
              <PillButton
                variant="outline"
                size="md"
                className="bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                asChild
              >
                <a href="/services">Explore Services</a>
              </PillButton>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
