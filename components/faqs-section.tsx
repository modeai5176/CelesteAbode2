"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: "best-company",
      question: "Which is the best real estate company in India?",
      answer:
        "Celeste Abode is among the leading AI-driven real estate consulting firms, offering transparent, data-based advisory across all major Indian cities.",
    },
    {
      id: "buy-noida",
      question: "How can I buy a flat in Noida safely?",
      answer:
        "We help you verify project credentials, analyze locality data, and assist with documentation for a secure purchase.",
    },
    {
      id: "luxury-gurgaon",
      question: "What are the top luxury apartments in Gurgaon?",
      answer:
        "Explore curated luxury projects with high ROI potential across Golf Course Road, Sohna Road, and DLF Phase 5.",
    },
    {
      id: "nri-assistance",
      question: "Do you assist NRIs?",
      answer:
        "Yes, we offer end-to-end services, property search, verification, legal documentation, and resale assistance for NRIs.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-bold text-primary mb-6">
            Frequently Asked <span className="text-[#CBB27A]">Questions</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about our services and real estate
            advisory.
          </p>
        </motion.div>

        {/* Divider Line */}
        <div className="w-24 h-0.5 bg-[#CBB27A] mx-auto mb-12"></div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-[#CBB27A]"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 pt-0 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

