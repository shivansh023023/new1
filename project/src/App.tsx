import React, { useEffect } from 'react';
import { GithubIcon, Sparkles, Code, Globe, Users, Zap, Brain, TerminalSquare, Headphones } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Problems from './components/Problems';
import Market from './components/Market';
import Feasibility from './components/Feasibility';
import Footer from './components/Footer';
import ScrollReveal from './utils/ScrollReveal';

function App() {
  useEffect(() => {
    // Initialize scroll reveal animations
    ScrollReveal.init();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Problems />
        <Market />
        <Feasibility />
      </main>
      <Footer />
    </div>
  );
}

export default App;