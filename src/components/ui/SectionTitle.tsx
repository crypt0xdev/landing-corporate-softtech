'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
}) => {
  const alignment = centered ? 'text-center' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${alignment}`}
    >
      <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl text-secondary-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-secondary-600 dark:text-secondary-300">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
