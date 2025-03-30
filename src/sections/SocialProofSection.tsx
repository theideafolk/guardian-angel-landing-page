/**
 * Guardian Angel - Social Proof & Validation Section
 * 
 * This section provides industry validation and research about sodium-ion technology
 * Content from landing-page-copy.md
 * Added imagery for market validation and industry insights
 * Updated text to all lowercase style
 */

import React from 'react';
import { Container, Section, GlassCard } from '../components/ui';
import { TrendingUp, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../utils/animations';

const SocialProofSection: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  const animationClass = isIntersecting 
    ? 'opacity-100 translate-y-0 transition-all duration-700' 
    : 'opacity-0 translate-y-8 transition-all duration-700';
  
  return (
    <Section 
      id="social-proof" 
      backgroundClassName="bg-secondary-200"
    >
      <div ref={ref as React.RefObject<HTMLDivElement>} className={animationClass}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-800 mb-6 tracking-tight lowercase">
            the future is sodium-ion
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Market Projection Box */}
          <div className="bg-white rounded-lg p-8 shadow-md h-[420px] flex flex-col">
            <h3 className="text-2xl font-semibold text-primary-800 mb-6 lowercase">market projection</h3>
            
            <div className="relative pt-5 flex-grow">
              <div className="flex items-end h-56 mt-4 space-x-8">
                <div className="relative flex flex-col items-center flex-grow pb-5">
                  <div className="relative w-full bg-primary-200 rounded-t h-32"></div>
                  <span className="absolute bottom-0 text-xs font-semibold text-primary-700">2023</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5">
                  <div className="relative w-full bg-primary-400 rounded-t h-40"></div>
                  <span className="absolute bottom-0 text-xs font-semibold text-primary-700">2025</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5">
                  <div className="relative w-full bg-primary-600 rounded-t h-48"></div>
                  <span className="absolute bottom-0 text-xs font-semibold text-primary-700">2027</span>
                </div>
                <div className="relative flex flex-col items-center flex-grow pb-5">
                  <div className="relative w-full bg-primary-800 rounded-t h-56"></div>
                  <span className="absolute bottom-0 text-xs font-semibold text-primary-700">2030</span>
                </div>
              </div>
              <div className="absolute top-0 left-0 right-0 flex justify-between px-8">
                <span className="text-xs font-semibold text-primary-700 lowercase">market share</span>
                <span className="text-xs font-semibold text-primary-700">26.1% CAGR</span>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-primary-700 italic lowercase">
                industry research confirms: sodium-ion technology is set to disrupt the energy storage market by 2027.
              </p>
              <p className="text-xs text-primary-600 mt-2 lowercase">
                source: Power Technology, 2024
              </p>
            </div>
          </div>
          
          {/* Expert Quote */}
          <div className="bg-white rounded-lg p-8 shadow-md h-[420px] flex flex-col">
            <h3 className="text-2xl font-semibold text-primary-800 mb-6 lowercase">expert insights</h3>
            
            <blockquote className="border-l-4 border-accent-500 pl-4 py-2 mb-6">
              <p className="text-lg text-primary-700 italic mb-4 lowercase">
                "sodium-ion offers comparable performance with enhanced safety and lower environmental impact."
              </p>
              <footer className="text-sm text-primary-600 lowercase">
                source: McKinsey, 2023
              </footer>
            </blockquote>
            
            <div className="mt-auto space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-primary-700 lowercase">validated by independent laboratory testing</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-primary-700 lowercase">endorsed by sustainability certifications</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-primary-700 lowercase">competitive performance metrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SocialProofSection;