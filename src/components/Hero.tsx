import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';
import RotatingText from './RotatingText';
import ShinyText from './ShinyText';
import ContactDropdown from './ContactDropdown';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl float-reverse"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl pulse-slow"></div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="/bluplai-logo-white.png" alt="Bluplai" className="h-12 md:h-20" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#values" className="text-gray-300 hover:text-white transition-colors">Values</a>
            <a href="#manifesto" className="text-gray-300 hover:text-white transition-colors">Manifesto</a>
            <a href="#ecosystem" className="text-gray-300 hover:text-white transition-colors">Ecosystem</a>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <ContactDropdown />
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-gray-100 backdrop-blur hover:bg-white/20 transition"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-gray-900/95 backdrop-blur">
            <div className="flex items-center justify-between p-4">
              <img src="/bluplai-logo-white.png" alt="Bluplai" className="h-8" />
              <button
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-gray-100 hover:bg-white/20 transition"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="px-6 py-4 space-y-4">
              <a href="#values" className="block text-lg text-gray-200" onClick={() => setMenuOpen(false)}>Values</a>
              <a href="#manifesto" className="block text-lg text-gray-200" onClick={() => setMenuOpen(false)}>Manifesto</a>
              <a href="#ecosystem" className="block text-lg text-gray-200" onClick={() => setMenuOpen(false)}>Ecosystem</a>
              <Link to="/about" className="block text-lg text-gray-200" onClick={() => setMenuOpen(false)}>About</Link>
              <div className="pt-2"><ContactDropdown /></div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="glass rounded-full px-4 py-2 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <ShinyText 
                text="AI Industry Role Creators" 
                speed={6} 
                className="text-sm text-gray-300"
              />
            </div>
          </div>
          
          <h1 className="relative z-30 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white">
            Creating AI's{' '}
            <RotatingText
              texts={['Future', 'Generation', 'Now', 'Impact']}
              mainClassName="inline-block text-white"
              staggerFrom="last"
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4 break-words">
            Join the <span className="text-purple-400 font-semibold">movement</span> toward intelligent work. We're building playful, accessible AI for the next generation of <span className="text-yellow-400 font-semibold">Plaiers</span> — people who challenge the old way of working, replacing complexity with <span className="text-teal-400 font-semibold">clarity</span> and noise with <span className="text-blue-400 font-semibold">intelligence</span>.
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
