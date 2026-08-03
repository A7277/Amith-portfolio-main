import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Preloader = ({ isHeroVideoLoaded }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1800);

    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    if (minTimeElapsed && isHeroVideoLoaded) {
      setIsLoading(false);
    }
  }, [minTimeElapsed, isHeroVideoLoaded]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 w-full h-screen bg-[#FBFBFD] z-[100000] flex flex-col items-center justify-center p-4"
        >
          <motion.div 
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="glass-panel px-8 py-6 rounded-3xl shadow-xl flex items-center gap-3">
              <span className="font-script text-3xl md:text-5xl text-slate-800">{personalInfo.brandName}</span>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-slate-800 animate-ping"></div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Initializing DevOps Platform
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
