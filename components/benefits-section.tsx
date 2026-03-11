import { CheckCircle, Globe, Package, TrendingUp, Shield, Clock } from "lucide-react"
import { Reveal } from "./scroll-reveal"

const benefits = [
  {
    icon: <Package size={26} />,
    title: "Широкий ассортимент",
    description:
      "Более 2 000 моделей: рубашки, костюмы, поло, спортивные костюмы. Обновление каждый сезон.",
  },
  {
    icon: <Globe size={26} />,
    title: "Поставки в СНГ",
    description:
      "Отработанная логистика в Россию, Азербайджан, Казахстан, Узбекистан, Туркменистан и другие страны.",
  },
  {
    icon: <TrendingUp size={26} />,
    title: "Выгодные оптовые цены",
    description:
      "Прозрачное ценообразование без скрытых комиссий. Индивидуальные условия для крупных партнёров.",
  },
  {
    icon: <Shield size={26} />,
    title: "Итальянское качество",
    description:
      "Производство строго контролируется на каждом этапе. Сертификаты качества и гарантия на каждую партию.",
  },
  {
    icon: <CheckCircle size={26} />,
    title: "Документация и сертификаты",
    description:
      "Полный пакет: инвойсы, сертификаты соответствия, таможенное оформление — всё включено.",
  },
  {
    icon: <Clock size={26} />,
    title: "Быстрая обработка заказов",
    description:
      "Заявка рассматривается в течение 24 часов. Товары в наличии отправляются за 3–5 рабочих дней.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-3 font-medium text-[#C9A96E]">
              Почему Romano Botta
            </p>
            <h2
              className="text-4xl md:text-5xl font-light mb-4 text-balance"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Ваш надёжный партнёр
              <br />в оптовой торговле
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Мы поставляем премиальную мужскую одежду оптом в Россию и страны СНГ уже более 15 лет.
              Доверие сотен дистрибьюторов — наша лучшая рекомендация.
            </p>
          </div>
        </Reveal>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 70} direction="up">
              <div className="flex flex-col gap-4 p-8 bg-background border border-border hover:border-[#C9A96E] hover:shadow-md transition-all duration-300 group h-full">
                <div className="text-[#C9A96E] group-hover:scale-110 transition-transform duration-200 w-fit">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-semibold tracking-wide">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mid-page CTA strip */}
        <Reveal delay={100}>
          <div className="mt-16 p-8 md:p-12 bg-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-light text-white mb-2" style={{ fontFamily: "Georgia, serif" }}>
                Готовы начать сотрудничество?
              </h3>
              <p className="text-sm text-white/55">
                Свяжитесь с нами прямо сейчас — ответим в течение нескольких минут.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/905XXXXXXXXX?text=Здравствуйте!%20Хочу%20узнать%20об%20оптовых%20условиях%20Romano%20Botta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-widest uppercase text-white bg-[#25D366] hover:bg-[#1ebe5d] transition-colors duration-200"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href="https://t.me/romanobotta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-widest uppercase text-white bg-[#229ED9] hover:bg-[#1a8fc4] transition-colors duration-200"
              >
                <TelegramIcon />
                Telegram
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}
