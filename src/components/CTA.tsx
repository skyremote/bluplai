import React, { useEffect, useState } from 'react';
import { ChevronRight, Sparkles, Shield, Clock, Users } from 'lucide-react';

const CTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const ctaElement = document.getElementById('cta-section');
    if (ctaElement) {
      observer.observe(ctaElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-section" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl float-reverse"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-300 font-medium">Ready to Get Started?</span>
          </div>
          
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Transform Your Customer Success
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Starting Today
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of customer success teams who have already transformed their workflows 
            with Bluplai's AI-powered platform.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-5 rounded-full text-white font-medium text-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center space-x-3 shadow-2xl">
              <span>Start Free 14-Day Trial</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-gray-300 hover:text-white font-medium text-xl flex items-center space-x-3 group px-6 py-3">
              <span>Book a Demo</span>
              <div className="w-14 h-14 rounded-full border-2 border-gray-300 group-hover:border-white flex items-center justify-center transition-colors">
                <div className="w-0 h-0 border-l-[8px] border-l-gray-300 group-hover:border-l-white border-y-[5px] border-y-transparent ml-1 transition-colors"></div>
              </div>
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="stagger-item flex items-center justify-center space-x-3 text-gray-400">
              <Clock className="w-6 h-6 text-green-400" />
              <span>Free 14-day trial</span>
            </div>
            <div className="stagger-item flex items-center justify-center space-x-3 text-gray-400">
              <Shield className="w-6 h-6 text-blue-400" />
              <span>No credit card required</span>
            </div>
            <div className="stagger-item flex items-center justify-center space-x-3 text-gray-400">
              <Users className="w-6 h-6 text-purple-400" />
              <span>Setup in 5 minutes</span>
            </div>
            <div className="stagger-item flex items-center justify-center space-x-3 text-gray-400">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span>24/7 support included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;