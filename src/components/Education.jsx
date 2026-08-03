import React from 'react';
import { educationList } from '../data/portfolioData';

const EducationCard = ({ edu, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="glass-card p-6 md:p-8 rounded-3xl relative max-w-3xl mx-auto"
  >
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <span className="glass-pill px-3 py-1 text-xs font-bold text-slate-800 inline-block mb-3">
          {edu.duration}
        </span>
        <h3 className="text-2xl font-extrabold text-[#111827] tracking-tight mb-1">
          {edu.degree}
        </h3>
        <p className="text-base font-bold text-slate-700 mb-2">
          {edu.institution}
        </p>
        <p className="text-xs text-slate-500 font-medium mb-4">
          📍 {edu.location}
        </p>
        <ul className="space-y-1.5">
          {edu.highlights.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="glass-panel p-4 rounded-2xl text-center shrink-0 min-w-[140px]">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Graduated</span>
        <span className="text-slate-900 font-extrabold text-lg">2022</span>
      </div>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <span className="font-script text-3xl text-slate-600 block mb-1">Academic Background</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Education & Computer Science
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Bachelor of Engineering in Computer Science with core focus on distributed systems, networks, and operating systems.
          </p>
        </div>

        {/* Education List */}
        <div className="flex flex-col gap-6">
          {educationList.map((edu, index) => (
            <EducationCard key={edu.institution} edu={edu} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
