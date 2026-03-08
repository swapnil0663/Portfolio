import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code2, Database, Zap, CheckCircle } from 'lucide-react';

const Return = () => {
  const achievements = [
    "Spearheaded HRMS web application development",
    "Designed core database schemas and API endpoints",
    "Improved internal system efficiency significantly",
    "Delivered production-ready module on schedule",
    "Optimized frontend for maximum speed & scalability"
  ];

  const techStack = [
    { name: 'MongoDB', color: 'from-green-500 to-green-600' },
    { name: 'Express.js', color: 'from-gray-400 to-gray-600' },
    { name: 'React.js', color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', color: 'from-green-600 to-green-800' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Phase Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-green-900/30 to-gray-900/70 backdrop-blur-md p-8 rounded-2xl border border-green-500/30 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Rocket className="text-green-500" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Re-enrollment</h3>
                  <p className="text-green-400 font-mono">2024 - 2025</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Returned to PVPIT with renewed focus, armed with real-world experience 
                and an unshakeable determination to excel.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Maintained 7.78 CGPA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Applied industry knowledge in academics</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Balanced learning with practical skills</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: UptoSkills Internship */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-gray-900/70 backdrop-blur-md p-8 rounded-2xl border border-blue-500/30 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Code2 className="text-blue-500" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">UptoSkills Internship</h3>
                  <p className="text-blue-400 font-mono">Apr - Aug 2025</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Full Stack Developer Intern role where theory met practice, and potential 
                transformed into proven capability.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Zap size={20} />
                <span>Remote Position</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MERN Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Mastered the MERN Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${tech.color} p-6 rounded-xl text-center font-bold text-white shadow-lg`}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <Database className="text-primary" size={32} />
            <h3 className="text-3xl font-bold">HRMS Project Highlights</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-lg"
              >
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold italic text-gray-300">
            "The comeback is always stronger than the setback."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Return;
