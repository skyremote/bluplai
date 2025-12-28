import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="rounded-2xl border border-white/10 bg-gray-900/80 backdrop-blur p-6 sm:p-8 md:p-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-16 h-16 mx-auto mb-8 text-cyan-400" />
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Are you a <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Plaier</span>?
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let's be in touch. Join our movement toward intelligent work and purposeful innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href={`mailto:dw@bluplai.com,llc@bluplai.com?subject=${encodeURIComponent('I\'m a Plaier!')}&body=${encodeURIComponent('Hi Bluplai team,\n\nI\'m interested in joining the movement and learning more about what you\'re building.\n\n')}`}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 px-8 py-4 text-lg font-semibold text-white hover:from-cyan-400/30 hover:to-purple-400/30 transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-500">
              Join forward-thinking teams and individuals shaping the future of AI
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
