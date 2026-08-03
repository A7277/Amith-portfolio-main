import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

const Hero = ({ onVideoLoaded }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const handleVideoLoad = () => {
    if (!isVideoReady) {
      setIsVideoReady(true);
      if (onVideoLoaded) {
        onVideoLoaded();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (video.readyState >= 2) {
        handleVideoLoad();
      }
    }
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = false;
        setIsMuted(false);

        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Autoplay with audio blocked, playing muted fallback:", err);
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
          setIsPlaying(true);
        });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#FBFBFD] pt-[46px]">
      
      {/* Background Poster fallback (Starts cleanly below top navbar) */}
      <div 
        className="absolute top-[46px] left-0 w-full h-[calc(100vh-46px)] bg-cover bg-center z-0 transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url(${personalInfo.videoPoster})`,
          backgroundPosition: 'center 20%'
        }}
      />

      {/* Crisp Clean Background Video - Starts cleanly below top navbar at top-[46px] */}
      <video
        ref={videoRef}
        loop
        playsInline
        onLoadedData={handleVideoLoad}
        onCanPlay={handleVideoLoad}
        className={`absolute top-[46px] left-0 w-full h-[calc(100vh-46px)] object-cover z-0 transition-opacity duration-1000 ${
          isVideoReady ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ objectPosition: 'center 20%' }}
      >
        <source src={personalInfo.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Floating Right Side Social Icons (GitHub, LinkedIn, Email) */}
      <div 
        data-aos="fade-left"
        data-aos-delay="400"
        className="absolute right-4 md:right-8 top-1/3 -translate-y-1/2 z-40 flex flex-col gap-3 glass-panel p-2.5 rounded-full shadow-lg items-center"
      >
        <a 
          href={socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 text-slate-800 hover:text-black hover:scale-125 transition-all"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>

        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 text-slate-800 hover:text-black hover:scale-125 transition-all"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        <a 
          href={`mailto:${socialLinks.email}`}
          className="p-2 text-slate-800 hover:text-black hover:scale-125 transition-all"
          aria-label="Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

      {/* Floating DevOps Pill Badge */}
      <div className="absolute top-[60px] right-4 md:right-8 z-40" data-aos="fade-down" data-aos-delay="500">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 glass-panel rounded-full hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-900 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-900"></span>
          </span>
          <span className="text-[#111827] text-[11px] font-bold tracking-wide">
            AWS Cloud & DevOps Specialist
          </span>
        </div>
      </div>

      {/* Content Container — Placed directly on the hero section without a background box */}
      <div className="absolute top-[46px] left-0 bottom-0 z-20 pl-6 md:pl-12 lg:pl-20 pr-6 pb-8 md:pb-[4%] flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full max-w-full">
        
        {/* Left Side Content (Directly on Hero) */}
        <div className="flex flex-col items-start text-left w-full max-w-lg lg:max-w-xl">
          
          {/* Lil Cursive Greeting */}
          <span 
            data-aos="fade-up"
            className="font-cursive text-2xl md:text-3xl text-slate-800 font-semibold mb-1 drop-shadow-sm"
          >
            {heroContent.greeting}
          </span>

          {/* Name & Subtitle */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-[#111827] text-3xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-sm"
          >
            {personalInfo.brandName}
            <span className="block text-sm md:text-base font-medium text-slate-700 mt-2 leading-relaxed">
              {heroContent.subtitle}
            </span>
          </h1>

          {/* Floating Metrics Row */}
          <div data-aos="fade-up" data-aos-delay="300" className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-5 w-full">
            {heroContent.stats.map((stat, idx) => (
              <div key={idx} className="glass-card p-2.5 text-center rounded-xl">
                <p className="text-sm md:text-base font-bold text-slate-900 leading-tight">{stat.value}</p>
                <p className="text-[9px] md:text-[10px] text-slate-600 font-medium leading-tight mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Compact Action Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="450"
            className="flex flex-row flex-wrap items-center gap-2.5 w-full mt-1"
          >
            <a 
              href={heroContent.ctaPrimary.href}
              className="px-5 py-2.5 text-xs font-bold glass-dark-btn"
            >
              {heroContent.ctaPrimary.text}
            </a>
            
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-bold glass-light-btn"
            >
              Hire Me
            </a>

            <a 
              href={heroContent.ctaResume.href}
              download="amith-raj-resume.pdf"
              className="px-5 py-2.5 text-xs font-bold glass-light-btn flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>
        </div>

        {/* Right Side: Play Video & Mute Audio Buttons */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-6 md:mt-0 mr-4 md:mr-8 flex flex-row md:flex-col items-center gap-3 cursor-pointer group self-start md:self-auto z-20"
        >
          {/* Play/Pause Button */}
          <div 
            onClick={toggleVideo}
            className="flex flex-col items-center gap-1 group/play"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass-panel flex justify-center items-center group-hover/play:scale-110 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              {!isPlaying ? (
                <svg className="w-5 h-5 md:w-7 md:h-7 text-slate-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 md:w-7 md:h-7 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </div>
            <span className="text-slate-800 text-[10px] md:text-xs font-bold tracking-wider uppercase opacity-80 group-hover/play:opacity-100 transition-opacity">
              {!isPlaying ? heroContent.playReelText : "Pause Video"}
            </span>
          </div>

          {/* Mute/Unmute Audio Toggle Button */}
          {isPlaying && (
            <button 
              onClick={toggleAudio}
              className="px-3 py-1.5 glass-panel rounded-full text-[10px] font-bold text-slate-800 flex items-center gap-1.5 hover:bg-white transition-all shadow-md mt-1"
            >
              {isMuted ? (
                <>
                  <svg className="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                  <span>Unmute Audio</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <span>Audio Enabled</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-5 h-5 text-slate-600 drop-shadow-sm" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
