import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Navigation, Activity, ArrowRight } from 'lucide-react';
import ShinyText from './ShinyText';
import EcosystemVisualization from './EcosystemVisualization';

interface EcosystemBrand {
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
}

const ecosystemBrands: EcosystemBrand[] = [
  {
    name: "Bluplai",
    tagline: "The Foundation",
    description: "Our core AI ecosystem — where simplicity meets intelligence. Tools and processes designed to make AI feel human.",
    icon: <Layers className="w-8 h-8" />,
    color: "from-cyan-400 to-blue-500",
    borderColor: "border-cyan-400/30"
  },
  {
    name: "NavAIgate",
    tagline: "The Enablement",
    description: "Strategic AI services and consulting. We help organizations navigate their AI journey with clarity and purpose.",
    icon: <Navigation className="w-8 h-8" />,
    color: "from-purple-400 to-pink-500",
    borderColor: "border-purple-400/30"
  },
  {
    name: "MovAI",
    tagline: "The Movement",
    description: "Our community initiative. Connecting Plaiers worldwide who believe in a future where AI amplifies human potential.",
    icon: <Activity className="w-8 h-8" />,
    color: "from-orange-400 to-yellow-500",
    borderColor: "border-orange-400/30"
  }
];

const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <Layers className="w-4 h-4 text-cyan-400" />
            <ShinyText
              text="Connected Intelligence"
              speed={6}
              className="text-sm text-gray-300"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Our
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Three brands, one vision. Together, we're building a future where AI and humans work in harmony.
          </p>
        </motion.div>

        {/* 3D Ecosystem Visualization */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <EcosystemVisualization />
        </motion.div>

        {/* The One Problem We Solve */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            The One Problem We Solve
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI tools are everywhere, but they're fragmented, complex, and disconnected from how people actually work.
            We bring harmony to the chaos — one intelligent ecosystem that makes AI feel natural, intuitive, and human.
          </p>
        </motion.div>

        {/* Ecosystem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12">
          {ecosystemBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className={`relative p-5 sm:p-6 md:p-8 rounded-2xl border ${brand.borderColor} bg-gray-900/60 backdrop-blur group hover:border-white/20 transition-all duration-300`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${brand.color} flex items-center justify-center text-white mb-4 md:mb-6`}>
                {brand.icon}
              </div>

              {/* Content */}
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r ${brand.color} bg-clip-text text-transparent`}>
                {brand.name}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-4">{brand.tagline}</p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{brand.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Connection Visual */}
        <motion.div
          className="flex justify-center items-center gap-4 text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400/50"></div>
          <ArrowRight className="w-5 h-5 text-cyan-400/50" />
          <span className="text-sm text-gray-400">Moving together</span>
          <ArrowRight className="w-5 h-5 text-purple-400/50" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400/50"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ecosystem;
