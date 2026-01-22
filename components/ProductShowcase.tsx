
import React, { useState } from 'react';

interface HotspotProps {
  top: string;
  left: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  align?: 'left' | 'right';
}

const Hotspot: React.FC<HotspotProps> = ({ top, left, title, description, icon, align = 'right' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="absolute z-30 group" 
      style={{ top, left }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="relative flex items-center justify-center cursor-pointer">
        <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-indigo-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600 border-2 border-white shadow-sm animate-beat"></span>
      </div>

      <div 
        className={`absolute top-1/2 -translate-y-1/2 w-72 p-5 rounded-2xl bg-white shadow-2xl border border-slate-100 transition-all duration-300 pointer-events-none transform z-40 ${
          isOpen 
            ? 'opacity-100 translate-x-0' 
            : `opacity-0 ${align === 'right' ? 'translate-x-4' : '-translate-x-4'}`
        } ${align === 'right' ? 'left-10' : 'right-10'}`}
      >
        <div className="relative">
          {icon && <div className="mb-2 text-indigo-600">{icon}</div>}
          <h4 className="text-base font-extrabold text-slate-900 mb-2 leading-tight">{title}</h4>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">{description}</p>
          {/* Arrow */}
          <div className={`absolute top-1/2 -translate-y-1/2 border-8 border-transparent ${
            align === 'right' ? '-left-[28px] border-r-white' : '-right-[28px] border-l-white'
          }`}></div>
        </div>
      </div>
    </div>
  );
};

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-8 lg:pt-16 lg:pb-32 relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto w-full">
          {/* Decorative Glow */}
          <div className="absolute -inset-12 bg-gradient-to-tr from-slate-200/20 to-slate-100/10 rounded-2xl blur-3xl -z-10"></div>
          
          {/* 
              Container for the image and hotspots. 
              Reduced border-radius to 1rem (rounded-2xl) as requested.
          */}
          <div className="relative rounded-2xl shadow-[0_60px_100px_-20px_rgba(0,0,0,0.22)] border border-slate-200 bg-white">
            <div className="relative rounded-2xl bg-white">
              <img 
                src="https://i.imgur.com/lmkSvhQ.png"
                alt="hiFred interface showing requirement generation"
                className="w-full h-auto object-contain rounded-2xl"
              />

              {/* Hotspot: Jira Sync (Top Strip) */}
              <Hotspot 
                top="4%" 
                left="22%" 
                title="Jira Backlog Sync" 
                description="Import tasks directly. Fred reads the thread context to draft your documentation instantly."
              />

              {/* Hotspot: Logic Forks (Original Dot) */}
              <Hotspot 
                top="44.5%" 
                left="80.5%" 
                align="left"
                title="Logical Consistency" 
                description="Fred identifies logical forks and forces decisions early, so devs never have to guess the behavior."
              />

              {/* Hotspot: Mark Elements (Yellow Rectangle area) */}
              <Hotspot 
                top="58%" 
                left="36%" 
                title="Interactive Mockups" 
                description="Point and click on your designs to define complex UI interactions without writing long paragraphs."
              />

              {/* Hotspot: Interaction with Engineers (Top Right Comments) */}
              <Hotspot 
                top="12%" 
                left="92%" 
                align="left"
                title="AI Support for Devs" 
                description="Fred stays in the loop, answering technical questions based on the specs you've already defined."
              />

              {/* Hotspot: Spec Templates (Left Panel Menu) */}
              <Hotspot 
                top="30%" 
                left="12%" 
                title="Global Templates" 
                description="Standardize every delivery across the team with custom templates for edge cases and constraints."
              />

              {/* Hotspot: Document Upload (Bottom Left Dash Rectangle) */}
              <Hotspot 
                top="88%" 
                left="14%" 
                title="Deep Knowledge Base" 
                description="Feed Fred your legacy docs and spreadsheets to ensure new features align with your system rules."
              />

            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        .animate-beat {
          animation: beat 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProductShowcase;
