"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactPopup } from "@/components/contact-popup";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Eye,
  Play,
  Star,
  Building2,
} from "lucide-react";

export default function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<{
    title: string;
    location: string;
  } | null>(null);
  const filters = ["All", "Villas", "Apartments"];

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const properties = [
    {
      id: 1,
      type: "Villas",
      title: "FOREST WALK VILLAS",
      subtitle: "Phase 2 - Luxury Forest Living",
      location: "GDA Approved Location",
      price: "Contact for Pricing",
      priceUnit: "",
      image: "/ForestWalk/LandingpageVILLA.jpeg",
      beds: "Customizable",
      baths: "Customizable",
      area: "52 Acres",
      featured: true,
      status: "Pre-Launch Offer",
      developer: "Renowned Group",
      highlights: [
        "Pre-Launch Price",
        "Limited Units",
        "GDA Approved",
        "Forest Living",
      ],
      video: "/ForestWalk/PropertyLocationVideo.mp4",
      lifestyleVideo: "/ForestWalk/Property_futurelifestule_videos.mp4",
      mockup: "/ForestWalk/VillabuiltMockup.jpeg",
    },
    {
      id: 2,
      type: "Apartments",
      title: "IVORY COUNTY",
      subtitle: "Premium Living in Sector 115",
      location: "Sector 115, Noida",
      price: "Contact for Pricing",
      priceUnit: "",
      image: "/IvoryCounty/SocietyTowersView.png",
      beds: "3, 4 & 5 BHK",
      baths: "2-3 Baths",
      area: "2034-3195 sq.ft.",
      featured: true,
      status: "Under Construction",
      developer: "County Group",
      highlights: [
        "Prime Location",
        "Premium Amenities",
        "County Group",
        "Ready to Move",
      ],
      amenities: [
        "/IvoryCounty/SportsANDbarArea.png",
        "/IvoryCounty/GardenArea.png",
        "/IvoryCounty/FluidRestro.png",
        "/IvoryCounty/FlatsInsideAesthetic.png",
      ],
    },
    {
      id: 3,
      type: "Apartments",
      title: "ESTATE 360",
      subtitle: "Inter-Generational Luxury Living",
      location: "36A, Dwarka Expressway, Gurgaon",
      price: "Contact for Pricing",
      priceUnit: "",
      image: "/ESTATE360/DroneViewTowers.png",
      beds: "Premium BHK",
      baths: "Premium Baths",
      area: "11.8 Acres",
      featured: true,
      status: "Under Construction",
      developer: "MAX ESTATES GROUP",
      highlights: [
        "Antara Partnership",
        "Exclusive Design",
        "Prime Location",
        "Luxury Amenities",
      ],
      amenities: [
        "/ESTATE360/TheHub.png",
        "/ESTATE360/LagoonPool.png",
        "/ESTATE360/SerpentineLake.png",
        "/ESTATE360/WraparoundBalcony.png",
      ],
    },
    {
      id: 4,
      type: "Apartments",
      title: "CRC MAESTA",
      subtitle: "Your Picture Perfect Moments",
      location: "Sector 1, Greater Noida West",
      price: "Contact for Pricing",
      priceUnit: "",
      image: "/CRCMaesta/TOWERVIEW.png",
      beds: "Premium BHK",
      baths: "Premium Baths",
      area: "1093-1895 sq.ft.",
      featured: true,
      status: "Under Construction",
      developer: "CRC Group",
      highlights: [
        "Club Maesta",
        "Premium Location",
        "CRC Legacy",
        "Luxury Finishes",
      ],
      amenities: [
        "/CRCMaesta/PoolandClubDroneShot.png",
        "/CRCMaesta/WellNessZone.png",
        "/CRCMaesta/MiniTheater.png",
        "/CRCMaesta/FamilyLounge.png",
      ],
    },
    {
      id: 5,
      type: "Apartments",
      title: "ETERNIA",
      subtitle: "Premium Residences in Greater Noida",
      location: "Tech Zone IV, Greater Noida (W)",
      price: "Contact for Pricing",
      priceUnit: "",
      image: "/Eternia/1.png",
      beds: "3, 3+1 & 4+1 BHK",
      baths: "2-3 Baths",
      area: "1086-1599 sq.ft.",
      featured: true,
      status: "Under Construction",
      developer: "Premium Developer",
      highlights: [
        "Skyline Views",
        "Green Belt Facing",
        "EV Charging",
        "25K sq.ft. Clubhouse",
      ],
      amenities: [
        "/Eternia/2.png",
        "/Eternia/3.png",
        "/Eternia/4.png",
        "/Eternia/5.png",
      ],
    },
    {
      id: 6,
      type: "Apartments",
      title: "THE BROOK & THE RIVULET",
      subtitle: "Premium High-Rise Residences",
      location: "Greater Noida (Prime 3-Side Open Corner Plot)",
      price: "Contact for Pricing",
      priceUnit: "",
      image: "/Brook and Rivulet/1.png",
      beds: "Premium BHK",
      baths: "Premium Baths",
      area: "Premium Sizes",
      featured: true,
      status: "Under Construction",
      developer: "Renowned Developer",
      highlights: [
        "3-Side Open Plot",
        "Earthquake Resistant",
        "EV Charging",
        "30,750 sq.ft. Clubhouses",
      ],
      amenities: [
        "/Brook and Rivulet/2.png",
        "/Brook and Rivulet/3.png",
        "/Brook and Rivulet/4.png",
        "/Brook and Rivulet/5.png",
      ],
    },
  ];

  const filteredProperties =
    activeFilter === "All"
      ? properties
      : properties.filter((property) => property.type === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-0">
        {/* Hero Section */}
        <section className="pt-0 pb-8 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 min-h-[60vh] flex flex-col philosophy-hero">
          <Header />
          <div className="flex-1 flex items-center justify-center pt-24">
            <div className="max-w-4xl mx-auto text-center w-full">
              <h1 className="text-4xl md:text-5xl font-black text-primary mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>
                Explore <span className="text-[#000000]">Premium Properties</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover exceptional real estate projects that redefine luxury living and investment opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={
                activeFilter === filter
                  ? "pill-button bg-primary hover:bg-primary/90 text-white"
                  : "pill-button bg-secondary hover:bg-secondary/80 text-foreground border-secondary"
              }
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Properties Grid */}
        <section className="pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProperties.map((property) => (
                <Card
                  key={property.id}
                  className="border-0 bg-card overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative">
                    <Image
                      src={property.image}
                      alt={property.title}
                      width={500}
                      height={400}
                      className="w-full h-64 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      quality={90}
                      loading="lazy"
                    />

                    {/* Status Badge */}
                    <Badge className="absolute top-3 left-3 bg-secondary text-white text-xs">
                      {property.status}
                    </Badge>

                    {/* Featured Badge */}
                    {property.featured && (
                      <Badge className="absolute top-3 right-3 bg-primary text-white text-xs">
                        Featured
                      </Badge>
                    )}

                    {/* Developer Badge */}
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-white/90 text-primary px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {property.developer}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span className="line-clamp-1">{property.location}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-1">
                      {property.title}
                    </h3>
                    <p className="text-secondary font-medium text-sm mb-3 line-clamp-1">
                      {property.subtitle}
                    </p>

                    {property.price !== "Contact for Pricing" && (
                      <p className="text-xl font-semibold text-secondary mb-3">
                        {property.price}
                      </p>
                    )}

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        <span className="line-clamp-1">{property.area}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        <span className="line-clamp-1">{property.beds}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        <span className="line-clamp-1">{property.baths}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {property.highlights
                          .slice(0, 2)
                          .map((highlight, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-primary/15 text-primary border border-primary/20 px-2 py-1 rounded-full line-clamp-1"
                            >
                              {highlight}
                            </span>
                          ))}
                        {property.highlights.length > 2 && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            +{property.highlights.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <Button
                        className="flex-1 bg-secondary hover:bg-secondary/90 text-white text-sm py-2 rounded-full"
                        onClick={() => {
                          setSelectedProperty({
                            title: property.title,
                            location: property.location,
                          });
                          setIsPopupOpen(true);
                        }}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Schedule Viewing
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm py-2 px-4 rounded-full"
                        onClick={() =>
                          (window.location.href = `/properties/${property.id}`)
                        }
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
