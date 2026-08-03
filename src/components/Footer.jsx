import React from 'react';
import { personalInfo, socialLinks, footerContent } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-12 w-full relative border-t border-slate-200/60 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <span className="font-script text-3xl text-slate-800 block mb-2">{personalInfo.brandName}</span>
            <p className="text-slate-600 text-xs font-semibold leading-relaxed">
              DevOps & Cloud Infrastructure Specialist.
            </p>
          </div>

          <div className="text-left md:text-center">
            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-1">Academic Credentials</span>
            <p className="text-slate-800 text-xs font-medium">{footerContent.credential}</p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-1">Direct Contact</span>
            <a href={`mailto:${personalInfo.emails.primary}`} className="text-slate-900 text-xs font-bold hover:underline">
              {personalInfo.emails.primary}
            </a>
          </div>
        </div>

        {/* Cursive Signature Banner */}
        <div className="py-10 border-y border-slate-200/60 text-center">
          <h2 className="font-script text-5xl md:text-7xl text-slate-800 select-none">
            {personalInfo.name}
          </h2>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>{footerContent.copyright}</p>

          <div className="flex items-center gap-6">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors font-semibold">
              LinkedIn
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors font-semibold">
              GitHub
            </a>
            <a href={personalInfo.resumeUrl} download="amith-raj-resume.pdf" className="hover:text-slate-900 transition-colors font-semibold">
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
