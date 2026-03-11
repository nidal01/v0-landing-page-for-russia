import Image from "next/image"

const collections = [
  {
    id: "shirts",
    title: "Рубашки",
    subtitle: "Классика итальянского кроя",
    description:
      "Хлопковые и шёлковые рубашки в широкой цветовой гамме. Премиальный материал, идеальная посадка.",
    image: "/images/shirts-collection.jpg",
    tag: "Бестселлер",
  },
  {
    id: "suits",
    title: "Костюмы",
    subtitle: "Итальянский силуэт",
    description:
      "Двубортные и однобортные костюмы из высококачественных тканей. Уверенность в каждом движении.",
    image: "/images/suits-collection.jpg",
    tag: "Новинки",
  },
  {
    id: "polo",
    title: "Поло и футболки",
    subtitle: "Элегантная повседневность",
    description:
      "Polo shirts из пике-хлопка, лаконичный дизайн, разнообразие цветов — для любого сезона.",
    image: "/images/polo-collection.jpg",
    tag: "",
  },
  {
    id: "tracksuits",
    title: "Спортивные костюмы",
    subtitle: "Luxury sportswear",
    description:
      "Стильные спортивные костюмы Romano Botta. Комфорт люкс-класса для активного образа жизни.",
    image: "/images/tracksuit-collection.jpg",
    tag: "",
  },
]

export function CollectionsSection() {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase mb-3 font-medium text-accent">
            Ассортимент
          </p>
          <h2
            className="text-4xl md:text-5xl font-light mb-4 text-balance"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Оптовые коллекции
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Полный ассортимент премиальной мужской одежды Romano Botta для оптовых партнёров.
            Актуальные сезонные коллекции всегда в наличии.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-secondary cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-72 md:h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />

                {/* Tag */}
                {item.tag && (
                  <span
                    className="absolute top-4 left-4 text-xs tracking-widest uppercase px-3 py-1 font-semibold"
                    style={{ backgroundColor: "#C9A96E", color: "#1a1a1a" }}
                  >
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#C9A96E" }}>
                  {item.subtitle}
                </p>
                <h3 className="text-2xl font-light text-white mb-2" style={{ fontFamily: "Georgia, serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
                <a
                  href="#contact"
                  className="mt-3 inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "#C9A96E" }}
                >
                  Запросить прайс
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-200 bg-primary text-primary-foreground hover:bg-accent hover:text-white"
          >
            Получить полный каталог
          </a>
          <p className="text-sm text-muted-foreground">
            Каталог с ценами — бесплатно, после подтверждения заявки
          </p>
        </div>
      </div>
    </section>
  )
}
