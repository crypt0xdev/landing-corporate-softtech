'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/i18n/translations';
import type { Language } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (typeof translations)['es'] | (typeof translations)['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Siempre inicia con 'es' en servidor y cliente → sin hydration mismatch
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    // Leer preferencia después de la hidratación
    // SSR-safe: estado inicia con 'es' en servidor, se actualiza al montar en cliente
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (!browserLang.startsWith('es')) {
        setLanguage('en');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
