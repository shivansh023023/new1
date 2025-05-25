import React from 'react';
import { Brain, Sparkles, Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 pt-32">
      {/* Animated background */}
      <div className="particles-container absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 reveal-item">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">Game Development</span> Platform
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Create stunning games instantly with AI assistance. Streamline your workflow and focus on creativity, not complexity.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/TanushShoor/ThreatSim-Buildverse.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-primary text-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Use Unity
              </a>
              
              <a href="#features" className="button-secondary text-lg">
                <Brain className="w-5 h-5 mr-2" />
                Explore Features
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 reveal-item delay-300">
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden border border-purple-500/30 shadow-xl shadow-purple-500/10 bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-teal-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Code className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                    <p className="text-lg font-medium">Game Development Reimagined</p>
                    <p className="text-sm text-slate-400 mt-2">Powered by Claude AI</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-purple-500/30 to-teal-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;