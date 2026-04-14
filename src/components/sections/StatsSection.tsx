'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Award, TrendingUp } from 'lucide-react';
import Container from '@/components/ui/Container';
import Counter from '@/components/shared/Counter';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: '+',
      label: 'Clientes Satisfechos',
      color: 'text-primary-600 dark:text-primary-400',
    },
    {
      icon: Briefcase,
      number: 1200,
      suffix: '+',
      label: 'Proyectos Completados',
      color: 'text-secondary-600 dark:text-secondary-400',
    },
    {
      icon: Award,
      number: 15,
      suffix: '+',
      label: 'Años de Experiencia',
      color: 'text-primary-700 dark:text-primary-300',
    },
    {
      icon: TrendingUp,
      number: 98,
      suffix: '%',
      label: 'Satisfacción del Cliente',
      color: 'text-secondary-700 dark:text-secondary-300',
    },
  ];

  return (
    <section id="stats" className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="mb-4 inline-flex p-4 bg-white dark:bg-secondary-800 rounded-full shadow-md group-hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={32} className={stat.color} />
                </motion.div>

                <Counter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2.5}
                  className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-2"
                />

                <p className="text-sm md:text-base text-secondary-600 dark:text-secondary-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
