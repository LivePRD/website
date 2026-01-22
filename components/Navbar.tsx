
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center transition-all duration-300">
          <div className="flex items-center gap-3">
            <a href="#">
              <img 
                src="https://i.imgur.com/ant0w4n.png" 
                alt="hiFred logo" 
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'h-8' : 'h-12'
                }`}
              />
            </a>
          </div>
          
          <div className="flex items-center">
            <a 
              href="http://app.hifred.ai/?source=site" 
              className={`px-6 py-3 rounded-full text-white text-sm font-bold transition-all shadow-lg ${
                isScrolled ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-slate-900 hover:bg-slate-800'
              }`}
            >
              Join The Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
