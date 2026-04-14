<div align="center">

# 🚀 Landing Page Corporativa - Template Profesional

### **Template** de plataforma web moderna para impulsar negocios en la era digital

> ⚠️ **NOTA**: Este es un proyecto público con datos de **EJEMPLO**. Reemplaza toda la información con tus datos reales.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-000000.svg?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Crypt0xDev/softtech-landing)

</div>

---

## ✨ Características Destacadas

<table>
<tr>
<td width="50%">

### 🎨 Diseño & UX

- ⚡ **Alto Rendimiento** con Next.js SSR
- 📱 **100% Responsive** - Mobile First
- 🎭 **Animaciones Fluidas** con Framer Motion
- ♿ **Accesibilidad WCAG 2.1**

</td>
<td width="50%">

### 🔧 Tecnología

- 🔒 **TypeScript Strict Mode**
- 📊 **Analytics Ready** (Google Analytics)
- 🌐 **SEO Optimizado**
- 💾 **PWA Ready**

</td>
</tr>
</table>

## ️ Stack Tecnológico

<div align="center">

|    🎯 Tecnología     | 📦 Versión | 💡 Propósito       |
| :------------------: | :--------: | :----------------: |
|     ⚛️ **React**     |  `19.2.4`  | UI Framework       |
|  📘 **TypeScript**   |  `5.9.3`   | Type Safety        |
|   🔲 **Next.js**     |  `16.2.3`  | SSR / App Router   |
| 🎨 **Tailwind CSS**  |  `3.4.19`  | Styling            |
| 🎭 **Framer Motion** | `12.38.0`  | Animations         |
| 🎯 **Lucide React**  | `0.577.0`  | Icon System        |
|   🛡️ **Zod**         |  `4.3.6`   | Form Validation    |

</div>

## 📦 Inicio Rápido

```bash
# 1️⃣ Clonar repositorio
git clone https://github.com/Crypt0xDev/softtech-landing.git
cd softtech-landing

# 2️⃣ Instalar dependencias
npm install

# 3️⃣ Copiar variables de entorno (opcional)
cp .env.example .env

# 4️⃣ Iniciar servidor de desarrollo
npm run dev
```

> 🎉 Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 🎮 Scripts Disponibles

| 📝 Comando        | 🎯 Descripción                              |
| :---------------- | :------------------------------------------ |
| `npm run dev`     | 🚀 Servidor de desarrollo en `localhost:3000` |
| `npm run build`   | 📦 Build optimizado para producción          |
| `npm run start`   | ▶️ Servidor de producción local              |
| `npm run lint`    | 🔍 Verificar código con ESLint               |

## Arquitectura del Proyecto

```
📁 src/
├── 🗂️ app/                # Next.js App Router
│   ├── layout.tsx         # Root layout (providers, metadata)
│   └── page.tsx           # Página raíz → <HomePage />
├── 🧩 components/
│   ├── 🏛️ layout/          # Navbar, Footer
│   ├── 📜 sections/        # Hero, Services, Contact, etc.
│   ├── 🤝 shared/          # SEO, WhatsAppButton, ScrollToTop
│   └── 🎨 ui/              # Button, Card, Input, Container
├── ⚙️ config/              # Configuraciones centralizadas
├── 📊 constants/           # Constantes de aplicación
├── 🌐 contexts/            # ThemeContext, LanguageContext
├── 🪝 hooks/               # useForm, useScrollAnimation
├── 🌍 i18n/                # Traducciones (es/en)
├── 📄 pages/               # HomePage (view principal)
├── 🎨 styles/              # Estilos globales CSS
├── 📝 types/               # Definiciones TypeScript
└── 🛠️ utils/               # analytics, scroll, contactValidation
```

## ⚙️ Variables de Entorno

> **IMPORTANTE - SEGURIDAD**
>
> - Este repositorio es **PÚBLICO** - NUNCA subas datos reales al repositorio
> - Los valores en el código son **SOLO EJEMPLOS**
> - Crea tu archivo `.env` local con tus datos REALES
> - El archivo `.env` está en `.gitignore` y NO se sube a GitHub

> 💡 **Todas las variables son opcionales** - El proyecto funciona con valores por defecto

Crea un archivo `.env` en la raíz del proyecto:

```env
# 🏢 Información de la Empresa (REEMPLAZA CON TUS DATOS REALES)
NEXT_PUBLIC_COMPANY_NAME="Tu Empresa"
NEXT_PUBLIC_COMPANY_EMAIL="contacto@tuempresa.com"
NEXT_PUBLIC_COMPANY_PHONE="+51 999 999 999"
NEXT_PUBLIC_COMPANY_ADDRESS="Av. Principal 123, Lima"

# 📱 WhatsApp (SIN el + al inicio)
NEXT_PUBLIC_WHATSAPP_PHONE="51999999999"
NEXT_PUBLIC_WHATSAPP_MESSAGE="Hola, me interesa cotizar un proyecto"

# 📊 Analytics
NEXT_PUBLIC_GA_TRACKING_ID="G-XXXXXXXXXX"

# 🌐 SEO
NEXT_PUBLIC_SITE_URL="https://tuempresa.com"
NEXT_PUBLIC_SITE_TITLE="Tu Empresa - Desarrollo Web Profesional"
NEXT_PUBLIC_SITE_DESCRIPTION="Empresa líder en desarrollo web y software"
```

