"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ContactPopup } from "@/components/contact-popup"
import { MapPin, Play, Star, CheckCircle, Building2, Clock, Users, Award, Car, Trees, Shield, Zap, Heart, Trophy } from "lucide-react"

export default function Estate360Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<{ title: string; location: string } | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const handleContact = () => {
    setSelectedProperty({
      title: "ESTATE 360",
      location: "36A, Dwarka Expressway, Gurgaon"
    })
    setIsPopupOpen(true)
  }

  const trailblazingFeatures = [
    "11.8 Acres of land",
    "6 Luxury Towers (G+38 Floors)",
    "2 Towers by Antara",
    "2-to-a-core Apartment Experience",
    "One of a kind Inter-generational project",
    "Non-vehicular movement on the ground level",
    "Sunken Garden drop-offs",
    "Premium zero-maintenance contemporary facade",
    "Prime location of 36A, Dwarka Expressway",
    "Amenities dedicated to all generations (1L+ sqft of amenities)"
  ]

  const amenityCategories = [
    {
      category: "Lifestyle Amenities",
      icon: <Heart className="w-5 h-5" />,
      description: "Premium lifestyle facilities for modern living"
    },
    {
      category: "Sports Amenities",
      icon: <Trophy className="w-5 h-5" />,
      description: "World-class sports and fitness facilities"
    },
    {
      category: "Healthcare Amenities",
      icon: <Shield className="w-5 h-5" />,
      description: "Health and wellness focused amenities"
    },
    {
      category: "Daily Needs Amenities",
      icon: <Star className="w-5 h-5" />,
      description: "Essential services and conveniences"
    },
    {
      category: "Concierge Services",
      icon: <Users className="w-5 h-5" />,
      description: "24/7 personalized assistance"
    }
  ]

  const projectHighlights = [
    {
      feature: "Land Area",
      value: "11.8 Acres",
      description: "Spacious development with room for all amenities"
    },
    {
      feature: "Tower Configuration",
      value: "6 Luxury Towers",
      description: "G+38 floors of premium living spaces"
    },
    {
      feature: "Antara Partnership",
      value: "2 Towers",
      description: "Premium towers developed in collaboration with Antara"
    },
    {
      feature: "Apartment Design",
      value: "2-to-a-core",
      description: "Exclusive living experience with maximum privacy"
    },
    {
      feature: "Ground Level",
      value: "Non-vehicular",
      description: "Safe pedestrian-friendly environment"
    },
    {
      feature: "Amenity Space",
      value: "1L+ sqft",
      description: "Extensive facilities for all age groups"
    }
  ]

  const locationAdvantages = [
    "Prime location on 36A, Dwarka Expressway",
    "Excellent connectivity to Delhi and Gurgaon",
    "Proximity to major business districts",
    "Access to premium shopping and entertainment",
    "Well-connected transportation network",
    "Future development potential"
  ]

  const communityFeatures = [
    "Inter-generational living design",
    "Sunken Garden with scenic views",
    "Premium contemporary facade",
    "Zero-maintenance exteriors",
    "Landscaped open spaces",
    "Modern architectural excellence"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
          <Image
            src="/ESTATE360/DroneViewTowers.png"
            alt="Estate 360 - Inter-Generational Luxury Living"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-6xl mx-auto">
              <Badge className="bg-secondary text-white mb-4">Under Construction</Badge>
              <h1 className="text-4xl md:text-6xl font-semibold mb-4">ESTATE 360</h1>
              <p className="text-xl md:text-2xl mb-6">Inter-Generational Luxury Living</p>
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
                <span className="text-sm text-ink-foreground/80">Land Area</span>
                <span className="font-semibold">11.8 Acres</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Status</span>
                <span className="font-semibold">Under Construction</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Developer</span>
                <span className="font-semibold">MAX ESTATES GROUP</span>
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
                { id: "features", label: "Features" },
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
                  Trailblazing Features
                </h2>
                <p className="text-xl text-graphite max-w-3xl mx-auto">
                  Estate 360 is a revolutionary inter-generational project that redefines luxury living 
                  with its innovative design, premium amenities, and commitment to creating spaces for all generations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-ink mb-4">Project Highlights</h3>
                    <ul className="space-y-3">
                      {trailblazingFeatures.slice(0, 5).map((feature, index) => (
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
                    <h3 className="text-2xl font-semibold text-ink mb-4">More Features</h3>
                    <ul className="space-y-3">
                      {trailblazingFeatures.slice(5).map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-graphite">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {projectHighlights.map((highlight, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-semibold text-secondary mb-2">{highlight.value}</div>
                      <h4 className="font-semibold text-ink mb-2">{highlight.feature}</h4>
                      <p className="text-sm text-graphite">{highlight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-ink mb-4">Inter-Generational Living</h3>
                <p className="text-lg text-graphite mb-6">
                  Estate 360 is designed to bring together people of all ages, creating a vibrant community 
                  where every generation can thrive. Our amenities and design philosophy cater to the diverse 
                  needs of modern families.
                </p>
                <Button 
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg"
                  onClick={handleContact}
                >
                  Schedule Viewing
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
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { src: "/ESTATE360/DroneViewTowers.png", alt: "Drone View of Towers" },
                  { src: "/ESTATE360/TheHub.png", alt: "The Hub" },
                  { src: "/ESTATE360/LagoonPool.png", alt: "Lagoon Pool" },
                  { src: "/ESTATE360/LagoonPool2.png", alt: "Lagoon Pool View 2" },
                  { src: "/ESTATE360/SerpentineLake.png", alt: "Serpentine Lake" },
                  { src: "/ESTATE360/WraparoundBalcony.png", alt: "Wraparound Balcony" }
                ].map((image, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === "features" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Revolutionary Features
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-secondary" />
                      Architectural Excellence
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">6 Luxury Towers with G+38 floors</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Premium zero-maintenance contemporary facade</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">2-to-a-core apartment experience</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Non-vehicular ground level design</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4 flex items-center gap-2">
                      <Trees className="w-5 h-5 text-secondary" />
                      Green Living
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">11.8 acres of landscaped development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Sunken Garden drop-offs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Extensive open spaces and greenery</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Sustainable design principles</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-ink mb-4 text-center">Antara Partnership</h3>
                  <p className="text-graphite text-center mb-4">
                    Estate 360 features 2 exclusive towers developed in collaboration with Antara, 
                    bringing their signature luxury and quality standards to this prestigious project.
                  </p>
                  <div className="bg-secondary/10 p-4 rounded-lg text-center">
                    <p className="text-secondary font-medium">
                      Experience the Antara difference in luxury living
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Amenities Tab */}
          {activeTab === "amenities" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Amenities for All Generations
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {amenityCategories.map((category, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-ink mb-4 flex items-center gap-2">
                        {category.icon}
                        {category.category}
                      </h3>
                      <p className="text-graphite mb-4">{category.description}</p>
                      <div className="bg-secondary/5 p-4 rounded-lg">
                        <p className="text-sm text-secondary">
                          <strong>1L+ sqft</strong> of dedicated amenity space ensures every generation 
                          has access to world-class facilities and services.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-ink mb-4 text-center">Community Amenities</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {communityFeatures.map((feature, index) => (
                      <div key={index} className="text-center p-4 bg-secondary/5 rounded-lg">
                        <Star className="w-8 h-8 text-secondary mx-auto mb-2" />
                        <p className="text-graphite">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Location Tab */}
          {activeTab === "location" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Prime Location
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-secondary" />
                      Location Advantages
                    </h3>
                    <ul className="space-y-3">
                      {locationAdvantages.map((advantage, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-graphite">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4 flex items-center gap-2">
                      <Car className="w-5 h-5 text-secondary" />
                      Connectivity
                    </h3>
                    <p className="text-graphite mb-4">
                      Located on 36A, Dwarka Expressway, Estate 360 offers excellent connectivity 
                      to Delhi, Gurgaon, and surrounding areas.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        <strong>Dwarka Expressway:</strong> One of the most important infrastructure 
                        projects connecting Delhi NCR, providing seamless access to major destinations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-ink mb-4">Investment Potential</h3>
                  <p className="text-graphite text-lg leading-relaxed">
                    Estate 360's prime location on Dwarka Expressway, combined with its innovative design 
                    and extensive amenities, makes it an attractive investment opportunity. The area is witnessing 
                    rapid development and infrastructure growth, ensuring strong appreciation potential.
                  </p>
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
