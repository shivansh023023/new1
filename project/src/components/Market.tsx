import React from 'react';
import { BarChart, LineChart, Users, TrendingUp } from 'lucide-react';

const Market: React.FC = () => {
  return (
    <section id="market" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-item">
          <h2 className="section-title">Market Potential</h2>
          <p className="section-subtitle">
            Targeting a growing industry with expanding opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 reveal-item">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Users className="w-6 h-6 text-purple-400 mr-3" />
              Target Audience
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                <div>
                  <h4 className="font-medium">Game Developers</h4>
                  <p className="text-slate-400 text-sm mt-1">Professional developers seeking to streamline workflows</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                <div>
                  <h4 className="font-medium">Indie Studios</h4>
                  <p className="text-slate-400 text-sm mt-1">Small teams with limited resources looking to maximize output</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                <div>
                  <h4 className="font-medium">Aspiring Game Designers</h4>
                  <p className="text-slate-400 text-sm mt-1">Newcomers to game development seeking accessible tools</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 reveal-item delay-200">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <BarChart className="w-6 h-6 text-teal-400 mr-3" />
              Survey Insights
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Interest in AI-Powered World Building</span>
                  <span className="text-sm text-teal-400">87%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-300 h-2.5 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Demand for No-Code Game Creation</span>
                  <span className="text-sm text-purple-400">73%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-300 h-2.5 rounded-full" style={{ width: '73%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Interest in Real-Time Collaboration</span>
                  <span className="text-sm text-orange-400">65%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-300 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 reveal-item delay-300">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 text-orange-400 mr-3" />
              Market Trends
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-orange-400 mr-3 mt-2"></div>
                <p className="text-slate-300">Significant growth in AI-driven game development tools and platforms</p>
              </li>
              
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-orange-400 mr-3 mt-2"></div>
                <p className="text-slate-300">Rising demand for real-time collaboration solutions in game development</p>
              </li>
              
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-orange-400 mr-3 mt-2"></div>
                <p className="text-slate-300">Increasing adoption of no-code solutions across creative industries</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 reveal-item delay-400">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <LineChart className="w-6 h-6 text-blue-400 mr-3" />
              Expansion Opportunities
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-blue-400 mr-3 mt-2"></div>
                <p className="text-slate-300">Integration with professional game studio workflows and pipelines</p>
              </li>
              
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-blue-400 mr-3 mt-2"></div>
                <p className="text-slate-300">Educational platforms for teaching game design and development</p>
              </li>
              
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-blue-400 mr-3 mt-2"></div>
                <p className="text-slate-300">Virtual reality and augmented reality application development</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Market;