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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Contact Column */}
          <div>
            <h3 className="h4 mb-6 text-[#CBB27A]">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-white group-hover:text-[#CBB27A] transition-colors" />{" "}
                {/* EDIT: icon default white, hover to primary */}
                <span className="text-white group-hover:text-[#CBB27A] transition-colors">
                  {" "}
                  {/* EDIT: contact text default white, hover to primary */}
                  +91 9818735258
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-white group-hover:text-[#CBB27A] transition-colors" />{" "}
                {/* EDIT: icon default white, hover to primary */}
                <span className="text-white group-hover:text-[#CBB27A] transition-colors">
                  {" "}
                  {/* EDIT: contact text default white, hover to primary */}
                  celsteabode@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <MapPin className="w-5 h-5 text-white group-hover:text-[#CBB27A] transition-colors" />{" "}
                {/* EDIT: icon default white, hover to primary */}
                <span className="text-white group-hover:text-[#CBB27A] transition-colors">
                  {" "}
                  {/* EDIT: contact text default white, hover to primary */}
                  Noida, IN
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
                Home{/* EDIT: footer nav default white, hover primary */}
              </Link>
              <Link
                href="/philosophy"
                className="block text-white hover:text-[#CBB27A] transition-colors"
              >
                Philosophy{/* EDIT: footer nav default white, hover primary */}
              </Link>
              <Link
                href="/services"
                className="block text-white hover:text-[#CBB27A] transition-colors"
              >
                Services{/* EDIT: footer nav default white, hover primary */}
              </Link>
              <Link
                href="/properties"
                className="block text-white hover:text-[#CBB27A] transition-colors"
              >
                Properties{/* EDIT: footer nav default white, hover primary */}
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-[#CBB27A] transition-colors"
              >
                Contact{/* EDIT: footer nav default white, hover primary */}
              </Link>
            </div>
          </div>

          {/* Social & Newsletter Column */}
          <div>
            <h3 className="h4 mb-6 text-[#CBB27A]">
              Social & Newsletter
            </h3>
            <div className="space-y-6">
              {/* Social Links */}
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/celesteabode/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 hover:scale-110 transition-all duration-200 group"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:text-[#CBB27A] transition-colors" />{" "}
                  {/* EDIT: social icon default white, hover primary */}
                </Link>
                <Link
                  href="https://wa.me/919910906306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  title="WhatsApp"
                >
                  <Image
                    src="/pngtree-whatsapp-icon-png-image_3584844.jpg"
                    alt="WhatsApp"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain rounded-full"
                  />
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Legal Links */}
        {/* EDIT: adjusted top border to use border-border/40 to better suit the new footer background */}
        <div className="border-t border-white/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-[#CBB27A]">
              © 2024 Celeste Abode Private Limited. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-white hover:text-[#CBB27A] transition-colors"
              >
                Privacy Policy
                {/* EDIT: legal link default white, hover primary */}
              </Link>
              <Link
                href="/terms"
                className="text-white hover:text-[#CBB27A] transition-colors"
              >
                Terms of Service
                {/* EDIT: legal link default white, hover primary */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
