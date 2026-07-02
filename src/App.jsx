// src/App.jsx
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import FAQ from './components/sections/FAQ';
import About from './components/sections/About';
import Reviews from './components/sections/Reviews';
import BookingForm from './components/sections/BookingForm';
import Footer from './components/layout/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <BookingForm /><About />
      <Reviews />
      <FAQ /> {/* Add this right here */}
      <Footer />
    </main>
  );
}

export default App;