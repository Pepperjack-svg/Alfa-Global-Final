import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlobePreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(180,160,120,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* 3D Globe Container */}
          <div className="relative flex flex-col items-center">
            {/* Globe */}
            <div className="relative w-48 h-48 mb-8">
              {/* Globe Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/30 to-amber-400/20 blur-xl animate-pulse" />
              
              {/* Main Globe */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #f8f6f0 0%, #e8e4d9 50%, #d4cfc0 100%)',
                  boxShadow: `
                    inset -20px -20px 40px rgba(0,0,0,0.1),
                    inset 20px 20px 40px rgba(255,255,255,0.8),
                    0 20px 60px rgba(180,160,120,0.3),
                    0 0 100px rgba(212,175,55,0.2)
                  `
                }}
                animate={{ rotateY: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                {/* Continents/Grid Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  {/* Latitude Lines */}
                  {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((y, i) => (
                    <motion.ellipse
                      key={`lat-${i}`}
                      cx="100"
                      cy={y}
                      rx={Math.sin((y / 200) * Math.PI) * 95}
                      ry="3"
                      fill="none"
                      stroke="rgba(180,160,120,0.3)"
                      strokeWidth="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: i * 0.1 }}
                    />
                  ))}
                  
                  {/* Longitude Lines */}
                  {[0, 30, 60, 90, 120, 150].map((angle, i) => (
                    <motion.ellipse
                      key={`long-${i}`}
                      cx="100"
                      cy="100"
                      rx={Math.cos((angle * Math.PI) / 180) * 95}
                      ry="95"
                      fill="none"
                      stroke="rgba(180,160,120,0.3)"
                      strokeWidth="0.5"
                      transform={`rotate(${angle} 100 100)`}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: i * 0.15 }}
                    />
                  ))}

                  {/* Connection Points */}
                  {[
                    { x: 70, y: 60 },   // Mumbai
                    { x: 85, y: 70 },   // Delhi
                    { x: 120, y: 85 },  // Singapore
                    { x: 95, y: 75 },   // Dubai
                    { x: 45, y: 55 },   // London
                    { x: 150, y: 65 },  // Tokyo
                  ].map((point, i) => (
                    <motion.circle
                      key={`point-${i}`}
                      cx={point.x}
                      cy={point.y}
                      r="3"
                      fill="#b4a078"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.8] }}
                      transition={{ duration: 1.5, delay: 1 + i * 0.2, repeat: Infinity, repeatDelay: 3 }}
                    />
                  ))}

                  {/* Connection Lines */}
                  <motion.path
                    d="M70,60 Q100,40 120,85 M85,70 Q110,60 150,65 M70,60 Q60,55 45,55"
                    fill="none"
                    stroke="rgba(212,175,55,0.4)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, delay: 1.5 }}
                  />
                </svg>

                {/* Globe Shine */}
                <div className="absolute top-4 left-8 w-16 h-16 bg-white/40 rounded-full blur-xl" />
                <div className="absolute top-8 left-12 w-8 h-8 bg-white/60 rounded-full blur-lg" />
              </motion.div>

              {/* Orbiting Ring */}
              <motion.div
                className="absolute inset-[-20px] border-2 border-amber-400/30 rounded-full"
                style={{ borderStyle: 'dashed' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />

              {/* Orbiting Dot */}
              <motion.div
                className="absolute w-3 h-3 bg-amber-500 rounded-full shadow-lg"
                style={{ top: '-10px', left: '50%', marginLeft: '-6px' }}
                animate={{ 
                  rotate: 360,
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-0 bg-amber-400 rounded-full animate-ping" />
              </motion.div>
            </div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-light tracking-[0.4em] text-gray-800 mb-2">
                ALFA GLOBAL
              </h1>
              <p className="text-sm tracking-[0.2em] text-amber-700/70">
                BUILDING LEGACIES WORLDWIDE
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-72 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <motion.p
              className="text-gray-500 text-xs mt-3 tracking-[0.3em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {Math.round(Math.min(progress, 100))}%
            </motion.p>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-amber-400/30" />
          <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-amber-400/30" />
          <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-amber-400/30" />
          <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-amber-400/30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobePreloader;
