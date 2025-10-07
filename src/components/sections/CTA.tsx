// src/components/sections/CTA.tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface CTAProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
  variant?: "light" | "dark"
}

export default function CTA({
  title = "Ready to Plan Your Journey?",
  subtitle = "Let Surosh Travels take care of every detail — from visa to return flight.",
  buttonText = "Book Your Umrah Now",
  buttonHref = "/contact",
  variant = "light",
}: CTAProps) {
  const isDark = variant === "dark"

  return (
    <section
      className={`relative py-24 px-6 sm:px-12 overflow-hidden ${
        isDark ? "bg-navy text-white" : "bg-light-gray text-navy"
      }`}
    >
      {/* Subtle gradient overlay for depth */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A1E3F]/10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className={`text-lg sm:text-xl ${
              isDark ? "text-gray-300" : "text-dark-gray"
            } leading-relaxed max-w-2xl mx-auto`}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href={buttonHref}
            className="inline-block mt-6 bg-sky-blue text-white font-semibold px-10 py-4 rounded-xl shadow-md 
            hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
            border border-transparent hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>

      {/* Decorative bottom wave accent */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-r from-gold/30 via-transparent to-gold/30 blur-xl opacity-60" />
    </section>
  )
}
