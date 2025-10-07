// src/components/sections/About.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface CoreValue {
  title: string
  desc: string
  icon: string
}

const defaultCoreValues: CoreValue[] = [
  { title: "Trust", desc: "We build confidence with every journey.", icon: "🤝" },
  { title: "Excellence", desc: "Premium service with attention to detail.", icon: "🌟" },
  { title: "Reliability", desc: "Dependable travel guidance and support.", icon: "🛫" },
  { title: "Innovation", desc: "Modern solutions for seamless travel experiences.", icon: "💡" },
]

export default function About() {
  return (
    <section className="bg-white text-dark-gray dark:bg-dark-gray dark:text-white font-sans">
      {/* HERO / INTRO */}
      <div className="pt-28 pb-20 px-4 sm:px-8 max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-navy"
        >
          About Surosh Travels
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mt-4"
        >
          Your trusted partner for seamless travel experiences, spiritual journeys, and global adventures.
        </motion.p>
      </div>

      {/* MISSION SECTION */}
      <section className="bg-light-gray py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-semibold text-navy"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-700 leading-relaxed"
            >
              At Surosh Travels Ltd, we deliver premium travel experiences tailored to your needs. From visa processing and Hajj & Umrah to education abroad and leisure tours, we handle every detail so you can travel with confidence and ease.
            </motion.p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-yellow-400 text-navy font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 focus:ring-2 focus:ring-gold"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about-hero.jpg"
              alt="Luxury travel illustration"
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-4 sm:px-8 text-center">
        <h2 className="text-3xl font-semibold text-navy mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {defaultCoreValues.map(({ title, desc, icon }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-navy rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-navy dark:text-gold mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="bg-light-gray py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about-story.jpg"
              alt="Our story"
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
              priority
            />
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-navy">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded with a vision to redefine travel services, Surosh Travels combines modern technology with personalized attention. Every client’s journey is curated with care, ensuring safety, comfort, and memorable experiences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team is passionate about facilitating spiritual, educational, and leisure travels, leveraging years of experience and trusted partnerships worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center bg-navy text-white">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Ready to Plan Your Journey?
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
        >
          Contact Us Today <ArrowRight size={18} />
        </Link>
      </section>
    </section>
  )
}
