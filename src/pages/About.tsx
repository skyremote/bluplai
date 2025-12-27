import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-200 hover:bg-white/10 transition-colors"
          >
            <span aria-hidden>←</span>
            <span>Back to Home</span>
          </Link>
        </div>

        <motion.header
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent italic">
            About Us
          </h1>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg">
            We're building a movement toward intelligent work, purposeful innovation, and a future shaped by thoughtful technology — powered by people.
          </p>
        </motion.header>

        {/* Founders Section */}
        <motion.section
          className="mb-16"
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-12 md:gap-16">
              {/* Daniel */}
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="relative group mb-4">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/20">
                    <img
                      src="/plaier-innovator.png"
                      alt="Daniel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 italic">DANIEL</h3>
                <p className="text-gray-300 text-sm mt-1 italic">
                  The AI mechanic,<br />makes everything work with AI
                </p>
                <p className="text-cyan-400 text-sm mt-3 italic">
                  He will help you define the<br />How & What with AI
                </p>
              </div>

              {/* Leandro */}
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="relative group mb-4">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-500/30 blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/20">
                    <img
                      src="/plaier-creator.png"
                      alt="Leandro"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 italic">LEANDRO</h3>
                <p className="text-gray-300 text-sm mt-1 italic">
                  The AI strategist,<br />shaping elegant AI strategies
                </p>
                <p className="text-cyan-400 text-sm mt-3 italic">
                  He will help you define the<br />Why of AI
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why, How, What */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur p-8"
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-pink-400" />
              <h2 className="text-2xl font-bold text-white">Why</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We believe AI should feel human. The future belongs to people who challenge the old way of working — replacing complexity with clarity, and noise with intelligence.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur p-8"
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">How</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We design AI that is minimalist, intuitive, and built around people. Processes and tools that understand you, lighten the load, and unlock the potential inside your team.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur p-8"
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">What</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A new kind of ecosystem where enablement and community move as one — simple, smart, and beautifully connected. Ready to build the future with bluplai?
            </p>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.section
          className="text-center"
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur p-8">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
              Are you a Plaier?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's be in touch and build something meaningful together.
            </p>
            <a
              href={`mailto:dw@bluplai.com,llc@bluplai.com?subject=${encodeURIComponent('Are you a Plaier?')}&body=${encodeURIComponent('Hi BluplAI team,\n\nI\'m interested in joining the movement.')}`}
              className="inline-flex items-center rounded-full bg-cyan-400/20 px-6 py-3 text-cyan-300 hover:bg-cyan-400/30 transition-colors border border-cyan-300/40"
            >
              Get in Touch
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default About;
