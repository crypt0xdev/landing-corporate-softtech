'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
}) => {
  const baseStyles =
    'bg-white dark:bg-secondary-800 rounded-xl shadow-md p-6 border border-secondary-100 dark:border-secondary-700';
  const hoverStyles = hover
    ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
