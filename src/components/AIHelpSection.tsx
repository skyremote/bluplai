import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, BookOpen, Presentation, Wand2, Video, Lightbulb, Users } from 'lucide-react';
import ShinyText from './ShinyText';

const helpServices = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Understanding all the AI terminologies...",
    subtitle: "there are lots",
  },
  {
    icon: <Presentation className="w-5 h-5" />,
    title: "Creating Amazing AI presentations",
    subtitle: "",
  },
  {
    icon: <Wand2 className="w-5 h-5" />,
    title: "Supporting with AI prompting",
    subtitle: "",
  },
  {
    icon: <Video className="w-5 h-5" />,
    title: "AI Images & AI Video Creation",
    subtitle: "",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "AI Discovery & Workshop Sessions",
    subtitle: "",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "AI apps ideation and definition",
    subtitle: "",
  },
];

const AIHelpSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (message.trim()) {
      setSubmitted(true);
      // Could integrate with email or form service here
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Struggling with AI Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-yellow-400" />
            <ShinyText
              text="We're Here to Help"
              speed={6}
              className="text-sm text-gray-300"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Struggling with AI?
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-8">Tell us more.</p>

          {!showForm && !submitted && (
            <motion.button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-4 text-gray-900 font-semibold hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5" />
              Share Your Challenge
            </motion.button>
          )}

          {showForm && !submitted && (
            <motion.div
              className="max-w-xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What AI challenge are you facing?"
                className="w-full px-6 py-4 rounded-2xl bg-gray-800/60 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 resize-none"
                rows={4}
              />
              <div className="flex gap-3 mt-4 justify-center">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 rounded-full border border-white/20 text-gray-300 hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold hover:opacity-90 transition-opacity"
                >
                  Send
                </button>
              </div>
            </motion.div>
          )}

          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 rounded-full bg-green-500/20 border border-green-500/30 px-6 py-3 text-green-400"
            >
              <Sparkles className="w-5 h-5" />
              Thanks! We'll be in touch soon.
            </motion.div>
          )}
        </motion.div>

        {/* We can also help you out with... */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
            We can also help you out with...
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {helpServices.map((service, index) => (
              <motion.div
                key={index}
                className="group p-5 rounded-2xl border border-white/10 bg-gray-900/40 hover:border-yellow-400/30 hover:bg-gray-800/60 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400/20 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <p className="text-white font-medium leading-snug">
                      {service.title}
                    </p>
                    {service.subtitle && (
                      <p className="text-gray-400 text-sm mt-1">{service.subtitle}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href={`mailto:dw@bluplai.com?subject=${encodeURIComponent('I need help with AI')}`}
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Get in touch to discuss your needs</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIHelpSection;
