import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Send, Check, Lightbulb, Sparkles } from 'lucide-react';

const commonProblems = [
  'Automate repetitive tasks',
  'Improve team collaboration',
  'Make better decisions faster',
  'Create content efficiently',
  'Analyze data insights',
  'Streamline workflows'
];

const ProblemSolver: React.FC = () => {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [customProblem, setCustomProblem] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleSubmit = () => {
    if (selectedProblem || customProblem.trim()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelectedProblem(null);
    setCustomProblem('');
    setSubmitted(false);
    setShowCustomInput(false);
  };

  const finalProblem = showCustomInput ? customProblem : selectedProblem;

  return (
    <div className="w-full">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          What is the biggest problem{' '}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            YOU
          </span>{' '}
          want to solve with AI?
        </h3>
        <p className="text-gray-400">Select an option or tell us your unique challenge</p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Problem Options */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {commonProblems.map((problem, index) => (
                <motion.button
                  key={problem}
                  onClick={() => {
                    setSelectedProblem(problem);
                    setShowCustomInput(false);
                  }}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedProblem === problem && !showCustomInput
                      ? 'border-yellow-400/50 bg-yellow-400/20 text-yellow-300'
                      : 'border-white/10 bg-gray-900/40 text-gray-300 hover:border-white/20 hover:bg-gray-900/60'
                  }`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {selectedProblem === problem && !showCustomInput && (
                    <Check className="w-4 h-4 inline mr-2" />
                  )}
                  {problem}
                </motion.button>
              ))}

              {/* Custom Option Toggle */}
              <motion.button
                onClick={() => {
                  setShowCustomInput(true);
                  setSelectedProblem(null);
                }}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  showCustomInput
                    ? 'border-purple-400/50 bg-purple-400/20 text-purple-300'
                    : 'border-white/10 bg-gray-900/40 text-gray-300 hover:border-white/20 hover:bg-gray-900/60'
                }`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: commonProblems.length * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Lightbulb className="w-4 h-4 inline mr-2" />
                Something else...
              </motion.button>
            </div>

            {/* Custom Input */}
            <AnimatePresence>
              {showCustomInput && (
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="max-w-xl mx-auto">
                    <textarea
                      value={customProblem}
                      onChange={(e) => setCustomProblem(e.target.value)}
                      placeholder="Tell us about your unique challenge..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/60 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 resize-none"
                      rows={3}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                onClick={handleSubmit}
                disabled={!selectedProblem && !customProblem.trim()}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedProblem || customProblem.trim()
                    ? 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-white border border-yellow-400/30 hover:from-yellow-400/30 hover:to-orange-400/30'
                    : 'bg-gray-800 text-gray-500 border border-white/5 cursor-not-allowed'
                }`}
                whileHover={selectedProblem || customProblem.trim() ? { scale: 1.05 } : {}}
                whileTap={selectedProblem || customProblem.trim() ? { scale: 0.95 } : {}}
              >
                <Send className="w-5 h-5" />
                <span>Share My Challenge</span>
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            className="rounded-2xl border border-green-400/30 bg-gradient-to-r from-green-400/10 to-teal-400/10 p-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-400/20 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30, delay: 0.2 }}
            >
              <Sparkles className="w-8 h-8 text-green-400" />
            </motion.div>

            <h4 className="text-2xl font-bold text-white mb-2">Great choice!</h4>
            <p className="text-gray-300 mb-4">
              You want to: <span className="text-yellow-400 font-medium">{finalProblem}</span>
            </p>
            <p className="text-gray-400 text-sm mb-6">
              This is exactly what Bluplai is designed for. We're building AI tools that make this effortless.
            </p>

            <button
              onClick={handleReset}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Choose a different challenge
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProblemSolver;
