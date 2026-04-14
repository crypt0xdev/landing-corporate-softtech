export type Language = 'es' | 'en';

export const translations = {
  es: {
    // Navbar
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      testimonials: 'Testimonios',
      faq: 'FAQ',
      contact: 'Contacto',
      quote: 'Cotizar Proyecto',
    },
    // Hero
    hero: {
      badge: 'Soluciones Digitales Profesionales',
      titlePart1: 'Soluciones Digitales',
      titlePart2: 'Profesionales',
      titlePart3: 'para',
      titleHighlight: 'Empresas en Perú',
      subtitle:
        'Desarrollo web, software empresarial y seguridad informática para',
      subtitleHighlight: 'impulsar tu negocio',
      subtitleEnd: 'en la era digital.',
      ctaPrimary: 'Solicitar Cotización',
      ctaSecondary: 'Ver Servicios',
      stats: {
        projects: 'Proyectos Completados',
        clients: 'Clientes Satisfechos',
        support: 'Soporte Técnico',
      },
    },
    // Services
    services: {
      title: 'Nuestros Servicios',
      subtitle:
        'Soluciones tecnológicas completas diseñadas específicamente para las necesidades de tu empresa',
      readMore: 'Leer más',
    },
    // About
    about: {
      title: 'Sobre Nosotros',
      subtitle: 'Tu socio tecnológico de confianza',
    },
    // Testimonials
    testimonials: {
      title: 'Lo Que Dicen Nuestros Clientes',
      subtitle: 'Historias reales de empresas que transformaron su negocio',
      stats: {
        satisfaction: 'Satisfacción',
        happyClients: 'Clientes Felices',
        successProjects: 'Proyectos Exitosos',
        avgRating: 'Calificación Promedio',
      },
      items: [
        {
          name: 'Carlos Mendoza',
          company: 'Distribuidora Lima SAC',
          role: 'Gerente General',
          content:
            'La empresa transformó completamente nuestro negocio con una tienda online profesional. Las ventas aumentaron un 300% en los primeros 6 meses.',
        },
        {
          name: 'María García',
          company: 'Clínica Dental Sonrisas',
          role: 'Directora',
          content:
            'El sistema de gestión que desarrollaron para nuestra clínica es excepcional. Ahora todo es más eficiente y nuestros pacientes están muy satisfechos.',
        },
        {
          name: 'Jorge Ramos',
          company: 'Constructora Perú',
          role: 'Director de Proyectos',
          content:
            'Profesionales serios y comprometidos. Entregaron nuestro portal web antes del plazo y con calidad superior. Altamente recomendados.',
        },
      ],
    },
    // FAQ
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre nuestros servicios',
      notFound: '¿No encuentras la respuesta que buscas?',
      contactUs: 'Contáctanos directamente →',
      items: [
        {
          question: '¿Cuánto tiempo toma desarrollar un sitio web?',
          answer:
            'El tiempo varía según la complejidad. Una landing page toma 1-2 semanas, mientras que un e-commerce completo puede tomar 4-8 semanas. Te daremos un cronograma detallado en la cotización.',
        },
        {
          question: '¿Ofrecen soporte después de la entrega?',
          answer:
            'Sí, ofrecemos soporte técnico 24/7 y mantenimiento continuo. Todos nuestros proyectos incluyen 3 meses de soporte gratuito post-entrega.',
        },
        {
          question: '¿Trabajan con pequeñas empresas?',
          answer:
            'Absolutamente. Trabajamos con empresas de todos los tamaños, desde startups hasta grandes corporaciones. Adaptamos nuestros servicios a tu presupuesto.',
        },
        {
          question: '¿Qué tecnologías utilizan?',
          answer:
            'Utilizamos tecnologías modernas y probadas como React, Node.js, TypeScript, Tailwind CSS, y más. Elegimos la mejor tecnología para cada proyecto específico.',
        },
        {
          question: '¿Incluyen diseño en el servicio?',
          answer:
            'Sí, nuestro equipo incluye diseñadores UI/UX profesionales. Creamos diseños modernos, responsivos y centrados en la experiencia del usuario.',
        },
        {
          question: '¿Cómo es el proceso de pago?',
          answer:
            'Trabajamos con pagos por hitos: 40% al inicio, 40% a mitad del proyecto, y 20% final. Aceptamos transferencias bancarias y otros métodos de pago.',
        },
      ],
    },
    // Contact
    contact: {
      title: 'Contáctanos',
      subtitle: 'Estamos aquí para ayudarte',
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
    },
    // Footer
    footer: {
      quickLinks: 'Enlaces Rápidos',
      contactInfo: 'Contacto',
      followUs: 'Síguenos',
      rights: 'Todos los derechos reservados',
    },
    // Theme
    theme: {
      light: 'Modo claro',
      dark: 'Modo oscuro',
      toggle: 'Cambiar tema',
    },
    // Language
    language: {
      spanish: 'Español',
      english: 'English',
      select: 'Idioma',
    },
  },
  en: {
    // Navbar
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      contact: 'Contact',
      quote: 'Get Quote',
    },
    // Hero
    hero: {
      badge: 'Professional Digital Solutions',
      titlePart1: 'Digital Solutions',
      titlePart2: 'Professional',
      titlePart3: 'for',
      titleHighlight: 'Companies in Peru',
      subtitle: 'Web development, enterprise software and IT security to',
      subtitleHighlight: 'boost your business',
      subtitleEnd: 'in the digital age.',
      ctaPrimary: 'Request Quote',
      ctaSecondary: 'View Services',
      stats: {
        projects: 'Completed Projects',
        clients: 'Satisfied Clients',
        support: 'Technical Support',
      },
    },
    // Services
    services: {
      title: 'Our Services',
      subtitle:
        'Complete technology solutions designed specifically for your company needs',
      readMore: 'Read more',
    },
    // About
    about: {
      title: 'About Us',
      subtitle: 'Your trusted technology partner',
    },
    // Testimonials
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Real stories from companies that transformed their business',
      stats: {
        satisfaction: 'Satisfaction',
        happyClients: 'Happy Clients',
        successProjects: 'Successful Projects',
        avgRating: 'Average Rating',
      },
      items: [
        {
          name: 'Carlos Mendoza',
          company: 'Lima Distributor LLC',
          role: 'General Manager',
          content:
            'The company completely transformed our business with a professional online store. Sales increased 300% in the first 6 months.',
        },
        {
          name: 'María García',
          company: 'Clínica Dental Sonrisas',
          role: 'Director',
          content:
            'The management system they developed for our clinic is exceptional. Everything is more efficient and our patients are very satisfied.',
        },
        {
          name: 'Jorge Ramos',
          company: 'Constructora Perú',
          role: 'Project Director',
          content:
            'Serious and committed professionals. They delivered our web portal before the deadline and with superior quality. Highly recommended.',
        },
      ],
    },
    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about our services',
      notFound: "Can't find the answer you're looking for?",
      contactUs: 'Contact us directly →',
      items: [
        {
          question: 'How long does it take to develop a website?',
          answer:
            'Time varies based on complexity. A landing page takes 1-2 weeks, while a full e-commerce can take 4-8 weeks. We will provide a detailed timeline in the quote.',
        },
        {
          question: 'Do you offer support after delivery?',
          answer:
            'Yes, we offer 24/7 technical support and ongoing maintenance. All our projects include 3 months of free post-delivery support.',
        },
        {
          question: 'Do you work with small businesses?',
          answer:
            'Absolutely. We work with businesses of all sizes, from startups to large corporations. We adapt our services to your budget.',
        },
        {
          question: 'What technologies do you use?',
          answer:
            'We use modern, proven technologies like React, Node.js, TypeScript, Tailwind CSS, and more. We choose the best technology for each specific project.',
        },
        {
          question: 'Is design included in the service?',
          answer:
            'Yes, our team includes professional UI/UX designers. We create modern, responsive designs centered on the user experience.',
        },
        {
          question: 'How does payment work?',
          answer:
            'We work with milestone payments: 40% upfront, 40% at project midpoint, and 20% at completion. We accept bank transfers and other payment methods.',
        },
      ],
    },
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: "We're here to help",
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
    },
    // Footer
    footer: {
      quickLinks: 'Quick Links',
      contactInfo: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved',
    },
    // Theme
    theme: {
      light: 'Light mode',
      dark: 'Dark mode',
      toggle: 'Toggle theme',
    },
    // Language
    language: {
      spanish: 'Español',
      english: 'English',
      select: 'Language',
    },
  },
} as const;
