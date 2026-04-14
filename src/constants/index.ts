import { env } from '@/config/env';

export const COMPANY_INFO = {
  name: env.companyName,
  address: env.companyAddress,
  email: env.companyEmail,
  phone: env.companyPhone,
  coverage: env.companyCoverage,
} as const;

export const SOCIAL_LINKS = {
  facebook: env.socialFacebook,
  linkedin: env.socialLinkedin,
  twitter: env.socialTwitter,
  instagram: env.socialInstagram,
} as const;

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio', key: 'home' },
  { label: 'Servicios', href: '#services', key: 'services' },
  { label: 'Nosotros', href: '#about', key: 'about' },
  { label: 'Testimonios', href: '#testimonials', key: 'testimonials' },
  { label: 'FAQ', href: '#faq', key: 'faq' },
  { label: 'Contacto', href: '#contact', key: 'contact' },
] as const;

export const SERVICES = [
  {
    iconName: 'Code',
    title: 'Desarrollo Web y Software',
    description:
      'Creamos soluciones web personalizadas y software empresarial a medida para optimizar tus procesos de negocio.',
    features: ['Aplicaciones web', 'Software a medida', 'APIs y microservicios'],
  },
  {
    iconName: 'ShoppingCart',
    title: 'Tiendas Online',
    description:
      'Diseñamos y desarrollamos tiendas online profesionales con sistemas de pago seguros y gestión completa.',
    features: ['E-commerce', 'Pasarelas de pago', 'Gestión de inventario'],
  },
  {
    iconName: 'Globe',
    title: 'Landing Pages',
    description:
      'Landing pages de alta conversión diseñadas para captar leads y aumentar tus ventas.',
    features: ['Diseño profesional', 'SEO optimizado', 'Alta conversión'],
  },
  {
    iconName: 'Server',
    title: 'Instalación y Configuración',
    description:
      'Instalación y configuración de soluciones digitales para tu empresa con soporte completo.',
    features: ['Migración de datos', 'Configuración cloud', 'Optimización'],
  },
  {
    iconName: 'Shield',
    title: 'Seguridad Informática',
    description:
      'Protegemos tu negocio con las mejores prácticas de seguridad digital y protección de datos.',
    features: ['Auditorías de seguridad', 'Protección de datos', 'Backup automático'],
  },
  {
    iconName: 'Wrench',
    title: 'Soporte Técnico',
    description:
      'Soporte técnico especializado 24/7 para mantener tu negocio siempre operativo.',
    features: ['Soporte 24/7', 'Mantenimiento', 'Actualizaciones'],
  },
] as const;
