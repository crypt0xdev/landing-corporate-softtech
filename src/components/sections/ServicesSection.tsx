'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  ShoppingCart,
  Shield,
  Wrench,
  Globe,
  Server,
  type LucideIcon,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { SERVICES } from '@/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  Code,
  ShoppingCart,
  Shield,
  Wrench,
  Globe,
  Server,
};

const ServicesSection: React.FC = () => {

  return (
    <section
      id="services"
      className="relative overflow-hidden section-padding bg-gradient-to-br from-secondary-50 via-white to-primary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div
        className="absolute rounded-full top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 dark:from-primary-600/10 dark:to-secondary-600/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute rounded-full bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-secondary-400/20 to-primary-400/20 dark:from-secondary-600/10 dark:to-primary-600/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <Container className="relative z-10">
        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Soluciones digitales completas para potenciar tu empresa"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full group"
              >
                <motion.div
                  className="relative h-full p-6 overflow-hidden transition-all duration-300 border glass bg-white/70 dark:bg-secondary-800/70 backdrop-blur-md rounded-2xl border-secondary-200/50 dark:border-secondary-700/50 shadow-smooth hover:shadow-2xl"
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-600/10 dark:to-secondary-600/10 group-hover:opacity-100"
                    initial={false}
                  />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 transition-transform duration-700 -translate-x-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent group-hover:translate-x-full"
                    initial={false}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="relative p-4 mb-5 transition-all duration-300 shadow-md bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 w-fit rounded-xl group-hover:from-primary-600 group-hover:to-secondary-600 dark:group-hover:from-primary-600 dark:group-hover:to-secondary-600"
                    whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0], transition: { type: 'tween', duration: 0.3 } }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    <Icon
                      size={36}
                      className="transition-colors duration-300 text-primary-600 dark:text-primary-400 group-hover:text-white"
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative mb-3 text-2xl font-bold transition-colors duration-300 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {service.title}
                  </h3>
                  <p className="relative mb-5 leading-relaxed text-secondary-600 dark:text-secondary-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="relative space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-center gap-3 text-sm text-secondary-700 dark:text-secondary-400 group/item"
                      >
                        <motion.div
                          className="w-2 h-2 transition-transform duration-200 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 group-hover/item:scale-125"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="transition-colors duration-200 group-hover/item:text-secondary-900 dark:group-hover/item:text-white">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
