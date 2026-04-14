'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '@/utils/analytics';
import { env } from '@/config/env';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${env.whatsappPhone}?text=${encodeURIComponent(env.whatsappMessage)}`;

  const handleClick = () => {
    trackWhatsAppClick();
  };

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 hover:shadow-green-500/50 transition-all duration-300 group"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut',
          repeatDelay: 3,
        }}
      >
        <MessageCircle size={28} className="sm:w-8 sm:h-8" />
      </motion.div>

      {/* Tooltip - Hidden on mobile */}
      <motion.span
        className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg"
        initial={{ x: 10 }}
        whileHover={{ x: 0 }}
      >
        ¿Necesitas ayuda? Chatea con nosotros
      </motion.span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
    </motion.a>
  );
};

export default WhatsAppButton;
