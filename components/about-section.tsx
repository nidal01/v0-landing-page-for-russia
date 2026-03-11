import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[480px] md:h-[560px]">
              <Image
                src="/images/wholesale-warehouse.jpg"
                alt="Romano Botta склад и производство"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative gold border */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full border-2 -z-10"
              style={{ borderColor: "#C9A96E" }}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <p className="text-xs tracking-[0.4em] uppercase font-medium text-accent">
              О бренде
            </p>
            <h2
              className="text-4xl md:text-5xl font-light leading-tight text-balance"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Итальянское наследие.
              <br />
              <span className="text-accent">Мировой охват.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Romano Botta — итальянский бренд премиальной мужской одежды с многолетней историей. Мы
              специализируемся на производстве рубашек, костюмов, поло и спортивных костюмов,
              сочетая традиции итальянской портновской школы с современными тенденциями моды.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Наша оптовая программа разработана специально для дистрибьюторов и розничных сетей
              России, Азербайджана, Казахстана, Узбекистана, Туркменистана и других тюркских
              республик. Мы предлагаем конкурентные цены, гибкие условия и полную поддержку на
              всех этапах партнёрства.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                "Итальянское производство",
                "Контроль качества 360°",
                "Сезонные обновления",
                "Персональный менеджер",
              ].map((val) => (
                <div key={val} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#C9A96E" }} />
                  <span className="text-sm font-medium">{val}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-widest uppercase bg-primary text-primary-foreground transition-all duration-200 hover:bg-accent"
              >
                Стать дистрибьютором
              </a>
              <a
                href="https://www.romanobotta.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-widest uppercase border border-border hover:border-accent text-foreground hover:text-accent transition-all duration-200"
              >
                Официальный сайт
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
