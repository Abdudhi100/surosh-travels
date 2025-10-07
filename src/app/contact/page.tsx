// src/app/contact/page.tsx
"use client"

import ContactForm from "@/components/forms/ContactForm"

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start pt-20 px-4 sm:px-8 bg-white dark:bg-navy text-navy dark:text-gold font-sans">
      
      {/* Page Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">
        Contact Us
      </h1>

      {/* Intro Text */}
      <p className="text-center max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        Have questions or need assistance with your travel plans? Fill out the form below and our team will get back to you promptly.
      </p>

      {/* Contact Form */}
      <ContactForm />

      {/* Optional CTA / Info Section */}
      <section className="mt-12 text-center max-w-2xl">
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          Or reach us directly via email at 
          <a 
            href="mailto:info@suroshtravels.com" 
            className="text-gold dark:text-white underline ml-1"
          >
            info@suroshtravels.com
          </a>
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          We are committed to providing prompt and reliable support for all your travel needs.
        </p>
      </section>

    </main>
  )
}
