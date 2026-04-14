# Contributing to SoftTech Landing

¡Gracias por tu interés en contribuir a este proyecto! 🎉

## 🚀 Cómo Contribuir

### 1. Fork del Proyecto

```bash
# Fork en GitHub, luego clona tu fork
git clone https://github.com/TU-USUARIO/softtech-landing.git
cd softtech-landing
```

### 2. Crear una Rama

```bash
# Crea una rama para tu feature
git checkout -b feature/nueva-funcionalidad
```

### 3. Realizar Cambios

- Escribe código limpio y legible
- Sigue las convenciones del proyecto
- Añade comentarios cuando sea necesario
- Mantén TypeScript strict mode

### 4. Commit

Usa commits descriptivos siguiendo [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: añadir nueva sección de precios"
git commit -m "fix: corregir responsive en navbar"
git commit -m "docs: actualizar README"
```

**Tipos de commit:**

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bugs
- `docs`: Cambios en documentación
- `style`: Formateo, sin cambios de código
- `refactor`: Refactorización de código
- `test`: Añadir tests
- `chore`: Tareas de mantenimiento

### 5. Push y Pull Request

```bash
git push origin feature/nueva-funcionalidad
```

Luego crea un Pull Request en GitHub.

## 📋 Guías de Estilo

### TypeScript

```typescript
// ✅ BIEN - Nombres descriptivos, types claros
interface UserFormData {
  name: string;
  email: string;
}

const handleSubmit = async (data: UserFormData): Promise<void> => {
  // lógica
};

// ❌ MAL - Nombres ambiguos
const x = async (d: any) => {
  // lógica
};
```

### Componentes React

```typescript
// ✅ BIEN - Componente funcional con tipos
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return <button className={`btn-${variant}`} onClick={onClick}>{label}</button>;
};

export default Button;
```

### Nombres de Archivos

- Componentes: `PascalCase.tsx` → `Button.tsx`, `HeroSection.tsx`
- Utilidades: `camelCase.ts` → `validation.ts`, `analytics.ts`
- Hooks: `camelCase.ts` → `useForm.ts`, `useScrollAnimation.ts`

### CSS/Tailwind

```typescript
// ✅ BIEN - Clases organizadas
<div className="flex items-center justify-between px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">

// ❌ MAL - Clases desordenadas
<div className="px-4 shadow-md bg-white hover:shadow-lg flex py-2 rounded-lg items-center transition-shadow justify-between">
```

## 🧪 Testing (Futuro)

```bash
# Cuando se implementen tests
npm run test
npm run test:coverage
```

## 📦 Build

Verifica que tu código compile antes de hacer PR:

```bash
npm run build
npm run lint
```

## 🐛 Reportar Bugs

Usa el [Issue Template](.github/ISSUE_TEMPLATE/bug_report.md) en GitHub.

**Incluye:**

- Descripción clara del bug
- Pasos para reproducir
- Comportamiento esperado vs actual
- Screenshots (si aplica)
- Entorno (navegador, OS, etc.)

## 💡 Sugerir Features

Usa el [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md).

**Incluye:**

- Descripción de la funcionalidad
- Casos de uso
- Mockups o ejemplos (si es posible)

## 📝 Documentación

- Actualiza README.md si cambias funcionalidades
- Documenta nuevas configuraciones
- Añade comentarios JSDoc para funciones complejas

## ✅ Checklist antes del PR

- [ ] El código compila sin errores (`npm run build`)
- [ ] No hay errores de lint (`npm run lint`)
- [ ] Seguí las convenciones de código
- [ ] Actualicé documentación si fue necesario
- [ ] Commits descriptivos con Conventional Commits
- [ ] No incluí información sensible
- [ ] Probé los cambios localmente

## 🤝 Code Review

Cuando envíes un PR:

- Describe claramente los cambios
- Referencia issues relacionados
- Añade screenshots si hay cambios visuales
- Responde a comentarios constructivamente

## 📞 Contacto

Si tienes dudas, abre un Issue en GitHub.

---

¡Gracias por contribuir! 💙
