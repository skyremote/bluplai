import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Navigation, Activity, ChevronLeft, ChevronRight } from 'lucide-react';

interface Layer {
  name: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  glowColor: string;
}

const layers: Layer[] = [
  {
    name: 'Bluplai',
    subtitle: 'Foundation',
    description: 'Our core AI ecosystem — where simplicity meets intelligence.',
    icon: <Layers className="w-8 h-8" />,
    gradient: 'from-cyan-400 to-blue-500',
    glowColor: 'rgba(34, 211, 238, 0.4)'
  },
  {
    name: 'NavAIgate',
    subtitle: 'Enablement',
    description: 'Strategic AI services and consulting for your journey.',
    icon: <Navigation className="w-8 h-8" />,
    gradient: 'from-purple-400 to-pink-500',
    glowColor: 'rgba(192, 132, 252, 0.4)'
  },
  {
    name: 'MovAI',
    subtitle: 'Movement',
    description: 'Connecting Plaiers worldwide who believe in the future.',
    icon: <Activity className="w-8 h-8" />,
    gradient: 'from-orange-400 to-yellow-500',
    glowColor: 'rgba(251, 146, 60, 0.4)'
  }
];

const EcosystemVisualization: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-cycle through layers
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % layers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % layers.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + layers.length) % layers.length);
  };

  const goToIndex = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
          animate={{
            backgroundColor: layers[activeIndex].glowColor,
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-50"
          animate={{
            backgroundColor: layers[(activeIndex + 1) % layers.length].glowColor,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="relative">
        {/* 3D Isometric Stack */}
        <div
          className="relative h-[350px] md:h-[400px] mx-auto"
          style={{
            perspective: '1200px',
            perspectiveOrigin: '50% 50%'
          }}
        >
          {/* Isometric container */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {layers.map((layer, index) => {
              const isActive = index === activeIndex;
              const offset = index - activeIndex;

              // Calculate 3D positions - more front-facing
              const zOffset = isActive ? 60 : offset * 20;
              const yOffset = isActive ? 0 : offset * 30;
              const xOffset = isActive ? 0 : offset * 15;
              const scale = isActive ? 1.05 : 0.9 - Math.abs(offset) * 0.05;
              const opacity = isActive ? 1 : 0.5 - Math.abs(offset) * 0.1;
              const rotateY = isActive ? 0 : offset * 8;

              return (
                <motion.div
                  key={layer.name}
                  className="absolute cursor-pointer"
                  style={{
                    width: '300px',
                    height: '300px',
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    z: zOffset,
                    y: yOffset,
                    x: xOffset,
                    scale,
                    opacity: Math.max(opacity, 0.2),
                    rotateX: 10,  // Much less tilt - more front-facing
                    rotateZ: 0,   // No rotation - text is straight
                    rotateY,
                  }}
                  transition={{
                    duration: 0.6,
                    type: 'spring',
                    stiffness: 100,
                    damping: 20
                  }}
                  onClick={() => goToIndex(index)}
                  whileHover={!isActive ? { scale: scale + 0.05, opacity: opacity + 0.1 } : {}}
                >
                  {/* Main platform */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${layer.gradient}`}
                    style={{
                      boxShadow: isActive
                        ? `0 30px 60px rgba(0,0,0,0.5), 0 0 40px ${layer.glowColor}`
                        : '0 20px 40px rgba(0,0,0,0.3)',
                      transform: 'translateZ(0)'
                    }}
                  >
                    {/* Grid overlay */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-20"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
                        `,
                        backgroundSize: '25px 25px'
                      }}
                    />

                    {/* Glowing border */}
                    <div className={`absolute inset-0 rounded-2xl border-2 ${isActive ? 'border-white/40' : 'border-white/20'}`} />

                    {/* Pulsing inner border */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-3 rounded-xl border border-white/30"
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}

                    {/* Content - now readable without counter-rotation */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-white mb-4 shadow-lg">
                        {layer.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-white drop-shadow-lg mb-1">
                        {layer.name}
                      </h4>
                      <p className="text-base text-white/90 font-medium">
                        {layer.subtitle}
                      </p>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-white/50 rounded-tl" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-white/50 rounded-tr" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-white/50 rounded-bl" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-white/50 rounded-br" />
                  </div>

                  {/* 3D depth - bottom edge */}
                  <div
                    className={`absolute bg-gradient-to-b ${layer.gradient}`}
                    style={{
                      width: '300px',
                      height: '15px',
                      bottom: '0',
                      left: '0',
                      transform: 'rotateX(-90deg) translateZ(-7px)',
                      transformOrigin: 'bottom',
                      filter: 'brightness(0.6)',
                      borderRadius: '0 0 16px 16px'
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active layer info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="text-center mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-300 max-w-md mx-auto">
              {layers[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={goToPrev}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {layers.map((layer, index) => (
              <button
                key={layer.name}
                onClick={() => goToIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? `w-8 bg-gradient-to-r ${layer.gradient}`
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
          >
            {isAutoPlaying ? '⏸ Auto-playing' : '▶ Click to auto-play'}
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-8 text-sm">
        {layers.map((layer, index) => (
          <button
            key={layer.name}
            onClick={() => goToIndex(index)}
            className={`flex items-center gap-2 transition-opacity ${
              index === activeIndex ? 'opacity-100' : 'opacity-50 hover:opacity-75'
            }`}
          >
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${layer.gradient}`} />
            <span className="text-gray-400">{layer.subtitle}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EcosystemVisualization;
