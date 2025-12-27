import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Play, Bell, Bot } from 'lucide-react';
import ShinyText from './ShinyText';

const Podcast: React.FC = () => {
  return (
    <section id="podcast" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <Mic className="w-4 h-4 text-green-400" />
            <ShinyText
              text="Listen & Learn"
              speed={6}
              className="text-sm text-gray-300"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Podcast
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Conversations about AI, people, and the future of work.
            Stories from Plaiers who are shaping what comes next.
          </p>
        </motion.div>

        {/* Podcast Cover Art Placeholder */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative">
            {/* Main podcast cover placeholder */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-green-400/20 to-teal-400/20 border border-green-400/30 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <Mic className="w-20 h-20 mx-auto text-green-400/50 mb-4" />
                <p className="text-gray-400 text-sm font-medium">Podcast Cover Art</p>
                <p className="text-gray-500 text-xs mt-1">Placeholder</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-green-400/10 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-teal-400/10 blur-xl"></div>

            {/* Robot mascot placeholder */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-green-400/30 to-teal-400/30 border border-green-400/40 flex items-center justify-center">
              <Bot className="w-10 h-10 text-green-400/70" />
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          className="rounded-2xl border border-green-400/20 bg-gray-900/60 backdrop-blur p-8 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Play Icon */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-green-400/20 to-teal-400/20 border border-green-400/30 flex items-center justify-center">
            <Play className="w-10 h-10 text-green-400 ml-1" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Coming Soon
          </h3>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            We're preparing something special. Join our community to be the first to know when we launch.
          </p>

          {/* Notify Button */}
          <a
            href={`mailto:dw@bluplai.com?subject=${encodeURIComponent('Notify me about the Bluplai Podcast')}&body=${encodeURIComponent('Hi Bluplai team,\n\nPlease let me know when the podcast launches!')}`}
            className="inline-flex items-center gap-2 rounded-full bg-green-400/20 px-6 py-3 text-green-300 hover:bg-green-400/30 transition-colors border border-green-300/40"
          >
            <Bell className="w-5 h-5" />
            <span>Notify Me</span>
          </a>

          {/* Future Topics Preview */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-4">Topics we'll explore:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['AI & Humanity', 'Future of Work', 'Plaier Stories', 'Tech Philosophy', 'Building in Public'].map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Podcast;
