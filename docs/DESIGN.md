# 🎨 Guía de Diseño

## 🎯 Principios de Diseño

### 1. Mobile First

Todo diseño comienza desde mobile y escala hacia desktop.

### 2. Accesibilidad

- Contraste mínimo WCAG AA (4.5:1)
- Navegación por teclado
- Screen reader friendly
- Tamaños de tap targets (min 44x44px)

### 3. Consistencia

- Espaciado uniforme (Tailwind spacing scale)
- Tipografía consistente
- Interacciones predecibles

## 🎨 Sistema de Colores

### Paleta Principal

```css
/* Primary - Azul */
primary-50:  #eff6ff  /* Backgrounds */
primary-100: #dbeafe  /* Hover states */
primary-200: #bfdbfe
primary-300: #93c5fd
primary-400: #60a5fa
primary-500: #3b82f6
primary-600: #2563eb  /* Main brand */
primary-700: #1d4ed8  /* Hover */
primary-800: #1e40af
primary-900: #1e3a8a
```

```css
/* Secondary - Gris/Negro */
secondary-50:  #f8fafc  /* Backgrounds */
secondary-100: #f1f5f9
secondary-200: #e2e8f0
secondary-300: #cbd5e1
secondary-400: #94a3b8
secondary-500: #64748b
secondary-600: #475569  /* Text secondary */
secondary-700: #334155  /* Text primary */
secondary-800: #1e293b
secondary-900: #0f172a  /* Headings */
```

### Paleta de Utilidad

```css
/* Success */
green-500: #22c55e
green-600: #16a34a

/* Error */
red-500: #ef4444
red-600: #dc2626

/* Warning */
yellow-500: #eab308
yellow-600: #ca8a04

/* Info */
blue-500: #3b82f6
blue-600: #2563eb
```

## ✍️ Tipografía

### Familia de Fuentes

```css
font-sans:
  'Inter',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  sans-serif;
```

### Escala Tipográfica

```
Hero (lg+):    text-6xl/7xl (60px-72px)
H1:            text-4xl/5xl (36px-48px)
H2:            text-3xl/4xl (30px-36px)
H3:            text-2xl/3xl (24px-30px)
H4:            text-xl (20px)
Body Large:    text-lg (18px)
Body:          text-base (16px)
Body Small:    text-sm (14px)
Caption:       text-xs (12px)
```

### Pesos

```
Light:    font-light (300)
Regular:  font-normal (400)
Medium:   font-medium (500)
Semibold: font-semibold (600)
Bold:     font-bold (700)
```

## 🎯 Sistema de Iconos

### Librería

**Lucide React** - Iconos modernos, ligeros y personalizables.

```tsx
import { Icon } from 'lucide-react';
```

### Tamaños Estandarizados

```tsx
// Iconos pequeños - Badges, indicadores inline
<Icon size={16} />  // 16px - Badges, inline text

// Iconos normales - Navegación, botones
<Icon size={20} />  // 20px - Botones, navegación, footer links

// Iconos medianos - Contenido general
<Icon size={24} />  // 24px - Listas, características, contenido

// Iconos grandes - Tarjetas de servicios
<Icon size={32} />  // 32px - Cards de servicios, features principales

// Iconos destacados - Hero sections, headers
<Icon size={48} />  // 48px - Hero icons, secciones destacadas
```

### Ejemplos de Uso

```tsx
// Botón con icono
<Button>
  Cotizar Proyecto
  <ChevronRight size={20} />
</Button>

// Tarjeta de servicio
<div className="p-3 bg-primary-100 rounded-lg">
  <Code size={32} className="text-primary-600" />
</div>

// Lista con checkmarks
<CheckCircle2 size={24} className="text-primary-600" />

// Hero section
<Sparkles size={16} className="text-primary-600" />
```

### Animaciones de Iconos

```tsx
// Icono con hover animado
<motion.div
  className="bg-primary-100 rounded-lg group-hover:bg-primary-600"
  whileHover={{ scale: 1.1, rotate: 5 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  <Icon size={32} className="text-primary-600 group-hover:text-white" />
</motion.div>

// Icono con animación continua
<motion.div
  animate={{ y: [0, -2, 0] }}
  transition={{ repeat: Infinity, duration: 1.5 }}
>
  <ArrowUp size={24} />
</motion.div>
```

### Colores de Iconos

```tsx
// Primary
className = 'text-primary-600'; // Default
className = 'text-primary-400'; // Lighter (sobre fondos oscuros)
className = 'text-primary-700'; // Darker (hover states)

// Secondary
className = 'text-secondary-600'; // Contenido secundario
className = 'text-secondary-700'; // Contenido principal

// Estados
className = 'text-green-600'; // Success
className = 'text-red-600'; // Error
className = 'text-yellow-600'; // Warning

// Sobre fondos de color
className = 'text-white'; // Sobre primary/secondary oscuro
className = 'text-primary-200'; // Sobre gradientes
```

## 📏 Espaciado

