import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/avataaars';

/**
 * CharacterAnimation - Avatar character that represents the developer's journey
 * Different poses/styles for each phase using Avataaars library
 */
const CharacterAnimation = ({ phase = 'genesis', position = 'right' }) => {
  const characterVariants = {
    genesis: {
      options: {
        seed: 'genesis-swapnil',
        topType: ['ShortHairShortWaved'],
        accessoriesType: ['Blank'],
        clotheType: ['Hoodie'],
        clotheColor: ['Blue03'],
        eyeType: ['Default'],
        eyebrowType: ['Default'],
        mouthType: ['Smile'],
        skinColor: ['Light'],
      },
      alt: 'Character thinking',
      pose: 'thinking',
      glow: '#6366f1',
      emoji: '🤔',
    },
    foundation: {
      options: {
        seed: 'foundation-swapnil',
        topType: ['ShortHairShortFlat'],
        accessoriesType: ['Prescription02'],
        clotheType: ['ShirtCrewNeck'],
        clotheColor: ['Red'],
        eyeType: ['Happy'],
        eyebrowType: ['RaisedExcited'],
        mouthType: ['Smile'],
        skinColor: ['Light'],
      },
      alt: 'Character studying',
      pose: 'studying',
      glow: '#ff6b6b',
      emoji: '📚',
    },
    pivot: {
      options: {
        seed: 'pivot-swapnil',
        topType: ['ShortHairShortWaved'],
        accessoriesType: ['Blank'],
        clotheType: ['Hoodie'],
        clotheColor: ['Gray02'],
        eyeType: ['Surprised'],
        eyebrowType: ['FlatNatural'],
        mouthType: ['Serious'],
        skinColor: ['Light'],
      },
      alt: 'Character determined',
      pose: 'determined',
      glow: '#ff9a56',
      emoji: '💪',
    },
    return: {
      options: {
        seed: 'return-swapnil',
        topType: ['ShortHairShortFlat'],
        accessoriesType: ['Prescription01'],
        clotheType: ['ShirtCrewNeck'],
        clotheColor: ['Purple'],
        eyeType: ['Happy'],
        eyebrowType: ['Default'],
        mouthType: ['Smile'],
        skinColor: ['Light'],
      },
      alt: 'Character coding',
      pose: 'coding',
      glow: '#8b5cf6',
      emoji: '💻',
    },
    creation: {
      options: {
        seed: 'creation-swapnil',
        topType: ['ShortHairShortWaved'],
        accessoriesType: ['Blank'],
        clotheType: ['GraphicShirt'],
        clotheColor: ['Green'],
        eyeType: ['Wink'],
        eyebrowType: ['RaisedExcitedNatural'],
        mouthType: ['Twinkle'],
        skinColor: ['Light'],
      },
      alt: 'Character building',
      pose: 'building',
      glow: '#10b981',
      emoji: '⚡',
    },
    zenith: {
      options: {
        seed: 'zenith-swapnil',
        topType: ['ShortHairShortFlat'],
        accessoriesType: ['Sunglasses'],
        clotheType: ['BlazerShirt'],
        clotheColor: ['Black'],
        eyeType: ['Default'],
        eyebrowType: ['DefaultNatural'],
        mouthType: ['Smile'],
        skinColor: ['Light'],
      },
      alt: 'Character leading',
      pose: 'leading',
      glow: '#ffd93d',
      emoji: '👑',
    },
    persona: {
      options: {
        seed: 'persona-swapnil',
        topType: ['ShortHairShortWaved'],
        accessoriesType: ['Blank'],
        clotheType: ['Hoodie'],
        clotheColor: ['Blue01'],
        eyeType: ['Hearts'],
        eyebrowType: ['RaisedExcited'],
        mouthType: ['Smile'],
        skinColor: ['Light'],
      },
      alt: 'Character accomplished',
      pose: 'accomplished',
      glow: '#00f2fe',
      emoji: '🌟',
    },
  };

  const currentChar = characterVariants[phase] || characterVariants.genesis;
  const isRight = position === 'right';

  // Generate avatar SVG using useMemo to avoid regenerating on every render
  const avatarSvg = useMemo(() => {
    const avatar = createAvatar(avataaars, currentChar.options);
    return avatar.toString();
  }, [phase]);

  // Convert SVG to data URL for img src
  const avatarDataUrl = useMemo(() => {
    return `data:image/svg+xml;utf8,${encodeURIComponent(avatarSvg)}`;
  }, [avatarSvg]);
  const isRight = position === 'right';

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 100 : -100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: isRight ? 100 : -100, scale: 0.8 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`fixed ${isRight ? 'right-24' : 'left-24'} top-1/2 -translate-y-1/2 z-20 hidden lg:block`}
    >
      {/* Character Container */}
      <div className="relative">
        {/* Glow Effect */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 blur-3xl rounded-full"
          style={{ background: currentChar.glow }}
        />

        {/* Anime Character Image */}
        <motion.div
          className="relative z-10 w-64 h-80"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src={currentChar.image}
            alt={currentChar.alt}
            className="w-full h-full object-contain drop-shadow-2xl"
            style={{
              filter: `drop-shadow(0 0 30px ${currentChar.glow})`,
            }}
            onError={(e) => {
              // Fallback to a gradient placeholder if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          
          {/* Fallback Gradient Character */}
          <div 
            className="w-full h-full hidden items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500"
            style={{
              boxShadow: `0 0 50px ${currentChar.glow}`,
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="text-9xl"
            >
              {currentChar.emoji}
            </motion.div>
          </div>
        </motion.div>

        {/* Emoji Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ 
            scale: [0, 1.3, 1],
            rotate: [0, 360],
          }}
          transition={{ 
            scale: { duration: 0.5, delay: 0.8 },
            rotate: { duration: 0.6, delay: 0.8 },
          }}
          className="absolute -top-4 -right-4 z-20 w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50"
          style={{
            boxShadow: `0 0 30px ${currentChar.glow}`,
          }}
        >
          <span className="text-3xl">{currentChar.emoji}</span>
        </motion.div>

        {/* Animated Ring */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            scale: { duration: 3, repeat: Infinity },
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            opacity: { duration: 3, repeat: Infinity },
          }}
          className="absolute inset-0 rounded-full border-4 border-dashed"
          style={{
            borderColor: currentChar.glow,
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${15 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
                background: currentChar.glow,
              }}
              animate={{
                y: [-30, 30, -30],
                x: [Math.sin(i) * 20, Math.cos(i) * 20, Math.sin(i) * 20],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Energy Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px left-0 right-0"
            style={{
              top: `${30 + i * 20}%`,
              background: `linear-gradient(90deg, transparent, ${currentChar.glow}, transparent)`,
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      {/* Phase Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-6 text-center"
      >
        <div 
          className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border-2 shadow-2xl"
          style={{
            borderColor: currentChar.glow,
            boxShadow: `0 0 20px ${currentChar.glow}`,
          }}
        >
          <motion.span 
            className="text-white font-bold text-sm tracking-widest uppercase"
            animate={{
              textShadow: [
                `0 0 10px ${currentChar.glow}`,
                `0 0 20px ${currentChar.glow}`,
                `0 0 10px ${currentChar.glow}`,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {currentChar.pose}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CharacterAnimation;
