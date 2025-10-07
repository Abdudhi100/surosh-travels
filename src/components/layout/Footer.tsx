// src/components/layout/Footer.tsx
"use client"

import Link from "next/link"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-bold">Surosh Travels</h2>
          <p className="text-sm text-gray-300">
            Delivering seamless travel experiences. Your journey, our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-white">Quick Links</h3>
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
          <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
        </div>

        {/* Social & CTA */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gold transition-colors">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
              <FaInstagram />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-auto">
            © {currentYear} Surosh Travels Ltd. All rights reserved.
          </p>
        </div>
      </div>

      {/* Optional Bottom Bar */}
      <div className="border-t border-navy/50 mt-8 py-4 text-center text-gray-400 text-sm">
        Designed with ❤️ for travelers
      </div>
    </footer>
  )
}
