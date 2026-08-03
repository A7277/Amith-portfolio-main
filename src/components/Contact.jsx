import React, { useRef, useState } from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const form = formRef.current;
    const name = form.querySelector('#name')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');

    // Format clean message with proper line breaks & spacing for WhatsApp
    const formattedText = `Hello Amith,

Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}

---
Sent via Amith Raj Cloud Engineering Portfolio`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappNumber = "918123012310"; // Amith Raj WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Redirect & automatically open WhatsApp with pre-filled message
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setStatus('success');
      if (formRef.current) {
        formRef.current.reset();
      }
      setTimeout(() => setStatus('idle'), 4000);
    }, 300);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <span className="font-cursive text-3xl text-slate-700 block mb-1 font-semibold">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Let's Build Cloud Infrastructure Together
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Open for DevOps, Cloud Engineering, Kubernetes, and Infrastructure Automation opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Contact Information Glass Card */}
          <div data-aos="fade-right" className="lg:col-span-5 glass-panel p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Channels</h3>

              <div className="space-y-6 text-slate-700 text-xs md:text-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 text-sm font-bold shadow-sm">
                    📧
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Email</span>
                    <a href={`mailto:${personalInfo.emails.primary}`} className="font-bold text-slate-900 hover:underline">
                      {personalInfo.emails.primary}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 text-sm font-bold shadow-sm">
                    💬
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">WhatsApp & Phone</span>
                    <a 
                      href={`https://wa.me/918123012310?text=${encodeURIComponent("Hello Amith, I came across your DevOps portfolio and would like to connect.")}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-slate-900 hover:underline"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 text-sm font-bold shadow-sm">
                    📍
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Location</span>
                    <span className="font-bold text-slate-900">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Pills */}
            <div className="pt-8 border-t border-slate-200/60 mt-8 flex flex-wrap gap-2">
              <a 
                href={`https://wa.me/918123012310?text=${encodeURIComponent("Hello Amith, I would like to connect regarding a Cloud Engineering opportunity.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E293B] text-white border border-slate-700/60 px-4 py-2 text-xs font-bold rounded-full hover:bg-[#111827] transition-colors flex items-center gap-1.5 shadow-sm"
              >
                💬 Direct WhatsApp ↗
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E293B] text-white border border-slate-700/60 px-4 py-2 text-xs font-bold rounded-full hover:bg-[#111827] transition-colors shadow-sm"
              >
                LinkedIn ↗
              </a>
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E293B] text-white border border-slate-700/60 px-4 py-2 text-xs font-bold rounded-full hover:bg-[#111827] transition-colors shadow-sm"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Right Side: Glass Form */}
          <div data-aos="fade-left" className="lg:col-span-7 glass-panel p-8 md:p-10 rounded-3xl">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Your Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name"
                  placeholder="e.g. Engineering Lead" 
                  required
                  className="w-full bg-white/70 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Your Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email"
                  placeholder="e.g. name@company.com" 
                  required
                  className="w-full bg-white/70 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Message / Project Details
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4"
                  placeholder="Tell me about your cloud infrastructure or DevOps opportunity..." 
                  required
                  className="w-full bg-white/70 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full py-3.5 glass-dark-btn text-xs font-bold tracking-wider uppercase cursor-pointer flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <span>Opening WhatsApp...</span>
                ) : status === 'success' ? (
                  <span>WhatsApp Opened Successfully ✓</span>
                ) : (
                  <>
                    <span>💬 Send Direct Message via WhatsApp</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
