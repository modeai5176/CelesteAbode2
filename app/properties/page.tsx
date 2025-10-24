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
} from "lucide-react";

export default function PropertiesPage() {
  const [activeSegment, setActiveSegment] = useState("buying-to-live");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<{
    title: string;
    location: string;
  } | null>(null);

  const segments = [
    {
      id: "buying-to-live",
      title: "Buying to Live",
      subtitle: "Your Dream Home Awaits",
      description:
        "Discover homes designed for modern living with premium amenities and strategic locations.",
      icon: Home,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: "investment",
      title: "Investment Opportunities",
      subtitle: "Smart Investment Choices",
      description:
        "High-return properties with excellent growth potential and rental yields.",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: "luxury",
      title: "Luxury Residences",
      subtitle: "Ultimate Luxury Living",
      description:
        "Exclusive properties with world-class amenities and unparalleled luxury.",
      icon: Crown,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  // Mock data for properties in each segment
  const propertiesData = {
    "buying-to-live": [
      {
        id: 1,
        title: "IVORY COUNTY",
        subtitle: "Premium Living in Sector 115",
        location: "Sector 115, Noida",
        price: "₹85 Lakhs onwards",
        priceUnit: "Starting Price",
        image: "/IvoryCounty/SocietyTowersView.png",
        beds: "3, 4 & 5 BHK",
        baths: "2-3 Baths",
        area: "2034-3195 sq.ft.",
        status: "Ready to Move",
        developer: "County Group",
        possession: "Dec 2024",
        highlights: [
          "Prime Location",
          "Premium Amenities",
          "Ready to Move",
          "County Group Legacy",
        ],
        segment: "Buying to Live",
        reraId: "UP-RERA-123456",
        unitTypes: ["3 BHK", "4 BHK", "5 BHK"],
        startingPrice: "₹85 Lakhs",
        paymentPlans: ["CLP", "Flexi Payment"],
      },
      {
        id: 2,
        title: "ETERNIA",
        subtitle: "Premium Residences in Greater Noida",
        location: "Tech Zone IV, Greater Noida (W)",
        price: "₹65 Lakhs onwards",
        priceUnit: "Starting Price",
        image: "/Eternia/1.png",
        beds: "3, 3+1 & 4+1 BHK",
        baths: "2-3 Baths",
        area: "1086-1599 sq.ft.",
        status: "Under Construction",
        developer: "Premium Developer",
        possession: "Mar 2025",
        highlights: [
          "Skyline Views",
          "Green Belt Facing",
          "EV Charging",
          "25K sq.ft. Clubhouse",
        ],
        segment: "Buying to Live",
        reraId: "UP-RERA-789012",
        unitTypes: ["3 BHK", "3+1 BHK", "4+1 BHK"],
        startingPrice: "₹65 Lakhs",
        paymentPlans: ["CLP", "Construction Linked"],
      },
    ],
    investment: [
      {
        id: 3,
        title: "CRC MAESTA",
        subtitle: "Your Picture Perfect Moments",
        location: "Sector 1, Greater Noida West",
        price: "₹45 Lakhs onwards",
        priceUnit: "Starting Price",
        image: "/CRCMaesta/TOWERVIEW.png",
        beds: "Premium BHK",
        baths: "Premium Baths",
        area: "1093-1895 sq.ft.",
        status: "Under Construction",
        developer: "CRC Group",
        possession: "Jun 2025",
        highlights: [
          "High ROI Potential",
          "Prime Location",
          "CRC Legacy",
          "Rental Ready",
        ],
        segment: "Investment Opportunity",
        reraId: "UP-RERA-345678",
        unitTypes: ["2 BHK", "3 BHK", "4 BHK"],
        startingPrice: "₹45 Lakhs",
        paymentPlans: ["CLP", "Flexi Payment"],
        roi: "12-15%",
        rentalYield: "8-10%",
      },
      {
        id: 4,
        title: "THE BROOK & THE RIVULET",
        subtitle: "Premium High-Rise Residences",
        location: "Greater Noida (Prime 3-Side Open Corner Plot)",
        price: "₹55 Lakhs onwards",
        priceUnit: "Starting Price",
        image: "/Brook and Rivulet/1.png",
        beds: "Premium BHK",
        baths: "Premium Baths",
        area: "Premium Sizes",
        status: "Under Construction",
        developer: "Renowned Developer",
        possession: "Dec 2025",
        highlights: [
          "3-Side Open Plot",
          "Earthquake Resistant",
          "High Appreciation",
          "30,750 sq.ft. Clubhouses",
        ],
        segment: "Investment Opportunity",
        reraId: "UP-RERA-901234",
        unitTypes: ["2 BHK", "3 BHK", "4 BHK", "5 BHK"],
        startingPrice: "₹55 Lakhs",
        paymentPlans: ["CLP", "Construction Linked"],
        roi: "15-18%",
        rentalYield: "9-12%",
      },
    ],
    luxury: [
      {
        id: 5,
        title: "ESTATE 360",
        subtitle: "Inter-Generational Luxury Living",
        location: "36A, Dwarka Expressway, Gurgaon",
        price: "₹2.5 Cr onwards",
        priceUnit: "Starting Price",
        image: "/ESTATE360/DroneViewTowers.png",
        beds: "Premium BHK",
        baths: "Premium Baths",
        area: "11.8 Acres",
        status: "Under Construction",
        developer: "MAX ESTATES GROUP",
        possession: "Dec 2025",
        highlights: [
          "Antara Partnership",
          "Exclusive Design",
          "Prime Location",
          "Luxury Amenities",
        ],
        segment: "Luxury Residence",
        reraId: "HR-RERA-567890",
        unitTypes: ["4 BHK", "5 BHK", "Penthouses"],
        startingPrice: "₹2.5 Cr",
        paymentPlans: ["CLP", "Flexi Payment"],
        luxuryFeatures: [
          "Concierge Service",
          "Private Elevators",
          "Sky Gardens",
        ],
      },
      {
        id: 6,
        title: "FOREST WALK VILLAS",
        subtitle: "Phase 2 - Luxury Forest Living",
        location: "GDA Approved Location",
        price: "₹1.8 Cr onwards",
        priceUnit: "Starting Price",
        image: "/ForestWalk/LandingpageVILLA.jpeg",
        beds: "Customizable",
        baths: "Customizable",
        area: "52 Acres",
        status: "Pre-Launch Offer",
        developer: "Renowned Group",
        possession: "Mar 2026",
        highlights: [
          "Pre-Launch Price",
          "Limited Units",
          "GDA Approved",
          "Forest Living",
        ],
        segment: "Luxury Residence",
        reraId: "UP-RERA-234567",
        unitTypes: ["Villas", "Penthouses", "Custom Homes"],
        startingPrice: "₹1.8 Cr",
        paymentPlans: ["CLP", "Flexi Payment"],
        luxuryFeatures: ["Private Gardens", "Forest Views", "Custom Design"],
      },
    ],
  };

  const currentProperties =
    propertiesData[activeSegment as keyof typeof propertiesData];

  const handleSegmentChange = (segmentId: string) => {
    setActiveSegment(segmentId);
  };

  const handlePropertyClick = (property: any) => {
    setSelectedProperty({
      title: property.title,
      location: property.location,
    });
    setIsPopupOpen(true);
  };

  const handleViewDetails = (propertyId: number) => {
    window.location.href = `/properties/${propertyId}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-0">
        <Header />
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-background pt-32">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
              {/* Full Container Image */}
              <div className="relative h-[500px] lg:h-[650px]">
                <Image
                  src="/propertyhero.png"
                  alt="Property Portfolio Hero"
                  fill
                  priority
                  loading="eager"
                  className="object-cover object-center md:object-cover md:object-[center_40%]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Left side vignette */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

                {/* Left Aligned Text Overlay */}
                <div className="absolute inset-0 flex items-end pb-16">
                  <div className="text-left text-[#FAFAF8] max-w-4xl px-4 ml-6 md:px-6 md:ml-8">
                    <h1
                      className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight text-[#FAFAF8]"
                      style={{
                        textShadow: "0 1px 2px rgba(0,0,0,0.35)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      <div className="block text-[#FAFAF8]">
                        Your Definitive
                      </div>
                      <div className="block text-[#FAFAF8] mt-2">
                        <span className="text-[#CBB27A]">
                          Property Portfolio
                        </span>
                      </div>
                    </h1>

                    <p className="text-base md:text-lg text-[#CBB27A] mb-6 max-w-2xl">
                      Every asset—whether for living or investing—is vetted by
                      our evidence-driven philosophy, ensuring unparalleled
                      value and peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aesthetic Line Separator */}
        <div className="w-full flex justify-center py-8">
          <div className="w-100 h-0.25 bg-gradient-to-r from-transparent via-[#CBB27A] to-transparent"></div>
        </div>

        {/* Segment Navigation */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your{" "}
                <span className="text-primary">Property Category</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each category is carefully curated to match your specific
                requirements and investment goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {segments.map((segment) => {
                const Icon = segment.icon;
                const isActive = activeSegment === segment.id;

                return (
                  <Card
                    key={segment.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-xl group ${
                      isActive
                        ? `border-2 border-primary shadow-lg ${segment.bgColor}`
                        : "border border-gray-200 hover:border-primary/50"
                    }`}
                    onClick={() => handleSegmentChange(segment.id)}
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? `bg-gradient-to-r ${segment.color} text-white`
                            : `bg-gray-100 text-gray-600 group-hover:bg-gradient-to-r group-hover:${segment.color} group-hover:text-white`
                        }`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {segment.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4">
                        {segment.subtitle}
                      </p>

                      <p className="text-sm text-muted-foreground mb-6">
                        {segment.description}
                      </p>

                      <div className="flex items-center justify-center gap-2 text-primary font-medium">
                        <span>Explore Properties</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Active Segment Properties */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {segments.find((s) => s.id === activeSegment)?.title} Properties
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {segments.find((s) => s.id === activeSegment)?.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {currentProperties.map((property) => (
                <Card
                  key={property.id}
                  className="border-0 bg-card overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer p-0"
                  onClick={() => handleViewDetails(property.id)}
                >
                  <div className="relative w-full h-80 rounded-xl overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      quality={90}
                      loading="lazy"
                    />

                    {/* Status Badge */}
                    <Badge className="absolute top-3 left-3 bg-primary text-white text-sm px-3 py-1">
                      {property.status}
                    </Badge>

                    {/* Overlay for text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                    {/* Location and Name at bottom */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2 text-white mb-1">
                        <MapPin className="w-3 h-3" />
                        <span className="text-xs font-medium">
                          {property.location}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {property.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Need Help Choosing the Right Property?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our expert advisors are here to help you find the perfect
                  property that matches your needs and budget.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                    onClick={() =>
                      handlePropertyClick({
                        title: "General Inquiry",
                        location: "All Properties",
                      })
                    }
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Get Expert Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
          setSelectedProperty(null);
        }}
        propertyTitle={selectedProperty?.title}
        propertyLocation={selectedProperty?.location}
      />

      <Footer />
    </div>
  );
}
