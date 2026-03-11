import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Romano Botta — Оптовая торговля мужской одеждой',
  description:
    'Romano Botta — итальянский бренд премиальной мужской одежды. Оптовые поставки рубашек, костюмов, поло и спортивных костюмов в Россию и страны СНГ.',
  keywords: 'Romano Botta, оптовая одежда, мужские рубашки, итальянская одежда, оптовая торговля, Россия, СНГ, тюркские республики',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
