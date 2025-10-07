// src/app/page.tsx
import Link from "next/link";

const services = [
  { title: "Visa Processing", icon: "V" },
  { title: "Hajj & Umrah", icon: "H" },
  { title: "Education Abroad", icon: "E" },
  { title: "Tours & Excursions", icon: "T" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-light-gray dark:bg-dark-gray text-dark-gray dark:text-white transition-colors duration-300">
      
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center bg-cover bg-center py-32 sm:py-48"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Your Journey, Our Priority
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/90 drop-shadow-md">
            Surosh Travels Ltd – Visa, Hajj & Umrah, Education Abroad, Tours
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-sky-blue text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gold hover:text-navy transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto py-20 px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-navy dark:text-white mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map(({ title, icon }) => (
            <div
              key={title}
              className="bg-white dark:bg-navy rounded-xl shadow-lg p-8 text-center flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-16 h-16 mb-4 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-xl drop-shadow-md">
                {icon}
              </div>
              <h3 className="font-semibold text-lg sm:text-xl text-dark-gray dark:text-white">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Blog / CTA Section */}
      <section className="bg-navy text-white py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-md">
            Explore Our Blog
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-silver-gray">
            Stay updated with travel tips, guides, and news curated for you.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-sky-blue text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gold hover:text-navy transition-all duration-300"
          >
            Read Our Blog
          </Link>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="flex-1" />
    </div>
  );
}
