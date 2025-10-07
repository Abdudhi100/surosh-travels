// src/components/sections/Hero.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"

interface HeroProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
  backgroundImage?: string
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function Hero({
  title = "Your Journey, Our Priority",
  subtitle = "Experience seamless travel with trust, comfort, and unforgettable adventures.",
  buttonText = "Plan Your Umrah Now",
  buttonHref = "/contact",
  backgroundImage = "/images/hero-banner.jpg",
}: HeroProps) {
  return (
    <section className="relative w-screen left-[50%] right-[50%] -mx-[50vw] h-[90vh] md:h-screen overflow-hidden bg-[#0A1E3F]">

      {/* ===== Background Image & Gradient Overlay ===== */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Surosh Travels Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_50%] brightness-[0.55] transition-[object-position] duration-700 ease-out will-change-transform"
          style={{ objectPosition: "center center" }}
        />
        {/* Gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0A1E3F]/60 to-[#0A1E3F]/85" />
      </div>

      {/* ===== Hero Content ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]">
            {title}
          </h1>

          <p className="mt-5 text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href={buttonHref}
              className="inline-block bg-accent-sky text-white font-semibold px-10 py-4 rounded-xl shadow-lg
                hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
                border border-transparent hover:border-accent-gold focus:outline-none
                focus:ring-2 focus:ring-accent-gold focus:ring-offset-2"
            >
              {buttonText}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ===== Subtle Floating Glow Effects ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="absolute bottom-10 left-10 w-56 h-56 bg-accent-gold/25 rounded-full blur-[120px] z-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="absolute top-16 right-10 w-64 h-64 bg-accent-sky/20 rounded-full blur-[140px] z-0"
      />
    </section>
  )
}
