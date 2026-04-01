import Image from "next/image"
import { Reveal } from "./scroll-reveal"

const milestones = [
  { year: "2008", label: "Основание бренда в Италии" },
  { year: "2012", label: "Первые поставки в Россию и СНГ" },
  { year: "2017", label: "Открытие нового производственного центра" },
  { year: "2024", label: "500+ партнёров по всему миру" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-background overflow-hidden">
      {/* Watermark / Filigran - Sol tarafta gorunur */}
      <div className="absolute left-[-15%] md:left-[-5%] top-1/3 pointer-events-none">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-24%20at%201.25.40%20PM-lokwIr95ze8psjYoAtllT6Q6hHS7UD.jpeg"
          alt=""
          width={600}
          height={600}
          className="opacity-[0.06] w-[350px] sm:w-[450px] md:w-[550px] h-auto"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top: image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center mb-16 sm:mb-20">
          {/* Image block */}
          <Reveal direction="left">
            <div className="relative">
              <div className="relative h-72 sm:h-[420px] md:h-[520px] overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Showroom_amat%C3%B6r%C3%A7ekim_3-J0dqLrvacTt5nQJP6SAMabKdF6rbIO.jpg"
                  alt="Romano Botta склад и производство"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative gold border — only on sm+ to avoid overflow on mobile */}
              <div
                className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border-2 -z-10"
                style={{ borderColor: "#C9A96E" }}
              />
              {/* Floating stat card */}
              <div className="absolute bottom-4 sm:-bottom-6 left-4 sm:left-8 bg-[#1a1a1a] p-4 sm:p-5 shadow-xl">
                <p className="text-2xl sm:text-3xl font-bold text-[#C9A96E]" style={{ fontFamily: "Georgia, serif" }}>40+</p>
                <p className="text-xs tracking-widest uppercase text-white/60 mt-1">лет на рынке</p>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal direction="right" delay={100}>
            <div className="flex flex-col gap-5 sm:gap-6 mt-6 lg:mt-0">
              <p className="text-xs tracking-[0.4em] uppercase font-medium text-[#C9A96E]">
                О бренде
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-balance"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Итальянское наследие.
                <br />
                <span className="text-[#C9A96E]">Мировой охват.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Romano Botta — итальянский бренд премиальной мужской одежды с многолетней историей. Мы
                специализируемся на производстве рубашек, костюмов, поло и спортивных костюмов,
                сочетая традиции итальянской портновской школы с современными тенденциями моды.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Наша оптовая программа разработана специально для дистрибьюторов и розничных сетей
                России, Азербайджана, Казахстана, Узбекистана, Туркменистана и других тюркских
                республик.
              </p>

              {/* Values */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 mt-1">
                {[
                  "Турецкое производство ",
                  "Итальянские ткани",
                  "Контроль качества 360°",
                  "Сезонные обновления",
                  "Персональный менеджер",
                ].map((val) => (
                  <div key={val} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#C9A96E]" />
                    <span className="text-sm font-medium">{val}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col xs:flex-row gap-3 mt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-4 text-sm font-semibold tracking-widest uppercase bg-[#1a1a1a] text-white hover:bg-[#C9A96E] hover:text-[#1a1a1a] transition-all duration-200"
                >
                  Стать дистрибьютором
                </a>
                <a
                  href="https://www.romanobotta.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-4 text-sm font-semibold tracking-widest uppercase border border-border hover:border-[#C9A96E] text-foreground hover:text-[#C9A96E] transition-all duration-200"
                >
                  Официальный сайт
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <Reveal>
          <div className="border-t border-border pt-12 sm:pt-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-8 font-medium text-center text-[#C9A96E]">
              История бренда
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex flex-col items-center text-center px-3 sm:px-4 py-5 sm:py-6">
                  {i < milestones.length - 1 && (
                    <div className="absolute top-[2.5rem] left-1/2 w-full h-px bg-[#C9A96E]/30 hidden md:block" />
                  )}
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-[#C9A96E] bg-background z-10 mb-3" />
                  <span className="text-lg sm:text-xl font-bold text-[#C9A96E]" style={{ fontFamily: "Georgia, serif" }}>
                    {m.year}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1 leading-relaxed max-w-[110px]">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Gallery strip */}
        <Reveal delay={100}>
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KP-02-196_03_detay-2lG8WJutiyAHT8Dg5nbxoUOvBnJQhy.jpg", alt: "Коллекция рубашек" },
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Takim%20Elbise-Ceket%202-wQzfCY4nJNDvQCCDHnivw8GcPo6bnb.jpg", alt: "Коллекция костюмов" },
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ROMANO_BOTTA_0267-COvhHHirItsIMw4ADYQkNazszK23fc.jpg", alt: "Поло и футболки" },
            ].map(({ src, alt }) => (
              <div key={src} className="relative h-32 sm:h-48 md:h-64 overflow-hidden group">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 400px"
                />
                <div className="absolute inset-0 bg-[#1a1a1a]/30 group-hover:bg-[#1a1a1a]/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
