import React, { useState } from 'react';
import { certificatesList } from '../data/portfolioData';

const Certificates = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="py-24 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <span className="font-cursive text-3xl text-slate-700 block mb-1 font-semibold">Credential Center</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Certifications & Industry Credentials
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Verified AWS, DevOps, Cloud Architecture, and AI engineering certifications issued by MicroDegree and be10X.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesList.map((cert, index) => (
            <div 
              key={cert.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setActiveCert(cert)}
              className="glass-card p-6 rounded-3xl cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Certificate Image Preview Header */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-slate-200/80 relative bg-slate-100 shadow-sm">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#111827] text-white border border-slate-700/60 px-3 py-1 text-[11px] font-bold rounded-full shadow-md">
                    {cert.badge}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{cert.issuer}</span>
                  {cert.certificateNo && (
                    <span className="text-[10px] font-mono font-bold text-slate-400">NO: {cert.certificateNo}</span>
                  )}
                </div>

                <h3 className="text-slate-900 text-xl font-bold mb-2 group-hover:text-slate-700 transition-colors">
                  {cert.name}
                </h3>

                <p className="text-xs text-slate-500 font-medium mb-4">
                  Issued Date: {cert.issuedDate} {cert.signatory && `· ${cert.signatory}`}
                </p>

                {/* Skills Learned (Greyish-Black Background with White Font) */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="bg-[#1E293B] text-white border border-slate-700/60 px-2.5 py-1 text-[10px] font-semibold rounded-full shadow-sm hover:bg-[#111827] transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-800">
                <span>View Full Credential</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal Certificate Component */}
      {activeCert && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-900/70 backdrop-blur-md flex justify-center items-center p-4 animate-fadeIn"
          onClick={() => setActiveCert(null)}
        >
          <div 
            className="glass-panel max-w-3xl w-full rounded-3xl p-6 md:p-8 relative flex flex-col items-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 bg-white/80 p-2 rounded-full border border-slate-200 shadow-sm transition-all"
              onClick={() => setActiveCert(null)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-4 max-w-xl">
              <span className="font-cursive text-2xl text-slate-700 block font-semibold">{activeCert.issuer}</span>
              <h3 className="text-slate-900 text-2xl font-extrabold">{activeCert.name}</h3>
              <p className="text-slate-500 text-xs font-mono mt-1">Issued Date: {activeCert.issuedDate} {activeCert.certificateNo && `| ID: ${activeCert.certificateNo}`}</p>
            </div>

            {/* High-res Image Preview */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/80 shadow-md mb-6">
              <img 
                src={activeCert.image} 
                alt={activeCert.name} 
                className="w-full h-full object-contain bg-white"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {activeCert.skills.map((skill, sIdx) => (
                <span key={sIdx} className="bg-[#1E293B] text-white border border-slate-700/60 px-3 py-1 text-xs font-semibold rounded-full shadow-sm">
                  ✓ {skill}
                </span>
              ))}
            </div>

            <button 
              onClick={() => setActiveCert(null)}
              className="px-6 py-2.5 glass-dark-btn text-xs font-bold"
            >
              Close Credential Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