### Sistema de Spacing

Basado en múltiplos de 4px:

```
0:   0
1:   4px
2:   8px
3:   12px
4:   16px
5:   20px
6:   24px
8:   32px
10:  40px
12:  48px
16:  64px
20:  80px
24:  96px
32:  128px
```

### Aplicación

```tsx
// Padding interno de componentes
<div className="p-4">       {/* 16px todos los lados */}
<div className="px-6 py-4"> {/* 24px horizontal, 16px vertical */}

// Margins entre elementos
<div className="mb-8">      {/* 32px abajo */}
<div className="space-y-4"> {/* 16px entre children */}
```

## 📐 Layout & Grid

### Containers

```tsx
// Ancho máximo centrado
max-w-7xl mx-auto    // 1280px max (default)
max-w-5xl mx-auto    // 1024px max
max-w-3xl mx-auto    // 768px max

// Padding horizontal responsive
px-4 sm:px-6 lg:px-8
```

### Grid System

```tsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Items */}
</div>
```

### Breakpoints

```
sm:  640px   (Mobile landscape, small tablets)
md:  768px   (Tablets)
lg:  1024px  (Desktop)
xl:  1280px  (Large desktop)
2xl: 1536px  (Extra large)
```

## 🎭 Componentes UI

### Buttons

```tsx
// Primary
<button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">

// Secondary
<button className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg">

// Outline
<button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg">
```

**Tamaños:**

- Small: `px-4 py-2 text-sm`
- Medium: `px-6 py-3 text-base`
- Large: `px-8 py-4 text-lg`

### Cards

```tsx
<div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
  {/* Content */}
</div>
```

### Inputs

```tsx
<input className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 transition-colors" />
```

## 🌊 Sombras

```css
shadow-sm:   0 1px 2px 0 rgba(0, 0, 0, 0.05)
shadow:      0 1px 3px 0 rgba(0, 0, 0, 0.1)
shadow-md:   0 4px 6px -1px rgba(0, 0, 0, 0.1)
shadow-lg:   0 10px 15px -3px rgba(0, 0, 0, 0.1)
shadow-xl:   0 20px 25px -5px rgba(0, 0, 0, 0.1)
shadow-2xl:  0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

## 🎬 Animaciones

### Transitions

```tsx
// Hover transitions
transition-all duration-300

// Specific properties
transition-colors duration-200
transition-transform duration-300
transition-shadow duration-200
```

### Framer Motion

```tsx
// Fade in + slide
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## 🎯 Iconografía

**Biblioteca:** Lucide React

**Tamaños:**

- Small: `size={16}`
- Medium: `size={20}` (default)
- Large: `size={24}`
- XLarge: `size={32}`

**Uso:**

```tsx
import { Mail, Phone, MapPin } from 'lucide-react';

<Mail size={20} className="text-primary-600" />;
```

## 📱 Responsive Design

### Mobile (< 768px)

```tsx
- Stack todo verticalmente
- Padding: px-4
- Font sizes más pequeños
- Full width buttons
- Hamburger menu
```

### Tablet (768px - 1024px)

```tsx
- Grid de 2 columnas
- Padding: px-6
- Tamaños normales
- Sidebar si aplica
```

### Desktop (> 1024px)

```tsx
- Grid de 3-4 columnas
- Padding: px-8
- Max widths aplicados
- Navegación horizontal
```

## ♿ Accesibilidad

### Contraste de Colores

```
✅ WCAG AA Compliant:
- Text sobre white: text-secondary-700 o más oscuro
- White text: bg-primary-600 o más oscuro

✅ Interactive elements:
- Min contrast ratio: 4.5:1
```

### Focus States

```tsx
// Siempre incluir
focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
```

### Alt Text

```tsx
// Imágenes decorativas
<img src="..." alt="" />

// Imágenes informativas
<img src="..." alt="Descripción detallada" />
```

## 📝 Mejores Prácticas

### 1. Usar Clases Utilitarias

```tsx
// ✅ BIEN
<div className="flex items-center justify-between p-4 bg-white rounded-lg">

// ❌ MAL - Evitar CSS inline
<div style={{ display: 'flex', padding: '16px' }}>
```

### 2. Responsive Mobile-First

```tsx
// ✅ BIEN - Mobile primero, desktop después
<div className="text-base md:text-lg lg:text-xl">

// ❌ MAL - Desktop primero
<div className="text-xl md:text-lg sm:text-base">
```

### 3. Consistencia en Spacing

```tsx
// ✅ BIEN - Usar scale de Tailwind
<div className="mb-4 p-6 space-y-8">

// ❌ MAL - Valores arbitrarios
<div className="mb-[17px] p-[23px]">
```

### 4. Semantic HTML

```tsx
// ✅ BIEN
<button onClick={handleClick}>Click</button>
<nav><ul><li>...</li></ul></nav>

// ❌ MAL
<div onClick={handleClick}>Click</div>
<div className="nav">...</div>
```

---

**Última actualización:** Marzo 2026
