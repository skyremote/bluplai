import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Layer {
  name: string;
  subtitle: string;
  color: string;
  glowColor: string;
  delay: number;
}

const layers: Layer[] = [
  {
    name: 'MovAI',
    subtitle: 'Movement',
    color: 'from-orange-400/80 to-yellow-500/80',
    glowColor: 'orange',
    delay: 0.4
  },
  {
    name: 'NavAIgate',
    subtitle: 'Enablement',
    color: 'from-purple-400/80 to-pink-500/80',
    glowColor: 'purple',
    delay: 0.2
  },
  {
    name: 'Bluplai',
    subtitle: 'Foundation',
    color: 'from-cyan-400/80 to-blue-500/80',
    glowColor: 'cyan',
    delay: 0
  }
];

const EcosystemVisualization: React.FC = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-44 h-44 bg-orange-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 3D Scene Container */}
      <div
        className="relative preserve-3d"
        style={{
          perspective: '1000px',
          perspectiveOrigin: '50% 50%'
        }}
      >
        {/* Isometric container with rotation */}
        <motion.div
          className="relative"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(60deg) rotateZ(-45deg)'
          }}
          animate={{
            rotateZ: isHovered !== null ? -40 : -45,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Stacked Layers */}
          {layers.map((layer, index) => (
            <motion.div
              key={layer.name}
              className="absolute cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                width: '280px',
                height: '280px',
                left: '-140px',
                top: '-140px',
              }}
              initial={{
                opacity: 0,
                translateZ: -100,
                translateY: 50
              }}
              animate={{
                opacity: isVisible ? 1 : 0,
                translateZ: isHovered === index ? (index * 60) + 30 : index * 60,
                translateY: 0,
                scale: isHovered === index ? 1.05 : 1
              }}
              transition={{
                duration: 0.8,
                delay: layer.delay,
                ease: 'easeOut'
              }}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {/* Layer platform */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${layer.color} backdrop-blur-sm border border-white/20 shadow-2xl`}
                style={{
                  boxShadow: isHovered === index
                    ? `0 0 40px ${layer.glowColor}, 0 25px 50px rgba(0,0,0,0.5)`
                    : '0 25px 50px rgba(0,0,0,0.3)'
                }}
              >
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}
                ></div>

                {/* Animated pulse ring */}
                <motion.div
                  className="absolute inset-4 rounded-xl border border-white/30"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: layer.delay
                  }}
                />

                {/* Content */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{
                    transform: 'rotateZ(45deg) rotateX(-60deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <motion.div
                    className="text-center"
                    animate={{
                      y: isHovered === index ? -5 : 0
                    }}
                  >
                    <h4 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                      {layer.name}
                    </h4>
                    <p className="text-sm text-white/80 mt-1">
                      {layer.subtitle}
                    </p>
                  </motion.div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-white/40 rounded-tl"></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-white/40 rounded-tr"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-white/40 rounded-bl"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-white/40 rounded-br"></div>
              </div>

              {/* Side panel (left) */}
              <div
                className={`absolute bg-gradient-to-b ${layer.color} opacity-60`}
                style={{
                  width: '280px',
                  height: '20px',
                  transform: 'rotateX(-90deg) translateZ(10px)',
                  transformOrigin: 'bottom',
                  top: '280px',
                  left: '0'
                }}
              />

              {/* Side panel (right) */}
              <div
                className={`absolute bg-gradient-to-b ${layer.color} opacity-50`}
                style={{
                  width: '20px',
                  height: '280px',
                  transform: 'rotateY(90deg) translateZ(270px)',
                  transformOrigin: 'left',
                  top: '0',
                  left: '0'
                }}
              />
            </motion.div>
          ))}

          {/* Connection beams between layers */}
          {[0, 1].map((i) => (
            <motion.div
              key={`beam-${i}`}
              className="absolute"
              style={{
                width: '4px',
                height: '60px',
                left: '-2px',
                top: '-30px',
                transformStyle: 'preserve-3d',
                transform: `translateZ(${i * 60 + 30}px)`
              }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{
                opacity: isVisible ? 0.6 : 0,
                scaleY: isVisible ? 1 : 0
              }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
            >
              <div className="w-full h-full bg-gradient-to-t from-transparent via-white/50 to-transparent rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/30"
          style={{
            left: `${20 + (i * 10)}%`,
            top: `${15 + (i * 8)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3
          }}
        />
      ))}

      {/* Labels */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-8 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <span className="text-gray-400">Foundation</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
          <span className="text-gray-400">Enablement</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500"></div>
          <span className="text-gray-400">Movement</span>
        </div>
      </div>
    </div>
  );
};

export default EcosystemVisualization;
