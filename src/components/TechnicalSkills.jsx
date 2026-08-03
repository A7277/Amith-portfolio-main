import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technicalSkills } from '../data/portfolioData';

const TechnicalSkills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const categories = technicalSkills.categories;
  const activeCategory = categories[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 w-full relative overflow-hidden bg-[#FBFBFD]">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-12 text-center">
          <span className="font-cursive text-3xl text-slate-700 block mb-1 font-semibold">DevOps Command Center</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Interactive Cloud & Engineering Deck
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Slide through Amith Raj's production infrastructure domains to explore capabilities and toolsets.
          </p>
        </div>

        {/* Domain Navigation Dots & Controls */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setCurrentIndex(idx)}
                className={`px-4 py-2 text-xs md:text-sm font-bold rounded-full transition-all duration-300 flex items-center gap-2 shrink-0 ${
                  currentIndex === idx
                    ? 'bg-[#111827] text-white border border-slate-700/80 shadow-md scale-105'
                    : 'glass-light-btn hover:bg-white text-slate-700'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Carousel Arrows */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full glass-panel flex justify-center items-center text-slate-800 hover:bg-white transition-all shadow-sm"
              aria-label="Previous Category"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full glass-panel flex justify-center items-center text-slate-800 hover:bg-white transition-all shadow-sm"
              aria-label="Next Category"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Featured 3D Glass Carousel Deck Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.title}
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-6 md:p-10 rounded-3xl relative overflow-hidden border border-white/90 shadow-xl"
          >
            {/* Header of Active Domain */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-200/60">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#111827] text-white flex justify-center items-center text-2xl shadow-md">
                  {activeCategory.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#111827] tracking-tight">
                    {activeCategory.title}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-slate-500">
                    Domain {currentIndex + 1} of {categories.length} · Enterprise Stack
                  </p>
                </div>
              </div>

              <span className="bg-[#111827] text-white border border-slate-700/60 px-3.5 py-1.5 text-xs font-bold rounded-full shadow-sm">
                {activeCategory.skills.length} Specialized Capabilities
              </span>
            </div>

            {/* Grid of Skill Pills with Greyish-Black Background */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 my-8">
              {activeCategory.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx}
                  className="bg-[#1E293B] text-white border border-slate-700/60 p-3.5 rounded-2xl flex flex-col justify-between hover:bg-[#111827] hover:scale-[1.03] transition-all duration-300 shadow-sm group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <h4 className="text-xs md:text-sm font-bold tracking-tight text-white">{skill.name}</h4>
                  </div>
                  {skill.desc && (
                    <p className="text-[10px] text-slate-300 font-medium leading-tight ml-4 mt-0.5">
                      {skill.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Controls / Indicators */}
            <div className="flex justify-between items-center pt-4 border-t border-slate-200/60">
              <span className="text-xs font-bold text-slate-500">
                Use arrows or click tabs to explore other domains
              </span>

              <div className="flex items-center gap-1.5">
                {categories.map((_, i) => (
                  <div 
                    key={i} 
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      currentIndex === i ? 'w-8 bg-[#111827]' : 'w-2 bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default TechnicalSkills;
