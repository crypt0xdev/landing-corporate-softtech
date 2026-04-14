import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import '@/styles/index.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const BASE_URL = 'https://landing-corporate-softtech.vercel.app';
const TITLE = 'SoftTech | Desarrollo Web, Software y Seguridad Informática en Perú';
const DESCRIPTION =
  'Creamos sitios web profesionales, tiendas online, software empresarial y soluciones de seguridad informática para empresas en Perú. Cotiza tu proyecto hoy.';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Título ──────────────────────────────────────────────────────────────
  title: {
    default: TITLE,
    template: '%s | SoftTech',
  },

  // ── Descripción y keywords ───────────────────────────────────────────────
  description: DESCRIPTION,
  keywords: [
    'desarrollo web peru',
    'tienda online peru',
    'ecommerce peru',
    'software empresarial peru',
    'landing pages peru',
    'desarrollo web lima',
    'seguridad informatica peru',
    'diseño web profesional',
    'aplicaciones web lima',
    'softtech',
  ],

  // ── Autoría e indexación ─────────────────────────────────────────────────
  authors: [{ name: 'SoftTech', url: BASE_URL }],
  creator: 'SoftTech',
  publisher: 'SoftTech',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },

  // ── Open Graph (Facebook / WhatsApp / LinkedIn) ──────────────────────────
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: BASE_URL,
    siteName: 'SoftTech',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        // Imagen horizontal 1200×630 — Facebook, LinkedIn, Slack
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'SoftTech — Desarrollo Web Profesional en Perú',
        type: 'image/png',
      },
      {
        // Imagen cuadrada 600×600 — WhatsApp, Instagram, Telegram
        url: `${BASE_URL}/og-image-square.png`,
        width: 600,
        height: 600,
        alt: 'SoftTech — Desarrollo Web Profesional en Perú',
        type: 'image/png',
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@softtechperu',
    creator: '@softtechperu',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        alt: 'SoftTech — Desarrollo Web Profesional en Perú',
      },
    ],
  },

  // ── URLs canónicas / alternativas de idioma ──────────────────────────────
  alternates: {
    canonical: BASE_URL,
    languages: {
      'es-PE': BASE_URL,
      'en-US': `${BASE_URL}?lang=en`,
    },
  },

  // ── Íconos y manifest ────────────────────────────────────────────────────
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon-32x32.png',
  },

  // ── Geo / localización + locale alternativa ──────────────────────────────
  other: {
    'geo.region': 'PE-LMA',
    'geo.placename': 'Lima, Perú',
    'geo.position': '-12.046374;-77.042793',
    'ICBM': '-12.046374, -77.042793',
    // locale alternativa para scrapeadores OG que la leen directamente
    'og:locale:alternate': 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SoftTech',
    url: BASE_URL,
    logo: `${BASE_URL}/og-image.png`,
    description: DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Migel Garsu N°793',
      addressLocality: 'Lima',
      addressCountry: 'PE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+51-923-233-333',
      contactType: 'customer service',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: [
      'https://facebook.com/softtechperu',
      'https://linkedin.com/company/softtechperu',
      'https://twitter.com/softtechperu',
      'https://instagram.com/softtechperu',
    ],
    offers: {
      '@type': 'Offer',
      description: 'Desarrollo web, software empresarial y seguridad informática',
      areaServed: { '@type': 'Country', name: 'Perú' },
    },
  };

  return (
    <html lang="es-PE" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: { background: '#363636', color: '#fff' },
                success: {
                  duration: 5000,
                  iconTheme: { primary: '#10b981', secondary: '#fff' },
                },
                error: {
                  iconTheme: { primary: '#ef4444', secondary: '#fff' },
                },
              }}
            />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
