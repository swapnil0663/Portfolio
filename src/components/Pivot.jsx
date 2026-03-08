import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Pause, TrendingUp, DollarSign, Brain } from 'lucide-react';
import { useRef } from 'react';

const Pivot = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax transformations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <section ref={ref} className="min-h-screen relative overflow-hidden py-20">
      
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 flex items-center justify-center opacity-5"
      >
        <Pause size={400} className="text-primary" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Phase Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
        </motion.div>

        {/* Main Story Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-red-500/30 mb-12"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
              <Pause className="text-red-500" size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">2019 — 2022</h3>
              <h4 className="text-2xl font-semibold text-red-400 mb-4">
                "Sometimes, stepping back is moving forward."
              </h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                A pivotal decision that shaped everything. Pausing formal education wasn't giving up—
                it was taking control. Stepping into the real world to fund my own dreams, 
                support my family, and gain invaluable life experience.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                While others saw a gap, I saw an opportunity. An opportunity to learn what no classroom 
                could teach: resilience, responsibility, and the real-world skills that would define 
                my future as a developer and leader.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Journey Stages - Parallax Effect */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-6 bg-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-800"
          >
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <DollarSign className="text-blue-400" size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Self-Funding Independence</h4>
              <p className="text-gray-400">
                Worked to become financially independent, removing the burden from family and 
                taking charge of my own educational journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-6 bg-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-800"
          >
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Brain className="text-purple-400" size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Real-World Education</h4>
              <p className="text-gray-400">
                Gained industry exposure, learned practical problem-solving, and developed 
                a professional mindset that would prove invaluable.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-6 bg-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-800"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="text-green-400" size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Strengthened Resolve</h4>
              <p className="text-gray-400">
                Built character, resilience, and a crystal-clear vision of where I wanted to go. 
                This wasn't a detour—it was preparation for greatness.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-bold italic text-gray-300">
            "The gap year that became a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              growth year
            </span>
            ."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Pivot;
