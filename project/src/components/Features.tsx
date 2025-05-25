import React from 'react';
import { Brain, Globe, Users, Zap, Headphones } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="feature-icon" />,
      title: "AI-Powered Game Generation",
      description: "Automatically create game scenes, mechanics, and assets from natural language prompts using Claude AI.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Globe className="feature-icon" />,
      title: "Cross-Platform Deployment",
      description: "Support for exporting games to PC and mobile platforms with minimal configuration required.",
      color: "from-teal-500 to-emerald-600"
    },
    {
      icon: <Headphones className="feature-icon" />,
      title: "Voice and Text Input",
      description: "Accept both typed and voice commands for flexible, hands-free game creation and editing.",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Real-Time Collaboration",
      description: "Enable multiple users to edit game projects simultaneously with synchronized updates.",
      color: "from-blue-500 to-sky-600"
    },
    {
      icon: <Zap className="feature-icon" />,
      title: "Instant Game Generation",
      description: "Instantly generate complete game worlds from text prompts with AI assistance.",
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-item">
          <h2 className="section-title">Key Features</h2>
          <p className="section-subtitle">
            Powerful tools to revolutionize your game development workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
              color={feature.color}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Features;