import Image from "next/image"
import { Reveal } from "./scroll-reveal"

export function Footer() {
  const WHATSAPP_URL = "https://wa.me/905XXXXXXXXX?text=Здравствуйте!%20Хочу%20узнать%20об%20оптовых%20условиях%20Romano%20Botta."
  const TELEGRAM_URL = "https://t.me/romanobotta"

  return (
    <footer className="bg-[#1a1a1a] border-t border-white/10">
      {/* Top banner CTA */}
      <div className="border-b px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto" style={{ borderColor: "rgba(201,169,110,0.2)" }}>
        <p className="text-white/70 text-sm text-center sm:text-left">
          Готовы обсудить оптовое сотрудничество? Свяжитесь с нами прямо сейчас.
        </p>
        <div className="flex gap-3 shrink-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-white bg-[#25D366] hover:bg-[#1ebe5d] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            WhatsApp
          </a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-white bg-[#229ED9] hover:bg-[#1a8fc4] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
            Telegram
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-2">
            <Image
              src="/images/romano-botta-logo-nobg.webp"
              alt="Romano Botta"
              width={160}
              height={56}
              className="h-12 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              Итальянский бренд премиальной мужской одежды. Оптовые поставки в Россию и страны СНГ.
            </p>
            <a
              href="https://www.romanobotta.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs tracking-widest uppercase underline underline-offset-4 text-[#C9A96E]"
            >
              romanobotta.com
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 font-semibold text-[#C9A96E]">
              Навигация
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Коллекции", href: "#collections" },
                { label: "Преимущества", href: "#benefits" },
                { label: "О бренде", href: "#about" },
                { label: "Отзывы", href: "#testimonials" },
                { label: "Контакты", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/45 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 font-semibold text-[#C9A96E]">
              Контакты
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/45">
              <li>
                <a href="mailto:wholesale@romanobotta.com" className="hover:text-white transition-colors">
                  wholesale@romanobotta.com
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Telegram: @romanobotta
                </a>
              </li>
              <li className="pt-2 text-white/25 text-xs leading-relaxed">
                Пн–Пт: 09:00–18:00 (GMT+3)<br />Сб: 10:00–15:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Romano Botta. Все права защищены.
          </p>
          <p className="text-xs text-white/15">
            Итальянская мужская одежда оптом — Россия и СНГ
          </p>
        </div>
      </div>
    </footer>
  )
}
