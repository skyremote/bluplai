import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';

interface KnowledgeLevel {
  id: string;
  label: string;
  subtitle: string;
  description: string;
  color: string;
  bgColor: string;
}

const levels: KnowledgeLevel[] = [
  {
    id: 'curious',
    label: 'AI CURIOUS',
    subtitle: 'Awareness',
    description: 'Just starting to explore what AI can do. Curious and open to learning.',
    color: 'text-purple-400',
    bgColor: 'from-purple-400/20 to-blue-400/20'
  },
  {
    id: 'practitioner',
    label: 'AI PRACTITIONER',
    subtitle: 'Applied User',
    description: 'Using AI tools daily. Comfortable with prompts and basic workflows.',
    color: 'text-cyan-400',
    bgColor: 'from-cyan-400/20 to-teal-400/20'
  },
  {
    id: 'integrator',
    label: 'AI INTEGRATOR',
    subtitle: 'Workflow Builder',
    description: 'Building AI into processes. Connecting tools and automating work.',
    color: 'text-green-400',
    bgColor: 'from-green-400/20 to-emerald-400/20'
  },
  {
    id: 'strategist',
    label: 'AI STRATEGIST',
    subtitle: 'Change Leader',
    description: 'Leading AI adoption. Aligning AI with business goals and driving change.',
    color: 'text-yellow-400',
    bgColor: 'from-yellow-400/20 to-orange-400/20'
  },
  {
    id: 'catalyst',
    label: 'AI CATALYST',
    subtitle: 'Movement Leader',
    description: 'Transforming organizations with AI. Inspiring others and scaling impact.',
    color: 'text-white',
    bgColor: 'from-white/20 to-cyan-400/20'
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
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent italic">
            What is your level of AI Knowledge?
          </span>
        </h3>
        <p className="text-gray-400">Select one to see where you fit in the Plaier community</p>
      </motion.div>

      {/* Character Image Banner */}
      <motion.div
        className="mb-8 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img
          src="/ai-knowledge-levels.png"
          alt="AI Knowledge Levels - Curious, Practitioner, Integrator, Strategist, Catalyst"
          className="w-full h-auto"
        />
      </motion.div>

      {/* Level Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
        {levels.map((level, index) => (
          <motion.button
            key={level.id}
            onClick={() => setSelected(level.id)}
            className={`relative p-4 rounded-2xl border transition-all duration-300 text-center ${
              selected === level.id
                ? `border-white/30 bg-gradient-to-b ${level.bgColor}`
                : 'border-white/10 bg-gray-900/40 hover:border-white/20 hover:bg-gray-900/60'
            }`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Selection indicator */}
            {selected === level.id && (
              <motion.div
                className="absolute top-2 right-2 w-5 h-5 rounded-full bg-green-400 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                <Check className="w-3 h-3 text-gray-900" />
              </motion.div>
            )}

            {/* Content */}
            <h4 className={`text-sm font-bold ${level.color} italic leading-tight`}>
              {level.label}
            </h4>
            <p className="text-gray-400 text-xs mt-1">{level.subtitle}</p>
          </motion.button>
        ))}
      </div>

      {/* Response Area */}
      <AnimatePresence mode="wait">
        {selectedLevel && (
          <motion.div
            key={selectedLevel.id}
            className={`rounded-2xl border border-white/10 bg-gradient-to-r ${selectedLevel.bgColor} p-6`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <Sparkles className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className={`text-xl font-bold ${selectedLevel.color} italic`}>
                  {selectedLevel.label}
                </h4>
                <p className="text-gray-300 text-sm mt-1">{selectedLevel.subtitle}</p>
                <p className="text-white mt-3">{selectedLevel.description}</p>
                <p className="text-yellow-400 text-sm mt-3 italic">
                  Welcome to the movement, {selectedLevel.label.split(' ')[1]}!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIKnowledgeLevel;
