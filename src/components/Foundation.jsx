import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Lightbulb } from 'lucide-react';

const Foundation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

          {/* Timeline Items */}
          <motion.div variants={itemVariants} className="mb-16 flex items-center">
            <div className="flex items-start md:items-center w-full">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center z-10 ml-0 md:ml-auto md:mr-8">
                <GraduationCap size={32} />
              </div>
              <div className="ml-8 md:ml-0 md:w-1/2 bg-gray-900/70 backdrop-blur-md p-6 rounded-lg border border-gray-800/50 hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold mb-2">B.Tech Journey Begins</h3>
                <p className="text-primary font-mono mb-2">2017</p>
                <p className="text-gray-400">
                  Started B.Tech in Information Technology at PVPIT, Budhgaon (DBATU University).
                  The spark of curiosity ignited, leading to exploration of programming fundamentals.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 flex items-center">
            <div className="flex items-start md:items-center w-full md:flex-row-reverse">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-purple-600 flex items-center justify-center z-10 ml-0 md:mr-auto md:ml-8">
                <BookOpen size={32} />
              </div>
              <div className="ml-8 md:ml-0 md:mr-0 md:w-1/2 bg-gray-900/70 backdrop-blur-md p-6 rounded-lg border border-gray-800/50 hover:border-secondary transition-colors">
                <h3 className="text-2xl font-bold mb-2">Early Tech Interests</h3>
                <p className="text-secondary font-mono mb-2">2017 - 2019</p>
                <p className="text-gray-400">
                  Diving deep into Data Structures, Algorithms, and Web Technologies. 
                  Building the foundation that would shape the journey ahead.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'Java', 'DSA'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center">
            <div className="flex items-start md:items-center w-full">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center z-10 ml-0 md:ml-auto md:mr-8">
                <Lightbulb size={32} />
              </div>
              <div className="ml-8 md:ml-0 md:w-1/2 bg-gray-900/70 backdrop-blur-md p-6 rounded-lg border border-gray-800/50 hover:border-yellow-500 transition-colors">
                <h3 className="text-2xl font-bold mb-2">The Realization</h3>
                <p className="text-yellow-500 font-mono mb-2">Late 2018</p>
                <p className="text-gray-400">
                  A crucial moment of self-discovery. Realizing that true growth sometimes requires 
                  stepping away from the conventional path. The seed of a bold decision was planted.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
            <div className="text-4xl font-bold text-primary">7.78</div>
            <div className="text-gray-400 mt-2">CGPA (6th Sem)</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
            <div className="text-4xl font-bold text-secondary">2017</div>
            <div className="text-gray-400 mt-2">Journey Started</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
            <div className="text-4xl font-bold text-yellow-500">PVPIT</div>
            <div className="text-gray-400 mt-2">Budhgaon</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Foundation;
