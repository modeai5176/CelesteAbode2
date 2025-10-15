"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ContactPopup } from "@/components/contact-popup"
import { MapPin, Play, Star, CheckCircle, Building2, Clock, Users, Award, Car, Trees, Shield, Zap, Heart, Trophy, GraduationCap, ShoppingBag, Home, Phone, Mail, MapPin as MapPinIcon } from "lucide-react"

export default function CRCMaestaPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<{ title: string; location: string } | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const handleContact = () => {
    setSelectedProperty({
      title: "CRC MAESTA",
      location: "Sector 1, Greater Noida West"
    })
    setIsPopupOpen(true)
  }

  const aboutCRC = [
    "CRC is a trusted name in real estate for over 38 years",
    "Known for delivering more than promised with trust, transparency, and reliability",
    "Strong reputation backed by skilled professionals",
    "Focused on customer-first approach",
    "Committed to timely delivery & quality",
    "Creating sustainable, efficient spaces"
  ]

  const visionMission = [
    {
      type: "Vision",
      content: "To be among the top 5 market leaders, known for timely, high-quality, and sustainable developments."
    },
    {
      type: "Mission",
      content: "Nationwide leadership through performance, transparency, ethical practices, and eco-conscious development."
    }
  ]

  const locationAdvantages = [
    "Strategically located in Sector 1, Greater Noida West",
    "5 mins – Schools",
    "10 mins – Metro Station / Fortis Hospital",
    "15 mins – Mall of India",
    "18 mins – DND",
    "20 mins – Anand Vihar ISBT",
    "30 mins – Akshardham / Noida International Airport / IGI Access"
  ]

  const architecturalFeatures = [
    "Five majestic towers piercing the skyline",
    "Acres of landscaped greenery",
    "Seamless no-vehicular zones for safe pathways",
    "Buggy-friendly walkways for elderly & children",
    "State-of-the-art clubhouse",
    "Exquisite lobbies with 3 high-speed elevators",
    "Just 2 apartments per floor for exclusivity",
    "270° green landscape views"
  ]

  const natureWellness = [
    "Yoga & meditation lawns",
    "Reflexology path",
    "Woodland bridge",
    "Butterfly, Zen, Herb & Colour gardens",
    "Kids' lawns & multipurpose court",
    "Outdoor gym & jogging pathways"
  ]

  const clubMaestaAmenities = [
    {
      category: "Recreation & Leisure",
      items: [
        "Indoor & outdoor swimming pools",
        "Jacuzzi, spa, sauna & steam rooms",
        "Billiards, table tennis, chess, carrom, cards room",
        "Kids activity room & karaoke zone",
        "Mini theatre for family movie nights",
        "Business centre & lounge"
      ]
    },
    {
      category: "Sports & Fitness",
      items: [
        "Half basketball court",
        "Squash court",
        "Outdoor & indoor gym",
        "Yoga room",
        "Multipurpose court"
      ]
    }
  ]

  const residences = [
    {
      tower: "Tower 1",
      carpet: "1148 sq.ft.",
      builtUp: "1490 sq.ft."
    },
    {
      tower: "Tower 2",
      carpet: "1280 sq.ft.",
      builtUp: "1790 sq.ft."
    },
    {
      tower: "Tower 3",
      carpet: "1607 sq.ft.",
      builtUp: "2175 sq.ft."
    },
    {
      tower: "Tower 4",
      carpet: "1280–1895 sq.ft.",
      builtUp: "Contact for details"
    },
    {
      tower: "Tower 5",
      carpet: "1093 sq.ft.",
      builtUp: "1480 sq.ft."
    }
  ]

  const specifications = [
    {
      category: "Flooring",
      items: ["Vitrified tiles", "Engineered wooden flooring in master bedroom"]
    },
    {
      category: "Doors & Windows",
      items: ["Designer polished hardwood with digital locks", "Aluminium sliding doors"]
    },
    {
      category: "Washrooms",
      items: ["Premium sanitary fittings", "Glass shower partitions", "Bathtub in master bathroom"]
    },
    {
      category: "Kitchen",
      items: ["Granite counters", "Modular cabinets", "Hob & chimney (branded)"]
    },
    {
      category: "Air Conditioning",
      items: ["Split AC in all rooms"]
    },
    {
      category: "Power Backup",
      items: ["100% for common areas & emergency lifts"]
    },
    {
      category: "Safety & Security",
      items: ["CCTV", "Video door phones", "Fire safety systems"]
    },
    {
      category: "Structure",
      items: ["Earthquake-resistant RCC framed structure"]
    }
  ]

  const teamExperts = [
    "Principal Architect",
    "Landscape Architect",
    "MEP / HVAC Consultant",
    "Traffic & Parking Consultant",
    "Structure Consultant"
  ]

  const projectInfo = [
    {
      label: "Site Address",
      value: "Plot No. GH/11 B, Sector 1, Greater Noida West, Gautam Buddh Nagar, UP – 201306"
    },
    {
      label: "RERA Registration",
      value: "UPRERAPRJ724518/07/2024 | UP-RERA"
    },
    {
      label: "Head Office",
      value: "Ground Floor, Tower A, Logix Techno Park, Sector 127, Noida – 201301"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
          <Image
            src="/CRCMaesta/TOWERVIEW.png"
            alt="CRC Maesta - Your Picture Perfect Moments"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-6xl mx-auto">
              <Badge className="bg-secondary text-white mb-4">Under Construction</Badge>
              <h1 className="text-4xl md:text-6xl font-semibold mb-4">CRC MAESTA</h1>
              <p className="text-xl md:text-2xl mb-6">Your Picture Perfect Moments</p>
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
                <span className="font-semibold">Luxury Residences</span>
              </div>
              <div className="flex flex-col items-center">
                <Trees className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Towers</span>
                <span className="font-semibold">5 Majestic Towers</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Status</span>
                <span className="font-semibold">Under Construction</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Developer</span>
                <span className="font-semibold">CRC Group</span>
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
                { id: "residences", label: "Residences" },
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
                  About CRC
                </h2>
                <p className="text-xl text-graphite max-w-3xl mx-auto">
                  CRC is a trusted name in real estate for over 38 years, known for delivering more than 
                  promised with trust, transparency, and reliability.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-ink mb-4">Company Strengths</h3>
                    <ul className="space-y-3">
                      {aboutCRC.map((strength, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-graphite">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-ink mb-4">Vision & Mission</h3>
                    <div className="space-y-4">
                      {visionMission.map((item, index) => (
                        <div key={index} className="p-4 bg-secondary/5 rounded-lg">
                          <h4 className="font-semibold text-ink mb-2">{item.type}</h4>
                          <p className="text-graphite text-sm">{item.content}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-ink mb-4">Creating Picture Perfect Moments</h3>
                <p className="text-lg text-graphite mb-6">
                  CRC Maesta is crafted for holistic living with five majestic towers, acres of landscaped greenery, 
                  and world-class amenities that create the perfect backdrop for your life's most precious moments.
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
                  { src: "/CRCMaesta/TOWERVIEW.png", alt: "Tower View" },
                  { src: "/CRCMaesta/PoolandClubDroneShot.png", alt: "Pool and Club Drone Shot" },
                  { src: "/CRCMaesta/WellNessZone.png", alt: "Wellness Zone" },
                  { src: "/CRCMaesta/MiniTheater.png", alt: "Mini Theater" },
                  { src: "/CRCMaesta/FamilyLounge.png", alt: "Family Lounge" },
                  { src: "/CRCMaesta/Spotforenjoyingindoorgames.png", alt: "Indoor Games Area" }
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
                Nature & Wellness
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4 flex items-center gap-2">
                      <Trees className="w-5 h-5 text-secondary" />
                      Green Spaces & Wellness
                    </h3>
                    <ul className="space-y-3">
                      {natureWellness.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-graphite">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-secondary" />
                      Architectural Features
                    </h3>
                    <ul className="space-y-3">
                      {architecturalFeatures.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-graphite">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-ink mb-6 text-center">Club Maesta – Luxury at Your Doorstep</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {clubMaestaAmenities.map((category, index) => (
                      <div key={index}>
                        <h4 className="text-xl font-semibold text-ink mb-4 flex items-center gap-2">
                          {category.category === "Recreation & Leisure" && <Heart className="w-5 h-5" />}
                          {category.category === "Sports & Fitness" && <Trophy className="w-5 h-5" />}
                          {category.category}
                        </h4>
                        <ul className="space-y-2">
                          {category.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-graphite">
                              <CheckCircle className="w-4 h-4 text-secondary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Residences Tab */}
          {activeTab === "residences" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Residences at CRC Maesta
              </h2>
              
              <div className="text-center mb-8">
                <p className="text-xl text-graphite max-w-3xl mx-auto">
                  Residences are designed with luxury, privacy, and efficiency: Open floor-to-ceiling windows 
                  for natural light, spacious bedrooms with natural ventilation, balconies with panoramic views, 
                  modern kitchens with branded appliances, and designer entrances with digital locks.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {residences.map((tower, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-ink mb-4">{tower.tower}</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-secondary/5 rounded-lg">
                          <p className="text-sm text-graphite">Carpet Area</p>
                          <p className="text-lg font-semibold text-secondary">{tower.carpet}</p>
                        </div>
                        <div className="p-3 bg-primary/5 rounded-lg">
                          <p className="text-sm text-graphite">Built-up Area</p>
                          <p className="text-lg font-semibold text-ink">{tower.builtUp}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === "specifications" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Specifications
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
                Prime Location – Noida's Most Coveted Neighbourhood
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
                      Nearby Landmarks
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-6 h-6 text-secondary" />
                        <span className="text-graphite">Schools (5 mins)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPinIcon className="w-6 h-6 text-secondary" />
                        <span className="text-graphite">Metro Station (10 mins)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-secondary" />
                        <span className="text-graphite">Fortis Hospital (10 mins)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <ShoppingBag className="w-6 h-6 text-secondary" />
                        <span className="text-graphite">Mall of India (15 mins)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-ink mb-4">Strategic Connectivity</h3>
                  <p className="text-graphite text-lg leading-relaxed">
                    CRC Maesta's strategic location in Sector 1, Greater Noida West provides excellent 
                    connectivity to all major destinations. With easy access to schools, hospitals, shopping 
                    centers, and transportation hubs, residents enjoy the perfect balance of convenience and serenity.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Developer Tab */}
          {activeTab === "developer" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Our Team of Experts
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4">Expert Consultants</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {teamExperts.map((expert, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg">
                          <Award className="w-5 h-5 text-secondary" />
                          <span className="text-graphite">{expert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4">Project Information</h3>
                    <div className="space-y-4">
                      {projectInfo.map((info, index) => (
                        <div key={index} className="p-3 bg-primary/5 rounded-lg">
                          <p className="text-sm font-medium text-ink mb-1">{info.label}</p>
                          <p className="text-sm text-graphite">{info.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-ink mb-4">Why Choose CRC Group?</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4">
                      <Clock className="w-12 h-12 text-secondary mx-auto mb-3" />
                      <h4 className="font-semibold text-ink mb-2">38+ Years Legacy</h4>
                      <p className="text-sm text-graphite">Proven track record of excellence</p>
                    </div>
                    <div className="text-center p-4">
                      <Shield className="w-12 h-12 text-secondary mx-auto mb-3" />
                      <h4 className="font-semibold text-ink mb-2">Trust & Transparency</h4>
                      <p className="text-sm text-graphite">Building relationships on trust</p>
                    </div>
                    <div className="text-center p-4">
                      <Award className="w-12 h-12 text-secondary mx-auto mb-3" />
                      <h4 className="font-semibold text-ink mb-2">Quality Delivery</h4>
                      <p className="text-sm text-graphite">Exceeding expectations consistently</p>
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
