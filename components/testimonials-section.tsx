"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export function TestimonialsSection() {
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use Intersection Observer to load widget only when section is about to be visible
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadWidget(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px", // Start loading 200px before section is visible
        threshold: 0.1,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="pt-6 pb-12 bg-gradient-to-br from-background to-secondary/5"
    >
      <div className="max-w-7xl mx-auto px-6 pb-8">
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

        {/* Elfsight Google Reviews | CELESTE ABODE - Load only when section is visible */}
        {shouldLoadWidget && (
          <>
            <Script
              src="https://elfsightcdn.com/platform.js"
              strategy="lazyOnload"
            />
            <div
              className="elfsight-app-4185bb5e-82e5-45bf-92fc-b41420393094"
              data-elfsight-app-lazy
              style={{ paddingBottom: '2rem' }}
            />
          </>
        )}
      </div>
    </section>
  );
}
