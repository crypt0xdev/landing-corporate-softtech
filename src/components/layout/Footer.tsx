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
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              {import.meta.env.VITE_COMPANY_NAME || 'Tu Empresa'}
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
            <div className="flex gap-4">
              {socialIcons.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary-800 rounded-lg hover:bg-primary-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-secondary-400 mt-4 text-sm">
              {COMPANY_INFO.coverage}
            </p>
          </motion.div>
        </div>

        <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400 text-sm">
          <p>
            &copy; {currentYear} {COMPANY_INFO.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
