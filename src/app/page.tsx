//app/page.tsx
"use client"

import { motion, Variants } from "framer-motion"
import Hero from "@/components/sections/Hero"
import ServicePreview from "@/components/sections/ServicesPreview"
import About from "@/components/sections/About"
import CTA from "@/components/sections/CTA"

// Example static services (replace with Sanity data later)
const services = [
  {
    _id: "1",
    title: "Visa Processing",
    description:
      "Fast, reliable visa processing assistance for all major destinations.",
    icon: "🛂",
  },
  {
    _id: "2",
    title: "Hajj & Umrah",
    description:
      "Seamless pilgrimage arrangements — flights, accommodation, and guidance.",
    icon: "🕋",
  },
  {
    _id: "3",
    title: "Education Abroad",
    description:
      "End-to-end study abroad support from admission to visa facilitation.",
    icon: "🎓",
  },
  {
    _id: "4",
    title: "Tours & Excursions",
    description:
      "Custom-tailored vacation packages for memorable global experiences.",
    icon: "🌍",
  },
]

// ✅ Fixed fade variant (typed correctly)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }, // easeOut curve
  },
}

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen font-sans bg-white dark:bg-dark-gray text-dark-gray dark:text-white transition-colors duration-300">
      {/* 🌍 HERO SECTION */}
      <motion.section
        id="hero"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="scroll-mt-20"
      >
        <Hero
          title="Your Journey, Our Priority"
          subtitle="Surosh Travels — offering exceptional Visa, Hajj & Umrah, Education Abroad, and Tourism services."
          buttonText="Get Started Today"
          buttonHref="/contact"
          backgroundImage="/images/hero-banner.jpg"
        />
      </motion.section>

      {/* ✨ Divider */}
      <div className="h-[2px] w-24 bg-gold mx-auto my-12 opacity-40 rounded-full" />

      {/* ✈️ SERVICES SECTION */}
      <motion.section
        id="services"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="scroll-mt-20"
      >
        <ServicePreview
          services={services}
          ctaHref="/services"
          ctaText="View All Services"
        />
      </motion.section>

      {/* ✨ Divider */}
      <div className="h-[2px] w-24 bg-gold mx-auto my-12 opacity-40 rounded-full" />

      {/* 🧭 ABOUT SECTION */}
      <motion.section
        id="about"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="scroll-mt-20"
      >
        <About />
      </motion.section>

      {/* ✨ Divider */}
      <div className="h-[2px] w-24 bg-gold mx-auto my-12 opacity-40 rounded-full" />

      {/* 🌟 CTA SECTION */}
      <motion.section
        id="cta"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="scroll-mt-20"
      >
        <CTA
          variant="dark"
          title="Start Your Next Adventure with Surosh Travels"
          subtitle="From your first inquiry to your safe return — we’re with you every step of the way."
          buttonText="Book a Consultation"
          buttonHref="/contact"
        />
      </motion.section>
    </main>
  )
}
