import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Wrench, GitBranch, LineChart, Rocket, Check } from 'lucide-react';

interface AIAgent {
  id: string;
  name: string;
  title: string;
  traits: string[];
  color: string;
  bgColor: string;
  icon: React.ReactNode;
}

const agents: AIAgent[] = [
  {
    id: 'pico',
    name: 'PICO',
    title: 'Explorer & Insight Provider',
    traits: [
      'Encourages curiosity and discovery',
      'Provides fact-checked and bite-sized insights',
      'Great for experimenting safely with AI',
      'Playful, approachable, clear'
    ],
    color: 'text-blue-400',
    bgColor: 'from-blue-400/20 to-purple-400/20',
    icon: <Search className="w-8 h-8" />
  },
  {
    id: 'milo',
    name: 'MILO',
    title: 'Hands-on Guide & Problem Solver',
    traits: [
      'Helps apply AI to real tasks',
      'Offers step-by-step guidance and troubleshooting',
      'Builds user confidence and practical skills',
      'Friendly, supportive, patient'
    ],
    color: 'text-cyan-400',
    bgColor: 'from-cyan-400/20 to-teal-400/20',
    icon: <Wrench className="w-8 h-8" />
  },
  {
    id: 'kora',
    name: 'KORA',
    title: 'Connector & Workflow Builder',
    traits: [
      'Integrates tools and systems seamlessly',
      'Automates and adapts workflows',
      'Optimizes team productivity and processes',
      'Seamless, intuitive, efficient'
    ],
    color: 'text-green-400',
    bgColor: 'from-green-400/20 to-emerald-400/20',
    icon: <GitBranch className="w-8 h-8" />
  },
  {
    id: 'zeno',
    name: 'ZENO',
    title: 'Advisor & Strategic Thinker',
    traits: [
      'Provides deep analysis and recommendations',
      'Aligns AI adoption with business goals',
      'Supports strategic planning and prioritization',
      'Thoughtful, insightful, decisive'
    ],
    color: 'text-yellow-400',
    bgColor: 'from-yellow-400/20 to-orange-400/20',
    icon: <LineChart className="w-8 h-8" />
  },
  {
    id: 'rex',
    name: 'REX',
    title: 'Executor & Change Champion',
    traits: [
      'Drives large-scale AI adoption',
      'Executes workflows and software governance',
      'Supports teams and enables action',
      'Bold, reliable, action-driven'
    ],
    color: 'text-white',
    bgColor: 'from-white/20 to-cyan-400/20',
    icon: <Rocket className="w-8 h-8" />
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
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-white">Choose your </span>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent italic">
            AI favourite Agent
          </span>
        </h3>
        <p className="text-gray-400">Which one best represents you?</p>
      </motion.div>

      {/* Agent Image Banner */}
      <motion.div
        className="mb-8 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img
          src="/ai-agents.png"
          alt="AI Agents - PICO, MILO, KORA, ZENO, REX"
          className="w-full h-auto"
        />
      </motion.div>

      {/* Agent Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
        {agents.map((agent, index) => (
          <motion.button
            key={agent.id}
            onClick={() => setSelected(agent.id)}
            className={`relative p-4 rounded-2xl border transition-all duration-300 text-center ${
              selected === agent.id
                ? `border-${agent.color.split('-')[1]}-400/50 bg-gradient-to-b ${agent.bgColor}`
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

            {/* Content */}
            <h4 className={`text-lg font-bold ${agent.color} italic`}>
              {agent.name}
            </h4>
            <p className="text-gray-400 text-xs mt-1 leading-tight">{agent.title}</p>
          </motion.button>
        ))}
      </div>

      {/* Selected Agent Details */}
      <AnimatePresence mode="wait">
        {selectedAgent && (
          <motion.div
            key={selectedAgent.id}
            className={`rounded-2xl border border-white/10 bg-gradient-to-r ${selectedAgent.bgColor} p-6`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className={`w-14 h-14 rounded-xl bg-gray-900/60 flex items-center justify-center ${selectedAgent.color} flex-shrink-0`}>
                {selectedAgent.icon}
              </div>
              <div className="flex-1">
                <h4 className={`text-2xl font-bold ${selectedAgent.color} italic`}>{selectedAgent.name}</h4>
                <p className="text-white font-medium mb-3">{selectedAgent.title}</p>
                <ul className="space-y-1">
                  {selectedAgent.traits.map((trait, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${selectedAgent.color.replace('text', 'bg')} flex-shrink-0`}></span>
                      <span className="italic">{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FavoriteAgent;
