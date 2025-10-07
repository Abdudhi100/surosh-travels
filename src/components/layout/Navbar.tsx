// Navbar.tsx
"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  // Add shadow + shrink effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        "fixed w-full z-50 transition-all duration-300 backdrop-blur-sm",
        scrolled
          ? "bg-[#0A1E3F]/95 shadow-md py-2"
          : "bg-[#0A1E3F] py-4"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-white hover:text-[#FFD700] transition-all duration-200"
        >
          Surosh <span className="text-[#4DA6FF]">Travels</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "relative text-sm font-medium transition-all duration-200",
                pathname === link.href
                  ? "text-[#FFD700]"
                  : "text-white hover:text-[#FFD700]"
              )}
            >
              {link.name}
              {/* Active underline */}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FFD700] rounded-full"></span>
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-6 bg-[#4DA6FF] text-white font-semibold px-5 py-2 rounded-full border border-[#FFD700]/40 hover:bg-[#FFD700] hover:text-[#0A1E3F] transition-all duration-300"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="md:hidden text-white hover:text-[#FFD700] transition-colors"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={clsx(
          "md:hidden bg-[#0A1E3F] overflow-hidden transition-all duration-500",
          open ? "max-h-80 opacity-100 py-4" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={clsx(
                "block text-white font-medium hover:text-[#FFD700] transition-all duration-200",
                pathname === link.href && "text-[#FFD700]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-[#4DA6FF] text-white font-semibold px-4 py-2 rounded-full border border-[#FFD700]/40 hover:bg-[#FFD700] hover:text-[#0A1E3F] transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  )
}
