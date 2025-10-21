"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Shield, CheckCircle, Users } from "lucide-react";
import { ConsultationPopup } from "@/components/consultation-popup";

export function CTASection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="pt-0 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Trust Card */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Accent Line */}
          <div className="w-16 h-0.5 bg-[#CBB27A] mx-auto mb-6"></div>

          {/* Trust Content */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">
              Trusted by Thousands of{" "}
              <span className="text-[#CBB27A]">Families</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Our unwavering commitment to excellence and client satisfaction
              has made us the preferred choice for discerning real estate
              investments.
            </p>
          </div>

          {/* Trust Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#CBB27A] flex-shrink-0" />
              <span className="text-sm font-medium text-ink">
                RERA Compliant
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#CBB27A] flex-shrink-0" />
              <span className="text-sm font-medium text-ink">
                Legal Verification
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#CBB27A] flex-shrink-0" />
              <span className="text-sm font-medium text-ink">
                Expert Guidance
              </span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="heading-bold text-primary mb-8">
            Ready to find your{" "}
            <span className="text-[#CBB27A]">masterpiece?</span>
          </h1>

          <div className="mb-8">
            <motion.button
              onClick={() => setIsPopupOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-[#2b3035] text-white rounded-full font-medium hover:bg-[#3f4247] transition-all duration-200 shadow-lg hover:shadow-xl text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Consultation
            </motion.button>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
            <a
              href="tel:+919818735258"
              className="flex items-center gap-2 text-ink hover:text-[#CBB27A] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9818735258</span>
            </a>
            <div className="hidden sm:block w-px h-4 bg-muted"></div>
            <a
              href={`mailto:${
                process.env.NEXT_PUBLIC_APP_EMAIL || "support@celesteabode.com"
              }`}
              className="flex items-center gap-2 text-ink hover:text-[#CBB27A] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>
                {process.env.NEXT_PUBLIC_APP_EMAIL || "support@celesteabode.com"}
              </span>
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Consultation Popup */}
      <ConsultationPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </section>
  );
}
