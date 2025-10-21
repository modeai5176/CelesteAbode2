"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        message: formData.get("message") as string,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setSubmitStatus("success");
          e.currentTarget.reset();
        } else {
          console.error("Form submission error:", result.error);
          setSubmitStatus("error");
        }
      } else {
        console.error("HTTP error:", response.status);
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-0">
        {/* Hero Section */}
        <section className="pt-0 pb-8 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 min-h-[60vh] flex flex-col philosophy-hero">
          <Header />
          <div className="flex-1 flex items-center justify-center pt-24">
            <div className="max-w-4xl mx-auto text-center w-full">
              <h1 className="text-4xl md:text-5xl font-black text-primary mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>
                Get in <span className="text-[#000000]">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to start your journey towards finding your perfect property? Let's connect and discuss how we can help you achieve your real estate goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <Section>
          <div className="max-w-6xl mx-auto">
            {/* Top Row: Form and Contact Details */}
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              {/* Contact Form */}
              <div>
                <Card className="border-[1.25px] border-border shadow-2xl bg-card backdrop-blur-sm h-full">
                  <CardContent className="p-5">
                    <div className="text-center mb-5">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground mb-1">
                        Send us a Message
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        We'd love to hear from you
                      </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label
                            htmlFor="firstName"
                            className="block text-xs font-semibold text-foreground"
                          >
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="h-9 border-2 border-border/50 focus:border-primary transition-all duration-300 rounded-lg bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md focus:shadow-lg text-sm" /* EDIT: used theme card/bg variables */
                          />
                        </div>
                        <div className="space-y-1">
                          <label
                            htmlFor="lastName"
                            className="block text-xs font-semibold text-foreground"
                          >
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="h-9 border-2 border-border/50 focus:border-primary transition-all duration-300 rounded-lg bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md focus:shadow-lg text-sm" /* EDIT: used theme card/bg variables */
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label
                            htmlFor="phone"
                            className="block text-xs font-semibold text-foreground"
                          >
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            className="h-9 border-2 border-border/50 focus:border-primary transition-all duration-300 rounded-lg bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md focus:shadow-lg text-sm" /* EDIT: used theme card/bg variables */
                          />
                        </div>
                        <div className="space-y-1">
                          <label
                            htmlFor="email"
                            className="block text-xs font-semibold text-foreground"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="h-9 border-2 border-border/50 focus:border-primary transition-all duration-300 rounded-lg bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md focus:shadow-lg text-sm" /* EDIT: used theme card/bg variables */
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label
                          htmlFor="message"
                          className="block text-xs font-semibold text-foreground"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={3}
                          required
                          placeholder="Tell us about your requirements, preferred locations, budget, or any specific questions you have..."
                          className="border-2 border-border/50 focus:border-primary transition-all duration-300 rounded-lg bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md focus:shadow-lg resize-none text-sm" /* EDIT: used theme card/bg variables */
                        />
                      </div>

                      <div className="flex items-start gap-2 p-2 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                        <input
                          type="checkbox"
                          id="consent"
                          required
                          className="mt-0.5 w-3 h-3 text-primary border-2 border-primary/30 rounded focus:ring-primary focus:ring-1"
                        />
                        <label
                          htmlFor="consent"
                          className="text-xs text-muted-foreground leading-relaxed"
                        >
                          I agree to receive communications from Celeste Abode
                          regarding my inquiry and related services. I
                          understand that I can unsubscribe at any time.
                        </label>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-10 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-sm disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-3 h-3 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <MessageCircle className="w-3 h-3 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>

                      {submitStatus === "success" && (
                        <div className="text-center text-green-700 text-xs bg-gradient-to-r from-green-50 to-emerald-50 p-2 rounded-lg border border-green-200 shadow-sm">
                          <div className="flex items-center justify-center gap-1">
                            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <span className="font-medium">
                              Message sent successfully! We'll get back to you
                              within 2 hours.
                            </span>
                          </div>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <Card className="border-[1.25px] border-border shadow-2xl bg-card backdrop-blur-sm h-full">
                  <CardContent className="p-5">
                    <div className="text-center mb-5">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground mb-1">
                        Contact Information
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        Get in touch with us
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="group p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Phone className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground mb-1 text-sm">
                              Phone
                            </h3>
                            <p className="text-foreground font-semibold mb-1 text-sm">
                              +91 9818735258
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Available 24/7 for urgent inquiries
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group p-3 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-lg border border-secondary/10 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Mail className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground mb-1 text-sm">
                              Email
                            </h3>
                            <p className="text-foreground font-semibold mb-1 text-sm">
                              {process.env.NEXT_PUBLIC_APP_EMAIL ||
                                "support@celesteabode.com"}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              We respond within 2 hours
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground mb-1 text-sm">
                              Office Locations
                            </h3>
                            <p className="text-foreground font-semibold mb-1 text-sm">
                              Celeste Abode, 716, Tower A, Ithum, Sector 62, Noida.
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Serving the entire NCR region
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group p-3 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-lg border border-secondary/10 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Clock className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground mb-1 text-sm">
                              Business Hours
                            </h3>
                            <p className="text-foreground font-semibold mb-1 text-sm">
                              Monday - Saturday: 9:00 AM - 7:00 PM
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Sunday: By appointment only
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom Row: Quick Actions */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-full max-w-md">
                <Card className="border-[1.25px] border-border shadow-2xl bg-card backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="text-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-2">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Quick Actions
                      </h3>
                      <p className="text-xs text-muted-foreground text-center w-full">
                        Connect with us instantly
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full h-9 justify-center gap-2 font-medium border-2 border-primary/20 hover:border-primary hover:bg-primary/5 hover:text-[#000000] transition-all duration-300 rounded-lg text-sm group"
                        asChild
                      >
                        <a href="tel:+919818735258" className="group">
                          <Phone className="w-4 h-4 group-hover:text-[#000000] transition-colors duration-300" />
                          <span className="group-hover:text-[#000000] transition-colors duration-300">
                            Call Now
                          </span>
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full h-9 justify-center gap-2 font-medium border-2 border-green-500/20 hover:border-green-500 hover:bg-green-50 hover:text-[#000000] transition-all duration-300 rounded-lg text-sm text-green-700 group"
                        asChild
                      >
                        <a
                          href="https://wa.me/919818735258"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group"
                        >
                          <svg
                            className="w-4 h-4 group-hover:text-[#000000] transition-colors duration-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                          <span className="group-hover:text-[#000000] transition-colors duration-300">
                            WhatsApp
                          </span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Section>

        {/* Map Section */}
        <Section className="bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-primary mb-8 text-center">
              Our Service Areas
            </h2>

            <div className="bg-muted rounded-lg p-8 text-center flex flex-col items-center justify-center">
              <MapPin className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
                Interactive Map Coming Soon
              </h3>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                We're working on an interactive map to show our service areas
                and office locations. For now, please contact us directly for
                specific location information.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
