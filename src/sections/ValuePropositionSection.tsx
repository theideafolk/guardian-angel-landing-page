/**
 * Guardian Angel - Dual Value Proposition Section
 * 
 * This section presents the dual benefits: practical protection and environmental protection
 * Content from landing-page-copy.md
 * Added images for practical and environmental protection
 * Updated text to all lowercase style
 */

import React from 'react';
import { Container, Section, GlassCard } from '../components/ui';
import { Shield, Leaf } from 'lucide-react';
import { useIntersectionObserver } from '../utils/animations';

const ValuePropositionSection: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  const animationClass = isIntersecting 
    ? 'opacity-100 translate-y-0 transition-all duration-700' 
    : 'opacity-0 translate-y-8 transition-all duration-700';
  
  return (
    <Section 
      id="value-proposition" 
      backgroundClassName="bg-primary-800 text-white"
    >
      <div ref={ref as React.RefObject<HTMLDivElement>} className={animationClass}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight lowercase">
            protect your power. preserve our planet.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Practical Protection */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-md">
            <div className="h-60 overflow-hidden">
              <img 
                src="/home-security.jpg"
                alt="Home energy security and protection"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-accent-400 mr-3" />
                <h3 className="text-2xl font-semibold lowercase">practical protection</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2 font-bold">•</span>
                  <span className="lowercase">instant backup during outages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2 font-bold">•</span>
                  <span className="lowercase">5,000+ cycle lifespan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2 font-bold">•</span>
                  <span className="lowercase">premium design aesthetic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2 font-bold">•</span>
                  <span className="lowercase">smart energy optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2 font-bold">•</span>
                  <span className="lowercase">lower lifetime costs</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Environmental Protection */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-md">
            <div className="h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" 
                alt="Preserving nature through sustainable energy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Leaf className="w-8 h-8 text-accent-400 mr-3" />
                <h3 className="text-2xl font-semibold lowercase">environmental protection</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2 font-bold">•</span>
                  <span className="lowercase">no mining-intensive materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2 font-bold">•</span>
                  <span className="lowercase">35% lower carbon footprint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2 font-bold">•</span>
                  <span className="lowercase">minimal fire risk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2 font-bold">•</span>
                  <span className="lowercase">end-of-life recyclability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2 font-bold">•</span>
                  <span className="lowercase">reduced resource competition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ValuePropositionSection;