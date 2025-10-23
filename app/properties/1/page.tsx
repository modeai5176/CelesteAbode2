"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactPopup } from "@/components/contact-popup";
import { PropertyLeadForm } from "@/components/property-lead-form";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Eye,
  Play,
  Star,
  Building2,
  Home,
  TrendingUp,
  Crown,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Phone,
  Mail,
  Calendar,
  Award,
  Car,
  Plane,
  Train,
  School,
  Hospital,
  ShoppingBag,
  Wifi,
  Shield as Security,
  Zap,
  Droplets,
  Wind,
  TreePine,
  Dumbbell,
  Coffee,
  Music,
  Camera,
  Gamepad2,
  Heart,
  Sparkles,
} from "lucide-react";

export default function PropertyPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const property = {
    // Basic Project Information
    projectName: "IVORY COUNTY",
    developer: "County Group",
    location: "Sector 115, Noida",
    reraId: "UP-RERA-123456",
    segment: "Buying to Live",
    status: "Ready to Move",
    possessionDate: "December 2024",
    
    // Location Advantage
    connectivity: [
      "Noida–Greater Noida Expressway (2 mins)",
      "Noida Film City Metro Station (5 mins)",
      "Botanical Garden Metro (8 mins)",
      "IGI Airport (45 mins)",
      "Noida International Airport (35 mins)"
    ],
    landmarks: [
      "Noida Film City (3 mins)",
      "Botanical Garden (5 mins)",
      "Noida Stadium (4 mins)",
      "Fortis Hospital (6 mins)",
      "DLF Mall of India (8 mins)",
      "Amity University (10 mins)"
    ],
    
    // Residences / Property Details
    unitTypes: ["3 BHK", "4 BHK", "5 BHK"],
    sizes: "2034-3195 sq.ft.",
    architecturalHighlights: [
      "Modern Contemporary Design",
      "Floor-to-Ceiling Windows",
      "Premium Finishes",
      "Vastu Compliant Layout",
      "Cross Ventilation"
    ],
    structureQuality: "Earthquake-resistant RCC structure with premium quality materials",
    
    // Amenities & Lifestyle
    amenities: {
      sports: [
        "Cricket Nets",
        "Tennis Court",
        "Swimming Pool",
        "Gymnasium",
        "Badminton Court"
      ],
      wellness: [
        "Spa & Wellness Center",
        "Yoga Garden",
        "Meditation Zone",
        "Salon & Beauty Parlor"
      ],
      recreation: [
        "Amphitheatre",
        "Café & Food Court",
        "Banquet Hall",
        "Music Plaza",
        "Reading Lounge"
      ],
      kids: [
        "Children's Play Area",
        "Adventure Activities",
        "Day Care Center",
        "Educational Zone"
      ],
      unique: [
        "Skywalk",
        "Culinary Island Dining",
        "Sculpture Garden",
        "Rooftop Garden"
      ]
    },
    
    // Specifications
    specifications: {
      flooring: "Premium Vitrified Tiles",
      kitchen: "Modular Kitchen with Granite Countertops",
      bathrooms: "Designer Tiles with Premium Fittings",
      electricals: "Smart Home Features with Split ACs",
      balconies: "Glass Railings with Stainless Steel",
      safety: "Fire-resistant materials with sprinkler system"
    },
    
    // Developer Credentials
    developerInfo: {
      experience: "15+ Years",
      delivered: "50+ Lakh sq.ft.",
      projects: ["County Park", "County Heights", "County Residency"],
      families: "5000+ Families",
      awards: ["Best Developer Award 2023", "RERA Excellence Award"]
    },
    
    // Pricing & Payment
    pricing: {
      priceRange: "₹85 Lakhs - ₹1.2 Cr",
      startingPrice: "₹85 Lakhs",
      paymentPlans: ["Construction Linked Plan (CLP)", "Flexi Payment Plan"],
      offers: "Early Bird Discount: 5% off on booking"
    },
    
    // Gallery
    images: [
      "/IvoryCounty/SocietyTowersView.png",
      "/IvoryCounty/SportsANDbarArea.png",
      "/IvoryCounty/GardenArea.png",
      "/IvoryCounty/FluidRestro.png",
      "/IvoryCounty/FlatsInsideAesthetic.png"
    ]
  };

  const handleContact = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.projectName}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <Badge className="mb-4 bg-primary text-white text-lg px-4 py-2">
                {property.status}
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {property.projectName}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-200">
                {property.location}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <span className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  {property.sizes}
                </span>
                <span className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  {property.unitTypes.join(", ")}
                </span>
                <span className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  {property.pricing.startingPrice}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Area</p>
                <p className="font-semibold">{property.sizes}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Units</p>
                <p className="font-semibold">{property.unitTypes.length} Types</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Possession</p>
                <p className="font-semibold">{property.possessionDate}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Developer</p>
                <p className="font-semibold">{property.developer}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Gallery */}
              <section>
                <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square cursor-pointer group"
                      onClick={() => setSelectedImage(index)}
                    >
                    <Image
                        src={image}
                        alt={`${property.projectName} - Image ${index + 1}`}
                        fill
                        className="object-cover rounded-lg group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                        <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                    </div>
                  ))}
                </div>
              </section>
                
              {/* Location Advantage */}
              <section>
                <h2 className="text-3xl font-bold mb-8">Location Advantage</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Car className="w-5 h-5 text-primary" />
                        Connectivity
                      </h3>
                      <ul className="space-y-2">
                        {property.connectivity.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        Nearby Landmarks
                      </h3>
                      <ul className="space-y-2">
                        {property.landmarks.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Amenities */}
              <section>
                <h2 className="text-3xl font-bold mb-8">Amenities & Lifestyle</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(property.amenities).map(([category, items]) => (
                    <Card key={category}>
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4 capitalize">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <ul className="space-y-2">
                          {items.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                      </ul>
                    </CardContent>
                  </Card>
                  ))}
                </div>
              </section>

              {/* Specifications */}
              <section>
                <h2 className="text-3xl font-bold mb-8">Specifications</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {Object.entries(property.specifications).map(([key, value]) => (
                        <div key={key} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Shield className="w-4 h-4 text-primary" />
                      </div>
                          <div>
                            <h4 className="font-semibold capitalize mb-1">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </h4>
                            <p className="text-sm text-muted-foreground">{value}</p>
                      </div>
                      </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
                
              {/* Developer Credentials */}
              <section>
                <h2 className="text-3xl font-bold mb-8">Developer Credentials</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Company Overview</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                            <span className="text-muted-foreground">Experience:</span>
                            <span className="font-semibold">{property.developerInfo.experience}</span>
                      </div>
                      <div className="flex justify-between">
                            <span className="text-muted-foreground">Delivered:</span>
                            <span className="font-semibold">{property.developerInfo.delivered}</span>
                      </div>
                      <div className="flex justify-between">
                            <span className="text-muted-foreground">Families Served:</span>
                            <span className="font-semibold">{property.developerInfo.families}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Notable Projects</h3>
                        <ul className="space-y-2">
                          {property.developerInfo.projects.map((project, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              <span className="text-sm">{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Pricing Card */}
              <Card className="sticky top-8">
                  <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Pricing & Payment</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting Price</p>
                      <p className="text-2xl font-bold text-primary">{property.pricing.startingPrice}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Price Range</p>
                      <p className="text-lg font-semibold">{property.pricing.priceRange}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Payment Plans</p>
                      <ul className="space-y-1">
                        {property.pricing.paymentPlans.map((plan, index) => (
                          <li key={index} className="text-sm flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {plan}
                          </li>
                        ))}
                    </ul>
                    </div>
                    {property.pricing.offers && (
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-green-800">{property.pricing.offers}</p>
                      </div>
                    )}
                    </div>
                  </CardContent>
                </Card>

              {/* Lead Form */}
              <PropertyLeadForm
                propertyName={property.projectName}
                propertyLocation={property.location}
                segment={property.segment as any}
                variant="sidebar"
              />

              {/* Quick Facts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">RERA ID:</span>
                      <span className="text-sm font-semibold">{property.reraId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Status:</span>
                      <span className="text-sm font-semibold">{property.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Segment:</span>
                      <span className="text-sm font-semibold">{property.segment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Possession:</span>
                      <span className="text-sm font-semibold">{property.possessionDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        propertyTitle={property.projectName}
        propertyLocation={property.location}
      />

      <Footer />
    </div>
  );
}