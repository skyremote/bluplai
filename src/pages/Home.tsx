import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import CustomerStory from '../components/CustomerStory';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      {/* Inline access to Offerings, alongside other sections */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Packages & Offerings</h2>
            <p className="mt-2 text-gray-300">Explore IRIS, LUMEN, ORION and our NavAIgate services.</p>
            <div className="mt-6">
              <Link
                to="/offerings"
                className="inline-flex items-center rounded-full bg-cyan-400/20 px-6 py-3 text-cyan-300 hover:bg-cyan-400/30 transition-colors border border-cyan-300/40"
              >
                View Offerings
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CustomerStory />
      <Footer />
    </>
  );
};

export default Home;
