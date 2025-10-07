// src/app/components/sections/ServicePreview.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// Align with Sanity schema
export interface Service {
  _id: string
  title: string
  description: string
  icon?: string // max 2 chars, optional
  image?: { url: string } // optional image object
}

interface ServicePreviewProps {
  services: Service[]
  ctaHref?: string
  ctaText?: string
}

export default function ServicePreview({
  services,
  ctaHref = "/services",
  ctaText = "View All Services",
}: ServicePreviewProps) {
  if (!services || services.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 py-16">
        No services available at the moment.
      </p>
    )
  }

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white text-center mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service) => (
          <motion.div
            key={service._id}
            className="bg-white dark:bg-navy rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between text-center hover:shadow-2xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Image or Icon */}
            {service.image?.url ? (
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={service.image.url}
                  alt={service.title}
                  fill
                  className="object-contain rounded-full"
                  priority
                />
              </div>
            ) : (
              <div className="w-16 h-16 mb-4 bg-gold rounded-full flex items-center justify-center text-navy dark:text-navy font-bold text-xl">
                {service.icon || service.title.slice(0, 2)}
              </div>
            )}

            {/* Title & Description */}
            <h3 className="text-xl font-semibold mb-2 text-navy dark:text-gold">
              {service.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link
          href={ctaHref}
          className="inline-block bg-gold text-navy font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
