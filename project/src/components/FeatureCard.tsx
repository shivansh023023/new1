import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  color,
  delay = 0
}) => {
  return (
    <div 
      className="feature-card reveal-item"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`feature-icon-wrapper bg-gradient-to-br ${color}`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 mt-6">{title}</h3>
      
      <p className="text-slate-300">
        {description}
      </p>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 transition-opacity duration-300 feature-card-indicator"></div>
    </div>
  );
};

export default FeatureCard;