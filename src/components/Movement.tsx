import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Users, Calendar, UserPlus, Sparkles, Globe, Award, Heart } from 'lucide-react';
import ShinyText from './ShinyText';

interface MovementItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  subcategories: string[];
  color: string;
  borderColor: string;
}

const movementItems: MovementItem[] = [
  {
    icon: <Activity className="w-8 h-8" />,
    title: "The Movement",
    description: "Join a global community shaping the future of AI-human collaboration. Be part of something bigger.",
    subcategories: ["Exclusive", "Ideas with AI spirit"],
    color: "from-orange-400 to-yellow-500",
    borderColor: "border-orange-400/30"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Partners & Creators",
    description: "Collaborate with visionaries, builders, and thought leaders worldwide. Create together.",
    subcategories: ["Open collaboration", "Thought Leadership"],
    color: "from-purple-400 to-pink-500",
    borderColor: "border-purple-400/30"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Events & Conversations",
    description: "Engage in meaningful dialogues that spark innovation, connection, and growth.",
    subcategories: ["Thought Leadership", "Open collaboration"],
    color: "from-cyan-400 to-blue-500",
    borderColor: "border-cyan-400/30"
  },
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: "Join Us",
    description: "Become part of a community where monetization meets belonging. Your journey starts here.",
    subcategories: ["Monetization & Belonging", "Exclusive"],
    color: "from-teal-400 to-green-500",
    borderColor: "border-teal-400/30"
  }
];

const Movement: React.FC = () => {
  return (
    <section id="movement" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <Activity className="w-4 h-4 text-orange-400" />
            <ShinyText
              text="Community, Collaboration, Future Vision"
              speed={6}
              className="text-sm text-gray-300"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Join the
            <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Movement
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with forward-thinking individuals and teams building the future of intelligent work.
            Together, we're creating something meaningful.
          </p>
        </motion.div>

        {/* Movement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {movementItems.map((item, index) => (
            <motion.div
              key={item.title}
              className={`relative p-6 rounded-2xl border ${item.borderColor} bg-gray-900/60 backdrop-blur group hover:border-white/20 transition-all duration-300`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-4`}>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>

              {/* Subcategories */}
              <div className="flex flex-wrap gap-2">
                {item.subcategories.map((sub) => (
                  <span
                    key={sub}
                    className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href={`mailto:dw@bluplai.com?subject=${encodeURIComponent('I want to join the Movement!')}&body=${encodeURIComponent('Hi Bluplai team,\n\nI\'m interested in joining the movement and learning more about how I can contribute.\n\n')}`}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-400/20 to-purple-400/20 px-8 py-4 text-lg font-semibold text-white hover:from-orange-400/30 hover:to-purple-400/30 transition-all duration-300 border border-white/10 hover:border-white/20"
          >
            <span>Be Part of the Movement</span>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Movement;
