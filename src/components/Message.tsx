import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Message: React.FC = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Our Message</span>
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              At <span className="text-cyan-400 font-semibold">bluplai</span>, we believe AI should feel human. We believe the future belongs to people who challenge the old way of working — replacing complexity with clarity, and noise with intelligence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We design AI that is minimalist, intuitive, and built around people. Processes and tools that understand you, lighten the load, and unlock the potential inside your team.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              The result? A new kind of <span className="text-purple-400 font-semibold">ecosystem</span> where enablement and community move as one — simple, smart, and beautifully connected.
            </motion.p>

            <motion.p
              className="text-2xl md:text-3xl font-bold text-white pt-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ready to build the future with <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">bluplai</span>?
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Message;
