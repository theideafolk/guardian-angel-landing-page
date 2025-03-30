/**
 * Guardian Angel - Solution Introduction Section
 * 
 * This section introduces the sodium-ion technology solution
 * Content from landing-page-copy.md
 * Added product visualization image
 * Updated text to all lowercase style
 * Updated to use local lithium-ion-battery.jpg image
 */

import React from 'react';
import { Container, Section, Button, GlassCard } from '../components/ui';
import { useIntersectionObserver } from '../utils/animations';

const SolutionSection: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  const animationClass = isIntersecting 
    ? 'opacity-100 translate-y-0 transition-all duration-700' 
    : 'opacity-0 translate-y-8 transition-all duration-700';
  
  return (
    <Section 
      id="solution" 
      backgroundClassName="bg-gradient-to-b from-white to-secondary-100 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-16 -top-16 w-64 h-64 bg-primary-100 rounded-full opacity-20"></div>
        <div className="absolute right-10 bottom-32 w-32 h-32 bg-accent-100 rounded-full opacity-20"></div>
      </div>
      
      <div ref={ref as React.RefObject<HTMLDivElement>} className={animationClass}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-800 mb-6 tracking-tight lowercase">
              sodium-ion. superior protection.
            </h2>
            <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto lowercase">
              Guardian Angel uses breakthrough sodium-ion technology. it's not just an alternative. it's better.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="bg-white/30 backdrop-blur-sm p-6 rounded-lg shadow-md flex items-center justify-center">
              <div className="aspect-square w-full max-w-md rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/lithium-ion-battery.jpg" 
                  alt="Guardian Angel sodium-ion storage system"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Key Points */}
            <div className="space-y-8">
              <h3 className="text-2xl font-medium text-primary-800 lowercase">three key advantages</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-700 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-800 mb-1 lowercase">abundant resources</h4>
                    <p className="text-primary-700 lowercase">uses sodium: earth's 6th most abundant element</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-700 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-800 mb-1 lowercase">environmentally responsible</h4>
                    <p className="text-primary-700 lowercase">zero rare earth minerals</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-700 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-primary-800 mb-1 lowercase">growing market</h4>
                    <p className="text-primary-700 lowercase">26.1% market growth through 2034</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  variant="primary" 
                  size="large"
                  className="tracking-wider lowercase"
                >
                  see the difference
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SolutionSection;