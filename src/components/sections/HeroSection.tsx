'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { scrollToSection } from '@/utils/scroll';
import { useLanguage } from '@/hooks';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 pt-20 overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-0 sm:left-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-blob"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
            delay: 1,
          }}
          className="absolute top-40 right-0 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
            delay: 2,
          }}
          className="absolute -bottom-8 left-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full border border-primary-200 dark:border-primary-800 shadow-lg backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles
                size={18}
                className="text-primary-600 dark:text-primary-400"
              />
            </motion.div>
            <span className="text-sm font-semibold text-primary-700 dark:text-primary-300 tracking-wide">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-secondary-900 dark:text-white mb-6 max-w-5xl leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-900 to-secondary-700 dark:from-white dark:to-secondary-200">
              {t.hero.titlePart1}{' '}
            </span>
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 dark:from-primary-400 dark:via-primary-300 dark:to-secondary-400">
                {t.hero.titlePart2}
              </span>
              {/* Decorative underline */}
              <motion.svg
                className="absolute -bottom-2 left-0 w-full h-3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <motion.path
                  d="M0,10 Q50,5 100,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-primary-500 dark:text-primary-400"
                  vectorEffect="non-scaling-stroke"
                />
              </motion.svg>
            </span>{' '}
            {t.hero.titlePart3}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-500">
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary-600 dark:text-secondary-300 mb-12 max-w-4xl leading-relaxed font-light"
          >
            {t.hero.subtitle}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              {' '}
              {t.hero.subtitleHighlight}{' '}
            </span>
            {t.hero.subtitleEnd}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="relative overflow-hidden group shadow-xl hover:shadow-2xl"
              >
                {/* Efecto de brillo en hover */}
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:w-full transition-all duration-500"></span>
                <span className="relative">{t.hero.ctaPrimary}</span>
                <ArrowRight
                  size={20}
                  className="relative group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#services')}
                className="relative overflow-hidden group border-2 hover:border-primary-600 dark:hover:border-primary-400"
              >
                {t.hero.ctaSecondary}
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 lg:gap-16"
          >
            {[
              { value: '100+', labelKey: 'projects', icon: '🚀' },
              { value: '50+', labelKey: 'clients', icon: '⭐' },
              { value: '24/7', labelKey: 'support', icon: '💬' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1 + index * 0.1,
                  type: 'spring',
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/50 dark:bg-secondary-800/50 backdrop-blur-sm border border-secondary-200/50 dark:border-secondary-700/50 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm lg:text-base text-secondary-600 dark:text-secondary-400 font-medium">
                  {t.hero.stats[stat.labelKey as keyof typeof t.hero.stats]}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-secondary-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
