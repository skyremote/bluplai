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
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Who are
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Plaiers?
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Plaiers are the people who challenge the status quo. They believe AI should work for humans,
            not the other way around. They're curious, creative, and ready to build the future.
          </p>
        </motion.div>

        {/* Character Images */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 mb-12 md:mb-16">
          {/* The Innovator */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-lg group-hover:blur-xl transition-all duration-300 opacity-60 group-hover:opacity-80"></div>
              {/* Image container */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-cyan-400/40 group-hover:border-cyan-400/60 transition-all duration-300 shadow-2xl shadow-cyan-500/20">
                <img
                  src="/plaier-innovator.png"
                  alt="The Innovator"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Sparkle decoration */}
              <Sparkles className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-400" />
            </div>
            <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-white">The Innovator</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center max-w-xs mt-2 leading-relaxed px-2">
              Curious mind, problem solver, always pushing boundaries to discover what's possible
            </p>
          </motion.div>

          {/* The Creator */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-500/30 blur-lg group-hover:blur-xl transition-all duration-300 opacity-60 group-hover:opacity-80"></div>
              {/* Image container */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-purple-400/40 group-hover:border-purple-400/60 transition-all duration-300 shadow-2xl shadow-purple-500/20">
                <img
                  src="/plaier-creator.png"
                  alt="The Creator"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Sparkle decoration */}
              <Sparkles className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-pink-400" />
            </div>
            <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-white">The Creator</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center max-w-xs mt-2 leading-relaxed px-2">
              Creative spirit, connector, building meaningful experiences that matter
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
          <p className="text-xl md:text-2xl text-gray-300">
            Are <span className="text-yellow-400 font-semibold">you</span> a Plaier?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Plaiers;
