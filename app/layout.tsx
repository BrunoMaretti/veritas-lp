import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/Header'
import WhatsAppFloat from '@/components/shared/WhatsAppFloat'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Contabilidade em São Paulo`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'contabilidade São Paulo',
    'escritório contábil Tatuapé',
    'planejamento tributário',
    'abertura de empresa',
    'departamento pessoal',
    'contador online',
    'MEI contabilidade',
    'Veritas Exacta',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Contabilidade em São Paulo`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Escritório de Contabilidade`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Contabilidade em São Paulo`,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
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
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: '+551120593032',
  email: 'contato@veritasexacta.com.br',
  foundingDate: '2015',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Tuiuti, 1161',
    addressLocality: 'Tatuapé',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.5419,
    longitude: -46.5791,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  sameAs: [
    'https://facebook.com/veritasexactaoficial',
    'https://instagram.com/veritasexactaoficial',
    'https://linkedin.com/company/veritas-exacta',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços Contábeis',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contabilidade Empresarial' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Planejamento Tributário' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Departamento Pessoal' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Abertura de Empresas' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
