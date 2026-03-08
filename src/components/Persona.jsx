import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Gamepad2, Globe, Mail, Linkedin, MapPin, Phone, Coffee } from 'lucide-react';

const Persona = () => {
  const interests = [
    {
      title: 'Anime Enthusiast',
      description: 'Demon Slayer • Haikyuu!! • And many more adventures',
      icon: '⚔️',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Strategic Gaming',
      description: 'Problem-solving through immersive gaming experiences',
      icon: '🎮',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Learning French',
      description: 'Currently at conversational level • Bonjour!',
      icon: '🇫🇷',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'AI Technology',
      description: 'Keeping pace with emerging AI advancements',
      icon: '🤖',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const languages = [
    { name: 'English', level: 100 },
    { name: 'Hindi', level: 100 },
    { name: 'Marathi', level: 100 },
    { name: 'French', level: 40 },
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

        {/* About Me Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 p-8 md:p-12 rounded-3xl border border-pink-500/30 mb-12 backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-6xl"
            >
              ☕
            </motion.div>
            <div>
              <h2 className="text-4xl font-bold mb-2">More Than Code</h2>
              <p className="text-gray-400 text-lg">
                A developer who believes in balance, growth, and finding joy in the journey.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/70 p-6 rounded-xl border border-gray-800 hover:border-pink-500 transition-colors backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className={`text-5xl bg-gradient-to-br ${interest.color} p-3 rounded-xl`}>
                  {interest.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{interest.title}</h3>
                  <p className="text-gray-400">{interest.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/70 p-8 rounded-2xl border border-gray-800 mb-12 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-primary" size={32} />
            <h3 className="text-3xl font-bold">Language Proficiency</h3>
          </div>
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-300">{lang.name}</span>
                  <span className="text-gray-400">{lang.level}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Let's Connect</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <motion.a
              href="mailto:swapnilcpatil665@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Mail className="text-primary" size={24} />
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="font-semibold">swapnilcpatil665@gmail.com</div>
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/swapnilcpatil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="text-blue-500" size={24} />
              <div>
                <div className="text-sm text-gray-400">LinkedIn</div>
                <div className="font-semibold">linkedin.com/in/swapnilcpatil</div>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-gray-900 p-4 rounded-lg"
            >
              <Phone className="text-green-500" size={24} />
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <div className="font-semibold">+91 9970610663</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-gray-900 p-4 rounded-lg"
            >
              <MapPin className="text-red-500" size={24} />
              <div>
                <div className="text-sm text-gray-400">Location</div>
                <div className="font-semibold">Sangli, Maharashtra</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-gray-300 mb-4">
            "The journey from scratch continues..."
          </p>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl"
          >
            🚀
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Persona;
