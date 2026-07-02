// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import BookingForm from '../components/sections/BookingForm';

const Home = () => {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Hero />
      <Services />
      <BookingForm />
      {/* 
        Professional Suggestion: You can easily drop in new components here later, 
        like <Testimonials /> or <FAQ />, without breaking the layout.
      */}
    </main>
  );
};

export default Home;