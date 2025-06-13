import React, { useState, useRef, useEffect } from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const contacts = [
    { name: 'Daniel @ Bluplai', number: '4915115856708' },
    { name: 'Leandro @ Bluplai', number: '34687259162' }
  ];

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
        <Phone className="w-4 h-4" />
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
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={`https://wa.me/${contact.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-600/20 transition-all duration-300 group"
                >
                  <Phone className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                  <div className="text-left">
                    <div className="text-white font-medium text-sm">{contact.name}</div>
                    <div className="text-gray-400 text-xs">via WhatsApp</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactDropdown;