"use client"

import Image from "next/image"
import { useState } from "react"
import { Reveal } from "./scroll-reveal"

const collections = [
  {
    id: "shirts",
    title: "Рубашки",
    subtitle: "Классика итальянского кроя",
    description:
      "Хлопковые и шёлковые рубашки в широкой цветовой гамме. Премиальный материал, идеальная посадка. Более 300 моделей.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gomlek%202-Sp9e1yxLGxYKMp83FQYQNlQUQqd88p.jpg",
    tag: "Бестселлер",
    count: "300+ моделей",
  },
  {
    id: "suits",
    title: "Костюмы",
    subtitle: "Итальянский силуэт",
    description:
      "Двубортные и однобортные костюмы из высококачественных тканей. Уверенность в каждом движении.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Takim%20Elbise-Ceket%202-wQzfCY4nJNDvQCCDHnivw8GcPo6bnb.jpg",
    tag: "Новинки",
    count: "150+ моделей",
  },
  {
    id: "polo",
    title: "Поло и футболки",
    subtitle: "Элегантная повседневность",
    description:
      "Polo shirts из пике-хлопка, лаконичный дизайн, разнообразие цветов — для любого сезона.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ROMANO_BOTTA_0267-COvhHHirItsIMw4ADYQkNazszK23fc.jpg",
    tag: "",
    count: "200+ моделей",
  },
  {
    id: "tracksuits",
    title: "Спортивные костюмы",
    subtitle: "Luxury sportswear",
    description:
      "Стильные спортивные костюмы Romano Botta. Комфорт люкс-класса для активного образа жизни.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deriD-BBRQzYWOduQ50LI0v98mHh1HgjANAz.jpg",
    tag: "",
    count: "80+ моделей",
  },
]

export function CollectionsSection() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section id="collections" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-3 font-medium text-[#C9A96E]">
              Ассортимент
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 text-balance"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Оптовые коллекции
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
              Полный ассортимент премиальной мужской одежды Romano Botta.
              Актуальные сезонные коллекции всегда в наличии на складе.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {collections.map((item, i) => (
            <Reveal key={item.id} delay={i * 80} direction="up">
              <div
                className="group relative overflow-hidden bg-secondary cursor-pointer"
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                {/* Image */}
                <div className="relative h-60 sm:h-72 md:h-96 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/40 to-transparent" />

                  {/* Tag */}
                  {item.tag && (
                    <span className="absolute top-4 left-4 text-xs tracking-widest uppercase px-3 py-1 font-semibold bg-[#C9A96E] text-[#1a1a1a]">
                      {item.tag}
                    </span>
                  )}

                  {/* Count badge */}
                  <span className="absolute top-4 right-4 text-xs tracking-wider uppercase px-3 py-1 font-medium text-white/70 bg-[#1a1a1a]/60 backdrop-blur-sm">
                    {item.count}
                  </span>
                </div>

                {/* Content — always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-xs tracking-widest uppercase mb-1 text-[#C9A96E]">
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-light text-white mb-2" style={{ fontFamily: "Georgia, serif" }}>
                    {item.title}
                  </h3>
                  {/* Description: always shown on mobile, hover-revealed on desktop */}
                  <p className="text-sm text-white/75 leading-relaxed max-w-sm block md:hidden">
                    {item.description}
                  </p>
                  <p
                    className="hidden md:block text-sm text-white/70 leading-relaxed max-w-sm transition-all duration-400 overflow-hidden"
                    style={{
                      maxHeight: activeId === item.id ? "80px" : "0px",
                      opacity: activeId === item.id ? 1 : 0,
                    }}
                  >
                    {item.description}
                  </p>
                  {/* CTA: always visible on mobile, hover on desktop */}
                  <a
                    href="#contact"
                    className="mt-3 inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#C9A96E] md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300"
                  >
                    Запросить прайс
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={200}>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 text-sm font-semibold tracking-widest uppercase bg-[#1a1a1a] text-white hover:bg-[#C9A96E] hover:text-[#1a1a1a] transition-all duration-200 w-full sm:w-auto"
            >
              Получить полный каталог
            </a>
            <p className="text-sm text-muted-foreground">
              Каталог с ценами — бесплатно после подтверждения заявки
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
