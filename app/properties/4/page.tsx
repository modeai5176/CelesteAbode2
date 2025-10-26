"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactPopup } from "@/components/contact-popup";
import {
  MapPin,
  Building2,
  Calendar,
  Award,
  Car,
  Eye,
  X,
  CheckCircle,
  Square,
  Coffee,
  Droplets,
  Zap,
  Wind,
  Shield,
  Dumbbell,
  Heart,
  Music,
  Gamepad2,
  Crown,
  Star,
  MessageSquare,
  ArrowRight,
  Camera,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function PropertyPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSlideshowPaused, setIsSlideshowPaused] = useState(false);
  const [hoveredThumbnail, setHoveredThumbnail] = useState<number | null>(null);

  const property = {
    // Basic Project Information
    projectName: "RG PLEIADDES",
    developer: "RG Group",
    location: "Sector-1, Greater Noida West (near Ace Divino & ATS Destiniare)",
    reraId: "UPRERAPRJ415309/09/2025",
    status: "New Launch",
    possessionDate: "TBD",
    segment: "Premium Residential Landmark",
    totalUnits: "Limited Units",
    towers: 6,
    projectSize: "8 Acres",
    openGreens: "70%",

    // Images
    images: [
      "/RG/1.avif",
      "/RG/2.avif",
      "/RG/3.avif",
      "/RG/4.avif",
      "/RG/5.avif",
      "/RG/6.avif",
      "/RG/7.avif",
      "/RG/8.avif",
    ],

    // Location Advantage
    connectivity: [
      "Just 5 mins drive to Central Noida",
      "Seamless access to Noida-Greater Noida Expressway & Delhi NCR",
      "Upcoming Metro Connectivity at doorstep",
    ],
    landmarks: [
      "Healthcare Nearby – Yatharth Hospital, Fortis, Kailash Hospital",
      "Education Hub – DPS, Lotus Valley, Ryan Intl., Amity University",
      "Entertainment & Lifestyle – Gaur City Mall, DLF Mall of India, Sector-18 Atta Market",
    ],

    // Amenities & Lifestyle
    amenities: {
      sports: [
        "Indoor & Outdoor Pools",
        "Bowling Alley",
        "Squash & Badminton",
        "Golf Simulator",
      ],
      wellness: ["Yoga, Spa & Wellness", "AV Lounge"],
      recreation: ["Café & Banquet", "World-Class Lifestyle"],
      kids: ["Kids Zone", "Play Areas"],
      unique: [
        "6 Iconic Towers in 8 Acres Plot",
        "70% Open Greens",
        "World-Class Lifestyle",
        "Luxury Living + Unbeatable Location",
      ],
    },

    // Specifications
    specifications: {
      flooring:
        "High-end fittings and fixtures for a refined living experience",
      kitchen: "Premium finishes and smart layouts",
      bathrooms: "Contemporary architecture with premium finishes",
      electricals: "Smart space planning and natural ventilation",
      balconies: "High-end fittings and fixtures",
      safety: "Premium finishes and smart layouts",
    },

    // Developer Credentials
    developerInfo: {
      experience:
        "RG Group brings a legacy of trust and excellence in real estate",
      projectsDelivered:
        "Known for delivering landmark projects with timely execution",
      notableProjects: [
        "RG Pleiaddes - Current Project",
        "Landmark Projects across NCR",
      ],
      awards: [
        "Customer-centric Design Awards",
        "Quality Construction Standards",
      ],
    },

    // Pricing & Payment
    pricing: {
      priceRange: "₹8,584 per sq.ft",
      startingPrice: "Premium 3 & 4 BHK Residences",
      paymentPlan: "Flexible Plans",
      offers: "Limited Units | RERA Registered (UPRERAPRJ415309/09/2025)",
      eoi: "EOI – ₹15 Lac Only",
      benefits: "Book Now – Unlock Pre-Launch Benefits!",
    },

    // Unit Types
    unitTypes: ["Premium 3 BHK", "Premium 4 BHK"],
    sizes: "Premium sized apartments",
    highlights: [
      "Premium 3 & 4 BHK Residences",
      "6 Iconic Towers in 8 Acres Plot",
      "70% Open Greens, World-Class Lifestyle",
      "Central Location Advantage",
      "Luxury Living + Unbeatable Location",
    ],
  };

  // Slideshow functionality
  useEffect(() => {
    if (!isSlideshowPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === property.images.length - 1 ? 0 : prevSlide + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isSlideshowPaused, property.images.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === property.images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? property.images.length - 1 : prevSlide - 1
    );
  };

  const handleImageClick = (index: number) => {
    setModalImageIndex(index);
    setIsImageModalOpen(true);
  };

  const handleContact = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <Header />

      {/* Cinematic Hero Banner */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/RG/hero.avif"
          alt={property.projectName}
          fill
          className="object-cover object-center"
          priority
          quality={95}
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Property Name & Location */}
        <div className="absolute inset-0 flex items-end justify-start pb-16 pl-12">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-black text-white px-4 py-2 text-sm font-semibold">
                {property.status}
              </Badge>
            </div>
            <h1
              className="text-7xl md:text-8xl font-black leading-tight text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {property.projectName}
            </h1>
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-6 h-6 text-[#CBB27A]" />
              <p
                className="text-2xl md:text-3xl font-bold text-[#CBB27A]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {property.location}
              </p>
            </div>
          </div>
        </div>

        {/* Data Strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-12 py-4">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-8 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#CBB27A]/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-[#CBB27A]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Possession</p>
                    <p className="text-sm font-semibold text-white">
                      {property.possessionDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#CBB27A]/20 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#CBB27A]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Developer</p>
                    <p className="text-sm font-semibold text-white">
                      {property.developer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#CBB27A]/20 rounded-full flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-[#CBB27A]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70">RERA ID</p>
                    <p className="text-sm font-semibold text-white">
                      {property.reraId}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main>
        <div className="max-w-7xl mx-auto px-12 py-16">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content Column (70%) */}
            <div className="lg:col-span-2 space-y-20">
              {/* Project Gallery - Slideshow */}
              <section>
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#CBB27A]/10 rounded-full flex items-center justify-center">
                      <Camera className="w-6 h-6 text-[#CBB27A]" />
                    </div>
                    <h2
                      className="text-4xl font-bold text-gray-900"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Project Gallery
                    </h2>
                  </div>
                  <div className="w-20 h-1 bg-[#CBB27A] mb-8"></div>
                </div>

                {/* Modern Slideshow */}
                <div
                  className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
                  onMouseEnter={() => setIsSlideshowPaused(true)}
                  onMouseLeave={() => setIsSlideshowPaused(false)}
                >
                  {/* Main Image Display */}
                  <div className="relative w-full h-full">
                    <div
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => handleImageClick(currentSlide)}
                    >
                      <Image
                        src={property.images[currentSlide]}
                        alt={`${property.projectName} - Image ${
                          currentSlide + 1
                        }`}
                        fill
                        className="object-cover transition-all duration-1000 ease-in-out hover:scale-105"
                        priority
                        quality={95}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      />
                    </div>

                    {/* Gradient Overlay - pointer-events-none to allow clicks through */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

                    {/* Image Counter */}
                    <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 pointer-events-none">
                      <span className="text-white text-sm font-semibold">
                        {currentSlide + 1} / {property.images.length}
                      </span>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevSlide();
                      }}
                      className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm rounded-full p-4 text-white hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextSlide();
                      }}
                      className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm rounded-full p-4 text-white hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Click to Zoom Indicator */}
                    <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="flex items-center gap-2">
                        <Eye className="w-3 h-3 text-white" />
                        <span className="text-white text-xs font-medium">
                          Click to zoom
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Point Navigation with Hover Tooltips */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex justify-center gap-4 pb-2">
                      {property.images.map((image, index) => (
                        <div key={index} className="relative">
                          <button
                            onClick={() => setCurrentSlide(index)}
                            onMouseEnter={() => setHoveredThumbnail(index)}
                            onMouseLeave={() => setHoveredThumbnail(null)}
                            className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentSlide
                                ? "bg-[#CBB27A] scale-125 shadow-lg"
                                : "bg-white/60 hover:bg-white/80 hover:scale-110"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />

                          {/* Hover Tooltip Preview */}
                          {hoveredThumbnail === index && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 z-50">
                              {/* Tooltip Arrow */}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>

                              {/* Tooltip Content */}
                              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                                <div className="relative w-48 h-32">
                                  <Image
                                    src={image}
                                    alt={`Preview ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="192px"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                  {/* Image Info */}
                                  <div className="absolute bottom-2 left-2 right-2">
                                    <p className="text-white text-xs font-semibold mb-1">
                                      {property.projectName}
                                    </p>
                                    <p className="text-white/80 text-xs">
                                      Image {index + 1} of{" "}
                                      {property.images.length}
                                    </p>
                                  </div>

                                  {/* Click Indicator */}
                                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-1">
                                    <Eye className="w-3 h-3 text-white" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Location Advantage */}
              <section>
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#CBB27A]/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#CBB27A]" />
                    </div>
                    <h2
                      className="text-4xl font-bold text-gray-900"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Location Advantage
                    </h2>
                  </div>
                  <div className="w-20 h-1 bg-[#CBB27A] mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Connectivity Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <Car className="w-6 h-6 text-black" />
                      </div>
                      <h3
                        className="text-2xl font-bold text-gray-900"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Connectivity
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {property.connectivity.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-[#CBB27A]/5 transition-colors duration-200"
                        >
                          <div className="w-8 h-8 bg-[#CBB27A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Car className="w-4 h-4 text-[#CBB27A]" />
                          </div>
                          <span
                            className="text-gray-700 font-medium"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Landmarks Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <h3
                        className="text-2xl font-bold text-gray-900"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Nearby Landmarks
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {property.landmarks.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-[#CBB27A]/5 transition-colors duration-200"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-4 h-4 text-blue-500" />
                          </div>
                          <span
                            className="text-gray-700 font-medium"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Amenities & Lifestyle */}
              <section>
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#CBB27A]/10 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-[#CBB27A]" />
                    </div>
                    <h2
                      className="text-4xl font-bold text-gray-900"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Amenities & Lifestyle
                    </h2>
                  </div>
                  <div className="w-20 h-1 bg-[#CBB27A] mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(property.amenities).map(
                    ([category, items]) => {
                      const iconMap: { [key: string]: any } = {
                        sports: Dumbbell,
                        wellness: Heart,
                        recreation: Music,
                        kids: Gamepad2,
                        unique: Crown,
                      };
                      const IconComponent = iconMap[category] || Star;

                      return (
                        <div
                          key={category}
                          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-black" />
                            </div>
                            <h3
                              className="text-xl font-bold text-gray-900 capitalize"
                              style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                              {category.replace(/([A-Z])/g, " $1").trim()}
                            </h3>
                          </div>
                          <div className="space-y-3">
                            {items.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#CBB27A]/5 transition-colors duration-200"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span
                                  className="text-sm text-gray-700 font-medium"
                                  style={{ fontFamily: "Poppins, sans-serif" }}
                                >
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </section>

              {/* Specifications */}
              <section>
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#CBB27A]/10 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-[#CBB27A]" />
                    </div>
                    <h2
                      className="text-4xl font-bold text-gray-900"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Specifications
                    </h2>
                  </div>
                  <div className="w-20 h-1 bg-[#CBB27A] mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(property.specifications).map(
                    ([key, value]) => {
                      const iconMap: { [key: string]: any } = {
                        flooring: Square,
                        kitchen: Coffee,
                        bathrooms: Droplets,
                        electricals: Zap,
                        balconies: Wind,
                        safety: Shield,
                      };
                      const IconComponent = iconMap[key] || Star;

                      return (
                        <div
                          key={key}
                          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-black" />
                            </div>
                            <h4
                              className="text-xl font-bold text-gray-900 capitalize"
                              style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </h4>
                          </div>
                          <p
                            className="text-gray-700 leading-relaxed"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            {value}
                          </p>
                        </div>
                      );
                    }
                  )}
                </div>
              </section>

              {/* Developer Credentials */}
              <section>
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#CBB27A]/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-[#CBB27A]" />
                    </div>
                    <h2
                      className="text-4xl font-bold text-gray-900"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Developer Credentials
                    </h2>
                  </div>
                  <div className="w-20 h-1 bg-[#CBB27A] mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-black" />
                      </div>
                      <h3
                        className="text-xl font-bold text-gray-900"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Company Overview
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span
                          className="text-gray-700 font-medium"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {property.developerInfo.experience}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span
                          className="text-gray-700 font-medium"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          Projects Delivered:{" "}
                          {property.developerInfo.projectsDelivered}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-black" />
                      </div>
                      <h3
                        className="text-xl font-bold text-gray-900"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Notable Projects
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {property.developerInfo.notableProjects.map(
                        (project, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span
                              className="text-gray-700 font-medium"
                              style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                              {project}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sticky CTA Column (30%) */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Pricing & Payment */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#CBB27A]/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-[#CBB27A]" />
                    </div>
                    <h3
                      className="text-lg font-bold text-gray-900"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Pricing & Payment
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-600 mb-1">Price Range</p>
                      <p
                        className="text-lg font-bold text-gray-900"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {property.pricing.priceRange}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-600 mb-1">
                        Starting Price
                      </p>
                      <p
                        className="text-lg font-bold text-gray-900"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {property.pricing.startingPrice}
                      </p>
                    </div>

                    {property.pricing.offers && (
                      <div className="bg-black p-3 rounded-xl text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-4 h-4 bg-green-500/20 rounded-full flex items-center justify-center">
                            <Star className="w-2 h-2 text-green-500" />
                          </div>
                          <p className="text-xs font-semibold text-green-500">
                            Special Offers
                          </p>
                        </div>
                        <p
                          className="text-xs font-bold text-white"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {property.pricing.offers}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Property Inquiry Form */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-[#CBB27A]/10 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-[#CBB27A]" />
                    </div>
                    <h3
                      className="text-lg font-bold text-gray-900"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Property Inquiry
                    </h3>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CBB27A] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CBB27A] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <Button
                      className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] group"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <MessageSquare className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                        Send Inquiry
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-2xl max-h-[70vh] w-full mx-4">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <X className="w-6 h-6 text-black transition-transform duration-300 group-hover:rotate-90" />
            </button>
            <Image
              src={property.images[modalImageIndex]}
              alt={`${property.projectName} - Image ${modalImageIndex + 1}`}
              width={1200}
              height={800}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}
