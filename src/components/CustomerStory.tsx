import React, { useEffect, useRef, useState } from 'react';
import { Quote, ArrowRight, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import ShinyText from './ShinyText';

const CustomerStory: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: "The Challenge",
      description: "Sarah, a Customer Success Manager, was overwhelmed by scattered notes across multiple tools and spending 70% of her time on admin tasks.",
      icon: <Clock className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "The Solution",
      description: "She implemented Bluplai's AI-powered platform, consolidating all her workflows and automating note-taking and success plan generation.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "The Results",
      description: "Within one quarter, Sarah reduced admin work by 70%, delivered success plans 10x faster, and improved customer retention by 25%.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Auto-progress through steps
            let stepIndex = 0;
            const interval = setInterval(() => {
              setCurrentStep(stepIndex);
              stepIndex++;
              if (stepIndex >= steps.length) {
                clearInterval(interval);
              }
            }, 1500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" className="py-20 px-6 relative" ref={storyRef}>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl float-reverse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <Quote className="w-4 h-4 text-purple-400" />
            <ShinyText text="Customer Success Story" className="text-sm text-gray-300" speed={6} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            From Overwhelmed to
            <span className="block bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Optimized
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Sarah transformed her customer success workflow and achieved remarkable results 
            with Bluplai's AI-powered platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Timeline */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible && index <= currentStep
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-30 translate-x-4'
                }`}
                style={{ transitionDelay: `${index * 500}ms` }}
              >
                {/* Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-gray-600 to-transparent"></div>
                )}
                
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white flex-shrink-0 ${
                    index <= currentStep ? 'scale-100' : 'scale-75'
                  } transition-transform duration-500`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Customer Quote */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="glass rounded-3xl p-8 relative">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-purple-400 mb-6" />
              
              {/* Quote Text */}
              <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                "Bluplai transformed how I work with customers. I went from drowning in admin tasks 
                to focusing on what truly matters—building relationships and driving success."
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 flex items-center justify-center text-white text-xl font-bold">
                  S
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">Sarah Mitchell</div>
                  <div className="text-gray-400">Senior Customer Success Manager</div>
                  <div className="text-purple-400 text-sm">Enterprise SaaS Company</div>
                </div>
              </div>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">70%</div>
                  <div className="text-sm text-gray-400">Less Admin</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">10x</div>
                  <div className="text-sm text-gray-400">Faster Plans</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">25%</div>
                  <div className="text-sm text-gray-400">Better Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to transform your customer success workflow?</p>
          <button className="group bg-gradient-to-r from-purple-500 to-teal-600 px-8 py-4 rounded-full text-white font-medium text-lg hover:from-purple-600 hover:to-teal-700 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto">
            <span>Start Your Success Story</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerStory;