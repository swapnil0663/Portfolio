import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ scrollProgress = 0, currentPage = 0 }) => {
  // Theme configuration based on current page
  const themes = [
    { name: 'genesis', colors: ['#000000', '#0a0a1a', '#1a0a2e'], stars: 1, sun: 0, moon: 0.8 },
    { name: 'foundation', colors: ['#1e3a5f', '#ff6b6b', '#ffd93d'], stars: 0.3, sun: 1, moon: 0.2 },
    { name: 'pivot', colors: ['#ff6b6b', '#4a0e4e', '#1a0a2e'], stars: 0.8, sun: 0.3, moon: 0.5 },
    { name: 'return', colors: ['#2d1b69', '#11052c', '#000000'], stars: 1, sun: 0, moon: 1 },
    { name: 'creation', colors: ['#0f0c29', '#302b63', '#24243e'], stars: 1, sun: 0, moon: 0.7 },
    { name: 'zenith', colors: ['#ff9a56', '#ffd93d', '#6dd5ed'], stars: 0.2, sun: 0.8, moon: 0 },
    { name: 'persona', colors: ['#4facfe', '#00f2fe', '#43e97b'], stars: 0, sun: 0.2, moon: 0 },
  ];

  const currentTheme = themes[currentPage] || themes[0];

  // Calculate sun position based on page (rises through foundation, zenith)
  const sunY = useMemo(() => {
    if (currentPage === 1) return '60%'; // Foundation - rising
    if (currentPage === 5) return '20%'; // Zenith - high noon
    return '100%'; // Hidden
  }, [currentPage]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Sky Gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `linear-gradient(to bottom, ${currentTheme.colors[0]}, ${currentTheme.colors[1]}, ${currentTheme.colors[2]})`,
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Stars */}
      <motion.div
        animate={{ opacity: currentTheme.stars }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Shooting Stars (for creation theme) */}
      {currentTheme.name === 'creation' && (
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`shooting-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${Math.random() * 40}%`,
                boxShadow: '0 0 20px 2px rgba(255,255,255,0.8)',
              }}
              animate={{
                x: [-100, 1000],
                y: [0, 500],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 4,
                repeatDelay: 8,
              }}
            />
          ))}
        </div>
      )}

      {/* Sun */}
      <motion.div
        className="absolute right-20 w-32 h-32"
        animate={{
          y: sunY,
          opacity: currentTheme.sun,
        }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full h-full">
          {/* Sun glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-yellow-300 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          {/* Sun core */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-yellow-200 to-orange-400" />
        </div>
      </motion.div>

      {/* Moon */}
      <motion.div
        className="absolute right-32 top-20 w-24 h-24"
        animate={{ opacity: currentTheme.moon }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full h-full">
          {/* Moon glow */}
          <div className="absolute inset-0 rounded-full bg-blue-200 blur-2xl opacity-40" />
          {/* Moon */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-100 to-gray-300">
            {/* Craters */}
            <div className="absolute top-4 right-6 w-3 h-3 rounded-full bg-gray-400 opacity-40" />
            <div className="absolute bottom-6 left-5 w-2 h-2 rounded-full bg-gray-400 opacity-40" />
            <div className="absolute top-10 left-8 w-4 h-4 rounded-full bg-gray-400 opacity-30" />
          </div>
        </div>
      </motion.div>

      {/* Clouds (for zenith and persona themes) */}
      {(currentTheme.name === 'persona' || currentTheme.name === 'zenith') && (
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`cloud-${i}`}
              className="absolute"
              style={{
                top: `${20 + i * 15}%`,
              }}
              animate={{
                x: [-200, typeof window !== 'undefined' ? window.innerWidth + 200 : 2000],
              }}
              transition={{
                duration: 30 + i * 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="relative">
                <div className="w-20 h-8 bg-white/20 rounded-full blur-sm" />
                <div className="absolute top-2 left-4 w-16 h-6 bg-white/20 rounded-full blur-sm" />
                <div className="absolute top-1 left-10 w-12 h-7 bg-white/20 rounded-full blur-sm" />
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Atmospheric particles */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, typeof window !== 'undefined' ? window.innerHeight + 20 : 1000],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedBackground;
