/**
 * Guardian Angel - GlassCard Component
 * 
 * A reusable component for creating glassmorphism card effects
 * as specified in the design guidelines
 */

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'dark';
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  intensity = 'medium'
}) => {
  const baseStyles = 'rounded-lg backdrop-blur transition-all duration-300';
  
  const intensityStyles = {
    light: 'bg-white/20 border border-white/20 shadow-sm',
    medium: 'bg-white/15 border border-white/20 shadow-md',
    dark: 'bg-white/10 border border-white/10 shadow-lg'
  };
  
  return (
    <div className={`${baseStyles} ${intensityStyles[intensity]} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;