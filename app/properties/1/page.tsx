"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ContactPopup } from "@/components/contact-popup"
import { MapPin, Play, Star, CheckCircle, Building2, Trees, Shield, Award, Clock, Users, Video, Image as ImageIcon } from "lucide-react"

export default function ForestWalkPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<{ title: string; location: string } | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const handleContact = () => {
    setSelectedProperty({
      title: "FOREST WALK VILLAS",
      location: "GDA Approved Location"
    })
    setIsPopupOpen(true)
  }

  const features = [
    "52 acres of lush greenery with forest-inspired design",
    "Fully approved by GDA, NHAI, and Environmental authorities",
    "Phase 1: 97 villas already booked",
    "RERA-registered project",
    "Seamless blend of forest serenity with modern comforts",
    "Landscaped walkways and tranquil forest trails"
  ]

  const approvals = [
    "GDA (Greater Noida Development Authority)",
    "NHAI (National Highways Authority of India)",
    "Environmental Clearance",
    "RERA Registration"
  ]

  const pricing = [
    {
      type: "Pre-Launch Price",
      amount: "₹1,75,000",
      unit: "per Sq. Yd.",
      note: "Limited time offer"
    },
    {
      type: "Launch Price",
      amount: "₹2,00,000",
      unit: "per Sq. Yd.",
      note: "After pre-launch period"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
          <Image
            src="/ForestWalk/LandingpageVILLA.jpeg"
            alt="Forest Walk Villas - Luxury Forest Living"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-6xl mx-auto">
              <Badge className="bg-secondary text-white mb-4">Pre-Launch Offer</Badge>
              <h1 className="text-4xl md:text-6xl font-semibold mb-4">FOREST WALK VILLAS</h1>
              <p className="text-xl md:text-2xl mb-6">Phase 2 - Luxury Forest Living</p>
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
                <span className="font-semibold">Luxury Villas</span>
              </div>
              <div className="flex flex-col items-center">
                <Trees className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Land Area</span>
                <span className="font-semibold">52 Acres</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Status</span>
                <span className="font-semibold">Pre-Launch</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 mb-2" />
                <span className="text-sm text-ink-foreground/80">Developer</span>
                <span className="font-semibold">Renowned Group</span>
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
                { id: "videos", label: "Videos" },
                { id: "specifications", label: "Specifications" },
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
                  Why Choose Forest Walk?
                </h2>
                <p className="text-xl text-graphite max-w-3xl mx-auto">
                  We're thrilled to announce the launch of Phase 2 of our premium villas at Forest Walk, 
                  a RERA-registered project that seamlessly blends forest serenity with modern comforts.
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
                    <h3 className="text-2xl font-semibold text-ink mb-4">Approvals & Certifications</h3>
                    <ul className="space-y-3">
                      {approvals.map((approval, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-graphite">{approval}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-ink mb-6 text-center">Pricing Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {pricing.map((price, index) => (
                      <div key={index} className="text-center p-6 border rounded-lg">
                        <p className="text-sm text-graphite mb-2">{price.type}</p>
                        <div className="text-3xl font-semibold text-secondary mb-1">{price.amount}</div>
                        <p className="text-sm text-graphite mb-2">{price.unit}</p>
                        <p className="text-xs text-secondary font-medium">{price.note}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-ink mb-4">Don't Miss Out!</h3>
                <p className="text-lg text-graphite mb-6">
                  Inventory is limited, and with Phase 1 fully booked, this is a golden opportunity 
                  to secure your dream villa before prices rise.
                </p>
                <Button 
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg"
                  onClick={handleContact}
                >
                  Invest in a Lifestyle Upgrade
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
                      src="/ForestWalk/LandingpageVILLA.jpeg"
                      alt="Forest Walk Villas Landing Page"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  <div className="relative group cursor-pointer">
                    <Image
                      src="/ForestWalk/VillabuiltMockup.jpeg"
                      alt="Villa Built Mockup"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-ink mb-4">Gallery Features</h3>
                      <ul className="space-y-2 text-graphite">
                        <li>• High-resolution project images</li>
                        <li>• Architectural mockups and renders</li>
                        <li>• Lifestyle and amenity showcases</li>
                        <li>• Interactive image viewing</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-ink mb-4">Visual Experience</h3>
                      <p className="text-graphite">
                        Explore the stunning visuals of Forest Walk Villas through our comprehensive gallery. 
                        Each image showcases the premium quality and forest-inspired design that makes this project unique.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Videos Tab */}
          {activeTab === "videos" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Project Videos
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="relative">
                    <video
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                      poster="/ForestWalk/LandingpageVILLA.jpeg"
                      controls
                      preload="metadata"
                    >
                      <source src="/ForestWalk/PropertyLocationVideo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  
                  <div className="relative">
                    <video
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                      poster="/ForestWalk/LandingpageVILLA.jpeg"
                      controls
                      preload="metadata"
                    >
                      <source src="/ForestWalk/Property_futurelifestule_videos.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-ink mb-4">Video Content</h3>
                      <ul className="space-y-2 text-graphite">
                        <li>• Property location overview</li>
                        <li>• Future lifestyle preview</li>
                        <li>• High-quality production</li>
                        <li>• Interactive video controls</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-ink mb-4">Immersive Experience</h3>
                      <p className="text-graphite">
                        Watch our professionally produced videos to get a comprehensive understanding of 
                        Forest Walk Villas. Experience the location, design philosophy, and future lifestyle 
                        that awaits you.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === "specifications" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Project Specifications
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-graphite">Project Type:</span>
                        <span className="font-medium">Luxury Villas</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-graphite">Land Area:</span>
                        <span className="font-medium">52 Acres</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-graphite">Phase:</span>
                        <span className="font-medium">Phase 2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-graphite">Phase 1 Status:</span>
                        <span className="font-medium text-green-600">97 Villas Booked</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4">Legal & Approvals</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-graphite">RERA Status:</span>
                        <span className="font-medium text-green-600">Registered</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-graphite">GDA Approval:</span>
                        <span className="font-medium text-green-600">Approved</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-graphite">NHAI Approval:</span>
                        <span className="font-medium text-green-600">Approved</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-graphite">Environmental:</span>
                        <span className="font-medium text-green-600">Cleared</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-ink mb-4">Design Philosophy</h3>
                  <p className="text-graphite text-lg leading-relaxed">
                    Forest Walk Villas is designed to seamlessly blend forest serenity with modern comforts. 
                    The project features forest-inspired design elements, landscaped walkways, and tranquil 
                    forest trails, creating a unique living experience that connects residents with nature 
                    while providing all the amenities of modern luxury living.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Location Tab */}
          {activeTab === "location" && (
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-ink text-center mb-8">
                Location & Connectivity
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4">Location Advantages</h3>
                    <ul className="space-y-3 text-graphite">
                      <li>• GDA approved prime location</li>
                      <li>• Strategic connectivity</li>
                      <li>• Proximity to major highways</li>
                      <li>• Access to essential amenities</li>
                      <li>• Future development potential</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ink mb-4">Development Authority</h3>
                    <p className="text-graphite mb-4">
                      The project is fully approved by the Greater Noida Development Authority (GDA), 
                      ensuring compliance with all development regulations and infrastructure planning.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800 text-sm">
                        <strong>GDA Approval:</strong> All necessary clearances and approvals have been 
                        obtained for this premium development project.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-ink mb-4">Investment Potential</h3>
                  <p className="text-graphite text-lg leading-relaxed">
                    With Phase 1 already fully booked and Phase 2 in pre-launch, Forest Walk Villas 
                    represents a unique investment opportunity. The project's strategic location, 
                    comprehensive approvals, and proven track record make it an attractive option for 
                    both end-users and investors looking for premium real estate assets.
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
