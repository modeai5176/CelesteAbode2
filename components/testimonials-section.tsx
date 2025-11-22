"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export function TestimonialsSection() {
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
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
        rootMargin: "300px", // Start loading earlier (300px before section is visible)
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
            Client Voices: Our <span className="text-[#CBB27A]">Proven Track Record</span>
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
              onLoad={() => setIsScriptLoaded(true)}
              onError={() => setIsScriptLoaded(true)} // Still show widget even if script fails
            />
            {/* Loading placeholder */}
            {!isScriptLoaded && (
              <div className="min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block w-8 h-8 border-4 border-[#CBB27A] border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-muted">Loading reviews...</p>
                </div>
              </div>
            )}
            <div
              className={`elfsight-app-4185bb5e-82e5-45bf-92fc-b41420393094 ${!isScriptLoaded ? 'hidden' : ''}`}
              data-elfsight-app-lazy
              style={{ paddingBottom: '2rem' }}
            />
          </>
        )}
      </div>
    </section>
  );
}
