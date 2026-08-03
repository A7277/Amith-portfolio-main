import React from 'react';
import { motion } from 'framer-motion';

const BackgroundGlassObjects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Translucent Sphere 1 */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-[-50px] md:left-[5%] w-72 h-72 rounded-full bg-gradient-to-tr from-white/40 via-white/10 to-slate-200/20 backdrop-blur-3xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
      />

      {/* Floating Glass Sphere 2 */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[40%] right-[-60px] md:right-[8%] w-96 h-96 rounded-full bg-gradient-to-br from-white/50 via-slate-100/20 to-white/10 backdrop-blur-3xl border border-white/70 shadow-[0_30px_60px_rgba(0,0,0,0.04)]"
      />

      {/* Translucent Floating Glass Capsule */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, -15, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[20%] left-[10%] w-64 h-28 rounded-full bg-white/30 backdrop-blur-2xl border border-white/80 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hidden md:block"
      />

      {/* Soft Ambient Light Spots */}
      <div className="absolute top-[15%] left-[30%] w-[500px] h-[500px] bg-white/80 rounded-full blur-[140px] opacity-70"></div>
      <div className="absolute bottom-[10%] right-[25%] w-[600px] h-[600px] bg-slate-200/40 rounded-full blur-[160px] opacity-60"></div>
    </div>
  );
};

export default BackgroundGlassObjects;
