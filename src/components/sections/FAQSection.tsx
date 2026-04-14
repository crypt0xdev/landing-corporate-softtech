'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { scrollToSection } from '@/utils/scroll';
import { useLanguage } from '@/hooks';

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const { t } = useLanguage();
  const { title, subtitle, items, notFound, contactUs } = t.faq;

  const toggleFAQ = (index: number) => {
    setOpenId(openId === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-secondary-50 dark:bg-secondary-800">
      <Container size="md">
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="space-y-4">
          {items.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`bg-white dark:bg-secondary-900 rounded-xl shadow-md overflow-hidden border-l-4 transition-colors duration-300 ${
                openId === index
                  ? 'border-primary-500'
                  : 'border-transparent'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors"
                aria-expanded={openId === index}
              >
                <span className="font-semibold text-secondary-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-primary-600 dark:text-primary-400">
                  {openId === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openId === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-secondary-700 dark:text-secondary-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-secondary-600 dark:text-secondary-400 mb-4">
            {notFound}
          </p>
          <button
            onClick={() => scrollToSection('#contact')}
            className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            {contactUs}
          </button>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQSection;
