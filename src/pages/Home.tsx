import React from 'react';
import Hero from '../components/Hero';
import Message from '../components/Message';
import Benefits from '../components/Benefits';
import Manifesto from '../components/Manifesto';
import Features from '../components/Features';
import Plaiers from '../components/Plaiers';
import Ecosystem from '../components/Ecosystem';
import Movement from '../components/Movement';
import InteractiveSection from '../components/InteractiveSection';
import Podcast from '../components/Podcast';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Message />
      <Benefits />
      <Manifesto />
      <Features />
      <Plaiers />
      <Ecosystem />
      <Movement />
      <InteractiveSection />
      <Podcast />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default Home;
