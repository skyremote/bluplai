import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, Calculator, Play, Wrench, Expand, Sparkles } from 'lucide-react';
import ShinyText from './ShinyText';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  items: string[];
  subtitle: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: <Compass className="w-6 h-6" />,
    title: "UNDERSTAND...",
    items: [
      "Business Snapshot templates",
      "Discovery cards",
      "Summary slides",
      "Digital assessments & surveys",
      "Customer insight reports",
      "Stakeholder maps"
    ],
    subtitle: "...context, goals, and constraints"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "DISCOVER...",
    items: [
      "Solutions matrix",
      "Value drivers & outcomes templates",
      "Process & workflow diagrams",
      "Roadmap templates",
      "Offerings cards",
      "Digital playbooks",
      "Interview and workshop templates"
    ],
    subtitle: "...needs, challenges, and opportunities"
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "EVALUATE...",
    items: [
      "ROI templates",
      "Dynamic infographic templates",
      "Dynamic presentations",
      "Comparison and decision templates"
    ],
    subtitle: "...solution fit, impact, and business values"
  },
  {
    icon: <Play className="w-6 h-6" />,
    title: "SET-UP...",
    items: [
      "Dynamic project trackers",
      "Implementation plans",
      "Configurations",
      "Readiness checklists"
    ],
    subtitle: "...plan, align, and launch the solution"
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "ADOPT...",
    items: [
      "Success plans",
      "Digital playbooks",
      "Training modules",
      "Enablement guides",
      "Adoption dashboards"
    ],
    subtitle: "...of solutions, engagement, and value realization"
  },
  {
    icon: <Expand className="w-6 h-6" />,
    title: "EXPAND...",
    items: [
      "Growth and expansion plans",
      "Account playbooks",
      "Outcome tracking",
      "Value realisation reports",
      "Customer case study templates"
    ],
    subtitle: "...impact, growth, and partnership"
  }
];

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <ShinyText
              text="Our Process"
              speed={6}
              className="text-sm text-gray-300"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Work With You
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology to help you understand, build, and scale AI solutions.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Card */}
              <div className="h-full p-6 rounded-2xl border-2 border-yellow-400/30 bg-gray-900/60 backdrop-blur hover:border-yellow-400/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-yellow-400 italic mb-4">
                  {step.title}
                </h3>

                {/* Items List */}
                <ul className="space-y-2 mb-6">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-yellow-300/90 text-sm flex items-start">
                      <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-yellow-400 flex-shrink-0"></span>
                      <span className="italic">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Subtitle */}
                <p className="text-yellow-400/70 text-sm italic mt-auto">
                  {step.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
