
import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Features from './components/Features';
import ProblemSection from './components/ProblemSection';
import ProductShowcase from './components/ProductShowcase';
// import FAQ from './components/FAQ';
import Waitlist from './components/Waitlist';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ProductShowcase />
        <Features />
        {/* <FAQ /> */}
        <Waitlist />
      </main>
      
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} hiFred. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
