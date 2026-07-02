// src/components/layout/Footer.jsx
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useBrand } from '../../context/BrandContext';

// Custom SVG paths
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  const { brandData } = useBrand(); // Extract the dynamic data
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--footer-bg)] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{brandData.logoText}</h3>
            <p className="mb-4 text-gray-400">{brandData.slogan}</p>
            <div className="flex space-x-4">
              <a href={brandData.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <FacebookIcon />
              </a>
              <a href={brandData.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#book" className="hover:text-white transition-colors">Book a Cleaning</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
                <span>{brandData.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone flex-shrink-0 size={20} />
                <span>{brandData.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail flex-shrink-0 size={20} />
                <span>{brandData.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} {brandData.businessName}. {brandData.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;