import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  ShoppingCart,
  Shield,
  Wrench,
  Globe,
  Server,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import SectionTitle from '@/components/ui/SectionTitle';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Desarrollo Web y Software',
      description:
        'Creamos soluciones web personalizadas y software empresarial a medida para optimizar tus procesos de negocio.',
      features: [
        'Aplicaciones web',
        'Software a medida',
        'APIs y microservicios',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'Tiendas Online',
      description:
        'Diseñamos y desarrollamos tiendas online profesionales con sistemas de pago seguros y gestión completa.',
      features: ['E-commerce', 'Pasarelas de pago', 'Gestión de inventario'],
    },
    {
      icon: Globe,
      title: 'Landing Pages',
      description:
        'Landing pages de alta conversión diseñadas para captar leads y aumentar tus ventas.',
      features: ['Diseño profesional', 'SEO optimizado', 'Alta conversión'],
    },
    {
      icon: Server,
      title: 'Instalación y Configuración',
      description:
        'Instalación y configuración de soluciones digitales para tu empresa con soporte completo.',
      features: ['Migración de datos', 'Configuración cloud', 'Optimización'],
    },
    {
      icon: Shield,
      title: 'Seguridad Informática',
      description:
        'Protegemos tu negocio con las mejores prácticas de seguridad digital y protección de datos.',
      features: [
        'Auditorías de seguridad',
        'Protección de datos',
        'Backup automático',
      ],
    },
    {
      icon: Wrench,
      title: 'Soporte Técnico',
      description:
        'Soporte técnico especializado 24/7 para mantener tu negocio siempre operativo.',
      features: ['Soporte 24/7', 'Mantenimiento', 'Actualizaciones'],
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary-50">
      <Container>
        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Soluciones digitales completas para potenciar tu empresa"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <motion.div
                    className="mb-4 p-3 bg-primary-100 w-fit rounded-lg group-hover:bg-primary-600 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Icon
                      size={32}
                      className="text-primary-600 group-hover:text-white transition-colors duration-300"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-secondary-700 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
