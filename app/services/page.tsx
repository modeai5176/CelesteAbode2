import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PillButton } from "@/components/ui/pill-button";
import {
  Building2,
  Target,
  Globe,
  CheckCircle,
  Heart,
  Users,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Luxury & Premium Residences",
      subtitle: "Bespoke homes curated for life and legacy.",
      challenge:
        "Abundance of options with little alignment to lifestyle, taste, or long-term plans.",
      approach:
        "We curate a tightly vetted portfolio of apartments, villas and legacy plots, prioritising architectural merit, privacy, neighbourhood character and quality of build. Every recommendation is grounded in lifestyle profiling and detailed project due diligence.",
      deliverables: [
        "Shortlist tailored to your aesthetic, space needs and daily rhythm",
        "Comparative analysis on design, developer credibility and livability",
        "Private previews and coordinated site experiences",
        "Transparent documentation and clear next steps",
      ],
      value:
        "A residence that feels personally authored, not merely purchased.",
    },
    {
      title: "High-Value Investment Advisory",
      subtitle: "Real estate as a disciplined, compounding asset.",
      challenge:
        "Uncertainty around pricing, risk and returns in a complex market.",
      approach:
        "We combine proprietary market intelligence with growth-driver analysis to identify assets with durable demand, rental strength and exit liquidity. Entry strategy, holding thesis and exit pathways are defined before commitment.",
      deliverables: [
        "Deal sourcing across primary, pre-launch and resale opportunities",
        "ROI modeling with sensitivity scenarios and benchmark comparisons",
        "Risk assessment covering legal, infra, micro-market and developer factors",
        "Portfolio construction and periodic performance reviews",
      ],
      value:
        "Capital placed with conviction, guided by data and protected by discipline.",
    },
    {
      title: "NRI & Global Client Services",
      subtitle: "Seamless cross-border acquisition with local certainty.",
      challenge:
        "Distance, documentation complexity and fragmented on-ground support.",
      approach:
        "End-to-end execution for overseas buyers: secure virtual tours, clarity on FEMA/RBI norms, verified documentation and trusted partners for banking, legal and post-purchase needs.",
      deliverables: [
        "Remote discovery and live walkthroughs with high-fidelity media",
        "Compliance guidance and document verification",
        "Escrow and payment coordination with reputable institutions",
        "Possession, registration and periodic asset check-ins",
      ],
      value: "Confidence of a local insider, delivered wherever you are.",
    },
    {
      title: "End-to-End Consulting",
      subtitle: "From first conversation to keys in hand.",
      challenge:
        "Multiple stakeholders, shifting timelines and administrative overload.",
      approach:
        "A single point of accountability manages research, negotiations, legal, financing coordination, registration and handover. Milestones, dependencies and dates are tracked transparently.",
      deliverables: [
        "Search strategy and shortlist creation",
        "Negotiation support on price, terms and inclusions",
        "Legal review coordination and bank liaison, if required",
        "Registration, snag list, handover and move-in readiness",
      ],
      value: "A precise, stress-free journey with nothing left to chance.",
    },
    {
      title: "Personalised Lifestyle Mapping",
      subtitle: "Homes chosen for the way you actually live.",
      challenge:
        "Properties that look right on paper but feel wrong in practice.",
      approach:
        "We blend AI-assisted preference modeling with in-depth conversations to map commute patterns, family needs, amenities, privacy, light, acoustics and neighbourhood culture. The output is a shortlist that matches how you live today and how you plan to live tomorrow.",
      deliverables: [
        "Lifestyle profile and priority matrix",
        "Fit-scored property shortlist with rationale",
        "Scenario mapping (schools, aging parents, work shifts, future family)",
        "Final recommendation with clear trade-off notes",
      ],
      value: "A home that fits effortlessly, day one and decade ten.",
    },
    {
      title: "Solution at Your Doorstep",
      subtitle: "Curated discovery without leaving home.",
      challenge: "Limited time and noisy, inconsistent online information.",
      approach:
        "Our platform assembles verified projects and society profiles, then ranks them against your lifestyle map. You preview options remotely; we handle the on-ground validation and scheduling.",
      deliverables: [
        "High-quality media, verified amenities and society summaries",
        "Smart recommendations based on commute, schools, community and services",
        "Side-by-side comparisons with clear pros/considerations",
        "Fast transition from virtual shortlist to private viewing",
      ],
      value: "Smarter, faster discovery that respects your time and standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="pt-0 pb-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-6xl mx-auto text-center pt-32">
            <h1 className="text-5xl md:text-6xl text-foreground mb-4">
              Services at <span className="text-primary">Celeste Abode</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Comprehensive real estate solutions designed to meet your every
              need and exceed your expectations
            </p>
          </div>
        </section>

        {/* Services */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-16">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-8">
                      {/* Service Header */}
                      <div className="mb-8">
                        <h2 className="h2 text-primary mb-3">
                          {service.title}
                        </h2>
                        <p className="lead text-muted-foreground">
                          {service.subtitle}
                        </p>
                      </div>

                      {/* Client Challenge */}
                      <div className="mb-8">
                        <h3 className="h4 text-foreground mb-3">
                          Client Challenge
                        </h3>
                        <p className="body-text text-muted-foreground">
                          {service.challenge}
                        </p>
                      </div>

                      {/* Our Approach */}
                      <div className="mb-8">
                        <h3 className="h4 text-foreground mb-3">
                          Our Approach
                        </h3>
                        <p className="body-text text-muted-foreground">
                          {service.approach}
                        </p>
                      </div>

                      {/* What You Receive */}
                      <div className="mb-8">
                        <h3 className="h4 text-foreground mb-4">
                          What You Receive
                        </h3>
                        <ul className="space-y-3">
                          {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                              <p className="body-text text-muted-foreground">
                                {deliverable}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Value Delivered */}
                      <div className="pt-6 border-t border-border">
                        <h3 className="h4 text-foreground mb-3">
                          Value Delivered
                        </h3>
                        <p className="body-text text-primary font-medium">
                          {service.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sticky Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="h4 text-primary mb-4">
                        Get Started Today
                      </h3>
                      <div className="space-y-4">
                        <PillButton
                          variant="primary"
                          size="md"
                          className="w-full"
                          asChild
                        >
                          <a
                            href="tel:+91XXXXXXXXXX"
                            className="flex items-center justify-center gap-2"
                          >
                            <Phone className="w-4 h-4" />
                            Schedule a Call
                          </a>
                        </PillButton>

                        <PillButton
                          variant="outline"
                          size="md"
                          className="w-full"
                          asChild
                        >
                          <a
                            href="https://wa.me/91XXXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Message on WhatsApp
                          </a>
                        </PillButton>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="h4 text-primary mb-4">
                        Why Choose Our Services?
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="body-text text-muted-foreground">
                            Exclusive access to premium projects
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="body-text text-muted-foreground">
                            Data-driven market intelligence
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="body-text text-muted-foreground">
                            Personalized lifestyle matching
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="body-text text-muted-foreground">
                            End-to-end support
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
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
