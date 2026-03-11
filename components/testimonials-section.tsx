"use client"

import { useState } from "react"
import { Reveal } from "./scroll-reveal"

const testimonials = [
  {
    name: "Алексей Петров",
    role: "Владелец сети магазинов",
    city: "Москва, Россия",
    content:
      "Сотрудничаем с Romano Botta уже 4 года. Качество рубашек на голову выше конкурентов в том же ценовом сегменте. Клиенты возвращаются снова и снова именно за этим брендом.",
    initials: "АП",
    flag: "🇷🇺",
  },
  {
    name: "Рустам Каримов",
    role: "Дистрибьютор",
    city: "Ташкент, Узбекистан",
    content:
      "Начал работу с минимальной партии. Сейчас Romano Botta — основа нашего ассортимента. Логистика чёткая, документы приходят вовремя, менеджер всегда на связи.",
    initials: "РК",
    flag: "🇺🇿",
  },
  {
    name: "Эльнур Гасанов",
    role: "Оптовый покупатель",
    city: "Баку, Азербайджан",
    content:
      "Рубашки Romano Botta идеально подходят для нашего рынка. Итальянский дизайн, качественный хлопок и конкурентная оптовая цена. Очень доволен партнёрством.",
    initials: "ЭГ",
    flag: "🇦🇿",
  },
  {
    name: "Дамир Сейткали",
    role: "Розничная сеть",
    city: "Алматы, Казахстан",
    content:
      "Поставки стабильные, ассортимент широкий. Особенно нравится, что каждый сезон появляются новые модели. Рекомендую Romano Botta всем коллегам-оптовикам.",
    initials: "ДС",
    flag: "🇰🇿",
  },
]

export function TestimonialsSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs tracking-[0.4em] uppercase mb-3 font-medium text-[#C9A96E]">
              Отзывы партнёров
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-white text-balance"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Нам доверяют
              <br />
              <span className="text-[#C9A96E]">по всему СНГ</span>
            </h2>
          </div>
        </Reveal>

        {/* Featured testimonial */}
        <Reveal delay={100}>
          <div
            className="relative p-6 sm:p-8 md:p-12 border mb-6 sm:mb-8"
            style={{ borderColor: "rgba(201,169,110,0.3)", backgroundColor: "rgba(255,255,255,0.03)" }}
          >
            <div className="text-5xl sm:text-6xl font-bold leading-none mb-4 sm:mb-6 text-[#C9A96E]" style={{ fontFamily: "Georgia, serif" }}>
              "
            </div>
            <p className="text-white/85 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-3xl">
              {testimonials[active].content}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-[#1a1a1a] shrink-0"
                  style={{ backgroundColor: "#C9A96E" }}
                >
                  {testimonials[active].initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">{testimonials[active].name}</div>
                  <div className="text-xs sm:text-sm text-white/50">
                    {testimonials[active].role} · {testimonials[active].city}
                  </div>
                </div>
              </div>
              {/* Dots nav */}
              <div className="flex gap-2 self-end sm:self-auto">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Отзыв ${i + 1}`}
                    className="w-2 h-2 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: active === i ? "#C9A96E" : "rgba(201,169,110,0.3)",
                      transform: active === i ? "scale(1.4)" : "scale(1)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mini cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60} direction="up">
              <button
                onClick={() => setActive(i)}
                className="w-full text-left p-3 sm:p-4 border transition-all duration-200"
                style={{
                  borderColor: active === i ? "#C9A96E" : "rgba(201,169,110,0.15)",
                  backgroundColor: active === i ? "rgba(201,169,110,0.08)" : "rgba(255,255,255,0.02)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold text-[#1a1a1a] shrink-0"
                    style={{ backgroundColor: active === i ? "#C9A96E" : "rgba(201,169,110,0.4)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white leading-tight">{t.name}</div>
                    <div className="text-xs text-white/40 leading-tight">{t.city}</div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* CTA strip */}
        <Reveal delay={200}>
          <div className="mt-10 sm:mt-14 text-center">
            <p className="text-white/50 text-sm mb-5">
              Присоединяйтесь к сотням успешных партнёров Romano Botta
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 text-sm font-semibold tracking-widest uppercase border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#1a1a1a] transition-all duration-200"
            >
              Оставить заявку
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
