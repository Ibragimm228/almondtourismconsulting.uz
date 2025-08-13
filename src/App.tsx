import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Leader from './components/Leader';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Leader />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;