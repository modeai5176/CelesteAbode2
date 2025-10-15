"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export function Footer() {

  return (
    // EDIT: changed footer bg from primary (yellow) to a lighter black hex for a premium dark footer
    <footer className="bg-[#0f1112] text-white">
      {" "}
      {/* EDIT: lighter shade of black to match bottom image */}
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Logo Column */}
          <div className="flex justify-center lg:justify-start">
            <div className="mb-6">
              <Image
                src="/logoceleste.png"
                alt="Celeste Abode Logo"
                width={120}
                height={120}
                className=""
                priority
                loading="eager"
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="h4 mb-6 text-[#CBB27A]">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-white group-hover:text-[#CBB27A] transition-colors" />
                <span className="text-white group-hover:text-[#CBB27A] transition-colors">
                  +91 9818735258
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-white group-hover:text-[#CBB27A] transition-colors" />
                <span className="text-white group-hover:text-[#CBB27A] transition-colors">
                  celesteabode@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <MapPin className="w-5 h-5 text-white group-hover:text-[#CBB27A] transition-colors" />
                <span className="text-white group-hover:text-[#CBB27A] transition-colors">
                  Celeste Abode, 716, Tower A, Ithum, Sec62, Noida.
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="h4 mb-6 text-[#CBB27A]">
              Quick Links
            </h3>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-white hover:text-[#CBB27A] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/philosophy"
                className="block text-white hover:text-[#CBB27A] transition-colors"
              >
                Philosophy
              </Link>
              <Link
                href="/services"
                className="block text-white hover:text-[#CBB27A] transition-colors"
              >
                Services
              </Link>
              <Link
                href="/properties"
                className="block text-white hover:text-[#CBB27A] transition-colors"
              >
                Properties
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-[#CBB27A] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social & Newsletter Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#CBB27A]">
              Social & Newsletter
            </h3>
            <div className="space-y-4">
              {/* Social Links */}
              <div className="flex gap-3">
                <Link
                  href="https://www.instagram.com/celesteabode/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 hover:scale-110 transition-all duration-200 group"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4 text-white group-hover:text-[#CBB27A] transition-colors" />
                </Link>
                <Link
                  href="https://wa.me/919818735258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  title="WhatsApp"
                >
                  <Image
                    src="/pngtree-whatsapp-icon-png-image_3584844.jpg"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain rounded-full"
                  />
                </Link>
              </div>

              {/* Legal Links */}
              <div className="flex flex-col gap-1">
                <Link
                  href="/privacy-policy"
                  className="text-xs text-white hover:text-[#CBB27A] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-xs text-white hover:text-[#CBB27A] transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        {/* EDIT: adjusted top border to use border-border/40 to better suit the new footer background */}
         {/* Copyright and Powered by */}
         <div className="pt-4 mt-6">
           {/* Separator line */}
           <div className="border-t border-gray-600/40 mb-4"></div>
           <div className="flex flex-col items-center gap-1">
             <p className="text-sm text-gray-400">
               © 2024 Celeste Abode Private Limited. All rights reserved.
             </p>
             <p className="text-sm text-gray-400">
               Powered by <span className="text-[#CBB27A] font-medium">ModeAI</span>
             </p>
           </div>
         </div>
      </div>
    </footer>
  );
}
