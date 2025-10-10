"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ContactPopup } from "@/components/contact-popup"
import { MapPin, Play, Star, CheckCircle, Building2, Trees, Shield, Award, Clock, Users, Video, Image as ImageIcon, Zap, Car, Heart, Dumbbell, Gamepad2, Home, Wifi, Leaf } from "lucide-react"

export default function EterniaPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<{ title: string; location: string } | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const handleContact = () => {
    setSelectedProperty({
      title: "ETERNIA",
      location: "Tech Zone IV, Greater Noida (W)"
    })
    setIsPopupOpen(true)
  }

  const features = [
    "Premium residences with skyline views",
    "Facing a 100m fully developed green belt",
    "Located on 130m wide Noida–Greater Noida Link Road",
    "EV charging station & sustainable features",
    "More usable space with optimal saleable ratio",
    "Double-height entrance lobby with symmetrical layout"
  ]

  const unitConfigurations = [
    {
      type: "3 BHK",
      carpet: "1086 sq.ft.",
      builtUp: "1532 sq.ft.",
      saleable: "1932 sq.ft."
    },
    {
      type: "3 BHK + Study",
      carpet: "1333 sq.ft.",
      builtUp: "1785 sq.ft.",
      saleable: "2239 sq.ft."
    },
    {
      type: "4 BHK + Study",
      carpet: "1599 sq.ft.",
      builtUp: "2088 sq.ft.",
      saleable: "2625 sq.ft."
    }
  ]

  const amenities = [
    { category: "Wellness", items: ["Yoga & Aerobics", "Swimming Pool", "Gym", "Jogging Track", "Multipurpose Court"] },
    { category: "Recreation", items: ["Indoor Games", "Billiards Lounge", "Multipurpose Hall", "Chip & Putting Greens"] },
    { category: "Family & Comfort", items: ["Toddlers' Play Room", "Senior Citizen Garden", "Topiary Garden", "Sit-out Plazas"] },
    { category: "Convenience", items: ["Lounge in each tower", "EV Car Charging", "Water Features with Deck Seating"] }
  ]

  const locationAdvantages = [
    { category: "Healthcare", items: ["Numed Hospital (3.5 km)", "Yatharth (4 km)", "Fortis (11 km)"] },
    { category: "Schools", items: ["Shri Ram Universal (2 km)", "Ryan International (2.8 km)", "Lotus Valley (3.5 km)"] },
    { category: "Business Hubs", items: ["R Systems", "Kyndryl", "Artha Infratech (3.5 km)", "Yotta Data Center (7 km)"] },
    { category: "Leisure & Retail", items: ["D-Mart (3 km)", "Gaur City Mall (4 km)", "Blue Sapphire Mall (4.5 km)"] }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
          <Image
            src="/Eternia/1.png"
            alt="Eternia - Premium Residences in Greater Noida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-6xl mx-auto">
              <Badge className="bg-secondary text-white mb-4">Premium Living</Badge>
              <h1 className="text-4xl md:text-6xl font-semibold mb-4">ETERNIA</h1>
              <p className="text-xl md:text-2xl mb-6">Greater Noida (W) - Premium Residences</p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg"
                  onClick={handleContact}
                >
                  Schedule Viewing
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white text-ink bg-white hover:bg-white/90 hover:text-black px-8 py-4 text-lg"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-primary text-white py-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Building2 className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Project Type</span>
                <span className="font-semibold">Premium Apartments</span>
              </div>
              <div className="flex flex-col items-center">
                <Trees className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Total Area</span>
                <span className="font-semibold">6 Acres</span>
              </div>
              <div className="flex flex-col items-center">
                <Building2 className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Towers</span>
                <span className="font-semibold">6 Towers | G+30</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Clubhouse</span>
                <span className="font-semibold">25,000 sq.ft.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="border-b">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap gap-6">
              {[
                { id: "overview", label: "Overview" },
                { id: "gallery", label: "Gallery" },
                { id: "configurations", label: "Unit Configurations" },
                { id: "amenities", label: "Amenities" },
                { id: "location", label: "Location" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-secondary text-secondary"
                      : "border-transparent text-graphite hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-6">
                  Why Choose Eternia?
                </h2>
                <p className="text-xl text-graphite max-w-3xl mx-auto">
                  Eternia brings luxury, comfort, and convenience together — a perfect home in the heart of Greater Noida.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-ink mb-4">Project Highlights</h3>
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-graphite">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-ink mb-4">Special Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Double-height entrance lobby</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Symmetrical layout design</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Abundant light & ventilation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">4 lifts per tower</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-ink mb-6 text-center">Project Overview</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-graphite">Location:</span>
                        <span className="font-semibold">Tech Zone IV, Greater Noida (W)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-graphite">Total Area:</span>
                        <span className="font-semibold">6 Acres</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-graphite">Towers:</span>
                        <span className="font-semibold">6 Towers | G+30 Floors</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-graphite">Configurations:</span>
                        <span className="font-semibold">3 BHK, 3 BHK + Study, 4 BHK + Study</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-graphite">Clubhouse:</span>
                        <span className="font-semibold">25,000 sq.ft. lifestyle hub</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-graphite">Road Width:</span>
                        <span className="font-semibold">130m wide Noida–Greater Noida Link Road</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === "gallery" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Project Gallery
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "/Eternia/1.png",
                  "/Eternia/2.png",
                  "/Eternia/3.png",
                  "/Eternia/4.png",
                  "/Eternia/5.png",
                  "/Eternia/6.png",
                  "/Eternia/7.png",
                  "/Eternia/8.png"
                ].map((image, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <Image
                      src={image}
                      alt={`Eternia Gallery ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Unit Configurations Tab */}
          {activeTab === "configurations" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Unit Configurations
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {unitConfigurations.map((unit, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-ink mb-4 text-center">{unit.type}</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                          <span className="text-sm text-graphite">Carpet Area:</span>
                          <span className="font-semibold text-sm">{unit.carpet}</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                          <span className="text-sm text-graphite">Built-up Area:</span>
                          <span className="font-semibold text-sm">{unit.builtUp}</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-secondary/10 rounded">
                          <span className="text-sm text-graphite">Saleable Area:</span>
                          <span className="font-semibold text-sm text-secondary">{unit.saleable}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Amenities Tab */}
          {activeTab === "amenities" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                World-Class Amenities
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {amenities.map((category, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-ink mb-4 flex items-center gap-2">
                        {category.category === "Wellness" && <Dumbbell className="w-5 h-5 text-secondary" />}
                        {category.category === "Recreation" && <Gamepad2 className="w-5 h-5 text-secondary" />}
                        {category.category === "Family & Comfort" && <Heart className="w-5 h-5 text-secondary" />}
                        {category.category === "Convenience" && <Home className="w-5 h-5 text-secondary" />}
                        {category.category}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span className="text-graphite">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Location Tab */}
          {activeTab === "location" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Location Advantage
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {locationAdvantages.map((category, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-ink mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-secondary" />
                        {category.category}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span className="text-graphite">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-ink mb-4">Connectivity</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-secondary mb-2">Airports</h4>
                      <p className="text-sm text-graphite">IGI Airport (40 km)</p>
                      <p className="text-sm text-graphite">Noida International Airport (60 km)</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-secondary mb-2">Metro</h4>
                      <p className="text-sm text-graphite">Proposed Metro at Ek Murti Chowk</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-secondary mb-2">Green Belt</h4>
                      <p className="text-sm text-graphite">100m fully developed green belt</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

      </main>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false)
          setSelectedProperty(null)
        }}
        propertyTitle={selectedProperty?.title}
        propertyLocation={selectedProperty?.location}
      />

      <Footer />
    </div>
  )
}
