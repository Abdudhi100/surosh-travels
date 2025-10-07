// src/app/services/page.tsx
import { client } from "@/lib/sanity/client"
import { allServicesQuery } from "@/lib/sanity/queries"
import Image from "next/image"
import Link from "next/link"

interface Service {
  _id: string
  title: string
  description: string
  icon?: string
  image?: { url: string }
}

export default async function ServicesPage() {
  // Fetch services from Sanity
  const services: Service[] = await client.fetch(allServicesQuery)

  return (
    <main className="flex flex-col min-h-screen font-sans bg-white dark:bg-navy text-navy dark:text-gold pt-24 px-4 sm:px-8">
      {/* Page Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">
        Our Services
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.length === 0 && (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
            No services available at the moment.
          </p>
        )}

        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white dark:bg-navy rounded-2xl shadow-lg p-6 text-center flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Service Image or Icon */}
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
                {service.icon || service.title[0]}
              </div>
            )}

            {/* Service Title */}
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>

            {/* Service Description */}
            <p className="text-sm sm:text-base mb-4">{service.description}</p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="mt-auto inline-block bg-gold text-navy font-semibold px-5 py-2 rounded-lg shadow hover:shadow-lg transition"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
