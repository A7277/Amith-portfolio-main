import React from 'react';
import { experienceList } from '../data/portfolioData';

const ExperienceCard = ({ exp, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="glass-card p-6 md:p-10 rounded-3xl relative overflow-hidden"
  >
    <div className="flex flex-col lg:flex-row gap-8 justify-between">
      {/* Left Column */}
      <div className="w-full lg:w-4/12 lg:border-r lg:border-slate-200/60 lg:pr-8">
        <span className="bg-[#111827] text-white border border-slate-700/60 px-3 py-1 text-xs font-bold rounded-full shadow-sm inline-block mb-3">
          {exp.duration}
        </span>
        <h3 className="text-2xl font-extrabold text-[#111827] tracking-tight mb-1">
          {exp.role}
        </h3>
        <p className="text-base font-bold text-slate-700 mb-2">
          {exp.organization}
        </p>
        <p className="text-xs text-slate-500 font-medium mb-6">
          📍 {exp.location}
        </p>

        <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 mb-3">Tech Stack Utilized</h4>
        <div className="flex flex-wrap gap-1.5">
          {exp.tech.map((t, idx) => (
            <span key={idx} className="bg-[#1E293B] text-white border border-slate-700/60 px-3 py-1 text-xs font-bold rounded-full shadow-sm hover:bg-[#111827] transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-8/12 flex flex-col justify-center">
        <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 mb-4">Core Deliverables & Impact</h4>
        <ul className="space-y-3">
          {exp.responsibilities.map((resp, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 text-xs md:text-sm leading-relaxed">
              <span className="w-2 h-2 rounded-full bg-slate-900 mt-2 shrink-0"></span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <span className="font-cursive text-3xl text-slate-700 block mb-1 font-semibold">Career Journey</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Hands-on cloud engineering experience automating multi-tier AWS deployments, CI/CD pipelines, and observability stacks.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-8">
          {experienceList.map((exp, index) => (
            <ExperienceCard key={exp.organization} exp={exp} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
