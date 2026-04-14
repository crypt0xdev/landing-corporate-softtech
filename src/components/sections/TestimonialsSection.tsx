'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { useLanguage } from '@/hooks';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  const { title, subtitle, items, stats } = t.testimonials;

  const renderStars = (count: number) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? 'fill-yellow-400 text-yellow-400' : 'text-secondary-300'}
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-secondary-900">
      <Container>
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full relative group hover:shadow-xl transition-shadow duration-300">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary-200 dark:text-primary-900/30 group-hover:text-primary-300 dark:group-hover:text-primary-700 transition-colors">
                  <Quote size={48} />
                </div>

                {/* Rating */}
                <div className="mb-4">{renderStars(5)}</div>

                {/* Content */}
                <p className="text-secondary-700 dark:text-secondary-300 mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-lg flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
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
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {[
            { value: '98%', label: stats.satisfaction },
            { value: '50+', label: stats.happyClients },
            { value: '100+', label: stats.successProjects },
            { value: '5★', label: stats.avgRating },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-secondary-600 dark:text-secondary-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
