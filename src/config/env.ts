// Environment Variables Configuration
// Variables de entorno para Next.js — usa NEXT_PUBLIC_* para acceso en cliente

export const env = {
  // Empresa
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME ?? 'SoftTech',
  companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? 'softtech.soport@gmail.com',
  companyPhone: process.env.NEXT_PUBLIC_COMPANY_PHONE ?? '+51 923 233 333',
  companyAddress: process.env.NEXT_PUBLIC_COMPANY_ADDRESS ?? 'Av. Migel Garsu N°793, Lima',
  companyCoverage: process.env.NEXT_PUBLIC_COMPANY_COVERAGE ?? 'Atención en todo Perú – Servicio remoto',

  // WhatsApp
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? '51923233333',
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
    'Hola, me interesa cotizar un proyecto de desarrollo web',

  // Redes Sociales
  socialFacebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? 'https://facebook.com/softtechperu',
  socialLinkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? 'https://linkedin.com/company/softtechperu',
  socialTwitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER ?? 'https://twitter.com/softtechperu',
  socialInstagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? 'https://instagram.com/softtechperu',

  // Analytics
  gaTrackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID ?? '',

  // Formulario
  emailjsServiceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
  emailjsTemplateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
  emailjsPublicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
  formsubmitEmail: process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ?? 'softtech.soport@gmail.com',
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? '',
  apiKey: process.env.NEXT_PUBLIC_API_KEY ?? '',

  // SEO
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landing-corporate-softtech.vercel.app',
  siteTitle:
    process.env.NEXT_PUBLIC_SITE_TITLE ??
    'SoftTech - Desarrollo Web Profesional | Soluciones Digitales',
  siteDescription:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    'Empresa líder en desarrollo web, e-commerce, landing pages y software empresarial en Perú.',
  siteKeywords:
    process.env.NEXT_PUBLIC_SITE_KEYWORDS ??
    'desarrollo web peru, ecommerce peru, landing pages, software empresarial, softtech',

  // Utilidades
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const;
