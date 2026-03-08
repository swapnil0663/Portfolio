import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ScrollNavigation = () => {
  const sections = ['genesis', 'foundation', 'pivot', 'return', 'creation', 'zenith', 'persona'];
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToNext = () => {
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const currentSection = Math.round(currentScroll / windowHeight);
    const nextSection = Math.min(currentSection + 1, sections.length - 1);
    scrollToSection(sections[nextSection]);
  };

  const scrollToPrevious = () => {
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const currentSection = Math.round(currentScroll / windowHeight);
    const previousSection = Math.max(currentSection - 1, 0);
    scrollToSection(sections[previousSection]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToNext();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-2">
      {/* Scroll Up */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToPrevious}
        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
        title="Previous Section (↑)"
      >
        <ChevronUp className="text-white" size={24} />
      </motion.button>

      {/* Scroll Down */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToNext}
        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
        title="Next Section (↓)"
      >
        <ChevronDown className="text-white" size={24} />
      </motion.button>

      {/* Hint text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-xs text-white/60 text-center mt-2 font-mono"
      >
        Use ↑↓ or scroll
      </motion.div>
    </div>
  );
};

export default ScrollNavigation;
