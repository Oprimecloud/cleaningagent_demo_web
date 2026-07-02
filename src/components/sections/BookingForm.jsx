// src/components/sections/BookingForm.jsx
import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useBrand } from '../../context/BrandContext';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const BookingForm = () => {
  const { brandData } = useBrand(); // Extract the dynamic data

  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    service_type: brandData.services[0].id, // Safely defaults to the first service
    preferred_date: '',
    preferred_time: 'Morning',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const { error } = await supabase.from('bookings').insert([formData]);

    if (error) {
      console.error('Error submitting booking:', error);
      setErrorMsg('Something went wrong. Please try again or call us.');
      setIsSubmitting(false);
    } else {
      setIsSuccess(true);
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="book" className="py-20 bg-sky-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-sky-100 flex flex-col items-center">
            <CheckCircle className="w-16 h-16 text-emerald-500 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h2>
            <p className="text-lg text-gray-600">
              Thank you, {formData.customer_name}. We have received your booking request for a {formData.service_type} clean. 
              Our team will contact you shortly at {formData.customer_phone} to confirm the details.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Book Your Cleaning</h2>
          <p className="mt-4 text-lg text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="customer_name"
                  required
                  value={formData.customer_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="customer_phone"
                  required
                  value={formData.customer_phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                name="customer_email"
                required
                value={formData.customer_email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Service *</label>
              <select
                name="service_type"
                value={formData.service_type}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-white"
              >
                {brandData.services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Calendar size={16} /> Preferred Date *
                </label>
                <input
                  type="date"
                  name="preferred_date"
                  required
                  value={formData.preferred_date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Clock size={16} /> Preferred Time
                </label>
                <select
                  name="preferred_time"
                  value={formData.preferred_time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-white"
                >
                  <option value="Morning">Morning (8AM - 12PM)</option>
                  <option value="Afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="Evening">Evening (4PM - 7PM)</option>
                </select>
              </div>
            </div>

            {errorMsg && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                {errorMsg}
              </div>
            )}

        <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-bold text-lg text-white transition-all ${
                isSubmitting 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:opacity-90 shadow-lg hover:shadow-xl'
              } bg-[var(--primary)]`}
            >
              {isSubmitting ? 'Sending Request...' : 'Confirm Booking Request'}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;