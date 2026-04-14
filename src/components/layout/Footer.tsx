'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS, NAV_LINKS } from '@/constants';
import { scrollToSection } from '@/utils/scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { Icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
    { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600/10 rounded-full filter blur-3xl"></div>

      <div className="container-custom py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-secondary-400 mb-4">
              Soluciones digitales profesionales para impulsar tu negocio en la
              era digital.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin
                  size={20}
                  className="text-primary-400 mt-1 flex-shrink-0"
                />
                <span className="text-secondary-400">
                  {COMPANY_INFO.address}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone
                  size={20}
                  className="text-primary-400 mt-1 flex-shrink-0"
                />
                <span className="text-secondary-400">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail
                  size={20}
                  className="text-primary-400 mt-1 flex-shrink-0"
                />
                <span className="text-secondary-400">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-3 flex-wrap">
              {socialIcons.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group p-3 bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 overflow-hidden"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -4,
                    rotate: [0, -5, 5, 0],
                    transition: { type: 'tween', duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Efecto de brillo */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Icono */}
                  <Icon size={22} className="relative z-10" />

                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-secondary-900 text-white px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
            <p className="text-secondary-400 mt-6 text-sm leading-relaxed">
              {COMPANY_INFO.coverage}
            </p>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          className="relative border-t border-secondary-800 dark:border-secondary-700 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-400 dark:text-secondary-500 text-sm">
              &copy; {currentYear}{' '}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                {COMPANY_INFO.name}
              </span>
              . Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-xs text-secondary-500 dark:text-secondary-600">
              <a
                href="#"
                className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
              >
                Política de Privacidad
              </a>
              <span className="w-1 h-1 rounded-full bg-secondary-600 dark:bg-secondary-700"></span>
              <a
                href="#"
                className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
              >
                Términos de Uso
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
