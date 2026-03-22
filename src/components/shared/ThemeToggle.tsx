import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-20 left-6 z-40 bg-secondary-800 dark:bg-secondary-200 text-white dark:text-secondary-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
      title={`Modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
