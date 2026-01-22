
import React from 'react';

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Features: React.FC = () => {
  const featureData: FeatureItem[] = [
    {
      title: "Sync your backlog from Jira",
      description: "Pull in existing tickets or rough notes from Jira or Linear. Fred analyzes context and flags missing requirements automatically.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    },
    {
      title: "Mark elements over your designs",
      description: "Upload mockups and click UI elements to define behavior. No more lengthy descriptive paragraphs—just point and define.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      title: "Draft specs with full context",
      description: "Fred learns from your documentation and history to write specs that stay consistent with your actual system architecture.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75c-1.03 0-1.914-.443-2.516-1.144l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Surface hidden edge cases",
      description: "Automatically surface API needs, data limits, and state transitions so developers don't have to guess the 'how-it-works'.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: "Automate technical QA",
      description: "Fred lives in your Slack and Jira, answering technical 'ping-pong' questions instantly so you can stay focused.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Streamline code with Cursor",
      description: "Sync requirements directly into Cursor via MCP. Let developers code against the source of truth without leaving their IDE.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-white pt-12 pb-24" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            From product intent to engineering reality,<br /> in no time
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Zero friction, absolute precision. Fred ensures your team is always in sync with these powerful capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-[2rem] bg-transparent border border-slate-200 transition-all duration-300 hover:bg-slate-50 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50 hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 transition-all group-hover:bg-indigo-600 group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
