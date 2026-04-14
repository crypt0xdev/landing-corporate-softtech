'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Moon, Sun } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '@/constants';
import { scrollToSection } from '@/utils/scroll';
import Button from '@/components/ui/Button';
import LanguageSelector from '@/components/shared/LanguageSelector';
import { useTheme, useLanguage } from '@/hooks';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');

  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Cambiar estilo cuando scroll > 20
      setIsScrolled(currentScrollY > 20);

      // Ocultar navbar al hacer scroll hacia abajo, mostrar al hacer scroll hacia arriba
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
        setIsMobileMenuOpen(false);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);

      // Detectar sección activa
      const sections = NAV_LINKS.map((link) => link.href.replace('#', ''));
      const scrollPosition = currentScrollY + 150;

      // Si estamos en el top, mostrar inicio como activo
      if (currentScrollY < 100) {
        setActiveSection('inicio');
        return;
      }

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Cerrar menú móvil al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevenir scroll del body cuando el menú está abierto
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/98 backdrop-blur-md shadow-lg py-3'
          : 'bg-gradient-to-b from-black/50 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => handleNavClick('#inicio')}
            className={`text-2xl font-bold transition-colors duration-300 cursor-pointer hover:scale-105 ${
              isScrolled || isMobileMenuOpen ? 'text-primary-600' : 'text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {COMPANY_INFO.name}
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {NAV_LINKS.map((link, index) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative font-medium transition-all duration-200 text-sm xl:text-base ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : isScrolled
                        ? 'text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400'
                        : 'text-white hover:text-primary-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                        isScrolled
                          ? 'bg-primary-600 dark:bg-primary-400'
                          : 'bg-white'
                      }`}
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'hover:bg-secondary-100 dark:hover:bg-secondary-700 text-secondary-700 dark:text-secondary-200'
                  : 'hover:bg-white/20 text-white'
              }`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              aria-label={t.theme.toggle}
              title={theme === 'light' ? t.theme.dark : t.theme.light}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>

            {/* Language Selector */}
            <LanguageSelector />

            <Button
              variant="primary"
              size="md"
              onClick={() => handleNavClick('#contact')}
              className="ml-2"
            >
              {t.nav.quote}
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
              isScrolled || isMobileMenuOpen
                ? 'text-secondary-700 hover:bg-primary-50'
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                className="mt-4 bg-white/98 dark:bg-secondary-800/98 backdrop-blur-lg shadow-2xl rounded-2xl border border-secondary-100/50 dark:border-secondary-700/50 p-4"
              >
                <div className="space-y-1">
                  {NAV_LINKS.map((link, index) => {
                    const sectionId = link.href.replace('#', '');
                    const isActive = activeSection === sectionId;
                    return (
                      <motion.button
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleNavClick(link.href)}
                        className={`block w-full text-left px-5 py-3.5 rounded-xl transition-all duration-200 font-medium ${
                          isActive
                            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 shadow-sm scale-[1.02]'
                            : 'text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-secondary-700/50'
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center justify-between">
                          {t.nav[link.key as keyof typeof t.nav]}
                          {isActive && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-primary-600 rounded-full"
                            />
                          )}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                  className="mt-4 pt-4 border-t border-secondary-100 dark:border-secondary-700"
                >
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    onClick={() => handleNavClick('#contact')}
                  >
                    {t.nav.quote}
                    <ChevronRight size={20} />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
