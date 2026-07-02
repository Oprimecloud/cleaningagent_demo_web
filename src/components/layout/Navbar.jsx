// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrand } from '../../context/BrandContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { brandData } = useBrand();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <motion.a 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            href="/" 
            className="text-2xl font-bold text-gray-900 tracking-tight"
          >
            {brandData.logoText}
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'About', 'Reviews'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 hover:text-[var(--primary)] font-medium transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            
            {/* CTA Button */}
            <a 
              href="#book"
              className="flex items-center gap-2 bg-[var(--primary)] hover:shadow-lg hover:shadow-[var(--primary)]/20 text-white px-6 py-2.5 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Phone size={16} />
              {brandData.contact.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {['Services', 'About', 'Reviews'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-gray-900"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#book" 
                onClick={() => setIsOpen(false)}
                className="block text-lg font-bold text-[var(--primary)]"
              >
                Call: {brandData.contact.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;