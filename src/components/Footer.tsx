import React from 'react';
import { Phone } from 'lucide-react';

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
            
            {/* WhatsApp Contacts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a href="https://wa.me/4915115856708" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-gray-800 hover:bg-green-600 transition-all duration-300 hover:scale-105">
                <Phone className="w-5 h-5 text-green-400" />
                <div className="text-left">
                  <div className="text-white font-medium">Daniel @ Bluplai</div>
                  <div className="text-gray-400 text-sm">via WhatsApp</div>
                </div>
              </a>
              
              <a href="https://wa.me/34687259162" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-gray-800 hover:bg-green-600 transition-all duration-300 hover:scale-105">
                <Phone className="w-5 h-5 text-green-400" />
                <div className="text-left">
                  <div className="text-white font-medium">Leandro @ Bluplai</div>
                  <div className="text-gray-400 text-sm">via WhatsApp</div>
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