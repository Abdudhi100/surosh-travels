"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export interface Service {
  _id: string
  title: string
  description: string
  icon?: string
  image?: { url: string }
}

interface ServicePreviewProps {
  services: Service[]
  ctaHref?: string
  ctaText?: string
}

export default function ServicePreview({
  services,
  ctaHref = "/services",
  ctaText = "Explore All Services",
}: ServicePreviewProps) {
  if (!services || services.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 py-16">
        No services available at the moment.
      </p>
    )
  }

  return (
    <section className="relative py-24 px-6 sm:px-10 bg-[#F7F8FA] dark:bg-[#0A1E3F] overflow-hidden">
      {/* === Subtle gradient overlay === */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#F7F8FA] dark:from-navy/80 dark:to-navy/95 pointer-events-none" />

      {/* === Section Header === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1E3F] dark:text-white mb-4">
          Our Premium Services
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          From visa facilitation to luxury pilgrimage and global flight bookings — each service embodies comfort, precision, and care.
        </p>
      </motion.div>

      {/* === Services Grid === */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service._id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white dark:bg-[#11284D]/90 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] 
                       border border-transparent hover:border-[#FFD700]/60 transition-all duration-500 ease-out transform hover:-translate-y-2"
          >
            {/* === Image / Icon === */}
            <div className="relative w-24 h-24 mx-auto mb-6">
              {service.image?.url ? (
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md ring-2 ring-[#4DA6FF]/40 group-hover:ring-[#FFD700]/60 transition-all duration-500">
                  <Image
                    src={service.image.url}
                    alt={service.title}
                    fill
                    sizes="96px"
                    className="object-cover object-center"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center w-24 h-24 bg-[#4DA6FF]/10 text-[#0A1E3F] rounded-full font-bold text-2xl border border-[#4DA6FF]/30">
                  {service.icon || service.title.slice(0, 2).toUpperCase()}
                </div>
              )}
            </div>

            {/* === Title === */}
            <h3 className="text-xl font-semibold text-[#0A1E3F] dark:text-[#FFD700] mb-3 group-hover:text-[#4DA6FF] transition-colors">
              {service.title}
            </h3>

            {/* === Description === */}
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              {service.description}
            </p>

            {/* === Subtle hover underline === */}
            <div className="mx-auto w-12 h-[3px] bg-[#4DA6FF]/0 group-hover:bg-[#4DA6FF]/80 rounded-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      {/* === CTA Button === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mt-20"
      >
        <Link
          href={ctaHref}
          className="inline-block bg-[#4DA6FF] text-white font-semibold px-10 py-4 rounded-xl shadow-md 
                     hover:shadow-lg hover:-translate-y-1 transition-all duration-300 
                     border border-transparent hover:border-[#FFD700]/60 focus:outline-none 
                     focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2"
        >
          {ctaText}
        </Link>
      </motion.div>
    </section>
  )
}