<details>
<summary>🔑 Variables Adicionales (Click para expandir)</summary>

```env
# 📧 Servicios de Email
NEXT_PUBLIC_EMAILJS_SERVICE_ID=""
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=""
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=""

# 🔗 Redes Sociales
NEXT_PUBLIC_SOCIAL_FACEBOOK="https://facebook.com/tuempresa"
NEXT_PUBLIC_SOCIAL_LINKEDIN="https://linkedin.com/company/tuempresa"
NEXT_PUBLIC_SOCIAL_TWITTER="https://twitter.com/tuempresa"
NEXT_PUBLIC_SOCIAL_INSTAGRAM="https://instagram.com/tuempresa"

# 🎯 API (Si aplica)
NEXT_PUBLIC_API_URL=""
NEXT_PUBLIC_API_KEY=""
```

</details>

## 🎨 Personalización

<details>
<summary><b>🌨️ Cambiar Colores de Marca</b></summary>

<br>

Edita `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          // ... tu paleta personalizada
          600: '#2563eb',
        },
      },
    },
  },
};
```

</details>

<details>
<summary><b>🧩 Componentes Principales</b></summary>

<br>

| 🎯 Componente    | 📝 Descripción                                   |
| :--------------- | :----------------------------------------------- |
| **Navbar**       | Navegación sticky con detección de scroll         |
| **Hero**         | Sección hero con animaciones y CTAs               |
| **Services**     | Grid de servicios con efectos hover               |
| **Testimonials** | Reseñas de clientes con ratings                   |
| **FAQ**          | Acordeón interactivo colapsable                   |
| **Contact**      | Formulario validado con Zod y notificaciones      |
| **Footer**       | Pie de página con enlaces y redes sociales        |

</details>

## 🚀 Deployment

### 💜 Vercel (Recomendado)

<div align="center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Crypt0xDev/softtech-landing)

</div>

**✨ Características del `vercel.json` incluido:**

- 🔒 Headers de seguridad (CSP, X-Frame-Options, etc.)
- ⚡ Caché optimizada para assets estáticos de Next.js (`/_next/static/`)
- 🔲 Framework configurado como `nextjs` (auto-detect)
- 🌐 Variables de entorno preparadas

<details>
<summary><b>💻 Deploy Manual con Vercel CLI</b></summary>

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

</details>

<details>
<summary><b>💻 Otras Plataformas de Deploy</b></summary>

<br>

### Netlify

```bash
npm run build
# Configura el directorio de publicación en: .next
```

### Configuración Genérica

| 🔑 Parámetro         | ⚙️ Valor                |
| :------------------- | :---------------------- |
| **Build Command**    | `npm run build`         |
| **Output Directory** | `.next`                 |
| **Node Version**     | `18.x` o superior       |
| **Framework**        | Next.js (auto-detectado)|

</details>

## 📊 Performance Métricas

<div align="center">

| 🎯 Métrica                 | 📈 Score |
| :------------------------- | :------: |
| **Lighthouse Score**       |  `>90`   |
| **Bundle Size**            | `~371KB` |
| **First Contentful Paint** | `<1.5s`  |
| **Time to Interactive**    |  `<3s`   |
| **Responsive**             |  `100%`  |

</div>

## 🔒 Seguridad

- ✅ TypeScript strict mode habilitado
- ✅ Variables de entorno protegidas (.env en .gitignore)
- ✅ Validación de formularios implementada
- ✅ CSP headers configurados en Vercel
- ✅ Sin dependencias con vulnerabilidades conocidas
- ⚠️ **Datos de ejemplo** - Reemplazar antes de usar en producción

---

<div align="center">

## 💬 Contacto

📧 **Email:** [contacto@tuempresa.com](mailto:contacto@tuempresa.com)
📞 **Teléfono:** [+51 999 999 999](tel:+51999999999)
🌐 **Website:** [tuempresa.com](https://tuempresa.com)

> ⚠️ Datos de ejemplo - Reemplaza con tu información real

---

### 💙 Template profesional y moderno

© 2026 - Proyecto de código abierto. Personaliza y usa libremente.

> ⚠️ Recuerda: Reemplaza todos los datos de ejemplo con tu información real antes de usar en producción.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Crypt0xDev/softtech-landing)

</div>
