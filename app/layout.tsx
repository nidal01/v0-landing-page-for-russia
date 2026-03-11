import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Romano Botta — Оптовая торговля мужской одеждой | Россия и СНГ',
  description:
    'Romano Botta — итальянский бренд премиальной мужской одежды. Оптовые поставки рубашек, костюмов, поло и спортивных костюмов в Россию, Азербайджан, Казахстан, Узбекистан.',
  keywords:
    'Romano Botta, оптовая одежда, мужские рубашки, итальянская одежда, оптовая торговля, Россия, СНГ, тюркские республики, Азербайджан, Казахстан',
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body
        className="antialiased"
        style={{
          fontFamily: inter.style.fontFamily,
        }}
      >
        {children}
      </body>
    </html>
  )
}
