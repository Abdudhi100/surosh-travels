// src/components/sections/About.tsx
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface CoreValue {
  title: string
  desc: string
  icon: string
}

interface AboutProps {
  missionTitle?: string
  missionText?: string
  coreValues?: CoreValue[]
  storyTitle?: string
  storyText?: string[]
  heroImageSrc?: string
  storyImageSrc?: string
  ctaTitle?: string
  ctaButtonText?: string
  ctaButtonHref?: string
}

const defaultCoreValues: CoreValue[] = [
  { title: "Trust", desc: "We build confidence with every journey.", icon: "🤝" },
  { title: "Excellence", desc: "Premium service with attention to detail.", icon: "🌟" },
  { title: "Reliability", desc: "Dependable travel guidance and support.", icon: "🛫" },
  { title: "Innovation", desc: "Modern solutions for seamless travel experiences.", icon: "💡" },
]

export default function About({
  missionTitle = "Our Mission",
  missionText = "At Surosh Travels Ltd, we deliver premium travel experiences tailored to your needs. From visa processing and Hajj & Umrah to education abroad and leisure tours, we handle every detail so you can travel with confidence and ease.",
  coreValues = defaultCoreValues,
  storyTitle = "Our Story",
  storyText = [
    "Founded with a vision to redefine travel services, Surosh Travels combines modern technology with personalized attention. Every client’s journey is curated with care, ensuring safety, comfort, and memorable experiences.",
    "Our team is passionate about facilitating spiritual, educational, and leisure travels, leveraging years of experience and trusted partnerships worldwide.",
  ],
  heroImageSrc = "/images/about-hero.jpg",
  storyImageSrc = "/images/about-story.jpg",
  ctaTitle = "Ready to Plan Your Journey?",
  ctaButtonText = "Contact Us Today",
  ctaButtonHref = "/contact",
}: AboutProps) {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-8 max-w-7xl mx-auto font-sans">
      {/* Page Heading */}
      <header className="text-center mb-16 space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-navy dark:text-white"
        >
          About Surosh Travels
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Your trusted partner for seamless travel experiences, spiritual journeys, and global adventures.
        </motion.p>
      </header>

      {/* Hero / Mission Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-navy dark:text-white"
          >
            {missionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            {missionText}
          </motion.p>
          <Link
            href="/contact"
            className="inline-block mt-4 bg-gold text-navy font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          >
            Get in Touch
          </Link>
        </div>
        <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg group">
          <Image
            src={heroImageSrc}
            alt="Travel Illustration"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-20 text-center">
        <h2 className="text-3xl font-semibold text-navy dark:text-white mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map(({ title, desc, icon }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-navy rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-transform transform hover:scale-105 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-navy dark:text-gold">{title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg group">
          <Image
            src={storyImageSrc}
            alt="Our Story"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-navy dark:text-white">{storyTitle}</h2>
          {storyText.map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-navy dark:text-white mb-6">{ctaTitle}</h2>
        <Link
          href={ctaButtonHref}
          className="inline-block bg-gold text-navy font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        >
          {ctaButtonText}
        </Link>
      </section>
    </section>
  )
}
