const testimonials = [
  {
    name: "Алексей Петров",
    role: "Владелец сети магазинов, Москва",
    content:
      "Сотрудничаем с Romano Botta уже 4 года. Качество рубашек на голову выше конкурентов в том же ценовом сегменте. Клиенты возвращаются снова и снова именно за этим брендом.",
    initials: "АП",
  },
  {
    name: "Рустам Каримов",
    role: "Дистрибьютор, Ташкент",
    content:
      "Начал работу с минимальной партии. Сейчас Romano Botta — основа нашего ассортимента. Логистика чёткая, документы приходят вовремя, менеджер всегда на связи.",
    initials: "РК",
  },
  {
    name: "Эльнур Гасанов",
    role: "Оптовый покупатель, Баку",
    content:
      "Рубашки Romano Botta идеально подходят для нашего рынка. Итальянский дизайн, качественный хлопок и конкурентная оптовая цена. Очень доволен партнёрством.",
    initials: "ЭГ",
  },
  {
    name: "Дамир Сейткали",
    role: "Розничная сеть, Алматы",
    content:
      "Поставки стабильные, ассортимент широкий. Особенно нравится, что каждый сезон появляются новые модели. Рекомендую Romano Botta всем коллегам-оптовикам.",
    initials: "ДС",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase mb-3 font-medium" style={{ color: "#C9A96E" }}>
            Отзывы партнёров
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-white text-balance"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Нам доверяют
            <br />
            <span style={{ color: "#C9A96E" }}>по всему СНГ</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 border"
              style={{ borderColor: "rgba(201,169,110,0.25)", backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              {/* Quote mark */}
              <div className="text-5xl font-bold mb-4 leading-none" style={{ color: "#C9A96E", fontFamily: "Georgia, serif" }}>
                "
              </div>
              <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base">
                {t.content}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ backgroundColor: "#C9A96E", color: "#1a1a1a" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 text-center">
          <p className="text-white/60 text-sm mb-5">
            Присоединяйтесь к сотням успешных партнёров Romano Botta
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold tracking-widest uppercase border transition-all duration-200"
            style={{ borderColor: "#C9A96E", color: "#C9A96E" }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C9A96E"
              ;(e.currentTarget as HTMLAnchorElement).style.color = "#1a1a1a"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"
              ;(e.currentTarget as HTMLAnchorElement).style.color = "#C9A96E"
            }}
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  )
}
