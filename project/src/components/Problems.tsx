import React from 'react';
import { DollarSign, Clock, FileWarning, Cpu, AlertCircle } from 'lucide-react';

const Problems: React.FC = () => {
  const problems = [
    {
      icon: <DollarSign className="w-6 h-6 text-red-400" />,
      title: "High Development Cost",
      description: "Traditional game development requires significant financial investment"
    },
    {
      icon: <FileWarning className="w-6 h-6 text-orange-400" />,
      title: "Limited Asset Access",
      description: "Difficulty obtaining high-quality 3D assets for game creation"
    },
    {
      icon: <Cpu className="w-6 h-6 text-yellow-400" />,
      title: "Complex Coding",
      description: "Game mechanics often require advanced programming knowledge"
    },
    {
      icon: <Clock className="w-6 h-6 text-teal-400" />,
      title: "Time-Consuming Prototyping",
      description: "Creating proofs of concept drains valuable development time"
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-blue-400" />,
      title: "Inconsistent Quality",
      description: "Maintaining uniform quality across all game elements is challenging"
    }
  ];

  return (
    <section id="problems" className="py-24 relative bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-item">
          <h2 className="section-title">Problem Identification</h2>
          <p className="section-subtitle">
            Our research with game developers and Unity enthusiasts identified these key challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 shadow-lg reveal-item"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-slate-700/50 mr-4">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                  <p className="text-slate-400 text-sm">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto reveal-item delay-500">
          <div className="bg-gradient-to-r from-purple-900/30 to-teal-900/30 p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-xl font-bold mb-4 text-center">Our Solution</h3>
            <p className="text-slate-300 text-center">
              Unity MCP transforms these challenges into opportunities with AI-powered tools, 
              streamlined workflows, and collaborative features that reduce development time by up to 70%.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-teal-600/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Problems;