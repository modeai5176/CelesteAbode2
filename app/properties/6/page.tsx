"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ContactPopup } from "@/components/contact-popup"
import { MapPin, Play, Star, CheckCircle, Building2, Trees, Shield, Award, Clock, Users, Video, Image as ImageIcon, Zap, Car, Heart, Dumbbell, Gamepad2, Home, Wifi, Leaf, Waves, Utensils, Calendar } from "lucide-react"

export default function BrookRivuletPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<{ title: string; location: string } | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const handleContact = () => {
    setSelectedProperty({
      title: "THE BROOK & THE RIVULET",
      location: "Greater Noida (Prime 3-Side Open Corner Plot)"
    })
    setIsPopupOpen(true)
  }

  const features = [
    "Premium high-rise residences with modern architecture",
    "3-side open plot for maximum light & ventilation",
    "Earthquake-resistant RCC construction with MIVAN Formwork",
    "EV charging stations for sustainable living",
    "Mechanical car parking provision (2 cars per bay)",
    "Smog guns at each tower to combat pollution"
  ]

  const unitSpecifications = [
    {
      category: "Living & Dining",
      items: ["Vitrified tile flooring (600×1200 mm)", "Finished walls/ceiling with OBD", "DTH/Optical Fibre provision"]
    },
    {
      category: "Bedrooms", 
      items: ["Wooden textured tiles in master", "Vitrified tiles in others", "Finished walls & ceiling"]
    },
    {
      category: "Kitchen",
      items: ["Granite/vitrified countertop", "Designer ceramic tiles", "SS sink with premium fittings"]
    },
    {
      category: "Toilets",
      items: ["Anti-skid ceramic tiles", "Wall tiles up to door height", "White sanitary ware with premium CP fittings"]
    }
  ]

  const amenities = [
    { category: "Lifestyle", items: ["Co-working Spaces", "Luxury Guest Rooms", "Kid's Creche/Play Area"] },
    { category: "Wellness", items: ["Fully-equipped Gym", "Swimming Pool with Jacuzzi", "Steam & Sauna"] },
    { category: "Recreation", items: ["Billiards Lounge", "Table Tennis", "Cards Room", "Multipurpose Hall"] },
    { category: "Events", items: ["Grand Banquet Hall", "Terrace Ledge/Gazebo", "Kitchen & Buffet Counters"] }
  ]

  const locationAdvantages = [
    { category: "Healthcare", items: ["Numed Hospital (3.5 km)", "Yatharth (4 km)", "Fortis (11 km)"] },
    { category: "Schools", items: ["Shri Ram Universal (2 km)", "Ryan International (2.8 km)", "Lotus Valley (3.5 km)"] },
    { category: "Business Hubs", items: ["R Systems (3.5 km)", "Kyndryl (3.5 km)", "Artha Infratech (3.5 km)", "Yotta Data Center (7 km)"] },
    { category: "Leisure & Retail", items: ["D-Mart (3 km)", "Gaur City Mall (4 km)", "Blue Sapphire Mall (4.5 km)"] }
  ]

  const images = [
    "/Brook and Rivulet/1.png",
    "/Brook and Rivulet/2.png", 
    "/Brook and Rivulet/3.png",
    "/Brook and Rivulet/4.png",
    "/Brook and Rivulet/5.png",
    "/Brook and Rivulet/6.png"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)}
        propertyTitle={selectedProperty?.title || "THE BROOK & THE RIVULET"}
        propertyLocation={selectedProperty?.location || "Greater Noida (Prime 3-Side Open Corner Plot)"}
      />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
          <Image
            src="/Brook and Rivulet/1.png"
            alt="The Brook & The Rivulet - Premium High-Rise Residences"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-6xl mx-auto">
              <Badge className="bg-secondary text-white mb-4">Premium Living</Badge>
              <h1 className="text-4xl md:text-6xl font-semibold mb-4">THE BROOK & THE RIVULET</h1>
              <p className="text-xl md:text-2xl mb-6">Greater Noida - Premium High-Rise Residences</p>
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
                <span className="font-semibold">Premium High-Rise</span>
              </div>
              <div className="flex flex-col items-center">
                <Trees className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Plot Type</span>
                <span className="font-semibold">3-Side Open</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Status</span>
                <span className="font-semibold">Under Construction</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Developer</span>
                <span className="font-semibold">Renowned Developer</span>
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
                { id: "specifications", label: "Specifications" },
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
                  Why Choose The Brook & The Rivulet?
                </h2>
                <p className="text-xl text-graphite max-w-3xl mx-auto">
                  Experience luxury living in Greater Noida's most prestigious location with premium amenities, 
                  world-class construction, and sustainable features that redefine modern living.
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
                    <h3 className="text-2xl font-semibold text-ink mb-4">Construction Excellence</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Earthquake-resistant RCC with MIVAN Formwork</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">EV charging stations for sustainable living</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Car className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Mechanical car parking (2 cars per bay)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Leaf className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Smog guns to combat pollution</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-ink mb-6 text-center">Clubhouse & Lifestyle</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center p-6 border rounded-lg">
                      <h4 className="text-lg font-semibold text-secondary mb-2">Paper Boat (Brook)</h4>
                      <p className="text-sm text-graphite">15,375 sq.ft. themed luxury clubhouse</p>
                    </div>
                    <div className="text-center p-6 border rounded-lg">
                      <h4 className="text-lg font-semibold text-secondary mb-2">Pebble Castle (Rivulet)</h4>
                      <p className="text-sm text-graphite">15,375 sq.ft. themed luxury clubhouse</p>
                    </div>
                  </div>
                  <p className="text-center text-sm text-graphite mt-4">
                    Total: 30,750 sq.ft. of premium lifestyle amenities
                  </p>
                </CardContent>
              </Card>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-ink mb-4">Ready to Experience Luxury?</h3>
                <p className="text-lg text-graphite mb-6">
                  The Brook & The Rivulet combines upscale living with peace of mind — blending luxury, 
                  wellness, and sustainability in Greater Noida.
                </p>
                <Button 
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg"
                  onClick={handleContact}
                >
                  Schedule Your Visit
                </Button>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === "gallery" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Project Gallery
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="relative group cursor-pointer">
                    <Image
                      src="/Brook and Rivulet/1.png"
                      alt="The Brook & The Rivulet - Main View"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group cursor-pointer">
                      <Image
                        src="/Brook and Rivulet/2.png"
                        alt="The Brook & The Rivulet - View 2"
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="relative group cursor-pointer">
                      <Image
                        src="/Brook and Rivulet/3.png"
                        alt="The Brook & The Rivulet - View 3"
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group cursor-pointer">
                      <Image
                        src="/Brook and Rivulet/4.png"
                        alt="The Brook & The Rivulet - View 4"
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="relative group cursor-pointer">
                      <Image
                        src="/Brook and Rivulet/5.png"
                        alt="The Brook & The Rivulet - View 5"
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer">
                    <Image
                      src="/Brook and Rivulet/6.png"
                      alt="The Brook & The Rivulet - View 6"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === "specifications" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Unit Specifications
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {unitSpecifications.map((spec, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-ink mb-4">{spec.category}</h3>
                      <ul className="space-y-2">
                        {spec.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
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
                  <h3 className="text-xl font-semibold text-ink mb-4 text-center">Additional Features</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Doors & Windows</h4>
                      <ul className="space-y-1 text-sm text-graphite">
                        <li>• Aluminium/UPVC 3-track doors with mesh shutter</li>
                        <li>• WPC/Hardwood laminated doors for interiors</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Structure</h4>
                      <ul className="space-y-1 text-sm text-graphite">
                        <li>• RCC with MIVAN Formwork</li>
                        <li>• Earthquake-resistant construction</li>
                        <li>• 3100 mm floor-to-ceiling height</li>
                        <li>• 2400 mm door height (internal & external)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                      <h3 className="text-xl font-semibold text-ink mb-4">{category.category}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                            <span className="text-graphite">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-ink mb-4">Clubhouse Details</h3>
                  <p className="text-lg text-graphite mb-4">
                    Paper Boat (Brook) & Pebble Castle (Rivulet) – 30,750 sq.ft. of luxury leisure
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <span>2 Luxury Guest Rooms</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Dumbbell className="w-4 h-4 text-secondary" />
                      <span>Fully-equipped Gym</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Waves className="w-4 h-4 text-secondary" />
                      <span>Swimming Pool + Jacuzzi</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Location Tab */}
          {activeTab === "location" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Location Advantage
              </h2>
              
              <div className="text-center mb-8">
                <p className="text-lg text-graphite max-w-3xl mx-auto">
                  Nestled away from city chaos, offering tranquility & upscale lifestyle with seamless urban convenience nearby
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {locationAdvantages.map((category, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-ink mb-4">{category.category}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-graphite">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-ink mb-4">Connectivity</h3>
                  <p className="text-graphite">
                    IGI Airport (40 km) | Noida International Airport (60 km) | Proposed Metro at Ek Murti Chowk
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}