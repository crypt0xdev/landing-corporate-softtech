# 🚀 Guía de Deployment

## 📋 Pre-Deployment Checklist

### ✅ Código

- [ ] Build compila sin errores (`npm run build`)
- [ ] No hay warnings de TypeScript
- [ ] ESLint pasa sin errores (`npm run lint`)
- [ ] Todas las imágenes están optimizadas
- [ ] No hay console.log en producción

### ✅ Configuración

- [ ] Variables de entorno configuradas
- [ ] Analytics configurado (Google Analytics)
- [ ] Meta tags y SEO optimizados
- [ ] Favicon y assets preparados
- [ ] vercel.json o netlify.toml configurado

### ✅ Contenido

- [ ] Textos revisados (sin typos)
- [ ] Información de contacto actualizada
- [ ] Links de redes sociales funcionan
- [ ] WhatsApp button configurado
- [ ] Formulario de contacto probado

### ✅ Testing

- [ ] Probado en Chrome
- [ ] Probado en Firefox
- [ ] Probado en Safari
- [ ] Probado en mobile (iOS)
- [ ] Probado en mobile (Android)
- [ ] Formularios funcionan
- [ ] Navegación suave funciona

## 🌐 Deployment en Vercel (Recomendado)

### Método 1: Deploy desde GitHub (Automático)

1. **Conectar repositorio**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Add New Project"
   - Importa tu repositorio de GitHub
   - Vercel detecta automáticamente que es Next.js

2. **Configurar Build**

   ```
   Framework Preset: Next.js
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

3. **Variables de Entorno**
   - Settings → Environment Variables
   - Añade todas las variables `NEXT_PUBLIC_*`
   - Aplica a: Production, Preview, Development

   ```
   NEXT_PUBLIC_COMPANY_NAME=Tu Empresa Real
   NEXT_PUBLIC_COMPANY_EMAIL=contacto@tuempresa.com
   NEXT_PUBLIC_COMPANY_PHONE=+51 912345678
   NEXT_PUBLIC_WHATSAPP_PHONE=51912345678
   NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_SITE_URL=https://tudominio.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Espera ~2 minutos
   - ✅ Sitio live en `https://tu-proyecto.vercel.app`

### Método 2: Deploy desde CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Configuración de Dominio Personalizado

1. Settings → Domains
2. Add Domain
3. Ingresa tu dominio: `tuempresa.com`
4. Configura DNS según instrucciones:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

## 🦅 Deployment en Netlify

### Método 1: Conectar desde GitHub

```bash
# Build local para verificar
npm run build

# Luego arrastra la carpeta '.next' a Netlify
# o usa la integración GitHub en https://app.netlify.com
```

### Método 2: GitHub Integration

1. **Conectar repositorio**
   - New site from Git
   - Conecta con GitHub
   - Selecciona tu repositorio

2. **Build Settings**

   ```
   Build command: npm run build
   Publish directory: .next
   ```

3. **Environment Variables**
   - Site settings → Build & deploy → Environment
   - Add variables (igual que Vercel)

4. **Deploy**
   - Netlify auto-deploya en cada push a main

### netlify.toml (Opcional)

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

## ☁️ Deployment en Cloudflare Pages

```bash
# Build
npm run build

# Deploy con Wrangler
npx wrangler pages publish .next
```

### Configuración

```toml
# wrangler.toml
name = "tu-proyecto"
compatibility_date = "2024-01-01"

[build]
command = "npm run build"
directory = ".next"
```

## 🐳 Docker Deployment

### Dockerfile

```dockerfile
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev

EXPOSE 3000
CMD ["npm", "run", "start"]
```

### Build & Run

```bash
# Build image
docker build -t landing-page .

# Run
docker run -p 3000:3000 landing-page
```

## 📊 Post-Deployment

### 1. Verificar Sitio

```bash
# Lighthouse
npm install -g lighthouse
lighthouse https://tudominio.com --view

# O usa PageSpeed Insights:
# https://pagespeed.web.dev/
```

### 2. Verificar Analytics

- Abre Google Analytics
- Verifica que se registren visitas
- Configura conversiones

### 3. Configurar Monitoring

**Vercel:**

- Analytics automático incluido
- Speed Insights habilitados

**External:**

- [Google Analytics](https://analytics.google.com)
- [Hotjar](https://www.hotjar.com) (opcional)
- [Sentry](https://sentry.io) para error tracking

### 4. SEO

```bash
# Verificar robots.txt
curl https://tudominio.com/robots.txt

# Verificar sitemap (si aplica)
curl https://tudominio.com/sitemap.xml

# Submit a Google:
# https://search.google.com/search-console
```

## 🔄 CI/CD

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🐛 Troubleshooting

### Build falla en Vercel

```bash
# Verificar localmente
npm run build

# Ver logs detallados en Vercel
# Deployments → [tu deploy] → Build Logs
```

### Variables de entorno no funcionan

```bash
# Verificar prefijo NEXT_PUBLIC_
✅ NEXT_PUBLIC_COMPANY_NAME
❌ COMPANY_NAME  # no será visible en el cliente

# Verificar que estén en Vercel Dashboard
Settings → Environment Variables

# Redeploy después de añadir variables
Deployments → ⋯ → Redeploy
```

### Rutas 404 en producción

Next.js maneja las rutas automáticamente mediante el App Router. Verifica que `src/app/` tenga los archivos de ruta correctos.

### Performance bajo

```bash
# Analizar bundle
npm run build
# Revisar .next/analyze o añadir @next/bundle-analyzer

# Lazy load componentes pesados
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

## 📈 Optimización

### Code Splitting

```tsx
// Lazy load routes
const HomePage = lazy(() => import('@/pages/HomePage'));
```

### Image Optimization

```bash
# Convertir a WebP
npm install -g sharp-cli
sharp input.png -o output.webp
```

### Caching

Vercel automáticamente cachea assets en `/_next/static/`

Headers en `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 🔐 Security Headers

Ya configurados en `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

## 📝 Rollback

### Vercel

```bash
# CLI
vercel rollback [deployment-url]

# O en Dashboard
Deployments → Previous deployment → Promote to Production
```

### Git

```bash
# Revertir último commit
git revert HEAD
git push

# O revertir a commit específico
git revert <commit-hash>
git push
```

---

**Última actualización:** Marzo 2026
