import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Presentation as PresentationChart, Users, Brain, BarChart3, Zap, CheckCircle } from 'lucide-react';
import ShinyText from './ShinyText';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  color: string;
}

const features: Feature[] = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Plaier Toolkit",
    description: "Master AI with tools designed for the next generation of creative minds and problem solvers.",
    benefits: ["Human-first design", "Intuitive workflows", "Ready-to-use"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Plaier Studio",
    description: "Where creativity meets AI — create interactive experiences that make AI accessible and fun.",
    benefits: ["Playful learning", "Interactive tools", "Intuitive interfaces"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "AI Enablement Hub",
    description: "Empower your team to work with AI confidently. Train users, ensure quality, and build trust.",
    benefits: ["Team onboarding", "Quality assurance", "Trust building"],
    color: "from-teal-500 to-green-500"
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Dynamic Facilitator",
    description: "Tools for curious minds to facilitate breakthrough conversations and meaningful collaborations.",
    benefits: ["Conversation starters", "Brainstorm tools", "Collaboration magic"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Impact Tracker",
    description: "Measure your contribution to the movement with dashboards that tell your story.",
    benefits: ["Impact metrics", "Progress visibility", "Achievement milestones"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: <PresentationChart className="w-8 h-8" />,
    title: "Dale Command Center",
    description: "The spirit behind everything we build: \"Dale!\" means \"go for it!\" — fusing creativity, action, and bold collaborative progress.",
    benefits: ["Collaborative mindset", "Fast-moving culture", "Progress over perfection"],
    color: "from-yellow-500 to-orange-500"
  }
];

const Features: React.FC = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>(new Array(features.length).fill(false));
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleFeatures(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const featureElements = featuresRef.current?.querySelectorAll('.feature-card');
    featureElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10" ref={featuresRef}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <ShinyText
              text="Tools for the Movement"
              speed={6}
              className="text-sm text-gray-300"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Built for
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Plaiers
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're creating the tools that will define the next generation of work.
            Simple, playful, and designed for people who want to make an impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card group relative p-8 rounded-2xl glass hover-lift cursor-pointer transition-all duration-500 ${
                visibleFeatures[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;