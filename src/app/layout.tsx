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

export const metadata: Metadata = {
  metadataBase: new URL('https://softtech-landing.vercel.app'),
  title: {
    default: 'SoftTech - Desarrollo Web Profesional | Soluciones Digitales en Perú',
    template: '%s | SoftTech',
  },
  description:
    'Empresa líder en desarrollo web, e-commerce, landing pages y soluciones tecnológicas. Desarrollo de software a medida, tiendas online y seguridad informática. Servicio profesional en todo Perú.',
  keywords: [
    'desarrollo web peru',
    'ecommerce peru',
    'landing pages',
    'software empresarial',
    'tienda online',
    'desarrollo web lima',
    'seguridad informatica',
    'marketing digital',
  ],
  authors: [{ name: 'SoftTech' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://softtech-landing.vercel.app',
    siteName: 'SoftTech',
    title: 'SoftTech - Desarrollo Web Profesional | Soluciones Digitales',
    description:
      'Desarrollo web, e-commerce, software empresarial y soluciones digitales profesionales en todo Perú. ¡Transforma tu negocio!',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SoftTech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoftTech - Desarrollo Web Profesional',
    description: 'Desarrollo web, e-commerce y soluciones digitales profesionales en Perú',
    images: ['/og-image.png'],
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  other: {
    'geo.region': 'PE',
    'geo.placename': 'Lima, Perú',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-PE" suppressHydrationWarning>
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
