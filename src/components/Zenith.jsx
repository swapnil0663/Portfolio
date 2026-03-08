import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Users, Briefcase, Target, Award, TrendingUp, Code, GitBranch } from 'lucide-react';

const Zenith = () => {
  const stats = [
    { value: '15+', label: 'Projects Managed', icon: Briefcase, color: 'from-blue-500 to-blue-600' },
    { value: '15', label: 'Team Leads', icon: Users, color: 'from-purple-500 to-purple-600' },
    { value: '100%', label: 'On-Time Delivery', icon: Target, color: 'from-green-500 to-green-600' },
    { value: '∞', label: 'Innovation', icon: TrendingUp, color: 'from-yellow-500 to-orange-600' },
  ];

  const responsibilities = [
    {
      title: 'Strategic Leadership',
      description: 'Formulating technical strategies for scalable solutions aligned with organizational mission',
      icon: Target
    },
    {
      title: 'Team Management',
      description: 'Leading and mentoring 15 Team Leads to ensure technical excellence and adherence to Agile standards',
      icon: Users
    },
    {
      title: 'Process Optimization',
      description: 'Streamlining development workflows for improved project delivery and code quality',
      icon: GitBranch
    },
    {
      title: 'Technical Oversight',
      description: 'Overseeing high-impact projects and ensuring architectural best practices',
      icon: Code
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Phase Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
        </motion.div>

        {/* Current Role Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/70 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-gray-800/50 hover:border-yellow-500/50 transition-all mb-12"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-center justify-center"
            >
              <Crown size={40} className="text-yellow-500" />
            </motion.div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Team Manager
              </h2>
              <p className="text-lg text-gray-400">Core Development Department • UptoSkills</p>
              <p className="text-yellow-500/80 font-mono text-sm mt-2">February 2026 – Present</p>
            </div>
          </div>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed border-t border-gray-800 pt-6">
            From intern to leader. Now at the helm of UptoSkills' Core Development department, 
            orchestrating 15 high-impact projects and empowering a team of 15 talented Team Leads 
            to build the future of scalable, innovative solutions.
          </p>
        </motion.div>

        {/* Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const colorMap = {
              'from-blue-500 to-blue-600': { border: 'border-blue-500/30', text: 'text-blue-400', iconBg: 'bg-blue-500/10' },
              'from-purple-500 to-purple-600': { border: 'border-purple-500/30', text: 'text-purple-400', iconBg: 'bg-purple-500/10' },
              'from-green-500 to-green-600': { border: 'border-green-500/30', text: 'text-green-400', iconBg: 'bg-green-500/10' },
              'from-yellow-500 to-orange-600': { border: 'border-yellow-500/30', text: 'text-yellow-400', iconBg: 'bg-yellow-500/10' },
            };
            const colors = colorMap[stat.color];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border ${colors.border} hover:border-opacity-60 transition-all`}
              >
                <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center mb-3`}>
                  <IconComponent size={24} className={colors.text} />
                </div>
                <div className={`text-3xl font-bold mb-1 ${colors.text}`}>{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Responsibilities */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {responsibilities.map((resp, index) => {
            const IconComponent = resp.icon;
            return (
              <motion.div
                key={resp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/70 p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{resp.title}</h3>
                    <p className="text-gray-400">{resp.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl border border-yellow-500/30 text-center"
        >
          <div className="w-16 h-16 bg-yellow-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Award className="text-yellow-500" size={32} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-100">
            "From starting from scratch to{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              leading the charge
            </span>
            ."
          </h3>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            This is not the end—it's just the beginning. Every project, every team member, 
            every line of code is a step toward building something extraordinary.
          </p>
        </motion.div>

        {/* Certifications Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['HackerRank Problem Solving', 'Google Generative AI', 'MLOps Generative AI'].map((cert) => (
            <motion.div
              key={cert}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-5 py-2.5 bg-gray-900/70 backdrop-blur-md border border-gray-700/50 hover:border-yellow-500/30 rounded-lg text-sm text-gray-300 transition-all"
            >
              <span className="text-yellow-500 mr-2">🏆</span>
              {cert}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Zenith;
