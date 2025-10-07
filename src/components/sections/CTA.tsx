// src/components/sections/CTA.tsx
import Link from "next/link"
import { motion } from "framer-motion"

interface CTAProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
  backgroundColor?: string
  textColor?: string
  gradient?: string
}

export default function CTA({
  title = "Ready to Plan Your Journey?",
  subtitle = "Let us help you create unforgettable travel experiences.",
  buttonText = "Contact Us Today",
  buttonHref = "/contact",
  backgroundColor = "bg-white dark:bg-navy",
  textColor = "text-navy dark:text-white",
  gradient = "", // optional gradient overlay
}: CTAProps) {
  return (
    <section
      className={`relative py-20 px-4 sm:px-8 overflow-hidden ${backgroundColor}`}
    >
      {gradient && (
        <div
          className={`absolute inset-0 ${gradient} opacity-30 pointer-events-none`}
          aria-hidden="true"
        />
      )}

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl sm:text-4xl font-bold ${textColor}`}
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
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
            className="inline-block mt-6 bg-gold text-navy font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
