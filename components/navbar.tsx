"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Коллекции", href: "#collections" },
  { label: "Преимущества", href: "#benefits" },
  { label: "О бренде", href: "#about" },
  { label: "Отзывы", href: "#testimonials" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#1a1a1a]/96 backdrop-blur-md shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/romano-botta-logo-nobg.webp"
            alt="Romano Botta"
            width={160}
            height={56}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.2em] uppercase font-medium text-white/70 hover:text-[#C9A96E] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-xs tracking-widest uppercase font-semibold border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#1a1a1a] transition-all duration-200"
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
        <div className="md:hidden bg-[#1a1a1a] border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm tracking-widest uppercase text-white/75 hover:text-[#C9A96E] py-2 border-b border-white/10 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-5 py-3 text-xs tracking-widest uppercase font-semibold border border-[#C9A96E] text-[#C9A96E] text-center"
            >
              Стать партнёром
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
