
import React, { useState } from 'react';

const faqs = [
  {
    q: "How does Fred know my product context?",
    a: "Fred integrates with your existing documentation, previous Jira tickets, and codebase metadata. It builds a local semantic index to ensure every requirement aligns with your actual system architecture."
  },
  {
    q: "Do I need to change how my engineering team works?",
    a: "Not at all. Fred fits into your current workflow. It can push to Jira, Linear, or sync directly into Cursor via MCP, making the requirements available right where the code is written."
  },
  {
    q: "Is my data secure?",
    a: "Yes. We prioritize security. Your data is encrypted at rest and in transit. We offer SOC2 compliant environments and do not use your proprietary data to train global models."
  },
  {
    q: "Can Fred handle complex business logic?",
    a: "Absolutely. Fred is designed for deep logic. You can mark up UI screenshots or provide rough notes, and Fred will suggest edge cases, data constraints, and state transitions you might have missed."
  },
  {
    q: "What integrations are supported?",
    a: "Currently, we support Jira, Linear, Slack, and GitHub. Our MCP bridge allows seamless integration with AI-powered IDEs like Cursor and Windsurf."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16 tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-200 last:border-0 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left py-6 flex justify-between items-center group transition-colors"
              >
                <span className="text-lg font-medium text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {faq.q}
                </span>
                <span className={`transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
