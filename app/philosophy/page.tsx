"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PillButton } from "@/components/ui/pill-button";
import { Button } from "@/components/ui/button";
import { ImageFigure } from "@/components/ui/image-figure";
import { PhilosophyHeroSection } from "@/components/philosophy-hero-section";
import { motion } from "framer-motion";
import { Scale, Heart, Star, Rocket, Building2, Eye } from "lucide-react";

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-0">
        <Header />
        <PhilosophyHeroSection />

        {/* Aesthetic Line Separator */}
        <div className="w-full flex justify-center py-8">
          <div className="w-100 h-0.25 bg-gradient-to-r from-transparent via-[#CBB27A] to-transparent"></div>
        </div>

        {/* Our Ethos - Sticky Trust Manifesto */}
        <Section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-12 gap-8 md:gap-16">
              {/* Left Column - Content (60%) */}
              <div className="lg:col-span-7">
                <div className="text-center mb-12">
                  <h2 className="heading-bold text-primary mb-6">
                    Our <span className="text-[#CBB27A]">Ethos</span>
                  </h2>
                </div>

                {/* Mobile Image - Only visible on mobile */}
                <div className="lg:hidden mb-12">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl w-full h-[300px] bg-muted">
                    <img
                      src="/TRUSTTRANIMAGE.avif"
                      alt="Our Ethos - Trust, Transparency, Transformation"
                      className="w-full h-full object-cover scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>

                <div className="space-y-16 md:space-y-32 lg:space-y-40">
                  {/* Pillar 1: Trust */}
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-primary text-white rounded-full flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold ring-2 ring-[#CBB27A] ring-offset-2">
                        01
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                        Trust
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        Built on <strong>authentic guidance</strong> and
                        RERA-aligned diligence, ensuring every move is certified
                        and secure.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2: Transparency */}
                  <motion.div
                    className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ margin: "-200px 0px -200px 0px" }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-primary text-white rounded-full flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold ring-2 ring-[#CBB27A] ring-offset-2">
                        02
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                        Transparency
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        We replace guesswork with facts. Achieve transparency
                        through clear{" "}
                        <strong>ROI, absorption, and risk reports</strong>—the
                        full data behind the dream.
                      </p>
                    </div>
                  </motion.div>

                  {/* Pillar 3: Transformation */}
                  <motion.div
                    className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ margin: "-200px 0px -200px 0px" }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-primary text-white rounded-full flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold ring-2 ring-[#CBB27A] ring-offset-2">
                        03
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                        Transformation
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        Experience the effortless{" "}
                        <strong>transformation</strong> of your goals into
                        reality, integrating AI curation with{" "}
                        <strong>human insight</strong> for data-backed
                        decision-making.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Column - Sticky Image (40%) - Hidden on mobile */}
              <div className="hidden lg:block lg:col-span-5">
                <div className="lg:sticky lg:top-32">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl w-full h-[400px] bg-muted">
                    <img
                      src="/TRUSTTRANIMAGE.avif"
                      alt="Our Ethos - Trust, Transparency, Transformation"
                      className="w-full h-full object-cover scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Beautiful tagline */}
        <div className="py-6 md:py-8 flex justify-center px-4 sm:px-6">
          <div className="max-w-4xl text-center">
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground/80 leading-relaxed sm:leading-relaxed font-light italic px-2 sm:px-0">
              We seamlessly blend cutting-edge property technology and expert
              sales knowledge to secure your perfect, high-value home and
              investment future.
            </p>
          </div>
        </div>

        {/* Strategic Differentiation - Anti-Brokerage Stance */}
        <Section className="pt-16 md:pt-20 pb-11 md:pb-14">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-bold text-primary mb-6">
                Beyond Transactions - Toward{" "}
                <span className="text-[#CBB27A]">Trust</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Card - The Noise */}
              <div className="bg-white/50 rounded-xl border border-muted-foreground/20 p-8">
                <h3 className="text-2xl font-bold text-muted-foreground mb-4 italic">
                  Push Sales
                </h3>
                <p className="text-lg text-muted-foreground/70 leading-relaxed italic">
                  Unlike listing-driven portals, the typical brokerage model
                  starts with <em>what's for sale</em> - creating noise and
                  applying sales pressure. Endless listings, overwhelming
                  choices, and pushy tactics.
                </p>
              </div>

              {/* Right Card - The Purpose */}
              <div className="bg-white rounded-xl border-2 border-[#CBB27A]/20 shadow-lg p-8">
                <div className="w-16 h-1 bg-[#CBB27A] rounded-full mb-4 mx-auto"></div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Promise
                </h3>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  <strong>Celeste Abode starts with why you buy.</strong> Our{" "}
                  <strong>curated consulting model</strong> eliminates noise and
                  replaces pressure with purpose.
                </p>
                <div className="bg-[#CBB27A]/10 p-6 rounded-lg">
                  <p className="text-lg text-foreground leading-relaxed">
                    Our experts act as <strong>strategic partners</strong> who
                    curate the <strong>Top 3 Definitive Projects</strong> fit
                    for you - each rigorously backed by data.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="flex justify-center mt-16">
              <div className="max-w-4xl text-center">
                <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed font-light italic">
                  Each recommendation is backed by data:{" "}
                  <strong>
                    absorption rates, yield bands, and exit liquidity forecasts.
                  </strong>{" "}
                  We ensure the foundation is financially flawless.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Celeste Abode Standards */}
        <Section className="py-16 md:py-20 bg-[#d1cbb3]/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center mb-16">
              <h2 className="heading-bold text-primary mb-4 text-center">
                The Celeste Abode{" "}
                <span className="text-[#CBB27A]">Standard</span>
              </h2>
              <p className="text-xl text-muted-foreground text-center">
                Our Non-Negotiables
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Standard 1 - Animation from left */}
              <motion.div
                initial={{ opacity: 0, x: -80, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.1,
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.5 },
                }}
                viewport={{ margin: "-50px 0px -50px 0px", once: true }}
              >
                <Card className="border-2 border-foreground/10 shadow-2xl shadow-black/20 h-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-3xl hover:shadow-[#CBB27A]/20 hover:border-[#CBB27A]/30 cursor-pointer group">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold ring-2 ring-[#CBB27A] ring-offset-2 transition-all duration-300 group-hover:scale-110 group-hover:ring-[#CBB27A]/60">
                          01
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-[#CBB27A]">
                          Diligence Over Deals
                        </h3>
                        <div className="w-12 h-0.5 bg-[#CBB27A] mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-[#CBB27A]/80"></div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed flex-grow transition-colors duration-300 group-hover:text-foreground/90">
                      <strong>We lead with evidence.</strong> Our strategy is
                      rooted in proprietary market data and legal foresight, not
                      sales objectives.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Standard 2 - Animation from bottom */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.2,
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.5 },
                }}
                viewport={{ margin: "-50px 0px -50px 0px", once: true }}
              >
                <Card className="border-2 border-foreground/10 shadow-2xl shadow-black/20 h-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-3xl hover:shadow-[#CBB27A]/20 hover:border-[#CBB27A]/30 cursor-pointer group">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold ring-2 ring-[#CBB27A] ring-offset-2 transition-all duration-300 group-hover:scale-110 group-hover:ring-[#CBB27A]/60">
                          02
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-[#CBB27A]">
                          Connect To Customer
                        </h3>
                        <div className="w-12 h-0.5 bg-[#CBB27A] mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-[#CBB27A]/80"></div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed flex-grow transition-colors duration-300 group-hover:text-foreground/90">
                      <strong>
                        Every interaction reflects respect and emotion to your
                        journey.
                      </strong>{" "}
                      We prioritize the profound human aspiration behind every
                      investment and decision.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Standard 3 - Animation from right */}
              <motion.div
                initial={{ opacity: 0, x: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.3,
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.5 },
                }}
                viewport={{ margin: "-50px 0px -50px 0px", once: true }}
              >
                <Card className="border-2 border-foreground/10 shadow-2xl shadow-black/20 h-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-3xl hover:shadow-[#CBB27A]/20 hover:border-[#CBB27A]/30 cursor-pointer group">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold ring-2 ring-[#CBB27A] ring-offset-2 transition-all duration-300 group-hover:scale-110 group-hover:ring-[#CBB27A]/60">
                          03
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-[#CBB27A]">
                          Technology with Purpose
                        </h3>
                        <div className="w-12 h-0.5 bg-[#CBB27A] mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-[#CBB27A]/80"></div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed flex-grow transition-colors duration-300 group-hover:text-foreground/90">
                      <strong>AI curation meets human judgment.</strong> Our
                      tools maximize efficiency; our elite expertise ensures the
                      selection is a truly perfect fit.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Mission Statement */}
            <div className="mt-16 w-full flex justify-center">
              <div className="bg-[#CBB27A]/10 border-2 border-[#CBB27A]/30 rounded-xl p-8 text-center max-w-4xl">
                <p className="text-2xl text-foreground leading-relaxed">
                  <strong>
                    Celeste Abode exists to create peace of mind in a complex
                    market
                    <br />- so you feel absolutely confident about every move.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Evidence Before Emotion */}
        <Section className="pt-0">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {/* Heading */}
              <div className="text-center">
                <h2 className="heading-bold text-primary mb-6">
                  The Peace of a Decision Made{" "}
                  <span className="text-[#CBB27A]">Right</span>
                </h2>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full h-[500px] md:h-[700px] bg-muted">
                <img
                  src="/philosophy image2.avif"
                  alt="The Morning Light, The View, The Peace You Seek - Philosophy image representing the emotional reward of the perfect property"
                  className="w-full h-full object-cover object-[center_75%]"
                />
                <div className="absolute bottom-0 right-0 p-8 text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    The Morning Light, The View, The Peace You Seek
                  </h3>
                  <p className="text-base md:text-lg text-white/90">
                    That is the true value we deliver - where data meets desire
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Gold Line */}
        <div className="flex justify-center py-4">
          <div className="w-24 h-1 bg-[#CBB27A] rounded-full"></div>
        </div>

        {/* Final Conversion - Global & Local Reach */}
        <Section className="py-6 md:py-8">
          <div className="bg-gradient-to-br from-primary/10 to-[#CBB27A]/20 rounded-xl shadow-lg w-full max-w-4xl mx-auto p-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Ready to Chart Your{" "}
                <span className="text-[#CBB27A]">Definitive Asset</span>?
              </h2>
              <p className="text-base text-foreground mb-4 leading-relaxed">
                Whether you're an NRI buying remotely or a family upgrading
                within NCR, we offer the same level of{" "}
                <strong>compliance, clarity, and care</strong>. Virtual tours
                and digital diligence make the process seamless.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 text-base rounded-full w-full sm:w-auto"
                  onClick={() => (window.location.href = "/advisory-session")}
                >
                  Request Advisory Session
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2.5 text-base rounded-full w-full sm:w-auto"
                  onClick={() => (window.location.href = "tel:+919818735258")}
                >
                  Talk to Our Expert Now
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
