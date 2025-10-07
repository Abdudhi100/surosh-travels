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

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const decorVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay, duration: 1, ease: "easeOut" },
  }),
}

export default function Hero({
  title = "Your Journey, Our Priority",
  subtitle = "Experience seamless travel with trust, comfort, and unforgettable adventures.",
  buttonText = "Get Started",
  buttonHref = "/contact",
  backgroundImage = "/images/hero-banner.jpg",
}: HeroProps) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />
      <div className="absolute inset-0 bg-black/30 dark:bg-navy/50 -z-10" />

      {/* Hero Content */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-gold leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/90 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <Link
          href={buttonHref}
          className="mt-8 inline-block bg-gold text-navy font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        >
          {buttonText}
        </Link>
      </motion.div>

      {/* Decorative Gradient Blobs */}
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-gold/40 to-transparent rounded-full blur-3xl"
        custom={0.3}
        initial="hidden"
        animate="visible"
        variants={decorVariants}
      />
      <motion.div
        className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-3xl"
        custom={0.5}
        initial="hidden"
        animate="visible"
        variants={decorVariants}
      />
    </section>
  )
}
