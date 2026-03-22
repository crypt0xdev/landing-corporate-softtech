import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Monitor, CheckCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import { COMPANY_INFO } from '@/constants';

const CoverageSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <MapPin size={48} className="text-primary-200" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            {COMPANY_INFO.coverage}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-primary-100 max-w-2xl mx-auto"
          >
            Brindamos soluciones digitales a empresas en todo el territorio
            peruano con soporte remoto profesional
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: Monitor,
              title: 'Soporte Remoto',
              description: 'Atención inmediata desde cualquier lugar del país',
            },
            {
              icon: MapPin,
              title: 'Oficina en Lima',
              description: `Visítanos en ${COMPANY_INFO.address}`,
            },
            {
              icon: CheckCircle,
              title: 'Cobertura Nacional',
              description: 'Servicio profesional en todo Perú',
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group cursor-default"
              >
                <motion.div
                  className="mb-4 inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Icon
                    size={32}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-primary-100">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CoverageSection;
