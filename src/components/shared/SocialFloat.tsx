'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';

const SocialFloat: React.FC = () => {
  const socialIcons = [
    {
      Icon: Facebook,
      href: SOCIAL_LINKS.facebook,
      label: 'Facebook',
      color: '#1877F2',
    },
    {
      Icon: Linkedin,
      href: SOCIAL_LINKS.linkedin,
      label: 'LinkedIn',
      color: '#0A66C2',
    },
    {
      Icon: Instagram,
      href: SOCIAL_LINKS.instagram,
      label: 'Instagram',
      color: '#E4405F',
    },
    {
      Icon: Twitter,
      href: SOCIAL_LINKS.twitter,
      label: 'Twitter',
      color: '#1DA1F2',
    },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3"
    >
      {socialIcons.map(({ Icon, href, label, color }, index) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label={label}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 1 + index * 0.1,
            type: 'spring',
            stiffness: 200,
          }}
          whileHover={{
            scale: 1.2,
            x: 5,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Fondo con color de marca */}
          <motion.div
            className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"
            style={{ backgroundColor: color }}
          />

          {/* Botón principal */}
          <div
            className="relative p-3 bg-white shadow-lg rounded-full transition-all duration-300 group-hover:shadow-2xl"
            style={{
              boxShadow:
                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { type: 'tween', duration: 0.5 } }}
              transition={{ duration: 0.5 }}
            >
              <Icon
                size={20}
                className="transition-colors duration-300"
                style={{
                  color: color,
                }}
              />
            </motion.div>
          </div>

          {/* Tooltip */}
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-secondary-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none"
            style={{ backgroundColor: color }}
          >
            {label}
            {/* Flecha del tooltip */}
            <span
              className="absolute right-full top-1/2 -translate-y-1/2"
              style={{
                borderWidth: '6px',
                borderStyle: 'solid',
                borderColor: `transparent ${color} transparent transparent`,
              }}
            />
          </motion.span>

          {/* Efecto de pulso */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.a>
      ))}

      {/* Línea decorativa */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="w-px h-16 bg-gradient-to-b from-primary-400 to-transparent mx-auto origin-top"
      />
    </motion.div>
  );
};

export default SocialFloat;
