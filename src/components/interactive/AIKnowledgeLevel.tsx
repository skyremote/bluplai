import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Rocket, Sparkles, Check } from 'lucide-react';

interface KnowledgeLevel {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  response: string;
}

const levels: KnowledgeLevel[] = [
  {
    id: 'beginner',
    label: 'Beginner',
    icon: <Brain className="w-8 h-8" />,
    description: 'Just starting my AI journey',
    color: 'from-green-400 to-teal-400',
    response: "Welcome to the AI world! We're here to make your journey smooth and exciting."
  },
  {
    id: 'intermediate',
    label: 'Intermediate',
    icon: <Zap className="w-8 h-8" />,
    description: 'Comfortable with AI tools',
    color: 'from-blue-400 to-purple-400',
    response: "You're on your way! Let's take your AI skills to the next level together."
  },
  {
    id: 'advanced',
    label: 'Advanced',
    icon: <Rocket className="w-8 h-8" />,
    description: 'Building and integrating AI',
    color: 'from-orange-400 to-pink-400',
    response: "You're a true Plaier! Let's push boundaries and create something amazing."
  }
];

const AIKnowledgeLevel: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedLevel = levels.find(l => l.id === selected);

  return (
    <div className="w-full">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          What is your level of{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI Knowledge
          </span>
          ?
        </h3>
        <p className="text-gray-400">Select one to see where you fit in the Plaier community</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {levels.map((level, index) => (
          <motion.button
            key={level.id}
            onClick={() => setSelected(level.id)}
            className={`relative p-6 rounded-2xl border transition-all duration-300 text-left ${
              selected === level.id
                ? 'border-white/30 bg-white/10'
                : 'border-white/10 bg-gray-900/40 hover:border-white/20 hover:bg-gray-900/60'
            }`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Selection indicator */}
            {selected === level.id && (
              <motion.div
                className="absolute top-3 right-3 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                <Check className="w-4 h-4 text-gray-900" />
              </motion.div>
            )}

            {/* Icon */}
            <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center text-white mb-4`}>
              {level.icon}
            </div>

            {/* Content */}
            <h4 className={`text-xl font-bold mb-2 bg-gradient-to-r ${level.color} bg-clip-text text-transparent`}>
              {level.label}
            </h4>
            <p className="text-gray-400 text-sm">{level.description}</p>
          </motion.button>
        ))}
      </div>

      {/* Response Area */}
      <AnimatePresence mode="wait">
        {selectedLevel && (
          <motion.div
            key={selectedLevel.id}
            className={`rounded-2xl border border-white/10 bg-gradient-to-r ${selectedLevel.color} p-[1px]`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-2xl bg-gray-900/95 p-6 flex items-center gap-4">
              <Sparkles className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">{selectedLevel.response}</p>
                <p className="text-gray-400 text-sm mt-1">You selected: {selectedLevel.label}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIKnowledgeLevel;
