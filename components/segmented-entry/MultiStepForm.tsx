"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Chip, ChipGroup } from "./Chips"
import { FormSubmissionData, sendFormSubmission } from "@/lib/email-service"
import { UserIntent } from "@/lib/analytics"
import { ChevronLeft, ChevronRight, Mail, Phone, User } from "lucide-react"

interface MultiStepFormProps {
  isOpen: boolean
  onClose: () => void
  intent: UserIntent
}

const stepLabels = {
  live: {
    title: "Buying to Live",
    subtitle: "Let's find your perfect home"
  },
  invest: {
    title: "Investing for Returns", 
    subtitle: "Let's maximize your investment potential"
  },
  signature: {
    title: "Luxury & Signature Residences",
    subtitle: "Let's explore exclusive properties"
  }
}

export function MultiStepForm({ isOpen, onClose, intent }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormSubmissionData>({
    intent,
    step1: {},
    step2: {},
    step3: { contactInfo: { name: '', email: '', phone: '' } }
  })

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const success = await sendFormSubmission(formData)
      if (success) {
        alert('Thank you! We\'ll get back to you within 24 hours.')
        onClose()
        // Reset form
        setCurrentStep(1)
        setFormData({
          intent,
          step1: {},
          step2: {},
          step3: { contactInfo: { name: '', email: '', phone: '' } }
        })
      } else {
        alert('Something went wrong. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep1 = () => {
    const locationOptions = {
      live: ["Noida Expressway", "Yamuna Expressway", "Gaur City", "Greater Noida", "Gurgaon", "Delhi NCR"],
      invest: ["Noida Expressway", "Yamuna Expressway", "Gurgaon", "Mumbai", "Bangalore", "Pune"],
      signature: ["Gurgaon", "Mumbai", "Bangalore", "Delhi NCR", "Pune", "Goa"]
    }

    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-ink mb-2">Step 1: Basic Requirements</h3>
          <p className="text-sm text-muted">Help us understand your needs</p>
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <Label htmlFor="budget" className="text-sm font-medium text-ink">
            Budget Range
          </Label>
          <Input
            id="budget"
            placeholder="e.g., ₹1.2-1.5 Cr"
            value={formData.step1.budget || ''}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              step1: { ...prev.step1, budget: e.target.value }
            }))}
            className="border-metal/20 focus:border-metal/40"
          />
        </div>

        {/* Possession Window */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-ink">When do you need possession?</Label>
          <RadioGroup
            value={formData.step1.possessionWindow || ''}
            onValueChange={(value) => setFormData(prev => ({
              ...prev,
              step1: { ...prev.step1, possessionWindow: value }
            }))}
            className="grid grid-cols-3 gap-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="0-3" id="0-3" />
              <Label htmlFor="0-3" className="text-xs">0-3 months</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3-9" id="3-9" />
              <Label htmlFor="3-9" className="text-xs">3-9 months</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="9-18" id="9-18" />
              <Label htmlFor="9-18" className="text-xs">9-18 months</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Preferred Locations */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-ink">Preferred Locations</Label>
          <ChipGroup label="Locations" className="gap-1">
            {locationOptions[intent].map((location) => (
              <Chip
                key={location}
                variant="outline"
                selected={formData.step1.location?.includes(location)}
                onClick={() => {
                  const current = formData.step1.location || []
                  const updated = current.includes(location)
                    ? current.filter(l => l !== location)
                    : [...current, location]
                  setFormData(prev => ({
                    ...prev,
                    step1: { ...prev.step1, location: updated }
                  }))
                }}
                className="text-xs px-2 py-1"
              >
                {location}
              </Chip>
            ))}
          </ChipGroup>
        </div>
      </div>
    )
  }

  const renderStep2 = () => {
    const configurationOptions = {
      live: ["2 BHK", "3 BHK", "4 BHK", "Villa", "Penthouse"],
      invest: ["2 BHK", "3 BHK", "4 BHK", "Villa", "Plot", "Commercial"],
      signature: ["3 BHK", "4 BHK", "Villa", "Penthouse", "Duplex", "Penthouses"]
    }

    const priorityOptions = {
      live: ["Commute time", "School proximity", "Hospital access", "Shopping centers", "Parks & recreation", "Public transport"],
      invest: ["ROI potential", "Location growth", "Developer reputation", "Rental yield", "Exit liquidity", "Market trends"],
      signature: ["Brand value", "Exclusivity", "Amenities", "Privacy", "Security", "Lifestyle"]
    }

    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-ink mb-2">Step 2: Specific Preferences</h3>
          <p className="text-sm text-muted">Tell us more about your requirements</p>
        </div>

        {/* Configuration */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-ink">Property Configuration</Label>
          <ChipGroup label="Configuration" className="gap-1">
            {configurationOptions[intent].map((config) => (
              <Chip
                key={config}
                variant="outline"
                selected={formData.step2.configuration?.includes(config)}
                onClick={() => {
                  const current = formData.step2.configuration || []
                  const updated = current.includes(config)
                    ? current.filter(c => c !== config)
                    : [...current, config]
                  setFormData(prev => ({
                    ...prev,
                    step2: { ...prev.step2, configuration: updated }
                  }))
                }}
                className="text-xs px-2 py-1"
              >
                {config}
              </Chip>
            ))}
          </ChipGroup>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <Label htmlFor="timeline" className="text-sm font-medium text-ink">
            Investment Timeline
          </Label>
          <Input
            id="timeline"
            placeholder="e.g., 3-5 years"
            value={formData.step2.timeline || ''}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              step2: { ...prev.step2, timeline: e.target.value }
            }))}
            className="border-metal/20 focus:border-metal/40"
          />
        </div>

        {/* Priorities */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-ink">What matters most to you?</Label>
          <ChipGroup label="Priorities" className="gap-1">
            {priorityOptions[intent].map((priority) => (
              <Chip
                key={priority}
                variant="outline"
                selected={formData.step2.priorities?.includes(priority)}
                onClick={() => {
                  const current = formData.step2.priorities || []
                  const updated = current.includes(priority)
                    ? current.filter(p => p !== priority)
                    : [...current, priority]
                  setFormData(prev => ({
                    ...prev,
                    step2: { ...prev.step2, priorities: updated }
                  }))
                }}
                className="text-xs px-2 py-1"
              >
                {priority}
              </Chip>
            ))}
          </ChipGroup>
        </div>
      </div>
    )
  }

  const renderStep3 = () => {
    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-ink mb-2">Step 3: Contact Information</h3>
          <p className="text-sm text-muted">We'll get back to you within 24 hours</p>
        </div>

        {/* Contact Form */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-ink flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name *
            </Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.step3.contactInfo.name}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                step3: {
                  ...prev.step3,
                  contactInfo: { ...prev.step3.contactInfo, name: e.target.value }
                }
              }))}
              className="border-metal/20 focus:border-metal/40"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-ink flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.step3.contactInfo.email}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                step3: {
                  ...prev.step3,
                  contactInfo: { ...prev.step3.contactInfo, email: e.target.value }
                }
              }))}
              className="border-metal/20 focus:border-metal/40"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-ink flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number *
            </Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              value={formData.step3.contactInfo.phone}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                step3: {
                  ...prev.step3,
                  contactInfo: { ...prev.step3.contactInfo, phone: e.target.value }
                }
              }))}
              className="border-metal/20 focus:border-metal/40"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm font-medium text-ink">
              Additional Notes (Optional)
            </Label>
            <Textarea
              id="notes"
              placeholder="Any specific requirements or questions..."
              value={formData.step3.additionalNotes || ''}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                step3: { ...prev.step3, additionalNotes: e.target.value }
              }))}
              className="border-metal/20 focus:border-metal/40 min-h-[80px]"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-lg font-bold text-ink">
            {stepLabels[intent].title}
          </DialogTitle>
          <p className="text-sm text-muted">{stepLabels[intent].subtitle}</p>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted">Step {currentStep} of 3</span>
            <span className="text-xs text-muted">{Math.round((currentStep / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-muted/30 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-8 pt-4 border-t border-metal/20 flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          {currentStep < 3 ? (
            <Button
              onClick={handleNext}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !formData.step3.contactInfo.name || !formData.step3.contactInfo.email || !formData.step3.contactInfo.phone}
              className="bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? 'Submitting...' : 'Submit & Get Recommendations'}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
