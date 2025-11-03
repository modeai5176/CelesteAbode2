"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Chip, ChipGroup } from "./Chips"
import { ValueUpliftPanel } from "./ValueUpliftPanel"
import { IntentPayload, UserIntent, analytics } from "@/lib/analytics"

interface IntentModalProps {
  isOpen: boolean
  onClose: () => void
  intent: UserIntent
  onSubmit: (payload: IntentPayload) => void
  onWhatsApp?: (payload: IntentPayload) => void
  defaultMicroMarkets?: string[]
}

const microMarketOptions = [
  "Noida Expressway",
  "Yamuna Expressway", 
  "Gaur City",
  "Greater Noida",
  "Gurgaon",
  "Delhi NCR",
  "Mumbai",
  "Bangalore"
]

const configurationOptions = [
  "2 BHK",
  "3 BHK", 
  "4 BHK",
  "Villa",
  "Plot",
  "Penthouse"
]

const specialNeedsOptions = [
  "NRI workflows",
  "School radius",
  "Elder-friendly",
  "Rental yield",
  "Pet-friendly",
  "Gym/Club access"
]

export function IntentModal({
  isOpen,
  onClose,
  intent,
  onSubmit,
  onWhatsApp,
  defaultMicroMarkets = []
}: IntentModalProps) {
  const [payload, setPayload] = useState<IntentPayload>({
    intent,
    microMarkets: defaultMicroMarkets,
    configuration: [],
    specialNeeds: []
  })

  const [valueUpliftViewed, setValueUpliftViewed] = useState(false)

  useEffect(() => {
    if (isOpen) {
      analytics.se_drawer_opened(intent)
    }
  }, [isOpen, intent])

  const handleSubmit = () => {
    const finalPayload = {
      ...payload,
      valueUpliftViewed
    }
    analytics.se_submit_preferences(intent, finalPayload)
    onSubmit(finalPayload)
    onClose()
  }

  const handleWhatsApp = () => {
    if (onWhatsApp) {
      onWhatsApp(payload)
    }
  }

  const handleValueUpliftViewed = () => {
    setValueUpliftViewed(true)
    analytics.se_value_uplift_viewed(intent)
  }

  const getPreShortlistPreview = () => {
    const previews = {
      live: [
        "2-3 options ready by Q1 '26",
        "Liquidity: strong",
        "Commute optimized"
      ],
      invest: [
        "3-4 pre-launch picks",
        "Exit timeline: 3-5 years", 
        "ROI projection: 12-18%"
      ],
      signature: [
        "2 exclusive properties",
        "Possession: 18-24 months",
        "Brand pedigree verified"
      ]
    }
    return previews[intent]
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-lg max-h-[85vh] overflow-y-auto p-6">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-lg font-bold text-ink">
            {intent === "live" && "Buying to Live"}
            {intent === "invest" && "Investing for Returns"}
            {intent === "signature" && "Luxury & Signature Residences"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          {/* Budget Input */}
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-sm font-medium text-ink">
              Budget band
            </Label>
            <Input
              id="budget"
              placeholder="e.g., ₹1.2–1.5 Cr"
              value={payload.budgetText || ""}
              onChange={(e) => setPayload(prev => ({ ...prev, budgetText: e.target.value }))}
              className="border-metal/20 focus:border-metal/40"
            />
            <p className="text-xs text-muted">We work inside your band first.</p>
            <ValueUpliftPanel 
              intent={intent} 
              onValueUpliftViewed={handleValueUpliftViewed}
            />
          </div>

          {/* Possession Window */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-ink">Possession window</Label>
            <RadioGroup
              value={payload.possessionWindow || ""}
              onValueChange={(value) => setPayload(prev => ({ 
                ...prev, 
                possessionWindow: value as "0-3" | "3-9" | "9-18" 
              }))}
              className="grid grid-cols-3 gap-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="0-3" id="0-3" />
                <Label htmlFor="0-3" className="text-xs">0–3 mo</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3-9" id="3-9" />
                <Label htmlFor="3-9" className="text-xs">3–9 mo</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="9-18" id="9-18" />
                <Label htmlFor="9-18" className="text-xs">9–18 mo</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Micro Markets */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-ink">Preferred micro-markets</Label>
            <ChipGroup label="Micro markets" className="gap-1">
              {microMarketOptions.map((market) => (
                <Chip
                  key={market}
                  variant="outline"
                  selected={payload.microMarkets?.includes(market)}
                  onClick={() => {
                    const current = payload.microMarkets || []
                    const updated = current.includes(market)
                      ? current.filter(m => m !== market)
                      : [...current, market]
                    setPayload(prev => ({ ...prev, microMarkets: updated }))
                  }}
                  className="text-xs px-2 py-1"
                >
                  {market}
                </Chip>
              ))}
            </ChipGroup>
          </div>

          {/* Configuration */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-ink">Configuration</Label>
            <ChipGroup label="Configuration" className="gap-1">
              {configurationOptions.map((config) => (
                <Chip
                  key={config}
                  variant="outline"
                  selected={payload.configuration?.includes(config)}
                  onClick={() => {
                    const current = payload.configuration || []
                    const updated = current.includes(config)
                      ? current.filter(c => c !== config)
                      : [...current, config]
                    setPayload(prev => ({ ...prev, configuration: updated }))
                  }}
                  className="text-xs px-2 py-1"
                >
                  {config}
                </Chip>
              ))}
            </ChipGroup>
          </div>

          {/* Risk Appetite */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-ink">Risk appetite</Label>
            <div className="grid grid-cols-3 gap-1">
              {[
                { value: "conservative", label: "Conservative" },
                { value: "balanced", label: "Balanced" },
                { value: "aggressive", label: "Aggressive" }
              ].map(({ value, label }) => (
                <Button
                  key={value}
                  variant={payload.risk === value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPayload(prev => ({ ...prev, risk: value as any }))}
                  className="text-xs h-8"
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>

          {/* Special Needs */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-ink">Special needs</Label>
            <ChipGroup label="Special needs" className="gap-1">
              {specialNeedsOptions.map((need) => (
                <Chip
                  key={need}
                  variant="outline"
                  selected={payload.specialNeeds?.includes(need)}
                  onClick={() => {
                    const current = payload.specialNeeds || []
                    const updated = current.includes(need)
                      ? current.filter(n => n !== need)
                      : [...current, need]
                    setPayload(prev => ({ ...prev, specialNeeds: updated }))
                  }}
                  className="text-xs px-2 py-1"
                >
                  {need}
                </Chip>
              ))}
            </ChipGroup>
          </div>

          {/* Pre-shortlist Preview */}
          <div className="bg-metal/5 rounded-lg p-3 border border-metal/20">
            <h4 className="text-xs font-medium text-ink mb-1">Pre-shortlist Preview</h4>
            <ul className="space-y-0.5">
              {getPreShortlistPreview().map((item, index) => (
                <li key={index} className="text-xs text-muted">• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-metal/20 flex gap-2">
          {onWhatsApp && (
            <Button
              variant="outline"
              onClick={handleWhatsApp}
              className="flex-1 text-xs h-9"
            >
              Chat on WhatsApp
            </Button>
          )}
          <Button
            onClick={handleSubmit}
            className="flex-1 bg-primary hover:bg-primary/90 text-xs h-9"
          >
            Submit Preferences
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
