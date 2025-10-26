"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Car,
  Building2,
  Home,
  Calendar,
  Award,
  CheckCircle,
  Phone,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
  Star,
  Clock,
  Users,
  Shield,
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
  Eye,
  Play,
  Square,
  TrendingUp,
  Crown,
  X,
} from "lucide-react";

export default function PropertyPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);

  const property = {
    // Basic Project Information
    projectName: "ARIHANT ABODE",
    developer: "Arihant Group",
    location: "Sector 10, Greater Noida West",
    reraId: "UPRERAPRJ15792",
    segment: "Buying to Live",
    status: "Ready to Move",
    possessionDate: "March 2026",

    // Location Advantage
    connectivity: [
      "Noida Expressway (5 mins)",
      "NH-24 (7 mins)",
      "Noida (5 mins)",
      "Gaur Chowk (2 mins)",
      "Noida International Airport (60 mins)",
    ],
    landmarks: [
      "Gaur City Mall (2 mins)",
      "Educational Institutions (15 mins)",
      "Healthcare Centers (10 mins)",
      "Shopping Centers (5 mins)",
      "Government Offices (8 mins)",
      "Entertainment Hubs (5 mins)",
    ],

    // Residences / Property Details
    unitTypes: ["2 BHK", "3 BHK + 2T"],
    sizes: "1020-1270 sq.ft.",
    architecturalHighlights: [
      "Luxury Finishes",
      "11 ft Floor Height",
      "Digital Home Features",
      "Stilt-based Layout",
      "Running Balconies",
    ],
    structureQuality:
      "RCC frame structure with premium quality materials and earthquake resistance",

    // Amenities & Lifestyle
    amenities: {
      sports: [
        "Swimming Pool (+ elevated pool on 5th floor)",
        "Gymnasium",
        "Tennis Courts",
        "Jogging Track",
      ],
      wellness: [
        "Mini Theatre",
        "2.5-acre Central Green",
        "Wellness Facilities",
        "Green Spaces",
      ],
      recreation: ["Recreation Areas", "Social Spaces", "Entertainment Zones"],
      kids: ["Children's Play Area", "Kids Zone", "Safe Playground"],
      unique: [
        "Premium Location",
        "Modern Architecture",
        "Quality Construction",
        "Timely Delivery",
        "Customer Trust",
      ],
    },

    // Specifications
    specifications: {
      flooring:
        "Vitrified tiles in living areas, anti-skid tiles in bath & kitchen",
      kitchen: "Granite countertop, SS sink, RO system",
      bathrooms: "Designer tiles, branded fittings, standard chinaware",
      electricals:
        "Concealed copper wiring, modular switches, A/C, TV & video door phone provisions",
      balconies: "Premium railings with modern design",
      safety: "Fire safety systems, security systems, intercom facility",
    },

    // Developer Credentials
    developerInfo: {
      experience: "30+ years in real estate",
      delivered: "Delivered across Delhi-NCR region",
      projects: [
        "High-quality construction",
        "Timely delivery",
        "Customer trust",
      ],
      families:
        "Registered Under: UP Real Estate Regulatory Authority (UPRERA)",
      awards: [
        "Quality Construction",
        "Timely Delivery",
        "Customer Satisfaction",
      ],
    },

    // Pricing & Payment
    pricing: {
      priceRange: "₹1.02 Cr - ₹1.30 Cr",
      startingPrice: "₹1.02 Cr",
      paymentPlans: ["80:20"],
      offers: "5% stamp duty free for 2 BHK | ₹100/sq.ft discount for 3 BHK",
    },

    // Gallery
    images: [
      "/luxury-modern-apartment.avif",
      "/luxury-villa-exterior-modern-architecture.avif",
      "/modern-apartment-building-with-green-spaces.avif",
      "/premium-apartment-interior-living-room.avif",
      "/luxury-cityscape-blurred-background-for-real-estat.avif",
    ],
  };

  const handleContact = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Cinematic Hero Banner */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/arihant abode/hero.avif"
          alt={property.projectName}
          fill
          className="object-cover object-center"
          priority
          quality={95}
          sizes="100vw"
        />
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>

        {/* Subtle vignette effect for focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

        {/* Property Name & Location */}
        <div className="absolute inset-0 flex items-end justify-start pb-20 pl-8 md:pl-12">
          <div className="max-w-6xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 text-sm font-semibold border border-white/30">
                {property.status}
              </Badge>
            </div>
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                textShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              {property.projectName}
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#CBB27A]" />
                <p
                  className="text-xl md:text-2xl font-semibold text-[#CBB27A]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  {property.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Data Strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-white/20">
          <div className="max-w-7xl mx-auto px-12 py-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-8 text-white">
                <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
                  <div className="w-8 h-8 bg-[#CBB27A]/20 rounded-full flex items-center justify-center group-hover:bg-[#CBB27A]/30 transition-colors duration-300">
                    <Calendar className="w-4 h-4 text-[#CBB27A] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 group-hover:text-white/90 transition-colors duration-300">
                      Possession
                    </p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#CBB27A] transition-colors duration-300">
                      {property.possessionDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
                  <div className="w-8 h-8 bg-[#CBB27A]/20 rounded-full flex items-center justify-center group-hover:bg-[#CBB27A]/30 transition-colors duration-300">
                    <Award className="w-4 h-4 text-[#CBB27A] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 group-hover:text-white/90 transition-colors duration-300">
                      Developer
                    </p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#CBB27A] transition-colors duration-300">
                      {property.developer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
                  <div className="w-8 h-8 bg-[#CBB27A]/20 rounded-full flex items-center justify-center group-hover:bg-[#CBB27A]/30 transition-colors duration-300">
                    <Building2 className="w-4 h-4 text-[#CBB27A] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 group-hover:text-white/90 transition-colors duration-300">
                      RERA ID
                    </p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#CBB27A] transition-colors duration-300">
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
              {/* Project Gallery */}
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

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {property.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square cursor-pointer group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                      onClick={() => {
                        setModalImageIndex(index);
                        setIsImageModalOpen(true);
                      }}
                    >
                      <Image
                        src={image}
                        alt={`${property.projectName} - Image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                          <Eye className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12" />
                        </div>
                      </div>
                    </div>
                  ))}
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
                      <Sparkles className="w-6 h-6 text-[#CBB27A]" />
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
                      const categoryIcons = {
                        sports: Dumbbell,
                        wellness: Heart,
                        recreation: Music,
                        kids: Gamepad2,
                        unique: Crown,
                      };
                      const IconComponent =
                        categoryIcons[category as keyof typeof categoryIcons] ||
                        Sparkles;

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
                      const specIcons = {
                        flooring: Square,
                        kitchen: Coffee,
                        bathrooms: Droplets,
                        electricals: Zap,
                        balconies: Wind,
                        safety: Shield,
                      };
                      const IconComponent =
                        specIcons[key as keyof typeof specIcons] || Shield;

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
                  {/* Company Overview Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-black" />
                      </div>
                      <h3
                        className="text-2xl font-bold text-gray-900"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Company Overview
                      </h3>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-[#CBB27A]/10 rounded-full flex items-center justify-center">
                          <Clock className="w-4 h-4 text-[#CBB27A]" />
                        </div>
                        <div>
                          <p
                            className="text-sm text-gray-600 mb-1"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            Experience
                          </p>
                          <p
                            className="font-semibold text-gray-900"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            {property.developerInfo.experience}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-[#CBB27A]/10 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-[#CBB27A]" />
                        </div>
                        <div>
                          <p
                            className="text-sm text-gray-600 mb-1"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            Delivered
                          </p>
                          <p
                            className="font-semibold text-gray-900"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            {property.developerInfo.delivered}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-[#CBB27A]/10 rounded-full flex items-center justify-center">
                          <Shield className="w-4 h-4 text-[#CBB27A]" />
                        </div>
                        <div>
                          <p
                            className="text-sm text-gray-600 mb-1"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            Registration
                          </p>
                          <p
                            className="font-semibold text-gray-900"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            {property.developerInfo.families}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notable Projects Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-black" />
                      </div>
                      <h3
                        className="text-2xl font-bold text-gray-900"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Notable Projects
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {property.developerInfo.projects.map((project, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-[#CBB27A]/5 transition-colors duration-200"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span
                            className="text-gray-700 font-medium"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            {project}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Persistent CTA Column (30%) */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Pricing Card */}
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#CBB27A]/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-[#CBB27A]" />
                    </div>
                    <h3
                      className="text-xl font-bold text-gray-900"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Pricing & Payment
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-[#CBB27A]/10 to-[#CBB27A]/5 p-4 rounded-xl border border-[#CBB27A]/20">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 bg-[#CBB27A]/20 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-3 h-3 text-[#CBB27A]" />
                        </div>
                        <p
                          className="text-xs text-gray-600 font-semibold"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          Starting Price
                        </p>
                      </div>
                      <p
                        className="text-2xl font-bold text-[#CBB27A]"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {property.pricing.startingPrice}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 bg-[#CBB27A]/10 rounded-full flex items-center justify-center">
                        <Square className="w-3 h-3 text-[#CBB27A]" />
                      </div>
                      <div>
                        <p
                          className="text-xs text-gray-600"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          Price Range
                        </p>
                        <p
                          className="text-sm font-semibold text-gray-900"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {property.pricing.priceRange}
                        </p>
                      </div>
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
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#CBB27A]/10 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-[#CBB27A]" />
                    </div>
                    <h3
                      className="text-xl font-bold text-gray-900"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Property Inquiry
                    </h3>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        <User className="w-4 h-4 text-[#CBB27A]" />
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        className="border-gray-300 focus:border-[#CBB27A] focus:ring-[#CBB27A] rounded-lg h-10"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        <Phone className="w-4 h-4 text-[#CBB27A]" />
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-gray-300 focus:border-[#CBB27A] focus:ring-[#CBB27A] rounded-lg h-10"
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
    </div>
  );
}
