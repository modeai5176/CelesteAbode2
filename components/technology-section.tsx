"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Video,
  TrendingUp,
  ArrowLeftRight,
  Leaf,
} from "lucide-react";

export function TechnologySection() {
  const technologies = [
    {
      id: "ai-matching",
      title: "AI-Based Matching",
      description:
        "Finds best-fit properties based on budget, commute, and lifestyle.",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      id: "virtual-tours",
      title: "Virtual Property Tour Consulting",
      description:
        "3D walkthroughs and immersive previews save time.",
      icon: <Video className="w-8 h-8" />,
    },
    {
      id: "data-insights",
      title: "Data-Driven Insights",
      description:
        "Monitor locality price trends and forecast appreciation.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      id: "smart-comparisons",
      title: "Smart Comparisons",
      description:
        "Evaluate projects side-by-side for clarity.",
      icon: <ArrowLeftRight className="w-8 h-8" />,
    },
    {
      id: "sustainability",
      title: "Sustainability Scoring",
      description:
        "Identify eco-friendly and green-certified developments.",
      icon: <Leaf className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-bold text-primary mb-6">
            Technology That{" "}
            <span className="text-[#CBB27A]">Redefines Real Estate</span>
          </h2>
          <p className="text-xl text-muted max-w-4xl mx-auto leading-relaxed">
            Celeste Abode integrates Artificial Intelligence, machine learning,
            and predictive analytics into every stage of the property journey.
          </p>
        </motion.div>

        {/* Divider Line */}
        <div className="w-24 h-0.5 bg-[#CBB27A] mx-auto mb-16"></div>

        {/* Technologies Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] xl:max-w-xs flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="text-[#CBB27A] mb-6 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-ink leading-tight">
                  {tech.title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">
                  {tech.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#CBB27A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

