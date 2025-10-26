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
    projectName: "IRISH PLATINUM",
    subtitle: "THE TREASURE CHEST OF LIVING",
    developer: "Irish Buildcon Private Limited",
    location: "Sector 51, Greater Noida",
    reraId: "UPRERAPRJ503189/03/2024",
    status: "Near Possession",
    possessionDate: "Dec 2025",
    segment: "Premium Residential",
    tagline: "BETTER THAN BIG NAME",
    specialOffer: "Discount for First Fifty Flats",
    effectiveDate: "W.E.F 18th June 2025",

    // Images
    images: [
      "/Irish/hero.avif",
      "/Irish/Irish-1.avif",
      "/Irish/2.avif",
      "/Irish/3.avif",
      "/Irish/4.avif",
      "/Irish/5.avif",
      "/Irish/6.avif",
    ],

    // Location Advantage
    connectivity: [
      "5 mins to FNG Expressway",
      "10 mins to Noida Sector 62 & 63",
      "30 mins to Jewar Airport",
      "45 mins to Upcoming Film City",
    ],
    landmarks: [
      "Yatharth Hospital",
      "DLF Mall of India",
      "Railway Station",
      "Top Schools",
      "Shopping Hubs",
      "Employment Zones",
    ],

    // Amenities & Lifestyle
    amenities: {
      sports: [
        "All-weather Swimming Pools (Adult & Kids)",
        "Indoor Gym",
        "Billiards",
        "Squash & Badminton Courts",
      ],
      wellness: [
        "Club Platinum",
        "Outdoor Gym",
        "Skating Rink",
        "Basketball Court",
      ],
      recreation: [
        "Cricket Net with Bowling Machine",
        "Interactive Fountains",
        "Meditation Lawns",
        "Party Lawns",
        "Open-air Theatre",
      ],
      kids: [
        "Kids' Play Zones",
        "Garden Umbrella Sit-outs",
        "Adventure Activities",
      ],
      unique: [
        "Jogging Tracks",
        "Ceiling Height: 11 feet across all units",
        "Earthquake-resistant RCC frame with Mivan construction",
        "App-based Video Door Lock",
      ],
    },

    // Specifications
    specifications: {
      flooring:
        "PGVT/GVT tiles in all rooms (Kajaria/Orient/Sunheart), Anti-skid tiles in toilets and balconies",
      kitchen:
        "Granite kitchen counters with ceramic dado, Wall-mounted WC, premium CP fittings",
      bathrooms: "Grohe/Kohler/American Standard fittings, White sanitary ware",
      electricals:
        "8-ft laminated flush doors, Split AC provision in all rooms, Intercom, DTH conduit",
      balconies: "Modular switches, copper wiring, Smart home features",
      safety: "CCTV, biometric access, intercom, fire safety systems",
    },

    // Developer Credentials
    developerInfo: {
      experience: "Irish Group - Laying Foundation for Tomorrow",
      projectsDelivered:
        "Legacy of excellence with landmark delivery of Irish Pearls",
      notableProjects: [
        "Irish Pearls - Landmark Delivery",
        "Irish Platinum - Current Flagship",
      ],
      awards: [
        "Quality Construction Awards",
        "Customer Satisfaction Recognition",
      ],
    },

    // Pricing & Payment
    pricing: {
      priceRange: "₹69.5 Lakhs - ₹2.55 Cr",
      startingPrice: "₹69.5 Lakhs",
      pricePerSqft: "₹12,225 - ₹12,700 per sq.ft",
      unitConfigurations: [
        {
          type: "3BHK+2T",
          area: "1390 sq.ft",
          basePrice: "₹69.5 Lakhs",
          priceRange: "₹1.70 Cr - ₹1.77 Cr",
        },
        {
          type: "3BHK+3T",
          area: "1690 sq.ft",
          basePrice: "₹1.69 Cr",
          priceRange: "₹2.07 Cr - ₹2.15 Cr",
        },
        {
          type: "3BHK+Servant+4T",
          area: "1925 sq.ft",
          basePrice: "₹1.93 Cr",
          priceRange: "₹2.35 Cr - ₹2.44 Cr",
        },
        {
          type: "4BHK+4T",
          area: "2150 sq.ft",
          basePrice: "₹2.15 Cr",
          priceRange: "₹2.63 Cr - ₹2.73 Cr",
        },
        {
          type: "4BHK+Servant+5T",
          area: "2550 sq.ft",
          basePrice: "₹2.55 Cr",
          priceRange: "₹3.12 Cr - ₹3.24 Cr",
        },
      ],
      paymentPlans: {
        towerCD: {
          name: "Payment Plan for Tower C/D",
          schedule: [
            { term: "At the time of booking", amount: "10%" },
            { term: "Within 45 days from Booking", amount: "10%" },
            { term: "Within 180 days from Booking", amount: "20%" },
            { term: "On Start of 4th floor", amount: "8%" },
            { term: "On Start of 10th floor", amount: "8%" },
            { term: "On Start of 16th floor", amount: "8%" },
            { term: "On Start of 22nd floor", amount: "8%" },
            { term: "On Start of 28th floor", amount: "8%" },
            { term: "On start of finishing work", amount: "10%" },
            { term: "On offer of Possession", amount: "10%" },
          ],
        },
        towerAB: {
          name: "Payment Plan for Tower A/B",
          plan1: {
            name: "CLP Payment Plan - PAYMENT PLAN-1",
            schedule: [
              { term: "Booking Amount", amount: "10%" },
              { term: "On Start of Raft", amount: "20%" },
              { term: "On Start of Stilt Roof Casting", amount: "10%" },
              { term: "On Start of 4th Floor Casting", amount: "8%" },
              { term: "On Start of 10th Floor Casting", amount: "8%" },
              { term: "On Start of 16th Floor Casting", amount: "8%" },
              { term: "On Start of 22nd Floor Casting", amount: "8%" },
              { term: "On Start of 28th Floor Casting", amount: "8%" },
              { term: "On Start of Finishing work", amount: "10%" },
              { term: "On Offer of Possession", amount: "10%" },
            ],
          },
          plan2: {
            name: "50:25:25 Payment Plan - PAYMENT PLAN-2",
            schedule: [
              { term: "Booking Amount", amount: "10%" },
              { term: "Within 30 days from the booking", amount: "40%" },
              { term: "On Start of Top Floor Casting", amount: "25%" },
              { term: "On Offer of Possession", amount: "25%" },
            ],
          },
        },
      },
      otherCharges: [
        { item: "1 KVA Power Backup", amount: "Rs. 25,000 per kva" },
        { item: "EEC and FFC", amount: "Rs. 100/sqft (Free for limited time)" },
        {
          item: "Lower Basement Back to Back covered car parking",
          amount: "Rs. 2,50,000",
        },
        {
          item: "Upper Basement Back to Back covered car parking",
          amount: "Rs. 3,50,000",
        },
        {
          item: "Stilt Back to Back covered car parking",
          amount: "Rs. 5,00,000",
        },
        {
          item: "Upper Basement Side by Side covered car parking",
          amount: "Rs. 5,00,000",
        },
        {
          item: "Stilt Side by Side covered car parking",
          amount: "Rs. 6,00,000",
        },
        { item: "IFMS", amount: "Rs. 25/sqft (Applicable)" },
        { item: "Club Membership", amount: "Rs. 1,50,000 (Applicable)" },
        { item: "Lease rent", amount: "Rs. 80/sqft (Applicable)" },
        {
          item: "GST",
          amount: "At the Rate 5% Now (Applicable As Per Government Norms)",
        },
      ],
      bankDetails: {
        accountName: "M/S Irish Buildcon Private Limited, Irish Platinum",
        bankName: "ICICI Bank Limited",
        accountNumber: "414605001685",
        ifscCode: "ICIC0004146",
        branch: "Cherry County, Greater Noida (West)",
      },
    },

    // Unit Types
    unitTypes: [
      "3BHK+2T",
      "3BHK+3T",
      "3BHK+Servant+4T",
      "4BHK+4T",
      "4BHK+Servant+5T",
    ],
    sizes: "1390 sq.ft - 2550 sq.ft",
    floors: "30 Floors",
    totalUnits: "Multiple configurations available",

    // Special Offers & Terms
    specialOffers: {
      discount: "Discount for First Fifty Flats",
      effectiveDate: "W.E.F 18th June 2025",
      tagline: "BETTER THAN BIG NAME",
      subtitle: "THE TREASURE CHEST OF LIVING",
    },

    // Important Disclaimers
    disclaimers: [
      "Price list & Payment Plan can be changed without notice at the sole discretion of the Company",
      "There will be no escalation for the Booked Apartment",
      "All Payment should be made in favour of 'IRISH BUILDCON PVT LTD IRISH PLATINUM COLL.A/C' through A/c Payee Cheque / RTGS",
      "All the Registration/Stamp Duty, Lawyers Fees and other Government charges will be extra and as per Government Rules & Regulations",
      "In case Payment is remitted through RTGS please email the UTR No. at Customercare@irishinfra.com",
    ],

    // RERA Information
    reraInfo: {
      website: "www.up-rera.in",
      registrationNumber: "UPRERAPRJ503189/03/2024",
    },
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
          className="object-cover object-center"
          priority
          quality={95}
          sizes="100vw"
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

                    {/* Special Offers Card */}
                    <div className="bg-black rounded-xl p-4 text-white">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 border border-green-500 rounded-full flex items-center justify-center">
                          <Star className="w-3 h-3 text-green-500" />
                        </div>
                        <p className="text-sm font-semibold text-green-500">
                          Special Offers
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-white">
                          Power Backup: ₹25,000 per KVA
                        </p>
                        <p className="text-sm text-white">
                          EEC/FFC: ₹100/sq.ft
                        </p>
                        <p className="text-sm text-white">
                          Club Membership: ₹1,00,000
                        </p>
                      </div>
                    </div>
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
