
import React from 'react';

const Waitlist: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="waitlist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-900 overflow-hidden p-10 md:p-20 text-center border border-slate-800">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-50 mb-6 tracking-tight">
              Join the waiting list
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              We're rolling out access slowly to ensure every team gets the best experience. Secure your spot in line today.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                required
              />
              <button className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-900/20">
                Get Early Access
              </button>
            </form>
            
            <p className="mt-8 text-sm text-slate-500 font-medium tracking-wide uppercase">
              Join 1,200+ product leaders already on the list.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;