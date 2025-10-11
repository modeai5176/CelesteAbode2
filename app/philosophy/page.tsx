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

        {/* Our Ethos - Sticky Trust Manifesto */}
        <Section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Guiding Philosophy: <span className="text-primary">Trust. Transparency. Transformation.</span>
              </h2>
            </div>
            
            <div className="lg:grid lg:grid-cols-12 gap-8 md:gap-16">
              {/* Left Column - Content (60%) */}
              <div className="lg:col-span-7">
                <div className="space-y-24">
                  {/* Pillar 1: Trust */}
                  <div className="flex items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        01
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">Trust</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Built on <strong>authentic guidance</strong> and RERA-aligned diligence, ensuring every move is certified and secure.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2: Transparency */}
                  <div className="flex items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        02
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">Transparency</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        We replace guesswork with facts. Achieve transparency through clear <strong>ROI, absorption, and risk reports</strong>—the full data behind the dream.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 3: Transformation */}
                  <div className="flex items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        03
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">Transformation</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Experience the effortless <strong>transformation</strong> of your goals into reality, integrating AI curation with <strong>human insight</strong> for data-backed decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Sticky Image (40%) */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl w-full h-[600px] bg-muted">
                    <img
                      src="/luxury-modern-apartment.png"
                      alt="Where Vision Meets Reality - Every recommendation backed by data, every decision guided by expertise"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <p className="text-white text-lg font-medium">
                        Where Vision Meets Reality
                      </p>
                      <p className="text-white/90 text-sm mt-2">
                        Every recommendation backed by data, every decision guided by expertise
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Strategic Differentiation - Anti-Brokerage Stance */}
        <Section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                The Brokerage Model We <span className="text-primary">Refuse</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              {/* Left Block - The Noise */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20 rounded-full"></div>
                <div className="pl-8">
                  <h3 className="text-2xl font-semibold text-muted-foreground mb-4">The Noise</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Unlike listing-driven portals, the typical brokerage model starts with <em>what's for sale</em>—creating noise and applying sales pressure.
                  </p>
                </div>
              </div>

              {/* Right Block - The Purpose */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full"></div>
                <div className="pl-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">The Purpose</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    <strong>Celeste Abode starts with why you buy.</strong> Our <strong>curated consulting model</strong> eliminates noise and replaces pressure with purpose.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mt-4">
                    Our experts act as <strong>strategic partners</strong> who curate the <strong>Top 3 Definitive Projects</strong> fit for you—each rigorously backed by data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Evidence Before Emotion */}
        <Section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                The Precision of Data. The Insight of <span className="text-primary">Desire</span>
              </h2>
            </div>
            
            <div className="space-y-16">
              {/* Top Text Block */}
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Every recommendation comes with supporting data: <strong>absorption rates, yield bands, and exit liquidity forecasts.</strong> We ensure the foundation is financially flawless.
                </p>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full h-[500px] bg-muted">
                <img
                  src="/luxury-villa-exterior-modern-architecture.png"
                  alt="Beautiful home representing the emotional reward of the perfect property"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Text Block */}
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-xl text-foreground leading-relaxed">
                  Yet, we never forget the human side—the morning light, the view, the <strong>peace you seek</strong>. That is the true value we deliver.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Celeste Abode Standards */}
        <Section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                The Celeste Abode Standard. Our <span className="text-primary">Non-Negotiables</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Standard 1 */}
              <Card className="border-2 border-foreground/10 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      01
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Diligence Over Deals</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We lead with evidence.
                  </p>
                </CardContent>
              </Card>

              {/* Standard 2 */}
              <Card className="border-2 border-foreground/10 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      02
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Client Emotion First</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Every interaction reflects respect for your journey.
                  </p>
                </CardContent>
              </Card>

              {/* Standard 3 */}
              <Card className="border-2 border-foreground/10 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      03
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Technology with Purpose</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    AI curation meets human judgment.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mission Statement */}
            <div className="text-center mt-16 max-w-4xl mx-auto">
              <p className="text-xl text-foreground italic leading-relaxed">
                <strong>Celeste Abode exists to create peace of mind in a complex market—so you feel absolutely confident about every move.</strong>
              </p>
            </div>
          </div>
        </Section>

        {/* Final Conversion - Global & Local Reach */}
        <Section className="py-16 md:py-20">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full h-[600px] bg-muted">
            <img
              src="/luxury-cityscape-blurred-background-for-real-estat.png"
              alt="Global reach with local expertise - Ready to chart your definitive asset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl mx-auto px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Chart Your <span className="text-primary">Definitive Asset</span>?
                </h2>
                <p className="text-xl mb-8 leading-relaxed">
                  Whether you're an NRI buying remotely or a family upgrading within NCR, we offer the same level of <strong>compliance, clarity, and care</strong>. Virtual tours and digital diligence make the process seamless.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <PillButton className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                    Request Advisory Session
                  </PillButton>
                  <PillButton variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                    Talk to Our Expert Now
                  </PillButton>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
