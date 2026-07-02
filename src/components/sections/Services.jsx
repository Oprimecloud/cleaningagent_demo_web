// src/components/sections/Services.jsx
import React from 'react';
import { Sparkles, Droplets, Home, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBrand } from '../../context/BrandContext';

const iconMapper = {
  Sparkles: <Sparkles className="w-8 h-8 text-[var(--primary)]" />,
  Sponge: <Droplets className="w-8 h-8 text-[var(--primary)]" />,
  Home: <Home className="w-8 h-8 text-[var(--primary)]" />
};

const Services = () => {
  const { brandData } = useBrand();

  // Animation variants for staggered reveal
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Professional Services
          </h2>
          <p className="text-lg text-gray-600">
            Tailored solutions to fit your lifestyle. Select the service that works best for your space.
          </p>
        </div>

        {/* Staggered Grid Layout */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {brandData.services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={item}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:shadow-[var(--primary)]/10 transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-gray-100">
                {iconMapper[service.icon] || <CheckCircle className="w-8 h-8 text-[var(--primary)]" />}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              
              <button className="w-full py-4 px-6 bg-white border border-[var(--primary)]/20 text-[var(--primary)] font-bold rounded-xl hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
                Select {service.title}
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;