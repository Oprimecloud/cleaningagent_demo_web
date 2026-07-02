// src/context/BrandContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// Create the context
const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
  const [brandData, setBrandData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrandData = async () => {
      // In a real agency setup, you might grab the slug from the URL or a domain router.
      // For now, we hardcode the slug we want to load.
      const { data, error } = await supabase
        .from('client_configs')
        .select('*')
        .eq('client_slug', 'cleaning-demo-1')
        .single();

     if (error) {
        console.error("Error fetching brand data:", error);
      } else {
        setBrandData({
            // Add these to your setBrandData object in BrandContext.jsx
        about: {
            title: data.about_title,
            content: data.about_content
        },
        reviews: data.reviews,
        faqs: data.faqs,
          businessName: data.business_name,
          slogan: data.slogan,
          logoText: data.logo_text,
          copyrightText: data.copyright_text, // Added copyright text
          colors: { 
            primary: data.primary_color,
            footer: data.footer_color // Added footer color to state
          },
          
          contact: { phone: data.phone, email: data.email, address: data.address },
          services: data.services,
          socials: data.socials
        });
        
        // Push both CSS variables to the browser
        document.documentElement.style.setProperty('--primary', data.primary_color);
        
        // Push the footer color (with a dark gray fallback just in case)
        document.documentElement.style.setProperty('--footer-bg', data.footer_color || '#111827');
      }
      setLoading(false);
    };

    fetchBrandData();
  }, []);

  // Show a blank screen or a spinner while pulling data from Supabase
  if (loading) {
    return <div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <BrandContext.Provider value={{ brandData }}>
      {children}
    </BrandContext.Provider>
  );
};

// Custom hook to easily grab the data in any component
export const useBrand = () => useContext(BrandContext);