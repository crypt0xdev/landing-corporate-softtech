# 📚 Documentación Técnica

## 📖 Índice

- [Arquitectura](#arquitectura)
- [Configuración](#configuración)
- [Componentes](#componentes)
- [Hooks](#hooks)
- [Utils](#utils)
- [Estilos](#estilos)
- [Deployment](#deployment)

## 🏗️ Arquitectura

### Estructura del Proyecto

```
src/
├── app/                         # Next.js App Router
│   ├── layout.tsx               # Root layout (providers, metadata, Toaster)
│   └── page.tsx                 # Página raíz → <HomePage />
├── components/
│   ├── layout/                  # Componentes de diseño estructural
│   │   ├── Navbar.tsx           # Navegación principal
│   │   └── Footer.tsx           # Pie de página
│   ├── sections/                # Secciones de la landing
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CoverageSection.tsx
│   │   └── CTASection.tsx
│   ├── shared/                  # Componentes compartidos
│   │   ├── SEO.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── LoadingSpinner.tsx
│   └── ui/                      # Biblioteca de componentes UI
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Input.tsx
│       ├── TextArea.tsx
│       └── SectionTitle.tsx
├── config/
│   └── env.ts                   # Configuración de variables de entorno
├── constants/
│   └── index.ts                 # Constantes de la aplicación
├── contexts/
│   ├── ThemeContext.tsx         # Tema claro/oscuro (SSR-safe)
│   └── LanguageContext.tsx      # Idioma es/en (SSR-safe)
├── hooks/
│   ├── useForm.ts              # Hook para manejo de formularios
│   └── useScrollAnimation.ts   # Hook para animaciones
├── i18n/
│   └── translations.ts         # Traducciones ES / EN
├── pages/
│   └── HomePage.tsx            # Vista principal
├── styles/
│   └── index.css               # Estilos globales
├── types/
│   └── index.ts                # Tipos TypeScript (inferidos de Zod)
└── utils/
    ├── analytics.ts            # Utilidades de analytics
    ├── contactValidation.ts    # Esquema Zod para el formulario
    └── scroll.ts               # Utilidades de scroll
```

## ⚙️ Configuración

### Variables de Entorno

El proyecto utiliza Next.js para gestión de variables de entorno. Todo lo que el navegador necesita ver lleva el prefijo `NEXT_PUBLIC_`.

**Archivo:** `src/config/env.ts`

```typescript
export const env = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Tu Empresa',
  companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'contacto@tuempresa.com',
  // ...más configuraciones con fallbacks
} as const;
```

**Beneficios:**

- ✅ Centralización de configuración
- ✅ Type-safety con TypeScript
- ✅ Valores por defecto seguros
- ✅ Fácil mantenimiento

### Constantes

**Archivo:** `src/constants/index.ts`

```typescript
export const COMPANY_INFO = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Tu Empresa',
  // ...
} as const;

export const NAV_LINKS = [
  { label: 'Inicio', href: '#home' },
  // ...
] as const;
```

## 🧩 Componentes

### Layout Components

#### Navbar

**Ubicación:** `src/components/layout/Navbar.tsx`

**Características:**

- Sticky positioning con detección de scroll
- Menú responsive con hamburger en mobile
- Animaciones con Framer Motion
- Navegación suave entre secciones

**Props:** Ninguna (usa constantes internas)

**Ejemplo de uso:**

```tsx
import Navbar from '@/components/layout/Navbar';

<Navbar />;
```

#### Footer

**Ubicación:** `src/components/layout/Footer.tsx`

**Características:**

- Grid responsive
- Enlaces a redes sociales
- Información de contacto
- Copyright dinámico

### Section Components

#### HeroSection

**Características:**

- Animaciones decorativas con blobs
- CTAs prominentes
- Estadísticas destacadas
- Responsive con breakpoints optimizados

**Personalización:**

```tsx
// Editar título y subtítulo directamente en el componente
<h1>
  Soluciones Digitales Profesionales para{' '}
  <span className="text-primary-600">Empresas en Perú</span>
</h1>
```

#### ContactSection

**Características:**

- Formulario con validación
- Toast notifications
- Loading states
- Estado de éxito animado

**Validaciones:**

- Email válido
- Teléfono peruano (+51)
- Campos requeridos
- Longitud mínima de mensaje

### UI Components

#### Button

**Props:**

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}
```

**Ejemplo:**

```tsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Cotizar Proyecto
  <ArrowRight size={20} />
</Button>
```

#### Container

**Props:**

```typescript
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}
```

**Tamaños:**

- `sm`: max-w-3xl
- `md`: max-w-5xl
- `lg`: max-w-7xl (default)
- `full`: max-w-full

## 🎣 Hooks

### useForm

**Ubicación:** `src/hooks/useForm.ts`

**Características:**

- Manejo de estado de formularios
- Validación automática
- Loading states
- Submit handling

**Uso:**

```typescript
const { values, errors, isSubmitting, handleChange, handleSubmit } =
  useForm<ContactFormData>({
    initialValues: { name: '', email: '' },
    validate: (values) => {
      const errors = {};
      if (!values.email) errors.email = 'Requerido';
      return errors;
    },
    onSubmit: async (values) => {
      await sendEmail(values);
    },
  });
```

### useScrollAnimation

**Ubicación:** `src/hooks/useScrollAnimation.ts`

**Características:**

- Detección de scroll
- Activación de animaciones
- Threshold configurable
- IntersectionObserver

## 🛠️ Utilidades

### Validation (Zod)

**Archivo:** `src/utils/contactValidation.ts`

La validación del formulario utiliza **Zod** como única fuente de verdad.

**Esquema:**

```typescript
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  company: z.string().default(''),
  message: z.string().min(10),
});
```

**Uso en componentes:**

```typescript
const result = contactFormSchema.safeParse(values);
if (!result.success) {
  // result.error.issues contiene los errores por campo
}
```

### Scroll

**Archivo:** `src/utils/scroll.ts`

**Funciones:**

- `scrollToSection(id: string): void`
- `scrollToTop(): void`

**Ejemplo:**

```typescript
import { scrollToSection } from '@/utils/scroll';

<button onClick={() => scrollToSection('#contact')}>
  Contactar
</button>
```

### Analytics

**Archivo:** `src/utils/analytics.ts`

**Funciones:**

- `trackPageView(page: string): void`
- `trackEvent(category: string, action: string, label?: string): void`
- `trackFormSubmission(formName: string): void`
- `trackWhatsAppClick(): void`

## 🎨 Estilos

### Tailwind Configuration

**Archivo:** `tailwind.config.js`

**Tema personalizado:**

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    600: '#2563eb',
    // ...
  },
  secondary: {
    50: '#f8fafc',
    900: '#0f172a',
    // ...
  }
}
```

### Clases Utilitarias

**Archivo:** `src/styles/index.css`

```css
@layer components {
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .section-padding {
    @apply py-16 md:py-24 lg:py-32;
  }
}
```

### Animaciones

**Blob Animation:**

```css
@keyframes blob {
  0%,
  100% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}
```

## 🚀 Deployment

### Build

```bash
npm run build
```

**Output:** `.next/`

**Optimizaciones:**

- Renderizado estático (SSG) y dinámico (SSR)
- Minificación CSS/JS automática
- Tree shaking
- Optimización de assets

### Vercel

El proyecto incluye `vercel.json` con:

```json
{
  "framework": "nextjs",
  "headers": [
    /* Security headers */
  ]
}
```

**Variables de entorno en Vercel:**

1. Settings → Environment Variables
2. Añadir todas las `NEXT_PUBLIC_*` variables
3. Available for: Production, Preview, Development

## 📊 Performance

### Lighthouse Optimizations

- **Lazy loading** de secciones below-the-fold
- **Code splitting** por rutas
- **Optimización de imágenes** (webp, lazy loading)
- **Minificación** de CSS/JS
- **Preload** de assets críticos

### Bundle Analysis

```bash
npm run build
# Revisar .next/analyze o usar @next/bundle-analyzer
```

## 🔒 Seguridad

### Headers de Seguridad (vercel.json)

```json
{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin"
}
```

### Validación de Formularios

Todas las validaciones son:

1. **Client-side** (UX inmediata)
2. **Type-safe** (TypeScript)
3. **Sanitizadas** (prevención XSS)

## 📝 Mantenimiento

### Actualizar Dependencias

```bash
# Ver outdated
npm outdated

# Actualizar
npm update

# Actualizar major versions
npm install package@latest
```

### Testing (Futuro)

Estructura recomendada:

```
src/
└── components/
    └── Button/
        ├── Button.tsx
        ├── Button.test.tsx
        └── index.ts
```

---

**Última actualización:** Marzo 2026
