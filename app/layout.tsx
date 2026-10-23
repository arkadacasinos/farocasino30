import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SITE_URL } from '@/lib/site-config'

// Memory requirement: title ~80 chars, description ~200 chars, keywords included
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Faro Casino Официальный Сайт | Фаро Казино Вход и Рабочее Зеркало Онлайн',
  description:
    'Faro Casino официальный сайт игровых автоматов онлайн. Рабочее зеркало фаро казино на сегодня: играть на реальные деньги, бонус 333% + 1111 FS при регистрации, быстрые выплаты и мобильное приложение.',
  keywords: [
    'faro casino',
    'faro casino зеркало',
    'faro casino играть',
    'faro casino официальный',
    'faro casino официальный сайт',
    'faro казино',
    'фаро казино',
    'фаро казино зеркало',
    'фаро казино зеркало рабочее',
    'фаро казино играть',
    'фаро казино онлайн',
    'фаро казино официальный',
    'фаро казино официальный сайт',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Faro Casino',
    title: 'Faro Casino Официальный Сайт | Фаро Казино Вход и Рабочее Зеркало',
    description:
      'Официальный сайт Faro Casino: рабочее зеркало на сегодня, щедрый Welcome Pack 333% + 1 111 FS, лицензионные слоты и быстрый вывод выигрышей.',
    images: [
      {
        url: `${SITE_URL}/art/hero-vault.jpg`,
        width: 1200,
        height: 630,
        alt: 'Faro Casino Welcome Pack 333% + 1111 FS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faro Casino Официальный Сайт | Фаро Казино Зеркало Онлайн',
    description:
      'Играйте в Faro Casino онлайн: рабочее зеркало, моментальный вывод средств и приветственный бонус 333% + 1111 FS.',
    images: [`${SITE_URL}/art/hero-vault.jpg`],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0b0c0f',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Schema.org structured data (Organization + Casino / WebSite)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Faro Casino',
        description: 'Официальный сайт и рабочее зеркало Faro Casino',
        inLanguage: 'ru-RU',
      },
      {
        '@type': 'Casino',
        '@id': `${SITE_URL}/#casino`,
        name: 'Faro Casino',
        alternateName: ['Фаро Казино', 'Faro Casino Online'],
        url: SITE_URL,
        logo: `${SITE_URL}/icon.png`,
        image: `${SITE_URL}/art/hero-vault.jpg`,
        description: 'Лицензированное онлайн-казино с моментальными выплатами и слотами от мировых провайдеров.',
        currenciesAccepted: 'RUB, KZT, USD, EUR, USDT, BTC',
        paymentAccepted: 'Банковские карты, СБП, Криптовалюта, Piastrix',
      },
    ],
  }

  return (
    <html lang="ru" className="bg-[#0b0c0f] dark">
      <head>
        {/* User memory requirement: explicit <head> slot for additional verification / custom meta tags */}
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#0b0c0f] text-[#f4f5f7]">
        {children}
      </body>
    </html>
  )
}
