import React, { useState, useRef, useEffect } from 'react';
import { Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const emails = ['dw@bluplai.com', 'llc@bluplai.com'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 glass rounded-full px-4 py-2 text-gray-300 hover:text-white transition-colors"
      >
        <Mail className="w-4 h-4" />
        <span className="text-sm">Contact Us</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 z-50"
          >
            <div className="glass rounded-lg p-2 min-w-[250px]">
              <a
                href={`mailto:${emails.join(',')}?subject=${encodeURIComponent('Interested in BluplAI')}&body=${encodeURIComponent('Hi BluplAI team,\n\nWe would like to learn more.')}`}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                <div className="text-left">
                  <div className="text-white font-medium text-sm">Email us if interested</div>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactDropdown;
