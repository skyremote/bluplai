import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-gray-800 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Brand */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <img src="/bluplai-logo-white.png" alt="Bluplai" className="h-24" />
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Meet the dynamic duo creating tomorrow's AI workforce. From Platformers to Plaiers - 
              we're building playful, accessible AI tools for the next generation.
            </p>
            
            {/* Contact CTA */}
            <div className="max-w-2xl mx-auto">
              <a
                href={`mailto:dw@bluplai.com,llc@bluplai.com?subject=${encodeURIComponent('Interested in BluplAI')}&body=${encodeURIComponent('Hi BluplAI team,\n\nWe would like to learn more.')}`}
                className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-gray-800 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <div className="text-left">
                  <div className="text-white font-medium">Email us if interested</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-12 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Bluplai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
