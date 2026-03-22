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
      color: 'text-blue-600',
    },
    {
      icon: Briefcase,
      number: 1200,
      suffix: '+',
      label: 'Proyectos Completados',
      color: 'text-green-600',
    },
    {
      icon: Award,
      number: 15,
      suffix: '+',
      label: 'Años de Experiencia',
      color: 'text-purple-600',
    },
    {
      icon: TrendingUp,
      number: 98,
      suffix: '%',
      label: 'Satisfacción del Cliente',
      color: 'text-orange-600',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
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
                  className="mb-4 inline-flex p-4 bg-white rounded-full shadow-md group-hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={32} className={stat.color} />
                </motion.div>

                <Counter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2.5}
                  className="text-4xl md:text-5xl font-bold text-secondary-900 mb-2"
                />

                <p className="text-sm md:text-base text-secondary-600 font-medium">
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
