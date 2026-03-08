import React from 'react';
import { motion, useTransform } from 'framer-motion';

const phases = [
  { id: 0, label: 'Genesis', position: 0 },
  { id: 1, label: 'Foundation', position: 14.28 },
  { id: 2, label: 'Pivot', position: 28.56 },
  { id: 3, label: 'Return', position: 42.84 },
  { id: 4, label: 'Creation', position: 57.12 },
  { id: 5, label: 'Zenith', position: 71.4 },
  { id: 6, label: 'Persona', position: 85.68 },
];

const ScrollProgress = ({ scrollProgress }) => {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="relative h-96 w-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-secondary"
          style={{
            height: useTransform(scrollProgress, [0, 1], ['0%', '100%'])
          }}
        />
      </div>
      
      {/* Phase Markers */}
      <div className="absolute top-0 left-0 h-full">
        {phases.map((phase) => {
          const opacity = useTransform(
            scrollProgress,
            [(phase.position - 5) / 100, phase.position / 100, (phase.position + 5) / 100],
            [0.3, 1, 0.3]
          );
          
          return (
            <motion.div
              key={phase.id}
              className="absolute -left-2 flex items-center"
              style={{ top: `${phase.position}%`, opacity }}
            >
              <div className="w-5 h-5 rounded-full bg-primary border-4 border-darker" />
              <span className="ml-4 text-xs font-mono whitespace-nowrap text-gray-300">
                {phase.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollProgress;
