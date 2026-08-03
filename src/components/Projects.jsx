import React from 'react';
import { projects } from '../data/portfolioData';

const ArchitectureCard = ({ project, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 120}
    className="glass-card p-6 md:p-10 rounded-3xl relative overflow-hidden flex flex-col gap-8"
  >
    {/* Top Header */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-200/60">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-[#111827] text-white border border-slate-700/60 px-3 py-1 text-xs font-bold rounded-full shadow-sm">
            {project.badge}
          </span>
          <span className="text-xs font-bold text-slate-500 font-mono">
            REF #{project.number}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#111827] tracking-tight">
          {project.title}
        </h3>
        <p className="text-xs md:text-sm font-medium text-slate-600 mt-1">
          {project.tagline}
        </p>
      </div>

      {/* Tech Tags in Greyish-Black Background with White Font */}
      <div className="flex flex-wrap gap-1.5 max-w-md">
        {project.techTags.map((tech, tIdx) => (
          <span key={tIdx} className="bg-[#1E293B] text-white border border-slate-700/60 px-3 py-1 text-xs font-bold rounded-full shadow-sm hover:bg-[#111827] transition-colors">
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Overview & Architecture Diagram Breakdown */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left: Overview & Architecture Specs */}
      <div className="flex flex-col justify-between">
        <div>
          <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 mb-2">System Overview</h4>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6">
            {project.overview}
          </p>

          <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 mb-3">Cloud Infrastructure & Flow</h4>
          <ul className="space-y-2.5">
            {project.architecture.map((arch, aIdx) => (
              <li key={aIdx} className="flex items-start gap-2.5 text-slate-700 text-xs md:text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0"></span>
                <span>{arch}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: Engineering Impact & Outcomes */}
      <div className="flex flex-col justify-between bg-white/50 p-6 rounded-2xl border border-white/80">
        <div>
          <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 mb-3">Engineering Impact & Metrics</h4>
          <div className="space-y-3 mb-6">
            {project.impact.map((imp, iIdx) => (
              <div key={iIdx} className="glass-panel p-3.5 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                <span className="text-slate-800 text-xs md:text-sm font-semibold">{imp}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200/60">
            <p className="text-xs text-slate-600 mb-2">
              <strong className="text-slate-900">Engineering Challenge:</strong> {project.challenges}
            </p>
            <p className="text-xs text-slate-600">
              <strong className="text-slate-900">Key Takeaway:</strong> {project.learning}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <span className="font-cursive text-3xl text-slate-700 block mb-1 font-semibold">Architecture Blueprints</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Production Cloud Projects
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Detailed breakdown of production-ready AWS multi-tier environments, Jenkins CI/CD automation, Terraform IaC engines, and observability stacks.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ArchitectureCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
