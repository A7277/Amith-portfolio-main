import React from 'react';
import { aboutContent, personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-28 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Side: Amith's Glass Photo Frame */}
        <div data-aos="fade-right" className="w-full lg:w-5/12 shrink-0">
          <div className="glass-panel p-4 rounded-3xl relative group">
            {/* Subtle Glass Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/60 rounded-3xl opacity-50 pointer-events-none"></div>
            
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg border border-white/80">
              <img 
                src={personalInfo.headshot} 
                alt="Amith Raj — DevOps Engineer" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="font-script text-2xl text-white/90">Amith Raj</span>
                <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">DevOps Engineer Intern @ MicroDegree</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Narrative & Engineering Philosophy */}
        <div data-aos="fade-left" className="w-full lg:w-7/12 flex flex-col text-left">
          <span className="font-script text-3xl text-slate-600 mb-1">{aboutContent.subtitle}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-6 leading-tight">
            {aboutContent.heading}
          </h2>

          <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed font-normal">
            {aboutContent.bioParagraphs.map((paragraph, idx) => (
              <p key={idx} className="glass-card p-4 md:p-5 rounded-2xl">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights Row */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {aboutContent.highlights.map((item, idx) => (
              <div key={idx} className="glass-pill px-4 py-2 text-xs font-bold text-slate-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
