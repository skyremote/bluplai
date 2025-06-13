import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import CustomerStory from './components/CustomerStory';
import Footer from './components/Footer';
import './animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Hero />
      <Features />
      <Benefits />
      <CustomerStory />
      <Footer />
    </div>
  );
}

export default App;