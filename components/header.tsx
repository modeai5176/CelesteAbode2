"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // All pages: transparent when at top, glassmorphism when scrolled
  const shouldShowGlassmorphism = isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldShowGlassmorphism
          ? "glass-metallic header-scrolled"
          : "header-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-24">
          {/* Mobile Layout */}
          <div className="flex items-center justify-between w-full md:hidden">
            {/* Logo - Left on Mobile */}
            <Link href="/" className="group flex-shrink-0">
              <Image
                src="/logoceleste.png"
                alt="Celeste Abode Logo"
                width={110}
                height={110}
                className=""
                priority
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`p-2 transition-colors ${
                isScrolled 
                  ? "text-white hover:text-white/80" 
                  : "text-black hover:text-black/80"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-center w-full">
            {/* Left Menu Group */}
            <nav className="flex items-center space-x-8 mr-16">
              <Link href="/" className="nav-link">
                HOME
              </Link>
              <Link href="/philosophy" className="nav-link">
                PHILOSOPHY
              </Link>
              <Link href="/services" className="nav-link">
                SERVICES
              </Link>
            </nav>

            {/* Center Logo */}
            <Link href="/" className="group flex-shrink-0">
              <Image
                src="/logoceleste.png"
                alt="Celeste Abode Logo"
                width={110}
                height={110}
                className=""
                priority
              />
            </Link>

            {/* Right Menu Group */}
            <nav className="flex items-center space-x-8 ml-16">
              <Link href="/reviews" className="nav-link">
                REVIEWS
              </Link>
              <Link href="/properties" className="nav-link">
                PROPERTIES
              </Link>
              <Link href="/contact" className="nav-link">
                CONTACT
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0f1112] border border-white/10 rounded-2xl mb-6 overflow-hidden relative z-[9999] mt-4">
            <nav className="py-6">
              <Link
                href="/"
                className="block px-6 py-4 text-white hover:text-[#CBB27A] transition-colors duration-300 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/philosophy"
                className="block px-6 py-4 text-white hover:text-[#CBB27A] transition-colors duration-300 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PHILOSOPHY
              </Link>
              <Link
                href="/services"
                className="block px-6 py-4 text-white hover:text-[#CBB27A] transition-colors duration-300 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/reviews"
                className="block px-6 py-4 text-white hover:text-[#CBB27A] transition-colors duration-300 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                REVIEWS
              </Link>
              <Link
                href="/properties"
                className="block px-6 py-4 text-white hover:text-[#CBB27A] transition-colors duration-300 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PROPERTIES
              </Link>
              <Link
                href="/contact"
                className="block px-6 py-4 text-white hover:text-[#CBB27A] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
