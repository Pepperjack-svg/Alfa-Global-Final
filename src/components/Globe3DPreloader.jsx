import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Globe3DPreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 700);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 60);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: '#000000' }}
        >
          {/* Subtle cyan particles */}
          <div className="absolute inset-0">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${1 + Math.random() * 2}px`,
                  height: `${1 + Math.random() * 2}px`,
                  background: i % 2 === 0 ? '#00e5ff' : '#2e7d32',
                  opacity: 0,
                }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          {/* Main content - just the logo */}
          <div className="relative flex flex-col items-center">
            {/* Logo with animations */}
            <motion.div
              className="relative"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              {/* Glow behind logo */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 60%)',
                  filter: 'blur(30px)',
                  transform: 'scale(2)',
                }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* The logo */}
              <motion.img
                src="/alfa-logo-preloader.png"
                alt="Alfa Global"
                className="relative w-64 sm:w-80 md:w-96 h-auto"
                style={{ filter: 'drop-shadow(0 0 25px rgba(0,229,255,0.3))' }}
                animate={{
                  y: [0, -8, 0],
                  filter: [
                    'drop-shadow(0 0 15px rgba(0,229,255,0.2))',
                    'drop-shadow(0 0 35px rgba(0,229,255,0.5))',
                    'drop-shadow(0 0 15px rgba(0,229,255,0.2))',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 w-48 sm:w-56"
            >
              <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.min(progress, 100)}%`,
                    background: 'linear-gradient(90deg, #2e7d32, #00e5ff, #2e7d32)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/25 font-light">
                <span>Loading</span>
                <span>{Math.round(Math.min(progress, 100))}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Globe3DPreloader;
