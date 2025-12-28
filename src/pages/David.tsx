import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const David: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  // App logos for the chaos visualization
  const chaosApps = [
    { name: 'Zoom', color: '#2D8CFF', x: '10%', y: '15%', delay: 0 },
    { name: 'Jira', color: '#0052CC', x: '75%', y: '10%', delay: 0.2 },
    { name: 'Slack', color: '#4A154B', x: '5%', y: '45%', delay: 0.4 },
    { name: 'Box', color: '#0061D5', x: '85%', y: '35%', delay: 0.6 },
    { name: 'Notion', color: '#000000', x: '20%', y: '75%', delay: 0.8 },
    { name: 'Trello', color: '#0079BF', x: '70%', y: '70%', delay: 1 },
    { name: 'Salesforce', color: '#00A1E0', x: '45%', y: '5%', delay: 1.2 },
    { name: 'HubSpot', color: '#FF7A59', x: '90%', y: '60%', delay: 1.4 },
    { name: 'Confluence', color: '#172B4D', x: '8%', y: '70%', delay: 1.6 },
    { name: 'Teams', color: '#6264A7', x: '60%', y: '85%', delay: 1.8 },
    { name: 'Autodesk', color: '#0696D7', x: '35%', y: '80%', delay: 2 },
    { name: 'Zapier', color: '#FF4A00', x: '15%', y: '30%', delay: 2.2 },
  ];

  const renderSlide = (index: number) => {
    switch (index) {
      case 0:
        // Cover Slide
        return (
          <div className="h-full w-full flex items-center justify-center relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 text-center px-8">
              <motion.img
                src="/bluplai-logo-white.png"
                alt="Plai"
                className="h-20 mx-auto mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              />
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Turn Complexity
                </span>
                <br />
                <span className="text-white">into Clarity.</span>
              </motion.h1>

              {/* Animated eye visual */}
              <motion.div
                className="mt-12 relative w-32 h-32 mx-auto"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="absolute inset-0 rounded-full border-4 border-cyan-400/50 animate-ping" />
                <div className="absolute inset-2 rounded-full border-2 border-cyan-400 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );

      case 1:
        // Overview Slide - What/Why/Ask
        return (
          <div className="h-full w-full flex items-center justify-center relative overflow-hidden px-8">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />

            <div className="relative z-10 max-w-6xl w-full">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                We are building the{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI-native operating system
                </span>
                <br />for customer value.
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'THE WHAT',
                    icon: '🏗️',
                    content: 'An AI-powered collaboration platform that unifies the entire customer lifecycle—from discovery to renewal.',
                    gradient: 'from-cyan-500 to-blue-500'
                  },
                  {
                    title: 'THE WHY',
                    icon: '🔄',
                    content: 'We eliminate the chaos of fragmented tools, saving teams 20-30% of admin time and boosting value delivery.',
                    gradient: 'from-blue-500 to-purple-500'
                  },
                  {
                    title: 'THE ASK',
                    icon: '🚀',
                    content: "We're seeking an accelerator partner to help us move from idea to MVP—gaining mentorship, resources, and momentum to build and validate with our first design partners.",
                    gradient: 'from-purple-500 to-pink-500'
                  }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="relative group"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity`} />
                    <div className="relative bg-gray-800/50 backdrop-blur border border-white/10 rounded-2xl p-8 h-full">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.highlight ? (
                          <>
                            {item.content.split(item.highlight)[0]}
                            <span className="text-amber-400 font-bold">{item.highlight}</span>
                            {item.content.split(item.highlight)[1]}
                          </>
                        ) : (
                          item.content
                        )}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        // Problem Slide - Chaos visualization
        return (
          <div className="h-full w-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900/10 to-gray-900" />

            {/* Chaotic lines background */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              {[...Array(20)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M ${Math.random() * 100} ${Math.random() * 100} Q ${Math.random() * 100} ${Math.random() * 100}, ${Math.random() * 100} ${Math.random() * 100}`}
                  stroke="rgba(100,100,100,0.3)"
                  strokeWidth="0.3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.1 }}
                />
              ))}
            </svg>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 px-8 max-w-7xl">
              {/* Chaos visualization */}
              <motion.div
                className="relative w-full lg:w-1/2 h-[500px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Central confused person */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-5xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    😰
                  </motion.div>
                </div>

                {/* Floating app badges */}
                {chaosApps.map((app, i) => (
                  <motion.div
                    key={app.name}
                    className="absolute px-3 py-1 rounded-full text-white text-sm font-medium shadow-lg"
                    style={{
                      backgroundColor: app.color,
                      left: app.x,
                      top: app.y,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: [0, Math.random() * 20 - 10, 0],
                      y: [0, Math.random() * 20 - 10, 0]
                    }}
                    transition={{
                      opacity: { duration: 0.5, delay: app.delay },
                      scale: { duration: 0.5, delay: app.delay },
                      x: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
                      y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {app.name}
                  </motion.div>
                ))}

                {/* Chaotic connection lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
                  {chaosApps.map((app, i) => (
                    <motion.line
                      key={`line-${i}`}
                      x1="50%"
                      y1="50%"
                      x2={app.x}
                      y2={app.y}
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: app.delay + 0.5 }}
                    />
                  ))}
                </svg>
              </motion.div>

              {/* Problem text */}
              <motion.div
                className="lg:w-1/2 text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  The best teams are{' '}
                  <span className="text-red-400">drowning</span> in a sea of disconnected apps.
                </h2>

                <p className="text-xl text-gray-400 mb-8">
                  This fragmentation creates critical <span className="text-amber-400 font-semibold">'value gaps'</span>:
                </p>

                <div className="space-y-6">
                  {[
                    { title: 'Lost in Translation', desc: 'Insights from sales discovery never make it to the customer success team.' },
                    { title: 'Broken Promises', desc: 'Success plans are disconnected from the original business case.' },
                    { title: 'Wasted Time', desc: 'Teams spend more time managing tools than engaging customers.' }
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.2 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white">{item.title}:</span>{' '}
                        <span className="text-gray-400">{item.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        );

      case 3:
        // Blueprint Solution Slide - From Fragmented to Unified
        return (
          <div className="h-full w-full flex items-center justify-center relative overflow-hidden px-8">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-900/5 to-gray-900" />

            <div className="relative z-10 max-w-7xl w-full">
              {/* Header */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Our Solution:{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    AI-Powered 'Blueprints'
                  </span>
                </h2>
                <p className="text-lg text-gray-400">
                  Bluplai replaces chaos with clarity through modular, intelligent workflows that unify the entire customer journey.
                </p>
              </motion.div>

              {/* Main visual - From Fragmented to Unified */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
                {/* Left - Fragmented */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="text-lg font-semibold text-gray-400 mb-4">From a Fragmented Lifecycle...</p>
                  <div className="relative w-48 h-48 mx-auto">
                    {/* Chaotic elements */}
                    {['📄', '🔧', '📊', '📝', '💼', '📁'].map((icon, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-2xl"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          rotate: [0, 10, -10, 0],
                          x: [0, 5, -5, 0],
                          y: [0, -5, 5, 0],
                        }}
                        transition={{
                          duration: 2 + Math.random(),
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      >
                        {icon}
                      </motion.div>
                    ))}
                    {/* Center hand */}
                    <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-60">
                      🤚
                    </div>
                  </div>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  className="text-cyan-400"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <svg width="80" height="40" viewBox="0 0 80 40" className="hidden lg:block">
                    <defs>
                      <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                    <path d="M0 20 L60 20 L50 10 M60 20 L50 30" stroke="url(#arrowGrad)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="lg:hidden text-4xl">↓</div>
                </motion.div>

                {/* Right - Unified Journey (Two Overlapping Circles) */}
                <motion.div
                  className="text-center flex-1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-lg font-semibold text-gray-400 mb-4">...To a Unified Journey.</p>

                  {/* Two overlapping circles like the original */}
                  <div className="relative w-[340px] h-[220px] mx-auto">
                    {/* SVG with two overlapping circles */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 340 220">
                      <defs>
                        <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      {/* Left circle */}
                      <circle cx="110" cy="110" rx="85" ry="85" stroke="url(#circleGrad)" strokeWidth="2.5" fill="none" />
                      {/* Right circle */}
                      <circle cx="230" cy="110" rx="85" ry="85" stroke="url(#circleGrad)" strokeWidth="2.5" fill="none" />
                    </svg>

                    {/* Animated center at intersection */}
                    <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                      {/* Outer pulsing ring */}
                      <motion.div
                        className="absolute inset-0 w-16 h-16 -m-8 rounded-full border-2 border-cyan-400/30"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      {/* Second pulsing ring */}
                      <motion.div
                        className="absolute inset-0 w-16 h-16 -m-8 rounded-full border-2 border-cyan-400/20"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      />
                      {/* Core gradient orb */}
                      <motion.div
                        className="w-12 h-12 -m-6 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-lg shadow-cyan-500/50"
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(34, 211, 238, 0.5)',
                            '0 0 40px rgba(34, 211, 238, 0.8)',
                            '0 0 20px rgba(34, 211, 238, 0.5)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {/* Inner spinning ring */}
                        <motion.div
                          className="absolute inset-1 rounded-full border border-white/30"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Center dot */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-white/80" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Left circle stages: UNDERSTAND (top), EXPAND (left), ADOPT (bottom) */}
                    {/* Right circle stages: DISCOVER (top), EVALUATE (right), SET-UP (bottom) */}

                    {/* UNDERSTAND - top of left circle */}
                    <motion.div className="absolute flex flex-col items-center" style={{ left: '32%', top: '0%', transform: 'translate(-50%, -50%)' }}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                      <span className="text-xl">💡</span>
                      <span className="text-[11px] font-bold text-cyan-400">UNDERSTAND</span>
                    </motion.div>

                    {/* EXPAND - left of left circle */}
                    <motion.div className="absolute flex flex-col items-center" style={{ left: '5%', top: '50%', transform: 'translate(-50%, -50%)' }}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                      <span className="text-xl">🚀</span>
                      <span className="text-[11px] font-bold text-cyan-400">EXPAND</span>
                    </motion.div>

                    {/* ADOPT - bottom of left circle */}
                    <motion.div className="absolute flex flex-col items-center" style={{ left: '32%', top: '100%', transform: 'translate(-50%, -50%)' }}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                      <span className="text-xl">🤝</span>
                      <span className="text-[11px] font-bold text-cyan-400">ADOPT</span>
                    </motion.div>

                    {/* DISCOVER - top of right circle */}
                    <motion.div className="absolute flex flex-col items-center" style={{ left: '68%', top: '0%', transform: 'translate(-50%, -50%)' }}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                      <span className="text-xl">🧠</span>
                      <span className="text-[11px] font-bold text-cyan-400">DISCOVER</span>
                    </motion.div>

                    {/* EVALUATE - right of right circle */}
                    <motion.div className="absolute flex flex-col items-center" style={{ left: '95%', top: '50%', transform: 'translate(-50%, -50%)' }}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                      <span className="text-xl">⚖️</span>
                      <span className="text-[11px] font-bold text-cyan-400">EVALUATE</span>
                    </motion.div>

                    {/* SET-UP - bottom of right circle */}
                    <motion.div className="absolute flex flex-col items-center" style={{ left: '68%', top: '100%', transform: 'translate(-50%, -50%)' }}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                      <span className="text-xl">🔧</span>
                      <span className="text-[11px] font-bold text-cyan-400">SET-UP</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* What is a Blueprint box */}
              <motion.div
                className="max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="bg-gray-800/60 backdrop-blur border border-cyan-400/30 rounded-xl p-4 text-center">
                  <h3 className="font-bold text-white mb-1">What is a Blueprint?</h3>
                  <p className="text-sm text-gray-400">
                    A modular digital framework that brings together notes, workflows, success plans, and ROI models into a single, collaborative source of truth.
                  </p>
                </div>
              </motion.div>

              {/* Bottom 3 features */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Unified Workspace',
                    desc: 'Every stakeholder, from sales to success, collaborates with the same context.',
                    icon: '🔗'
                  },
                  {
                    title: 'AI-Driven Insights',
                    desc: 'Automate summaries, suggest next-best actions, and predict opportunities.',
                    icon: '🧠'
                  },
                  {
                    title: 'Repeatable Excellence',
                    desc: 'Standardize best practices to scale success across the entire organization.',
                    icon: '✅'
                  }
                ].map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                  >
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <h3 className="font-bold text-cyan-400 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        // Solution Slide - Features Grid
        return (
          <div className="h-full w-full flex items-center justify-center relative overflow-hidden px-8">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-900/10 to-gray-900" />

            <div className="relative z-10 max-w-6xl w-full">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Plai
                  </span>{' '}
                  unifies the entire workflow
                </h2>
                <p className="text-xl text-gray-400">
                  A single platform built on modular 'Blueprints' that connect and power every stage
                </p>
              </motion.div>

              {/* Feature cards in 2x2 grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'AI-Powered Discovery',
                    desc: 'Capture needs and map value dynamically.',
                    icon: '🔍',
                    gradient: 'from-cyan-500 to-blue-500'
                  },
                  {
                    title: 'Live Success Plans',
                    desc: 'Align teams on goals and track progress in real-time.',
                    icon: '📋',
                    gradient: 'from-blue-500 to-purple-500'
                  },
                  {
                    title: 'Content Generation',
                    desc: 'Instantly create summaries, reports, and presentations.',
                    icon: '✨',
                    gradient: 'from-purple-500 to-pink-500'
                  },
                  {
                    title: 'ROI & Value Models',
                    desc: 'Continuously prove the impact of your solution.',
                    icon: '📊',
                    gradient: 'from-pink-500 to-orange-500'
                  }
                ].map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="relative group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity`} />
                    <div className="relative bg-gray-800/60 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-colors h-full">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        // Team Slide
        return (
          <div className="h-full w-full flex items-center justify-center relative overflow-hidden px-8">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />

            <div className="relative z-10 max-w-5xl w-full">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                A founding team built on the duality of{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  vision and execution.
                </span>
              </motion.h2>

              <motion.p
                className="text-center text-2xl italic text-gray-400 mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                "Leandro is imagination, Daniel is motion."
              </motion.p>

              <div className="grid md:grid-cols-2 gap-12">
                {[
                  {
                    name: 'Leandro Licausi',
                    title: 'The Visionary',
                    desc: 'Defines the "why." Shapes the strategy, narrative, and user experience.',
                    image: '/plaier-creator.png',
                    gradient: 'from-cyan-500 to-blue-500'
                  },
                  {
                    name: 'Daniel Wright',
                    title: 'The Architect',
                    desc: 'Builds the "how." Makes the vision real through AI, code, and frameworks.',
                    image: '/plaier-innovator.png',
                    gradient: 'from-purple-500 to-pink-500'
                  }
                ].map((person, i) => (
                  <motion.div
                    key={person.name}
                    className="text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                  >
                    <div className="relative inline-block mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${person.gradient} rounded-full blur-2xl opacity-30`} />
                      <img
                        src={person.image}
                        alt={person.name}
                        className="relative w-48 h-48 rounded-full object-cover border-4 border-white/10"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{person.name}</h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${person.gradient} bg-clip-text text-transparent mb-3`}>
                      "{person.title}"
                    </p>
                    <p className="text-gray-400">{person.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 6:
        // Roadmap & Market Slide
        return (
          <div className="h-full w-full flex items-center justify-center relative overflow-hidden px-8">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900" />

            <div className="relative z-10 max-w-6xl w-full">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Roadmap */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-8">Our 9-Month Plan to MVP</h2>

                  <div className="space-y-6 relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400" />

                    {[
                      {
                        phase: 'Phase 1',
                        title: 'Foundation',
                        items: ['Hire Core Engineering Team (2 BE, 1 AI/ML)', 'Finalize Architecture & UX']
                      },
                      {
                        phase: 'Phase 2',
                        title: 'Build & Test',
                        items: ['MVP Core Modules Complete', 'Onboard First Design Partner']
                      },
                      {
                        phase: 'Phase 3',
                        title: 'Validate & Iterate',
                        items: ['Launch Closed Beta with 3-5 Partners', 'Secure first pilot revenue & prep for Seed Round']
                      }
                    ].map((phase, i) => (
                      <motion.div
                        key={phase.phase}
                        className="flex gap-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.2 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-cyan-400">{phase.phase}: {phase.title}</h3>
                          <ul className="text-gray-400 text-sm mt-1 space-y-1">
                            {phase.items.map((item, j) => (
                              <li key={j}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Market */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-3xl font-bold mb-8">
                    A{' '}
                    <span className="text-amber-400">$48B</span>{' '}
                    Market Ready for Disruption
                  </h2>

                  <div className="space-y-8">
                    {[
                      {
                        label: 'Market',
                        text: 'The Customer Success market is set to double to $48B+ by 2032.',
                        highlight: '$48B+'
                      },
                      {
                        label: 'The Gap',
                        text: 'Incumbents are not AI-native. Collaboration tools are not workflow-specific.'
                      },
                      {
                        label: 'Our Edge',
                        text: 'We are the first platform built from the ground up to unify collaboration and value delivery with AI at its core.'
                      }
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        className="bg-gray-800/40 backdrop-blur border border-white/10 rounded-xl p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.15 }}
                      >
                        <span className="text-cyan-400 font-bold">{item.label}:</span>{' '}
                        <span className="text-gray-300">
                          {item.highlight ? (
                            <>
                              {item.text.split(item.highlight)[0]}
                              <span className="text-amber-400 font-bold">{item.highlight}</span>
                              {item.text.split(item.highlight)[1]}
                            </>
                          ) : (
                            item.text
                          )}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );

      case 7:
        // Closing Slide
        return (
          <div className="h-full w-full flex items-center justify-center relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 text-center px-8">
              <motion.img
                src="/bluplai-logo-white.png"
                alt="Plai"
                className="h-16 mx-auto mb-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />

              <motion.h1
                className="text-7xl md:text-9xl font-bold mb-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Let's Plai.
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl text-gray-400 mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Join us in building the future of customer value.
              </motion.p>

              <motion.div
                className="text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-lg font-semibold text-white">bluplai.com</p>
              </motion.div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-900 overflow-hidden font-poppins">
      {/* Slide content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="h-full w-full"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          {renderSlide(currentSlide)}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
        {/* Progress dots */}
        <div className="flex gap-2">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? 'bg-cyan-400 w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrow keys hint */}
      <div className="fixed bottom-8 right-8 text-gray-500 text-sm z-50">
        Use ← → to navigate
      </div>

      {/* Click areas for navigation */}
      <button
        onClick={prevSlide}
        className="fixed left-0 top-0 w-1/4 h-full z-40 cursor-w-resize opacity-0"
        aria-label="Previous slide"
      />
      <button
        onClick={nextSlide}
        className="fixed right-0 top-0 w-1/4 h-full z-40 cursor-e-resize opacity-0"
        aria-label="Next slide"
      />
    </div>
  );
};

export default David;
