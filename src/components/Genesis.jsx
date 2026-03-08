import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code } from 'lucide-react';

const Genesis = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Swapnil Chandrakant Patil';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-900/80 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border border-gray-700/50"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 text-center text-gray-400 text-sm font-mono">
              journey.sh
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 font-mono text-left space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-green-400"
            >
              <span className="text-gray-500">$</span> ./start_journey.sh
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-blue-400"
            >
              Initializing...
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-white text-2xl md:text-4xl font-bold"
            >
              {text}
              {showCursor && <span className="text-primary">|</span>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="text-gray-400 space-y-1"
            >
              <div>› Role: Full Stack Developer & Team Manager</div>
              <div>› Location: Sangli, Maharashtra</div>
              <div>› Status: <span className="text-green-400">● Online</span></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              className="text-purple-400 pt-4"
            >
              ▶ Loading journey... Scroll to continue
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Icons
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 text-primary opacity-30"
        >
          <Code size={64} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-20 left-10 text-secondary opacity-30"
        >
          <Terminal size={64} />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Genesis;
