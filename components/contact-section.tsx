"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/905XXXXXXXXX?text=Здравствуйте!%20Хочу%20узнать%20об%20оптовых%20условиях%20Romano%20Botta."
const TELEGRAM_URL = "https://t.me/romanobotta"

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    phone: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* Left: info + messaging buttons */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase mb-3 font-medium text-accent">
                Связаться с нами
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 text-balance"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Начните
                <br />
                сотрудничество
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md text-sm sm:text-base">
                Заполните форму или напишите нам напрямую. Наш менеджер ответит в течение нескольких
                часов и подготовит индивидуальное коммерческое предложение.
              </p>
            </div>

            {/* Messenger CTA cards */}
            <div className="flex flex-col gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 border border-border bg-background hover:border-[#25D366] transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white" style={{ backgroundColor: "#25D366" }}>
                  <WhatsAppIcon />
                </div>
                <div>
                  <div className="font-semibold text-sm tracking-wide group-hover:text-[#25D366] transition-colors">
                    Написать в WhatsApp
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Ответим в течение 30 минут
                  </div>
                </div>
                <div className="ml-auto text-muted-foreground group-hover:text-[#25D366] transition-colors">
                  →
                </div>
              </a>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 border border-border bg-background hover:border-[#229ED9] transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white" style={{ backgroundColor: "#229ED9" }}>
                  <TelegramIcon />
                </div>
                <div>
                  <div className="font-semibold text-sm tracking-wide group-hover:text-[#229ED9] transition-colors">
                    Написать в Telegram
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    @romanobotta — всегда онлайн
                  </div>
                </div>
                <div className="ml-auto text-muted-foreground group-hover:text-[#229ED9] transition-colors">
                  →
                </div>
              </a>

              <a
                href="mailto:wholesale@romanobotta.com"
                className="flex items-center gap-4 p-5 border border-border bg-background hover:border-accent transition-all duration-200 group"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center shrink-0 text-white"
                  style={{ backgroundColor: "#C9A96E" }}
                >
                  <MailIcon />
                </div>
                <div>
                  <div className="font-semibold text-sm tracking-wide group-hover:text-accent transition-colors">
                    wholesale@romanobotta.com
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Для официальных запросов и прайс-листа
                  </div>
                </div>
                <div className="ml-auto text-muted-foreground group-hover:text-accent transition-colors">
                  →
                </div>
              </a>
            </div>

            {/* Working hours */}
            <div className="border-t border-border pt-6">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                Время работы
              </p>
              <p className="text-sm font-medium">Пн–Пт: 09:00 – 18:00 (GMT+3)</p>
              <p className="text-sm text-muted-foreground">Сб: 10:00 – 15:00 · Вс: выходной</p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-background p-8 md:p-10 border border-border">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
                <CheckCircle size={48} className="text-accent" />
                <h3 className="text-2xl font-light" style={{ fontFamily: "Georgia, serif" }}>
                  Заявка отправлена!
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                  Спасибо! Наш менеджер свяжется с вами в ближайшее время для обсуждения условий
                  сотрудничества.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", company: "", country: "", phone: "", email: "", message: "" }) }}
                  className="mt-4 text-xs tracking-widest uppercase text-accent underline underline-offset-4"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <p className="text-xs tracking-[0.4em] uppercase mb-1 font-medium text-accent">
                    Форма заявки
                  </p>
                  <h3 className="text-2xl font-light" style={{ fontFamily: "Georgia, serif" }}>
                    Запросить коммерческое предложение
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs tracking-widest uppercase text-muted-foreground font-medium">
                      Имя *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      className="px-4 py-3 border border-input bg-background text-sm outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-xs tracking-widest uppercase text-muted-foreground font-medium">
                      Компания *
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Название компании"
                      className="px-4 py-3 border border-input bg-background text-sm outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="country" className="text-xs tracking-widest uppercase text-muted-foreground font-medium">
                      Страна *
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      value={form.country}
                      onChange={handleChange}
                      className="px-4 py-3 border border-input bg-background text-sm outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Выберите страну</option>
                      <option value="RU">Россия</option>
                      <option value="AZ">Азербайджан</option>
                      <option value="KZ">Казахстан</option>
                      <option value="UZ">Узбекистан</option>
                      <option value="TM">Туркменистан</option>
                      <option value="KG">Кыргызстан</option>
                      <option value="TJ">Таджикистан</option>
                      <option value="GE">Грузия</option>
                      <option value="OTHER">Другая</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs tracking-widest uppercase text-muted-foreground font-medium">
                      Телефон *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      className="px-4 py-3 border border-input bg-background text-sm outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs tracking-widest uppercase text-muted-foreground font-medium">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="px-4 py-3 border border-input bg-background text-sm outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs tracking-widest uppercase text-muted-foreground font-medium">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Расскажите о вашем бизнесе и интересующем ассортименте..."
                    className="px-4 py-3 border border-input bg-background text-sm outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase bg-primary text-primary-foreground transition-all duration-200 hover:bg-accent disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Отправить заявку
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground">
                  Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
