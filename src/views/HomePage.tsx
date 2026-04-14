'use client';

import React, { Suspense, lazy } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import StatsSection from '@/components/sections/StatsSection';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import SocialFloat from '@/components/shared/SocialFloat';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import ThemeToggle from '@/components/shared/ThemeToggle';

// Lazy load secciones no críticas (below the fold)
const TestimonialsSection = lazy(
  () => import('@/components/sections/TestimonialsSection'),
);
const CoverageSection = lazy(
  () => import('@/components/sections/CoverageSection'),
);
const FAQSection = lazy(() => import('@/components/sections/FAQSection'));
const CTASection = lazy(() => import('@/components/sections/CTASection'));
const ContactSection = lazy(
  () => import('@/components/sections/ContactSection'),
);

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-secondary-900">
      <Navbar />

      {/* Botones flotantes de redes sociales */}
      <SocialFloat />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />

      {/* Botón flotante de Tema (visible en móviles también) */}
      <ThemeToggle />

      <main>
        {/* Secciones críticas - Carga inmediata */}
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <AboutSection />

        {/* Secciones no críticas - Lazy loading */}
        <Suspense fallback={<LoadingSpinner />}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <CTASection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <CoverageSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <FAQSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
