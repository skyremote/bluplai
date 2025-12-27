import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import ShinyText from './ShinyText';
import AIKnowledgeLevel from './interactive/AIKnowledgeLevel';
import FavoriteAgent from './interactive/FavoriteAgent';
import ProblemSolver from './interactive/ProblemSolver';

const InteractiveSection: React.FC = () => {
  return (
    <section id="interactive" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <Gamepad2 className="w-4 h-4 text-yellow-400" />
            <ShinyText
              text="Play & Discover"
              speed={6}
              className="text-sm text-gray-300"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              Let's Get to Know You
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore these playful interactions and discover where you fit in the Plaier ecosystem.
          </p>
        </motion.div>

        {/* Interactive Components */}
        <div className="space-y-20">
          {/* AI Knowledge Level */}
          <motion.div
            className="rounded-3xl border border-white/10 bg-gray-900/40 backdrop-blur p-6 md:p-10"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <AIKnowledgeLevel />
          </motion.div>

          {/* Favorite Agent */}
          <motion.div
            className="rounded-3xl border border-white/10 bg-gray-900/40 backdrop-blur p-6 md:p-10"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <FavoriteAgent />
          </motion.div>

          {/* Problem Solver */}
          <motion.div
            className="rounded-3xl border border-white/10 bg-gray-900/40 backdrop-blur p-6 md:p-10"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProblemSolver />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
