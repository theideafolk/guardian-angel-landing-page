/**
 * Guardian Angel - Problem Recognition Section
 * 
 * This section highlights the energy dilemma that consumers face
 * Content from landing-page-copy.md
 * Updated text to all lowercase style
 */

import React from 'react';
import { Container, Section } from '../components/ui';
import { useIntersectionObserver } from '../utils/animations';

const ProblemSection: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  const animationClass = isIntersecting 
    ? 'opacity-100 translate-y-0 transition-all duration-700' 
    : 'opacity-0 translate-y-8 transition-all duration-700';
  
  return (
    <Section id="problem" backgroundClassName="bg-white">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={animationClass}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-800 mb-8 tracking-tight lowercase">
            energy uncertainty is the new normal
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-primary-700 mb-6 lowercase">
              power outages are increasing. grid failures are sudden. traditional backups fail when you need them most.
            </p>
            <p className="text-lg md:text-xl text-primary-700 mb-10 lowercase">
              your home deserves better. your business can't wait. our planet needs solutions now.
            </p>
          </div>
          
          {/* Visual contrast element */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-100 p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 lowercase">traditional energy backup</h3>
              <ul className="text-left space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  <span className="lowercase">unpredictable performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  <span className="lowercase">environmental concerns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  <span className="lowercase">safety risks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  <span className="lowercase">resource scarcity</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-secondary-200 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary-800 mb-4 lowercase">Guardian Angel protection</h3>
              <ul className="text-left space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span className="lowercase">reliable performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span className="lowercase">eco-friendly technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span className="lowercase">enhanced safety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span className="lowercase">abundant resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProblemSection;