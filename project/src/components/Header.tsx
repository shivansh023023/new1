import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/90 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Sparkles className="h-8 w-8 text-purple-400 mr-2" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
            Unity MCP
          </h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#features" className="nav-link">Features</a></li>
            <li><a href="#problems" className="nav-link">Problems</a></li>
            <li><a href="#market" className="nav-link">Market</a></li>
            <li><a href="#feasibility" className="nav-link">Feasibility</a></li>
          </ul>
        </nav>
        
        <a 
          href="https://github.com/TanushShoor/ThreatSim-Buildverse.git" 
          target="_blank" 
          rel="noopener noreferrer"
          className="button-primary"
        >
          Use Unity
        </a>
        
        <button className="block md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;