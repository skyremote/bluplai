import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Heart, Palette, Compass, Target, Zap } from 'lucide-react';
import ShinyText from './ShinyText';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const values: Value[] = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Simplicity First",
    description: "We remove complexity to make AI accessible to everyone.",
    color: "text-cyan-400"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Human at the Center",
    description: "AI should elevate people — not replace them.",
    color: "text-pink-400"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Intelligent Design",
    description: "We craft elegant systems that work together seamlessly.",
    color: "text-purple-400"
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: "Continuous Curiosity",
    description: "We explore, learn, and push boundaries with purpose.",
    color: "text-teal-400"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Clarity into Action",
    description: "Insight only matters when it leads to meaningful progress.",
    color: "text-orange-400"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Real-World Impact",
    description: "We focus on practical, measurable outcomes that matter.",
    color: "text-yellow-400"
  }
];

const Benefits: React.FC = () => {
  const [visibleValues, setVisibleValues] = useState<boolean[]>(new Array(values.length).fill(false));
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleValues(prev => {
              const newVisible = [...prev];
              if (!newVisible[index]) {
                newVisible[index] = true;
              }
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const valueElements = valuesRef.current?.querySelectorAll('.value-card');
    valueElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="values" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>

      <div className="max-w-7xl mx-auto relative z-10" ref={valuesRef}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-pink-400" />
            <ShinyText
              text="What We Believe"
              speed={6}
              className="text-sm text-gray-300"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From Platformers to Plaiers — we're building playful, accessible AI processes and solutions for the next generation of Plaiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              data-index={index}
              className={`value-card group relative p-8 rounded-2xl glass hover-lift transition-all duration-700 ${
                visibleValues[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className={`${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {value.icon}
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-3 ${value.color}`}>
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                {value.description}
              </p>

              {/* Pulse Effect */}
              <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${value.color.replace('text-', 'bg-')} blur-xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
