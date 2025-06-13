import React, { useEffect, useState } from 'react';
import { Sparkles, Bot } from 'lucide-react';
import RotatingText from './RotatingText';
import ShinyText from './ShinyText';
import ContactDropdown from './ContactDropdown';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-20" aria-hidden="true"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl float" aria-hidden="true"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl float-reverse" aria-hidden="true"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl pulse-slow" aria-hidden="true"></div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Bluplai
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a>
            <a href="#story" className="text-gray-300 hover:text-white transition-colors">Success Story</a>
            <ContactDropdown />
          </div>
        </div>
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
          
          <h1 className="relative z-30 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Creating AI's </span>
            <RotatingText
              texts={['Future', 'Generation', 'Now', 'Impact']}
              className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent"
              rotationInterval={2500}
            />
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4 break-words">
            We help you build the next generation of <span className="text-purple-400 font-semibold">AI in your business</span>. 
            Think <span className="text-teal-400 font-semibold">Platformers</span> or <span className="text-yellow-400 font-semibold">Plaiers</span>, 
            we're making AI accessible, playful and ready for <span className="text-blue-400 font-semibold">your business and employees</span>.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-400">New AI Roles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Gen Z</div>
              <div className="text-gray-400">Ready Platform</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
              <div className="text-gray-400">Global & Dynamic</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;