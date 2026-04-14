# 🔒 Guía de Seguridad

## ⚠️ IMPORTANTE - Repositorio Público

Este es un repositorio **PÚBLICO**. Sigue estas prácticas de seguridad:

## ✅ Buenas Prácticas

### 1. Variables de Entorno

**NUNCA subas información privada al repositorio:**

```bash
# ❌ MAL - NO HACER
git add .env
git commit -m "añadiendo configuración"

# ✅ BIEN - El .gitignore ya protege .env
git add .
git commit -m "actualizando código"
```

### 2. Datos de Ejemplo vs Reales

**Archivos con datos de EJEMPLO (seguros para GitHub):**

- `.env.example` - Template público
- `src/constants/index.ts` - Valores por defecto
- `src/config/env.ts` - Fallbacks de ejemplo
- `README.md` - Documentación con ejemplos

**Archivo con TUS DATOS REALES (protegido):**

- `.env` - **NUNCA** subir a GitHub (está en .gitignore)

### 3. Antes de Hacer Commit

Verifica que NO estás subiendo información sensible:

```bash
# Revisar archivos que se subirán
git status

# Ver cambios específicos
git diff

# Si ves información privada, NO hagas commit
```

### 4. Información Sensible

**NUNCA incluyas en el código:**

- ❌ Números de teléfono reales
- ❌ Emails privados
- ❌ Direcciones físicas exactas
- ❌ Claves API o tokens
- ❌ Credenciales de servicios
- ❌ Información bancaria

**Los valores por defecto en el código deben ser:**

- ✅ Datos genéricos de ejemplo
- ✅ Placeholders claramente marcados
- ✅ Información pública o ficticia

## 🛡️ Protección Implementada

### .gitignore

El proyecto ya incluye protección para:

```gitignore
# Variables de entorno
.env
.env.local
.env.*.local
```

### Estructura de Seguridad

```
📁 Proyecto
├── .env                    # ❌ NUNCA en Git (protegido)
├── .env.example           # ✅ Template público
├── .gitignore             # ✅ Protege archivos sensibles
└── src/
    ├── config/env.ts      # ✅ Valores de ejemplo
    └── constants/         # ✅ Datos genéricos
```

## 🔍 Verificación antes de Deploy

### Checklist de Seguridad

- [ ] Revisé que `.env` NO está en el repositorio
- [ ] Los datos en el código son de EJEMPLO
- [ ] Configuré mis variables reales en Vercel/Netlify
- [ ] No hay claves API en el código
- [ ] Los datos de contacto son genéricos o placeholders

### Configurar Variables en Vercel

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega tus variables REALES ahí
4. Nunca las pongas en el código

```bash
# Ejemplo de configuración en Vercel:
NEXT_PUBLIC_COMPANY_EMAIL = tu-email-real@empresa.com
NEXT_PUBLIC_WHATSAPP_PHONE = 51987654321
NEXT_PUBLIC_GA_TRACKING_ID = G-TU-ID-REAL
```

## 🚨 Si Accidentalmente Subiste Datos Privados

1. **NO** hagas más commits
2. Cambia inmediatamente las credenciales comprometidas
3. Considera hacer el repositorio privado temporalmente
4. Limpia el historial de Git (avanzado) o contacta a GitHub Support

## 📝 Resumen

1. ✅ Usa `.env` para datos reales (local)
2. ✅ Mantén datos de ejemplo en el código
3. ✅ Revisa `git status` antes de commit
4. ✅ Configura variables en la plataforma de deploy
5. ❌ Nunca subas información privada a GitHub

---

**Repositorio público = Datos de ejemplo**
**Deploy privado = Tus datos reales**
