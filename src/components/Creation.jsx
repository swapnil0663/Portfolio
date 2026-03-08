import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Users, Milk, Heart, MessageCircle, TrendingUp, Shield, Layers } from 'lucide-react';

const Creation = () => {
  const [activeProject, setActiveProject] = useState('dairy');

  const projects = {
    dairy: {
      name: 'Dairy-Tech',
      tagline: 'Modernizing Agriculture',
      color: 'from-green-500 to-emerald-600',
      icon: Milk,
      problem: [
        'Manual milk collection records prone to errors',
        'Inefficient payment tracking for farmers',
        'Poor livestock health monitoring',
        'Unreliable data in low-connectivity areas'
      ],
      solution: [
        'Real-time milk collection tracking system',
        'Automated payment management',
        'Livestock health monitoring dashboard',
        'Offline-first architecture with sync'
      ],
      tech: ['React Native', 'Expo', 'Firebase', 'SQLite'],
      impact: 'Empowering farmers and dairies with modern technology'
    },
    yuzu: {
      name: 'Yuzu',
      tagline: 'Social Platform for Influencers',
      color: 'from-purple-500 to-pink-600',
      icon: Users,
      problem: [
        'Limited engagement tools for influencers',
        'Complex content monetization processes',
        'Security concerns on social platforms',
        'Scalability issues with high traffic'
      ],
      solution: [
        'Interactive engagement features',
        'Streamlined content monetization',
        'Robust security protocols',
        'Scalable backend infrastructure (PERN)'
      ],
      tech: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js'],
      impact: 'Revolutionizing influencer-audience connections'
    }
  };

  const current = projects[activeProject];
  const IconComponent = current.icon;

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Phase Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
        </motion.div>

        {/* Project Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => setActiveProject('dairy')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              activeProject === 'dairy'
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            <div className="flex items-center gap-2">
              <Milk size={24} />
              <span>Dairy-Tech</span>
            </div>
          </motion.button>
          <motion.button
            onClick={() => setActiveProject('yuzu')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              activeProject === 'yuzu'
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            <div className="flex items-center gap-2">
              <Users size={24} />
              <span>Yuzu</span>
            </div>
          </motion.button>
        </motion.div>

        {/* Project Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {/* Project Header */}
            <div className={`bg-gradient-to-r ${current.color} p-8 rounded-t-2xl`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <IconComponent size={40} className="text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">{current.name}</h2>
                  <p className="text-white/80 text-lg">{current.tagline}</p>
                </div>
              </div>
            </div>

            {/* Problem vs Solution */}
            <div className="grid md:grid-cols-2 gap-0 bg-gray-900/70 backdrop-blur-md rounded-b-2xl overflow-hidden border-x border-b border-gray-800/50">
              {/* Problem */}
              <div className="p-8 border-r border-gray-800/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-red-400">The Problem</h3>
                </div>
                <ul className="space-y-3">
                  {current.problem.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-red-400 mt-1">✗</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="p-8 bg-gray-800/40 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400">The Solution</h3>
                </div>
                <ul className="space-y-3">
                  {current.solution.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-green-400 mt-1">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack & Impact */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="text-primary" size={24} />
                  <h4 className="text-xl font-bold">Tech Stack</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 bg-gradient-to-r ${current.color} text-white rounded-lg font-semibold`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800"
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="text-secondary" size={24} />
                  <h4 className="text-xl font-bold">Impact</h4>
                </div>
                <p className="text-gray-300 text-lg">{current.impact}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Additional Project: Trending Movies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 bg-gradient-to-br from-blue-900/30 to-gray-900 p-8 rounded-2xl border border-blue-500/30"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Smartphone className="text-blue-400" size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold">Trending Movies App</h3>
              <p className="text-blue-400">Personal Project • React.js & Tailwind CSS</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-400">500+</div>
              <div className="text-gray-400 mt-1">Unique Users (Month 1)</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-green-400">15%</div>
              <div className="text-gray-400 mt-1">Retention Boost</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-purple-400">3</div>
              <div className="text-gray-400 mt-1">APIs Integrated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Creation;
