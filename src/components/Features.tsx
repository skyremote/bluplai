import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Presentation as PresentationChart, Users, Brain, BarChart3, Zap, ArrowRight, CheckCircle } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  color: string;
}

const features: Feature[] = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "AI-Powered Note Transcription",
    description: "Automatically capture and organize discovery call notes with intelligent summarization.",
    benefits: ["Real-time transcription", "Smart action items", "Auto-organization"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <PresentationChart className="w-8 h-8" />,
    title: "Digital Whiteboard",
    description: "Create interactive diagrams and workflows with collaborative editing capabilities.",
    benefits: ["Real-time collaboration", "Template library", "Export options"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Success Plan Builder",
    description: "Generate comprehensive success plans from customizable templates with AI assistance.",
    benefits: ["Template automation", "KPI tracking", "Milestone management"],
    color: "from-teal-500 to-green-500"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Insights & Recommendations",
    description: "Get intelligent recommendations and predictive insights for customer success.",
    benefits: ["Predictive analytics", "Risk assessment", "Opportunity identification"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Real-time Analytics",
    description: "Track customer health metrics and engagement with comprehensive dashboards.",
    benefits: ["Health scoring", "Engagement metrics", "Custom reporting"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Universal Integrations",
    description: "Seamlessly connect with Salesforce, Microsoft 365, Google Workspace, and more.",
    benefits: ["Bi-directional sync", "API framework", "Webhook support"],
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
            <span className="text-sm text-gray-300">Platform Features</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Everything You Need in
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              One Platform
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Consolidate your customer success workflow with AI-powered tools that integrate seamlessly 
            with your existing business systems.
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
              
              {/* CTA */}
              <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;