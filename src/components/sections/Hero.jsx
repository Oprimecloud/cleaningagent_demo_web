// src/components/sections/Hero.jsx
import React from 'react';
import { ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBrand } from '../../context/BrandContext';

const Hero = () => {
  const { brandData } = useBrand();

  return (
    <section className="relative pt-24 pb-28 bg-white overflow-hidden">
      
      {/* Flash Layer: Ultra-smooth ambient color array radiating behind text */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--primary)]/10 to-transparent rounded-full blur-[130px] -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          
          {/* Trust Badge: Upgraded with a premium glass border and entrance scale */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 border border-[var(--primary)]/20 shadow-sm backdrop-blur-sm">
              <ShieldCheck size={16} className="animate-bounce" />
              <span>Trusted, Bonded & Insured</span>
            </div>
          </motion.div>

          {/* Headline: Added split-line dynamic animation for a massive visual impact */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.15] tracking-tight">
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="block"
            >
              Professional Cleaning,
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="block bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/80 to-[var(--primary)] bg-clip-text text-transparent"
            >
              Designed for You.
            </motion.span>
          </h1>

          {/* Slogan */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed"
          >
            {brandData.slogan} Serving the community with top-tier, reliable cleaning services that bring harmony back to your home.
          </motion.p>

          {/* Action Row: Re-engineered with responsive scale lifts and custom shadow spreads */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <a 
              href="#book"
              className="group px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-xl shadow-lg shadow-[var(--primary)]/25 hover:shadow-xl hover:shadow-[var(--primary)]/35 flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Free Estimate 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href="#services"
              className="px-8 py-4 bg-gray-50 border border-gray-200 text-gray-900 font-bold rounded-xl hover:bg-gray-100 hover:border-gray-300 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
            >
              Our Services
            </a>
          </motion.div>

          {/* Rating: Subtle sequential staggered fade-in */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center gap-4 border-t border-gray-100 pt-8"
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + (i * 0.1), type: "spring", stiffness: 150 }}
                >
                  <Star size={20} fill="currentColor" />
                </motion.div>
              ))}
            </div>
            <p className="text-gray-700 font-medium tracking-wide">
              Rated <span className="font-bold text-gray-900">4.9/5</span> by over 500+ local clients.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;