// src/components/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useBrand } from '../../context/BrandContext';

const About = () => {
  const { brandData } = useBrand();

  return (
    <section id="about" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Top Label */}
          <div className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm mb-4">
            Our Story
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
            {brandData.about.title}
          </h2>

          {/* Content */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-xl text-gray-600 leading-relaxed">
              {brandData.about.content}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;