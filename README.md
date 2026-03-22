# SoftTech Perú - Plataforma Web Corporativa

[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)

Plataforma web corporativa moderna y escalable para SoftTech Perú, empresa líder en desarrollo de soluciones tecnológicas.

## 🎯 Características

- ⚡ **Alto Rendimiento**: Construido con Vite para tiempos de carga óptimos
- 🎨 **Diseño Responsive**: Experiencia perfecta en todos los dispositivos
- 🔒 **Type-Safe**: TypeScript estricto para código robusto
- ♿ **Accesible**: Cumple con estándares WCAG 2.1
- 📊 **Analytics Ready**: Integración preparada con Google Analytics
- 🎭 **Animaciones Fluidas**: Powered by Framer Motion
- 📱 **PWA Ready**: Preparado para Progressive Web App

## 🚀 Stack Tecnológico

| Tecnología    | Versión | Propósito    |
| ------------- | ------- | ------------ |
| React         | 19.2.4  | UI Framework |
| TypeScript    | 5.2.2   | Type Safety  |
| Vite          | 8.0.1   | Build Tool   |
| Tailwind CSS  | 3.4.19  | Styling      |
| Framer Motion | 12.38.0 | Animations   |
| Lucide React  | 0.577.0 | Icons        |

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/softech-peru-landing.git

# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env

# Iniciar servidor de desarrollo
npm run dev
```

## 🛠️ Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo (localhost:5174)
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Ejecutar ESLint
```

## 📂 Arquitectura del Proyecto

```
src/
├── components/
│   ├── layout/      # Componentes de estructura (Navbar, Footer)
│   ├── sections/    # Secciones de página (Hero, Services, etc.)
│   ├── shared/      # Componentes compartidos (SEO, WhatsApp)
│   └── ui/          # Biblioteca de componentes UI reutilizables
├── config/          # Configuraciones centralizadas
├── constants/       # Constantes de aplicación
├── hooks/           # Custom React Hooks
├── pages/           # Páginas de la aplicación
├── styles/          # Estilos globales
├── types/           # Definiciones de TypeScript
└── utils/           # Funciones utilidades
```

## ⚙️ Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:

```env
# Empresa
VITE_COMPANY_NAME=SoftTech Perú
VITE_COMPANY_EMAIL=contacto@softtechperu.com
VITE_COMPANY_PHONE=+51 912 920 569

# WhatsApp
VITE_WHATSAPP_PHONE=51912920569

# Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# SEO
VITE_SITE_URL=https://softtechperu.com
VITE_SITE_TITLE=SoftTech Perú - Desarrollo Web Profesional
```

## 🎨 Personalización

### Colores de Marca

Edita `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... tu paleta
  }
}
```

### Componentes Principales

- **Navbar**: Navegación sticky con scroll detection
- **Hero**: Hero section con animaciones y CTAs
- **Services**: Grid de servicios con hover effects
- **Testimonials**: Sección de testimonios con ratings
- **FAQ**: Acordeón interactivo
- **Contact**: Formulario con validación y toast notifications

## 📱 Características Implementadas

### UI/UX

- ✅ Diseño responsive mobile-first
- ✅ Animaciones de scroll reveal
- ✅ Navegación suave entre secciones
- ✅ Toast notifications
- ✅ Loading states
- ✅ Error handling

### SEO & Performance

- ✅ Meta tags optimizados
- ✅ Open Graph tags
- ✅ Optimización de imágenes
- ✅ Code splitting
- ✅ Lazy loading preparado

### Funcionalidades

- ✅ WhatsApp integration
- ✅ Formulario de contacto con validación
- ✅ Analytics tracking preparado
- ✅ Scroll to top button
- ✅ FAQ interactivo

## 🚀 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Crypt0xDev/softtech-landing)

El proyecto incluye un archivo `vercel.json` configurado con:
- ✅ Headers de seguridad (CSP, X-Frame-Options, etc.)
- ✅ Cache optimization para assets
- ✅ SPA rewrites configuradas
- ✅ Variables de entorno preparadas

**Deploy manual:**
```bash
npm install -g vercel
vercel
```

**Deploy automático:**
Conecta tu repositorio desde [vercel.com/new](https://vercel.com/new) para deploys automáticos en cada push.

### Netlify

```bash
npm run build
# Arrastra la carpeta 'dist' a Netlify
```

### Configuración de Build

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x o superior
- **Framework**: Vite (auto-detectado)

## 📊 Performance

- **Lighthouse Score**: >90 en todas las métricas
- **Bundle Size**: ~350KB (optimizado)
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s

## 🔒 Seguridad

- TypeScript strict mode habilitado
- Variables de entorno protegidas
- Validación de formularios server-ready
- CSP headers preparadas

## 📄 Licencia

© 2026 SoftTech Perú. Todos los derechos reservados.

## 🤝 Contacto

- **Email**: contacto@softtechperu.com
- **Teléfono**: +51 912 920 569
- **Website**: https://softtechperu.com

---

**Desarrollado con 💙 por el equipo de SoftTech Perú**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Crypt0xDev/softtech-landing)
