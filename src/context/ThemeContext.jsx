import React, { createContext, useContext } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// Define themes for each phase
export const themes = {
  genesis: {
    name: 'Night - The Beginning',
    sky: ['#000000', '#0a0a1a', '#1a0a2e'],
    stars: true,
    time: 'night'
  },
  foundation: {
    name: 'Dawn - New Beginnings',
    sky: ['#1e3a5f', '#ff6b6b', '#ffd93d'],
    stars: false,
    sun: 'rising',
    time: 'dawn'
  },
  pivot: {
    name: 'Dusk - Transition',
    sky: ['#ff6b6b', '#4a0e4e', '#1a0a2e'],
    stars: true,
    time: 'dusk'
  },
  return: {
    name: 'Evening - The Comeback',
    sky: ['#2d1b69', '#11052c', '#000000'],
    stars: true,
    moon: true,
    time: 'evening'
  },
  creation: {
    name: 'Midnight - Creating Magic',
    sky: ['#0f0c29', '#302b63', '#24243e'],
    stars: true,
    shooting: true,
    time: 'midnight'
  },
  zenith: {
    name: 'Golden Hour - The Peak',
    sky: ['#ff9a56', '#ffd93d', '#6dd5ed'],
    sun: 'high',
    time: 'golden'
  },
  persona: {
    name: 'Daylight - Full Picture',
    sky: ['#4facfe', '#00f2fe', '#43e97b'],
    clouds: true,
    time: 'day'
  }
};

export const ThemeProvider = ({ children }) => {
  const { scrollYProgress } = useScroll();

  // Map scroll progress to themes (7 phases = ~14.28% each)
  const themeProgress = useTransform(scrollYProgress, 
    [0, 0.143, 0.286, 0.429, 0.572, 0.715, 0.858, 1],
    [0, 1, 2, 3, 4, 5, 6, 6]
  );

  const getCurrentTheme = (progress) => {
    const themeKeys = Object.keys(themes);
    const index = Math.floor(progress);
    return themes[themeKeys[Math.min(index, themeKeys.length - 1)]];
  };

  return (
    <ThemeContext.Provider value={{ scrollYProgress, themeProgress, getCurrentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
