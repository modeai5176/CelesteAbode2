"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Calendar, Clock, MapPin, Loader2 } from "lucide-react";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle?: string;
  propertyLocation?: string;
}

export function ContactPopup({
  isOpen,
  onClose,
  propertyTitle,
  propertyLocation,
}: ContactPopupProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const data = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        message: formData.message,
        propertyTitle: propertyTitle || "",
        propertyLocation: propertyLocation || "",
      };

      const response = await fetch("/api/viewing", {
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
          console.log(
            "Viewing request submitted successfully:",
            result.messageId
          );

          // Reset form and close after success
          setTimeout(() => {
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              preferredDate: "",
              preferredTime: "",
              message: "",
            });
            onClose();
            setSubmitStatus("idle");
          }, 1500);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Popup */}
      <Card className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border-0 shadow-2xl">
        <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl font-semibold text-primary">
                  Schedule Property Viewing
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Book your personalized tour
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-10 w-10 rounded-full hover:bg-muted/50 transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {propertyTitle && (
            <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 text-primary" />
                {propertyLocation}
              </div>
              <h3 className="font-semibold text-foreground text-lg">
                {propertyTitle}
              </h3>
            </div>
          )}
        </CardHeader>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Personal Information
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label
                    htmlFor="firstName"
                    className="text-sm font-medium text-foreground"
                  >
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                    className="h-12 border-2 border-border focus:border-primary transition-colors duration-200"
                  />
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="lastName"
                    className="text-sm font-medium text-foreground"
                  >
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your last name"
                    className="h-12 border-2 border-border focus:border-primary transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="h-12 border-2 border-border focus:border-primary transition-colors duration-200"
                  />
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-foreground"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="h-12 border-2 border-border focus:border-primary transition-colors duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Preferred Viewing Time */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary/15 border border-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Preferred Viewing Time
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label
                    htmlFor="preferredDate"
                    className="text-sm font-medium text-foreground"
                  >
                    Preferred Date *
                  </Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="h-12 border-2 border-border focus:border-secondary transition-colors duration-200"
                  />
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="preferredTime"
                    className="text-sm font-medium text-foreground"
                  >
                    Preferred Time *
                  </Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) =>
                      handleSelectChange("preferredTime", value)
                    }
                  >
                    <SelectTrigger className="h-12 border-2 border-border focus:border-secondary transition-colors duration-200">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">9:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-accent font-semibold text-sm">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Additional Information
                </h3>
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Special Requirements or Questions
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special requirements, questions, or additional information you'd like to share..."
                  className="border-2 border-border focus:border-accent transition-colors duration-200 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 h-12 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Scheduling...
                  </>
                ) : (
                  "Schedule Viewing"
                )}
              </Button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="text-center text-green-600 text-sm bg-green-50 p-3 rounded-lg border border-green-200">
                ✅ Viewing scheduled successfully! We'll contact you within 2
                hours to confirm.
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
