"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Коллекции", href: "#collections" },
  { label: "Преимущества", href: "#benefits" },
  { label: "О бренде", href: "#about" },
  { label: "Контакты", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-dark/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="text-2xl font-bold tracking-widest uppercase"
            style={{ fontFamily: "Georgia, serif", color: "#C9A96E" }}
          >
            Romano
          </span>
          <span
            className="text-lg tracking-[0.4em] uppercase"
            style={{ fontFamily: "Georgia, serif", color: "rgba(255,255,255,0.85)" }}
          >
            Botta
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-widest uppercase font-medium transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.75)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-xs tracking-widest uppercase font-semibold border transition-all duration-200"
          style={{ borderColor: "#C9A96E", color: "#C9A96E" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#C9A96E"
            e.currentTarget.style.color = "#1a1a1a"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"
            e.currentTarget.style.color = "#C9A96E"
          }}
        >
          Стать партнёром
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Меню"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm tracking-widest uppercase text-white/75 hover:text-accent py-2 border-b border-white/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-5 py-3 text-xs tracking-widest uppercase font-semibold border border-accent text-accent text-center"
            >
              Стать партнёром
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
