import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { FullpageProvider, useFullpage } from './context/FullpageContext';
import AnimatedBackground from './components/AnimatedBackground';
import CharacterAnimation from './components/CharacterAnimation';
import Genesis from './components/Genesis';
import Foundation from './components/Foundation';
import Pivot from './components/Pivot';
import Return from './components/Return';
import Creation from './components/Creation';
import Zenith from './components/Zenith';
import Persona from './components/Persona';

const pages = [
  { id: 0, name: 'Genesis', component: Genesis, phase: 'genesis' },
  { id: 1, name: 'Foundation', component: Foundation, phase: 'foundation' },
  { id: 2, name: 'Pivot', component: Pivot, phase: 'pivot' },
  { id: 3, name: 'Return', component: Return, phase: 'return' },
  { id: 4, name: 'Creation', component: Creation, phase: 'creation' },
  { id: 5, name: 'Zenith', component: Zenith, phase: 'zenith' },
  { id: 6, name: 'Persona', component: Persona, phase: 'persona' },
];

function FullpageContent() {
  const { currentPage, goToPage, isTransitioning, direction } = useFullpage();
  const CurrentComponent = pages[currentPage].component;
  const currentPhase = pages[currentPage].phase;

  // Calculate progress for theme transitions (0 to 1)
  const scrollProgress = currentPage / (pages.length - 1);

  // Enhanced page transition variants
  const pageVariants = {
    enter: (direction) => ({
      y: direction === 'down' ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      rotateX: direction === 'down' ? -15 : 15,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
    },
    exit: (direction) => ({
      y: direction === 'down' ? '-100%' : '100%',
      opacity: 0,
      scale: 1.05,
      rotateX: direction === 'down' ? 15 : -15,
    }),
  };

  const pageTransition = {
    type: 'spring',
    stiffness: 260,
    damping: 30,
    mass: 0.8,
  };

  return (
    <div className="relative h-screen w-full overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Animated Background */}
      <AnimatedBackground scrollProgress={scrollProgress} currentPage={currentPage} />

      {/* Progress Bar with Glow */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-50"
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: scrollProgress,
        }}
        style={{ transformOrigin: 'left' }}
      >
        <motion.div
          className="h-full bg-white/50"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Navigation Dots with Labels */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {pages.map((page) => (
          <motion.button
            key={page.id}
            onClick={() => goToPage(page.id)}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            <motion.div
              className={`w-3 h-3 rounded-full transition-all ${
                currentPage === page.id
                  ? 'bg-white w-4 h-4'
                  : 'bg-white/30 hover:bg-white/60'
              }`}
              animate={{
                boxShadow: currentPage === page.id 
                  ? ['0 0 0 0 rgba(255,255,255,0.4)', '0 0 0 8px rgba(255,255,255,0)', '0 0 0 0 rgba(255,255,255,0)']
                  : 'none',
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/20 whitespace-nowrap">
                <span className="text-white text-xs">{page.name}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </nav>

      {/* Animated Character */}
      <AnimatePresence mode="wait">
        <CharacterAnimation key={currentPage} phase={currentPhase} position="right" />
      </AnimatePresence>

      {/* Current Page with Enhanced Animation */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={pageTransition}
          className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden fullpage-section"
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>

      {/* Transition Overlay Effect */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black pointer-events-none z-40"
          />
        )}
      </AnimatePresence>

      {/* Footer on last page */}
      {currentPage === pages.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="fixed bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md border-t border-white/10 py-4 text-center z-40"
        >
          <p className="text-gray-300 text-sm">
            © 2026 Swapnil Chandrakant Patil. Built with React, Framer Motion & Tailwind CSS
          </p>
        </motion.div>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <FullpageProvider totalPages={7}>
        <FullpageContent />
      </FullpageProvider>
    </ThemeProvider>
  );
}

export default App;
