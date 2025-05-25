import React from 'react';
import { DollarSign, Code, Layers, Scale } from 'lucide-react';

const Feasibility: React.FC = () => {
  const feasibilityItems = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: "Cost-Effective Development",
      description: "Built using Unity's open-source packages and cloud-based services with optimized resource allocation."
    },
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: "Developer-Friendly",
      description: "Designed to simplify game creation for both beginners and experts with intuitive interfaces."
    },
    {
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      title: "Modular Architecture",
      description: "Can be extended and upgraded with new features seamlessly to adapt to changing requirements."
    },
    {
      icon: <Scale className="w-6 h-6 text-orange-400" />,
      title: "Scalable Infrastructure",
      description: "Easily deployable across different game genres and platforms to support diverse projects."
    }
  ];

  return (
    <section id="feasibility" className="py-24 relative bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-item">
          <h2 className="section-title">Why Unity MCP Is Feasible</h2>
          <p className="section-subtitle">
            Technical and practical advantages that make our solution viable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {feasibilityItems.map((item, index) => (
            <div 
              key={index} 
              className="feasibility-card reveal-item"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-slate-700/50 inline-block">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              
              <p className="text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto reveal-item delay-500">
          <div className="bg-gradient-to-r from-slate-800 to-slate-800/70 p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-center">Ready to Revolutionize Game Development?</h3>
            <p className="text-slate-300 mb-6 text-center">
              Join the growing community of developers using Unity MCP to transform their game creation process.
            </p>
            
            <a 
              href="https://github.com/TanushShoor/ThreatSim-Buildverse.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary text-lg inline-block"
            >
              Use Unity MCP Today
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Feasibility;