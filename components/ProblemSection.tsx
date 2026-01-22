
import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-white" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              The Gap Between "What" and "How"
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Great products die in the gap between a PM's vision and an engineer's implementation. Vague specs lead to endless Slack threads, wasted dev cycles, and missed deadlines.
            </p>
            <div className="space-y-4">
              {[
                "Product Managers drowning in manual documentation",
                "Engineers frustrated by ambiguous user stories",
                "Context loss during rapid team scaling",
                "Delayed shipping due to 'technical ping-pong'"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 fred-shadow">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-200 rounded-full"></div>
                <div className="pl-6">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The Status Quo</p>
                  <p className="text-slate-600 italic">"I spent 4 hours writing this PRD, and the first dev question was about an edge case I completely forgot. Now we're a week behind."</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-full"></div>
                <div className="pl-6">
                  <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-2">The Fred Advantage</p>
                  <p className="text-slate-900 font-semibold leading-relaxed">
                    Fred proactively surfaces those edge cases while you're thinking about the feature. You ship precise, bulletproof specs that engineers love.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg shadow-indigo-200">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="font-bold">85% reduction in dev rework</span>
                  </div>
                  <p className="text-indigo-100 text-sm">
                    Teams using Fred report significantly fewer clarification cycles and faster time-to-market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
