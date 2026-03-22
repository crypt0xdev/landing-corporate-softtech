import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Carlos Mendoza',
      company: 'Distribuidora Lima SAC',
      role: 'Gerente General',
      content:
        'La empresa transformó completamente nuestro negocio con una tienda online profesional. Las ventas aumentaron un 300% en los primeros 6 meses.',
      rating: 5,
    },
    {
      id: 2,
      name: 'María García',
      company: 'Clínica Dental Sonrisas',
      role: 'Directora',
      content:
        'El sistema de gestión que desarrollaron para nuestra clínica es excepcional. Ahora todo es más eficiente y nuestros pacientes están muy satisfechos.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Jorge Ramos',
      company: 'Constructora Perú',
      role: 'Director de Proyectos',
      content:
        'Profesionales serios y comprometidos. Entregaron nuestro portal web antes del plazo y con calidad superior. Altamente recomendados.',
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={
              index < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-secondary-300'
            }
          />
        ))}
      </div>
    );
  };

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle
          title="Lo Que Dicen Nuestros Clientes"
          subtitle="Empresas que ya confiaron en nosotros y transformaron su negocio"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary-200">
                  <Quote size={48} />
                </div>

                {/* Rating */}
                <div className="mb-4">{renderStars(testimonial.rating)}</div>

                {/* Content */}
                <p className="text-secondary-700 mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-secondary-600">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-primary-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '98%', label: 'Satisfacción' },
            { value: '50+', label: 'Clientes Felices' },
            { value: '100+', label: 'Proyectos Exitosos' },
            { value: '5★', label: 'Calificación Promedio' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-secondary-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
