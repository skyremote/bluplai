import React, { useEffect, useState } from 'react';
import { ChevronRight, Sparkles, Bot, Users, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="glass rounded-full px-4 py-2 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">AI-Powered Customer Success</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Customer Engagement
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Reduce admin work by <span className="text-teal-400 font-semibold">60%</span> and consolidate 
            <span className="text-purple-400 font-semibold"> 5+ tools</span> into one unified AI-powered platform
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-white font-medium text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-gray-300 hover:text-white font-medium text-lg flex items-center space-x-2 group">
              <span>Watch Demo</span>
              <div className="w-12 h-12 rounded-full border-2 border-gray-300 group-hover:border-white flex items-center justify-center transition-colors">
                <div className="w-0 h-0 border-l-[6px] border-l-gray-300 group-hover:border-l-white border-y-[4px] border-y-transparent ml-1 transition-colors"></div>
              </div>
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="stagger-item text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-400">Less Admin Work</div>
            </div>
            <div className="stagger-item text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-400">Tools Consolidated</div>
            </div>
            <div className="stagger-item text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">25%</div>
              <div className="text-gray-400">Higher Retention</div>
            </div>
          </div>
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