'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { scrollToSection } from '@/utils/scroll';

const CTASection: React.FC = () => {
  return (
    <section className="section-padding bg-secondary-900 text-white relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 -right-10 sm:-right-20 w-64 h-64 sm:w-96 sm:h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-64 h-64 sm:w-96 sm:h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex p-4 bg-primary-600/20 backdrop-blur-sm rounded-full"
          >
            <Rocket size={48} className="text-primary-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            ¿Listo para transformar tu negocio?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto"
          >
            Impulsa tu empresa con soluciones digitales profesionales. Cotiza tu
            proyecto hoy y descubre cómo podemos ayudarte a alcanzar tus
            objetivos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              Solicitar Cotización Gratis
              <ArrowRight size={20} />
            </Button>
            <button
              onClick={() => scrollToSection('#services')}
              className="px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-secondary-900 transition-all duration-300"
            >
              Ver más servicios
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-secondary-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full" />
              <span>Respuesta en 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full" />
              <span>Asesoría gratuita</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
