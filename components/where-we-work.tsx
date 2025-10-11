"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Plane,
  Building2,
  Home,
  TrendingUp,
  Shield,
  ArrowRight,
  Star,
  Zap,
  Crown,
  ChevronDown,
} from "lucide-react";
import { MultiStepForm } from "./segmented-entry/MultiStepForm";
import { UserIntent, IntentPayload, analytics } from "@/lib/analytics";

export function WhereWeWork() {
  const [activeCorridor, setActiveCorridor] = useState("noida");
  const [selectedIntent, setSelectedIntent] = useState<UserIntent | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [expandedMobileCorridor, setExpandedMobileCorridor] = useState<
    string | null
  >(null);

  const corridors = [
    {
      id: "noida",
      title: "The Connective Edge",
      subtitle: "Noida & Greater Noida West",
      tagline: "Planned Urbanism | Smart Living",
      description:
        "Prime location known for meticulous urban planning, rapid metro expansion, and a robust IT/commercial ecosystem. Ideal for modern professionals seeking streamlined city life.",
      icon: <Building2 className="w-6 h-6" />,
      features: [
        "Metro Connectivity",
        "IT Hubs",
        "Educational Institutes",
        "Healthcare Facilities",
      ],
      cta: "View Planned Properties",
      color: "from-blue-50 to-blue-100",
      accent: "text-blue-600",
      bgAccent: "bg-blue-50",
      mapPosition: { x: 55, y: 45 },
    },
    {
      id: "yamuna",
      title: "The Future Hub",
      subtitle: "Yamuna Expressway",
      tagline: "Investment Momentum | Aviation Proximity",
      description:
        "India's premier high-growth investment belt. Strategically positioned for exponential value appreciation powered by the upcoming Jewar International Airport and entertainment zones.",
      icon: <Plane className="w-6 h-6" />,
      features: [
        "Jewar Airport",
        "Industrial Corridor",
        "Logistics Hub",
        "Future Growth",
      ],
      cta: "Access Investment Projections",
      color: "from-emerald-50 to-emerald-100",
      accent: "text-emerald-600",
      bgAccent: "bg-emerald-50",
      mapPosition: { x: 55, y: 45 },
    },
    {
      id: "ghaziabad",
      title: "The Foundation",
      subtitle: "Ghaziabad / NH-24 Corridor",
      tagline: "Value & Vitals | Established Infrastructure",
      description:
        "Established residential market offering exceptional value, excellent connectivity to Delhi, and mature, family-friendly social infrastructure across essential amenities.",
      icon: <Home className="w-6 h-6" />,
      features: [
        "Family Communities",
        "Schools & Colleges",
        "Hospitals",
        "Shopping Centers",
      ],
      cta: "Find Value Homes",
      color: "from-amber-50 to-amber-100",
      accent: "text-amber-600",
      bgAccent: "bg-amber-50",
      mapPosition: { x: 25, y: 40 },
    },
    {
      id: "luxury",
      title: "Exclusive Residences",
      subtitle: "Privacy & Legacy",
      tagline: "Curated Luxury | ₹3 Cr & Above",
      description:
        "A portfolio of hand-vetted, high-ticket properties—from sprawling independent villas to secured gated plots—for the discerning client who values absolute privacy and generational wealth.",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Privacy & Security",
        "Legacy Properties",
        "Premium Amenities",
        "Exclusive Access",
      ],
      cta: "Unlock Exclusive Listings",
      color: "from-purple-50 to-purple-100",
      accent: "text-purple-600",
      bgAccent: "bg-purple-50",
      mapPosition: { x: 50, y: 25 },
    },
  ];

  const activeCorridorData = corridors.find((c) => c.id === activeCorridor);

  const handleOpenInvestForm = () => {
    analytics.se_intent_tile_clicked("invest");
    setSelectedIntent("invest");
    setIsFormOpen(true);
  };

  const handleOpenLiveForm = () => {
    analytics.se_intent_tile_clicked("live");
    setSelectedIntent("live");
    setIsFormOpen(true);
  };

  const handleOpenSignatureForm = () => {
    analytics.se_intent_tile_clicked("signature");
    setSelectedIntent("signature");
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setSelectedIntent(null);
  };

  const handleFormSubmit = (payload: IntentPayload) => {
    console.log("Investment form submitted:", payload);
    // TODO: Send to backend/CRM
    setIsFormOpen(false);
    setSelectedIntent(null);
  };

  const handleMobileCorridorToggle = (corridorId: string) => {
    if (expandedMobileCorridor === corridorId) {
      setExpandedMobileCorridor(null);
    } else {
      setExpandedMobileCorridor(corridorId);
      setActiveCorridor(corridorId);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-porcelain via-white to-porcelain/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-metal/5 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.1) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-bold text-primary mb-6">
            Where We <span className="text-[#CBB27A]">Work</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            India's Growth Corridors - Strategic locations where we unlock
            premium real estate opportunities
          </p>
        </motion.div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden space-y-4">
          {corridors.map((corridor) => (
            <motion.div
              key={corridor.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-metal/20 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: corridors.indexOf(corridor) * 0.1,
              }}
            >
              {/* Accordion Header */}
              <button
                onClick={() => handleMobileCorridorToggle(corridor.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-porcelain/50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-[#CBB27A]/20 rounded-xl">
                    {corridor.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink text-lg">
                      {corridor.subtitle}
                    </h3>
                    <p className="text-[#CBB27A] text-sm font-medium">
                      {corridor.tagline}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{
                    rotate: expandedMobileCorridor === corridor.id ? 180 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted" />
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {expandedMobileCorridor === corridor.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-6">
                      {/* Map for non-luxury corridors */}
                      {corridor.id !== "luxury" && (
                        <motion.div
                          className="relative h-[250px] bg-gradient-to-br from-white to-porcelain/80 rounded-2xl overflow-hidden border border-metal/20"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          {corridor.id === "ghaziabad" ? (
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179625.26986506698!2d77.38808362351043!3d28.69528372332065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1760197051602!5m2!1sen!2sin"
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              className="rounded-2xl"
                            />
                          ) : corridor.id === "noida" ? (
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158512.35529116966!2d77.38112687190133!3d28.514976803822055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1760198016984!5m2!1sen!2sin"
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              className="rounded-2xl"
                            />
                          ) : corridor.id === "yamuna" ? (
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224693.92988635143!2d77.41092315830856!3d28.36360629023615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89aef%3A0xec0ccabb5317962e!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1760198147624!5m2!1sen!2sin"
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              className="rounded-2xl"
                            />
                          ) : null}
                        </motion.div>
                      )}

                      {/* Content Details */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="space-y-4"
                      >
                        <div>
                          <h4 className="text-xl font-bold text-ink mb-2">
                            {corridor.title}
                          </h4>
                          <p className="text-muted leading-relaxed">
                            {corridor.description}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-3">
                          {corridor.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center gap-2 text-muted text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.3 + index * 0.1,
                              }}
                            >
                              <div className="w-1.5 h-1.5 bg-[#CBB27A] rounded-full" />
                              {feature}
                            </motion.div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <motion.button
                          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#CBB27A] text-white rounded-full font-medium hover:bg-[#CBB27A]/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={
                            corridor.id === "yamuna"
                              ? handleOpenInvestForm
                              : corridor.id === "noida" ||
                                corridor.id === "ghaziabad"
                              ? handleOpenLiveForm
                              : corridor.id === "luxury"
                              ? handleOpenSignatureForm
                              : undefined
                          }
                        >
                          {corridor.cta}
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout - Hidden on Mobile */}
        <div className="hidden lg:block">
          {/* Location Navigation - Centered */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {corridors.map((corridor) => (
              <button
                key={corridor.id}
                onClick={() => setActiveCorridor(corridor.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCorridor === corridor.id
                    ? "bg-[#CBB27A] text-white shadow-lg"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
                }`}
              >
                {corridor.subtitle}
              </button>
            ))}
          </motion.div>

          {/* Content Layout */}
          <div
            className={`${
              activeCorridor === "luxury"
                ? "flex justify-center space-y-16 lg:space-y-0"
                : "grid lg:grid-cols-2 gap-12 items-start space-y-16 lg:space-y-0"
            }`}
          >
            {/* Map Container - Hidden for Luxury */}
            {activeCorridor !== "luxury" && (
              <motion.div
                className="relative h-[387px] bg-gradient-to-br from-white to-porcelain/80 rounded-3xl overflow-hidden border border-metal/20 shadow-lg"
                key={`map-${activeCorridor}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {activeCorridor === "ghaziabad" ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179625.26986506698!2d77.38808362351043!3d28.69528372332065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1760197051602!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                  />
                ) : activeCorridor === "noida" ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158512.35529116966!2d77.38112687190133!3d28.514976803822055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1760198016984!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                  />
                ) : activeCorridor === "yamuna" ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224693.92988635143!2d77.41092315830856!3d28.36360629023615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89aef%3A0xec0ccabb5317962e!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1760198147624!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-metal/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <MapPin className="w-8 h-8 text-metal" />
                      </div>
                      <p className="text-muted text-sm">
                        Select a location to view the map
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Dynamic Content Panel */}
            <motion.div
              className={`space-y-6 h-[387px] flex flex-col justify-end mt-16 lg:mt-0 ${
                activeCorridor === "luxury" ? "max-w-2xl mt-0" : ""
              }`}
              key={`content-${activeCorridor}`}
              initial={
                activeCorridor === "luxury"
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 100 }
              }
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: activeCorridor === "luxury" ? 0 : 0.5 }}
            >
              {/* Active Corridor Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCorridor}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-metal/20 shadow-lg"
                >
                  {activeCorridorData && (
                    <>
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-[#CBB27A]/20 rounded-2xl">
                          {activeCorridorData.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-ink mb-1">
                            {activeCorridorData.title}
                          </h3>
                          <p className="text-[#CBB27A] font-medium">
                            {activeCorridorData.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted leading-relaxed mb-6">
                        {activeCorridorData.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {activeCorridorData.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-2 text-muted text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 bg-[#CBB27A] rounded-full" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.button
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#CBB27A] text-white rounded-full font-medium hover:bg-[#CBB27A]/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={
                          activeCorridorData.id === "yamuna"
                            ? handleOpenInvestForm
                            : activeCorridorData.id === "noida" ||
                              activeCorridorData.id === "ghaziabad"
                            ? handleOpenLiveForm
                            : activeCorridorData.id === "luxury"
                            ? handleOpenSignatureForm
                            : undefined
                        }
                      >
                        {activeCorridorData.cta}
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Multi-Step Form */}
        {selectedIntent && (
          <MultiStepForm
            isOpen={isFormOpen}
            onClose={handleFormClose}
            intent={selectedIntent}
          />
        )}
      </div>
    </section>
  );
}
