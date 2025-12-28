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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              Let's Get to Know You
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Explore these playful interactions and discover where you fit in the Plaier ecosystem.
          </p>
        </motion.div>

        {/* Founder Images with Questions */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Founder 1 - Solution/Clarity */}
          <div className="relative group">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-400/20 bg-gray-900/40 backdrop-blur">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/founder-solution.png"
                  alt="AI Workflow Solutions"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6 text-center">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-cyan-400 italic">
                  "How many AI tools are part of your daily workflow?"
                </p>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
          </div>

          {/* Founder 2 - Problem/Complexity */}
          <div className="relative group">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-400/20 bg-gray-900/40 backdrop-blur">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/founder-problem.png"
                  alt="AI Challenges"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6 text-center">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-purple-400 italic">
                  "Are you struggling with certain AI tools or processes?"
                </p>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
          </div>
        </motion.div>

        {/* Interactive Components */}
        <div className="space-y-10 sm:space-y-16 md:space-y-20">
          {/* AI Knowledge Level */}
          <motion.div
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gray-900/40 backdrop-blur p-4 sm:p-6 md:p-10"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <AIKnowledgeLevel />
          </motion.div>

          {/* Favorite Agent */}
          <motion.div
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gray-900/40 backdrop-blur p-4 sm:p-6 md:p-10"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <FavoriteAgent />
          </motion.div>

          {/* Problem Solver */}
          <motion.div
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gray-900/40 backdrop-blur p-4 sm:p-6 md:p-10"
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
