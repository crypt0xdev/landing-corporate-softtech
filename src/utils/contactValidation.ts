import { z } from 'zod';

// Schema de validación para formulario de contacto
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres')
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      'El nombre solo puede contener letras y espacios',
    ),

  company: z
    .string()
    .max(100, 'El nombre de empresa no puede exceder 100 caracteres')
    .optional()
    .default(''),

  email: z
    .string()
    .min(1, 'El email es requerido')
    .email('Por favor ingresa un email válido')
    .toLowerCase(),

  phone: z
    .string()
    .min(7, 'El teléfono debe tener al menos 7 dígitos')
    .max(15, 'El teléfono no puede exceder 15 dígitos')
    .regex(
      /^[\d\s\-+()]+$/,
      'El teléfono solo puede contener números, espacios, guiones, + y paréntesis',
    ),

  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres'),
});

// Type inference desde el schema
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Validar un campo individual
export const validateField = (
  fieldName: keyof ContactFormData,
  value: string,
): { success: boolean; error?: string } => {
  try {
    const fieldSchema = contactFormSchema.shape[fieldName];
    fieldSchema.parse(value);
    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0]?.message };
    }
    return { success: false, error: 'Error de validación' };
  }
};

// Validar todo el formulario
export const validateContactForm = (
  data: ContactFormData,
): { success: boolean; errors?: Record<string, string> } => {
  try {
    contactFormSchema.parse(data);
    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.issues.forEach((issue) => {
        if (issue.path[0]) {
          errors[issue.path[0].toString()] = issue.message;
        }
      });
      return { success: false, errors };
    }
    return { success: false };
  }
};
