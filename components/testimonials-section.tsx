"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function TestimonialsSection() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      project: "FOREST WALK VILLAS",
      content:
        "The team provided exceptional guidance throughout the entire process. Forest Walk Villas exceeded our expectations with its unique forest-inspired design and premium amenities. Highly recommended!",
      rating: 5,
      verified: true,
    },
    {
      name: "Priya Sharma",
      role: "IT Professional",
      project: "IVORY COUNTY",
      content:
        "Investing in Ivory County was the best decision we made. The project's location, amenities, and County Group's reputation gave us complete confidence. The team's expertise made everything seamless.",
      rating: 5,
      verified: true,
    },
    {
      name: "Amit Patel",
      role: "Corporate Executive",
      project: "ESTATE 360",
      content:
        "Estate 360's inter-generational concept and Antara partnership impressed us immediately. The team's market knowledge and project insights helped us make an informed investment decision.",
      rating: 5,
      verified: true,
    },
    {
      name: "Sunita Verma",
      role: "Entrepreneur",
      project: "CRC MAESTA",
      content:
        "CRC Maesta's Club Maesta amenities and CRC Group's 38+ years legacy convinced us. The team's attention to detail and post-sale support has been outstanding. We're extremely satisfied with our investment choice.",
      rating: 5,
      verified: true,
    },
  ];

  return (
    <section className="pt-6 pb-0 bg-gradient-to-br from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="heading-bold text-primary mb-6">
            What Our <span className="text-[#CBB27A]">Clients</span> Say
          </h1>
          <p className="lead text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience with our premium real estate
            projects and services.
          </p>
        </div>

        {/* Testimonials Carousel */}
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2">
                  <div className="p-2 h-full">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                      <CardContent className="p-5 h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="h4 text-primary">
                                {testimonial.name}
                              </h4>
                              <p className="body-text text-muted-foreground">
                                {testimonial.role}
                              </p>
                            </div>
                            {testimonial.verified && (
                              <Badge className="bg-green-100 text-green-800 text-xs">
                                Verified Client
                              </Badge>
                            )}
                          </div>

                          <div className="mb-3">
                            <Badge variant="secondary" className="mb-2">
                              {testimonial.project}
                            </Badge>
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 text-yellow-400 fill-current"
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="relative mt-auto">
                          <Quote className="w-8 h-8 text-primary/30 absolute -top-2 -left-2" />
                          <p className="body-text text-muted-foreground leading-relaxed pl-6">
                            {testimonial.content}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows - Left and Right Sides */}
            <div className="absolute -left-4 md:-left-16 top-1/2 transform -translate-y-1/2">
              <CarouselPrevious className="relative translate-y-0 left-0 right-0 bg-white hover:bg-gray-50 border-2 border-primary text-primary hover:text-primary shadow-lg w-10 h-10 md:w-12 md:h-12" />
            </div>
            <div className="absolute -right-4 md:-right-16 top-1/2 transform -translate-y-1/2">
              <CarouselNext className="relative translate-y-0 left-0 right-0 bg-white hover:bg-gray-50 border-2 border-primary text-primary hover:text-primary shadow-lg w-10 h-10 md:w-12 md:h-12" />
            </div>
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
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

      </div>
    </section>
  );
}
