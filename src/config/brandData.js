// src/config/brandData.js

export const brandData = {
  // 1. Core Brand Identity
  businessName: "Sparkle & Shine Cleaning",
  slogan: "Your Home, Spotless and Serene.",
  logoText: "SparkleShine", // Fallback if no image logo is provided
  
  // 2. Contact Information
  contact: {
    phone: "(555) 123-4567",
    email: "hello@sparkleshine.com",
    address: "123 Clean Street, Suite 100, Cityville",
    workingHours: "Mon-Sat: 8:00 AM - 6:00 PM"
  },

  // 3. Theming (These can be mapped to Tailwind or CSS variables)
  colors: {
    primary: "#0ea5e9", // Tailwind sky-500 (Trustworthy, clean)
    secondary: "#10b981", // Tailwind emerald-500 (Eco-friendly, fresh)
    accent: "#f59e0b", // Tailwind amber-500 (For high-conversion buttons like 'Book Now')
  },

  // 4. Core Services Offered (Easy to swap out for different clients)
  services: [
    {
      id: "standard",
      title: "Standard Cleaning",
      description: "Perfect for weekly or bi-weekly maintenance of your living spaces.",
      icon: "Sparkles" // We'll map this to an icon library like lucide-react later
    },
    {
      id: "deep",
      title: "Deep Cleaning",
      description: "A thorough, top-to-bottom clean reaching the spots regular cleaning misses.",
      icon: "Sponge"
    },
    {
      id: "move",
      title: "Move-In / Move-Out",
      description: "Ensure your new or old home is completely sanitized and ready.",
      icon: "Home"
    }
  ],

  // 5. Social Links
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  }
};