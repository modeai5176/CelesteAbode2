"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface ValueUpliftPanelProps {
  intent: "live" | "invest" | "signature"
  onValueUpliftViewed: () => void
  className?: string
}

export function ValueUpliftPanel({ 
  intent, 
  onValueUpliftViewed, 
  className 
}: ValueUpliftPanelProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    if (!isOpen) {
      onValueUpliftViewed()
    }
    setIsOpen(!isOpen)
  }

  const comparisonData = {
    live: {
      today: ["Good inventory", "Standard timeline", "Standard privacy", "Good liquidity"],
      plus10: ["Premium inventory", "Faster possession", "Enhanced privacy", "Strong liquidity"],
      plus20: ["Luxury inventory", "Guaranteed timeline", "Maximum privacy", "Premium liquidity"]
    },
    invest: {
      today: ["Standard returns", "Market timeline", "Standard risk", "Good exit"],
      plus10: ["Enhanced returns", "Faster timeline", "Lower risk", "Strong exit"],
      plus20: ["Premium returns", "Guaranteed timeline", "Minimal risk", "Premium exit"]
    },
    signature: {
      today: ["Quality brands", "Standard timeline", "Good exclusivity", "Standard prestige"],
      plus10: ["Premium brands", "Faster timeline", "High exclusivity", "Enhanced prestige"],
      plus20: ["Luxury brands", "Guaranteed timeline", "Maximum exclusivity", "Premium prestige"]
    }
  }

  const data = comparisonData[intent]

  return (
    <div className={cn("border border-metal/20 rounded-lg", className)}>
      <button
        onClick={handleToggle}
        className="w-full px-4 py-3 text-left text-sm text-metal hover:bg-metal/5 transition-colors duration-200 flex items-center justify-between"
      >
        <span>See what +10% unlocks</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-metal/10">
                      <th className="text-left py-2 text-muted font-medium">Factor</th>
                      <th className="text-center py-2 text-muted font-medium">Today</th>
                      <th className="text-center py-2 text-muted font-medium">+10%</th>
                      <th className="text-center py-2 text-muted font-medium">+20%</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-1">
                    <tr>
                      <td className="py-2 text-ink font-medium">Quality Tier</td>
                      <td className="py-2 text-center text-muted">{data.today[0]}</td>
                      <td className="py-2 text-center text-primary">{data.plus10[0]}</td>
                      <td className="py-2 text-center text-metal">{data.plus20[0]}</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-ink font-medium">Timeline</td>
                      <td className="py-2 text-center text-muted">{data.today[1]}</td>
                      <td className="py-2 text-center text-primary">{data.plus10[1]}</td>
                      <td className="py-2 text-center text-metal">{data.plus20[1]}</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-ink font-medium">Privacy/Exclusivity</td>
                      <td className="py-2 text-center text-muted">{data.today[2]}</td>
                      <td className="py-2 text-center text-primary">{data.plus10[2]}</td>
                      <td className="py-2 text-center text-metal">{data.plus20[2]}</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-ink font-medium">Liquidity</td>
                      <td className="py-2 text-center text-muted">{data.today[3]}</td>
                      <td className="py-2 text-center text-primary">{data.plus10[3]}</td>
                      <td className="py-2 text-center text-metal">{data.plus20[3]}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-3 p-3 bg-metal/5 rounded border-l-2 border-metal/30">
                <p className="text-xs text-muted leading-relaxed">
                  We only suggest stretching if it materially reduces risk or increases certainty.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
