import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import ShinyText from './ShinyText';

const Manifesto: React.FC = () => {
  const lines = [
    { text: "AI isn't the future — people are.", highlight: true },
    { text: "But people need tools that amplify their abilities." },
    { text: "Tools that remove friction, spark creativity, and unlock clarity." },
    { text: "" },
    { text: "Bluplai exists to bring harmony to a world drowning in complexity." },
    { text: "To turn scattered AI tools into one intelligent ecosystem." },
    { text: "To empower teams to automate work, accelerate progress, and build with purpose." },
    { text: "" },
    { text: "We believe AI should feel natural." },
    { text: "It should flow." },
    { text: "It should help us think, create, decide, and connect — effortlessly." },
    { text: "That's why we built Plai:", highlight: true },
    { text: "AI that works with you, for you, and because of you." },
    { text: "" },
    { text: "Bluplai isn't just another tool.", highlight: true },
    { text: "It's a movement toward intelligent work, purposeful innovation," },
    { text: "and a future shaped by thoughtful technology — powered by people." },
  ];

  return (
    <section id="manifesto" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <Flame className="w-4 h-4 text-orange-400" />
            <ShinyText
              text="Our Manifesto"
              speed={6}
              className="text-sm text-gray-300"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              What We Stand For
            </span>
          </h2>
        </motion.div>

        <div className="rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur p-8 md:p-12">
          <div className="space-y-4">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                className={`text-lg md:text-xl leading-relaxed ${
                  line.text === ''
                    ? 'h-4'
                    : line.highlight
                    ? 'text-white font-semibold'
                    : 'text-gray-300'
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {line.text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
