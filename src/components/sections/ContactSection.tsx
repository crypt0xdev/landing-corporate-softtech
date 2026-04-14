'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import Button from '@/components/ui/Button';
import { useForm } from '@/hooks/useForm';
import { trackFormSubmission } from '@/utils/analytics';
import { contactFormSchema } from '@/utils/contactValidation';
import type { ContactFormData } from '@/types';

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useForm<ContactFormData>({
      initialValues: {
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      },
      validate: (values) => {
        const result = contactFormSchema.safeParse(values);
        if (result.success) return {};
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        for (const issue of result.error.issues) {
          const field = issue.path[0] as keyof ContactFormData;
          if (field && !fieldErrors[field]) {
            fieldErrors[field] = issue.message;
          }
        }
        return fieldErrors;
      },
      onSubmit: async () => {
        const toastId = toast.loading('Enviando mensaje...');

        try {
          // Simulate API call - Aquí puedes integrar EmailJS, FormSubmit, etc.
          await new Promise((resolve) => setTimeout(resolve, 1500));

          // Track form submission in analytics
          trackFormSubmission('Contact Form');

          toast.success(
            '¡Mensaje enviado con éxito! Te contactaremos pronto.',
            {
              id: toastId,
              duration: 5000,
            },
          );

          setSubmitted(true);

          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        } catch {
          toast.error(
            'Error al enviar el mensaje. Por favor intenta de nuevo.',
            {
              id: toastId,
            },
          );
        }
      },
    });

  return (
    <section id="contact" className="section-padding bg-secondary-50 dark:bg-secondary-900">
      <Container size="md">
        <SectionTitle
          title="Cotiza tu Proyecto"
          subtitle="Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-secondary-800 rounded-2xl shadow-xl p-8 md:p-12"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="mb-4 inline-flex p-4 bg-green-100 dark:bg-green-900/30 rounded-full">
                <CheckCircle size={48} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                ¡Mensaje Enviado!
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Gracias por contactarnos. Te responderemos pronto.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Nombre Completo"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Juan Pérez"
                  required
                />
                <Input
                  label="Empresa"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  error={errors.company}
                  placeholder="Mi Empresa S.A.C."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Correo Electrónico"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="contacto@ejemplo.com"
                  required
                />
                <Input
                  label="Teléfono"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="+51 999 999 999"
                  required
                />
              </div>

              <TextArea
                label="Mensaje del Proyecto"
                name="message"
                value={values.message}
                onChange={handleChange}
                error={errors.message}
                placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."
                rows={6}
                required
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                className={isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Cotización'}
                <Send size={20} />
              </Button>

              <p className="text-sm text-secondary-600 dark:text-secondary-400 text-center">
                Al enviar este formulario, aceptas que nos comuniquemos contigo
                para cotizar tu proyecto.
              </p>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactSection;
