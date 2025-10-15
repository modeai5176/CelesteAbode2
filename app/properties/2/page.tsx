"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ContactPopup } from "@/components/contact-popup"
import { MapPin, Play, Star, CheckCircle, Building2, Clock, Users, Award, Car, GraduationCap, ShoppingBag, Heart, Trophy } from "lucide-react"

export default function IvoryCountyPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<{ title: string; location: string } | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const handleContact = () => {
    setSelectedProperty({
      title: "IVORY COUNTY",
      location: "Sector 115, Noida"
    })
    setIsPopupOpen(true)
  }

  const locationAdvantages = [
    "Prime location in Sector 115, Noida",
    "Excellent connectivity via Noida–Greater Noida Expressway",
    "FNG Expressway and DND Flyway access",
    "Close to Amity University, Mall of India",
    "Noida Film City, Botanical Garden, Noida Stadium"
  ]

  const connectivity = [
    { destination: "City Centre & Amity University", time: "15 mins" },
    { destination: "Fortis Hospital", time: "17 mins" },
    { destination: "Mall of India", time: "19 mins" },
    { destination: "Akshardham Temple", time: "25 mins" }
  ]

  const amenities = [
    {
      category: "Sports Zone",
      items: ["Cricket nets", "Tennis", "Paddle court", "Basketball", "Badminton", "Skating rink"]
    },
    {
      category: "Wellness",
      items: ["Yoga garden", "Meditation zone", "Spa", "Gym", "Salon"]
    },
    {
      category: "Recreation",
      items: ["Amphitheatre", "Mini Theatre", "Festival Court", "Music & Performance Plaza"]
    },
    {
      category: "Leisure",
      items: ["Swimming pool", "Wet play area", "Energy Bar Café", "Reading room", "Guest rooms"]
    },
    {
      category: "Kids Zone",
      items: ["Dedicated children's play area", "Adventure activities"]
    }
  ]

  const uniqueExperiences = [
    "Culinary Island dining on water",
    "Nature Bridge with scenic views",
    "Sculpture Garden blending art & nature"
  ]

  const specifications = [
    {
      category: "Construction",
      items: ["Fire-resistant materials", "Sprinklers & smoke detectors", "Earthquake-resistant RCC framed structure"]
    },
    {
      category: "Premium Finishes",
      items: ["Vitrified tiles", "Laminated wooden flooring", "Anti-skid balcony tiles"]
    },
    {
      category: "Kitchen",
      items: ["Modular cabinets", "Granite counters", "Stainless steel sink", "RO system"]
    },
    {
      category: "Bathrooms",
      items: ["Branded fittings", "Wall-mounted W/C", "Designer ceramic tiles"]
    },
    {
      category: "Electricals",
      items: ["Split ACs in bedrooms", "Provision in dining/living", "Geysers in bathrooms"]
    },
    {
      category: "Balcony Railings",
      items: ["Stainless steel/glass"]
    }
  ]

  const developerInfo = [
    { metric: "Years of Legacy", value: "35+ Years" },
    { metric: "Delivered Real Estate", value: "160 million sq. ft." },
    { metric: "Happy Families", value: "7000+" },
    { metric: "Trust Factor", value: "On-time delivery & high-quality construction" }
  ]

  const unitSizes = [
    { type: "3 BHK", size: "2034 to 2304 sq.ft." },
    { type: "4 BHK", size: "2727 to 3195 sq.ft." },
    { type: "5 BHK & Penthouses", size: "Larger luxury formats" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
          <Image
            src="/IvoryCounty/SocietyTowersView.png"
            alt="Ivory County - Premium Living in Sector 115"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-6xl mx-auto">
              <Badge className="bg-secondary text-white mb-4">Under Construction</Badge>
              <h1 className="text-4xl md:text-6xl font-semibold mb-4">IVORY COUNTY</h1>
              <p className="text-xl md:text-2xl mb-6">Premium Living in Sector 115, Noida</p>
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
                  className="border-2 border-white text-ink bg-white hover:bg-white/90 hover:text-[#000000] px-8 py-4 text-lg"
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
                <span className="font-semibold">Luxury Apartments</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Unit Types</span>
                <span className="font-semibold">3, 4 & 5 BHK</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Status</span>
                <span className="font-semibold">Under Construction</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Developer</span>
                <span className="font-semibold">County Group</span>
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
                { id: "amenities", label: "Amenities" },
                { id: "specifications", label: "Specifications" },
                { id: "location", label: "Location" },
                { id: "developer", label: "Developer" }
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
                  Welcome to Ivory County
                </h2>
                <p className="text-xl text-graphite max-w-3xl mx-auto">
                  Luxurious 3, 4 & 5 BHK apartments with elegantly designed layouts, abundant natural light, 
                  spacious balconies, utility areas, and modern interiors in an earthquake-resistant RCC framed structure.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-ink mb-4">Residence Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Elegantly designed layouts with abundant natural light</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Spacious balconies, utility areas, and modern interiors</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Earthquake-resistant RCC framed structure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-graphite">Premium finishes and quality construction</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-ink mb-4">Unit Sizes</h3>
                    <div className="space-y-3">
                      {unitSizes.map((unit, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-secondary/5 rounded-lg">
                          <span className="font-medium text-ink">{unit.type}</span>
                          <span className="text-graphite">{unit.size}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-ink mb-4">Experience Luxury Living</h3>
                <p className="text-lg text-graphite mb-6">
                  Ivory County offers a perfect blend of luxury, comfort, and convenience. 
                  With world-class amenities and prime location, this is your gateway to premium living.
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
                  { src: "/IvoryCounty/SocietyTowersView.png", alt: "Society Towers View" },
                  { src: "/IvoryCounty/SocietyEntrance.png", alt: "Society Entrance" },
                  { src: "/IvoryCounty/SportsANDbarArea.png", alt: "Sports and Bar Area" },
                  { src: "/IvoryCounty/GardenArea.png", alt: "Garden Area" },
                  { src: "/IvoryCounty/FluidRestro.png", alt: "Fluid Restaurant" },
                  { src: "/IvoryCounty/FlatsInsideAesthetic.png", alt: "Flats Inside Aesthetic" }
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

          {/* Amenities Tab */}
          {activeTab === "amenities" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Amenities & Lifestyle
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {amenities.map((category, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-ink mb-4 flex items-center gap-2">
                        {category.category === "Sports Zone" && <Trophy className="w-5 h-5" />}
                        {category.category === "Wellness" && <Heart className="w-5 h-5" />}
                        {category.category === "Recreation" && <Star className="w-5 h-5" />}
                        {category.category === "Leisure" && <ShoppingBag className="w-5 h-5" />}
                        {category.category === "Kids Zone" && <Users className="w-5 h-5" />}
                        {category.category}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-graphite">
                            <CheckCircle className="w-4 h-4 text-secondary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-ink mb-4 text-center">Unique Experiences</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {uniqueExperiences.map((experience, index) => (
                      <div key={index} className="text-center p-4 bg-secondary/5 rounded-lg">
                        <Star className="w-8 h-8 text-secondary mx-auto mb-2" />
                        <p className="text-graphite">{experience}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === "specifications" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Construction & Specifications
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {specifications.map((spec, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-ink mb-4">{spec.category}</h3>
                      <ul className="space-y-2">
                        {spec.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-graphite">
                            <CheckCircle className="w-4 h-4 text-secondary" />
                            {item}
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
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-secondary" />
                      Prime Location Benefits
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
                      Connectivity & Travel Times
                    </h3>
                    <div className="space-y-3">
                      {connectivity.map((route, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-secondary/5 rounded-lg">
                          <span className="text-graphite">{route.destination}</span>
                          <span className="font-medium text-ink">{route.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-ink mb-4">Nearby Landmarks</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-6 h-6 text-secondary" />
                      <span className="text-graphite">Amity University</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShoppingBag className="w-6 h-6 text-secondary" />
                      <span className="text-graphite">Mall of India</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-6 h-6 text-secondary" />
                      <span className="text-graphite">Noida Film City</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="w-6 h-6 text-secondary" />
                      <span className="text-graphite">Botanical Garden</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Developer Tab */}
          {activeTab === "developer" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Developer – County Group
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4">Company Legacy</h3>
                    <div className="space-y-3">
                      {developerInfo.map((info, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-secondary/5 rounded-lg">
                          <span className="text-graphite">{info.metric}:</span>
                          <span className="font-medium text-ink">{info.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4">Trust & Reliability</h3>
                    <p className="text-graphite mb-4">
                      County Group has built its reputation on trust, transparency, and reliability. 
                      With over 35 years of experience, we are committed to delivering on-time projects 
                      with the highest quality standards.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800 text-sm">
                        <strong>Our Promise:</strong> We deliver more than promised with trust, 
                        transparency, and reliability at every step.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-ink mb-4">Why Choose County Group?</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4">
                      <Award className="w-12 h-12 text-secondary mx-auto mb-3" />
                      <h4 className="font-semibold text-ink mb-2">Proven Track Record</h4>
                      <p className="text-sm text-graphite">35+ years of successful project delivery</p>
                    </div>
                    <div className="text-center p-4">
                      <Users className="w-12 h-12 text-secondary mx-auto mb-3" />
                      <h4 className="font-semibold text-ink mb-2">Happy Families</h4>
                      <p className="text-sm text-graphite">7000+ satisfied customers</p>
                    </div>
                    <div className="text-center p-4">
                      <Clock className="w-12 h-12 text-secondary mx-auto mb-3" />
                      <h4 className="font-semibold text-ink mb-2">On-Time Delivery</h4>
                      <p className="text-sm text-graphite">Consistent project completion</p>
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
