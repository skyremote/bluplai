import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Clock, Target, Shield, Users, Sparkles } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  stat: string;
  description: string;
  color: string;
}

const benefits: Benefit[] = [
  {
    icon: <Users className="w-8 h-8" />,
    stat: "10+",
    description: "New workflows and AI-powered tools designed for the next-gen workforce",
    color: "text-blue-400"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    stat: "10+",
    description: "Strategic integrations with the tools businesses already use (Salesforce, Microsoft 365, Google Workspace, and more)",
    color: "text-green-400"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    stat: "100+",
    description: "Teams already transforming customer engagement with Bluplai",
    color: "text-purple-400"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    stat: "60%",
    description: "Reduction in admin time for users through AI-powered automation",
    color: "text-teal-400"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    stat: "10x",
    description: "Faster delivery of professional customer success plans, ROI analyses, and dashboards",
    color: "text-orange-400"
  },
  {
    icon: <Target className="w-8 h-8" />,
    stat: "80%",
    description: "Customer retention rate, driven by value, insight, and seamless workflows",
    color: "text-yellow-400"
  }
];

const Benefits: React.FC = () => {
  const [visibleBenefits, setVisibleBenefits] = useState<boolean[]>(new Array(benefits.length).fill(false));
  const [counters, setCounters] = useState<string[]>(new Array(benefits.length).fill('0'));
  const benefitsRef = useRef<HTMLDivElement>(null);

  const animateCounter = (finalValue: string, index: number) => {
    const isPercentage = finalValue.includes('%');
    const isMultiplier = finalValue.includes('x');
    const isDecimal = finalValue.includes('.');
    
    let numericValue: number;
    let suffix: string;
    
    if (isPercentage) {
      numericValue = parseInt(finalValue.replace('%', ''));
      suffix = '%';
    } else if (isMultiplier) {
      numericValue = parseInt(finalValue.replace('x', ''));
      suffix = 'x';
    } else if (isDecimal) {
      numericValue = parseFloat(finalValue);
      suffix = '';
    } else if (finalValue.includes('+')) {
      numericValue = parseInt(finalValue.replace('+', ''));
      suffix = '+';
    } else {
      numericValue = parseInt(finalValue) || 0;
      suffix = '';
    }

    let current = 0;
    const increment = numericValue / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        current = numericValue;
        clearInterval(timer);
      }
      
      setCounters(prev => {
        const newCounters = [...prev];
        if (isDecimal) {
          newCounters[index] = current.toFixed(1) + suffix;
        } else {
          newCounters[index] = Math.floor(current) + suffix;
        }
        return newCounters;
      });
    }, 30);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleBenefits(prev => {
              const newVisible = [...prev];
              if (!newVisible[index]) {
                newVisible[index] = true;
                // Start counter animation
                setTimeout(() => {
                  animateCounter(benefits[index].stat, index);
                }, index * 200);
              }
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const benefitElements = benefitsRef.current?.querySelectorAll('.benefit-card');
    benefitElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      
      <div className="max-w-7xl mx-auto relative z-10" ref={benefitsRef}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">AI Revolution Impact</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Shaping the Future of
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              AI Work
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Starting with two engineers and a bold idea, our movement now unlocks opportunity for
            forward-thinking businesses and innovators everywhere—helping teams scale from incremental
            gains to 10× outcomes while enabling those around them to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-index={index}
              className={`benefit-card group relative p-8 rounded-2xl glass hover-lift transition-all duration-700 ${
                visibleBenefits[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className={`${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              
              {/* Stat */}
              <div className={`text-5xl md:text-6xl font-bold mb-4 ${benefit.color} counter-animate`}>
                {counters[index]}
              </div>
              
              {/* Description */}
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                {benefit.description}
              </p>
              
              {/* Pulse Effect */}
              <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${benefit.color.replace('text-', 'bg-')} blur-xl`}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;