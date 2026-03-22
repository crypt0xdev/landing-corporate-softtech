import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Users, Award } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Orientados a Resultados',
      description:
        'Nos enfocamos en entregar soluciones que generen impacto real en tu negocio.',
    },
    {
      icon: Users,
      title: 'Equipo Experto',
      description:
        'Profesionales especializados con años de experiencia en tecnología.',
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description:
        'Utilizamos las mejores prácticas y tecnologías del mercado.',
    },
  ];

  const benefits = [
    'Soluciones escalables y modulares',
    'Código limpio y documentado',
    'Soporte continuo y mantenimiento',
    'Metodologías ágiles de desarrollo',
    'Seguridad y privacidad garantizada',
    'Capacitación para tu equipo',
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <Container>
        <SectionTitle
          title={`Sobre ${import.meta.env.VITE_COMPANY_NAME || 'Nuestra Empresa'}`}
          subtitle="Tu socio tecnológico de confianza"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-secondary-700 mb-6">
              En{' '}
              <span className="font-semibold text-primary-600">
                {import.meta.env.VITE_COMPANY_NAME || 'Nuestra Empresa'}
              </span>
              , somos una empresa líder en soluciones digitales, especializada
              en desarrollo de software empresarial, tiendas online, y seguridad
              informática.
            </p>
            <p className="text-lg text-secondary-700 mb-6">
              Nuestro equipo de profesionales altamente capacitados trabaja día
              a día para transformar las ideas de nuestros clientes en
              soluciones tecnológicas innovadoras que impulsan el crecimiento de
              sus negocios.
            </p>
            <p className="text-lg text-secondary-700">
              Utilizamos arquitectura escalable, código limpio y las mejores
              prácticas de la industria para garantizar productos de alta
              calidad que se adaptan al crecimiento de tu empresa.
            </p>
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              ¿Por qué elegirnos?
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={24}
                    className="text-primary-600 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-secondary-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group cursor-default"
              >
                <motion.div
                  className="mb-4 inline-flex p-4 bg-primary-100 rounded-full transition-all duration-300 group-hover:bg-primary-600 group-hover:shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Icon
                    size={32}
                    className="text-primary-600 group-hover:text-white transition-colors duration-300"
                  />
                </motion.div>
                <h4 className="text-xl font-bold text-secondary-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-secondary-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
