"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ContactPopup } from "@/components/contact-popup";
import { useEffect, useRef, useState } from "react";
import { MapPin, Play, ChevronLeft, ChevronRight } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "FOREST WALK VILLAS",
    builder: "Renowned Group",
    address: "GDA Approved Location",
    image: "/ForestWalk/LandingpageVILLA.jpeg",
    status: "Pre-Launch Offer",
  },
  {
    id: 2,
    name: "IVORY COUNTY",
    builder: "County Group",
    address: "Sector 115, Noida",
    image: "/IvoryCounty/SocietyTowersView.png",
    status: "Under Construction",
  },
  {
    id: 3,
    name: "ESTATE 360",
    builder: "MAX ESTATES GROUP",
    address: "36A, Dwarka Expressway, Gurgaon",
    image: "/ESTATE360/DroneViewTowers.png",
    status: "Under Construction",
  },
  {
    id: 4,
    name: "CRC MAESTA",
    builder: "CRC Group",
    address: "Sector 1, Greater Noida West",
    image: "/CRCMaesta/TOWERVIEW.png",
    status: "Under Construction",
  },
  {
    id: 5,
    name: "ETERNIA",
    builder: "Premium Developer",
    address: "Tech Zone IV, Greater Noida (W)",
    image: "/Eternia/1.png",
    status: "Under Construction",
  },
  {
    id: 6,
    name: "THE BROOK & THE RIVULET",
    builder: "Renowned Developer",
    address: "Greater Noida (Prime 3-Side Open Corner Plot)",
    image: "/Brook and Rivulet/1.png",
    status: "Under Construction",
  },
];

export function PropertiesSection() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<{
    title: string;
    location: string;
  } | null>(null);

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  const handleContact = (property: any) => {
    setSelectedProperty({
      title: property.name,
      location: property.address,
    });
    setIsPopupOpen(true);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      id="properties"
      className="pt-24 pb-20 bg-gradient-to-br from-background to-primary/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="heading-bold text-primary mb-4">
            Featured <span className="text-[#CBB27A]">Luxury Properties</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked collection of premium real estate projects
            that redefine luxury living
          </p>
        </div>

        {/* Properties Carousel */}
        <div className="mb-12">
          <Carousel
            setApi={setApi}
            className="w-full max-w-5xl mx-auto relative"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {properties.map((property, index) => (
                <CarouselItem
                  key={property.id}
                  className="md:basis-1/2 lg:basis-1/2"
                >
                  <div
                    className="group cursor-pointer p-4"
                    onClick={() =>
                      handleNavigation(`/properties/${property.id}`)
                    }
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                      {/* Image */}
                      <Image
                        src={property.image}
                        alt={property.name}
                        width={450}
                        height={450}
                        className="w-full aspect-square object-cover rounded-2xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        quality={90}
                        loading="lazy"
                      />

                      {/* Darker Overlay for Better Text Visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 rounded-2xl"></div>

                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          {property.status}
                        </span>
                      </div>

                      {/* Text Overlay - Bottom Left */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-2xl font-semibold mb-2 drop-shadow-lg">
                          {property.name}
                        </h3>
                        <p className="text-base opacity-95 mb-2 drop-shadow-lg">
                          {property.builder}
                        </p>
                        <div className="flex items-center gap-2 text-sm opacity-90">
                          <MapPin className="w-4 h-4" />
                          <span className="drop-shadow-lg">
                            {property.address}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows - Left and Right Sides */}
            <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
              <CarouselPrevious className="relative translate-y-0 left-0 right-0 bg-white hover:bg-gray-50 border-2 border-primary text-primary hover:text-primary shadow-lg w-12 h-12" />
            </div>
            <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
              <CarouselNext className="relative translate-y-0 left-0 right-0 bg-white hover:bg-gray/50 border-2 border-primary text-primary hover:text-primary shadow-lg w-12 h-12" />
            </div>
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {properties.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? "bg-secondary w-8" : "bg-gray-300"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="md"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full"
              onClick={() => handleNavigation("/properties")}
            >
              Explore All Projects
            </Button>
            <Button
              variant="outline"
              size="md"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-full"
              onClick={() => handleContact(properties[0])}
            >
              Get Expert Consultation
            </Button>
          </div>
        </div>
      </div>

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
    </section>
  );
}
