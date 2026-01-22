
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-40 pb-12 lg:pt-40 lg:pb-16 overflow-hidden bg-slate-50">
      {/* Background Ambient Decor - Positioned deep behind content */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[700px] h-[700px] bg-indigo-200/30 rounded-full blur-[140px]"></div>
        <div className="absolute top-[15%] left-[-10%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[140px]"></div>
      </div>

      {/* 
          Sophisticated multi-stop gradient overlay.
          Starts transparent at the top, becomes solid white at the bottom 
          to blend perfectly with the following sections.
      */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-slate-50/40 via-white/80 to-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Animated Text Content Container */}
          <div className={`max-w-5xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/80 backdrop-blur-sm border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Built for Modern Product Teams
            </div>
            
            <h1 className="font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight text-4xl md:text-5xl lg:text-[4rem]">
              From hours of writing PRDs to <span className="text-indigo-600">crystal-clear, instant specs</span> that engineers actually love
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-10 max-w-4xl mx-auto">
              Fred helps product teams deliver <span className="highlight">clear</span>, <span className="highlight">precise</span>, and <span className="highlight">comprehensive</span> requirements, ensuring an <span className="highlight">on-time</span> and <span className="highlight">frictionless</span> delivery.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#waitlist" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 text-white font-semibold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-indigo-100 hover:-translate-y-1">
                Start Building with Fred
              </a>
            </div>

            <div className="mt-20 flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img 
                      key={i} 
                      className="w-10 h-10 rounded-full border-4 border-white shadow-sm" 
                      src={`https://picsum.photos/seed/${i + 99}/80/80`} 
                      alt="User avatar" 
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">
                  Trusted by 500+ PMs at leading teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .highlight {
          position: relative;
          z-index: 1;
        }
        .highlight::after {
          content: "";
          position: absolute;
          left: -2px;
          right: -2px;
          bottom: 2px;
          height: 12px;
          background-color: #fef08a;
          z-index: -1;
          opacity: 0.6;
          border-radius: 2px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
