// Footer.tsx
"use client"

import Link from "next/link"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A1E3F] text-white mt-20">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-2xl font-bold tracking-wide text-white">
            Surosh <span className="text-[#FFD700]">Travels</span>
          </h2>
          <p className="text-[#C0C4C9] text-sm leading-relaxed max-w-xs">
            Delivering seamless travel experiences — your trusted partner for
            Hajj, Umrah, and global adventures.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-white border-b border-[#FFD700]/30 pb-1 w-fit">
            Quick Links
          </h3>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link
              href="/"
              className="hover:text-[#FFD700] transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-[#FFD700] transition-all duration-200"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#FFD700] transition-all duration-200"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FFD700] transition-all duration-200"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Social Media & Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-white border-b border-[#FFD700]/30 pb-1 w-fit">
            Connect With Us
          </h3>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full bg-white/10 hover:bg-[#FFD700] hover:text-[#0A1E3F] transition-all duration-300"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-full bg-white/10 hover:bg-[#FFD700] hover:text-[#0A1E3F] transition-all duration-300"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white/10 hover:bg-[#FFD700] hover:text-[#0A1E3F] transition-all duration-300"
            >
              <FaInstagram size={14} />
            </a>
          </div>

          <div className="pt-3 text-sm text-[#C0C4C9]">
            <p className="mb-1">📍 Lagos, Nigeria</p>
            <p>✉️ info@surosh-travels.com</p>
          </div>

          <p className="text-[#C0C4C9] text-xs mt-auto pt-4 border-t border-white/10">
            © {currentYear} <span className="text-white">Surosh Travels Ltd.</span>  
            <br />All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 text-center text-[#C0C4C9] text-sm tracking-wide bg-[#0A1E3F]/90 backdrop-blur-sm">
        Designed with <span className="text-[#FFD700]">❤️</span> for travelers —{" "}
        <span className="text-[#4DA6FF] font-medium">Surosh Travels</span>
      </div>
    </footer>
  )
}
