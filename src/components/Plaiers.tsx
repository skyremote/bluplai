import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles } from 'lucide-react';
import ShinyText from './ShinyText';

const Plaiers: React.FC = () => {
  return (
    <section id="plaiers" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-yellow-400" />
            <ShinyText
              text="Meet the Movement"
              speed={6}
              className="text-sm text-gray-300"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Who are
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Plaiers?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Plaiers are the people who challenge the status quo. They believe AI should work for humans,
            not the other way around. They're curious, creative, and ready to build the future.
          </p>
        </motion.div>

        {/* Character Placeholders */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          {/* Male Character Placeholder */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border-2 border-cyan-400/30 flex items-center justify-center group hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10 flex items-center justify-center">
                  <Users className="w-16 h-16 md:w-20 md:h-20 text-cyan-400/60" />
                </div>
              </div>
              {/* Sparkle decoration */}
              <Sparkles className="absolute top-4 right-4 w-6 h-6 text-yellow-400/60" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">The Innovator</h3>
            <p className="text-gray-400 text-center max-w-xs mt-2">
              Curious mind, problem solver, always pushing boundaries
            </p>
          </motion.div>

          {/* Female Character Placeholder */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-500/20 border-2 border-purple-400/30 flex items-center justify-center group hover:border-purple-400/50 transition-all duration-300">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-500/10 flex items-center justify-center">
                  <Users className="w-16 h-16 md:w-20 md:h-20 text-purple-400/60" />
                </div>
              </div>
              {/* Sparkle decoration */}
              <Sparkles className="absolute top-4 right-4 w-6 h-6 text-pink-400/60" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">The Creator</h3>
            <p className="text-gray-400 text-center max-w-xs mt-2">
              Creative spirit, connector, building meaningful experiences
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 mb-4">
            Are <span className="text-yellow-400 font-semibold">you</span> a Plaier?
          </p>
          <p className="text-gray-400 text-sm">
            Character illustrations coming soon
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Plaiers;
