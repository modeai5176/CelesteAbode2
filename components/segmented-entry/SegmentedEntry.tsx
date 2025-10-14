"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, TrendingUp, Crown } from "lucide-react";
import { IntentTile } from "./IntentTile";
import { MultiStepForm } from "./MultiStepForm";
import { IntentPayload, UserIntent, analytics } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface SegmentedEntryProps {
  onSubmit: (payload: IntentPayload) => void;
  onWhatsApp?: (payload: IntentPayload) => void;
  defaultMicroMarkets?: string[];
  className?: string;
}

const tileData = {
  live: {
    title: "Buying to Live",
    subtitle: "Your Journey to a Dream Home",
    description:
      "Discover properties that perfectly align with your lifestyle, commute, and community aspirations. We curate options that truly feel like home.",
    cta: "Discover Your Dream Home",
    icon: <Home className="w-8 h-8" />,
  },
  invest: {
    title: "Investing for Returns",
    subtitle: "Strategic Growth, Secure Future",
    description:
      "Access exclusive pre-launch opportunities, meticulously vetted under-construction projects, and expert insights for liquidity and maximized returns. Your investment, our expertise.",
    cta: "Explore Investment Opportunities",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  signature: {
    title: "Signature Residences",
    subtitle: "Turning Luxury Aspirations, Into Real Addresses",
    description:
      "Indulge in properties that define prestige. Explore exclusive listings, experience unparalleled brand equity, and secure residences with guaranteed possession timelines.",
    cta: "Unlock Elite Residences",
    icon: <Crown className="w-8 h-8" />,
  },
};

export function SegmentedEntry({
  onSubmit,
  onWhatsApp,
  defaultMicroMarkets = [],
  className,
}: SegmentedEntryProps) {
  const [selectedIntent, setSelectedIntent] = useState<UserIntent | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleTileClick = (intent: UserIntent) => {
    analytics.se_intent_tile_clicked(intent);
    setSelectedIntent(intent);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
    setSelectedIntent(null);
  };

  const handleSubmit = (payload: IntentPayload) => {
    onSubmit(payload);
  };

  const handleWhatsApp = (payload: IntentPayload) => {
    if (onWhatsApp) {
      onWhatsApp(payload);
    }
  };

  return (
    <section className={cn("py-16 md:py-20 bg-porcelain", className)}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-bold text-primary mb-4">
            Live, Invest, or Aspire. We make it real
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Start where you are. We'll work inside your budget first
          </p>
        </motion.div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {Object.entries(tileData).map(([intent, data], index) => (
            <motion.div
              key={intent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <IntentTile
                title={data.title}
                subtitle={data.subtitle}
                description={data.description}
                cta={data.cta}
                considerationChips={data.considerationChips}
                icon={data.icon}
                onClick={() => handleTileClick(intent as UserIntent)}
                aria-describedby={`tile-${intent}-desc`}
              />
            </motion.div>
          ))}
        </div>

        {/* Multi-Step Form */}
        {selectedIntent && (
          <MultiStepForm
            isOpen={isDrawerOpen}
            onClose={handleDrawerClose}
            intent={selectedIntent}
          />
        )}
      </div>
    </section>
  );
}
