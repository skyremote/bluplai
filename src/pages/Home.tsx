import React from 'react';
import Hero from '../components/Hero';
import Message from '../components/Message';
import Benefits from '../components/Benefits';
import AIHelpSection from '../components/AIHelpSection';
import Plaiers from '../components/Plaiers';
import Ecosystem from '../components/Ecosystem';
import Solutions from '../components/Solutions';
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
      <Ecosystem />
      <Solutions />
      <Movement />
      <AIHelpSection />
      <Plaiers />
      <InteractiveSection />
      <Podcast />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default Home;
