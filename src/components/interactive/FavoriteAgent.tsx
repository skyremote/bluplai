import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bot, Navigation, Layers, Zap, Check } from 'lucide-react';

interface AIAgent {
  id: string;
  name: string;
  description: string;
  personality: string;
  icon: React.ReactNode;
  color: string;
}

const agents: AIAgent[] = [
  {
    id: 'plai',
    name: 'Plai',
    description: 'Your playful AI companion',
    personality: 'Creative, curious, and always ready to explore new possibilities with you.',
    icon: <Sparkles className="w-10 h-10" />,
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'dale',
    name: 'Dale',
    description: 'The action-oriented facilitator',
    personality: 'Bold, confident, and focused on getting things done efficiently.',
    icon: <Zap className="w-10 h-10" />,
    color: 'from-orange-400 to-red-500'
  },
  {
    id: 'nav',
    name: 'Nav',
    description: 'Your strategic navigator',
    personality: 'Thoughtful, analytical, and expert at finding the best path forward.',
    icon: <Navigation className="w-10 h-10" />,
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 'blu',
    name: 'Blu',
    description: 'The ecosystem orchestrator',
    personality: 'Harmonious, connected, and masterful at bringing everything together.',
    icon: <Layers className="w-10 h-10" />,
    color: 'from-teal-400 to-green-500'
  }
];

const FavoriteAgent: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedAgent = agents.find(a => a.id === selected);

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
          Choose your{' '}
          <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            AI Favorite Agent
          </span>
        </h3>
        <p className="text-gray-400">Which personality resonates with you?</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {agents.map((agent, index) => (
          <motion.button
            key={agent.id}
            onClick={() => setSelected(agent.id)}
            className={`relative p-4 rounded-2xl border transition-all duration-300 text-center ${
              selected === agent.id
                ? 'border-white/30 bg-white/10'
                : 'border-white/10 bg-gray-900/40 hover:border-white/20 hover:bg-gray-900/60'
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Selection indicator */}
            {selected === agent.id && (
              <motion.div
                className="absolute top-2 right-2 w-5 h-5 rounded-full bg-green-400 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                <Check className="w-3 h-3 text-gray-900" />
              </motion.div>
            )}

            {/* Agent Avatar */}
            <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${agent.color} flex items-center justify-center text-white mb-3`}>
              {agent.icon}
            </div>

            {/* Content */}
            <h4 className={`text-lg font-bold bg-gradient-to-r ${agent.color} bg-clip-text text-transparent`}>
              {agent.name}
            </h4>
            <p className="text-gray-400 text-xs mt-1">{agent.description}</p>
          </motion.button>
        ))}
      </div>

      {/* Selected Agent Details */}
      <AnimatePresence mode="wait">
        {selectedAgent && (
          <motion.div
            key={selectedAgent.id}
            className={`rounded-2xl border border-white/10 bg-gradient-to-r ${selectedAgent.color} p-[1px]`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-2xl bg-gray-900/95 p-6 flex items-center gap-4">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${selectedAgent.color} flex items-center justify-center text-white flex-shrink-0`}>
                {selectedAgent.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{selectedAgent.name}</h4>
                <p className="text-gray-300 text-sm mt-1">{selectedAgent.personality}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FavoriteAgent;
