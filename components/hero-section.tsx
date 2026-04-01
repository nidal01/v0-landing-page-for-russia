import Image from "next/image"

const WHATSAPP_URL = "https://wa.me/905050666305?text=Здравствуйте!%20Я%20хочу%20узнать%20об%20оптовых%20условиях%20Romano%20Botta."
const TELEGRAM_URL = "https://t.me/+905050666305"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1a1a]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Showroom_amat%C3%B6r%C3%A7ekim_2-ZoaOt58xsZHFXzoBFXOnAFDqaXy8YK.jpg"
          alt="Romano Botta коллекция"
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/65 to-[#1a1a1a]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 w-full">
        <div className="max-w-2xl">
          {/* Logo mark */}
          <div className="mb-6 sm:mb-8">
            <Image
              src="/images/romano-botta-logo-nobg.webp"
              alt="Romano Botta"
              width={180}
              height={64}
              className="h-12 sm:h-16 w-auto object-contain brightness-0 invert"
            />
          </div>

          {/* Pre-heading */}
          <p className="text-xs tracking-[0.35em] sm:tracking-[0.45em] uppercase mb-4 sm:mb-5 font-medium text-[#C9A96E]">
            Итальянский бренд · Оптовая торговля
          </p>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-light leading-[1.1] sm:leading-[1.08] mb-5 sm:mb-6 text-balance"
            style={{ fontFamily: "Georgia, serif", color: "rgba(255,255,255,0.96)" }}
          >
            Премиальная
            <br />
            мужская одежда
            <br />
            <span style={{ color: "#C9A96E" }}>оптом</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-3 font-light text-white/70">
            Рубашки, костюмы, поло и спортивные костюмы итальянского производства.
            <strong className="font-semibold text-white"> Поставки в Россию и тюркские республики.</strong>
          </p>
          <p className="text-xs sm:text-sm leading-relaxed mb-8 sm:mb-10 text-white/45">
            Минимальный заказ от 50 единиц · Доставка по всему СНГ · Полный пакет документов
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col xs:flex-row gap-3 flex-wrap">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 text-sm font-semibold tracking-widest uppercase bg-[#25D366] hover:bg-[#1ebe5d] text-white transition-colors duration-200"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 text-sm font-semibold tracking-widest uppercase bg-[#229ED9] hover:bg-[#1a8fc4] text-white transition-colors duration-200"
            >
              <TelegramIcon />
              Telegram
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-4 text-sm font-semibold tracking-widest uppercase border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#1a1a1a] transition-all duration-200"
            >
              Запросить каталог
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: "70+", label: "лет на рынке" },
              { value: "2 000+", label: "моделей" },
              { value: "40+", label: "стран поставки" },
              { value: "500+", label: "партнёров" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-[#C9A96E]" style={{ fontFamily: "Georgia, serif" }}>
                  {stat.value}
                </span>
                <span className="text-xs tracking-wider uppercase mt-1 text-white/45">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-[#C9A96E] animate-pulse" />
        <span className="text-xs tracking-[0.3em] uppercase text-[#C9A96E]">Листать</span>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}
