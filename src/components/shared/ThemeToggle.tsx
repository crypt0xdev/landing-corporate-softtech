'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-24 right-6 z-40 bg-gradient-to-br from-secondary-800 to-secondary-900 dark:from-primary-500 dark:to-primary-600 text-white p-3.5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 lg:hidden"
      whileHover={{ scale: 1.15, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      aria-label={`${theme === 'light' ? 'Activar' : 'Desactivar'} modo oscuro`}
      title={`Modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      {/* Efecto de brillo */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 360 : 0,
          scale: theme === 'dark' ? 1.1 : 1,
        }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="relative z-10"
      >
        {theme === 'light' ? (
          <Moon size={22} className="drop-shadow-lg" />
        ) : (
          <Sun size={22} className="drop-shadow-lg" />
        )}
      </motion.div>

      {/* Anillo de pulso */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            theme === 'light'
              ? 'rgba(30, 41, 59, 0.3)'
              : 'rgba(59, 130, 246, 0.3)',
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
