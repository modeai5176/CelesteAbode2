"use client";

import Image from "next/image";
import { useState } from "react";
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
} from "lucide-react";

export default function PropertyPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);

  const property = {
    // Basic Project Information
    projectName: "THE BROOK & RIVULET",
    developer: "Fusion Limited",
    location: "Sector 12, Greater Noida West",
    reraId: "UPRERAPRJ535539",
    status: "Under Construction",
    possessionDate: "Under Construction",
    segment: "Investment Opportunity",

    // Images
    images: [
      "/Brook and Rivulet/1.avif",
      "/Brook and Rivulet/2.avif",
      "/Brook and Rivulet/3.avif",
      "/Brook and Rivulet/4.avif",
      "/luxury-modern-apartment.avif",
      "/premium-apartment-interior-living-room.avif",
    ],

    // Location Advantage
    connectivity: [
      "Metro Connectivity: Just 600m from proposed Sector 12 Metro Station (Aqua Line)",
      "Road Network: Noida–Greater Noida Link Road, NH-9, Yamuna Expressway",
      "Healthcare Nearby: Yatharth, Kailash, Fortis, Numed Hospitals",
      "Education Hub: GD Goenka, Jaipuria, Ramagya, IGNOB Centre",
    ],
    landmarks: [
      "Entertainment & Retail: Gaur City Mall, U:Fairia, Upcoming Film City (Sector 21, YEIDA)",
      "Airports: IGI Airport (Delhi), Upcoming Noida International Airport (Jewar)",
      "3 Side Open Corner Plot",
      "Grand Double-Height Entrance Lobby",
    ],

    // Amenities & Lifestyle
    amenities: {
      sports: [
        "Tennis Court",
        "Basketball Court",
        "Badminton Court",
        "Jogging / Cycling Tracks",
        "Half-Olympic Swimming Pool",
      ],
      wellness: [
        "Luxury Clubhouses: Paper Boat (The Brook) & Pebble Castle (The Rivulet) – 30,750 sq.ft",
        "Co-working spaces, guest rooms, indoor gym, swimming pool with jacuzzi, steam & sauna",
        "Indoor games: billiards, cards, table tennis",
        "Banquet hall, terrace seating, buffet counters",
      ],
      recreation: [
        "Terrace Garden (30,000 sq.ft): Mini golf, cricket bowling machine, outdoor gym, jogging track",
        "Yoga lawn, meditation centre, sunset deck, pergolas, bonfire pit",
        "Glass pavilions, vertical garden, advanced telescope",
      ],
      kids: ["Kids Zone", "Play Area", "Adventure Activities"],
      unique: [
        "3 Side Open Corner Plot",
        "Grand Double-Height Entrance Lobby",
        "3100 mm Floor-to-Floor Height",
        "2400 mm Door Height",
        "Mechanical Car Parking & EV Charging Stations",
        "Smog Guns for Air Purification",
      ],
    },

    // Specifications
    specifications: {
      flooring:
        "Vitrified PGVT tiles (600x1200 mm), OBD-finished walls, Wooden textured tiles in master bedroom",
      kitchen:
        "Granite/vitrified countertop, designer ceramic tiles, stainless steel sink",
      bathrooms: "Anti-skid ceramic tiles, white sanitary ware, CP fittings",
      electricals:
        "UPVC/aluminum powder-coated external doors, laminated internal doors",
      balconies: "RCC with aluminum formwork, earthquake-resistant",
      safety: "CCTV, biometric access, intercom, fire safety systems",
    },

    // Developer Credentials
    developerInfo: {
      experience: "Fusion Limited – Building Values",
      projectsDelivered:
        "50+ lakh sq.ft. delivered, 40+ lakh sq.ft. under construction, 3000+ families already call Fusion home",
      notableProjects: ["Fusion Homes", "French Apartments", "U:Fairia"],
      awards: ["Known for timely delivery, transparency, and customer delight"],
    },

    // Pricing & Payment
    pricing: {
      priceRange:
        "Unit Pricing (Approximate, in ₹ Lakhs): 3C: ₹140.40 – ₹145.10, 3E: ₹161.10 – ₹167.10, 4B: ₹209.00 – ₹216.00, 4C: ₹213.00 – ₹220.00",
      startingPrice: "₹1.40 Cr onwards",
      paymentPlan:
        "Special Payment Plan (SPP 40:40:20) - 40% on booking, 40% on super structure, 20% on possession",
      offers: "Construction Linked Plan (CLP) – 10:10:10… till possession",
    },

    // Unit Types
    unitTypes: ["3C", "3E", "4B", "4C"],
    sizes: "1350-2050 sq.ft",
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
          src={property.images[0]}
          alt={property.projectName}
          fill
          className="object-cover"
          priority
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
