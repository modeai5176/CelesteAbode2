"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface IntentTileProps {
  title: string
  subtitle: string
  description: string
  cta: string
  considerationChips: string[]
  icon?: React.ReactNode
  onClick: () => void
  className?: string
  "aria-describedby"?: string
}

export function IntentTile({
  title,
  subtitle,
  description,
  cta,
  considerationChips,
  icon,
  onClick,
  className,
  "aria-describedby": ariaDescribedBy,
  ...props
}: IntentTileProps) {
  return (
    <motion.button
      className={cn(
        "group relative w-full h-[400px] p-8 rounded-3xl overflow-hidden",
        "bg-white shadow-lg hover:shadow-2xl",
        "focus:outline-none focus:ring-2 focus:ring-metal/30 focus:ring-offset-2",
        "transition-all duration-500",
        "text-left flex flex-col",
        className
      )}
      onClick={onClick}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
      role="button"
      aria-describedby={ariaDescribedBy}
      {...props}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-metal/5 to-metal/10 opacity-30" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-12 -translate-x-12" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header - Fixed height for alignment */}
        <div className="h-20 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-metal/10 text-metal">
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-ink mb-1">
                {title}
              </h3>
              <p className="text-sm text-muted">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Description - Fixed height for alignment */}
        <div className="h-24">
          <p className="text-muted leading-relaxed text-sm">
            {description}
          </p>
        </div>

        {/* CTA Button - Fixed at bottom with no margin */}
        <div className="flex justify-start mt-auto">
          <motion.button 
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation()
              onClick()
            }}
          >
            {cta}
            <svg 
              className="ml-2 w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-metal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

      {/* Hidden description for screen readers */}
      <div id={ariaDescribedBy} className="sr-only">
        {title}: {subtitle}. Considerations: {considerationChips?.join(", ") || "N/A"}.
      </div>
    </motion.button>
  )
}